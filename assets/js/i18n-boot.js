/**
 * Runs in <head> — sets html[lang] from localStorage before first paint.
 */
(function () {
  try {
    document.documentElement.lang =
      localStorage.getItem('locbusters-lang') === 'gr' ? 'el' : 'en';
  } catch (e) {
    /* localStorage unavailable */
  }
})();
