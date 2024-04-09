(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{393:function(n,e,s){"use strict";s.r(e);var t=s(7),a=Object(t.a)({},(function(){var n=this,e=n._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("一、adb 如何模拟touch事件")]),n._v(" "),e("p",[n._v("模拟上下滑动")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("情况2:模拟滑动轨迹（可下载并采用aPaint软件进行试验）\n\n如下例是在aPaint软件上画出一条开始于（100,200），止于（108,200）的水平直线\n\nadb shell sendevent /dev/input/event0 3 0 400 //start from point (400,200)\n\nadb shell sendevent /dev/input/event0 3 1 200\n\nadb shell sendevent /dev/input/event0 1 330 1 //touch\n\nadb shell sendevent /dev/input/event0 0 0 0\n\x3c!-- more --\x3e\n\nadb shell sendevent /dev/input/event0 3 0 401 //step to point (101,200)\n\nadb shell sendevent /dev/input/event0 0 0 0\n\nadb shell sendevent /dev/input/event0 3 0 508 //end point(108,200)\n\nadb shell sendevent /dev/input/event0 0 0 0\n\nadb shell sendevent /dev/input/event0 1 330 0 //untouch\n\nadb shell sendevent /dev/input/event0 0 0 0\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[n._v("其他模拟touch event的方法\n还可以通过sendevent来模拟touchevent，不过比较繁琐，方法如下，")])]),n._v(" "),e("p",[n._v("a. 设置x/y坐标")]),n._v(" "),e("p",[n._v("adb shell sendevent /dev/input/event1 3 0 x\nadb shell sendevent /dev/input/event1 3 1 y\nb. 发送touch 事件(必须使用0 0 0配对)\nadb shell sendevent /dev/input/event1 1 330 1\nadb shell sendevent /dev/input/event1 0 0 0\nc.  释放touch事件（必须使用0 0 0配对）\nadb shell sendevent /dev/input/event1 1 330 0\nadb shell sendevent /dev/input/event1 0 0 0")]),n._v(" "),e("p",[n._v("二、参考文档")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("情况1：在某坐标点上touch\n\n如在屏幕的x坐标为40，y坐标为210的点上touch一下，命令如下\n\nadb shell sendevent /dev/input/event0 3 0 40\n\nadb shell sendevent /dev/input/event0 3 1 210\n\nadb shell sendevent /dev/input/event0 1 330 1 //touch\n\nadb shell sendevent /dev/input/event0 0 0 0 //it must have\n\nadb shell sendevent /dev/input/event0 1 330 0 //untouch\n\nadb shell sendevent /dev/input/event0 0 0 0 //it must have\n\n注：以上六组命令必须配合使用，缺一不可\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br")])]),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/jgw2008/article/details/52913543?spm=1001.2101.3001.6650.2&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-2.pc_relevant_antiscan&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-2.pc_relevant_antiscan&utm_relevant_index=5",target:"_blank",rel:"noopener noreferrer"}},[n._v("该文档比较实用"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);