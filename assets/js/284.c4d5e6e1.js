(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{619:function(s,n,t){"use strict";t.r(n);var a=t(7),e=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("写一个bat文件，获取当前文件夹下面所有文件夹的名字，并保存到name.txt中")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('@echo off\n\nset "outputFile=name.txt"\n\nREM 清空输出文件\necho. > "%outputFile%"\n\nREM 遍历当前文件夹下的所有文件夹\nfor /d %%D in (*) do (\n    REM 将文件夹名称追加到输出文件中\n    echo %%D >> "%outputFile%"\n)\n\necho "文件夹名称已保存到 %outputFile%"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);