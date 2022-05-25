---
title: Pinia入门
cover: https://pan.zealsay.com/zealsay/cover/3.jpg
tags:
    - vue.js
    - vue3
    - Pinia
    - state
categories:
    - State

---

# Pinia入门

### Pinia是什么？

Pinia是Vue的存储库，它允许我们可以跨组件/页面共享状态。

### Pina安装

```
yarn add pinia
# or with npm
npm install pinia
```

```
提示

如果您的应用使用 Vue 2，您还需要安装组合 api: @vue/composition-api。如果您使用 Nuxt，则应遵循这些说明。
```

如果你使用的是 Vue CLI，你可以试试这个[**非官方的插件。**](https://github.com/wobsoriano/vue-cli-plugin-pinia)

创建一个 pinia（根存储）并将其传递给应用程序：

```
import { createPinia } from 'pinia'

app.use(createPinia())
```

如果您使用的是 Vue 2，您还需要安装一个插件并`pinia`在应用程序的根目录注入创建的插件：

```
import { createPinia, PiniaVuePlugin } from 'pinia'

Vue.use(PiniaVuePlugin)
const pinia = createPinia()

new Vue({
  el: '#app',
  // other options...
  // ...
  // note the same `pinia` instance can be used across multiple Vue apps on
  // the same page
  pinia,
})
```

### Pinia的基本使用

创建state

```
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    name: '帅哥',
    age:24
  }),

	actions: {
		updateName() {
			this.name = '帅';
		},
		updateAge() {
			this.age = 25;
		},
	},
});
```

组件使用 

```
<template>
	<div>
		<p>{{ store.name }}</p>
		<button @click="add">count ++</button>
	</div>
</template>

<script setup lang="ts">;

import { useCounterStore } from './store';

const store = useCounterStore();

store.$patch({ age: store.age++ });

const add = () => {
	store.updateName();
};

```

如果不熟悉setup() Composition API  可以使用类似的地图助手，列入Vuex。可以以相同的方式定义存储 随后使用 mapStores()、mapState()`或`mapActions()：

```
const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})

const useUserStore = defineStore('user', {
 // 同上
})

export default {
  computed: {
    this.userStore
    ...mapStores(useCounterStore, useUserStore),
    ...mapState(useCounterStore, ['count', 'double']),
  },
  methods: {
    ...mapActions(useCounterStore, ['increment']),
  },
}
```

### Pinia与Vuex比较

相比较Vuex，Pinia提交了一个更简单的API，具有更少的仪式，提供了Composition-API风格的API，最重要的是，在于TypeScript一起使用时具有更可靠的类型推断支持。

Pinia API 与 Vuex ≤4 有很大不同，即：

- *突变*不再存在。他们经常被认为是***非常\*冗长**的。他们最初带来了 devtools 集成，但这不再是问题。
- 无需创建自定义复杂包装器来支持 TypeScript，所有内容都是类型化的，并且 API 的设计方式尽可能利用 TS 类型推断。
- 不再需要注入魔法字符串、导入函数、调用它们，享受自动完成功能！
- 无需动态添加商店，默认情况下它们都是动态的，您甚至都不会注意到。请注意，您仍然可以随时手动使用商店进行注册，但因为它是自动的，您无需担心。
- 不再有*模块*的嵌套结构。您仍然可以通过在另一个商店中导入和*使用*商店来隐式嵌套商店，但 Pinia 通过设计提供平面结构，同时仍然支持商店之间的交叉组合方式。**你甚至可以有 store 的循环依赖**。
- 没有*命名空间的模块*。鉴于商店的扁平架构，“命名空间”商店是其定义方式所固有的，您可以说所有商店都是命名空间的。