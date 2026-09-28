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

  // Fixed chat button, on every page. The ?text= half of the href is rebuilt
  // whenever the language changes, so an Arabic visitor opens an Arabic chat.
  function initWhatsAppFab() {
    var fab = document.querySelector('.fpe-whatsapp-fab');
    if (!fab) return;

    var number = (fab.getAttribute('href') || '').match(/wa\.me\/(\d+)/);
    if (!number) return;

    function paint() {
      var arabic = document.documentElement.getAttribute('dir') === 'rtl';
      var text = fab.getAttribute(arabic ? 'data-wa-ar' : 'data-wa-en');
      if (!text) return;
      fab.setAttribute(
        'href',
        'https://wa.me/' + number[1] + '?text=' + encodeURIComponent(text)
      );
    }

    paint();
    document.addEventListener('fpe:languagechange', paint);
  }

  // Translate one string through the Arabic dictionary when the page is in
  // Arabic. Falls back to the English it was given.
  function t(text) {
    var api = window.FiscalEdgeI18n;
    return api && api.t ? api.t(text) : text;
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

  /* --- Contact form ---
     There is no server behind this form. The visit is handed straight to
     WhatsApp with their answers pre-filled, and the email link in the
     confirmation stays available as a fallback. */

  /* The hand-off is made by clicking a real link rather than by calling
     window.open(). window.open() returns null whenever "noopener" appears in
     the features string -- the HTML standard says so outright, and every
     browser follows it -- so testing that return value cannot detect a popup
     block and instead reported every successful hand-off as one. A link is
     also what iOS Safari wants here: it only follows the tab opened by the
     very gesture that submitted the form. */
  function openHandOff(url) {
    var a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.hidden = true;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  function postForm(form, data) {
    var whatsapp = (form.getAttribute('data-whatsapp') || '').replace(/\D/g, '');
    if (!whatsapp) {
      // t() is what keeps the key in the dictionary; the English text rides
      // along on the error as well, so render() can translate it afresh each
      // time the message is shown. Without that, a visitor who switches
      // language after the failure keeps reading the old language.
      var err = new Error(t('WhatsApp is not configured for this form.'));
      err.key = 'WhatsApp is not configured for this form.';
      return Promise.reject(err);
    }

    var lines = ['*New inquiry — fiscal-edge.org*', ''];
    lines.push('Name: ' + data.name);
    if (data.company) lines.push('Company: ' + data.company);
    lines.push('Email: ' + data.email);
    if (data.phone) lines.push('Phone: ' + data.phone);
    lines.push('Service: ' + data.service);
    lines.push('');
    lines.push(data.message);

    var body = encodeURIComponent(lines.join('\n'));
    var waUrl = 'https://wa.me/' + whatsapp + '?text=' + body;
    var mailUrl = 'mailto:info@fiscal-edge.org?subject=' +
      encodeURIComponent('Inquiry via fiscal-edge.org — ' + data.name) +
      '&body=' + body;

    // No popup-blocked branch here: with no way to observe the new tab, any
    // complaint about it would be a guess, and a wrong one.
    openHandOff(waUrl);

    return Promise.resolve({ ok: true, mailUrl: mailUrl });
  }

  function initContactForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;

    var messages = document.getElementById('form-messages');
    var lastMessage = null;

    /* The message is assembled by script rather than translated from markup,
       so it has to be rebuilt by hand whenever the language changes. Keeping
       the last one means a visitor who submits in English and then switches to
       Arabic does not sit looking at a stale English confirmation. */
    function render(data, mailUrl, err) {
      lastMessage = { data: data, mailUrl: mailUrl, err: err };
      if (!messages) return;
      if (err) {
        // err.key is the English, so this re-translates on a language switch
        // instead of leaving the old language on screen.
        var reason = err.key ? t(err.key) : err.message;
        messages.className = 'form-messages error';
        messages.innerHTML = '<strong>' + escapeHtml(reason) + '</strong> ' +
          t('Please email us directly at') + ' ' +
          '<a href="mailto:info@fiscal-edge.org">info@fiscal-edge.org</a>.';
        return;
      }
      messages.className = 'form-messages success';
      messages.innerHTML = '<strong>' + t('Thank you,') + ' ' + escapeHtml(data.name.split(' ')[0]) + '.</strong> ' +
        t('Your message is ready — WhatsApp should open in a new tab.') + ' ' +
        t('Prefer email?') + ' ' +
        '<a href="' + mailUrl + '">info@fiscal-edge.org</a>.';
    }

    document.addEventListener('fpe:languagechange', function () {
      if (lastMessage) render(lastMessage.data, lastMessage.mailUrl, lastMessage.err);
    });

    function setError(field, show) {
      var group = field.closest('.form-group');
      if (!group) return;
      group.classList.toggle('has-error', show);
      if (show) {
        field.setAttribute('aria-invalid', 'true');
        var err = group.querySelector('.field-error');
        if (err) err.textContent = field.dataset.error || t('Please complete this field.');
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
          messages.textContent = t('Please review the highlighted fields and try again.');
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
      if (btn) { btn.disabled = true; btn.textContent = t('Opening WhatsApp…'); }

      postForm(form, data).then(function (res) {
        clearErrors();
        form.reset();
        render(data, res.mailUrl, null);
      }).catch(function (err) {
        render(data, null, err);
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
    initWhatsAppFab();
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