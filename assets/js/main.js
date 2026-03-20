(() => {
  const nav = document.getElementById('nav');
  const toggle = document.querySelector('.nav-toggle');
  const year = document.getElementById('year');

  if (year) year.textContent = new Date().getFullYear();

  if (!nav || !toggle) return;

  const setExpanded = (expanded) => {
    toggle.setAttribute('aria-expanded', String(expanded));
    nav.classList.toggle('is-open', expanded);
  };

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    setExpanded(!expanded);
  });

  // Fecha o menu ao clicar em um link (mobile)
  nav.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', () => setExpanded(false));
  });

  // Fecha ao pressionar ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setExpanded(false);
  });
})();
