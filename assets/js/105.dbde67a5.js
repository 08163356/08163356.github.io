(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{442:function(e,s,a){"use strict";a.r(s);var r=a(7),t=Object(r.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"free-ram各项解释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#free-ram各项解释"}},[e._v("#")]),e._v(" free RAM各项解释")]),e._v(" "),s("p",[e._v("Total RAM为手机的总内存；")]),e._v(" "),s("p",[e._v("Free RAM为剩余内存:")]),e._v(" "),s("p",[e._v("其中cached pss为后台缓冲进程，当系统内存不足或缓冲进程数目达到系统限制最大数时会杀掉(部分)以释放内存。")]),e._v(" "),s("p",[e._v("cached为高速缓冲存储器的内存，这部分内存已经分配好了，但是系统为了节约频繁申请内存开销，free时会把一部分内存cache起来，当用户再次申请内存时可能会直接从缓冲拿一块出来。")]),e._v(" "),s("p",[e._v("free为未分配的物理内存;")]),e._v(" "),s("p",[e._v("Used RAM为用户态使用总内存；")]),e._v(" "),s("p",[e._v("Lost RAM为内核态使用内存，比如OpenGL纹理内存、GPU占用内存、图形显示ION buffer都包含在Lost RAM里。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("//cached pss指上层app cache所占的memory大小。\n//cached kernel指kernel cache的大小，他等于总的meminfo中的cache大小+buffer大小减去mapped大小。\n//free指unsed memory的大小\n//ion cached和gpu cached额外的一些内存cache，透过读取/sys/kernel/debug/shrinker节点获取\n以上cache都是可以释放的内存大小。\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("值得注意的是当Free RAM比较小时可以认为系统内存不足（有种情况不能确定就是：Lost RAM占用内存很大，Lost RAM可能是内核缓冲内存太多了导致Free RAM小，但是并不是内存足，因为当内存不足时kernel会释放缓存，可以通过echo 3 > /proc/sys/vm/drop_caches主动释放）。")]),e._v(" "),s("p",[e._v("参考文档：")]),e._v(" "),s("p",[e._v("https://blog.csdn.net/a282255307/article/details/108424704")]),e._v(" "),s("p",[e._v("https://blog.csdn.net/zsj100213/article/details/77934173")])])}),[],!1,null,null,null);s.default=t.exports}}]);