var R = (r, i, n) => {
  if (!i.has(r))
    throw TypeError("Cannot " + n);
};
var t = (r, i, n) => (R(r, i, "read from private field"), n ? n.call(r) : i.get(r)), o = (r, i, n) => {
  if (i.has(r))
    throw TypeError("Cannot add the same private member more than once");
  i instanceof WeakSet ? i.add(r) : i.set(r, n);
}, p = (r, i, n, g) => (R(r, i, "write to private field"), g ? g.call(r, n) : i.set(r, n), n);
var h = (r, i, n) => (R(r, i, "access private method"), n);
var x, y, e, l, f, s, a, b, d, $, H, L, P, B, W, u, T, v, S, k, A, C, N, D, q, I, F, w, m;
const c = class {
  constructor(i, n, g) {
    o(this, $);
    o(this, L);
    o(this, B);
    o(this, u);
    o(this, v);
    o(this, k);
    o(this, C);
    o(this, D);
    o(this, I);
    o(this, w);
    o(this, e, void 0);
    o(this, l, void 0);
    o(this, f, void 0);
    o(this, s, void 0);
    o(this, a, void 0);
    o(this, b, !1);
    o(this, d, void 0);
    if (!t(c, x))
      throw new TypeError("Blink Class is not constructable");
    p(this, f, i), p(this, s, n), p(this, a, g), p(this, d, g.arrow ? document.createElement("div") : null);
  }
  static create(i, n, g) {
    var O, j, z;
    const G = Object.assign(
      { placement: "auto", event: "hover", arrow: !1, dropdown: "none" },
      g
    );
    return p(c, x, !0), p(c, y, new c(i, n, G)), p(c, x, !1), h(O = t(c, y), $, H).call(O), h(j = t(c, y), L, P).call(j), h(z = t(c, y), B, W).call(z), t(c, y);
  }
};
let E = c;
x = new WeakMap(), y = new WeakMap(), e = new WeakMap(), l = new WeakMap(), f = new WeakMap(), s = new WeakMap(), a = new WeakMap(), b = new WeakMap(), d = new WeakMap(), $ = new WeakSet(), H = function() {
  t(this, s).style.position = "absolute", t(this, s).style.zIndex = 10, t(this, s).style.opacity = 0, t(this, s).style.margin = 0, t(this, s).style.padding = "8px 12px", t(this, s).style.transition = "opacity .7s ease", p(this, e, t(this, f).getBoundingClientRect()), p(this, l, t(this, s).getBoundingClientRect()), t(this, s).style.display = "none";
}, L = new WeakSet(), P = function() {
  t(this, a).event == "hover" && (t(this, f).addEventListener("mouseenter", () => {
    t(this, s).style.display = "block", setTimeout(() => {
      t(this, s).style.opacity = 100;
    }, 100);
  }), t(this, f).addEventListener("mouseleave", () => {
    t(this, s).style.opacity = 0, setTimeout(() => {
      t(this, s).style.display = "none";
    }, 700);
  })), t(this, a).event == "click" && t(this, f).addEventListener("click", () => {
    t(this, b) ? (t(this, s).style.opacity = 0, setTimeout(() => {
      t(this, s).style.display = "none";
    }, 700), p(this, b, !1)) : (t(this, s).style.display = "block", setTimeout(() => {
      t(this, s).style.opacity = 100;
    }, 100), p(this, b, !0));
  });
}, B = new WeakSet(), W = function() {
  if (t(this, a).dropdown !== "none")
    h(this, I, F).call(this, t(this, a).dropdown);
  else {
    if (t(this, a).arrow) {
      const i = window.getComputedStyle(
        t(this, s)
      ).backgroundColor;
      t(this, d).style.cssText = `width: 10px;
           height: 10px;
           transform: rotate(45deg);
           position: absolute;
           background-color: ${i};`, t(this, s).appendChild(t(this, d));
    }
    switch (t(this, a).placement) {
      case "top":
        h(this, u, T).call(this);
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
        h(this, u, T).call(this);
    }
  }
  h(this, w, m).call(this, t(this, a).placement) || console.warn(
    "Be carreful, there is no place for the tooltip to show !"
  );
}, u = new WeakSet(), T = function() {
  t(this, s).style.left = t(this, e).left + (t(this, e).width - t(this, l).width) / 2 + "px", t(this, s).style.top = t(this, e).top - t(this, l).height - 15 + "px", t(this, a).arrow && (t(this, d).style.cssText += `bottom: -5px;left: ${t(this, l).width / 2 - 5}px;`);
}, v = new WeakSet(), S = function() {
  t(this, s).style.left = t(this, e).left + (t(this, e).width - t(this, l).width) / 2 + "px", t(this, s).style.top = t(this, e).bottom + 15 + "px", t(this, a).arrow && (t(this, d).style.cssText += `top: -5px;
         left: ${t(this, l).width / 2 - 5}px;`);
}, k = new WeakSet(), A = function() {
  t(this, s).style.top = t(this, e).top + (t(this, e).height - t(this, l).height) / 2 + "px", t(this, s).style.left = t(this, e).left - t(this, l).width - 20 + "px", t(this, a).arrow && (t(this, d).style.cssText += `top: ${t(this, l).height / 2 - 5}px;right: -5px;`);
}, C = new WeakSet(), N = function() {
  t(this, s).style.top = t(this, e).top + (t(this, e).height - t(this, l).height) / 2 + "px", t(this, s).style.left = t(this, e).right + 15 + "px", t(this, a).arrow && (t(this, d).style.cssText += `top: ${t(this, l).height / 2 - 5}px;left: -5px;`);
}, D = new WeakSet(), q = function() {
  h(this, w, m).call(this, "top") ? h(this, u, T).call(this) : h(this, w, m).call(this, "bottom") ? h(this, v, S).call(this) : h(this, w, m).call(this, "right") ? h(this, C, N).call(this) : h(this, w, m).call(this, "left") ? h(this, k, A).call(this) : (h(this, u, T).call(this), console.warn(
    "Be carreful, there is no place for the tooltip to show !"
  ));
}, I = new WeakSet(), F = function(i) {
  i == "right" ? (t(this, s).style.left = t(this, e).right - t(this, l).width + "px", t(this, s).style.top = t(this, e).bottom + "px") : (t(this, s).style.left = t(this, e).left + "px", t(this, s).style.top = t(this, e).bottom + "px");
}, w = new WeakSet(), m = function(i) {
  switch (i) {
    case "top":
      return t(this, e).top > t(this, l).height + 20;
    case "bottom":
      return window.innerHeight - t(this, e).bottom > t(this, l).height + 20;
    case "left":
      return t(this, e).left > t(this, l).width + 20;
    case "right":
      return window.innerWidth - t(this, e).right > t(this, l).width + 20;
  }
}, o(E, x, !1), o(E, y, void 0);
export {
  E as Blink
};
