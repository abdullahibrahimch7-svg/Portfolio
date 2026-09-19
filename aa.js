document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();

  const revealItems = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  revealItems.forEach((item) => revealObserver.observe(item));

  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.desktop-nav');
  menuButton?.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('nav-open', !isOpen);
  });

  nav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton?.setAttribute('aria-expanded', 'false');
      nav.classList.remove('nav-open');
    });
  });

  document.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const bounds = card.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      card.style.setProperty('--pointer-x', `${(x + 0.5) * 100}%`);
      card.style.setProperty('--pointer-y', `${(y + 0.5) * 100}%`);
      card.style.transform = `perspective(900px) rotateX(${y * -4}deg) rotateY(${x * 5}deg) translateY(-8px)`;
    });
    card.addEventListener('pointerleave', () => {
      card.style.removeProperty('transform');
    });
  });

  const heroCard = document.querySelector('.hero-card');
  heroCard?.addEventListener('pointerenter', () => {
    heroCard.classList.remove('is-shining');
    void heroCard.offsetWidth;
    heroCard.classList.add('is-shining');
  });

  heroCard?.addEventListener('pointerleave', () => {
    heroCard.classList.remove('is-shining');
  });

});
