(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{453:function(t,a,s){"use strict";s.r(a);var _=s(7),r=Object(_.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"一、学前思考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、学前思考"}},[t._v("#")]),t._v(" 一、学前思考")]),t._v(" "),a("p",[t._v("1.什么是组件模式？")]),t._v(" "),a("p",[t._v("猜想：")]),t._v(" "),a("p",[t._v("2.设计模式设计原则就有一个继承转组合，是这么个意思吗？")]),t._v(" "),a("h3",{attrs:{id:"二、数据结构模式之composite-组件模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、数据结构模式之composite-组件模式"}},[t._v("#")]),t._v(" 二、数据结构模式之Composite（组件模式）")]),t._v(" "),a("p",[t._v("常常有一些组件在内部具有特定得数据结构，如果让客户程序依赖这些特定的数据结构，将极大地破坏组件的复用。这时候，将这些特定的数据结构封装在内部，在外部提供统一的接口，来实现与特定数据结构无关的访问。")]),t._v(" "),a("h4",{attrs:{id:"_1-动机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-动机"}},[t._v("#")]),t._v(" 1.动机")]),t._v(" "),a("p",[t._v("如何将“客户代码与复杂的对象容器结构”解耦？让对象容器自己来实现自身复杂的数据结构，从而使得客户代码就像处理简单对象一样来处理复杂的对象容器？")]),t._v(" "),a("h4",{attrs:{id:"_2-模式定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-模式定义"}},[t._v("#")]),t._v(" 2.模式定义")]),t._v(" "),a("p",[t._v("将对象组合成树形结构以表示“部分-整体”的层次结构 。Composite使得用户对单个对象和组合对象的使用具有一致性（稳定）。")]),t._v(" "),a("h4",{attrs:{id:"_3-结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-结构"}},[t._v("#")]),t._v(" 3.结构")]),t._v(" "),a("p",[t._v("（）")]),t._v(" "),a("h4",{attrs:{id:"_4-要点总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-要点总结"}},[t._v("#")]),t._v(" 4.要点总结")]),t._v(" "),a("ul",[a("li",[t._v("Composite模式采用树形结构来实现普遍存在的对象容器，从而将“一对多”的关系转化为“一对一”的关系，使得客户代码可以一致地（复用）处理对象和对象容器，无需关心处理的是单个的对象还是组合的对象容器。")]),t._v(" "),a("li",[t._v("将“客户代码与复杂的对象容器结构”解耦是Composite的核心思想，解耦之后，客户代码将与纯粹的抽象接口--而非对象容器的内部实现结构--发生依赖，从而更能“应对变化”。")]),t._v(" "),a("li",[t._v("Composite模式在具体实现中，可以让父对象中的子对象反向追溯；如果父对象有频繁的便利需求，可以使用缓存技巧来改善效率。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);