(function() {
  try {
    const KEY = 'theme';
    const stored = localStorage.getItem(KEY);
    if (stored === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark'); // oscuro por defecto
    }
  } catch (e) {}
})();

window.toggleTheme = function () {
  const html = document.documentElement;
  const isDark = html.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
};




