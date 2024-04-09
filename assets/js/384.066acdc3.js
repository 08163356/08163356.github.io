(window.webpackJsonp=window.webpackJsonp||[]).push([[384],{721:function(s,n,t){"use strict";t.r(n);var e=t(7),r=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("方法一：")]),s._v(" "),n("p",[s._v("1、不对本地js进行编译：\n需要将js放到public目录下，在public目录下的文件不会被编译。\n同时不要使用import xx form '相对路径/xx.js’去引入xx.js，因为import使用相对路径会默认对该文件进行编译\n2、其次不被打包编译的js文件，不会被import识别\n所以使用import xx form '绝对路径/xx.js’的时候会出现This dependency was not found 的报错\n3、解决办法\n在public目录下的index.html中，按照原生的js文件引入")]),s._v(" "),n("p",[s._v("方法二：")]),s._v(" "),n("p",[s._v("在Vue组件加载完后，手动操作DOM插入js插件。\n")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export default {\n    mounted() {\n        let script = document.createElement('script');\n        script.type = 'text/javascript';\n        script.src = '你的js文件地址';\n        document.body.appendChild(script);\n    },\n}\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("该方式直接操作DOM，只在当前组件插入js插件。")]),s._v(" "),n("p",[s._v("参考文档：")]),s._v(" "),n("p",[s._v("https://juejin.cn/post/6970281486469562375")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://www.jianshu.com/p/cc6e67ce4c07",target:"_blank",rel:"noopener noreferrer"}},[s._v("vue引用public中的js文件"),n("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=r.exports}}]);