---
title: computed和watch的区别
date: 2024-03-08 11:56:20
permalink: /pages/eb5990/
categories:
  - vue知识总结
  - vue面试题
tags:
  - 
author: 
  name: aXing
  link: https://github.com/08163356
---
**1、功能**：computed是计算属性，watch是监听一个值的变化而执行对应的回调
 **2、是否调用缓存：** computed函数所依赖的属性不变的时候会调用缓存；watch每次监听的值发生变化时候都会调用回调
 **3、是否调用return：** computed必须有；watch可以没有
 **4、使用场景：** computed当一个属性受多个属性影响的时候；例如购物车商品结算；watch当一条数据影响多条数据的时候，例如搜索框
 **5、是否支持异步：** computed函数不能有异步；watch可以