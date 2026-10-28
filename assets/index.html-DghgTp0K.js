import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,a as o,o as n}from"./app-BBpi8vMY.js";const a={};function s(i,e){return n(),r("div",null,[...e[0]||(e[0]=[o(`<p>一个异步的脚本，不会阻塞浏览器渲染，运行在另一个全局上下文中，不能使用window</p><p>特点： .仅仅能被首次生成它的脚本使用，只能服务于新建它的页面，不同页面之间不能共享同一个 Web Worker。 .当页面关闭时，该页面新建的 Web Worker 也会随之关闭，不会常驻在浏览器中 .必须与主线程的脚本文件同源 .不能直接操作DOM节点 .不能使用window对象的默认方法和属性(如alert、confirm等) .传输数据并不是被共享而是被复制。 .在同源的父页面中，workers可以依次生成新的workers .线程无法读取本地文件，即不能打开本机的文件系统（file://），它所加载的脚本，必须来自网络</p><pre><code>.可以使用大量window对象之下的东西，包括WebSockets，IndexedDB以及FireFox OS专用的Data Store API等数据存储机制
</code></pre><p>基本使用: if (window.Worker) { const worker=new Worker(url,options) }</p><pre><code>url:表示worker将执行的脚本的URL、路径、类似blob这样的url，它必须遵守同源策略。
options:
	type：该值可以是 classic 或 module. 如果未指定，将使用默认值 classic.
	credentials：用以指定 worker 凭证，可以是 omit, same-origin，或 include。如果未指定，或者 type 是 classic，将使用默认值 omit (不要求凭证)
	name：在 DedicatedWorkerGlobalScope 的情况下，用来表示 worker 的 scope 的一个 DOMString 值，主要用于调试目的
</code></pre><p>事件监听: self:表示在worker内部使用的内置全局变量</p><pre><code>(1)worker.onmessage、self.onmessage

	var myWorker = new Worker(&#39;worker.js&#39;);
	
	first.onchange = function() {
	  myWorker.postMessage([first.value,second.value]);
	  console.log(&#39;Message posted to worker&#39;);
	}
	
	myWorker.onmessage = function(e) {
	  result.textContent = e.data;
	  console.log(&#39;Message received from worker&#39;);
	}
	
	//worker.js
	self.onmessage = function(e) {
	  console.log(&#39;Message received from main script&#39;);
	  var workerResult = &#39;Result: &#39; + (e.data[0] * e.data[1]);
	  console.log(&#39;Posting message back to main script&#39;);
	  self.postMessage(workerResult);
	}
	
(2)错误监听
	worker.onmessageerror、self.onmessageerror 数据序列化、反序列化错误时触发
	worker.onerror、self.onerror	运行中错误

(3)监听在线、短线情况（可能存在兼容性问题）
	self.onoffline=fn
	self.ononline=fn
</code></pre><p>属性: self.name 获取worker名称，即options中传入的name self.location 获取类似浏览器url内容的location self.navigator 获取navigator对象</p><p>方法: (1)发送消息 worker.postMessage(data,[Transferable])、self.postMessage(data,[Transferable]) 第二个参数为Transferable对象数组，意味着对象在内存中的位置也会被转移，即零拷贝转移 支持可转移的对象有： ArrayBuffer、MessagePort、ReadableStream、WritableStream、TransformStream、AudioData、ImageBitmap、VideoFrame、OffscreenCanvas 多线程共享的内存： SharedArrayBuffer 通过Atomics对象提供原子操作能力，解决多线程访问共享数据会出现数据竞争问题</p><pre><code>(2)终止worker
	worker.terminate();
	self.close();

(3)向当前worker的作用域导入一或更多条脚本
	self.importScripts(&#39;foo.js&#39;, &#39;bar.js&#39;,...);
	也可用作JSONP
		function MakeServerRequest() 
		{
		    importScripts(&quot;http://SomeServer.com?jsonp=HandleRequest&quot;);
		} 
		
		JSONP回调
		function HandleRequest(objJSON) 
		{
		    postMessage(&quot;Data returned from the server...FirstName: &quot; 
		                  + objJSON.FirstName + &quot; LastName: &quot; + objJSON.LastName);
		} 
</code></pre><p>参考文档：</p><p><a href="https://www.ruanyifeng.com/blog/2018/07/web-worker.html" target="_blank" rel="noopener noreferrer">实用 | 阮一峰</a></p><p>https://juejin.cn/post/6844904083657064462</p><p><a href="https://yrq110.me/post/front-end/introduction-to-web-worker/" target="_blank" rel="noopener noreferrer">Web Worker融会贯通| 很详细</a></p><p>问题：</p><p>web worker的执行时机</p>`,16)])])}const l=t(a,[["render",s]]),m=JSON.parse(`{"path":"/pages/1da945/","title":"webworker使用方法","lang":"zh-CN","frontmatter":{"title":"webworker使用方法","date":"2024-01-29T04:27:55.000Z","permalink":"/pages/1da945/","categories":["性能优化","项目性能分析、优化"],"tags":[],"author":{"name":"aXing","link":"https://github.com/08163356"},"description":"一个异步的脚本，不会阻塞浏览器渲染，运行在另一个全局上下文中，不能使用window 特点： .仅仅能被首次生成它的脚本使用，只能服务于新建它的页面，不同页面之间不能共享同一个 Web Worker。 .当页面关闭时，该页面新建的 Web Worker 也会随之关闭，不会常驻在浏览器中 .必须与主线程的脚本文件同源 .不能直接操作DOM节点 .不能使用w...","head":[["meta",{"property":"og:url","content":"https://blog.axingit.top/pages/1da945/"}],["meta",{"property":"og:site_name","content":"aXing's blog"}],["meta",{"property":"og:title","content":"webworker使用方法"}],["meta",{"property":"og:description","content":"一个异步的脚本，不会阻塞浏览器渲染，运行在另一个全局上下文中，不能使用window 特点： .仅仅能被首次生成它的脚本使用，只能服务于新建它的页面，不同页面之间不能共享同一个 Web Worker。 .当页面关闭时，该页面新建的 Web Worker 也会随之关闭，不会常驻在浏览器中 .必须与主线程的脚本文件同源 .不能直接操作DOM节点 .不能使用w..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-02T15:55:47.000Z"}],["meta",{"property":"article:author","content":"aXing"}],["meta",{"property":"article:published_time","content":"2024-01-29T04:27:55.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T15:55:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"webworker使用方法\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-29T04:27:55.000Z\\",\\"dateModified\\":\\"2024-02-02T15:55:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"aXing\\",\\"link\\":\\"https://github.com/08163356\\"}]}"]]},"headers":[],"git":{"createdTime":1706109170000,"updatedTime":1706889347000,"contributors":[{"name":"Lx08163356@163.com","username":"Lx08163356@163.com","email":"Lx08163356@163.com","commits":4,"url":"https://github.com/Lx08163356@163.com"}]},"readingTime":{"minutes":2.61,"words":782},"filePathRelative":"性能优化/4.项目性能分析、优化/17.webworker使用方法.md","localizedDate":"2024年1月29日","autoDesc":true}`);export{l as comp,m as data};
