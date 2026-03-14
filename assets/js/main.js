(function () {
  var toggle = document.getElementById('theme-toggle');
  var html = document.documentElement;

  function isDark() {
    return html.classList.contains('dark');
  }

  function updateToggle() {
    toggle.textContent = isDark() ? '\u2600\uFE0F' : '\uD83C\uDF19';
  }

  function setTheme(dark) {
    if (dark) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    updateToggle();
  }

  updateToggle();

  toggle.addEventListener('click', function () {
    setTheme(!isDark());
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches);
    }
  });
})();
