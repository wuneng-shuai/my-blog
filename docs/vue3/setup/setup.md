---
title: Setup语法糖简易使用
cover: https://pan.zealsay.com/zealsay/cover/3.jpg
tags:
    - vue.js
    - vue3
categories:
    - vue3
---
# 1、Setup语法糖？

1. `<script setup>` 是Vue3 setup的语法糖写法。
2. Vue3新增了composition API，丹斯setup函数内需要频繁return相关的变量和函数，导致开发起来会很不方便，setup语法糖`script setup` 就很好的解决了频繁return的问题

# 2、setup语法糖使用

### 1. `script setup`中无需return 声明的变量、函数以及import引入的内容，即可在`<template/>`使用

```
<template>

 <div>{{name}}</div>

</template>

<script setup>

import { ref } from "vue";

const name=ref('帅')
</script>

```

* 标准组件<script> 需要些setup函数并需要频繁return

```
<template>
  <div>{{name}}</div>
</template>

<script>
import {ref} from 'vue'
export default{
  setup() {
    const name=ref('帅')
    return{
      name
    }
  }
}
</script>
```

总结：`<script setup>`语法糖里面的代码会被编译成组件 `setup()` 函数的内容，不需要通过return暴露 声明的变量、函数以及import引入的内容，即可在`<template/>`使用，并且不需要写`export default{}`

`<script setup>`语法糖里面的代码会被编译成组件 `setup()` 函数的内容。这意味着与普通的 `<script>` 只在组件被首次引入的时候执行一次不同，`<script setup>` 中的代码会在**每次组件实例被创建的时候执行**

```
  <script>
  console.log('script');//多次实例组件,只触发一次
  export default {
      setup() {
          console.log('setupFn');//每次实例化组件都触发和script-setup标签一样
      }
  }
  </script>

```

里面的代码会被编译成组件 `setup()` 函数的内容。这意味着与普通的 `<script>` 只在组件被首次引入的时候执行一次不同，`<script setup>` 中的代码会在 **每次组件实例被创建的时候执行** 。

### 2、`script setup` 引入组件自动注册

```
不需要在引入组件后，通过 components:{}注册组件，可直接使用
```

```
<template>
 <!-- 组件直接使用 -->
<setupViews/>
</template>
<script setup>
// 引入组件不需要注册
import setupViews from './components/icons/setup.vue'
</script>

```

将 `MyComponent` 看做被一个变量所引用。如果你使用过 JSX，在这里的使用它的心智模型是一样的。其 kebab-case 格式的 `<my-component>` 同样能在模板中使用。不过，我们强烈建议使用 PascalCase 格式以保持一致性。同时也有助于区分原生的自定义元素。

### 3、组件通信 defineProps`和`defineEmits`

在 `<script setup>` 中必须使用 `defineProps` 和 `defineEmits` API 来声明 `props` 和 `emits` ，它们具备完整的类型推断并且在 `<script setup>` 中是直接可用的：

```
<script setup>
const props = defineProps({
  foo: String
})

const emit = defineEmits(['change', 'delete'])
// setup code
</script>
```

<script setup>
const props = defineProps({
  foo: String
})

const emit = defineEmits(['change', 'delete'])
// setup code
</script>
