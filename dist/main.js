!(function () {
  function e(e, t) { return Math.floor(Math.random() * (t - e + 1)) + e; } class t {
    constructor(e) { this.element = e; }

    setPosition() { const t = e(1, 16); this.element.querySelector(`[data-cell="${t}"]`).classList.add('whith_gobline'); }

    cleanPosition() { this.element.querySelector('.whith_gobline').classList.remove('whith_gobline'); }

    changePosition() { const t = e(1, 16); const n = this.element.querySelector(`[data-cell="${t}"]`); this.cleanPosition(), n.classList.add('whith_gobline'); }
  }document.addEventListener('DOMContentLoaded', (() => { const e = new t(document.querySelector('.table')); e.setPosition(), setInterval((() => { e.changePosition(); }), 1e3); }));
}());
