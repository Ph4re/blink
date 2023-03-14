var R = (a, i, n) => {
  if (!i.has(a))
    throw TypeError("Cannot " + n);
};
var t = (a, i, n) => (R(a, i, "read from private field"), n ? n.call(a) : i.get(a)), o = (a, i, n) => {
  if (i.has(a))
    throw TypeError("Cannot add the same private member more than once");
  i instanceof WeakSet ? i.add(a) : i.set(a, n);
}, p = (a, i, n, w) => (R(a, i, "write to private field"), w ? w.call(a, n) : i.set(a, n), n);
var h = (a, i, n) => (R(a, i, "access private method"), n);
var x, y, e, l, f, s, r, b, d, $, H, L, P, B, W, g, T, v, S, k, A, C, N, D, q, I, F, u, m;
const c = class {
  constructor(i, n, w) {
    o(this, $);
    o(this, L);
    o(this, B);
    o(this, g);
    o(this, v);
    o(this, k);
    o(this, C);
    o(this, D);
    o(this, I);
    o(this, u);
    o(this, e, void 0);
    o(this, l, void 0);
    o(this, f, void 0);
    o(this, s, void 0);
    o(this, r, void 0);
    o(this, b, !1);
    o(this, d, void 0);
    if (!t(c, x))
      throw new TypeError("Blink Class is not constructable");
    p(this, f, i), p(this, s, n), p(this, r, w), p(this, d, w.arrow ? document.createElement("div") : null);
  }
  static create(i, n, w) {
    var O, j, z;
    const G = Object.assign(
      {
        placement: "auto",
        event: "hover",
        arrow: !1,
        dropdown: "none",
        duration: 700
      },
      w
    );
    return p(c, x, !0), p(c, y, new c(i, n, G)), p(c, x, !1), h(O = t(c, y), $, H).call(O), h(j = t(c, y), L, P).call(j), h(z = t(c, y), B, W).call(z), t(c, y);
  }
};
let E = c;
x = new WeakMap(), y = new WeakMap(), e = new WeakMap(), l = new WeakMap(), f = new WeakMap(), s = new WeakMap(), r = new WeakMap(), b = new WeakMap(), d = new WeakMap(), $ = new WeakSet(), H = function() {
  t(this, s).style.position = "absolute", t(this, s).style.zIndex = 10, t(this, s).style.opacity = 0, t(this, s).style.margin = 0, t(this, s).style.padding = "8px 12px", t(this, s).style.transition = `opacity ${t(this, r).duration / 1e3}s ease`, p(this, e, t(this, f).getBoundingClientRect()), p(this, l, t(this, s).getBoundingClientRect()), t(this, s).style.display = "none";
}, L = new WeakSet(), P = function() {
  t(this, r).event == "hover" && (t(this, f).addEventListener("mouseenter", () => {
    t(this, s).style.display = "block", setTimeout(() => {
      t(this, s).style.opacity = 100;
    }, 100);
  }), t(this, f).addEventListener("mouseleave", () => {
    t(this, s).style.opacity = 0, setTimeout(() => {
      t(this, s).style.display = "none";
    }, t(this, r).duration);
  })), t(this, r).event == "click" && t(this, f).addEventListener("click", () => {
    t(this, b) ? (t(this, s).style.opacity = 0, setTimeout(() => {
      t(this, s).style.display = "none";
    }, t(this, r).duration), p(this, b, !1)) : (t(this, s).style.display = "block", setTimeout(() => {
      t(this, s).style.opacity = 100;
    }, 100), p(this, b, !0));
  });
}, B = new WeakSet(), W = function() {
  if (t(this, r).dropdown !== "none")
    h(this, I, F).call(this, t(this, r).dropdown);
  else {
    if (t(this, r).arrow) {
      const i = window.getComputedStyle(
        t(this, s)
      ).backgroundColor;
      t(this, d).style.cssText = `width: 10px;
           height: 10px;
           transform: rotate(45deg);
           position: absolute;
           background-color: ${i};`, t(this, s).appendChild(t(this, d));
    }
    switch (t(this, r).placement) {
      case "top":
        h(this, g, T).call(this);
        break;
      case "bottom":
        h(this, v, S).call(this);
        break;
      case "left":
        h(this, k, A).call(this);
        break;
      case "right":
        h(this, C, N).call(this);
        break;
      case "auto":
        h(this, D, q).call(this);
        break;
      default:
        h(this, g, T).call(this);
    }
  }
  h(this, u, m).call(this, t(this, r).placement) || console.warn(
    "Be carreful, there is no place for the tooltip to show !"
  );
}, g = new WeakSet(), T = function() {
  t(this, s).style.left = t(this, e).left + (t(this, e).width - t(this, l).width) / 2 + "px", t(this, s).style.top = t(this, e).top - t(this, l).height - 15 + "px", t(this, r).arrow && (t(this, d).style.cssText += `bottom: -5px;left: ${t(this, l).width / 2 - 5}px;`);
}, v = new WeakSet(), S = function() {
  t(this, s).style.left = t(this, e).left + (t(this, e).width - t(this, l).width) / 2 + "px", t(this, s).style.top = t(this, e).bottom + 15 + "px", t(this, r).arrow && (t(this, d).style.cssText += `top: -5px;
         left: ${t(this, l).width / 2 - 5}px;`);
}, k = new WeakSet(), A = function() {
  t(this, s).style.top = t(this, e).top + (t(this, e).height - t(this, l).height) / 2 + "px", t(this, s).style.left = t(this, e).left - t(this, l).width - 20 + "px", t(this, r).arrow && (t(this, d).style.cssText += `top: ${t(this, l).height / 2 - 5}px;right: -5px;`);
}, C = new WeakSet(), N = function() {
  t(this, s).style.top = t(this, e).top + (t(this, e).height - t(this, l).height) / 2 + "px", t(this, s).style.left = t(this, e).right + 15 + "px", t(this, r).arrow && (t(this, d).style.cssText += `top: ${t(this, l).height / 2 - 5}px;left: -5px;`);
}, D = new WeakSet(), q = function() {
  h(this, u, m).call(this, "top") ? h(this, g, T).call(this) : h(this, u, m).call(this, "bottom") ? h(this, v, S).call(this) : h(this, u, m).call(this, "right") ? h(this, C, N).call(this) : h(this, u, m).call(this, "left") ? h(this, k, A).call(this) : (h(this, g, T).call(this), console.warn(
    "Be carreful, there is no place for the tooltip to show !"
  ));
}, I = new WeakSet(), F = function(i) {
  i == "right" ? (t(this, s).style.left = t(this, e).right - t(this, l).width + "px", t(this, s).style.top = t(this, e).bottom + "px") : (t(this, s).style.left = t(this, e).left + "px", t(this, s).style.top = t(this, e).bottom + "px");
}, u = new WeakSet(), m = function(i) {
  switch (i) {
    case "top":
      return t(this, e).top > t(this, l).height + 20;
    case "bottom":
      return window.innerHeight - t(this, e).bottom > t(this, l).height + 20;
    case "left":
      return t(this, e).left > t(this, l).width + 20;
    case "right":
      return window.innerWidth - t(this, e).right > t(this, l).width + 20;
    case "auto":
      return !0;
  }
}, o(E, x, !1), o(E, y, void 0);
export {
  E as Blink
};
