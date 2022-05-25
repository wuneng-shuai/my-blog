---
title: 第三章、vue.js3的设计思路
cover: https://pan.zealsay.com/zealsay/cover/3.jpg
date: 2022-05-17
tags:
    - vue.js
categories:
    - 《vue.js设计与实现》
---
# **第三章、vue.js3 的设计思路**

```
框架的设计里到处都体现了艺术
```

### 1、声明式描述 UI

1. vue3 是一个声明式的 UI 框架
2. 使用 JavaStript 对象来来描述 UI

   ```
     const title={
   // 标签名称
      tag:'h1',
   //标签属性
       props:{
       onClick:handler
   },
   //子节点
     children:[
      {tag:'span'}
      ]
   }
   ```

对应到Vue.js模版就是

```
<h1 @click="handler"><span></span></h1>
```

使用JavaStript来描述UI 会更加的灵活

### 2、初识渲染器

虚拟DOM：就是用JavaScript对象来描述真实的DOM结构

假设我们有如下虚拟DOM

```
  const vnode = {
    // 描述标签名称
    tag: 'div',
    // 表述标签的属性
    props: {
      onClick: () => alert('hello'),
    },
    // 子节点
    children: 'click me',
  };

  // 渲染器
  function renderer (vnode, container)
  {
    // 使用vnode.tag作为标签名称创建DOM元素
    const el = document.createElement(vnode.tag);
    // 遍历vnode.props 将属性、事件添加到DOM元素
    for (const key in vnode.props) {
      if (/^on/.test(key)) {
        // 如果key以on开头，说明是事件
        el.addEventListener(
          key.substr(2).toLowerCase(), //事件名称 onClick----click
          vnode.props[key] //事件处理函数
        );
      }
    }

    // 处理children
    if (typeof vnode.children === 'string') {
      // 如果children是字符串，说明他是元素的子节点
      el.appendChild(document.createTextNode(vnode.children));
    } else if (Array.isArray(vnode.children)) {
      // 递归地调用 renderer函数渲染子节点 使用当前元素el作为挂在点
      vnode.children.forEach((child) => renderer(child, el));
    }

    // 将元素添加到挂载电下
    container.appendChild(el)
  }
  renderer(vnode,document.body)
```

浏览器运行这段代码 会渲染出 click me这段文字 点击文字会弹出 hello

### 3、组件的本质

本质：组件就是一组DOM元素的封装，可以是一个返回虚拟DOM的函数，也可以是一个对象，但这个对象必须要有一个函数来产出组件要渲染的虚拟DOM

### 总结

##### 渲染器实现思路

* 创建元素：把vnode.tag作为标签名称来创建DOM元素
* 为元素添加属性和事件：遍历vnode.props对象，如果key以on字符开头，说明是事件，去掉on调用toLowerCase小写话，最终调用addEventListener绑定事件处理函数
* 处理children：如果children是数组，递归调用renderer函数继续渲染，父节点为挂载点，如果children是字符串，则使用createTextNode函数创建一个文本节点，并添加到新创建的元素内
* 渲染器的工作原理，其根本就是利用我们熟悉的DOM操作API来完成渲染的工作
