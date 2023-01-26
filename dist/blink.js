var D = (n, s, e) => {
  if (!s.has(n))
    throw TypeError("Cannot " + e);
};
var t = (n, s, e) => (D(n, s, "read from private field"), e ? e.call(n) : s.get(n)), a = (n, s, e) => {
  if (s.has(n))
    throw TypeError("Cannot add the same private member more than once");
  s instanceof WeakSet ? s.add(n) : s.set(n, e);
}, p = (n, s, e, y) => (D(n, s, "write to private field"), y ? y.call(n, e) : s.set(n, e), e);
var o = (n, s, e) => (D(n, s, "access private method"), e);
var m, d, i, l, v, h, r, g, f, $, S, u, b, k, I, C, R, T, A, L, z, B, H, w, x;
const c = class {
  constructor(s, e, y) {
    a(this, $);
    a(this, u);
    a(this, k);
    a(this, C);
    a(this, T);
    a(this, L);
    a(this, B);
    a(this, w);
    a(this, i, void 0);
    a(this, l, void 0);
    a(this, v, void 0);
    a(this, h, void 0);
    a(this, r, void 0);
    a(this, g, !1);
    a(this, f, void 0);
    if (!t(c, m))
      throw new TypeError("Blink Class is not constructable");
    p(this, i, s.getBoundingClientRect()), p(this, l, e.getBoundingClientRect()), p(this, v, s), p(this, h, e), p(this, r, y), p(this, f, y.arrow ? document.createElement("div") : null);
  }
  static create(s, e, y = {
    placement: "auto",
    event: "hover",
    arrow: !1,
    dropdown: "none"
  }) {
    var N;
    return e.style.position = "absolute", e.style.zIndex = 10, e.style.opacity = 0, p(c, m, !0), p(c, d, new c(s, e, y)), p(c, m, !1), o(N = t(c, d), $, S).call(N), t(t(c, d), r).event == "hover" && (s.addEventListener("mouseenter", () => {
      e.style.opacity = 100;
    }), s.addEventListener("mouseleave", () => {
      e.style.opacity = 0;
    })), t(t(c, d), r).event == "click" && s.addEventListener("click", () => {
      t(t(c, d), g) ? (e.style.opacity = 0, p(t(c, d), g, !1)) : (e.style.opacity = 100, p(t(c, d), g, !0));
    }), t(c, d);
  }
};
let E = c;
m = new WeakMap(), d = new WeakMap(), i = new WeakMap(), l = new WeakMap(), v = new WeakMap(), h = new WeakMap(), r = new WeakMap(), g = new WeakMap(), f = new WeakMap(), $ = new WeakSet(), S = function() {
  if (t(this, h).style.transition = "opacity .7s ease", t(this, r).arrow) {
    const s = window.getComputedStyle(t(this, h)).backgroundColor;
    t(this, f).style.cssText = `width: 10px;
         height: 10px;
         transform: rotate(45deg);
         position: absolute;
         background-color: ${s};`, t(this, h).appendChild(t(this, f));
  }
  if (t(this, r).dropdown !== "none")
    o(this, B, H).call(this, t(this, r).dropdown);
  else
    switch (t(this, r).placement) {
      case "top":
        o(this, u, b).call(this);
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
        o(this, L, z).call(this);
        break;
      default:
        o(this, u, b).call(this);
    }
  o(this, w, x).call(this, t(this, r).placement, t(this, v), t(this, h)) || console.warn(
    "Be carreful, there is no place for the tooltip to show !"
  );
}, u = new WeakSet(), b = function() {
  t(this, h).style.left = t(this, i).left + (t(this, i).width - t(this, l).width) / 2 + "px", t(this, h).style.top = t(this, i).top - t(this, l).height - 15 + "px", t(this, r).arrow && (t(this, f).style.cssText += `bottom: -5px;left: ${t(this, l).width / 2 - 5}px;`);
}, k = new WeakSet(), I = function() {
  t(this, h).style.left = t(this, i).left + (t(this, i).width - t(this, l).width) / 2 + "px", t(this, h).style.top = t(this, i).bottom + 15 + "px", t(this, r).arrow && (t(this, f).style.cssText += `top: -5px;
         left: ${t(this, l).width / 2 - 5}px;`);
}, C = new WeakSet(), R = function() {
  t(this, h).style.top = t(this, i).top + (t(this, i).height - t(this, l).height) / 2 + "px", t(this, h).style.left = t(this, i).left - t(this, l).width - 20 + "px", t(this, r).arrow && (t(this, f).style.cssText += `top: ${t(this, l).height / 2 - 5}px;right: -5px;`);
}, T = new WeakSet(), A = function() {
  t(this, h).style.top = t(this, i).top + (t(this, i).height - t(this, l).height) / 2 + "px", t(this, h).style.left = t(this, i).right + 15 + "px", t(this, r).arrow && (t(this, f).style.cssText += `top: ${t(this, l).height / 2 - 5}px;left: -5px;`);
}, L = new WeakSet(), z = function() {
  o(this, w, x).call(this, "top") ? o(this, u, b).call(this) : o(this, w, x).call(this, "bottom") ? o(this, k, I).call(this) : o(this, w, x).call(this, "right") ? o(this, T, A).call(this) : o(this, w, x).call(this, "left") ? o(this, C, R).call(this) : (o(this, u, b).call(this), console.warn(
    "Be carreful, there is no place for the tooltip to show !"
  ));
}, B = new WeakSet(), H = function(s) {
  s == "right" ? (t(this, h).style.left = t(this, i).right - t(this, l).width + "px", t(this, h).style.top = t(this, i).bottom + "px") : (t(this, h).style.left = t(this, i).left + "px", t(this, h).style.top = t(this, i).bottom + "px");
}, w = new WeakSet(), x = function(s) {
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
}, a(E, m, !1), a(E, d, void 0);
export {
  E as default
};
