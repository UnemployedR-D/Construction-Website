const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  nav?.classList.toggle('is-open', !isOpen);
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuButton?.setAttribute('aria-expanded', 'false');
  nav.classList.remove('is-open');
}));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    menuButton?.setAttribute('aria-expanded', 'false');
    nav?.classList.remove('is-open');
  }
});

// Content stays visible if motion is disabled or the animation scripts fail to load.
if (window.gsap && window.ScrollTrigger) {
  const gsap = window.gsap;
  gsap.registerPlugin(window.ScrollTrigger);
  gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
    gsap.from('.theia-hero-content > *', {
      y: 22, autoAlpha: 0, duration: 1, stagger: 0.12, ease: 'power2.out', clearProps: 'all',
    });
    document.querySelectorAll('[data-reveal]').forEach((element) => {
      gsap.from(element, {
        y: 32, autoAlpha: 0, duration: 0.85, ease: 'power2.out', clearProps: 'all',
        scrollTrigger: { trigger: element, start: 'top 92%', once: true },
      });
    });
    gsap.from('.note-canvas .floating-note', {
      y: 24, duration: 1, stagger: 0.15, ease: 'power2.out',
      scrollTrigger: { trigger: '.note-canvas', start: 'top 80%', once: true },
    });
    gsap.from('.preview-stats > div', {
      y: 15, autoAlpha: 0, duration: 0.6, stagger: 0.12, clearProps: 'all',
      scrollTrigger: { trigger: '.overview-canvas', start: 'top 72%', once: true },
    });
  });
}

// Keep contact details on the page until a delivery destination is configured.
document.querySelector('#contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
});

document.querySelectorAll('#capture, #review, #intelligence').forEach((reviewSection) => {
  const reviewPanels = Array.from(reviewSection.querySelectorAll('[data-review-panel]'));
  if (!reviewPanels.length) return;
  const selectors = Array.from(reviewSection.querySelectorAll('[data-review-select], [data-carousel-select]'));
  const pauseButton = reviewSection.querySelector('.review-pause');
  const counter = reviewSection.querySelector('.review-slide-count');
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  let active = 0;
  let paused = motionPreference.matches;
  let timer;
  const showPanel = (index) => {
    active = index;
    reviewPanels.forEach((panel, i) => { panel.hidden = i !== active; });
    selectors.forEach((button, i) => {
      button.classList.toggle('is-emphasized', i === active);
      button.setAttribute('aria-pressed', String(i === active));
    });
    counter.textContent = `0${active + 1} / 03`;
    if (!motionPreference.matches && window.gsap) {
      window.gsap.fromTo(reviewPanels[active], { x: 35, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.5, ease: 'power2.out', overwrite: true, clearProps: 'all',
      });
    }
  };
  const stop = () => { window.clearInterval(timer); };
  const start = () => {
    stop();
    if (!paused && !document.hidden) timer = window.setInterval(() => showPanel((active + 1) % reviewPanels.length), 6000);
  };
  const updatePause = () => {
    pauseButton.textContent = paused ? 'Play slides' : 'Pause slides';
    pauseButton.setAttribute('aria-pressed', String(paused));
    start();
  };
  selectors.forEach((button, index) => button.addEventListener('click', () => {
    showPanel(index);
    paused = true;
    updatePause();
  }));
  pauseButton.addEventListener('click', () => { paused = !paused; updatePause(); });
  reviewSection.addEventListener('pointerenter', stop);
  reviewSection.addEventListener('pointerleave', start);
  reviewSection.addEventListener('focusin', () => { paused = true; updatePause(); });
  document.addEventListener('visibilitychange', start);
  motionPreference.addEventListener('change', () => { paused = motionPreference.matches; updatePause(); });
  updatePause();
});
