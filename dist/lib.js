import { resolveComponent as G, openBlock as h, createElementBlock as b, Fragment as I, renderList as j, createBlock as C, resolveDynamicComponent as je, mergeProps as ie, withCtx as O, createCommentVNode as Q, normalizeClass as N, withModifiers as Ce, renderSlot as A, createElementVNode as c, toDisplayString as M, withDirectives as Ae, vModelDynamic as Ne, createVNode as k, unref as $, inject as z, nextTick as F, watchEffect as L, ref as x, computed as D, onMounted as Y, cloneVNode as Fe, h as Ve, provide as X, defineComponent as V, onUnmounted as re, Transition as Re, createTextVNode as ce, reactive as ge } from "vue";
const Be = {
  __name: "Builder",
  props: {
    modelValue: {
      required: !1,
      default: {}
    },
    design: {
      required: !0
    },
    endpoint: {
      required: !1,
      default: !1
    }
  },
  setup(e) {
    return (t, n) => {
      const a = G("builder", !0);
      return h(!0), b(I, null, j(e.design, (l, o) => (h(), C(je(l.component), ie({
        key: l,
        ref_for: !0
      }, {
        endpoint: e.endpoint,
        modelValue: e.modelValue,
        class: l.class,
        ...l.configs
      }), {
        default: O(() => [
          l.children && l.children.length ? (h(), C(a, ie({
            key: 0,
            ref_for: !0
          }, {
            endpoint: e.endpoint,
            modelValue: e.modelValue,
            design: l.children
          }), null, 16)) : Q("", !0)
        ]),
        _: 2
      }, 1040))), 128);
    };
  }
}, Le = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Be
}, Symbol.toStringTag, { value: "Module" })), Ue = {
  __name: "Form",
  props: {
    modelValue: {
      required: !1,
      default: {}
    },
    endpoint: {
      required: !1,
      default: !1
    },
    class: {
      required: !1,
      default: {}
    }
  },
  setup(e) {
    const t = e, n = async () => {
      const a = document.getElementById("website-form"), l = new FormData(a);
      try {
        let o;
        const r = { headers: { "Content-Type": "multipart/form-data" } };
        Object.keys(modelValue).length ? (l.append("_method", "put"), o = await axios.post(t.endpoint, l, r)) : o = await axios.post(t.endpoint, l, r), location.assign(o.data.redirect);
      } catch (o) {
        window.notyf.error(o.response.data);
      }
      return !1;
    };
    return (a, l) => {
      const o = G("form-buttons");
      return h(), b("form", {
        id: "website-form",
        class: N(t.class),
        onSubmit: Ce(n, ["prevent"])
      }, [
        A(a.$slots, "default"),
        t.endpoint ? (h(), C(o, { key: 0 })) : Q("", !0)
      ], 34);
    };
  }
}, He = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ue
}, Symbol.toStringTag, { value: "Module" })), U = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, l] of t)
    n[a] = l;
  return n;
}, qe = {}, Ke = { class: "mt-6 flex items-center justify-end gap-x-6" }, ze = /* @__PURE__ */ c("button", {
  type: "button",
  class: "text-sm font-semibold leading-6 text-gray-900"
}, "Cancel", -1), We = /* @__PURE__ */ c("button", {
  type: "submit",
  class: "rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
}, "Save", -1), Ge = [
  ze,
  We
];
function Qe(e, t) {
  return h(), b("div", Ke, Ge);
}
const Ye = /* @__PURE__ */ U(qe, [["render", Qe]]), Xe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ye
}, Symbol.toStringTag, { value: "Module" })), Ze = { class: "mt-5" }, Je = ["for"], et = { class: "mt-2" }, tt = {
  key: 0,
  class: "flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
}, nt = ["type", "id", "placeholder"], rt = {
  key: 1,
  class: "text-xs font-medium text-rose-600"
}, lt = {
  __name: "Input",
  props: {
    class: {
      required: !1,
      default: {}
    },
    label: {
      type: String,
      required: !0
    },
    type: {
      type: String,
      required: !1,
      default: "text"
    },
    help: String,
    name: {
      type: String,
      required: !0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    required: {
      type: Boolean,
      default: !1
    },
    modelValue: {
      required: !1,
      default: {}
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e;
    return (a, l) => (h(), b("div", Ze, [
      c("label", {
        for: n.name,
        class: "block text-sm font-medium leading-6 text-gray-900"
      }, M(n.label), 9, Je),
      c("div", et, [
        n.name ? (h(), b("div", tt, [
          Ae(c("input", {
            type: n.type ?? "text",
            name: "username",
            id: n.name,
            class: "block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6",
            placeholder: n.placeholder,
            "onUpdate:modelValue": l[0] || (l[0] = (o) => n.modelValue[n.name] = o)
          }, null, 8, nt), [
            [Ne, n.modelValue[n.name]]
          ])
        ])) : (h(), b("small", rt, " No Name set"))
      ])
    ]));
  }
}, ot = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lt
}, Symbol.toStringTag, { value: "Module" })), at = {}, st = { class: "space-y-5 mt-10" }, ut = /* @__PURE__ */ c("div", { class: "border-b border-gray-900/10 pb-5" }, [
  /* @__PURE__ */ c("h2", { class: "text-base font-semibold leading-7 text-gray-900" }, "Profile"),
  /* @__PURE__ */ c("p", { class: "mt-1 text-sm leading-6 text-gray-600" }, "This information will be displayed publicly so be careful what you share.")
], -1), it = [
  ut
];
function ct(e, t) {
  return h(), b("div", st, it);
}
const dt = /* @__PURE__ */ U(at, [["render", ct]]), ft = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dt
}, Symbol.toStringTag, { value: "Module" }));
function pt(e, t) {
  return h(), b("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    c("path", {
      "fill-rule": "evenodd",
      d: "M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function mt(e, t) {
  return h(), b("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    c("path", {
      "fill-rule": "evenodd",
      d: "M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z",
      "clip-rule": "evenodd"
    })
  ]);
}
const vt = {
  class: "flex",
  "aria-label": "Breadcrumb"
}, ht = {
  role: "list",
  class: "flex items-center space-x-4"
}, gt = { href: "#" }, _t = /* @__PURE__ */ c("span", { class: "sr-only" }, "Home", -1), bt = { class: "flex items-center" }, yt = ["href", "aria-current"], xt = {
  __name: "Breadcrumbs",
  setup(e) {
    const t = [
      { name: "Projects", href: "#", current: !1 },
      { name: "Project Nero", href: "#", current: !0 }
    ];
    return (n, a) => (h(), b("nav", vt, [
      c("ol", ht, [
        c("li", null, [
          c("div", null, [
            c("a", gt, [
              k($(mt), {
                class: "h-5 w-5 flex-shrink-0",
                "aria-hidden": "true"
              }),
              _t
            ])
          ])
        ]),
        (h(), b(I, null, j(t, (l) => c("li", {
          key: l.name
        }, [
          c("div", bt, [
            k($(pt), {
              class: "h-5 w-5 flex-shrink-0",
              "aria-hidden": "true"
            }),
            c("a", {
              href: l.href,
              class: "ml-4 text-sm font-medium",
              "aria-current": l.current ? "page" : void 0
            }, M(l.name), 9, yt)
          ])
        ])), 64))
      ])
    ]));
  }
}, wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xt
}, Symbol.toStringTag, { value: "Module" })), St = {}, $t = { class: "col" };
function kt(e, t) {
  return h(), b("div", $t, [
    A(e.$slots, "default")
  ]);
}
const Ot = /* @__PURE__ */ U(St, [["render", kt]]), Pt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ot
}, Symbol.toStringTag, { value: "Module" })), Dt = {}, It = { class: "container mx-auto mt-5" };
function Tt(e, t) {
  return h(), b("div", It, [
    A(e.$slots, "default")
  ]);
}
const Et = /* @__PURE__ */ U(Dt, [["render", Tt]]), Mt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Et
}, Symbol.toStringTag, { value: "Module" })), jt = {}, Ct = { class: "row" };
function At(e, t) {
  return h(), b("div", Ct, [
    A(e.$slots, "default")
  ]);
}
const Nt = /* @__PURE__ */ U(jt, [["render", At]]), Ft = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Nt
}, Symbol.toStringTag, { value: "Module" }));
let Vt = Symbol("headlessui.useid"), Rt = 0;
function q() {
  return z(Vt, () => `${++Rt}`)();
}
function y(e) {
  var t;
  if (e == null || e.value == null)
    return null;
  let n = (t = e.value.$el) != null ? t : e.value;
  return n instanceof Node ? n : null;
}
function B(e, t, ...n) {
  if (e in t) {
    let l = t[e];
    return typeof l == "function" ? l(...n) : l;
  }
  let a = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((l) => `"${l}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(a, B), a;
}
var Bt = Object.defineProperty, Lt = (e, t, n) => t in e ? Bt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, de = (e, t, n) => (Lt(e, typeof t != "symbol" ? t + "" : t, n), n);
let Ut = class {
  constructor() {
    de(this, "current", this.detect()), de(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && (this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
}, le = new Ut();
function oe(e) {
  if (le.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = y(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let te = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ne = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ne || {}), Ht = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Ht || {}), qt = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(qt || {});
function _e(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(te)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var ae = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(ae || {});
function se(e, t = 0) {
  var n;
  return e === ((n = oe(e)) == null ? void 0 : n.body) ? !1 : B(t, { 0() {
    return e.matches(te);
  }, 1() {
    let a = e;
    for (; a !== null; ) {
      if (a.matches(te))
        return !0;
      a = a.parentElement;
    }
    return !1;
  } });
}
function be(e) {
  let t = oe(e);
  F(() => {
    t && !se(t.activeElement, 0) && zt(e);
  });
}
var Kt = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Kt || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function zt(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Wt = ["textarea", "input"].join(",");
function Gt(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Wt)) != null ? n : !1;
}
function ye(e, t = (n) => n) {
  return e.slice().sort((n, a) => {
    let l = t(n), o = t(a);
    if (l === null || o === null)
      return 0;
    let r = l.compareDocumentPosition(o);
    return r & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : r & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Qt(e, t) {
  return Yt(_e(), t, { relativeTo: e });
}
function Yt(e, t, { sorted: n = !0, relativeTo: a = null, skipElements: l = [] } = {}) {
  var o;
  let r = (o = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? o : document, s = Array.isArray(e) ? n ? ye(e) : e : _e(e);
  l.length > 0 && s.length > 1 && (s = s.filter((i) => !l.includes(i))), a = a ?? r.activeElement;
  let f = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), m = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, s.indexOf(a)) - 1;
    if (t & 4)
      return Math.max(0, s.indexOf(a)) + 1;
    if (t & 8)
      return s.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), g = t & 32 ? { preventScroll: !0 } : {}, v = 0, u = s.length, d;
  do {
    if (v >= u || v + u <= 0)
      return 0;
    let i = m + v;
    if (t & 16)
      i = (i + u) % u;
    else {
      if (i < 0)
        return 3;
      if (i >= u)
        return 1;
    }
    d = s[i], d == null || d.focus(g), v += f;
  } while (d !== r.activeElement);
  return t & 6 && Gt(d) && d.select(), 2;
}
function Xt() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Zt() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Jt() {
  return Xt() || Zt();
}
function W(e, t, n) {
  le.isServer || L((a) => {
    document.addEventListener(e, t, n), a(() => document.removeEventListener(e, t, n));
  });
}
function en(e, t, n) {
  le.isServer || L((a) => {
    window.addEventListener(e, t, n), a(() => window.removeEventListener(e, t, n));
  });
}
function tn(e, t, n = D(() => !0)) {
  function a(o, r) {
    if (!n.value || o.defaultPrevented)
      return;
    let s = r(o);
    if (s === null || !s.getRootNode().contains(s))
      return;
    let f = function m(g) {
      return typeof g == "function" ? m(g()) : Array.isArray(g) || g instanceof Set ? g : [g];
    }(e);
    for (let m of f) {
      if (m === null)
        continue;
      let g = m instanceof HTMLElement ? m : y(m);
      if (g != null && g.contains(s) || o.composed && o.composedPath().includes(g))
        return;
    }
    return !se(s, ae.Loose) && s.tabIndex !== -1 && o.preventDefault(), t(o, s);
  }
  let l = x(null);
  W("pointerdown", (o) => {
    var r, s;
    n.value && (l.value = ((s = (r = o.composedPath) == null ? void 0 : r.call(o)) == null ? void 0 : s[0]) || o.target);
  }, !0), W("mousedown", (o) => {
    var r, s;
    n.value && (l.value = ((s = (r = o.composedPath) == null ? void 0 : r.call(o)) == null ? void 0 : s[0]) || o.target);
  }, !0), W("click", (o) => {
    Jt() || l.value && (a(o, () => l.value), l.value = null);
  }, !0), W("touchend", (o) => a(o, () => o.target instanceof HTMLElement ? o.target : null), !0), en("blur", (o) => a(o, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function fe(e, t) {
  if (e)
    return e;
  let n = t ?? "button";
  if (typeof n == "string" && n.toLowerCase() === "button")
    return "button";
}
function xe(e, t) {
  let n = x(fe(e.value.type, e.value.as));
  return Y(() => {
    n.value = fe(e.value.type, e.value.as);
  }), L(() => {
    var a;
    n.value || y(t) && y(t) instanceof HTMLButtonElement && !((a = y(t)) != null && a.hasAttribute("type")) && (n.value = "button");
  }), n;
}
function pe(e) {
  return [e.screenX, e.screenY];
}
function nn() {
  let e = x([-1, -1]);
  return { wasMoved(t) {
    let n = pe(t);
    return e.value[0] === n[0] && e.value[1] === n[1] ? !1 : (e.value = n, !0);
  }, update(t) {
    e.value = pe(t);
  } };
}
function rn({ container: e, accept: t, walk: n, enabled: a }) {
  L(() => {
    let l = e.value;
    if (!l || a !== void 0 && !a.value)
      return;
    let o = oe(e);
    if (!o)
      return;
    let r = Object.assign((f) => t(f), { acceptNode: t }), s = o.createTreeWalker(l, NodeFilter.SHOW_ELEMENT, r, !1);
    for (; s.nextNode(); )
      n(s.currentNode);
  });
}
var K = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(K || {}), ln = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(ln || {});
function R({ visible: e = !0, features: t = 0, ourProps: n, theirProps: a, ...l }) {
  var o;
  let r = Se(a, n), s = Object.assign(l, { props: r });
  if (e || t & 2 && r.static)
    return J(s);
  if (t & 1) {
    let f = (o = r.unmount) == null || o ? 0 : 1;
    return B(f, { 0() {
      return null;
    }, 1() {
      return J({ ...l, props: { ...r, hidden: !0, style: { display: "none" } } });
    } });
  }
  return J(s);
}
function J({ props: e, attrs: t, slots: n, slot: a, name: l }) {
  var o, r;
  let { as: s, ...f } = on(e, ["unmount", "static"]), m = (o = n.default) == null ? void 0 : o.call(n, a), g = {};
  if (a) {
    let v = !1, u = [];
    for (let [d, i] of Object.entries(a))
      typeof i == "boolean" && (v = !0), i === !0 && u.push(d);
    v && (g["data-headlessui-state"] = u.join(" "));
  }
  if (s === "template") {
    if (m = we(m ?? []), Object.keys(f).length > 0 || Object.keys(t).length > 0) {
      let [v, ...u] = m ?? [];
      if (!an(v) || u.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${l} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(f).concat(Object.keys(t)).map((p) => p.trim()).filter((p, S, _) => _.indexOf(p) === S).sort((p, S) => p.localeCompare(S)).map((p) => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((p) => `  - ${p}`).join(`
`)].join(`
`));
      let d = Se((r = v.props) != null ? r : {}, f, g), i = Fe(v, d, !0);
      for (let p in d)
        p.startsWith("on") && (i.props || (i.props = {}), i.props[p] = d[p]);
      return i;
    }
    return Array.isArray(m) && m.length === 1 ? m[0] : m;
  }
  return Ve(s, Object.assign({}, f, g), { default: () => m });
}
function we(e) {
  return e.flatMap((t) => t.type === I ? we(t.children) : [t]);
}
function Se(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, n = {};
  for (let a of e)
    for (let l in a)
      l.startsWith("on") && typeof a[l] == "function" ? (n[l] != null || (n[l] = []), n[l].push(a[l])) : t[l] = a[l];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(n).map((a) => [a, void 0])));
  for (let a in n)
    Object.assign(t, { [a](l, ...o) {
      let r = n[a];
      for (let s of r) {
        if (l instanceof Event && l.defaultPrevented)
          return;
        s(l, ...o);
      }
    } });
  return t;
}
function on(e, t = []) {
  let n = Object.assign({}, e);
  for (let a of t)
    a in n && delete n[a];
  return n;
}
function an(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let $e = Symbol("Context");
var T = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(T || {});
function ke() {
  return z($e, null);
}
function Oe(e) {
  X($e, e);
}
var w = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(w || {});
function sn(e) {
  throw new Error("Unexpected object: " + e);
}
var P = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(P || {});
function un(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0)
    return null;
  let a = t.resolveActiveIndex(), l = a ?? -1;
  switch (e.focus) {
    case 0: {
      for (let o = 0; o < n.length; ++o)
        if (!t.resolveDisabled(n[o], o, n))
          return o;
      return a;
    }
    case 1: {
      l === -1 && (l = n.length);
      for (let o = l - 1; o >= 0; --o)
        if (!t.resolveDisabled(n[o], o, n))
          return o;
      return a;
    }
    case 2: {
      for (let o = l + 1; o < n.length; ++o)
        if (!t.resolveDisabled(n[o], o, n))
          return o;
      return a;
    }
    case 3: {
      for (let o = n.length - 1; o >= 0; --o)
        if (!t.resolveDisabled(n[o], o, n))
          return o;
      return a;
    }
    case 4: {
      for (let o = 0; o < n.length; ++o)
        if (t.resolveId(n[o], o, n) === e.id)
          return o;
      return a;
    }
    case 5:
      return null;
    default:
      sn(e);
  }
}
var cn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(cn || {});
let Pe = Symbol("DisclosureContext");
function ue(e) {
  let t = z(Pe, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, ue), n;
  }
  return t;
}
let De = Symbol("DisclosurePanelContext");
function dn() {
  return z(De, null);
}
let fn = V({ name: "Disclosure", props: { as: { type: [Object, String], default: "template" }, defaultOpen: { type: [Boolean], default: !1 } }, setup(e, { slots: t, attrs: n }) {
  let a = x(e.defaultOpen ? 0 : 1), l = x(null), o = x(null), r = { buttonId: x(`headlessui-disclosure-button-${q()}`), panelId: x(`headlessui-disclosure-panel-${q()}`), disclosureState: a, panel: l, button: o, toggleDisclosure() {
    a.value = B(a.value, { 0: 1, 1: 0 });
  }, closeDisclosure() {
    a.value !== 1 && (a.value = 1);
  }, close(s) {
    r.closeDisclosure();
    let f = s ? s instanceof HTMLElement ? s : s.value instanceof HTMLElement ? y(s) : y(r.button) : y(r.button);
    f == null || f.focus();
  } };
  return X(Pe, r), Oe(D(() => B(a.value, { 0: T.Open, 1: T.Closed }))), () => {
    let { defaultOpen: s, ...f } = e, m = { open: a.value === 0, close: r.close };
    return R({ theirProps: f, ourProps: {}, slot: m, slots: t, attrs: n, name: "Disclosure" });
  };
} }), ee = V({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n, expose: a }) {
  let l = ue("DisclosureButton"), o = dn(), r = D(() => o === null ? !1 : o.value === l.panelId.value);
  Y(() => {
    r.value || e.id !== null && (l.buttonId.value = e.id);
  }), re(() => {
    r.value || (l.buttonId.value = null);
  });
  let s = x(null);
  a({ el: s, $el: s }), r.value || L(() => {
    l.button.value = s.value;
  });
  let f = xe(D(() => ({ as: e.as, type: t.type })), s);
  function m() {
    var u;
    e.disabled || (r.value ? (l.toggleDisclosure(), (u = y(l.button)) == null || u.focus()) : l.toggleDisclosure());
  }
  function g(u) {
    var d;
    if (!e.disabled)
      if (r.value)
        switch (u.key) {
          case w.Space:
          case w.Enter:
            u.preventDefault(), u.stopPropagation(), l.toggleDisclosure(), (d = y(l.button)) == null || d.focus();
            break;
        }
      else
        switch (u.key) {
          case w.Space:
          case w.Enter:
            u.preventDefault(), u.stopPropagation(), l.toggleDisclosure();
            break;
        }
  }
  function v(u) {
    switch (u.key) {
      case w.Space:
        u.preventDefault();
        break;
    }
  }
  return () => {
    var u;
    let d = { open: l.disclosureState.value === 0 }, { id: i, ...p } = e, S = r.value ? { ref: s, type: f.value, onClick: m, onKeydown: g } : { id: (u = l.buttonId.value) != null ? u : i, ref: s, type: f.value, "aria-expanded": l.disclosureState.value === 0, "aria-controls": l.disclosureState.value === 0 || y(l.panel) ? l.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onClick: m, onKeydown: g, onKeyup: v };
    return R({ ourProps: S, theirProps: p, slot: d, attrs: t, slots: n, name: "DisclosureButton" });
  };
} }), pn = V({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n, expose: a }) {
  let l = ue("DisclosurePanel");
  Y(() => {
    e.id !== null && (l.panelId.value = e.id);
  }), re(() => {
    l.panelId.value = null;
  }), a({ el: l.panel, $el: l.panel }), X(De, l.panelId);
  let o = ke(), r = D(() => o !== null ? (o.value & T.Open) === T.Open : l.disclosureState.value === 0);
  return () => {
    var s;
    let f = { open: l.disclosureState.value === 0, close: l.close }, { id: m, ...g } = e, v = { id: (s = l.panelId.value) != null ? s : m, ref: l.panel };
    return R({ ourProps: v, theirProps: g, slot: f, attrs: t, slots: n, features: K.RenderStrategy | K.Static, visible: r.value, name: "DisclosurePanel" });
  };
} }), me = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function ve(e) {
  var t, n;
  let a = (t = e.innerText) != null ? t : "", l = e.cloneNode(!0);
  if (!(l instanceof HTMLElement))
    return a;
  let o = !1;
  for (let s of l.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    s.remove(), o = !0;
  let r = o ? (n = l.innerText) != null ? n : "" : a;
  return me.test(r) && (r = r.replace(me, "")), r;
}
function mn(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string")
    return t.trim();
  let n = e.getAttribute("aria-labelledby");
  if (n) {
    let a = n.split(" ").map((l) => {
      let o = document.getElementById(l);
      if (o) {
        let r = o.getAttribute("aria-label");
        return typeof r == "string" ? r.trim() : ve(o).trim();
      }
      return null;
    }).filter(Boolean);
    if (a.length > 0)
      return a.join(", ");
  }
  return ve(e).trim();
}
function vn(e) {
  let t = x(""), n = x("");
  return () => {
    let a = y(e);
    if (!a)
      return "";
    let l = a.innerText;
    if (t.value === l)
      return n.value;
    let o = mn(a).trim().toLowerCase();
    return t.value = l, n.value = o, o;
  };
}
var hn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(hn || {}), gn = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(gn || {});
function _n(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let Ie = Symbol("MenuContext");
function Z(e) {
  let t = z(Ie, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Z), n;
  }
  return t;
}
let bn = V({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: n }) {
  let a = x(1), l = x(null), o = x(null), r = x([]), s = x(""), f = x(null), m = x(1);
  function g(u = (d) => d) {
    let d = f.value !== null ? r.value[f.value] : null, i = ye(u(r.value.slice()), (S) => y(S.dataRef.domRef)), p = d ? i.indexOf(d) : null;
    return p === -1 && (p = null), { items: i, activeItemIndex: p };
  }
  let v = { menuState: a, buttonRef: l, itemsRef: o, items: r, searchQuery: s, activeItemIndex: f, activationTrigger: m, closeMenu: () => {
    a.value = 1, f.value = null;
  }, openMenu: () => a.value = 0, goToItem(u, d, i) {
    let p = g(), S = un(u === P.Specific ? { focus: P.Specific, id: d } : { focus: u }, { resolveItems: () => p.items, resolveActiveIndex: () => p.activeItemIndex, resolveId: (_) => _.id, resolveDisabled: (_) => _.dataRef.disabled });
    s.value = "", f.value = S, m.value = i ?? 1, r.value = p.items;
  }, search(u) {
    let d = s.value !== "" ? 0 : 1;
    s.value += u.toLowerCase();
    let i = (f.value !== null ? r.value.slice(f.value + d).concat(r.value.slice(0, f.value + d)) : r.value).find((S) => S.dataRef.textValue.startsWith(s.value) && !S.dataRef.disabled), p = i ? r.value.indexOf(i) : -1;
    p === -1 || p === f.value || (f.value = p, m.value = 1);
  }, clearSearch() {
    s.value = "";
  }, registerItem(u, d) {
    let i = g((p) => [...p, { id: u, dataRef: d }]);
    r.value = i.items, f.value = i.activeItemIndex, m.value = 1;
  }, unregisterItem(u) {
    let d = g((i) => {
      let p = i.findIndex((S) => S.id === u);
      return p !== -1 && i.splice(p, 1), i;
    });
    r.value = d.items, f.value = d.activeItemIndex, m.value = 1;
  } };
  return tn([l, o], (u, d) => {
    var i;
    v.closeMenu(), se(d, ae.Loose) || (u.preventDefault(), (i = y(l)) == null || i.focus());
  }, D(() => a.value === 0)), X(Ie, v), Oe(D(() => B(a.value, { 0: T.Open, 1: T.Closed }))), () => {
    let u = { open: a.value === 0, close: v.closeMenu };
    return R({ ourProps: {}, theirProps: e, slot: u, slots: t, attrs: n, name: "Menu" });
  };
} }), yn = V({ name: "MenuButton", props: { disabled: { type: Boolean, default: !1 }, as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n, expose: a }) {
  var l;
  let o = (l = e.id) != null ? l : `headlessui-menu-button-${q()}`, r = Z("MenuButton");
  a({ el: r.buttonRef, $el: r.buttonRef });
  function s(v) {
    switch (v.key) {
      case w.Space:
      case w.Enter:
      case w.ArrowDown:
        v.preventDefault(), v.stopPropagation(), r.openMenu(), F(() => {
          var u;
          (u = y(r.itemsRef)) == null || u.focus({ preventScroll: !0 }), r.goToItem(P.First);
        });
        break;
      case w.ArrowUp:
        v.preventDefault(), v.stopPropagation(), r.openMenu(), F(() => {
          var u;
          (u = y(r.itemsRef)) == null || u.focus({ preventScroll: !0 }), r.goToItem(P.Last);
        });
        break;
    }
  }
  function f(v) {
    switch (v.key) {
      case w.Space:
        v.preventDefault();
        break;
    }
  }
  function m(v) {
    e.disabled || (r.menuState.value === 0 ? (r.closeMenu(), F(() => {
      var u;
      return (u = y(r.buttonRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
    })) : (v.preventDefault(), r.openMenu(), _n(() => {
      var u;
      return (u = y(r.itemsRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
    })));
  }
  let g = xe(D(() => ({ as: e.as, type: t.type })), r.buttonRef);
  return () => {
    var v;
    let u = { open: r.menuState.value === 0 }, { ...d } = e, i = { ref: r.buttonRef, id: o, type: g.value, "aria-haspopup": "menu", "aria-controls": (v = y(r.itemsRef)) == null ? void 0 : v.id, "aria-expanded": r.menuState.value === 0, onKeydown: s, onKeyup: f, onClick: m };
    return R({ ourProps: i, theirProps: d, slot: u, attrs: t, slots: n, name: "MenuButton" });
  };
} }), xn = V({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n, expose: a }) {
  var l;
  let o = (l = e.id) != null ? l : `headlessui-menu-items-${q()}`, r = Z("MenuItems"), s = x(null);
  a({ el: r.itemsRef, $el: r.itemsRef }), rn({ container: D(() => y(r.itemsRef)), enabled: D(() => r.menuState.value === 0), accept(u) {
    return u.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : u.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(u) {
    u.setAttribute("role", "none");
  } });
  function f(u) {
    var d;
    switch (s.value && clearTimeout(s.value), u.key) {
      case w.Space:
        if (r.searchQuery.value !== "")
          return u.preventDefault(), u.stopPropagation(), r.search(u.key);
      case w.Enter:
        if (u.preventDefault(), u.stopPropagation(), r.activeItemIndex.value !== null) {
          let i = r.items.value[r.activeItemIndex.value];
          (d = y(i.dataRef.domRef)) == null || d.click();
        }
        r.closeMenu(), be(y(r.buttonRef));
        break;
      case w.ArrowDown:
        return u.preventDefault(), u.stopPropagation(), r.goToItem(P.Next);
      case w.ArrowUp:
        return u.preventDefault(), u.stopPropagation(), r.goToItem(P.Previous);
      case w.Home:
      case w.PageUp:
        return u.preventDefault(), u.stopPropagation(), r.goToItem(P.First);
      case w.End:
      case w.PageDown:
        return u.preventDefault(), u.stopPropagation(), r.goToItem(P.Last);
      case w.Escape:
        u.preventDefault(), u.stopPropagation(), r.closeMenu(), F(() => {
          var i;
          return (i = y(r.buttonRef)) == null ? void 0 : i.focus({ preventScroll: !0 });
        });
        break;
      case w.Tab:
        u.preventDefault(), u.stopPropagation(), r.closeMenu(), F(() => Qt(y(r.buttonRef), u.shiftKey ? ne.Previous : ne.Next));
        break;
      default:
        u.key.length === 1 && (r.search(u.key), s.value = setTimeout(() => r.clearSearch(), 350));
        break;
    }
  }
  function m(u) {
    switch (u.key) {
      case w.Space:
        u.preventDefault();
        break;
    }
  }
  let g = ke(), v = D(() => g !== null ? (g.value & T.Open) === T.Open : r.menuState.value === 0);
  return () => {
    var u, d;
    let i = { open: r.menuState.value === 0 }, { ...p } = e, S = { "aria-activedescendant": r.activeItemIndex.value === null || (u = r.items.value[r.activeItemIndex.value]) == null ? void 0 : u.id, "aria-labelledby": (d = y(r.buttonRef)) == null ? void 0 : d.id, id: o, onKeydown: f, onKeyup: m, role: "menu", tabIndex: 0, ref: r.itemsRef };
    return R({ ourProps: S, theirProps: p, slot: i, attrs: t, slots: n, features: K.RenderStrategy | K.Static, visible: v.value, name: "MenuItems" });
  };
} }), wn = V({ name: "MenuItem", inheritAttrs: !1, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: null } }, setup(e, { slots: t, attrs: n, expose: a }) {
  var l;
  let o = (l = e.id) != null ? l : `headlessui-menu-item-${q()}`, r = Z("MenuItem"), s = x(null);
  a({ el: s, $el: s });
  let f = D(() => r.activeItemIndex.value !== null ? r.items.value[r.activeItemIndex.value].id === o : !1), m = vn(s), g = D(() => ({ disabled: e.disabled, get textValue() {
    return m();
  }, domRef: s }));
  Y(() => r.registerItem(o, g)), re(() => r.unregisterItem(o)), L(() => {
    r.menuState.value === 0 && f.value && r.activationTrigger.value !== 0 && F(() => {
      var _, E;
      return (E = (_ = y(s)) == null ? void 0 : _.scrollIntoView) == null ? void 0 : E.call(_, { block: "nearest" });
    });
  });
  function v(_) {
    if (e.disabled)
      return _.preventDefault();
    r.closeMenu(), be(y(r.buttonRef));
  }
  function u() {
    if (e.disabled)
      return r.goToItem(P.Nothing);
    r.goToItem(P.Specific, o);
  }
  let d = nn();
  function i(_) {
    d.update(_);
  }
  function p(_) {
    d.wasMoved(_) && (e.disabled || f.value || r.goToItem(P.Specific, o, 0));
  }
  function S(_) {
    d.wasMoved(_) && (e.disabled || f.value && r.goToItem(P.Nothing));
  }
  return () => {
    let { disabled: _, ...E } = e, H = { active: f.value, disabled: _, close: r.closeMenu };
    return R({ ourProps: { id: o, ref: s, role: "menuitem", tabIndex: _ === !0 ? void 0 : -1, "aria-disabled": _ === !0 ? !0 : void 0, onClick: v, onFocus: u, onPointerenter: i, onMouseenter: i, onPointermove: p, onMousemove: p, onPointerleave: S, onMouseleave: S }, theirProps: { ...n, ...E }, slot: H, attrs: n, slots: t, name: "MenuItem" });
  };
} });
function Sn(e, t) {
  return h(), b("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    c("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    })
  ]);
}
function he(e, t) {
  return h(), b("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    c("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
    })
  ]);
}
function $n(e, t) {
  return h(), b("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    c("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6 18 18 6M6 6l12 12"
    })
  ]);
}
const kn = { class: "min-h-full" }, On = { class: "bg-gray-800 pb-32" }, Pn = { class: "mx-auto max-w-7xl sm:px-6 lg:px-8" }, Dn = { class: "border-b border-gray-700" }, In = { class: "flex h-16 items-center justify-between px-4 sm:px-0" }, Tn = { class: "flex items-center" }, En = /* @__PURE__ */ c("div", { class: "flex-shrink-0" }, [
  /* @__PURE__ */ c("img", {
    class: "h-8 w-8",
    src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500",
    alt: "Your Company"
  })
], -1), Mn = { class: "hidden md:block" }, jn = { class: "ml-10 flex items-baseline space-x-4" }, Cn = ["href", "aria-current"], An = { class: "hidden md:block" }, Nn = { class: "ml-4 flex items-center md:ml-6" }, Fn = {
  type: "button",
  class: "relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
}, Vn = /* @__PURE__ */ c("span", { class: "absolute -inset-1.5" }, null, -1), Rn = /* @__PURE__ */ c("span", { class: "sr-only" }, "View notifications", -1), Bn = /* @__PURE__ */ c("span", { class: "absolute -inset-1.5" }, null, -1), Ln = /* @__PURE__ */ c("span", { class: "sr-only" }, "Open user menu", -1), Un = ["src"], Hn = ["href"], qn = { class: "-mr-2 flex md:hidden" }, Kn = /* @__PURE__ */ c("span", { class: "absolute -inset-0.5" }, null, -1), zn = /* @__PURE__ */ c("span", { class: "sr-only" }, "Open main menu", -1), Wn = { class: "space-y-1 px-2 py-3 sm:px-3" }, Gn = { class: "border-t border-gray-700 pb-3 pt-4" }, Qn = { class: "flex items-center px-5" }, Yn = { class: "flex-shrink-0" }, Xn = ["src"], Zn = { class: "ml-3" }, Jn = { class: "text-base font-medium leading-none text-white" }, er = { class: "text-sm font-medium leading-none text-gray-400" }, tr = {
  type: "button",
  class: "relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
}, nr = /* @__PURE__ */ c("span", { class: "absolute -inset-1.5" }, null, -1), rr = /* @__PURE__ */ c("span", { class: "sr-only" }, "View notifications", -1), lr = { class: "mt-3 space-y-1 px-2" }, or = /* @__PURE__ */ c("header", { class: "py-10" }, [
  /* @__PURE__ */ c("div", { class: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" }, [
    /* @__PURE__ */ c("h1", { class: "text-3xl font-bold tracking-tight text-white" }, "Dashboard")
  ])
], -1), ar = { class: "-mt-32" }, sr = { class: "mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8" }, ur = { class: "rounded-lg bg-white px-5 py-6 shadow sm:px-6" }, ir = {
  __name: "Template",
  setup(e) {
    const t = {
      name: "Tom Cook",
      email: "tom@example.com",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }, n = [
      { name: "Dashboard", href: "#", current: !0 },
      { name: "Team", href: "#", current: !1 },
      { name: "Projects", href: "#", current: !1 },
      { name: "Calendar", href: "#", current: !1 },
      { name: "Reports", href: "#", current: !1 }
    ], a = [
      { name: "Your Profile", href: "#" },
      { name: "Settings", href: "#" },
      { name: "Sign out", href: "#" }
    ];
    return (l, o) => (h(), b("div", kn, [
      c("div", On, [
        k($(fn), {
          as: "nav",
          class: "bg-gray-800"
        }, {
          default: O(({ open: r }) => [
            c("div", Pn, [
              c("div", Dn, [
                c("div", In, [
                  c("div", Tn, [
                    En,
                    c("div", Mn, [
                      c("div", jn, [
                        (h(), b(I, null, j(n, (s) => c("a", {
                          key: s.name,
                          href: s.href,
                          class: N([s.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "rounded-md px-3 py-2 text-sm font-medium"]),
                          "aria-current": s.current ? "page" : void 0
                        }, M(s.name), 11, Cn)), 64))
                      ])
                    ])
                  ]),
                  c("div", An, [
                    c("div", Nn, [
                      c("button", Fn, [
                        Vn,
                        Rn,
                        k($(he), {
                          class: "h-6 w-6",
                          "aria-hidden": "true"
                        })
                      ]),
                      k($(bn), {
                        as: "div",
                        class: "relative ml-3"
                      }, {
                        default: O(() => [
                          c("div", null, [
                            k($(yn), { class: "relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" }, {
                              default: O(() => [
                                Bn,
                                Ln,
                                c("img", {
                                  class: "h-8 w-8 rounded-full",
                                  src: t.imageUrl,
                                  alt: ""
                                }, null, 8, Un)
                              ]),
                              _: 1
                            })
                          ]),
                          k(Re, {
                            "enter-active-class": "transition ease-out duration-100",
                            "enter-from-class": "transform opacity-0 scale-95",
                            "enter-to-class": "transform opacity-100 scale-100",
                            "leave-active-class": "transition ease-in duration-75",
                            "leave-from-class": "transform opacity-100 scale-100",
                            "leave-to-class": "transform opacity-0 scale-95"
                          }, {
                            default: O(() => [
                              k($(xn), { class: "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, {
                                default: O(() => [
                                  (h(), b(I, null, j(a, (s) => k($(wn), {
                                    key: s.name
                                  }, {
                                    default: O(({ active: f }) => [
                                      c("a", {
                                        href: s.href,
                                        class: N([f ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"])
                                      }, M(s.name), 11, Hn)
                                    ]),
                                    _: 2
                                  }, 1024)), 64))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  c("div", qn, [
                    k($(ee), { class: "relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" }, {
                      default: O(() => [
                        Kn,
                        zn,
                        r ? (h(), C($($n), {
                          key: 1,
                          class: "block h-6 w-6",
                          "aria-hidden": "true"
                        })) : (h(), C($(Sn), {
                          key: 0,
                          class: "block h-6 w-6",
                          "aria-hidden": "true"
                        }))
                      ]),
                      _: 2
                    }, 1024)
                  ])
                ])
              ])
            ]),
            k($(pn), { class: "border-b border-gray-700 md:hidden" }, {
              default: O(() => [
                c("div", Wn, [
                  (h(), b(I, null, j(n, (s) => k($(ee), {
                    key: s.name,
                    as: "a",
                    href: s.href,
                    class: N([s.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "block rounded-md px-3 py-2 text-base font-medium"]),
                    "aria-current": s.current ? "page" : void 0
                  }, {
                    default: O(() => [
                      ce(M(s.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["href", "class", "aria-current"])), 64))
                ]),
                c("div", Gn, [
                  c("div", Qn, [
                    c("div", Yn, [
                      c("img", {
                        class: "h-10 w-10 rounded-full",
                        src: t.imageUrl,
                        alt: ""
                      }, null, 8, Xn)
                    ]),
                    c("div", Zn, [
                      c("div", Jn, M(t.name), 1),
                      c("div", er, M(t.email), 1)
                    ]),
                    c("button", tr, [
                      nr,
                      rr,
                      k($(he), {
                        class: "h-6 w-6",
                        "aria-hidden": "true"
                      })
                    ])
                  ]),
                  c("div", lr, [
                    (h(), b(I, null, j(a, (s) => k($(ee), {
                      key: s.name,
                      as: "a",
                      href: s.href,
                      class: "block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    }, {
                      default: O(() => [
                        ce(M(s.name), 1)
                      ]),
                      _: 2
                    }, 1032, ["href"])), 64))
                  ])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        or
      ]),
      c("main", ar, [
        c("div", sr, [
          c("div", ur, [
            A(l.$slots, "default")
          ])
        ])
      ])
    ]));
  }
}, cr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ir
}, Symbol.toStringTag, { value: "Module" })), dr = ge({
  item: null,
  index: null,
  parent: null
});
function fr() {
  return {
    dragged: dr
  };
}
const pr = { key: 0 }, mr = /* @__PURE__ */ c("li", null, [
  /* @__PURE__ */ c("div", { class: "tree-placeholder" })
], -1), vr = [
  mr
], Te = {
  __name: "TreeContent",
  props: {
    index: Number,
    parent: Object,
    modelValue: Object
  },
  setup(e) {
    const { dragged: t } = fr(), n = e, a = x(!1), l = x(!1), o = x(!0), r = ge({
      sortkey: n.index,
      sortOrder: "asc"
    }), s = (d) => {
      o.value = !1, t.item = n.modelValue, t.index = n.index, t.parent = n.parent, d.dataTransfer.effectAllowed = "move";
    }, f = () => {
      l.value = !1;
    }, m = () => {
      a.value = !1;
    }, g = (d) => {
      d.preventDefault(), d.dataTransfer.dropEffect = "move", l.value = !0;
    }, v = () => {
      event.preventDefault(), event.dataTransfer.dropEffect = "move", a.value = !0;
    }, u = (d, i, p) => {
      d.preventDefault(), a.value = !1, l.value = !1, i !== t.item && (o.value = !0, Object.keys(t.parent).includes("children") && t.parent.children.splice(t.index, 1), Array.isArray(t.parent) && t.parent.splice(t.index, 1), Array.isArray(i) ? i.splice(p, 0, t.item) : (Object.keys(i).includes("children") || (i.children = []), i.children.splice(p, 0, t.item)), t.item = null, t.parent = null, t.index = null);
    };
    return (d, i) => {
      const p = G("font-awesome-icon"), S = G("TreeContent", !0);
      return h(), b("li", {
        class: N([
          $(t).item === n.modelValue ? "selected" : "",
          n.modelValue.children && n.modelValue.children.length ? "has-child" : ""
        ])
      }, [
        c("div", {
          class: N(["tree-content", a.value ? "hovered" : ""]),
          onDragstart: i[7] || (i[7] = (_) => s(_))
        }, [
          c("div", {
            draggable: "true",
            onDragover: i[1] || (i[1] = (_) => v()),
            onDrop: i[2] || (i[2] = (_) => u(_, n.parent, n.index)),
            style: { width: "8px" },
            onDragleave: i[3] || (i[3] = (_) => m())
          }, [
            c("button", {
              style: { "margin-left": "-8px" },
              class: N({
                hide: !(n.modelValue.children && n.modelValue.children.length)
              }),
              onClick: i[0] || (i[0] = () => o.value = !o.value)
            }, [
              o.value ? (h(), C(p, {
                key: 0,
                icon: ["fas", "square-minus"]
              })) : (h(), C(p, {
                key: 1,
                icon: ["fas", "square-plus"]
              }))
            ], 2)
          ], 32),
          c("div", {
            class: "tree-item",
            draggable: "true",
            onDragleave: i[4] || (i[4] = (_) => f()),
            onDragover: i[5] || (i[5] = (_) => g(_)),
            onDrop: i[6] || (i[6] = (_) => u(_, n.modelValue, 0))
          }, [
            A(d.$slots, "default", {
              element: n.modelValue,
              parent: n.parent,
              stats: r
            })
          ], 32)
        ], 34),
        l.value ? (h(), b("ul", pr, vr)) : Q("", !0),
        o.value ? (h(!0), b(I, { key: 1 }, j(n.modelValue.children, (_, E) => (h(), b("ul", null, [
          k(S, {
            modelValue: n.modelValue.children[E],
            "onUpdate:modelValue": (H) => n.modelValue.children[E] = H,
            parent: n.modelValue,
            index: E
          }, {
            default: O(({ element: H, parent: Ee, stats: Me }) => [
              A(d.$slots, "default", {
                element: H,
                parent: Ee,
                stats: Me
              })
            ]),
            _: 2
          }, 1032, ["modelValue", "onUpdate:modelValue", "parent", "index"])
        ]))), 256)) : Q("", !0)
      ], 2);
    };
  }
}, hr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Te
}, Symbol.toStringTag, { value: "Module" })), gr = { class: "trees" }, _r = {
  __name: "Tree",
  props: {
    modelValue: Array
  },
  setup(e) {
    const t = e;
    return (n, a) => (h(), b("ul", gr, [
      (h(!0), b(I, null, j(t.modelValue, (l, o) => (h(), C(Te, {
        modelValue: t.modelValue[o],
        "onUpdate:modelValue": (r) => t.modelValue[o] = r,
        parent: t.modelValue,
        index: o
      }, {
        default: O(({ element: r, parent: s, stats: f }) => [
          A(n.$slots, "default", {
            element: r,
            parent: t.parent,
            stats: f
          }, void 0, !0)
        ]),
        _: 2
      }, 1032, ["modelValue", "onUpdate:modelValue", "parent", "index"]))), 256))
    ]));
  }
}, br = /* @__PURE__ */ U(_r, [["__scopeId", "data-v-50ab8038"]]), yr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: br
}, Symbol.toStringTag, { value: "Module" })), Sr = {
  install: (e) => {
    Object.entries(/* @__PURE__ */ Object.assign({
      "./components/Builder.vue": Le,
      "./components/forms/Form.vue": He,
      "./components/forms/FormButtons.vue": Xe,
      "./components/forms/Input.vue": ot,
      "./components/forms/Title.vue": ft,
      "./components/layout/Breadcrumbs.vue": wt,
      "./components/layout/Column.vue": Pt,
      "./components/layout/Content.vue": Mt,
      "./components/layout/Row.vue": Ft,
      "./components/layout/Template.vue": cr,
      "./components/misc/Tree.vue": yr,
      "./components/misc/TreeContent.vue": hr
    })).forEach(([n, a]) => {
      const l = n.split("/").pop().replace(/\.\w+$/, "");
      e.component(l, a.default);
    });
  }
};
export {
  Sr as Components,
  br as Tree
};
