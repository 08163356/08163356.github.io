(window.webpackJsonp=window.webpackJsonp||[]).push([[720],{1060:function(e,t,n){"use strict";n.r(t);var r=n(7),o=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("一个异步的脚本，不会阻塞浏览器渲染，运行在另一个全局上下文中，不能使用window")]),e._v(" "),t("p",[e._v("特点：\n.仅仅能被首次生成它的脚本使用，只能服务于新建它的页面，不同页面之间不能共享同一个 Web Worker。\n.当页面关闭时，该页面新建的 Web Worker 也会随之关闭，不会常驻在浏览器中\n.必须与主线程的脚本文件同源\n.不能直接操作DOM节点\n.不能使用window对象的默认方法和属性(如alert、confirm等)\n.传输数据并不是被共享而是被复制。\n.在同源的父页面中，workers可以依次生成新的workers\n.线程无法读取本地文件，即不能打开本机的文件系统（file://），它所加载的脚本，必须来自网络")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".可以使用大量window对象之下的东西，包括WebSockets，IndexedDB以及FireFox OS专用的Data Store API等数据存储机制\n")])])]),e._v(" "),t("p",[e._v("基本使用:\nif (window.Worker) {\nconst worker=new Worker(url,options)\n}")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("url:表示worker将执行的脚本的URL、路径、类似blob这样的url，它必须遵守同源策略。\noptions:\n\ttype：该值可以是 classic 或 module. 如果未指定，将使用默认值 classic.\n\tcredentials：用以指定 worker 凭证，可以是 omit, same-origin，或 include。如果未指定，或者 type 是 classic，将使用默认值 omit (不要求凭证)\n\tname：在 DedicatedWorkerGlobalScope 的情况下，用来表示 worker 的 scope 的一个 DOMString 值，主要用于调试目的\n")])])]),t("p",[e._v("事件监听:\nself:表示在worker内部使用的内置全局变量")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("(1)worker.onmessage、self.onmessage\n\n\tvar myWorker = new Worker('worker.js');\n\t\n\tfirst.onchange = function() {\n\t  myWorker.postMessage([first.value,second.value]);\n\t  console.log('Message posted to worker');\n\t}\n\t\n\tmyWorker.onmessage = function(e) {\n\t  result.textContent = e.data;\n\t  console.log('Message received from worker');\n\t}\n\t\n\t//worker.js\n\tself.onmessage = function(e) {\n\t  console.log('Message received from main script');\n\t  var workerResult = 'Result: ' + (e.data[0] * e.data[1]);\n\t  console.log('Posting message back to main script');\n\t  self.postMessage(workerResult);\n\t}\n\t\n(2)错误监听\n\tworker.onmessageerror、self.onmessageerror 数据序列化、反序列化错误时触发\n\tworker.onerror、self.onerror\t运行中错误\n\n(3)监听在线、短线情况（可能存在兼容性问题）\n\tself.onoffline=fn\n\tself.ononline=fn\n")])])]),t("p",[e._v("属性:\nself.name \t\t获取worker名称，即options中传入的name\nself.location\t获取类似浏览器url内容的location\nself.navigator\t获取navigator对象")]),e._v(" "),t("p",[e._v("方法:\n(1)发送消息\nworker.postMessage(data,[Transferable])、self.postMessage(data,[Transferable])\n第二个参数为Transferable对象数组，意味着对象在内存中的位置也会被转移，即零拷贝转移\n支持可转移的对象有：\nArrayBuffer、MessagePort、ReadableStream、WritableStream、TransformStream、AudioData、ImageBitmap、VideoFrame、OffscreenCanvas\n多线程共享的内存：\nSharedArrayBuffer\n通过Atomics对象提供原子操作能力，解决多线程访问共享数据会出现数据竞争问题")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('(2)终止worker\n\tworker.terminate();\n\tself.close();\n\n(3)向当前worker的作用域导入一或更多条脚本\n\tself.importScripts(\'foo.js\', \'bar.js\',...);\n\t也可用作JSONP\n\t\tfunction MakeServerRequest() \n\t\t{\n\t\t    importScripts("http://SomeServer.com?jsonp=HandleRequest");\n\t\t} \n\t\t\n\t\tJSONP回调\n\t\tfunction HandleRequest(objJSON) \n\t\t{\n\t\t    postMessage("Data returned from the server...FirstName: " \n\t\t                  + objJSON.FirstName + " LastName: " + objJSON.LastName);\n\t\t} \n')])])]),t("p",[e._v("参考文档：")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2018/07/web-worker.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("实用 | 阮一峰"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("https://juejin.cn/post/6844904083657064462")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://yrq110.me/post/front-end/introduction-to-web-worker/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web Worker融会贯通| 很详细"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("问题：")]),e._v(" "),t("p",[e._v("web worker的执行时机")])])}),[],!1,null,null,null);t.default=o.exports}}]);