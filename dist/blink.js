var D = (a, s, e) => {
  if (!s.has(a))
    throw TypeError("Cannot " + e);
};
var t = (a, s, e) => (D(a, s, "read from private field"), e ? e.call(a) : s.get(a)), n = (a, s, e) => {
  if (s.has(a))
    throw TypeError("Cannot add the same private member more than once");
  s instanceof WeakSet ? s.add(a) : s.set(a, e);
}, p = (a, s, e, y) => (D(a, s, "write to private field"), y ? y.call(a, e) : s.set(a, e), e);
var o = (a, s, e) => (D(a, s, "access private method"), e);
var m, d, i, l, v, h, r, u, f, $, O, x, b, k, I, C, R, T, A, L, S, B, j, w, g;
const c = class {
  constructor(s, e, y) {
    n(this, $);
    n(this, x);
    n(this, k);
    n(this, C);
    n(this, T);
    n(this, L);
    n(this, B);
    n(this, w);
    n(this, i, void 0);
    n(this, l, void 0);
    n(this, v, void 0);
    n(this, h, void 0);
    n(this, r, void 0);
    n(this, u, !1);
    n(this, f, void 0);
    if (!t(c, m))
      throw new TypeError("Blink Class is not constructable");
    p(this, i, s.getBoundingClientRect()), p(this, l, e.getBoundingClientRect()), p(this, v, s), p(this, h, e), p(this, r, y), p(this, f, y.arrow ? document.createElement("div") : null);
  }
  static create(s, e, y) {
    var N;
    e.style.position = "absolute", e.style.zIndex = 10, e.style.opacity = 0, e.style.margin = 0, e.style.padding = "8px 12px";
    const z = Object.assign(
      { placement: "top", event: "hover", arrow: !1, dropdown: "none" },
      y
    );
    return p(c, m, !0), p(c, d, new c(s, e, z)), p(c, m, !1), o(N = t(c, d), $, O).call(N), t(t(c, d), r).event == "hover" && (s.addEventListener("mouseenter", () => {
      e.style.opacity = 100;
    }), s.addEventListener("mouseleave", () => {
      e.style.opacity = 0;
    })), t(t(c, d), r).event == "click" && s.addEventListener("click", () => {
      t(t(c, d), u) ? (e.style.opacity = 0, p(t(c, d), u, !1)) : (e.style.opacity = 100, p(t(c, d), u, !0));
    }), t(c, d);
  }
};
let E = c;
m = new WeakMap(), d = new WeakMap(), i = new WeakMap(), l = new WeakMap(), v = new WeakMap(), h = new WeakMap(), r = new WeakMap(), u = new WeakMap(), f = new WeakMap(), $ = new WeakSet(), O = function() {
  if (t(this, h).style.transition = "opacity .7s ease", t(this, r).dropdown !== "none")
    o(this, B, j).call(this, t(this, r).dropdown);
  else {
    if (t(this, r).arrow) {
      const s = window.getComputedStyle(
        t(this, h)
      ).backgroundColor;
      t(this, f).style.cssText = `width: 10px;
           height: 10px;
           transform: rotate(45deg);
           position: absolute;
           background-color: ${s};`, t(this, h).appendChild(t(this, f));
    }
    switch (t(this, r).placement) {
      case "top":
        o(this, x, b).call(this);
        break;
      case "bottom":
        o(this, k, I).call(this);
        break;
      case "left":
        o(this, C, R).call(this);
        break;
      case "right":
        o(this, T, A).call(this);
        break;
      case "auto":
        o(this, L, S).call(this);
        break;
      default:
        o(this, x, b).call(this);
    }
  }
  o(this, w, g).call(this, t(this, r).placement, t(this, v), t(this, h)) || console.warn(
    "Be carreful, there is no place for the tooltip to show !"
  );
}, x = new WeakSet(), b = function() {
  t(this, h).style.left = t(this, i).left + (t(this, i).width - t(this, l).width) / 2 + "px", t(this, h).style.top = t(this, i).top - t(this, l).height - 15 + "px", t(this, r).arrow && (t(this, f).style.cssText += `bottom: -5px;left: ${t(this, l).width / 2 - 5}px;`);
}, k = new WeakSet(), I = function() {
  t(this, h).style.left = t(this, i).left + (t(this, i).width - t(this, l).width) / 2 + "px", t(this, h).style.top = t(this, i).bottom + 15 + "px", t(this, r).arrow && (t(this, f).style.cssText += `top: -5px;
         left: ${t(this, l).width / 2 - 5}px;`);
}, C = new WeakSet(), R = function() {
  t(this, h).style.top = t(this, i).top + (t(this, i).height - t(this, l).height) / 2 + "px", t(this, h).style.left = t(this, i).left - t(this, l).width - 20 + "px", t(this, r).arrow && (t(this, f).style.cssText += `top: ${t(this, l).height / 2 - 5}px;right: -5px;`);
}, T = new WeakSet(), A = function() {
  t(this, h).style.top = t(this, i).top + (t(this, i).height - t(this, l).height) / 2 + "px", t(this, h).style.left = t(this, i).right + 15 + "px", t(this, r).arrow && (t(this, f).style.cssText += `top: ${t(this, l).height / 2 - 5}px;left: -5px;`);
}, L = new WeakSet(), S = function() {
  o(this, w, g).call(this, "top") ? o(this, x, b).call(this) : o(this, w, g).call(this, "bottom") ? o(this, k, I).call(this) : o(this, w, g).call(this, "right") ? o(this, T, A).call(this) : o(this, w, g).call(this, "left") ? o(this, C, R).call(this) : (o(this, x, b).call(this), console.warn(
    "Be carreful, there is no place for the tooltip to show !"
  ));
}, B = new WeakSet(), j = function(s) {
  s == "right" ? (t(this, h).style.left = t(this, i).right - t(this, l).width + "px", t(this, h).style.top = t(this, i).bottom + "px") : (t(this, h).style.left = t(this, i).left + "px", t(this, h).style.top = t(this, i).bottom + "px");
}, w = new WeakSet(), g = function(s) {
  switch (s) {
    case "top":
      return t(this, i).top > t(this, l).height + 20;
    case "bottom":
      return window.innerHeight - t(this, i).bottom > t(this, l).height + 20;
    case "left":
      return t(this, i).left > t(this, l).width + 20;
    case "right":
      return window.innerWidth - t(this, i).right > t(this, l).width + 20;
  }
}, n(E, m, !1), n(E, d, void 0);
export {
  E as Blink
};
