---
title: watch的实现原理
date: 2024-01-21 03:32:45
permalink: /pages/4e350a/
categories:
  - 技术
  - 前端
  - VUE学习
  - 《vue.js3设计与实现》原理学习
tags:
  - 
author: 
  name: aXing
  link: https://github.com/08163356
---
竞态问题

```
let finalData

watch(obj, async () => {
  // 发送并等待网络请求
  const res = await fetch('/path/to/request')
  // 将请求结果赋值给 data
  finalData = res
})
```

当改变

