/* ==========================================================================
   Fiscal Edge — language runtime
   --------------------------------------------------------------------------
   Swaps the page between English (the source HTML) and Arabic (i18n-ar.js).

   HOW IT WORKS — deliberately the simplest thing that can work:
     1. On load and on every toggle, walk the DOM.
     2. For each text node, look its text up in the Arabic dictionary.
     3. A hit swaps the text and remembers the original in a WeakMap.
     4. Switching back to English just restores what the WeakMap remembered.

   There is no build step and no generated keys. Two optional attributes exist
   for the rare cases the dictionary cannot express on its own:
     data-ar="..."        pin one translation onto an element
     data-i18n-ignore     leave an element's text and attributes in English

   Events (both on `document`):
     fpe:beforetranslate  — fired before any text is swapped. main.js uses it
                            to undo the per-character heading animation, which
                            would otherwise shred Arabic into single letters.
     fpe:languagechange   — fired after the swap. Carries { lang }.
   ========================================================================== */

(function (window, document) {
  'use strict';

  var STORE_KEY = 'fpe:lang';
  var DICT = window.FPE_AR || {};
  var SKIP = {
    SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEMPLATE: 1,
    CODE: 1, PRE: 1, SVG: 1
  };
  // Elements whose attributes are translated but whose text belongs to the
  // user, so it must be left alone. An <iframe> has no text of its own, but
  // its title is what a screen reader announces, so it stays in ATTRS.
  var NO_TEXT = { TEXTAREA: 1, IFRAME: 1 };
  var ATTRS = ['alt', 'placeholder', 'aria-label', 'title', 'data-error'];
  var META_KEYS = {
    description: 1, 'og:title': 1, 'og:description': 1, 'og:image:alt': 1,
    'twitter:title': 1, 'twitter:description': 1
  };

  // text node -> the English text it held before we touched it
  var originalText = new WeakMap();
  // element  -> { attributeName: englishValue }
  var originalAttrs = new WeakMap();

  function squash(value) {
    return String(value === null || value === undefined ? '' : value).replace(/\s+/g, ' ').trim();
  }

  function isArabic() {
    return document.documentElement.getAttribute('dir') === 'rtl';
  }

  function fire(name, detail) {
    var ev;
    try {
      ev = new CustomEvent(name, { detail: detail, bubbles: true });
    } catch (e) {
      ev = document.createEvent('CustomEvent');
      ev.initCustomEvent(name, true, false, detail);
    }
    document.dispatchEvent(ev);
  }

  // The Arabic for one piece of text, or null to leave it alone.
  function lookup(text, el) {
    if (!squash(text)) return null;
    if (el && el.closest && el.closest('[data-i18n-ignore]')) return null;

    // Escape hatch: <span data-ar="..."> pins one specific translation onto an
    // element, for the rare case where the same English words need a different
    // Arabic depending on where they sit (e.g. a heading word that also
    // appears in the navigation). Almost never needed.
    var forced = el && el.getAttribute ? el.getAttribute('data-ar') : null;
    if (forced) return forced;

    var hit = DICT[squash(text)];
    return typeof hit === 'string' && hit !== '' ? hit : null;
  }

  function handleText(node, toArabic) {
    var value = node.nodeValue;
    if (!value || !value.trim()) return;

    var remembered = originalText.get(node);
    var source = remembered === undefined ? value : remembered;
    var ar = toArabic ? lookup(source, node.parentElement) : null;

    if (ar) {
      if (remembered === undefined) originalText.set(node, source);
      // Keep whatever padding the markup had, so a heading still reads
      // "…يركزون على…" instead of running the two lines together at the <br>.
      var lead = /^\s*/.exec(source)[0];
      var tail = /\s*$/.exec(source)[0];
      node.nodeValue = lead + ar + tail;
    } else if (remembered !== undefined) {
      node.nodeValue = remembered;
      originalText.delete(node);
    }
  }

  function handleAttrs(el, toArabic, names) {
    if (el.hasAttribute && el.hasAttribute('data-i18n-ignore')) return;
    for (var i = 0; i < names.length; i++) {
      var name = names[i];
      var live = el.getAttribute(name);
      if (live === null || !squash(live)) continue;

      var remembered = originalAttrs.get(el);
      remembered = remembered === undefined ? {} : remembered;
      if (remembered[name] === undefined) {
        remembered[name] = live;
        originalAttrs.set(el, remembered);
      }

      var ar = toArabic ? lookup(remembered[name], el) : null;
      if (ar) el.setAttribute(name, ar);
      else el.setAttribute(name, remembered[name]);
    }
  }

  function visit(el, toArabic) {
    if (SKIP[el.nodeName]) return;
    handleAttrs(el, toArabic, ATTRS);
    if (NO_TEXT[el.nodeName]) return;

    for (var i = 0; i < el.childNodes.length; i++) {
      var child = el.childNodes[i];
      if (child.nodeType === 3) handleText(child, toArabic);
      else if (child.nodeType === 1) visit(child, toArabic);
    }
  }

  function visitHead(toArabic) {
    var title = document.querySelector('head > title');
    if (title) handleText(title.firstChild, toArabic);

    var metas = document.querySelectorAll('meta[name], meta[property]');
    for (var i = 0; i < metas.length; i++) {
      var meta = metas[i];
      var key = (meta.getAttribute('name') || meta.getAttribute('property') || '').toLowerCase();
      if (META_KEYS[key]) handleAttrs(meta, toArabic, ['content']);
    }
  }

  function apply(lang) {
    var toArabic = lang === 'ar';

    // Put the heading animation's markup back before swapping any text,
    // otherwise it would be working one character at a time.
    fire('fpe:beforetranslate', { lang: lang });

    document.documentElement.setAttribute('lang', toArabic ? 'ar' : 'en');
    document.documentElement.setAttribute('dir', toArabic ? 'rtl' : 'ltr');

    visitHead(toArabic);
    visit(document.body || document.documentElement, toArabic);

    syncButton();
    try { window.localStorage.setItem(STORE_KEY, lang); } catch (e) { /* private mode */ }
    fire('fpe:languagechange', { lang: lang });
  }

  function stored() {
    try {
      return window.localStorage.getItem(STORE_KEY) === 'ar' ? 'ar' : 'en';
    } catch (e) {
      return 'en';
    }
  }

  function syncButton() {
    var btn = document.querySelector('.rtl-ltr-switcher-btn');
    if (!btn) return;
    var showArabic = !isArabic();          // in English, offer Arabic
    var ltr = btn.querySelector('.ltr');
    var rtl = btn.querySelector('.rtl');
    if (ltr) ltr.classList.toggle('show', showArabic);
    if (rtl) rtl.classList.toggle('show', !showArabic);
    btn.setAttribute('aria-label', showArabic ? 'التبديل إلى العربية' : 'التبديل إلى الإنجليزية');
  }

  function toggle() {
    apply(isArabic() ? 'en' : 'ar');
  }

  function start() {
    var btn = document.querySelector('.rtl-ltr-switcher-btn');
    if (btn) btn.addEventListener('click', toggle);
    apply(stored());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }

  window.FiscalEdgeI18n = {
    apply: apply,
    toggle: toggle,
    current: function () { return isArabic() ? 'ar' : 'en'; },
    dictionarySize: function () { return Object.keys(DICT).length; },
    // Translate one string. Needed for text the page builds at runtime
    // (the contact form's success / error messages), which the DOM walk can
    // never reach because it does not exist yet when the walk runs.
    // Honours the current language, so the caller can write plain English
    // and get English back until the visitor switches.
    t: function (text) {
      if (!isArabic()) return text;
      return lookup(text, null) || text;
    }
  };
})(window, document);
