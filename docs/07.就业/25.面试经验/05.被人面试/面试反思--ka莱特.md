---
title: 面试反思--ka莱特
date: 2024-03-14 16:01:37
permalink: /pages/669971/
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
1.this的指向问题有点没弄清楚

2.过往的项目

3.编程题，数组的扁平化

4.vue的一些基础知识点

5.给代码看输出：promise/this指向/宏任务微任务

二面：

1.这几年的成长

2.带团队的经验、心的

3.离职原因等一些基本情况

4.对于他们公司的一个介绍

5.期望薪资

应该是一个定级面

反思：

1.整体思路的表达可以更清晰一些，分点讨论

2.语调什么的调整下

3.如果很有意愿的话，对方在表达的时候可以把自己的优势融入进去回答他的问题。

4.自我介绍的时候可以把过往的荣誉加进去，比如绩效一直是xxx、获得过什么集团奖项、团队获得过什么奖、或者发表了什么专利

5.简历中没有体现太多个人的项目难点什么的。



比如我们公司经常加班：表达自己是能接受加班，而且也有意愿在压力中提升自己的etc.

整体表现是不错的，再接再厉吧

```
function debounce(fn, delay){
let timer = null 
return function(args){
if(timer) { clearTimeout(timer) }
timer = setTimeout(()=>{
function.apply(this, args)

}, delay)
}

}

function throttle (fn, delay){
let timer = null
return function(){
if(!timer){
timer = setTimeout(()=>{
fn.apply(this, arguements)
timer = null
}, delay)
}
}

}
```

