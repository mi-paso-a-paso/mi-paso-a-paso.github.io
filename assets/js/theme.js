document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  function setTheme(theme) {
    localStorage.setItem('theme', theme);
    htmlElement.setAttribute('data-theme', theme);
  }

  function switchTheme() {
    const currentTheme = localStorage.getItem('theme');
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
  }

  themeToggle.onclick = () => switchTheme();
  setTheme(localStorage.getItem('theme') || 'light');
})