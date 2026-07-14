/**
 * Runs in <head> — sets html[lang] from ?lang= or localStorage before first paint.
 */
(function () {
  try {
    var q = new URLSearchParams(window.location.search).get('lang');
    var lang = (q === 'gr' || q === 'en') ? q : localStorage.getItem('locbusters-lang');
    document.documentElement.lang = lang === 'gr' ? 'el' : 'en';
    if (q === 'gr' || q === 'en') {
      localStorage.setItem('locbusters-lang', q);
    }
  } catch (e) {
    /* storage / URL unavailable */
  }
})();
