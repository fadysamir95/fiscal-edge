/* ==========================================================================
   Fiscal Edge — site-level scripts
   - Contact form validation + submission handling
   - In-page anchor smooth scrolling
   ========================================================================== */
(function () {
  'use strict';

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
        window.scrollTo({ top: top, behavior: 'smooth' });
        history.replaceState(null, '', hash);
      });
    });
  }

  /* --- Contact form --- */
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

      /* Provide a genuinely functional submission path for a static site:
         open WhatsApp with a pre-filled inquiry, plus email fallback. */
      var whatsapp = form.getAttribute('data-whatsapp') || '201234567890';
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
      var mailUrl = 'mailto:info@fiscal-edge.org?subject=' + subject + '&body=' + body;

      if (messages) {
        messages.className = 'form-messages success';
        messages.innerHTML = '<strong>Thank you, ' + data.name.split(' ')[0] + '.</strong> Your inquiry has been prepared. ' +
          'We will get back to you as soon as possible.';
      }

      form.reset();
      form.querySelectorAll('.form-group').forEach(function (g) { g.classList.remove('has-error'); });

      /* Open the direct channel. If it is blocked, the success message + email
         link still give the client a working route. */
      window.open(waUrl, '_blank', 'noopener');
      setTimeout(function () {
        window.location.href = mailUrl;
      }, 400);
    });

    /* Clear error state while the user fixes a field */
    form.querySelectorAll('input, select, textarea').forEach(function (field) {
      field.addEventListener('input', function () { setError(field, false); });
      field.addEventListener('change', function () { setError(field, false); });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initAnchorScroll();
    initContactForm();
  });
})();