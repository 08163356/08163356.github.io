(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{466:function(t,_,a){"use strict";a.r(_);var s=a(7),v=Object(s.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h3",{attrs:{id:"一、对象性能模式之flyweight-享元模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、对象性能模式之flyweight-享元模式"}},[t._v("#")]),t._v(" 一、对象性能模式之Flyweight（享元模式）")]),t._v(" "),_("p",[t._v("面向对象很好地解决了抽象问题，但是必不可免地要付出一定的代价。对于通常情况来讲，面向对象的成本大都可以忽略不计。但是某些情况，面向对象带来的成本必须谨慎处理。")]),t._v(" "),_("h4",{attrs:{id:"_1-动机"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-动机"}},[t._v("#")]),t._v(" 1.动机")]),t._v(" "),_("p",[t._v("在软件系统中采用纯粹对象方案的问题在于大量细粒度的对象会很快充斥在系统中，从而带来很高的运行时代价--主要指内存需求方面的代价")]),t._v(" "),_("p",[t._v("如何在避免大量细粒度对象问题的同时，让外部客户程序仍然能够透明底使用面向对象的方式来操作？")]),t._v(" "),_("h4",{attrs:{id:"_2-模式定义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-模式定义"}},[t._v("#")]),t._v(" 2.模式定义")]),t._v(" "),_("p",[t._v("运用共享技术有效地支持大量细粒度的对象")]),t._v(" "),_("p",[t._v("理解：就是许多共同得东西不用再重复得创建，加判断如果已经创建过了就直接返回之前创建得对象，如果没有创建过再进行创建。可以大大的减少代码量。（即共享共有的对象）")]),t._v(" "),_("h4",{attrs:{id:"_3-要点总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-要点总结"}},[t._v("#")]),t._v(" 3.要点总结")]),t._v(" "),_("ul",[_("li",[t._v("面向对象很好地解决了抽象性的问题，但是作为一个运行再机器中的程序实体，我们需要考虑对象的代价问题。Flyweight主要解决面向对象的代价问题，一般不触及面向对象抽象问题。")]),t._v(" "),_("li",[t._v("Flyweight采用对象共享的做法来降低系统中对象的个数，从而降低细粒度对象给系统带来的内存压力。再具体实现方面，要注意对象状态的处理。")]),t._v(" "),_("li",[t._v("对象的数量太大从而导致对象中内存凯开销加大--什么样的数量才算大？这需要我们仔细的根据具体情况进行评估，而不能凭空臆断。")])]),t._v(" "),_("h3",{attrs:{id:"二、散装知识点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、散装知识点"}},[t._v("#")]),t._v(" 二、散装知识点")]),t._v(" "),_("p",[t._v("1.字符串使用得是最多的")]),t._v(" "),_("p",[t._v("2.线程池是用什么实现得呢？")]),t._v(" "),_("p",[t._v("3.该模式主要解决性能问题")])])}),[],!1,null,null,null);_.default=v.exports}}]);