// Run with: node script.test.cjs
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const elements = new Map();
function element(key) {
  if (!elements.has(key)) elements.set(key, {
    handlers: {}, style: { setProperty() {} }, classList: { toggle() {}, remove() {}, add() {} },
    addEventListener(type, fn) { this.handlers[type] = fn; },
    setAttribute() {}, querySelectorAll: () => [], querySelector: () => element('stage'),
    getBoundingClientRect: () => ({ top: 0 }), offsetHeight: 1200, paused: true,
    value: '', pause() {}, play: () => Promise.resolve(),
    showModal() { this.open = true; }, close() { this.open = false; },
  });
  return elements.get(key);
}
vm.runInNewContext(fs.readFileSync(__dirname + '/script.js', 'utf8'), {
  document: { querySelector: element, querySelectorAll: () => [], addEventListener() {} },
  window: { innerHeight: 800, addEventListener() {}, matchMedia: () => ({ matches: false }) },
});
const animations = [];
let mediaQuery;
const gsap = {
  registerPlugin(plugin) { assert.equal(plugin, scrollTrigger); },
  matchMedia: () => ({ add(query, setup) { mediaQuery = query; setup(); } }),
  from(target, options) { animations.push({ target, options }); },
};
const scrollTrigger = {};
vm.runInNewContext(fs.readFileSync(__dirname + '/script.js', 'utf8'), {
  document: { querySelector: element, querySelectorAll: (selector) => selector === '[data-reveal]' ? [element('reveal')] : [], addEventListener() {} },
  window: { gsap, ScrollTrigger: scrollTrigger },
});
assert.equal(mediaQuery, '(prefers-reduced-motion: no-preference)');
assert.equal(animations.length, 4);
assert.equal(animations[1].options.scrollTrigger.once, true);
assert.equal(animations[1].options.scrollTrigger.trigger, element('reveal'));
assert.equal(animations[1].options.clearProps, 'all');
console.log('Missing GSAP fallback and reduced-motion-scoped scroll setup pass.');

let contactSubmitPrevented = false;
element('#contact-form').handlers.submit({ preventDefault() { contactSubmitPrevented = true; } });
assert.equal(contactSubmitPrevented, true);
const html = fs.readFileSync(__dirname + '/index.html', 'utf8');
assert.match(html, /type="submit" disabled/);
assert.match(html, /id="contact-email"[^>]*type="email"/);
assert.match(html, /id="contact-phone"[^>]*type="tel"/);
console.log('Contact form stays disconnected and uses email and phone input types.');

assert.match(html, /id="watch-demo" href="#demo"/);
assert.match(html, /id="walkthrough-video" controls playsinline preload="none"/);
assert(!html.includes('id="demo-dialog"'));
assert(fs.existsSync(__dirname + '/public/assets/theia-walkthrough.mp4'));
console.log('Hero links to the inline video; native controls and on-demand loading are configured.');

const panels = [0, 1, 2].map(i => ({ hidden: i !== 0 }));
const choices = [0, 1, 2].map(() => ({ handlers: {}, classList: { toggle() {} }, setAttribute(key, value) { this[key] = value; }, addEventListener(type, fn) { this.handlers[type] = fn; } }));
const pauseControl = { handlers: {}, setAttribute() {}, addEventListener(type, fn) { this.handlers[type] = fn; } };
const count = {};
let advance;
const preference = { matches: false, addEventListener() {} };
const section = { querySelectorAll: selector => selector === '[data-review-panel]' ? panels : choices, querySelector: selector => selector === '.review-pause' ? pauseControl : count, addEventListener() {} };
vm.runInNewContext(fs.readFileSync(__dirname + '/script.js', 'utf8'), {
  document: { querySelector: key => key === '#review' ? section : null, querySelectorAll: selector => selector === '#capture, #review, #intelligence' ? [section] : [], addEventListener() {}, hidden: false },
  window: { matchMedia: () => preference, clearInterval() { advance = null; }, setInterval(fn) { advance = fn; return 1; } },
});
advance();
assert.equal(panels[1].hidden, false);
assert.equal(panels[0].hidden, true);
advance(); advance();
assert.equal(panels[0].hidden, false);
choices[2].handlers.click();
assert.equal(panels[2].hidden, false);
assert.equal(choices[2]['aria-pressed'], 'true');
assert.equal(advance, null);
assert.equal(pauseControl.textContent, 'Play slides');
pauseControl.handlers.click();
assert.equal(typeof advance, 'function');
console.log('Carousel cycles through three previews, wraps, selects manually, and pauses/resumes.');
