---
title: boss面试题及其个人思考1
date: 2024-03-02 09:58:24
permalink: /pages/807f41/
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
## 1、vue的双向绑定原理是什么？里面的关键点在哪里？

个人思考：

```
双向数据绑定是当vue这个mvvc模型的一个特色功能，是指当数据模型变化的时候视图跟着变化，反之亦然。这个vue2和vue3的原理略有不同，vue2是通过defineProperty去监听遍历每个的对象的响应，而vue3是通过proxy和reflect去监听整个对象的变化，当对象变化之后会经过收集依赖、模板编译、编译优化等步骤将变化进行更新
```

##  2、实现水平垂直居中的方式？

```
flex布局，然后调整justify-content和align-content
通过绝对布局然后使用transform，设置top和left的百分比
使用表格布局
使用grid布局
后面两种不常用，最后一种有一定学习成本，并且是相对较新的技术
```

## 3、常用伪元素有哪一些？

```
常用伪元素
::before 元素内容前插入新内容
::after元素内容之后插入新内容
::first-letter 文本首字母。常用于对文本首字母设置样式
::first-line 文本首行。常用于对文本首行设置样式。仅用于块级元素。
::selection 选中的内容。常用于文本。
::placeholder 占位符。用于设置占位符的样式。
```

##  4、移动端如何适配不同屏幕尺寸？

```
将px单位改成rem或者vw
```

##  5、本地存储有哪一些？他们三者有什么区别？

| 存储方式       | 存储容量        | 生命周期       | 跨域传递     | 安全性                |
| :------------- | :-------------- | :------------- | :----------- | :-------------------- |
| Cookie         | 4KB             | 可设置过期时间 | 不能跨域传递 | 可设置仅通过HTTPS传输 |
| LocalStorage   | 通常为5MB或更高 | 持久存储       | 不能跨域传递 | 明文存储              |
| SessionStorage | 通常为5MB或更高 | 会话结束后删除 | 不能跨域传递 | 明文存储              |

##  6、JS的数据类型？如何判断js的数据类型? 

基本数据类型：Number、Boolean、Null、undefined、Sambol、String

引用数据类型：数组、对象、函数

判断方式：

```
typeof 操作符：typeof操作符可以返回一个变量或表达式的数据类型的字符串表示。
instanceof 操作符：instanceof操作符可以判断一个对象是否属于某个构造函数的实例。
Object.prototype.toString.call()：使用Object.prototype.toString.call()方法可以获取一个变量的具体数据类型。
```

## 7、说一下ES6的新特性有哪些？

es6：class、module（import和export）、箭头函数、模板字符串、解构赋值、扩展字符串、promis、…

es7：数组的includes、指数操作符（2**10=1024）

es8：异步语法糖：async/await

[参考文档](https://zhuanlan.zhihu.com/p/354901519)

## 8、Let、const、var三者有什么区别？

let通常用于一个js文件中全局的声明，const通常用于函数内部的声明，var现在很少用了

| 特性         | `let`                  | `const`                | `var`                        |
| :----------- | :--------------------- | :--------------------- | :--------------------------- |
| 声明提升     | 不存在                 | 不存在                 | 存在                         |
| 块级作用域   | 是                     | 是                     | 否                           |
| 变量重新赋值 | 可以                   | 不可以                 | 可以                         |
| 初始值赋值   | 可以延迟赋值           | 必须立即赋值           | 可以延迟赋值                 |
| 全局对象属性 | 不是全局对象的属性     | 不是全局对象的属性     | 是全局对象（浏览器环境）属性 |
| 适用范围     | 块级作用域内有效       | 块级作用域内有效       | 函数作用域内有效             |
| 重复声明     | 不允许重复声明同一变量 | 不允许重复声明同一变量 | 允许重复声明同一变量         |



## 9、数组去重有哪些办法？

ES6新增构造函数set，利用set具有天然去重功能 数组迭代

```
var arr = [1,1,8,8,12,12,15,15,16,16];
function unique (arr) {
  return Array.from(new Set(arr))
}

console.log(unique(arr))
 //[1,8,12,15,16]
```

上面是最简单的方法，不太有必要自己手写，如果 手写就是遍历整个数组，通过indexof或者includes或者filter等去重

## 10、说一下深拷贝和浅拷贝，如何自己实现一个深拷贝？

这个概念类似于其他语言中的引用传递和值传递，深拷贝就是新建一个地址存储对象，新对象的改变不影响原始的对象，优点是隔离的好，缺点是占用额外的空间；而浅拷贝是将地址传递给变量，当被赋值的对象改变后原始对象的值也会被改变。

实现：当前有很多成熟的方法去实现，比如lodash之类的，具体实现的话使用递归：

```
function deepCopy(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj; // 非对象和null直接返回
  }
  
  let copy;
  if (Array.isArray(obj)) {
    copy = [];
    for (let i = 0; i < obj.length; i++) {
      copy[i] = deepCopy(obj[i]); // 递归复制数组元素
    }
  } else {
    copy = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) { //它的作用是判断一个属性是否是对象自身的属性，而不是继承自原型链的属性。
        copy[key] = deepCopy(obj[key]); // 递归复制对象属性
      }
    }
  }
  
  return copy;
}
```

##  11、Vue的生命周期有哪一些？说一下它们每个阶段做什么操作？

这个vue2和vue3的区别比较大

##  12、组件通讯方式有哪一些？

常用的是父给子：props；子给父：emit；同级之间：reject/provide；当然还可以使用vuex，或者缓存到localstorage/cookies/sessionstorage等地方，或者使用router、或者注册到全局变量，根据具体情况而定，通常约定一个规范，然后大家统一存储方式就好了。

##  13、Vuex有几个属性及作用？

这个老版本和新版本变化比较大，通常是

mutation：最新版本已经没有了，用于修改公共数据

action：是对特定属性的操作

getter：其他地方获取的方式

state：存储公共数据

##  14、Vue的监听属性和计算属性有什么区别？

从功能上讲，监听属性通常是watch，用于检测对象或者数据的变化从而调用回调函数去执行对应操作。比如监听到用户关闭操作后执行对应对的关闭指令；计算属性是computed，通常用于监听到对象变化后进行一系列的计算后并返回。

computed有缓存，watch没有缓存

计算属性是代码刚开始还没有有数据改变的时候就执行一次，而watch是当监视的属性发生变化时才会执行，除非配置`immediate：true`

计算属性必须有return，而监听属性没有return

总结：

1. 一般能用computed就用computed，因为它有缓存，会提高运行速度
2. watch是对data上面的一些数据进行观察和响应，一般的时候使用计算属性替代watch，因为滥用watch的话，会影响性能。但是watch有它自己的使用场景，别人不能替代。当需要在数据变化时执行异步或开销较大的操作时 （js里面学过的异步任务：定时器 + ajax + dom事件）需要使用watch。
3. 计算属性是将return之后的结果作为一个属性挂载到vm身上，并且命名为计算属性的名字，比如一个计算属性：`fullName(){retrun this.filstName + this.lastName}`的就是将return的值赋值给fullName，并将这个fullName挂载到vm上，作为vm的一个属性（类似于data中的属性）。而监听属性是监听data中某一属性发生改变时，要进行的一些列操作。



## 15、说一下防抖和节流。怎么实现？

防抖和节流两者都是用来控制函数执行频率的方法。防抖适用于需要在连续触发事件后执行最后一次触发的情况，而节流适用于需要限制函数执行频率的情况。根

防抖：指在一段连续的触发事件中，只执行最后一次触发的函数调用。即当事件频繁触发时，只有在指定的间隔时间内没有新的触发事件才会执行函数，否则会重新计时。常见的应用场景有：

```
输入联想：用户连续输入很多字母，只有最后一个字母输入完成的时候才显示联想的内容，而不是每次都计算，节省性能。
按钮点击事件：用户快速点击按钮的时候为了避免频繁的网络请求或者系统计算，只选择用户最后一次操作进行执行。
窗口大小调整：用户拖动调整窗口的时候，可以用防抖来处理页面布局，只有窗口稳定一段时间后才执行窗口布局调整的操作，而不是每拖动一次就执行操作。
```

实现

```
场景：
handleResize(){
console.log("resized")
}
function debounce(fn,  delay){
let timerId
return founction(...args){
clearTimeout(timerId)
timerId = setTimeout(()=>{ fn.apply(this, arg) }, delay)
}
}

const debounceFn = debounce(handleResize, 200)
window.addEventListener("resize", debounceFn)
```

节流：无论事件触发得多频繁，都会按照指定间隔时间执行函数。常见场景

```
页面滚动事件：避免因为滚动而触发的频繁的计算，用节流限制滚动触发函数执行的频率。
鼠标移动事件、实时定位事件等
```

实现

```
function throttle(func, delay){
let timerId
let lastExeTime = 0
return function(...arg){
const currTime = Date.now()
if(currTime - lastExeTime < delay){
clearTimeout(timerId)
timerId = setTimeout(()=>{ func.apply(this, arg) }, delay)
} else{
lastExeTime = currTime
func.apply(this, arg)
}
}

}

const throttleSence = throttle(yourFunc(), 300)
window.addEventlistener("scroll", throttleSence)
```

但是感觉上面的场景都有一定的缺陷，需要根据实际的用户需求去进行去取舍。

##  16、Vue的导航守卫有哪一些？

[参考链接](https://blog.csdn.net/LuckXinXin/article/details/108574389)

全局守卫

路由独享守卫：这个我比较常用，我的博客当中就新添加了这么一个功能，对于一些含有一定隐私，给面试官看的页面就是添加了路由守卫，当用户访问的时候需要访问特定的密码才能访问。

路由组件内的守卫

这一块我们使用得比较少，都是已经设计好一个内部的

## 17、你的登录拦截怎么实现的？

登陆拦截是防止没有权限的用户访问未经授权的页面，常见的登陆拦截方式是：

1.登陆状态管理：用vuex等工具去记录用户的基本信息，登陆的时候进行验证

2.路由守卫：在登陆的过程中通过路由守卫去检测用户的权限、状态，从而进行登陆拦截



## 18、有用过图表吗？用的多吗？ 

用过，在开发公司绩效系统的时候就有用到过折线、饼图、柱状图、还有很多表格。这样的图表当前有echart等很多开源生成，因此最主要的工作是根据他的规则进行适配。

## 19、闭包是什么？如何实现？

闭包是从一个函数内部返回一个函数或者变量供其他函数调用，因为浏览器有垃圾回收机制，闭包返回一个函数后会导致该函数一直处于被调用的状态，导致无法及时回收，使用太多闭包可能会引起内存泄露、影响性能。

实现：

```
function fn1(){
let testValue = "tv"

function innerFunc(){
console.log(testValue)
}
return innerfunc
}
const clouse = fn1()
clouse() //输出tv
```



##  20、Vue2.0和vue3.0有什么区别？

一个比较大的区别是响应式的实现方式改变了，vue2的实现方式是通过defineproperty去对对象属性进行拦截；而vue3是通过proxy去拦截对象的变化。

vue3中增加了一些编译优化，比如增加flag去标识未改变的代码块；使用静态变量

vue3的性能更高更快了；

总结：

1.性能：vue3的性能相较于vue2有大幅提升，主要得益于vue3的diff算法的改进、新增编译优化

2.语法：精简了vue2的声明周期，将生命周期写入了setup中。增加了代码的可读性

3.增大了对ts的兼容性；

4.使用组合式API代替了option api

相对于 Vue2，Vue3 在性能、语法、设计、TypeScript 支持和 Composition API 方面都有所改进和提升。



## 21、Vue常用的指令有哪些？

v-show/v-if/v-bind/v-model/v-for/v-on/v-text/v-html

进行性能优化的时候还会使用v-once

v-once就是在第一次加载的时候将组件缓存下来，后续再使用的时候不用重新加载，而是到缓存中区获取，提高了响应的速度。

## 22、v-If和v-show有什么区别？

v-show不会在dom中去掉对应的html，相当于使用了visibility；而v-if当不满足条件的时候会将html从dom中删除，满足条件的时候再重新加载，相当于使用了css的disply属性去控制。v-if的开销大于v-show

##  23、v-for为什么要加一个key？ 

这个是为了性能着想。vue3使用diff算法的时候会通过key去判断哪些是更新的内容/哪些不是更新的内容，如果不加key意味着每一次都需要重新加载和渲染，会耗费额外的性能。

## 24、你是如何封装一个组件的？ 

单独建立一个vue文件，详细分析需求，将需求写成文档，然后文档驱动开发。写好入参/出参/注意事项/拓展事项等内容。

## 25、有自己从0到1搭建过项目吗？

是的，我们公司的设备管理系统、降本增效项目都是从0到1进行搭建的。

## 26、有用过uni-app吗？

没有，我知道这是用于混合开发的一个开源项目，应该和vue一样，如果需要使用的时候在官网边阅读文档边进行开发。

## 27、你会写后台吗？有搞过服务端渲染吗？

ssr，暂时没有，这是我的一块短板，以后还希望从这个方面加强

##  28、说一下你项目中遇到的难点，如何解决？

1.

##  29、Url到浏览器的一个过程有哪些步骤？



## 30、如何实现小程序的request封装及拦截？



## 31、在vue的项目应用中，不使用框架，怎么封装？

1.将公共的方法提取到单独的js文件中，然后用import和export导入导出就好

##  32、什么是Js原型？原型链是什么？

原型：是一个对象，他包含了共享的属性和和方法的对象，如果对象本身没有定义该属性或者方法，js就会在原型链中寻找。

原型链是一种对象之间的关系， 他通过原型的引用将对象链接在一起，每个对象都有一个原型，原型本身也是一个对象，也有一个原型，这样形成的一个链条称为原型链。

当访问一个对象在js自身对象中找不到的时候，就会到引用对象的原型中寻找，如果还找不到，则会沿着整个原型链去寻找，以此内推，直到找到或者到达原型链的末尾：Object.prototype。

而js中继承就可以通过原型去实现

##  33、组件通讯方式有哪些？（重复问题）

重复问题

## 34、用闭包的原理做过哪些？

可以创建一个计数器，每次调用时递增并返回一个最新的计数的值，闭包可以保证计数器在函数调用之间保持状态

访问私有变量，普通方法无法访问别的作用域内部的变量，这个java中的反射机制较为类似。

可以模块化：将需要的变量和函数暴露出去，供其他模块调用

##  35、作用域是什么？

作用域分为全局作用域、函数作用域、块级作用域，当对象在当前作用域找不到想要的内容时候就会从块级到函数级到全局作用域中去寻找

## 36、操作数组的方式有哪些？

如果是数组的的方法，那有push、pop、splice、indexof、includes、length、shift、unshift常用方法

如果是操作数组则可以for of/ for in / for each

## 37、0.1 + 0.2 等于 0.3吗？为什么？如何解决？

不等于，精度不够。

可以判断是小数点后多少位，然后换

算成整数进行计算后再除以10。

或者使用tofixed方法，可以可以将结果转换为指定小数位数的字符串标识，然后使用number转换为数值类型。

使用一些第三方库去增加精确计算的能力，比如Decimal.js，big.js等

## 38、keep-alive是什么？有哪几个生命周期阶段？

keep-alive的来源是http中的长连接，目的是解决客户端批量请求客户端同一个tcp请求问题。

这在框架中，keep-alive是vue中的组件缓存的内容，主要思想是以空间换时间。目的是为了将暂时不使用的组件使用最近不使用算法缓存下来，然后需要的时候从缓存区去调用，从而降低了组件加载的时间，提高了性能。

被keep-alive包裹的后并加入include后被缓存的组件，被调用时会进入activated周期，当不使用的时候会进入deactivated周期，并不会像在exclude或者其他组件一样进入mounted和unmounted周期

##  39、判断一个变量是否是数组，有哪些办法？

通过typeof、instanceof、obj.tostring.call、isArray

##  40、判断一个变量是否是对象，有哪些办法？

typeof、instanceof、obj.tostring.call、Object.getOwnPropertyNames() 

##  41、对象/数组常用方法有哪些？

数组的前面有push、pop、unshift（去除最后一个值）、shift、splice、contact、includes、length

instancesOf、hasOwnPropertyName、assign、freeze、is、keys、values等

##  42、创建一个空数组/空对象有哪些方式？

创建空数组：new Array();const emptyArray = [];

空对象：

```
const emptyObject = {};

const emptyObject = new Object();
```



## 43、哪些遍历方式会改变原数组？

除了for of只提供原数组的引用，原来的数组不会被改变外，其他诸如forEach、map、filter、for循环等都会根据实际情况对数组有改变

## 44、Set和Map各是什么？

set和map是js中常见的数据结构，主要用来存储对象。

set中存放的是不重复的、有序的集合，通常可以用于数组的去重；map以键值对的形式存储内容；

以此衍生的还有weekset和weekmap，这在vue底层实现中经常被使用，被使用的原因是这两者是弱引用，不会修改原来对象的值。在使用完成后会被立即销毁，从而避免了额外的内存占用，避免了内存溢出等问题。

## 45、介绍一下promise。

promise通常用于处理js中的异步问题。

Promise通常会解决三种问题

 (1)链式回调

 (2)同时发起几个异步请求，谁先有结果就拿谁的

 (3)发起多个请求，等到所有请求后再做下一步处理 这三种方式promise是怎么处理的？ 

## 47、如何改变一个函数a的上下文？

通过调用，call、apply、bind，具体三者之间的差别前面有写。如果手动实现的话大哥

## 48、Call和apply有什么区别？

传入的参数不同，call传入的是一个个变量，apply传入的是数组

## 49、Evenbus是什么东西？（待记忆）

```
"EventBus 是一种设计模式，用于实现组件之间的解耦通信。它允许组件通过订阅和发布事件来进行通信，而不需要直接引用或依赖彼此。通过一个中心化的事件管理器，组件可以订阅感兴趣的事件，并在事件触发时接收通知。同时，其他组件可以发布（触发）这些事件，以便通知所有订阅了该事件的组件。在 JavaScript 中，可以通过创建一个全局的事件管理器对象来实现 EventBus 功能，例如使用 EventEmitter 类库。"
```



## 50、Vue中普通的生命周期大概有哪些？

这个在vue2和vue3中有区别，vue2中有beforeCreate\created\beforemounte\mounted\beforeUpdate\updated\beforeDestroy\destroyed

在vue3中beforeDestroy\destroyed被替换成了beforeunmount、unmounted了，去掉了beforeCreate\created，使用setup代替。并且将生命周期包裹在了setup中，并通过在vue2基础上使用on。像这样的生命周期是很快随着框架版本的迭代在改变的，通常的目的都是为了增加代码的可读性、减少冗余代码。

## 51、父子组件生命周期执行顺序是怎么样的？

- 加载父组件中的数据created，
- 然后再去中执行父组件挂载前的onBeforeMount
- 子组件中的数据加载
- 子组件中的挂载dom
- 再去父组件中挂载dom

也就是说vue是先挂载子组件在挂载父组件

数据更新肯定是谁更新加载谁

## 52、mixins有几个生命周期阶段？

和正常vue声明周期一样

## 53、弹性布局，一行两列，一列固定宽，如何实现？



## 54、Flex：1 包含哪三种属性（待记忆）

```
设置 flex: 1 是为了指定一个元素在弹性布局中占据剩余空间的比例。这个属性实际上包含了以下三个属性的缩写：

flex-grow: 定义了元素在弹性容器中的放大比例，默认值为 0。当设置为 1 时，元素将尽可能地拉伸以填充剩余空间。

flex-shrink: 定义了元素在弹性容器中的缩小比例，默认值为 1。当弹性容器空间不足时，设置为 1 的元素将相对于其他元素缩小。

flex-basis: 定义了元素在弹性容器中的初始大小，默认值为 auto。它决定了元素在分配剩余空间之前的基准大小。

所以，当设置 flex: 1 时，实际上是将 flex-grow: 1; flex-shrink: 1; flex-basis: 0%; 这三个属性一起设置了。这样，元素会根据剩余空间进行伸缩，并填充剩余空间。

需要注意的是，flex: 1 只适用于弹性容器内的弹性项（flex items），而不是容器本身。
```

