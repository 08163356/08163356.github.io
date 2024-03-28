---
title: commonjs和es6的区别
date: 2023-03-14 11:03:30
permalink: /pages/f3bff1/
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
CommonJS（通用模块规范）和ES6（ECMAScript 6）模块是两种不同的模块系统，它们在一些方面有所不同。

1. 语法差异：
   - CommonJS 使用 `require` 和 `module.exports` 来导入和导出模块，例如：`const module = require('module'); module.exports = value;`
   - ES6 使用 `import` 和 `export` 来导入和导出模块，例如：`import module from 'module'; export default value;`
2. 动态与静态：
   - CommonJS 模块是动态加载的，模块的导入和导出发生在运行时。
   - ES6 模块是静态加载的，在编译时就确定了模块的依赖关系。
3. 模块引用：
   - CommonJS 使用的是值拷贝，即在导入模块时，会将模块导出的值拷贝一份给导入的模块。
   - ES6 则使用的是动态映射引用，即导入的模块会直接使用导出模块的值，而不是拷贝一份。
4. 异步加载：
   - CommonJS 模块支持同步和异步两种加载方式，可以在运行时根据需要动态加载模块。
   - ES6 模块只支持静态加载，模块的依赖关系在编译时就确定了，无法在运行时动态加载模块。
5. 浏览器兼容性：
   - CommonJS 主要用于服务器端开发，Node.js 等环境原生支持 CommonJS 模块规范。
   - ES6 模块是 ECMAScript 标准的一部分，可以在现代浏览器中原生支持，但在旧版浏览器中需要使用转换工具（如 Babel）进行转换。

需要注意的是，虽然 CommonJS 和 ES6 模块有一些差异，但在实际开发中，可以通过使用工具（如 Webpack、Babel）来实现两种模块系统之间的互相转换和兼容。