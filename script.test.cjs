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
  });
  return elements.get(key);
}
vm.runInNewContext(fs.readFileSync(__dirname + '/script.js', 'utf8'), {
  document: { querySelector: element, addEventListener() {} },
  window: { innerHeight: 800, addEventListener() {}, matchMedia: () => ({ matches: false }) },
});
for (const choice of ['Approve', 'Modify', 'Escalate']) {
  element('#decision').value = choice;
  element('#decision-note').value = '<b>Confirm access</b>';
  let prevented = false;
  element('#decision-form').handlers.submit({ preventDefault() { prevented = true; } });
  assert(prevented);
  assert(element('#decision-result').textContent.startsWith(choice + ' recorded'));
  assert(element('#decision-result').textContent.includes('No assignment was sent.'));
  assert(element('#decision-result').textContent.includes('<b>Confirm access</b>'));
}
assert.equal(element('#video-toggle-label').textContent, 'Play video');
console.log('Demo decisions and paused video label pass.');
