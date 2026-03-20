(() => {
  const nav    = document.getElementById('nav');
  const toggle = document.querySelector('.nav-toggle');
  const year   = document.getElementById('year');
  const header = document.querySelector('.site-header');

  if (year) year.textContent = new Date().getFullYear();

  // Sombra no header ao rolar
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
  }

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

  // Animação de entrada com IntersectionObserver
  if ('IntersectionObserver' in window) {
    document.documentElement.classList.add('js-loaded');

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -32px 0px' }
    );

    const STAGGER_COLS      = 4;   // max number of items per row for stagger
    const STAGGER_DELAY_MS  = 80;  // ms delay between successive items in a row

    document.querySelectorAll('.reveal').forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i % STAGGER_COLS, STAGGER_COLS - 1) * STAGGER_DELAY_MS}ms`;
      io.observe(el);
    });
  }
})();
