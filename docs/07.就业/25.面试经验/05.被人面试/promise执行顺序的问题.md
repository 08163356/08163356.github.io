---
title: promise执行顺序的问题
date: 2023-03-12 19:57:16
permalink: /pages/e1d792/
categories:
  - 就业
  - 面试经验
  - 被人面试
tags:
  - 
author: 
  name: aXing
  link: https://github.com/08163356
---
```
const myPromise = Promise.resolve(Promise.resolve("Promise!"));
function funcOne() {
    myPromise.then(res => {
        console.log("执行第一个then", res)
        return res }).then(res => {
            console.log('执行第二个then', res)
        });
    setTimeout(() => console.log("Timeout!1"), 0);
    console.log("Last line!"); }
async function funcTwo() {
    console.log('进入funcTwo')
    const res = await myPromise;
    console.log('执行完第一个await，继续往下执行')
    console.log(await res);
    console.log('执行完第二个await，继续往下执行')
    setTimeout(() => console.log("Timeout!2"), 0);
    console.log("Last line!"); }
funcOne();
funcTwo();


```

```
// Last line!
//     进入funcTwo
// 执行第一个then Promise!
//     执行完第一个await，继续往下执行
// 执行第二个then Promise!
//     Promise!
//     执行完第二个await，继续往下执行
// Last line!
//     Timeout!1
// Timeout!2

```

