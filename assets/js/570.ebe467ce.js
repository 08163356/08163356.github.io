(window.webpackJsonp=window.webpackJsonp||[]).push([[570],{911:function(s,n,t){"use strict";t.r(n);var i=t(7),a=Object(i.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("在 Vite 中，可以通过在 `vite.config.js` 文件中配置 `build.rollupOptions.output` 选项来控制打包后生成的 HTML 文件中 script 标签的属性。具体步骤如下：\n\n1. 在项目根目录下创建 `vite.config.js` 文件。\n2. 在 `vite.config.js` 文件中添加以下代码：\n\n​```js\nexport default {\nbuild: {\nrollupOptions: {\n\x3c!-- more --\x3e\noutput: {\n// 禁用 script 标签的 type 属性\nscriptType: null,\n// 禁用 script 标签的 crossorigin 属性\ncrossorigin: null,\n},\n},\n},\n};\n​```\n\n上述代码中，`build.rollupOptions.output.scriptType` 和 `build.rollupOptions.output.crossorigin` 分别控制 script 标签的 type 属性和 crossorigin 属性。将它们设置为 `null` 即可禁用这些属性，使生成的 script 标签不包含这些属性。\n\n3. 保存 `vite.config.js` 文件并重新运行 Vite 打包命令，生成的 HTML 文件中的 script 标签将不再包含 type 属性和 crossorigin 属性。\n\n需要注意的是，禁用 script 标签的 type 属性可能会导致一些浏览器无法正确解析 JavaScript 代码，因此建议仅在必要时才禁用该属性。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])])])}),[],!1,null,null,null);n.default=a.exports}}]);