import { resolveComponent as m, openBlock as s, createElementBlock as l, Fragment as b, renderList as g, createBlock as d, resolveDynamicComponent as y, mergeProps as f, withCtx as h, createCommentVNode as p, normalizeClass as v, withModifiers as j, renderSlot as a, createElementVNode as i, toDisplayString as x } from "vue";
const $ = {
  __name: "Builder",
  props: {
    object: {
      required: !1,
      default: null
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
    return (o, r) => {
      const n = m("builder", !0);
      return s(!0), l(b, null, g(e.design, (t, c) => (s(), d(y(t.component), f({
        key: t,
        ref_for: !0
      }, {
        endpoint: e.endpoint,
        object: e.object,
        class: t.class,
        configs: t.configs
      }), {
        default: h(() => [
          t.children && t.children.length ? (s(), d(n, f({
            key: 0,
            ref_for: !0
          }, {
            endpoint: e.endpoint,
            object: e.object,
            design: t.children
          }), null, 16)) : p("", !0)
        ]),
        _: 2
      }, 1040))), 128);
    };
  }
}, w = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $
}, Symbol.toStringTag, { value: "Module" })), O = {
  __name: "Form",
  props: {
    object: {
      required: !1,
      default: null
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
    const o = e, r = async () => {
      const n = document.getElementById("website-form"), t = new FormData(n);
      try {
        let c;
        const _ = { headers: { "Content-Type": "multipart/form-data" } };
        Object.keys(object).length ? (t.append("_method", "put"), c = await axios.post(o.endpoint, t, _)) : c = await axios.post(o.endpoint, t, _), location.assign(c.data.redirect);
      } catch (c) {
        window.notyf.error(c.response.data);
      }
      return !1;
    };
    return (n, t) => {
      const c = m("form-buttons");
      return s(), l("form", {
        id: "website-form",
        class: v(o.class),
        onSubmit: j(r, ["prevent"])
      }, [
        a(n.$slots, "default"),
        o.endpoint ? (s(), d(c, { key: 0 })) : p("", !0)
      ], 34);
    };
  }
}, S = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: O
}, Symbol.toStringTag, { value: "Module" })), u = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [n, t] of o)
    r[n] = t;
  return r;
}, k = {}, C = { class: "mt-6 flex items-center justify-end gap-x-6" }, q = /* @__PURE__ */ i("button", {
  type: "button",
  class: "text-sm font-semibold leading-6 text-gray-900"
}, "Cancel", -1), T = /* @__PURE__ */ i("button", {
  type: "submit",
  class: "rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
}, "Save", -1), z = [
  q,
  T
];
function B(e, o) {
  return s(), l("div", C, z);
}
const M = /* @__PURE__ */ u(k, [["render", B]]), P = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: M
}, Symbol.toStringTag, { value: "Module" })), F = { class: "mt-5" }, D = {
  for: "username",
  class: "block text-sm font-medium leading-6 text-gray-900"
}, E = /* @__PURE__ */ i("div", { class: "mt-2" }, [
  /* @__PURE__ */ i("div", { class: "flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600" }, [
    /* @__PURE__ */ i("input", {
      type: "text",
      name: "username",
      id: "username",
      autocomplete: "username",
      class: "block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6",
      placeholder: "janesmith"
    })
  ])
], -1), I = {
  __name: "InputText",
  props: {
    object: {
      required: !1,
      default: null
    },
    endpoint: {
      required: !1,
      default: !1
    },
    class: {
      required: !1,
      default: {}
    },
    configs: {
      required: !1,
      default: {}
    }
  },
  setup(e) {
    const o = e;
    return (r, n) => (s(), l("div", F, [
      i("label", D, x(o.configs.title), 1),
      E
    ]));
  }
}, N = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: I
}, Symbol.toStringTag, { value: "Module" })), R = {}, V = { class: "col" };
function L(e, o) {
  return s(), l("div", V, [
    a(e.$slots, "default")
  ]);
}
const A = /* @__PURE__ */ u(R, [["render", L]]), G = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: A
}, Symbol.toStringTag, { value: "Module" })), H = {}, J = { class: "container mx-auto mt-5" };
function K(e, o) {
  return s(), l("div", J, [
    a(e.$slots, "default")
  ]);
}
const Q = /* @__PURE__ */ u(H, [["render", K]]), U = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Q
}, Symbol.toStringTag, { value: "Module" })), W = {}, X = { class: "row" };
function Y(e, o) {
  return s(), l("div", X, [
    a(e.$slots, "default")
  ]);
}
const Z = /* @__PURE__ */ u(W, [["render", Y]]), ee = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Z
}, Symbol.toStringTag, { value: "Module" })), oe = {
  install: (e) => {
    Object.entries(/* @__PURE__ */ Object.assign({
      "./components/Builder.vue": w,
      "./components/forms/Form.vue": S,
      "./components/forms/FormButtons.vue": P,
      "./components/forms/InputText.vue": N,
      "./components/layout/Column.vue": G,
      "./components/layout/Content.vue": U,
      "./components/layout/Row.vue": ee
    })).forEach(([r, n]) => {
      const t = r.split("/").pop().replace(/\.\w+$/, "");
      e.component(t, n.default);
    });
  }
};
export {
  oe as components
};
