---
title: Setup语法糖简易使用
cover: https://pan.zealsay.com/zealsay/cover/3.jpg
tags:
    - vue.js
    - vue3
categories:
    - vue3
---
# 1.Setup语法糖？

Vue3新增了composition API，丹斯setup函数内需要频繁return相关的变量和函数，导致开发起来会很不方便，setup语法糖 就很好的解决了频繁return的问题

# 2、setup语法糖使用

### 1. setup语法糖中无需return 声明的变量、函数以及import引入的内容，即可在 模版template中使用

```
<template>

 <div>{{name}}</div>

</template>

<script setup>

import { ref } from "vue";

const name=ref('帅')
</script>

```

* 标准组件 scriipt需要些setup函数并需要频繁return

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

总结：setup语法糖里面的代码会被编译成组件 setup () 函数的内容，不需要通过return暴露 声明的变量、函数以及import引入的内容，即可在tenmplate中使用，并且不需要写 export default()

setup语法糖里面的代码会被编译成组件 setup ()函数的内容。这意味着与普通的 script 只在组件被首次引入的时候执行一次不同    setup语法糖中的代码会在**每次组件实例被创建的时候执行**

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

里面的代码会被编译成组件 setup 函数的内容。这意味着与普通的  script 只在组件被首次引入的时候执行一次不同，setup 语法糖中的代码会在 **每次组件实例被创建的时候执行** 。

### 2、setup语法糖 引入组件自动注册

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

将 MyComponent看做被一个变量所引用。如果你使用过 JSX，在这里的使用它的心智模型是一样的。其 kebab-case 格式的 my-MyComponent 同样能在模板中使用。不过，我们强烈建议使用 PascalCase 格式以保持一致性。同时也有助于区分原生的自定义元素。
