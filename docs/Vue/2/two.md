---
title: 第二章、框架设计的核心要素
cover: https://pan.zealsay.com/zealsay/cover/3.jpg
date: 2022-05-16
tags:
    - vue.js
categories:
    - 《vue.js设计与实现》
---
# **第二章、框架设计的核心要素**

```
框架的设计要比想象的更加复杂
```

1、在开发环境中为用户提供友好的警告信息的同时，不增加成产环境代码的体积。利用Tree-Shaking机智，设置预定义的_DEV_常量

2、Tree-Shaking：指的是消除那些永远不会被执行的代码，也就是排除 dead code

3、使用/*#___PURE*__*/注释 辅助构建工具Tree-Shaking

4、HTML页面中使用 `<script>标签引入框架并使用，实现这个需求，我们需要输出格式为IIFE的资源，即'立即调用的函数表达式'`

输出格式为'ESM'资源时，用户可以直接用 `<script type="module">`标签引入，ESM有两种格式：用于浏览器的会将 `__DEV__`替换为字面量 `true`或 `false`，用于打包工具的会替换为 `process.env.NODE_ENV !== 'production'`。ESM有两种格

5、用户可以通过特性开关关闭vue中对应的特性，从而减少Tree-Shaking打包体积，列入可以通过：__VUE_OPTIONS_API____开关来关闭optionsAPI 即组件选项api，vue.js中,我们更推荐使用Composition API来编写代码

6、错误处理

```
//utils.js
let handlerError = null
export default {
    foo(fn) {
        // 封装统一的错误处理函数进行报错处理
        callWithErrorHandling(fn)
    },
    //用户可以自定义注册统一的错误处理函数
    registerErrorHandle(fn) {
        handlerError = fn
    }
}

function callWithErrorHandling(fn) {
    try {
        fn && fn()
    } catch (e) {
        handlerError && handlerError(e)
    }
}


import utils form 'utils.js'
// 注册错误处理程序
utils.registerErrorHandle((e)=>{
console.log(e)
})
utils.foo(()+>{/*..*/})
utils.bar(()+>{/*..*/})



// Vue中注册统一的错误处理函数
import { createApp } from 'vue'
import App from 'App.vue'
const app = createApp(App)
app.config.errorHandler = () => {
    // 处理报错
}

```
