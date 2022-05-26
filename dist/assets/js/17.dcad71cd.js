(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{624:function(t,e,n){"use strict";n.r(e);var a=n(5),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"pinia入门"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pinia入门"}},[t._v("#")]),t._v(" Pinia入门")]),t._v(" "),n("h3",{attrs:{id:"pinia是什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pinia是什么"}},[t._v("#")]),t._v(" Pinia是什么？")]),t._v(" "),n("p",[t._v("Pinia是Vue的存储库，它允许我们可以跨组件/页面共享状态。")]),t._v(" "),n("h3",{attrs:{id:"pina安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pina安装"}},[t._v("#")]),t._v(" Pina安装")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("yarn add pinia\n# or with npm\nnpm install pinia\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("提示\n\n如果您的应用使用 Vue 2，您还需要安装组合 api: @vue/composition-api。如果您使用 Nuxt，则应遵循这些说明。\n")])])]),n("p",[t._v("如果你使用的是 Vue CLI，你可以试试这个"),n("a",{attrs:{href:"https://github.com/wobsoriano/vue-cli-plugin-pinia",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[t._v("非官方的插件。")]),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("创建一个 pinia（根存储）并将其传递给应用程序：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("import { createPinia } from 'pinia'\n\napp.use(createPinia())\n")])])]),n("p",[t._v("如果您使用的是 Vue 2，您还需要安装一个插件并"),n("code",[t._v("pinia")]),t._v("在应用程序的根目录注入创建的插件：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("import { createPinia, PiniaVuePlugin } from 'pinia'\n\nVue.use(PiniaVuePlugin)\nconst pinia = createPinia()\n\nnew Vue({\n  el: '#app',\n  // other options...\n  // ...\n  // note the same `pinia` instance can be used across multiple Vue apps on\n  // the same page\n  pinia,\n})\n")])])]),n("h3",{attrs:{id:"pinia的基本使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pinia的基本使用"}},[t._v("#")]),t._v(" Pinia的基本使用")]),t._v(" "),n("p",[t._v("创建state")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("import { defineStore } from 'pinia';\n\nexport const useCounterStore = defineStore('counter', {\n  state: () => ({\n    name: '帅哥',\n    age:24\n  }),\n\n\tactions: {\n\t\tupdateName() {\n\t\t\tthis.name = '帅';\n\t\t},\n\t\tupdateAge() {\n\t\t\tthis.age = 25;\n\t\t},\n\t},\n});\n")])])]),n("p",[t._v("组件使用")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<template>\n\t<div>\n\t\t<p>{{ store.name }}</p>\n\t\t<button @click="add">count ++</button>\n\t</div>\n</template>\n\n<script setup lang="ts">;\n\nimport { useCounterStore } from \'./store\';\n\nconst store = useCounterStore();\n\nstore.$patch({ age: store.age++ });\n\nconst add = () => {\n\tstore.updateName();\n};\n\n')])])]),n("p",[t._v("如果不熟悉setup() Composition API  可以使用类似的地图助手，列入Vuex。可以以相同的方式定义存储 随后使用 mapStores()、mapState()"),n("code",[t._v("或")]),t._v("mapActions()：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("const useCounterStore = defineStore('counter', {\n  state: () => ({ count: 0 }),\n  getters: {\n    double: (state) => state.count * 2,\n  },\n  actions: {\n    increment() {\n      this.count++\n    },\n  },\n})\n\nconst useUserStore = defineStore('user', {\n // 同上\n})\n\nexport default {\n  computed: {\n    this.userStore\n    ...mapStores(useCounterStore, useUserStore),\n    ...mapState(useCounterStore, ['count', 'double']),\n  },\n  methods: {\n    ...mapActions(useCounterStore, ['increment']),\n  },\n}\n")])])]),n("h3",{attrs:{id:"pinia与vuex比较"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pinia与vuex比较"}},[t._v("#")]),t._v(" Pinia与Vuex比较")]),t._v(" "),n("p",[t._v("相比较Vuex，Pinia提交了一个更简单的API，具有更少的仪式，提供了Composition-API风格的API，最重要的是，在于TypeScript一起使用时具有更可靠的类型推断支持。")]),t._v(" "),n("p",[t._v("Pinia API 与 Vuex ≤4 有很大不同，即：")]),t._v(" "),n("ul",[n("li",[n("em",[t._v("突变")]),t._v("不再存在。他们经常被认为是*"),n("strong",[t._v("非常*冗长")]),t._v("的。他们最初带来了 devtools 集成，但这不再是问题。")]),t._v(" "),n("li",[t._v("无需创建自定义复杂包装器来支持 TypeScript，所有内容都是类型化的，并且 API 的设计方式尽可能利用 TS 类型推断。")]),t._v(" "),n("li",[t._v("不再需要注入魔法字符串、导入函数、调用它们，享受自动完成功能！")]),t._v(" "),n("li",[t._v("无需动态添加商店，默认情况下它们都是动态的，您甚至都不会注意到。请注意，您仍然可以随时手动使用商店进行注册，但因为它是自动的，您无需担心。")]),t._v(" "),n("li",[t._v("不再有"),n("em",[t._v("模块")]),t._v("的嵌套结构。您仍然可以通过在另一个商店中导入和"),n("em",[t._v("使用")]),t._v("商店来隐式嵌套商店，但 Pinia 通过设计提供平面结构，同时仍然支持商店之间的交叉组合方式。"),n("strong",[t._v("你甚至可以有 store 的循环依赖")]),t._v("。")]),t._v(" "),n("li",[t._v("没有"),n("em",[t._v("命名空间的模块")]),t._v("。鉴于商店的扁平架构，“命名空间”商店是其定义方式所固有的，您可以说所有商店都是命名空间的。")])])])}),[],!1,null,null,null);e.default=s.exports}}]);