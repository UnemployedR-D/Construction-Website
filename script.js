const hero = document.querySelector('.hero');
const video = document.querySelector('#hero-video');
const videoToggle = document.querySelector('#video-toggle');
const videoToggleLabel = document.querySelector('#video-toggle-label');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');

const updateZoom = () => {
  if (!hero) return;
  const scrollableDistance = Math.max(1, hero.offsetHeight - window.innerHeight);
  const progress = Math.min(1, Math.max(0, -hero.getBoundingClientRect().top / scrollableDistance));
  hero.querySelector('.hero-stage')?.style.setProperty('--zoom', String(1 + progress * 0.24));
};

window.addEventListener('scroll', updateZoom, { passive: true });
window.addEventListener('resize', updateZoom);
updateZoom();

videoToggle?.addEventListener('click', () => {
  if (!video) return;
  if (video.paused) {
    video.play().catch(() => { videoToggleLabel.textContent = 'Playback unavailable'; });
    videoToggle.classList.remove('is-paused');
    videoToggle.setAttribute('aria-label', 'Pause background video');
    if (videoToggleLabel) videoToggleLabel.textContent = 'Pause video';
  } else {
    video.pause();
    videoToggle.classList.add('is-paused');
    videoToggle.setAttribute('aria-label', 'Play background video');
    if (videoToggleLabel) videoToggleLabel.textContent = 'Play video';
  }
});

const syncVideoControl = () => {
  videoToggle.classList.toggle('is-paused', video.paused);
  videoToggle.setAttribute('aria-label', video.paused ? 'Play background video' : 'Pause background video');
  videoToggleLabel.textContent = video.paused ? 'Play video' : 'Pause video';
};
video.addEventListener('play', syncVideoControl);
video.addEventListener('pause', syncVideoControl);
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) video.pause();
syncVideoControl();

document.querySelector('#decision-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const decision = document.querySelector('#decision').value;
  const note = document.querySelector('#decision-note').value.trim();
  document.querySelector('#decision-result').textContent = `${decision} recorded for this demo${note ? ': ' + note : '.'} No assignment was sent. Refreshing clears this decision.`;
});

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
