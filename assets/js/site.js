/* ==========================================================================
   Fiscal Edge — site-level scripts
   - Contact form validation + submission (FormSubmit endpoint with
     WhatsApp/mailto fallback for deployments without a form backend)
   - In-page anchor smooth scrolling (reduced-motion aware)
   - Auto-updating copyright year
   - Reduced-motion guards for GSAP / Swiper / autoplay video
   ========================================================================== */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /* --- Anchor smooth scroll (with sticky header offset) --- */
  function initAnchorScroll() {
    var header = document.querySelector('.header--sticky');
    var offset = header ? header.offsetHeight + 20 : 80;

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var hash = link.getAttribute('href');
        if (hash.length < 2) return;
        var target = document.querySelector(hash);
        if (!target) return;
        e.preventDefault();
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: reduceMotion ? 'auto' : 'smooth' });
        history.replaceState(null, '', hash);
      });
    });
  }

  /* --- Copyright year (keeps the footer from going stale) --- */
  function initYear() {
    var year = String(new Date().getFullYear());
    document.querySelectorAll('#year').forEach(function (el) {
      el.textContent = year;
    });
  }

  /* --- Contact form --- */
  function postForm(form, data) {
    var endpoint = form.getAttribute('action') || '';
    var ajaxEndpoint = form.getAttribute('data-ajax-endpoint') || '';

    /* FormSubmit configured (action URL contains the delivery inbox):
       send as JSON so the visitor stays on the page. */
    if (ajaxEndpoint) {
      return fetch(ajaxEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject: 'Inquiry via fiscal-edge.org — ' + data.name,
          name: data.name,
          company: data.company,
          email: data.email,
          phone: data.phone,
          service: data.service,
          message: data.message
        })
      }).then(function (res) {
        return res.json().then(function (j) {
          if (res.ok && String(j.success) === 'true') return { ok: true };
          var msg = (j && j.message) || ('Submission failed (status ' + res.status + ')');
          throw new Error(msg);
        });
      });
    }

    /* Formspree configured: send via fetch (progressive enhancement — the
       native action also works if JS fails). */
    if (/^https:\/\//.test(endpoint) && endpoint.indexOf('YOUR_FORM_ID') === -1) {
      return fetch(endpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      }).then(function (res) {
        if (res.ok) return { ok: true };
        return res.json().then(function (j) {
          var msg = (j && j.errors && j.errors[0] && j.errors[0].message) || ('Submission failed (status ' + res.status + ')');
          throw new Error(msg);
        });
      });
    }

    /* No backend configured yet: prepare a pre-filled WhatsApp message and
       show an email fallback link instead of hijacking the visitor's tab. */
    var whatsapp = form.getAttribute('data-whatsapp') || '';
    var subject = encodeURIComponent('Inquiry via fiscal-edge.org — ' + data.name);
    var bodyLines = [
      'New inquiry from the Fiscal Edge website:',
      '',
      'Name: ' + data.name,
      data.company ? 'Company: ' + data.company : '',
      'Email: ' + data.email,
      data.phone ? 'Phone: ' + data.phone : '',
      'Service of interest: ' + data.service,
      '',
      data.message
    ];
    var body = encodeURIComponent(bodyLines.filter(function (l) { return l !== ''; }).join('\n'));
    var waUrl = 'https://wa.me/' + whatsapp + '?text=' + body;
    var mailUrl = 'mailto:contact@fiscal-edge.org?subject=' + subject + '&body=' + body;

    window.open(waUrl, '_blank', 'noopener');
    return Promise.resolve({ ok: true, fallback: true, mailUrl: mailUrl });
  }

  function initContactForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;

    var messages = document.getElementById('form-messages');

    function setError(field, show) {
      var group = field.closest('.form-group');
      if (!group) return;
      group.classList.toggle('has-error', show);
      if (show) {
        field.setAttribute('aria-invalid', 'true');
        var err = group.querySelector('.field-error');
        if (err) err.textContent = field.dataset.error || 'Please complete this field.';
      } else {
        field.removeAttribute('aria-invalid');
      }
    }

    function clearErrors() {
      form.querySelectorAll('.form-group').forEach(function (g) { g.classList.remove('has-error'); });
      form.querySelectorAll('[aria-invalid]').forEach(function (f) { f.removeAttribute('aria-invalid'); });
    }

    function validate() {
      var valid = true;
      form.querySelectorAll('input, select, textarea').forEach(function (field) {
        if (field.hasAttribute('required') && field.value.trim() === '') {
          setError(field, true);
          valid = false;
        } else if (field.type === 'email' && field.value.trim() !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim())) {
          setError(field, true);
          valid = false;
        } else {
          setError(field, false);
        }
      });
      return valid;
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!validate()) {
        if (messages) {
          messages.className = 'form-messages error';
          messages.textContent = 'Please review the highlighted fields and try again.';
        }
        return;
      }

      var data = {
        name: form.querySelector('[name="name"]').value.trim(),
        company: form.querySelector('[name="company"]').value.trim(),
        email: form.querySelector('[name="email"]').value.trim(),
        phone: form.querySelector('[name="phone"]').value.trim(),
        service: form.querySelector('[name="service"]').value,
        message: form.querySelector('[name="message"]').value.trim()
      };

      var btn = form.querySelector('[type="submit"]');
      var btnText = btn ? btn.textContent : '';
      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }

      postForm(form, data).then(function (res) {
        clearErrors();
        form.reset();
        if (messages) {
          messages.className = 'form-messages success';
          if (res.fallback) {
            messages.innerHTML = '<strong>Thank you, ' + escapeHtml(data.name.split(' ')[0]) + '.</strong> ' +
              'Your inquiry has been prepared — a WhatsApp message should open. ' +
              'If it didn\u2019t, email us directly at ' +
              '<a href="' + res.mailUrl + '">contact@fiscal-edge.org</a>.';
          } else {
            messages.innerHTML = '<strong>Thank you, ' + escapeHtml(data.name.split(' ')[0]) + '.</strong> ' +
              'Your inquiry has been sent — we will get back to you as soon as possible.';
          }
        }
      }).catch(function (err) {
        if (messages) {
          messages.className = 'form-messages error';
          messages.textContent = 'Sorry, we couldn\u2019t send your message: ' + err.message +
            '. Please email us directly at contact@fiscal-edge.org.';
        }
      }).finally(function () {
        if (btn) { btn.disabled = false; btn.textContent = btnText; }
      });
    });

    /* Clear error state while the user fixes a field */
    form.querySelectorAll('input, select, textarea').forEach(function (field) {
      field.addEventListener('input', function () { setError(field, false); });
      field.addEventListener('change', function () { setError(field, false); });
    });
  }

  /* --- Reduced-motion guards (complement the CSS in site.css) --- */
  function initReducedMotion() {
    if (!reduceMotion) return;

    /* Pause autoplaying hero video -> the poster image is shown instead */
    document.querySelectorAll('video[autoplay]').forEach(function (v) {
      try { v.pause(); } catch (e) { /* noop */ }
    });

    var settle = function () {
      /* Fast-forward GSAP entry animations so content is never stuck hidden */
      if (window.gsap && window.gsap.globalTimeline) {
        window.gsap.globalTimeline.timeScale(1000);
      }
      /* Finish any scroll-triggered tweens already registered */
      if (window.ScrollTrigger && window.ScrollTrigger.getAll) {
        window.ScrollTrigger.getAll().forEach(function (st) {
          if (st && st.animation && st.animation.progress) {
            try { st.animation.progress(1); } catch (e) { /* noop */ }
          }
        });
      }
      /* Stop Swiper autoplay */
      document.querySelectorAll('.swiper').forEach(function (el) {
        var sw = el.swiper;
        if (sw && sw.autoplay) { try { sw.autoplay.stop(); } catch (e) { /* noop */ } }
      });
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', settle);
    } else {
      settle();
    }
    /* Catch sliders/animations initialized after initial load */
    window.addEventListener('load', function () { setTimeout(settle, 400); });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initAnchorScroll();
    initYear();
    initContactForm();
    initReducedMotion();
    initPreloaderCounter();
  });

  /* Finance-style preloader: count 0 -> 100% and keep the branded
     loader on screen for a minimum time, then hide it once the page
     has finished loading too. */
  function initPreloaderCounter() {
    var counter = document.querySelector('.fpe-loader-percent');
    if (!counter) return;
    var body = document.body;
    var start = null;
    var DURATION = 1400;
    var finished = false;
    var loadFired = false;
    window.addEventListener('load', function () {
      loadFired = true;
      if (finished) body.classList.add('loaded');
    });
    function tick(timestamp) {
      if (start === null) start = timestamp;
      var progress = Math.min(100, Math.round(((timestamp - start) / DURATION) * 100));
      counter.textContent = progress;
      if (progress >= 100) {
        finished = true;
        if (loadFired) body.classList.add('loaded');
        return;
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
})();