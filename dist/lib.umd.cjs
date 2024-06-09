(function(l,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(l=typeof globalThis<"u"?globalThis:l||self,e(l.lib={},l.Vue))})(this,function(l,e){"use strict";const d=Object.freeze(Object.defineProperty({__proto__:null,default:{__name:"Builder",props:{object:{required:!1,default:null},design:{required:!0},endpoint:{required:!1,default:!1}},setup(t){return(n,r)=>{const s=e.resolveComponent("builder",!0);return e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.design,(o,c)=>(e.openBlock(),e.createBlock(e.resolveDynamicComponent(o.component),e.mergeProps({key:o,ref_for:!0},{endpoint:t.endpoint,object:t.object,class:o.class,configs:o.configs}),{default:e.withCtx(()=>[o.children&&o.children.length?(e.openBlock(),e.createBlock(s,e.mergeProps({key:0,ref_for:!0},{endpoint:t.endpoint,object:t.object,design:o.children}),null,16)):e.createCommentVNode("",!0)]),_:2},1040))),128)}}}},Symbol.toStringTag,{value:"Module"})),_=Object.freeze(Object.defineProperty({__proto__:null,default:{__name:"Form",props:{object:{required:!1,default:null},endpoint:{required:!1,default:!1},class:{required:!1,default:{}}},setup(t){const n=t,r=async()=>{const s=document.getElementById("website-form"),o=new FormData(s);try{let c;const a={headers:{"Content-Type":"multipart/form-data"}};Object.keys(object).length?(o.append("_method","put"),c=await axios.post(n.endpoint,o,a)):c=await axios.post(n.endpoint,o,a),location.assign(c.data.redirect)}catch(c){window.notyf.error(c.response.data)}return!1};return(s,o)=>{const c=e.resolveComponent("form-buttons");return e.openBlock(),e.createElementBlock("form",{id:"website-form",class:e.normalizeClass(n.class),onSubmit:e.withModifiers(r,["prevent"])},[e.renderSlot(s.$slots,"default"),n.endpoint?(e.openBlock(),e.createBlock(c,{key:0})):e.createCommentVNode("",!0)],34)}}}},Symbol.toStringTag,{value:"Module"})),i=(t,n)=>{const r=t.__vccOpts||t;for(const[s,o]of n)r[s]=o;return r},f={},m={class:"mt-6 flex items-center justify-end gap-x-6"},u=[e.createElementVNode("button",{type:"button",class:"text-sm font-semibold leading-6 text-gray-900"},"Cancel",-1),e.createElementVNode("button",{type:"submit",class:"rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},"Save",-1)];function p(t,n){return e.openBlock(),e.createElementBlock("div",m,u)}const b=Object.freeze(Object.defineProperty({__proto__:null,default:i(f,[["render",p]])},Symbol.toStringTag,{value:"Module"})),g={class:"mt-5"},y={for:"username",class:"block text-sm font-medium leading-6 text-gray-900"},h=e.createElementVNode("div",{class:"mt-2"},[e.createElementVNode("div",{class:"flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"},[e.createElementVNode("input",{type:"text",name:"username",id:"username",autocomplete:"username",class:"block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6",placeholder:"janesmith"})])],-1),j=Object.freeze(Object.defineProperty({__proto__:null,default:{__name:"InputText",props:{object:{required:!1,default:null},endpoint:{required:!1,default:!1},class:{required:!1,default:{}},configs:{required:!1,default:{}}},setup(t){const n=t;return(r,s)=>(e.openBlock(),e.createElementBlock("div",g,[e.createElementVNode("label",y,e.toDisplayString(n.configs.title),1),h]))}}},Symbol.toStringTag,{value:"Module"})),k={},x={class:"col"};function B(t,n){return e.openBlock(),e.createElementBlock("div",x,[e.renderSlot(t.$slots,"default")])}const $=Object.freeze(Object.defineProperty({__proto__:null,default:i(k,[["render",B]])},Symbol.toStringTag,{value:"Module"})),S={},w={class:"container mx-auto mt-5"};function O(t,n){return e.openBlock(),e.createElementBlock("div",w,[e.renderSlot(t.$slots,"default")])}const C=Object.freeze(Object.defineProperty({__proto__:null,default:i(S,[["render",O]])},Symbol.toStringTag,{value:"Module"})),E={},T={class:"row"};function q(t,n){return e.openBlock(),e.createElementBlock("div",T,[e.renderSlot(t.$slots,"default")])}const P=Object.freeze(Object.defineProperty({__proto__:null,default:i(E,[["render",q]])},Symbol.toStringTag,{value:"Module"})),M={install:t=>{Object.entries(Object.assign({"./components/Builder.vue":d,"./components/forms/Form.vue":_,"./components/forms/FormButtons.vue":b,"./components/forms/InputText.vue":j,"./components/layout/Column.vue":$,"./components/layout/Content.vue":C,"./components/layout/Row.vue":P})).forEach(([r,s])=>{const o=r.split("/").pop().replace(/\.\w+$/,"");t.component(o,s.default)})}};l.components=M,Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});
