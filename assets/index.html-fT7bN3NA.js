import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,a as e,b as n,t as d,e as a,f as c,o as r}from"./app-BBpi8vMY.js";const t={};function v(i,s){return r(),p("div",null,[s[5]||(s[5]=e(`<h1 id="vue-渐进式javascript框架" tabindex="-1"><a class="header-anchor" href="#vue-渐进式javascript框架"><span>Vue -渐进式JavaScript框架</span></a></h1><ul><li><p><a href="https://cn.vuejs.org/" target="_blank" rel="noopener noreferrer">vue 中文网</a></p></li><li><p><a href="https://github.com/vuejs/vue" target="_blank" rel="noopener noreferrer">vue github</a></p></li><li><p>Vue.js 是一套构建用户界面(UI)的渐进式JavaScript框架</p></li><li><p>http://www.cnblogs.com/nzbin/p/6363827.html</p></li></ul><h2 id="库和框架的区别" tabindex="-1"><a class="header-anchor" href="#库和框架的区别"><span>库和框架的区别</span></a></h2><ul><li><a href="https://zhuanlan.zhihu.com/p/26078359?group_id=830801800406917120" target="_blank" rel="noopener noreferrer">我们所说的前端框架与库的区别？</a></li></ul><h3 id="library" tabindex="-1"><a class="header-anchor" href="#library"><span>Library</span></a></h3><blockquote><p>库，本质上是一些函数的集合。每次调用函数，实现一个特定的功能，接着把<code>控制权</code>交给使用者</p></blockquote><ul><li>代表：jQuery</li><li>jQuery这个库的核心：DOM操作，即：封装DOM操作，简化DOM操作</li></ul><h3 id="framework" tabindex="-1"><a class="header-anchor" href="#framework"><span>Framework</span></a></h3><blockquote><p>框架，是一套完整的解决方案，使用框架的时候，需要把你的代码放到框架合适的地方，框架会在合适的时机调用你的代码</p></blockquote><ul><li><p>框架规定了自己的编程方式，是一套完整的解决方案</p></li><li><p>使用框架的时候，由框架控制一切，我们只需要按照规则写代码</p></li><li><p>You call Library, Framework calls you</p></li><li><p>核心点：谁起到主导作用（控制反转）</p><ul><li>框架中控制整个流程的是框架</li><li>使用库，由开发人员决定如何调用库中提供的方法（辅助）</li></ul></li><li><p>好莱坞原则：Don&#39;t call us, we&#39;ll call you.</p></li><li><p>框架的侵入性很高（从头到尾）</p></li></ul><h2 id="mvvm的介绍" tabindex="-1"><a class="header-anchor" href="#mvvm的介绍"><span>MVVM的介绍</span></a></h2><ul><li><p>MVVM，一种更好的UI模式解决方案</p></li><li><p><a href="http://www.cnblogs.com/indream/p/3602348.html" target="_blank" rel="noopener noreferrer">从Script到Code Blocks、Code Behind到MVC、MVP、MVVM - 科普</a></p></li><li><p>M: Model 数据模型（专门用来操作数据，数据的CRUD）</p></li><li><p>V：View 视图（对于前端来说，就是页面）</p></li><li><p>C：Controller 控制器（是视图和数据模型沟通的桥梁，用于处理业务逻辑）</p></li></ul><h3 id="mvvm组成" tabindex="-1"><a class="header-anchor" href="#mvvm组成"><span>MVVM组成</span></a></h3><ul><li><p>MVVM ===&gt; M / V / VM</p></li><li><p>M：model数据模型</p></li><li><p>V：view视图</p></li><li><p>VM：ViewModel 视图模型</p></li><li><p>MVC模式，将应用程序划分为三大部分，实现了职责分离</p></li><li><p>在前端中经常要通过 JS代码 来进行一些逻辑操作，最终还要把这些逻辑操作的结果现在页面中。也就是需要频繁的操作DOM</p></li><li><p>MVVM通过<code>数据双向绑定</code>让数据自动地双向同步</p><ul><li>V（修改数据） -&gt; M</li><li>M（修改数据） -&gt; V</li><li>数据是核心</li></ul></li><li><p>Vue这种MVVM模式的框架，不推荐开发人员手动操作DOM</p></li></ul><h3 id="vue中的mvvm" tabindex="-1"><a class="header-anchor" href="#vue中的mvvm"><span>Vue中的MVVM</span></a></h3><blockquote><p>虽然没有完全遵循 MVVM 模型，Vue 的设计无疑受到了它的启发。因此在文档中经常会使用 vm (ViewModel 的简称) 这个变量名表示 Vue 实例</p></blockquote><h3 id="学习vue要转化思想" tabindex="-1"><a class="header-anchor" href="#学习vue要转化思想"><span>学习Vue要转化思想</span></a></h3><ul><li>不要在想着怎么操作DOM，而是想着如何操作数据！！！</li></ul><h2 id="起步-hello-vue" tabindex="-1"><a class="header-anchor" href="#起步-hello-vue"><span>起步 - Hello Vue</span></a></h2><ul><li>安装：<code>npm i -S vue</code></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!-- 指定vue管理内容区域，需要通过vue展示的内容都要放到找个元素中  通常我们也把它叫做边界 数据只在边界内部解析--&gt;</span></span>
<span class="line"><span>&lt; =&quot;app&quot;&gt;{{ msg }}&lt;/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- 引入 vue.js --&gt;</span></span>
<span class="line"><span>&lt;script =&quot;vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- 使用 vue --&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>   vm =  Vue({</span></span>
<span class="line"><span>    // el：提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标</span></span>
<span class="line"><span>    el: &#39;#app&#39;,</span></span>
<span class="line"><span>    // Vue 实例的数据对象，用于给 View 提供数据</span></span>
<span class="line"><span>    data: {</span></span>
<span class="line"><span>      msg: &#39;Hello Vue&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue实例" tabindex="-1"><a class="header-anchor" href="#vue实例"><span>Vue实例</span></a></h3><ul><li>注意 1：<strong>先在data中声明数据，再使用数据</strong></li><li>注意 2：可以通过 <code>vm.$data</code> 访问到data中的所有属性，或者 <code>vm.msg</code></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> vm =  Vue({</span></span>
<span class="line"><span>  : {</span></span>
<span class="line"><span>    : &#39;大家好，...&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>vm.$data.msg === vm.msg // true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>最常用的方式：<code>Mustache(插值语法)</code>，也就是 <code>{{}}</code> 语法</li><li>解释：<code>{{}}</code>从数据对象<code>data</code>中获取数据</li><li>说明：数据对象的属性值发生了改变，插值处的内容都会更新</li><li>说明：<code>{{}}</code>中只能出现JavaScript表达式 而不能解析js语句</li><li>注意：<strong>Mustache 语法不能作用在 HTML 元素的属性上</strong></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;&gt;Hello, {{ msg }}.&lt;/&gt;</span></span>
<span class="line"><span>&lt;&gt;{{ 1 + 2 }}&lt;/&gt;</span></span>
<span class="line"><span>&lt;&gt;{{ isOk ? &#39;yes&#39;: &#39;no&#39; }}&lt;/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- ！！！错误示范！！！ --&gt;</span></span>
<span class="line"><span>&lt; title=&quot;{{ err }}&quot;&gt;&lt;/&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="双向数据绑定-vue-two-way-data-binding" tabindex="-1"><a class="header-anchor" href="#双向数据绑定-vue-two-way-data-binding"><span>双向数据绑定 Vue two way data binding</span></a></h2><ul><li>双向数据绑定：将DOM与Vue实例的data数据绑定到一起，彼此之间相互影响 <ul><li>数据的改变会引起DOM的改变</li><li>DOM的改变也会引起数据的变化</li></ul></li><li>原理：<code>Object.defineProperty</code>中的<code>get</code>和<code>set</code>方法 <ul><li><code>getter</code>和<code>setter</code>：访问器</li><li>作用：指定<code>读取或设置</code>对象属性值的时候，执行的操作</li></ul></li><li><a href="https://cn.vuejs.org/v2/guide/reactivity.html" target="_blank" rel="noopener noreferrer">Vue - 深入响应式原理</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty" target="_blank" rel="noopener noreferrer">MDN - Object.defineProperty()</a></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/*  defineProperty语法 介绍 */</span></span>
<span class="line"><span> obj = {}</span></span>
<span class="line"><span>Object.defineProperty(obj, &#39;msg&#39;, {</span></span>
<span class="line"><span>  // 设置 obj.msg = &quot;1&quot; 时set方法会被系统调用 参数分别是设置后和设置前的值</span></span>
<span class="line"><span>  set: function (newVal, oldVal) {  },</span></span>
<span class="line"><span>  // 读取 obj.msg 时get方法会被系统调用</span></span>
<span class="line"><span>  get: function ( newVal, oldVal ) {}</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue双向绑定的极简实现" tabindex="-1"><a class="header-anchor" href="#vue双向绑定的极简实现"><span>Vue双向绑定的极简实现</span></a></h3><ul><li><a href="https://segmentfault.com/a/1190000006599500" target="_blank" rel="noopener noreferrer">剖析Vue原理&amp;实现双向绑定MVVM</a></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!-- 示例 --&gt;</span></span>
<span class="line"><span>&lt;input =&quot;text&quot; =&quot;txt&quot; /&gt;</span></span>
<span class="line"><span>&lt; =&gt;&lt;/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span> txt = document.getElementById(&#39;txt&#39;),</span></span>
<span class="line"><span>    sp = document.getElementById(),</span></span>
<span class="line"><span>    obj = {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 给对象obj添加msg属性，并设置setter访问器</span></span>
<span class="line"><span>Object.defineProperty(obj, &#39;msg&#39;, {</span></span>
<span class="line"><span>  // 设置 obj.msg  当obj.msg反生改变时set方法将会被调用  </span></span>
<span class="line"><span>  set: function (newVal) {</span></span>
<span class="line"><span>    // 当obj.msg被赋值时 同时设置给 input/span</span></span>
<span class="line"><span>    txt.value = newVal</span></span>
<span class="line"><span>    sp.innerText = newVal</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 监听文本框的改变 当文本框输入内容时 改变obj.msg</span></span>
<span class="line"><span>txt.addEventListener(&#39;keyup&#39;, function (event) {</span></span>
<span class="line"><span>  obj.msg = event.target.value</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="动态添加数据的注意点" tabindex="-1"><a class="header-anchor" href="#动态添加数据的注意点"><span>动态添加数据的注意点</span></a></h3><ul><li>注意：只有<code>data</code>中的数据才是响应式的，动态添加进来的数据默认为非响应式</li><li>可以通过以下方式实现动态添加数据的响应式 <ul><li>1 <code>Vue.set(object, key, value)</code> - 适用于添加单个属性</li><li>2 <code>Object.assign()</code> - 适用于添加多个属性</li></ul></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> vm =  Vue({</span></span>
<span class="line"><span>  : {</span></span>
<span class="line"><span>    : {</span></span>
<span class="line"><span>      : &#39;jack&#39;,</span></span>
<span class="line"><span>      : </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* Vue.set */</span></span>
<span class="line"><span>Vue.set(vm.stu, &#39;gender&#39;, &#39;male&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* Object.assign 将参数中的所有对象属性和值 合并到第一个参数 并返回合并后的对象*/</span></span>
<span class="line"><span>vm.stu = Object.assign({}, vm.stu, { gender: &#39;female&#39;, height:  })</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="异步dom更新" tabindex="-1"><a class="header-anchor" href="#异步dom更新"><span>异步DOM更新</span></a></h3><ul><li>说明：Vue 异步执行 DOM 更新，监视所有数据改变，一次性更新DOM</li><li>优势：可以去除重复数据，对于避免不必要的计算和 避免重复 DOM 操作上，非常重要</li><li>如果需要那到更新后dom中的数据 则需要通过 <code>Vue.nextTick(callback)</code>：在DOM更新后，执行某个操作（属于DOM操作） <ul><li>实例调用<code>vm.$nextTick(function () {})</code></li></ul></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>methods: {</span></span>
<span class="line"><span>  fn() {</span></span>
<span class="line"><span>    .msg = &#39;change&#39;</span></span>
<span class="line"><span>    .$nextTick(function () {</span></span>
<span class="line"><span>      console.log(&#39;$nextTick中打印：&#39;, .$el.children[].innerText);</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    console.log(&#39;直接打印：&#39;, .$el.children[].innerText);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>解释：指令 (Directives) 是带有 <code>v-</code> 前缀的特殊属性</li><li>作用：当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM</li></ul><h3 id="v-text" tabindex="-1"><a class="header-anchor" href="#v-text"><span>v-text</span></a></h3><ul><li>解释：更新DOM对象的 textContent</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt; v-text=&quot;msg&quot;&gt;&lt;/&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="v-html" tabindex="-1"><a class="header-anchor" href="#v-html"><span>v-html</span></a></h3><ul><li>解释：更新DOM对象的 innerHTML</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt; v-html=&quot;msg&quot;&gt;&lt;/&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="v-bind" tabindex="-1"><a class="header-anchor" href="#v-bind"><span>v-bind</span></a></h3><ul><li>作用：当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM</li><li>语法：<code>v-bind:title=&quot;msg&quot;</code></li><li>简写：<code>:title=&quot;msg&quot;</code></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!-- 完整语法 --&gt;</span></span>
<span class="line"><span>&lt; v-bind:href=&quot;url&quot;&gt;&lt;/&gt;</span></span>
<span class="line"><span>&lt;!-- 缩写 --&gt;</span></span>
<span class="line"><span>&lt; :href=&quot;url&quot;&gt;&lt;/&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>作用：绑定事件</li><li>语法：<code>v-on:click=&quot;say&quot;</code> or <code>v-on:click=&quot;say(&#39;参数&#39;, $event)&quot;</code></li><li>简写：<code>@click=&quot;say&quot;</code></li><li>说明：绑定的事件定义在<code>methods</code></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!-- 完整语法 --&gt;</span></span>
<span class="line"><span>&lt; v-on:click=&quot;doSomething&quot;&gt;&lt;/&gt;</span></span>
<span class="line"><span>&lt;!-- 缩写 --&gt;</span></span>
<span class="line"><span>&lt; @click=&quot;doSomething&quot;&gt;&lt;/&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事件修饰符" tabindex="-1"><a class="header-anchor" href="#事件修饰符"><span>事件修饰符</span></a></h3><ul><li><code>.stop</code> 阻止冒泡，调用 event.stopPropagation()</li><li><code>.prevent</code> 阻止默认行为，调用 event.preventDefault()</li><li><code>.capture</code> 添加事件侦听器时使用事件<code>捕获</code>模式</li><li><code>.self</code> 只当事件在该元素本身（比如不是子元素）触发时，才会触发事件</li><li><code>.once</code> 事件只触发一次</li></ul><h3 id="v-model" tabindex="-1"><a class="header-anchor" href="#v-model"><span>v-model</span></a></h3><ul><li>作用：在表单元素上创建双向数据绑定</li><li>说明：监听用户的输入事件以更新数据</li><li>案例：计算器</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;input =&quot;text&quot; v-model=&quot;message&quot; placeholder=&quot;edit me&quot;&gt;</span></span>
<span class="line"><span>&lt;&gt;Message is: {{ message }}&lt;/&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="v-for" tabindex="-1"><a class="header-anchor" href="#v-for"><span>v-for</span></a></h3><ul><li>作用：基于源数据多次渲染元素或模板块</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!-- 1 基础用法 --&gt;</span></span>
<span class="line"><span>&lt; v-for=&quot;item in items&quot;&gt;</span></span>
<span class="line"><span>  {{ item.text }}</span></span>
<span class="line"><span>&lt;/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- item 为当前项，index 为索引 --&gt;</span></span>
<span class="line"><span>&lt; v-for=&quot;(item, index) in list&quot;&gt;{{item}} -- {{index}}&lt;/&gt;</span></span>
<span class="line"><span>&lt;!-- item 为值，key 为键，index 为索引 --&gt;</span></span>
<span class="line"><span>&lt; v-for=&quot;(item, key, index) in obj&quot;&gt;{{item}} -- {{key}}&lt;/&gt;</span></span>
<span class="line"><span>&lt; v-for=&quot;item in 10&quot;&gt;{{item}}&lt;/&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="key属性" tabindex="-1"><a class="header-anchor" href="#key属性"><span>key属性</span></a></h3><ul><li>推荐：使用 <code>v-for</code> 的时候提供 <code>key</code> 属性，以获得性能提升。</li><li>说明：使用 key，VUE会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。</li><li><a href="https://cn.vuejs.org/v2/guide/list.html#key" target="_blank" rel="noopener noreferrer">vue key</a></li><li><a href="https://www.zhihu.com/question/61064119/answer/183717717" target="_blank" rel="noopener noreferrer">vue key属性的说明</a></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt; v-for=&quot;item in items&quot; =&quot;item.id&quot;&gt;</span></span>
<span class="line"><span>  &lt;!-- 内容 --&gt;</span></span>
<span class="line"><span>&lt;/&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="样式处理-class和style" tabindex="-1"><a class="header-anchor" href="#样式处理-class和style"><span>样式处理 -class和style</span></a></h2><ul><li>使用方式：<code>v-bind:class=&quot;expression&quot;</code> or <code>:class=&quot;expression&quot;</code></li><li>表达式的类型：字符串、数组、对象（重点）</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!-- 1 --&gt;</span></span>
<span class="line"><span>&lt; v-bind:class=&quot;{ active: true }&quot;&gt;&lt;/&gt; ===&gt; 解析后</span></span>
<span class="line"><span>&lt; class=&quot;active&quot;&gt;&lt;/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- 2 --&gt;</span></span>
<span class="line"><span>&lt; :class=&quot;[&#39;active&#39;, &#39;text-danger&#39;]&quot;&gt;&lt;/&gt; ===&gt;解析后</span></span>
<span class="line"><span>&lt; class=&quot;active text-danger&quot;&gt;&lt;/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- 3 --&gt;</span></span>
<span class="line"><span>&lt; v-bind:class=&quot;[{ active: true }, errorClass]&quot;&gt;&lt;/&gt; ===&gt;解析后</span></span>
<span class="line"><span>&lt; class=&quot;active text-danger&quot;&gt;&lt;/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>--- style ---</span></span>
<span class="line"><span>&lt;!-- 1 --&gt;</span></span>
<span class="line"><span>&lt; v-bind:style=&quot;{ color: activeColor, &#39;font-size&#39;: fontSize + &#39;px&#39; }&quot;&gt;&lt;/&gt;</span></span>
<span class="line"><span>&lt;!-- 2 将多个 样式对象 应用到一个元素上--&gt;</span></span>
<span class="line"><span>&lt;!-- baseStyles 和 overridingStyles 都是data中定义的对象 --&gt;</span></span>
<span class="line"><span>&lt; v-bind:style=&quot;[baseStyles, overridingStyles]&quot;&gt;&lt;/&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="v-if-和-v-show" tabindex="-1"><a class="header-anchor" href="#v-if-和-v-show"><span>v-if 和 v-show</span></a></h3><ul><li><a href="https://cn.vuejs.org/v2/guide/conditional.html" target="_blank" rel="noopener noreferrer">条件渲染</a></li><li><code>v-if</code>：根据表达式的值的真假条件，销毁或重建元素</li><li><code>v-show</code>：根据表达式之真假值，切换元素的 display CSS 属性</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt; v-show=&quot;isShow&quot;&gt;这个元素展示出来了吗？？？&lt;/&gt;</span></span>
<span class="line"><span>&lt; =&quot;isShow&quot;&gt;这个元素，在HTML结构中吗？？？&lt;/&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="提升性能-v-pre" tabindex="-1"><a class="header-anchor" href="#提升性能-v-pre"><span>提升性能：v-pre</span></a></h3><ul><li>说明：vue会跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签。跳过大量没有指令的节点会加快编译。</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt; v-pre&gt;{{ this will not be compiled }}&lt;/&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="提升性能-v-once" tabindex="-1"><a class="header-anchor" href="#提升性能-v-once"><span>提升性能：v-once</span></a></h3><ul><li>说明：vue只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt; v-once&gt;This will never change: {{msg}}&lt;/&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="过滤器-filter" tabindex="-1"><a class="header-anchor" href="#过滤器-filter"><span>过滤器 filter</span></a></h2><ul><li>作用：文本数据格式化</li><li>过滤器可以用在两个地方：<code>{{}}</code>和 v-bind 表达式</li><li>两种过滤器：1 全局过滤器 2 局部过滤器</li></ul><h3 id="全局过滤器" tabindex="-1"><a class="header-anchor" href="#全局过滤器"><span>全局过滤器</span></a></h3><ul><li>说明：通过全局方式创建的过滤器，在任何一个vue实例中都可以使用</li><li>注意：使用全局过滤器的时候，需要先创建全局过滤器，再创建Vue实例</li><li>显示的内容由过滤器的返回值决定</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Vue.filter(&#39;filterName&#39;, function (value) {</span></span>
<span class="line"><span>  // value 表示要过滤的内容</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;&gt;{{ dateStr | date }}&lt;/&gt;</span></span>
<span class="line"><span>&lt;&gt;{{ dateStr | date(&#39;YYYY-MM-DD hh:mm:ss&#39;) }}&lt;/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>  Vue.filter(&#39;date&#39;, function(value, format) {</span></span>
<span class="line"><span>    // value 要过滤的字符串内容，比如：dateStr</span></span>
<span class="line"><span>    // format 过滤器的参数，比如：&#39;YYYY-MM-DD hh:mm:ss&#39;</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="局部过滤器" tabindex="-1"><a class="header-anchor" href="#局部过滤器"><span>局部过滤器</span></a></h3><ul><li>说明：局部过滤器是在某一个vue实例的内容创建的，只在当前实例中起作用</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  : {},</span></span>
<span class="line"><span>  // 通过 filters 属性创建局部过滤器</span></span>
<span class="line"><span>  // 注意：此处为 filters</span></span>
<span class="line"><span>  filters: {</span></span>
<span class="line"><span>    filterName: function(value, format) {}</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="按键值修饰符" tabindex="-1"><a class="header-anchor" href="#按键值修饰符"><span>按键值修饰符</span></a></h2><ul><li>说明：在监听键盘事件时，Vue 允许为 <code>v-on</code> 在监听键盘事件时添加关键修饰符</li><li><a href="https://cn.vuejs.org/v2/guide/events.html" target="_blank" rel="noopener noreferrer">键盘事件 - 键值修饰符</a></li><li>其他：修饰键（.ctrl等）、鼠标按键修饰符（.left等）</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 只有在 keyCode 是 13 时调用 vm.submit()</span></span>
<span class="line"><span>@keyup=&quot;submit&quot;</span></span>
<span class="line"><span>// 使用全局按键别名</span></span>
<span class="line"><span>@keyup.enter=&quot;add&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 通过全局 config.keyCodes 对象自定义键值修饰符别名</span></span>
<span class="line"><span>Vue.config.keyCodes.f2 = </span></span>
<span class="line"><span>// 使用自定义键值修饰符</span></span>
<span class="line"><span>@keyup.enter.f2=&quot;add&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="监视数据变化-watch" tabindex="-1"><a class="header-anchor" href="#监视数据变化-watch"><span>监视数据变化 - watch</span></a></h2><ul><li>概述：<code>watch</code>是一个对象，键是需要观察的表达式，值是对应回调函数</li><li>作用：当表达式的值发生变化后，会调用对应的回调函数完成响应的监视操作</li><li><a href="https://cn.vuejs.org/v2/api/#vm-watch" target="_blank" rel="noopener noreferrer">VUE $watch</a></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> Vue({</span></span>
<span class="line"><span>  : { : , : { :  } },</span></span>
<span class="line"><span>  watch: {</span></span>
<span class="line"><span>    : function(val, oldVal) {</span></span>
<span class="line"><span>      // val 表示当前值</span></span>
<span class="line"><span>      // oldVal 表示旧值</span></span>
<span class="line"><span>      console.log(&#39;当前值为：&#39; + val, &#39;旧值为：&#39; + oldVal)</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 监听对象属性的变化</span></span>
<span class="line"><span>    b: {</span></span>
<span class="line"><span>      handler: function (val, oldVal) { /* ... */ },</span></span>
<span class="line"><span>      // deep : true表示是否监听对象内部属性值的变化 </span></span>
<span class="line"><span>      deep: </span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 只监视user对象中age属性的变化</span></span>
<span class="line"><span>    &#39;user.age&#39;: function (val, oldVal) {</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,87)),n("ul",null,[s[0]||(s[0]=n("li",null,"说明：计算属性是基于它们的依赖进行缓存的，只有在它的依赖发生改变时才会重新求值",-1)),n("li",null,"注意：Mustache语法（"+d()+"）中不要放入太多的逻辑，否则会让模板过重、难以理解和维护",1),s[1]||(s[1]=n("li",null,[a("注意："),n("strong",null,[n("code",null,"computed"),a("中的属性不能与"),n("code",null,"data"),a("中的属性同名，否则会报错")])],-1)),s[2]||(s[2]=n("li",null,[n("a",{href:"http://www.cnblogs.com/kidney/p/7384835.html?utm_source=debugrun&utm_medium=referral",target:"_blank",rel:"noopener noreferrer"},"Vue computed属性原理")],-1))]),s[6]||(s[6]=e(`<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> vm =  Vue({</span></span>
<span class="line"><span>  : &#39;#app&#39;,</span></span>
<span class="line"><span>  : {</span></span>
<span class="line"><span>    firstname: &#39;jack&#39;,</span></span>
<span class="line"><span>    lastname: &#39;rose&#39;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  computed: {</span></span>
<span class="line"><span>    fullname() {</span></span>
<span class="line"><span>      return .firstname +  + .lastname</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实例生命周期" tabindex="-1"><a class="header-anchor" href="#实例生命周期"><span>实例生命周期</span></a></h2><ul><li>所有的 Vue 组件都是 Vue 实例，并且接受相同的选项对象即可 (一些根实例特有的选项除外)。</li><li>实例生命周期也叫做：组件生命周期</li></ul><h3 id="生命周期介绍" tabindex="-1"><a class="header-anchor" href="#生命周期介绍"><span>生命周期介绍</span></a></h3><ul><li><a href="https://cn.vuejs.org/v2/api/" target="_blank" rel="noopener noreferrer">vue生命周期钩子函数</a></li><li>简单说：<strong>一个组件从开始到最后消亡所经历的各种状态，就是一个组件的生命周期</strong></li></ul><p>生命周期钩子函数的定义：从组件被创建，到组件挂载到页面上运行，再到页面关闭组件被卸载，这三个阶段总是伴随着组件各种各样的事件，这些事件，统称为组件的生命周期函数！</p><ul><li>注意：Vue在执行过程中会自动调用<code>生命周期钩子函数</code>，我们只需要提供这些钩子函数即可</li><li>注意：钩子函数的名称都是Vue中规定好的！</li></ul><h3 id="钩子函数-beforecreate" tabindex="-1"><a class="header-anchor" href="#钩子函数-beforecreate"><span>钩子函数 - beforeCreate()</span></a></h3><ul><li>说明：在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用</li><li>注意：此时，无法获取 data中的数据、methods中的方法</li></ul><h3 id="钩子函数-created" tabindex="-1"><a class="header-anchor" href="#钩子函数-created"><span>钩子函数 - <strong>created()</strong></span></a></h3><ul><li>注意：这是一个常用的生命周期，可以调用methods中的方法、改变data中的数据</li><li><a href="https://segmentfault.com/a/1190000008879966" target="_blank" rel="noopener noreferrer">vue实例生命周期 参考1</a></li><li><a href="https://segmentfault.com/a/1190000008010666" target="_blank" rel="noopener noreferrer">vue实例生命周期 参考2</a></li><li>使用场景：发送请求获取数据</li></ul><h3 id="钩子函数-beforemounted" tabindex="-1"><a class="header-anchor" href="#钩子函数-beforemounted"><span>钩子函数 - beforeMounted()</span></a></h3><ul><li>说明：在挂载开始之前被调用</li></ul><h3 id="钩子函数-mounted" tabindex="-1"><a class="header-anchor" href="#钩子函数-mounted"><span>钩子函数 - <strong>mounted()</strong></span></a></h3><ul><li>说明：此时，vue实例已经挂载到页面中，可以获取到el中的DOM元素，进行DOM操作</li></ul><h3 id="钩子函数-beforeupdated" tabindex="-1"><a class="header-anchor" href="#钩子函数-beforeupdated"><span>钩子函数 - beforeUpdated()</span></a></h3><ul><li>说明：数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。</li><li>注意：此处获取的数据是更新后的数据，但是获取页面中的DOM元素是更新之前的</li></ul><h3 id="钩子函数-updated" tabindex="-1"><a class="header-anchor" href="#钩子函数-updated"><span>钩子函数 - updated()</span></a></h3><ul><li>说明：组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。</li></ul><h3 id="钩子函数-beforedestroy" tabindex="-1"><a class="header-anchor" href="#钩子函数-beforedestroy"><span>钩子函数 - beforeDestroy()</span></a></h3><ul><li>说明：实例销毁之前调用。在这一步，实例仍然完全可用。</li><li>使用场景：实例销毁之前，执行清理任务，比如：清除定时器等</li></ul><h3 id="钩子函数-destroyed" tabindex="-1"><a class="header-anchor" href="#钩子函数-destroyed"><span>钩子函数 - destroyed()</span></a></h3><ul><li>说明：Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。</li></ul><h2 id="axios" tabindex="-1"><a class="header-anchor" href="#axios"><span>axios</span></a></h2><ul><li>Promise based HTTP client for the browser and node.js <ul><li>以Promise为基础的HTTP客户端，适用于：浏览器和node.js</li><li>封装ajax，用来发送请求，异步获取数据</li></ul></li><li>安装：<code>npm i -S axios</code></li><li><a href="https://github.com/axios/axios" target="_blank" rel="noopener noreferrer">axios</a></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 在浏览器中使用，直接引入js文件使用下面的GET/POST请求方式即可</span></span>
<span class="line"><span>// 1 引入 axios.js</span></span>
<span class="line"><span>// 2 直接调用axios提供的API发送请求</span></span>
<span class="line"><span>created: function () {</span></span>
<span class="line"><span>  axios.get(url)</span></span>
<span class="line"><span>    .then(function() {})</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>// 配合 webpack 使用方式如下：</span></span>
<span class="line"><span>import Vue  &#39;vue&#39;</span></span>
<span class="line"><span>import axios  &#39;axios&#39;</span></span>
<span class="line"><span>// 将 axios 添加到 Vue.prototype 中</span></span>
<span class="line"><span>Vue.prototype.$axios = axios</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>// 在组件中使用：</span></span>
<span class="line"><span>methods: {</span></span>
<span class="line"><span>  getData() {</span></span>
<span class="line"><span>    .$axios.get(&#39;url&#39;)</span></span>
<span class="line"><span>      .then( =&gt; {})</span></span>
<span class="line"><span>      .catch( =&gt; {})</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>// API使用方式：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>axios.get(url[, config])</span></span>
<span class="line"><span>axios.post(url[, data[, config]])</span></span>
<span class="line"><span>axios(url[, config])</span></span>
<span class="line"><span>axios(config)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get-请求" tabindex="-1"><a class="header-anchor" href="#get-请求"><span>Get 请求</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const url = &#39;http://vue.studyit.io/api/getnewslist&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// url中带有query参数</span></span>
<span class="line"><span>axios.get(&#39;/user?id=89&#39;)</span></span>
<span class="line"><span>  .then(function (response) {</span></span>
<span class="line"><span>    console.log(response);</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  .catch(function (error) {</span></span>
<span class="line"><span>    console.log(error);</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// url和参数分离，使用对象</span></span>
<span class="line"><span>axios.get(&#39;/user&#39;, {</span></span>
<span class="line"><span>  params: {</span></span>
<span class="line"><span>    : 12345</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="post-请求" tabindex="-1"><a class="header-anchor" href="#post-请求"><span>Post 请求</span></a></h3><ul><li><a href="https://github.com/axios/axios#using-applicationx-www-form-urlencoded-format" target="_blank" rel="noopener noreferrer">不同环境中处理 POST请求</a></li><li>默认情况下，axios 会将JS对象序列化为JSON对象。为了使用 <code>application/x-www-form-urlencoded</code> 格式发送请求，我们可以这样：</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 使用 qs 包，处理将对象序列化为字符串</span></span>
<span class="line"><span>// npm i -S qs</span></span>
<span class="line"><span>// var qs = require(&#39;qs&#39;)</span></span>
<span class="line"><span>import qs  </span></span>
<span class="line"><span>qs.stringify({ &#39;bar&#39;:  }) ===&gt; &quot;bar=123&quot;</span></span>
<span class="line"><span>axios.post(&#39;/foo&#39;, qs.stringify({ &#39;bar&#39;:  }))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 或者：</span></span>
<span class="line"><span>axios.post(&#39;/foo&#39;, &#39;bar=123&amp;age=19&#39;)</span></span>
<span class="line"><span>const url = &#39;http://vue.studyit.io/api/postcomment/17&#39;</span></span>
<span class="line"><span>axios.post(url, &#39;content=点个赞不过份&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>axios.post(&#39;/user&#39;, qs.stringify({</span></span>
<span class="line"><span>    firstName: &#39;Fred&#39;,</span></span>
<span class="line"><span>    lastName: &#39;Flintstone&#39;</span></span>
<span class="line"><span>  }))</span></span>
<span class="line"><span>  .then(function (response) {</span></span>
<span class="line"><span>    console.log(response);</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  .catch(function (error) {</span></span>
<span class="line"><span>    console.log(error);</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>// 设置请求公共路径：</span></span>
<span class="line"><span>axios.defaults.baseURL = &#39;http://vue.studyit.io&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>拦截器会拦截发送的每一个请求，请求发送之前执行<code>request</code>中的函数，请求发送完成之后执行<code>response</code>中的函数</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 请求拦截器</span></span>
<span class="line"><span>axios.interceptors.request.use(function (config) {</span></span>
<span class="line"><span>    // 所有请求之前都要执行的操作</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return config;</span></span>
<span class="line"><span>  }, function (error) {</span></span>
<span class="line"><span>    // 错误处理</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return Promise.reject(error);</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 响应拦截器</span></span>
<span class="line"><span>axios.interceptors.response.use(function (response) {</span></span>
<span class="line"><span>    // 所有请求完成后都要执行的操作</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return response;</span></span>
<span class="line"><span>  }, function (error) {</span></span>
<span class="line"><span>    // 错误处理</span></span>
<span class="line"><span>    return Promise.reject(error);</span></span>
<span class="line"><span>  });</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义指令" tabindex="-1"><a class="header-anchor" href="#自定义指令"><span>自定义指令</span></a></h2><ul><li>作用：进行DOM操作</li><li>使用场景：对纯 DOM 元素进行底层操作，比如：文本框获得焦点</li><li><a href="https://juejin.im/entry/58b7c5d8ac502e006cfee34a" target="_blank" rel="noopener noreferrer">vue 自定义指令用法实例</a></li><li>两种指令：1 全局指令 2 局部指令</li></ul><h3 id="全局自定义指令" tabindex="-1"><a class="header-anchor" href="#全局自定义指令"><span>全局自定义指令</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 第一个参数：指令名称</span></span>
<span class="line"><span>// 第二个参数：配置对象，指定指令的钩子函数</span></span>
<span class="line"><span>Vue.directive(&#39;directiveName&#39;, {</span></span>
<span class="line"><span>  // bind中只能对元素自身进行DOM操作，而无法对父级元素操作</span></span>
<span class="line"><span>  // 只调用一次 指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。</span></span>
<span class="line"><span>  bind( el，binding, vnode ) {</span></span>
<span class="line"><span>    // 参数详解</span></span>
<span class="line"><span>    // el：指令所绑定的元素，可以用来直接操作 DOM 。</span></span>
<span class="line"><span>    // binding：一个对象，包含以下属性：</span></span>
<span class="line"><span>      // name：指令名，不包括 v- 前缀。</span></span>
<span class="line"><span>      // value：指令的绑定值，等号后面的值 。</span></span>
<span class="line"><span>      // oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。</span></span>
<span class="line"><span>      // expression：字符串形式的指令表达式 等号后面的字符串 形式</span></span>
<span class="line"><span>      // arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 &quot;foo&quot;。</span></span>
<span class="line"><span>      // modifiers：指令修饰符。例如：v-directive.foo.bar中，修饰符对象为 { foo: true, bar: true }。</span></span>
<span class="line"><span>    // vnode：Vue 编译生成的虚拟节点。。</span></span>
<span class="line"><span>    // oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  // inserted这个钩子函数调用的时候，当前元素已经插入页面中了，也就是说可以获取到父级节点了</span></span>
<span class="line"><span>  inserted (  el，binding, vnode ) {},</span></span>
<span class="line"><span>  //  DOM重新渲染前</span></span>
<span class="line"><span>  update(el，binding, vnode,oldVnode) {},</span></span>
<span class="line"><span>  // DOM重新渲染后</span></span>
<span class="line"><span>  componentUpdated ( el，binding, vnode,oldVnode ) {},</span></span>
<span class="line"><span>  // 只调用一次，指令与元素解绑时调用</span></span>
<span class="line"><span>  unbind ( el ) {</span></span>
<span class="line"><span>    // 指令所在的元素在页面中消失，触发</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>// 简写 如果你想在 bind 和 update 时触发相同行为，而不关心其它的钩子:</span></span>
<span class="line"><span>Vue.directive(&#39;自定义指令名&#39;, function( el, binding ) {})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Vue.directive(&#39;color&#39;, function(el, binding) {</span></span>
<span class="line"><span>  el.style.color = binging.value</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>// 使用 注意直接些会被i成data中的数据“red” 需要字符串则嵌套引号&quot;&#39;red&#39;&quot;</span></span>
<span class="line"><span>&lt;p v-color=&quot;&#39;red&#39;&quot;&gt;&lt;/&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="局部自定义指令" tabindex="-1"><a class="header-anchor" href="#局部自定义指令"><span>局部自定义指令</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> vm =  Vue({</span></span>
<span class="line"><span>   : &quot;#app&quot;,</span></span>
<span class="line"><span>  directives: {</span></span>
<span class="line"><span>    directiveName: { }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><a href="https://segmentfault.com/a/1190000006599500" target="_blank" rel="noopener noreferrer">vue 剖析Vue原理&amp;实现双向绑定MVVM</a></li></ul><blockquote><p>组件系统是 Vue 的另一个重要概念，因为它是一种抽象，允许我们使用小型、独立和通常可复用的组件构建大型应用。仔细想想，几乎任意类型的应用界面都可以抽象为一个组件树</p></blockquote><ul><li><p>创建组件的两种方式：1 全局组件 2 局部组件</p></li><li><p>说明：全局组件在所有的vue实例中都可以使用</p></li><li><p>注意：<strong>先注册组件，再初始化根实例</strong></p></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 1 注册全局组件  </span></span>
<span class="line"><span>Vue.component(&#39;my-component&#39;, {</span></span>
<span class="line"><span>  // template 只能有一个根元素</span></span>
<span class="line"><span>  template: &#39;&lt;p&gt;A custom component!&lt;/p&gt;&#39;,</span></span>
<span class="line"><span>  // 组件中的 \`data\` 必须是函数 并且函数的返回值必须是对象</span></span>
<span class="line"><span>  data() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      : &#39;注意：组件的data必须是一个函数！！！&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 2 使用：以自定义元素的方式</span></span>
<span class="line"><span>&lt;div id=&quot;example&quot;&gt;</span></span>
<span class="line"><span>  &lt;my-component&gt;&lt;/my-component&gt;</span></span>
<span class="line"><span>&lt;/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// =====&gt; 渲染结果</span></span>
<span class="line"><span>&lt;div id=&quot;example&quot;&gt;</span></span>
<span class="line"><span>  &lt;&gt;A custom component!&lt;/&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 3 template属性的值可以是：</span></span>
<span class="line"><span>  - 1 模板字符串</span></span>
<span class="line"><span>  - 2 模板id  template: &#39;#tpl&#39;</span></span>
<span class="line"><span>&lt;script type=&quot;text/x-template&quot; id=&quot;tpl&quot;&gt;</span></span>
<span class="line"><span>  &lt;p&gt;A custom component!&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>extend</code>：使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 注册组件，传入一个扩展过的构造器</span></span>
<span class="line"><span>Vue.component(&#39;my-component&#39;, Vue.extend({ /* ... */ }))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 注册组件，传入一个选项对象 (自动调用 Vue.extend)</span></span>
<span class="line"><span>Vue.component(&#39;my-component&#39;, { /* ... */ })</span></span>
<span class="line"><span></span></span>
<span class="line"><span> Home = Vue.extend({</span></span>
<span class="line"><span>  template: ,</span></span>
<span class="line"><span>  data() {}</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>Vue.component(&#39;home&#39;, Home)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>说明：局部组件，是在某一个具体的vue实例中定义的，只能在这个vue实例中使用</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> Child = {</span></span>
<span class="line"><span>  template: &#39;&lt;div&gt;A custom component!&lt;/div&gt;&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span> Vue({</span></span>
<span class="line"><span>  // 注意：此处为 components</span></span>
<span class="line"><span>  components: {</span></span>
<span class="line"><span>    // &lt;my-component&gt; 将只在当前vue实例中使用</span></span>
<span class="line"><span>    // my-component 为组件名 值为配置对象 </span></span>
<span class="line"><span>    &#39;my-component&#39;: {</span></span>
<span class="line"><span>      template: ,</span></span>
<span class="line"><span>      data () { return { } },</span></span>
<span class="line"><span>      props : []</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在某些特定的标签中只能存在指定表恰 如ul &gt; li 如果要浏览器正常解析则需要使用is</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!-- 案例 --&gt;</span></span>
<span class="line"><span>&lt; =&quot;app&quot;&gt;</span></span>
<span class="line"><span>  &lt;!-- 不能识别 --&gt;</span></span>
<span class="line"><span>  &lt;my-li&gt;&lt;/my-li&gt; </span></span>
<span class="line"><span>  正常识别</span></span>
<span class="line"><span>  &lt; =&quot;my-li&quot;&gt;&lt;/&gt;</span></span>
<span class="line"><span>&lt;/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>   vm =  Vue({</span></span>
<span class="line"><span>    : &quot;#app&quot;,</span></span>
<span class="line"><span>    components : {</span></span>
<span class="line"><span>       : {</span></span>
<span class="line"><span>        template : \`&lt;li&gt;内容&lt;/li&gt;\`</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="父组件到子组件" tabindex="-1"><a class="header-anchor" href="#父组件到子组件"><span>父组件到子组件</span></a></h3><ul><li>方式：通过子组件<code>props</code>属性来传递数据 props是一个数组</li><li>注意：属性的值必须在组件中通过<code>props</code>属性显示指定，否则，不会生效</li><li>说明：传递过来的<code>props</code>属性的用法与<code>data</code>属性的用法相同</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt; =&quot;app&quot;&gt;</span></span>
<span class="line"><span>  &lt;!-- 如果需要往子组件总传递父组件data中的数据 需要加v-bind=&quot;数据名称&quot; --&gt;</span></span>
<span class="line"><span>  &lt;hello v-bind:msg=&quot;info&quot;&gt;&lt;/hello&gt;</span></span>
<span class="line"><span>  &lt;!-- 如果传递的是字面量 那么直接写--&gt;</span></span>
<span class="line"><span>  &lt;hello my-msg=&quot;abc&quot;&gt;&lt;/hello&gt;</span></span>
<span class="line"><span>&lt;/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- js --&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>   Vue({</span></span>
<span class="line"><span>    el: &quot;#app&quot;,</span></span>
<span class="line"><span>    data : {</span></span>
<span class="line"><span>      info : </span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    components: {</span></span>
<span class="line"><span>      hello: {</span></span>
<span class="line"><span>        // 创建props及其传递过来的属性</span></span>
<span class="line"><span>        props: [&#39;msg&#39;, &#39;myMsg&#39;],</span></span>
<span class="line"><span>        template: &#39;&lt;h1&gt;这是 hello 组件，这是消息：{{msg}} --- {{myMsg}}&lt;/h1&gt;&#39;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="子组件到父组件" tabindex="-1"><a class="header-anchor" href="#子组件到父组件"><span>子组件到父组件</span></a></h3><p>方式：父组件给子组件传递一个函数，由子组件调用这个函数</p><ul><li><p>说明：借助vue中的自定义事件（v-on:cunstomFn=&quot;fn&quot;）</p></li><li><p>1、在父组件中定义方法 parentFn</p></li><li><p>2、在子组件 组件引入标签 中绑定自定义事件 v-on:自定义事件名=&quot;父组件中的方法&quot; ==&gt; @pfn=&quot;parentFn&quot;</p></li><li><p>3、子组件中通过<code>$emit()</code>触发自定义事件事件 this.$emit(pfn,参数列表。。。)</p></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;hello @=&quot;parentFn&quot;&gt;&lt;/hello&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>  Vue.component(&#39;hello&#39;, {</span></span>
<span class="line"><span>    template: &#39;&lt;button @click=&quot;fn&quot;&gt;按钮&lt;/button&gt;&#39;,</span></span>
<span class="line"><span>    methods: {</span></span>
<span class="line"><span>      // 子组件：通过$emit调用</span></span>
<span class="line"><span>      fn() {</span></span>
<span class="line"><span>        .$emit(&#39;pfn&#39;, &#39;这是子组件传递给父组件的数据&#39;)</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>   Vue({</span></span>
<span class="line"><span>    methods: {</span></span>
<span class="line"><span>      // 父组件：提供方法</span></span>
<span class="line"><span>      parentFn(data) {</span></span>
<span class="line"><span>        console.log(&#39;父组件：&#39;, data)</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="非父子组件通讯" tabindex="-1"><a class="header-anchor" href="#非父子组件通讯"><span>非父子组件通讯</span></a></h3><blockquote><p>在简单的场景下，可以使用一个空的 Vue 实例作为事件总线</p></blockquote><ul><li><code>$on()</code>：绑定自定义事件</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> bus =  Vue()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 在组件 B 绑定自定义事件</span></span>
<span class="line"><span>bus.$on(&#39;id-selected&#39;, function () {</span></span>
<span class="line"><span>  // ...</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>// 触发组件 A 中的事件</span></span>
<span class="line"><span>bus.$emit(&#39;id-selected&#39;, )</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>示例：组件A ---&gt; 组件B</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!-- 组件A： --&gt;</span></span>
<span class="line"><span>&lt;com-a&gt;&lt;/com-a&gt;</span></span>
<span class="line"><span>&lt;!-- 组件B： --&gt;</span></span>
<span class="line"><span>&lt;com-b&gt;&lt;/com-b&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>  // 中间组件</span></span>
<span class="line"><span>   bus =  Vue()</span></span>
<span class="line"><span>  // 通信组件</span></span>
<span class="line"><span>   vm =  Vue({</span></span>
<span class="line"><span>    el: &#39;#app&#39;,</span></span>
<span class="line"><span>    components: {</span></span>
<span class="line"><span>      comB: {</span></span>
<span class="line"><span>        template: &#39;&lt;p&gt;组件A告诉我：{{msg}}&lt;/p&gt;&#39;,</span></span>
<span class="line"><span>        data() {</span></span>
<span class="line"><span>          return {</span></span>
<span class="line"><span>            msg: </span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        created() {</span></span>
<span class="line"><span>          // 给中间组件绑定自定义事件 注意:如果用到this 需要用箭头函数</span></span>
<span class="line"><span>          bus.$on(&#39;tellComB&#39;, (msg) =&gt; {</span></span>
<span class="line"><span>            .msg = msg</span></span>
<span class="line"><span>          })</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      comA: {</span></span>
<span class="line"><span>        template: &#39;&lt;button @click=&quot;emitFn&quot;&gt;告诉B&lt;/button&gt;&#39;,</span></span>
<span class="line"><span>        methods: {</span></span>
<span class="line"><span>          emitFn() {</span></span>
<span class="line"><span>            // 触发中间组件中的自定义事件</span></span>
<span class="line"><span>            bus.$emit(&#39;tellComB&#39;, &#39;土豆土豆我是南瓜&#39;)</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,62)),n("ul",null,[n("li",null,[s[3]||(s[3]=a("通过",-1)),c(i.$slots,"default"),s[4]||(s[4]=a(" 标签指定内容展示区域",-1))])]),s[7]||(s[7]=e(`<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!-- html代码 --&gt;</span></span>
<span class="line"><span>&lt; =&quot;app&quot;&gt;</span></span>
<span class="line"><span>  &lt;hello&gt;</span></span>
<span class="line"><span>    &lt;!-- 如果只有一个slot插槽 那么不需要指定名称 --&gt;</span></span>
<span class="line"><span>    &lt; =&quot;插槽名称&quot;&gt;我是额外的内容&lt;/&gt;</span></span>
<span class="line"><span>  &lt;/hello&gt;</span></span>
<span class="line"><span>&lt;/&gt;</span></span>
<span class="line"><span>// js代码</span></span>
<span class="line"><span> vue({</span></span>
<span class="line"><span>   : &quot;#app&quot;,</span></span>
<span class="line"><span>  components : {</span></span>
<span class="line"><span>    hello : {</span></span>
<span class="line"><span>      template : \`</span></span>
<span class="line"><span>          &lt;div&gt;</span></span>
<span class="line"><span>            &lt;p&gt;我是子组件中的内容&lt;/p&gt;</span></span>
<span class="line"><span>            &lt;slot name=&quot;名称&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span>          &lt;/div&gt;</span></span>
<span class="line"><span>        \`</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取组件-或元素-refs" tabindex="-1"><a class="header-anchor" href="#获取组件-或元素-refs"><span>获取组件（或元素） - refs</span></a></h3><ul><li>说明：<code>vm.$refs</code> 一个对象，持有已注册过 ref 的所有子组件（或HTML元素）</li><li>使用：在 HTML元素 中，添加<code>ref</code>属性，然后在JS中通过<code>vm.$refs.属性</code>来获取</li><li>注意：如果获取的是一个子组件，那么通过ref就能获取到子组件中的data和methods</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt; =&quot;app&quot;&gt;</span></span>
<span class="line"><span>  &lt; =&gt;&lt;/&gt;</span></span>
<span class="line"><span>  &lt; =&gt;&lt;/&gt;</span></span>
<span class="line"><span>&lt;/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- js --&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>   Vue({</span></span>
<span class="line"><span>     : &quot;#app&quot;,</span></span>
<span class="line"><span>    mounted() {</span></span>
<span class="line"><span>      .$refs.dv //获取到元素</span></span>
<span class="line"><span>      .$refs.my //获取到组件</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    components : {</span></span>
<span class="line"><span>       : {</span></span>
<span class="line"><span>        template: \`&lt;a&gt;sss&lt;/a&gt;\`</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="spa-单页应用程序" tabindex="-1"><a class="header-anchor" href="#spa-单页应用程序"><span>SPA -单页应用程序</span></a></h2><h3 id="spa-single-page-application" tabindex="-1"><a class="header-anchor" href="#spa-single-page-application"><span>SPA： Single Page Application</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>单页Web应用（single page application，SPA），就是只有一个Web页面的应用，</span></span>
<span class="line"><span>是加载单个HTML页面，并在用户与应用程序交互时动态更新该页面的Web应用程序。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>单页面应用程序：</p><ul><li>只有第一次会加载页面, 以后的每次请求, 仅仅是获取必要的数据.然后, 由页面中js解析获取的数据, 展示在页面中</li></ul></li><li><p>传统多页面应用程序：</p><ul><li>对于传统的多页面应用程序来说, 每次请求服务器返回的都是一个完整的页面</li></ul></li><li><p>1 减少了请求体积，加快页面响应速度，降低了对服务器的压力</p></li><li><p>2 更好的用户体验，让用户在web app感受native app的流畅</p></li></ul><p>实现思路和技术点</p><ul><li><p>1 ajax</p></li><li><p>2 锚点的使用（window.location.hash #）</p></li><li><p>3 hashchange 事件 window.addEventListener(&quot;hashchange&quot;,function () {})</p></li><li><p>4 监听锚点值变化的事件，根据不同的锚点值，请求相应的数据</p></li><li><p>5 原本用作页面内部进行跳转，定位并展示相应的内容</p></li><li><p>路由即：浏览器中的哈希值（# hash）与展示视图内容（template）之间的对应规则</p></li><li><p>vue中的路由是：hash 和 component的对应关系</p><p>在 Web app 中，通过一个页面来展示和管理整个应用的功能。 SPA往往是功能复杂的应用，为了有效管理所有视图内容，前端路由 应运而生！ 简单来说，路由就是一套映射规则（一对一的对应规则），由开发人员制定规则。 当URL中的哈希值（# hash）发生改变后，路由会根据制定好的规则，展示对应的视图内容</p></li><li><p>安装：npm i -S vue-router</p></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    &lt; =&quot;app&quot;&gt;</span></span>
<span class="line"><span>      &lt;!-- 5 路由入口 指定跳转到只定入口 --&gt;</span></span>
<span class="line"><span>      &lt;router-link =&quot;/home&quot;&gt;首页&lt;/router-link&gt;</span></span>
<span class="line"><span>      &lt;router-link =&quot;/login&quot;&gt;登录&lt;/router-link&gt;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>      &lt;!-- 7 路由出口：用来展示匹配路由视图内容 --&gt;</span></span>
<span class="line"><span>      &lt;router-view&gt;&lt;/router-view&gt;</span></span>
<span class="line"><span>    &lt;/&gt;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    &lt;!-- 1 导入 vue.js --&gt;</span></span>
<span class="line"><span>    &lt;script =&quot;./vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;!-- 2 导入 路由文件 --&gt;</span></span>
<span class="line"><span>    &lt;script =&quot;./node_modules/vue-router/dist/vue-router.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>      // 3 创建两个组件</span></span>
<span class="line"><span>      const Home = Vue.component(&#39;home&#39;, {</span></span>
<span class="line"><span>        template: &#39;&lt;h1&gt;这是 Home 组件&lt;/h1&gt;&#39;</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>      const Login = Vue.component(&#39;login&#39;, {</span></span>
<span class="line"><span>        template: &#39;&lt;h1&gt;这是 Login 组件&lt;/h1&gt;&#39;</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>      // 4 创建路由对象</span></span>
<span class="line"><span>      const router =  VueRouter({</span></span>
<span class="line"><span>        routes: [</span></span>
<span class="line"><span>          // 路径和组件一一对应</span></span>
<span class="line"><span>          { path: &#39;/home&#39;, component: Home },</span></span>
<span class="line"><span>          { path: &#39;/login&#39;, component: Login }</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>       vm =  Vue({</span></span>
<span class="line"><span>        el: &#39;#app&#39;,</span></span>
<span class="line"><span>        // 6 将路由实例挂载到vue实例</span></span>
<span class="line"><span>        router</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>//  将path 重定向到 redirect</span></span>
<span class="line"><span>{ : , redirect: &#39;/home&#39; }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="路由其他配置" tabindex="-1"><a class="header-anchor" href="#路由其他配置"><span>路由其他配置</span></a></h4><ul><li>路由导航高亮 <ul><li>说明：当前匹配的导航链接，会自动添加router-link-exact-active router-link-active类</li><li>配置：linkActiveClass</li></ul></li><li>匹配路由模式 <ul><li>配置：mode</li></ul></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> Router({</span></span>
<span class="line"><span>  routers:[],</span></span>
<span class="line"><span>  : &quot;hash&quot;, //默认hash | history 可以达到隐藏地址栏hash值 | abstract，如果发现没有浏览器的 API 则强制进入</span></span>
<span class="line"><span>  linkActiveClass : &quot;now&quot; //当前匹配的导航链接将被自动添加now类</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>说明：我们经常需要把某种模式匹配到的所有路由，全都映射到同一个组件，此时，可以通过路由参数来处理</li><li>语法：/user/:id</li><li>使用：当匹配到一个路由时，参数值会被设置到 this.$route.params</li><li>其他：可以通过 $route.query 获取到 URL 中的查询参数 等</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    // 方式一</span></span>
<span class="line"><span>    &lt;router-link =&quot;/user/1001&quot;&gt;如果你需要在模版中使用路由参数 可以这样 {{$router.params.id}}&lt;/router-link&gt;</span></span>
<span class="line"><span>    // 方式二</span></span>
<span class="line"><span>    &lt;router-link =&quot;{path:&#39;/user&#39;,query:{name:&#39;jack&#39;,age:18}}&quot;&gt;用户 Rose&lt;/router-link&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>     router =  Router({</span></span>
<span class="line"><span>      routers : [</span></span>
<span class="line"><span>        // 方式一 注意 只有/user/1001这种形式能被匹配 /user | /user/ | /user/1001/ 都不能被匹配</span></span>
<span class="line"><span>        // 将来通过$router.params获取参数返回 {id:1001}</span></span>
<span class="line"><span>        { : &#39;/user/:id&#39;, component: User }, </span></span>
<span class="line"><span>        // 方式二</span></span>
<span class="line"><span>        { : &quot;user&quot; , component: User}</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // User组件：</span></span>
<span class="line"><span>    const User = {</span></span>
<span class="line"><span>      template: \`&lt;div&gt;User {{ $route.params.id }}&lt;/div&gt;\`</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    &lt;/script&gt;  </span></span>
<span class="line"><span>    &lt;!-- 如果要子啊vue实例中获取路由参数 则使用this.$router.params 获取路由参数对象 --&gt;</span></span>
<span class="line"><span>    &lt;!--  {{$router.query}} 获取路由中的查询字符串 返回对象 --&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="嵌套路由-子路由" tabindex="-1"><a class="header-anchor" href="#嵌套路由-子路由"><span>嵌套路由 - 子路由</span></a></h4><ul><li>路由是可以嵌套的，即：路由中又包含子路由</li><li>规则：父组件中包含 router-view，在路由规则中使用 children 配置</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    // 父组件：</span></span>
<span class="line"><span>    const User = Vue.component(&#39;user&#39;, {</span></span>
<span class="line"><span>      template: \`</span></span>
<span class="line"><span>        &lt;div class=&quot;user&quot;&gt;</span></span>
<span class="line"><span>          &lt;h2&gt;User Center&lt;/h2&gt;</span></span>
<span class="line"><span>          &lt;router-link to=&quot;/user/profile&quot;&gt;个人资料&lt;/router-link&gt;</span></span>
<span class="line"><span>          &lt;router-link to=&quot;/user/posts&quot;&gt;岗位&lt;/router-link&gt;</span></span>
<span class="line"><span>          &lt;!-- 子路由展示在此处 --&gt;</span></span>
<span class="line"><span>          &lt;router-view&gt;&lt;/router-view&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>        \`</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 子组件[简写]</span></span>
<span class="line"><span>    const UserProfile = {</span></span>
<span class="line"><span>      template: &#39;&lt;h3&gt;个人资料：张三&lt;/h3&gt;&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    const UserPosts = {</span></span>
<span class="line"><span>      template: &#39;&lt;h3&gt;岗位：FE&lt;/h3&gt;&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>     router = Router({</span></span>
<span class="line"><span>      routers : [</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        { : &#39;/user&#39;, component: User,</span></span>
<span class="line"><span>          // 子路由配置：</span></span>
<span class="line"><span>          children: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>              // 当 /user/profile 匹配成功，</span></span>
<span class="line"><span>              // UserProfile 会被渲染在 User 的 &lt;router-view&gt; 中</span></span>
<span class="line"><span>              path: &#39;profile&#39;,</span></span>
<span class="line"><span>              component: UserProfile</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>              // 当 /user/posts 匹配成功</span></span>
<span class="line"><span>              // UserPosts 会被渲染在 User 的 &lt;router-view&gt; 中</span></span>
<span class="line"><span>              path: &#39;posts&#39;,</span></span>
<span class="line"><span>              component: UserPosts</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>          ]</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    })</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="前端模块化" tabindex="-1"><a class="header-anchor" href="#前端模块化"><span>前端模块化</span></a></h2><blockquote><p>为什么需要模块化</p></blockquote><ul><li>1 最开始的js就是为了实现客户端验证以及一些简单的效果</li><li>2 后来，js得到重视，应用越来越广泛，前端开发的复杂度越来越高</li><li>3 旧版本的js中没有提供与模块（module）相关的内容</li></ul><h3 id="模块的概念" tabindex="-1"><a class="header-anchor" href="#模块的概念"><span>模块的概念</span></a></h3><ul><li>在js中，一个模块就是实现特定功能的文件（js文件）</li><li>遵循模块的机制，想要什么功能就加载什么模块</li><li>模块化开发需要遵循规范</li></ul><h3 id="模块化解决的问题" tabindex="-1"><a class="header-anchor" href="#模块化解决的问题"><span>模块化解决的问题</span></a></h3><ul><li>1 命名冲突</li><li>2 文件依赖（加载文件）</li><li>3 模块的复用</li><li>4 统一规范和开发方式</li></ul><h3 id="js实现模块化的规范" tabindex="-1"><a class="header-anchor" href="#js实现模块化的规范"><span>JS实现模块化的规范</span></a></h3><ul><li>AMD 浏览器端 <ul><li>requirejs</li></ul></li><li>CommonJS nodejs <ul><li>加载模块：require()</li><li>导出模块：module.exports = {} / exports = {}</li></ul></li><li>ES6 中的 import / export</li><li>CMD 浏览器端 <ul><li>玉伯（阿里前端大神） -&gt; seajs</li></ul></li><li>UMD 通用模块化规范，可以兼容 AMD、CommonJS、浏览器中没有模块化规范 等这些语法</li></ul><p>AMD 的使用</p><blockquote><p>Asynchronous Module Definition：异步模块定义，浏览器端模块开发的规范 代表：require.js 特点：模块被异步加载，模块加载不影响后面语句的运行</p></blockquote><p>1、定义模块</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    // 语法:define(name, dependencies?, factory);</span></span>
<span class="line"><span>    // name表示：当前模块的名称，是一个字符串 可有可无</span></span>
<span class="line"><span>    // dependencies表示：当前模块的依赖项，是一个数组无论依赖一项还是多项 无则不写</span></span>
<span class="line"><span>    // factory表示：当前模块要完成的一些功能，是一个函数</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 定义对象模块</span></span>
<span class="line"><span>    define({})</span></span>
<span class="line"><span>    // 定义方法模块</span></span>
<span class="line"><span>    define(function() {</span></span>
<span class="line"><span>      return {}</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    // 定义带有依赖项的模块</span></span>
<span class="line"><span>    define([&#39;js/a&#39;], function() {})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、加载模块</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// - 注意：require的第一个参数必须是数组</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 参数必须是数组 表示模块路径 以当前文件为基准,通过回调函数中的参数获取加载模块中的变量 参数与模块按照顺序一一对应</span></span>
<span class="line"><span>    require([, &#39;js/b&#39;], function() {</span></span>
<span class="line"><span>      // 使用模块a 和 模块b 中的代码</span></span>
<span class="line"><span>    })</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、路径查找配置</p><ul><li>requirejs 默认使用 baseUrl+paths 的路径解析方式</li><li>可以使用以下方式避开此设置： <ul><li>1 以.js结尾</li><li>2 以 / 开始</li><li>3 包含协议：https:// 或 http://</li></ul></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 配置示例</span></span>
<span class="line"><span>    // 注意配置应当在使用之前</span></span>
<span class="line"><span>    require.config({</span></span>
<span class="line"><span>      baseUrl: &#39;./js&#39; // 配置基础路径为：当前目录下的js目录</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    require([])    // 查找 基础路径下的 ./js/a.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 简化加载模块路径</span></span>
<span class="line"><span>    require.config({</span></span>
<span class="line"><span>      baseUrl: &#39;./js&#39;,</span></span>
<span class="line"><span>      // 配置一次即可，直接通过路径名称（template || jquery）加载模块</span></span>
<span class="line"><span>      paths: {</span></span>
<span class="line"><span>        template: &#39;assets/artTemplate/template-native&#39;,</span></span>
<span class="line"><span>        jquery: &#39;assets/jquery/jquery.min&#39;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    // 加载jquery template模块</span></span>
<span class="line"><span>    require([&#39;jquery&#39;, &#39;template&#39;])</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、非模块化和依赖项支持</p><ul><li>1 添加模块的依赖模块，保证加载顺序（deps）</li><li>2 将非模块化模块，转化为模块化（exports）</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    require.config({</span></span>
<span class="line"><span>      baseUrl: &#39;./js&#39;,</span></span>
<span class="line"><span>      paths: {</span></span>
<span class="line"><span>        // 配置路径</span></span>
<span class="line"><span>        noModule: &#39;assets/demo/noModule&#39;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      // 配置不符合规范的模块项</span></span>
<span class="line"><span>      shim: {</span></span>
<span class="line"><span>        // 模块名称</span></span>
<span class="line"><span>        noModule: {</span></span>
<span class="line"><span>          : [],         // 依赖项</span></span>
<span class="line"><span>          exports: &#39;sayHi&#39;  // 导出模块中存在的函数或变量</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 注意点  如果定义模块的时候，指定了模块名称，需要使用该名称来引用模块</span></span>
<span class="line"><span>    // 定义 这个模块名称与paths中的名称相同</span></span>
<span class="line"><span>    define(&#39;moduleA&#39;, function() {})</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    require.config({</span></span>
<span class="line"><span>      paths: {</span></span>
<span class="line"><span>        // 此处的模块名：moduleA</span></span>
<span class="line"><span>        moduleA: &#39;assets/demo/moduleA&#39;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    })</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、路径加载规则</p><ul><li>路径配置的优先级： <ul><li>1 通过 config 配置规则查找</li><li>2 通过 data-main 指定的路径查找</li><li>3 以引入 requirejs 的页面所在路径为准查找</li></ul></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    &lt;!-- </span></span>
<span class="line"><span>      设置data-main属性</span></span>
<span class="line"><span>      1 data-main属性指定的文件也会同时被加载</span></span>
<span class="line"><span>      2 用于指定查找其他模块的基础路径</span></span>
<span class="line"><span>    --&gt;</span></span>
<span class="line"><span>    &lt;script =&quot;js/require.js&quot; data-main=&quot;js/main&quot;&gt;&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack"><span>Webpack</span></a></h2><ul><li><a href="http://webpack.github.io/" target="_blank" rel="noopener noreferrer">webpack 官网</a></li><li>bundle <code>[ˈbʌndl]</code> 捆绑，收集，归拢，把…塞入</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>1 webpack 将带有依赖项的各个模块打包处理后，变成了独立的浏览器能够识别的文件</span></span>
<span class="line"><span>2 webpack 合并以及解析带有依赖项的模块</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>webpack 是一个现代 JavaScript 应用程序的模块打包器(特点 module、 bundler) webpack 是一个<strong>模块化方案（预编译）</strong> webpack获取具有依赖关系的模块，并生成表示这些模块的静态资源</p></blockquote><ul><li>四个核心概念：<strong>入口(entry)</strong>、<strong>输出(output)</strong>、<strong>加载器loader</strong>、<strong>插件(plugins)</strong></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>对比</span></span>
<span class="line"><span>模块化方案: webpack 和 requirejs（通过编写代码的方式将前端的功能，划分成独立的模块）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>browserify 是与 webpack 相似的模块化打包工具</span></span>
<span class="line"><span></span></span>
<span class="line"><span>webpack 预编译 (在开发阶段通过webpack进行模块化处理, 最终项目上线, 就不在依赖于 webpack)</span></span>
<span class="line"><span>requirejs 线上的编译( 代码运行是需要依赖与 requirejs 的 )</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="webpack起源" tabindex="-1"><a class="header-anchor" href="#webpack起源"><span>webpack起源</span></a></h3><ul><li>webpack解决了现存模块打包器的两个痛点： <ul><li>1 <strong>Code Spliting</strong> - 代码分离 按需加载</li><li>2 <strong>静态资源的模块化处理方案</strong></li></ul></li></ul><h3 id="webpack与模块" tabindex="-1"><a class="header-anchor" href="#webpack与模块"><span>webpack与模块</span></a></h3><ul><li><a href="http://zhaoda.net/webpack-handbook/module-system.html" target="_blank" rel="noopener noreferrer">前端模块系统的演进</a></li><li>在webpack看来：所有的<strong>静态资源都是模块</strong></li><li>webpack 模块能够识别以下等形式的模块之间的依赖：</li><li>JS的模块化规范： <ul><li>ES2015 <code>import</code> <code>export</code></li><li>CommonJS <code>require()</code> <code>module.exports</code></li><li>AMD <code>define</code> 和 <code>require</code></li></ul></li><li>非JS等静态资源： <ul><li>css/sass/less 文件中的 <code>@import</code></li><li>图片连接，比如：样式 <code>url(...)</code> 或 HTML <code>&lt;img src=...&gt;</code></li></ul></li></ul><h3 id="webpack文档和资源" tabindex="-1"><a class="header-anchor" href="#webpack文档和资源"><span>webpack文档和资源</span></a></h3><hr><h2 id="安装webpack" tabindex="-1"><a class="header-anchor" href="#安装webpack"><span>安装webpack</span></a></h2><ul><li>全局安装：<code>npm i -g webpack</code><ul><li>目的：在任何目录中通过CLI使用 <code>webpack</code> 这个命令</li></ul></li><li>项目安装：<code>npm i -D webpack</code><ul><li>目的：执行当前项目的构建</li></ul></li></ul><h2 id="webpack的基本使用" tabindex="-1"><a class="header-anchor" href="#webpack的基本使用"><span>webpack的基本使用</span></a></h2><ul><li>安装：<code>npm i -D webpack</code></li><li>webpack的两种使用方式：1 命令行 2 配置文件（<code>webpack.config.js</code>）</li></ul><h3 id="命令行方式演示-案例-隔行变色" tabindex="-1"><a class="header-anchor" href="#命令行方式演示-案例-隔行变色"><span>命令行方式演示 - 案例：隔行变色</span></a></h3><ul><li>1 使用<code>npm init -y</code> 初始package.json，使用npm来管理项目中的包</li><li>2 新建<code>index.html</code>和<code>index.js</code>，实现隔行变色功能</li><li>3 运行<code>webpack src/js/index.js dist/bundle.js</code>进行打包构建，语法是：<code>webpack 入口文件 输出文件</code></li><li>4 注意：需要在页面中引入 输出文件 的路径（此步骤可通过配置webpack去掉）</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/*</span></span>
<span class="line"><span>  src/js/index.js</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 1 导入 jQuery</span></span>
<span class="line"><span>import $  &#39;jquery&#39;</span></span>
<span class="line"><span>// 2 获取页面中的li元素</span></span>
<span class="line"><span>const $lis = $(&#39;#ulList&#39;).find()</span></span>
<span class="line"><span>// 3 隔行变色</span></span>
<span class="line"><span>// jQuery中的 filter() 方法用来过滤jquery对象</span></span>
<span class="line"><span>$lis.filter(&#39;:odd&#39;).css(&#39;background-color&#39;, &#39;#def&#39;)</span></span>
<span class="line"><span>$lis.filter(&#39;:even&#39;).css(&#39;background-color&#39;, &#39;skyblue&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//命令行运行 \`webpack src/js/index.js   dist/bundle.js   目录生成在命令行运行目录</span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span>  运行流程：</span></span>
<span class="line"><span>  1、webpack 根据入口找到入口文件</span></span>
<span class="line"><span>  2、分析js中的模块化语法 </span></span>
<span class="line"><span>  3、将所有关联文件 打包合并输出到出口</span></span>
<span class="line"><span>*/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="webpack-dev-server-配置" tabindex="-1"><a class="header-anchor" href="#webpack-dev-server-配置"><span>webpack-dev-server 配置</span></a></h2><h3 id="一、package-json配置方式" tabindex="-1"><a class="header-anchor" href="#一、package-json配置方式"><span>一、package.json配置方式</span></a></h3><ul><li>安装：<code>npm i -D webpack-dev-server</code></li><li>作用：配合webpack，创建开发环境（启动服务器、监视文件变化、自动编译、刷新浏览器等），提高开发效率</li><li>注意：无法直接在终端中执行 <code>webpack-dev-server</code>，需要通过 <code>package.json</code> 的 <code>scripts</code> 实现</li><li>使用方式：<code>npm run dev</code></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 参数解释  注意参数是无序的 有值的参数空格隔开</span></span>
<span class="line"><span>// --open 自动打开浏览器</span></span>
<span class="line"><span>// --contentBase ./  指定浏览器 默认打开的页面路径中的 index.html 文件</span></span>
<span class="line"><span>// --open 自动打开浏览器</span></span>
<span class="line"><span>// --port  端口号</span></span>
<span class="line"><span>// --hot 热更新，只加载修改的文件(按需加载修改的内容)，而非全部加载</span></span>
<span class="line"><span>&quot;scripts&quot;: {</span></span>
<span class="line"><span>  &quot;dev&quot;: &quot;webpack-dev-server --open --contentBase ./ --port 8080 --hot&quot;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二、webpack-config-js-配置方式-推荐" tabindex="-1"><a class="header-anchor" href="#二、webpack-config-js-配置方式-推荐"><span>二、webpack.config.js 配置方式(推荐)</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> path = require(&#39;path&#39;)</span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  // 入口文件</span></span>
<span class="line"><span>  entry: path.join(__dirname, &#39;src/js/index.js&#39;),</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 输出文件</span></span>
<span class="line"><span>  output: {</span></span>
<span class="line"><span>    : path.join(__dirname, &#39;dist&#39;),   // 输出文件的路径</span></span>
<span class="line"><span>    filename: &#39;bundle.js&#39;                 // 输出文件的名称</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const webpack = require(&#39;webpack&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>devServer: {</span></span>
<span class="line"><span>  // 服务器的根目录 Tell the server where to serve content from</span></span>
<span class="line"><span>  // https://webpack.js.org/configuration/dev-server/#devserver-contentbase</span></span>
<span class="line"><span>  contentBase: path.join(__dirname, ),</span></span>
<span class="line"><span>  // 自动打开浏览器</span></span>
<span class="line"><span>  open: ,</span></span>
<span class="line"><span>  // 端口号</span></span>
<span class="line"><span>  port: ,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // --------------- 1 热更新 -----------------</span></span>
<span class="line"><span>  hot: </span></span>
<span class="line"><span>},</span></span>
<span class="line"><span></span></span>
<span class="line"><span>plugins: [</span></span>
<span class="line"><span>  // ---------------- 2 启用热更新插件 ----------------</span></span>
<span class="line"><span>   webpack.HotModuleReplacementPlugin()</span></span>
<span class="line"><span>]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>html-webpack-plugin 插件 <ul><li>安装：<code>npm i -D html-webpack-plugin</code></li><li>作用：根据模板，自动生成html页面</li><li>优势：页面存储在内存中，自动引入<code>bundle.js</code>、<code>css</code>等文件</li></ul></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/* webpack.config.js */</span></span>
<span class="line"><span>const htmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;)</span></span>
<span class="line"><span>plugins: [</span></span>
<span class="line"><span>   htmlWebpackPlugin({</span></span>
<span class="line"><span>    // 模板页面路径</span></span>
<span class="line"><span>    template: path.join(__dirname, &#39;./index.html&#39;),</span></span>
<span class="line"><span>    // 在内存中生成页面路径，默认值为：index.html</span></span>
<span class="line"><span>    filename: &#39;index.html&#39;</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="loaders-加载器" tabindex="-1"><a class="header-anchor" href="#loaders-加载器"><span>Loaders（加载器）</span></a></h3><blockquote><p>webpack enables use of loaders to preprocess files. This allows you to bundle any static resource way beyond JavaScript.</p></blockquote><ul><li>webpack只能处理JavaScript资源</li><li>webpack通过loaders处理非JavaScript静态资源</li></ul><p>1、 CSS打包</p><ul><li>安装：<code>npm i -D style-loader css-loader</code></li><li>注意：use中模块的顺序不能颠倒，加载顺序：从右向左加载</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/* 在index.js  导入 css 文件*/</span></span>
<span class="line"><span>import &#39;./css/app.css&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* webpack.config.js 配置各种资源文件的loader加载器*/</span></span>
<span class="line"><span>module: {</span></span>
<span class="line"><span>  // 配置匹配规则</span></span>
<span class="line"><span>  rules: [</span></span>
<span class="line"><span>    // test 用来配置匹配文件规则（正则）</span></span>
<span class="line"><span>    // use  是一个数组，按照从后往前的顺序执行加载</span></span>
<span class="line"><span>    {: /\\.css$/, : [&#39;style-loader&#39;, &#39;css-loader&#39;]},</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、 使用webpack打包sass文件</p><ul><li>安装：<code>npm i -D sass-loader node-sass</code></li><li>注意：<code>sass-loader</code> 依赖于 <code>node-sass</code> 模块</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/* webpack.config.js */</span></span>
<span class="line"><span>// 参考：https://webpack.js.org/loaders/sass-loader/#examples</span></span>
<span class="line"><span>// &quot;style-loader&quot;  ：creates style nodes from JS strings 创建style标签</span></span>
<span class="line"><span>// &quot;css-loader&quot;    ：translates CSS into CommonJS 将css转化为CommonJS代码</span></span>
<span class="line"><span>// &quot;sass-loader&quot;   ：compiles Sass to CSS 将Sass编译为css</span></span>
<span class="line"><span>module:{</span></span>
<span class="line"><span>  rules:[</span></span>
<span class="line"><span>    {: /\\.(scss|sass)$/, : [&#39;style-loader&#39;, &#39;css-loader&#39;, &#39;sass-loader&#39;]},</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、 图片和字体打包</p><ul><li>安装：<code>npm i -D url-loader file-loader</code></li><li><code>file-loader</code>：加载并重命名文件（图片、字体 等）</li><li><code>url-loader</code>：将图片或字体转化为base64编码格式的字符串，嵌入到样式文件中</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/* webpack.config.js */</span></span>
<span class="line"><span>module: {</span></span>
<span class="line"><span>  rules:[</span></span>
<span class="line"><span>    // 打包 图片文件</span></span>
<span class="line"><span>    { : /\\.(jpg|png|gif|jpeg)$/, : &#39;url-loader&#39; },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 打包 字体文件</span></span>
<span class="line"><span>    { : /\\.(woff|woff2|eot|ttf|otf)$/, : &#39;file-loader&#39; }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="图片打包细节" tabindex="-1"><a class="header-anchor" href="#图片打包细节"><span>图片打包细节</span></a></h4><ul><li><code>limit</code>参数的作用：（单位为：字节(byte)） <ul><li>当图片文件大小（字节）<code>小于</code>指定的limit时，图片被转化为base64编码格式</li><li>当图片文件大小（字节）<code>大于等于</code>指定的limit时，图片被重命名以url路径形式加载（此时，需要<code>file-loader</code>来加载图片）</li></ul></li><li>图片文件重命名，保证相同文件不会被加载多次。例如：一张图片（a.jpg）拷贝一个副本（b.jpg），同时引入这两张图片，重命名后只会加载一次，因为这两张图片就是同一张</li><li>文件重命名以后，会通过MD5加密的方式，来计算这个文件的名称</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/* webpack.config.js */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module: {</span></span>
<span class="line"><span>  rules: [</span></span>
<span class="line"><span>    // {test: /\\.(jpg|png|gif|jpeg)$/, use: &#39;url-loader?limit=100&#39;},</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      : /\\.(jpg|png|gif|jpeg)$/,</span></span>
<span class="line"><span>      : [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          loader: &#39;url-loader&#39;,</span></span>
<span class="line"><span>          options: {</span></span>
<span class="line"><span>            limit: </span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字体文件打包说明" tabindex="-1"><a class="header-anchor" href="#字体文件打包说明"><span>字体文件打包说明</span></a></h3><ul><li>处理方式与图片相同，可以使用：<code>file-loader</code>或<code>url-loader</code></li></ul><h2 id="babel" tabindex="-1"><a class="header-anchor" href="#babel"><span>babel</span></a></h2><ul><li><a href="https://babeljs.io/" target="_blank" rel="noopener noreferrer">babel</a></li><li><a href="http://2ality.com/2015/12/babel6-loose-mode.html" target="_blank" rel="noopener noreferrer">es2015-loose</a></li><li><a href="https://github.com/brunoyang/blog/issues/20" target="_blank" rel="noopener noreferrer">babel全家桶</a></li><li>安装：<code>npm i -D babel-core babel-loader</code></li><li>安装：<code>npm i -D babel-preset-env</code></li></ul><h3 id="基本使用-两步" tabindex="-1"><a class="header-anchor" href="#基本使用-两步"><span>基本使用（两步）</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/* webpack.config.js */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module: {</span></span>
<span class="line"><span>  rules: [</span></span>
<span class="line"><span>    // exclude 排除，不需要编译的目录，提高编译速度</span></span>
<span class="line"><span>    {: /\\.js$/, : &#39;babel-loader&#39;, exclude: /node_modules/}</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>第二步：在项目根目录中新建<code>.babelrc</code>配置文件</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/* 创建 .babelrc 文件*/</span></span>
<span class="line"><span>// 将来babel-loader运行的时候，会检查这个配置文件，并读取相关的语法和插件配置</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;presets&quot;: [&quot;env&quot;]</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="babel的说明" tabindex="-1"><a class="header-anchor" href="#babel的说明"><span>babel的说明</span></a></h2><ul><li>babel的作用： <ul><li>1 语法转换：将新的ES语法转化为浏览器能识别的语法（babel-preset-*）</li><li>2 polyfill浏览器兼容：让低版本浏览器兼容最新版ES的API</li></ul></li></ul><h3 id="babel-preset" tabindex="-1"><a class="header-anchor" href="#babel-preset"><span>babel-preset-*</span></a></h3><blockquote><p>Babel通过语法转换器，能够支持最新版本的JavaScript语法 babel-preset-* 用来指定我们书写的是什么版本的JS代码</p></blockquote><ul><li>作用：将新的ES语法转化为浏览器能识别的ES5代码</li><li><a href="http://es6.ruanyifeng.com/#docs/intro#" target="_blank" rel="noopener noreferrer">ES6语法提案的批准流程</a><ul><li>ES2015 也就是 ES6, 下一个版本是ES7, 从 ES6 到 ES7之间经历了 5 个阶段</li><li>babel-preset-es2015 转换es6的语法</li><li>babel-preset-stage-0 转换比es6更新的语法</li></ul></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Stage 0 - Strawman（展示阶段）</span></span>
<span class="line"><span>Stage 1 - Proposal（征求意见阶段）</span></span>
<span class="line"><span>Stage 2 - Draft（草案阶段）</span></span>
<span class="line"><span>Stage 3 - Candidate（候选人阶段）</span></span>
<span class="line"><span>Stage 4 - Finished（定案阶段）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Stage 0 is &quot;i&#39;ve got a crazy idea&quot;,</span></span>
<span class="line"><span>stage 1 is &quot;this idea might not be stupid&quot;,</span></span>
<span class="line"><span>stage 2 is &quot;let&#39;s use polyfills and transpilers to play with it&quot;,</span></span>
<span class="line"><span>stage 3 is &quot;let&#39;s let browsers implement it and see how it goes&quot;,</span></span>
<span class="line"><span>stage 4 is &quot;now it&#39;s javascript&quot;.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="babel-polyfill-和-transform-runtime" tabindex="-1"><a class="header-anchor" href="#babel-polyfill-和-transform-runtime"><span>babel-polyfill 和 transform-runtime</span></a></h3><ul><li>作用：实现浏览器对不支持API的兼容（兼容旧环境、填补） <ul><li>在低版本浏览器中使用高级的ES6或ES7的方法或函数，比如：<code>&#39;abc&#39;.padStart(10)</code></li></ul></li><li><a href="https://babeljs.io/docs/usage/polyfill/#usage-in-node-browserify-webpack" target="_blank" rel="noopener noreferrer">方式一 polyfill</a></li><li><a href="https://babeljs.io/docs/plugins/transform-runtime/" target="_blank" rel="noopener noreferrer">方式二 transform-runtime</a></li><li>方式一：<code>npm i -S babel-polyfill</code></li><li>方式二：<code>npm i -D babel-plugin-transform-runtime</code> 和 <code>npm i -S babel-runtime</code><ul><li>注意：babel-runtime包中的代码会被打包到你的代码中（-S）</li></ul></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>区别：</span></span>
<span class="line"><span>polyfill 所有兼容性问题，都可以通过polyfill解决（包括：实例方法）、污染全局环境</span></span>
<span class="line"><span>runtime  除了实例方法以外，其他兼容新问题都能解决、不污染全局环境</span></span>
<span class="line"><span></span></span>
<span class="line"><span>polyfill：如果想要支持全局对象（比如：\`Promise\`）、静态方法（比如：\`Object.assign\`）或者**实例方法**（比如：\`String.prototype.padStart\`）等，那么就需要使用\`babel-polyfill\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>babel-runtime ：提供了兼容旧环境的函数，使用的时候，需要我们自己手动引入</span></span>
<span class="line"><span>  比如： const Promise = require(&#39;babel-runtime/core-js/promise&#39;)</span></span>
<span class="line"><span>  存在的问题：</span></span>
<span class="line"><span>    1 手动引入太繁琐</span></span>
<span class="line"><span>    2 多个文件引入同一个helper（定义），造成代码重复，增加代码体积</span></span>
<span class="line"><span>babel-plugin-transform-runtime：</span></span>
<span class="line"><span>    1 自动引入helper（比如，上面引入的 Promise）</span></span>
<span class="line"><span>    2 babel-runtime提供helper定义，引入这个helper即可使用，避免重复</span></span>
<span class="line"><span>    3 依赖于 babel-runtime 插件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>transform-runtime插件的使用：</span></span>
<span class="line"><span>  直接在 .bablerc 文件中，添加一个 plugins 的配置项即可！！！</span></span>
<span class="line"><span>  &quot;plugins&quot;: [</span></span>
<span class="line"><span>    &quot;transform-runtime&quot;</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span>  babel-polyfill 的使用步骤：</span></span>
<span class="line"><span>  1 main.js</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>// 第一行引入</span></span>
<span class="line"><span>require(&quot;babel-polyfill&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span> s = &#39;abc&#39;.padStart()</span></span>
<span class="line"><span>console.log(s)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 2 webpack.config.js 配置</span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  entry: [&#39;babel-polyfill&#39;, &#39;./js/main.js&#39;]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>babel-core babel核心包</span></span>
<span class="line"><span></span></span>
<span class="line"><span>babel-loader 用来解析js文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>babel-preset-* 新ES语法的解析和转换</span></span>
<span class="line"><span></span></span>
<span class="line"><span>transform-runtime / babel-polyfill 兼容旧浏览器，到达支持新API目的</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 判断浏览器是否兼容 padStart 这个 API</span></span>
<span class="line"><span>if (!String.prototype.padStart) {</span></span>
<span class="line"><span>  // 如果不兼容, 就自己模拟 padStart的功能实现一份</span></span>
<span class="line"><span>  String.prototype.padStart = function padStart(targetLength,padString) {</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue单文件组件" tabindex="-1"><a class="header-anchor" href="#vue单文件组件"><span>vue单文件组件</span></a></h2><ul><li><a href="https://vue-loader.vuejs.org/zh-cn/" target="_blank" rel="noopener noreferrer">vue-loader</a></li><li>single-file components(单文件组件)</li><li>后缀名：<code>.vue</code>，该文件需要被预编译后才能在浏览器中使用</li><li>注意：单文件组件依赖于两个包 <strong>vue-loader</strong> / <strong>vue-template-compiler</strong></li><li>安装：<code>npm i -D vue-loader vue-template-compiler</code></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!-- App.vue 示例代码： --&gt;</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;&gt;</span></span>
<span class="line"><span>    &lt;&gt;VUE 单文件组件示例 -- App.vue&lt;/&gt;</span></span>
<span class="line"><span>    &lt;&gt;这是 模板内容&lt;/&gt;</span></span>
<span class="line"><span>  &lt;/&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>  // 组件中的逻辑代码</span></span>
<span class="line"><span>  export default {}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>/* 组件样式 */</span></span>
<span class="line"><span> {</span></span>
<span class="line"><span>  color: red;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span>
<span class="line"><span>// webpack.config.js 配置：</span></span>
<span class="line"><span>module: {</span></span>
<span class="line"><span>  rules: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      : /\\.vue$/,</span></span>
<span class="line"><span>      loader: &#39;vue-loader&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用单文件组件" tabindex="-1"><a class="header-anchor" href="#使用单文件组件"><span>使用单文件组件</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/* main.js */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import Vue  &#39;vue&#39;</span></span>
<span class="line"><span>// 导入 App 组件</span></span>
<span class="line"><span>import App  &#39;./App.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const vm =  Vue({</span></span>
<span class="line"><span>  : &#39;#app&#39;,</span></span>
<span class="line"><span>  // 通过 render 方法，渲染App组件</span></span>
<span class="line"><span>  render:  =&gt; c(App)</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单文件组件使用步骤" tabindex="-1"><a class="header-anchor" href="#单文件组件使用步骤"><span>单文件组件使用步骤</span></a></h3><ul><li>1 安装：<code>npm i -D vue-loader vue-template-compiler</code></li><li>2 在 <code>webpack.config.js</code> 中配置 <code>.vue</code> 文件的loader <ul><li><code>{ test: /\\.vue$/, use: &#39;vue-loader&#39; }</code></li></ul></li><li>3 创建 <code>App.vue</code> 单文件组件，注意：App可以是任意名称</li><li>4 在 <code>main.js</code> 入口文件中，导入 <code>vue</code> 和 <code>App.vue</code>组件，通过 render 将组件与实例挂到一起</li></ul><h3 id="单文件组件-路由" tabindex="-1"><a class="header-anchor" href="#单文件组件-路由"><span>单文件组件+路由</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import Vue  &#39;vue&#39;</span></span>
<span class="line"><span>import App  &#39;./App.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// ------------- vue路由配置 开始 --------------</span></span>
<span class="line"><span>import Home  &#39;./components/home/Home.vue&#39;</span></span>
<span class="line"><span>import Login  &#39;./components/login/Login.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 1 导入 路由模块</span></span>
<span class="line"><span>import VueRouter  &#39;vue-router&#39;</span></span>
<span class="line"><span>// 2 ** 调用use方法使用插件 **</span></span>
<span class="line"><span>Vue.use(VueRouter)</span></span>
<span class="line"><span>// 3 创建路由对象</span></span>
<span class="line"><span>const router =  VueRouter({</span></span>
<span class="line"><span>  routes: [</span></span>
<span class="line"><span>    { : &#39;/home&#39;, component: Home },</span></span>
<span class="line"><span>    { : &#39;/login&#39;, component: Login }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// ------------- vue路由配置 结束 --------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const vm =  Vue({</span></span>
<span class="line"><span>  : &#39;#app&#39;,</span></span>
<span class="line"><span>  render:  =&gt; c(App),</span></span>
<span class="line"><span>  // 4 挂载到 vue 实例中</span></span>
<span class="line"><span>  router</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mint-ui" tabindex="-1"><a class="header-anchor" href="#mint-ui"><span>Mint-UI</span></a></h2><ul><li><p>基于 Vue.js 的移动端组件库</p></li><li><p><a href="http://mint-ui.github.io/#!/zh-cn" target="_blank" rel="noopener noreferrer">Mint-UI</a></p></li><li><p>安装：<code>npm i -S mint-ui</code></p></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 1 导入 mint-ui模块</span></span>
<span class="line"><span>import MintUI  &#39;mint-ui&#39;</span></span>
<span class="line"><span>// 2 导入 样式</span></span>
<span class="line"><span>import &#39;mint-ui/lib/style.css&#39;</span></span>
<span class="line"><span>// 3 注册插件</span></span>
<span class="line"><span>Vue.use(MintUI)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><a href="http://dev.dcloud.net.cn/mui/" target="_blank" rel="noopener noreferrer">MUI</a></li><li>MUI 也是移动端的UI库</li><li>使用：从github下载包，找到dist文件夹，只需要导入样式即可</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 只需要导入 MUI的样式 即可，根据MUI的例子，直接使用HTML结果即可</span></span>
<span class="line"><span>// 导入样式</span></span>
<span class="line"><span>import &#39;./lib/mui/css/mui.min.css&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="elementui" tabindex="-1"><a class="header-anchor" href="#elementui"><span>ElementUI</span></a></h2><ul><li>这是PC端的UI组件库</li><li>安装：<code>npm i -S element-ui</code></li><li><a href="http://element.eleme.io/#/zh-CN/component/quickstart" target="_blank" rel="noopener noreferrer">饿了吗 - ElementUI</a></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;presets&quot;: [</span></span>
<span class="line"><span>    [&quot;es2015&quot;, { &quot;modules&quot;: false }], &quot;stage-0&quot;</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &quot;plugins&quot;: [</span></span>
<span class="line"><span>    [&quot;component&quot;, [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        &quot;libraryName&quot;: &quot;mint-ui&quot;,</span></span>
<span class="line"><span>        &quot;style&quot;: </span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        &quot;libraryName&quot;: &quot;element-ui&quot;,</span></span>
<span class="line"><span>        &quot;styleLibraryName&quot;: &quot;theme-default&quot;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ]]</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="webpack-发布项目" tabindex="-1"><a class="header-anchor" href="#webpack-发布项目"><span>Webpack 发布项目</span></a></h2><ul><li><a href="https://dailc.github.io/2017/03/13/webpackfreshmanualAndBug.html" target="_blank" rel="noopener noreferrer">webpack 打包的各种坑</a></li><li><code>webpack</code> 命令能够生成dist目录到磁盘中，最终，把打包后的代码，部署服务器中去</li><li><code>webpack-dev-server</code> 仅是在内存中生成的文件，并没有写到磁盘中，所以，只能在开发期间使用</li></ul><h3 id="创建项目发布配置文件" tabindex="-1"><a class="header-anchor" href="#创建项目发布配置文件"><span>创建项目发布配置文件</span></a></h3><ul><li>开发期间配置文件：<code>webpack.config.js</code></li><li>项目发布配置文件：<code>webpack.prod.js</code> （文件名称非固定 production 生产环境）</li><li>命令：<code>webpack --config webpack.prod.js</code> 指定配置文件名称运行webpack</li><li>参数：<code>--display-error-details</code> 用于显示webpack打包的错误信息</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/* package.json */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;scripts&quot;: {</span></span>
<span class="line"><span>  &quot;build&quot;: &quot;webpack --config webpack.prod.js&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>1 在项目根目录中创建 webpack.prod.js 文件</span></span>
<span class="line"><span>2 在 package.json 中, 配置一个 scripts</span></span>
<span class="line"><span>3 在 终端中 通过 npm run build 对项目进行打包</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打包处理过程" tabindex="-1"><a class="header-anchor" href="#打包处理过程"><span>打包处理过程</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>1 删除掉 devServer 相关的配置项</span></span>
<span class="line"><span>2 将图片和字体文件输出到指定的文件夹中</span></span>
<span class="line"><span>3 自动删除dist目录</span></span>
<span class="line"><span>4 分离第三方包（将使用的vue等第三方包抽离到 vender.js 中）</span></span>
<span class="line"><span>5 压缩混淆JS 以及 指定生成环境</span></span>
<span class="line"><span>6 抽取和压缩CSS文件</span></span>
<span class="line"><span>7 压缩HTML页面</span></span>
<span class="line"><span>8 配合vue的异步组件，实现按需加载功能</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="处理图片路径" tabindex="-1"><a class="header-anchor" href="#处理图片路径"><span>处理图片路径</span></a></h3><ul><li>注意：如果<code>limit</code>小于比图片大，那么图片将被转化为<code>base64</code>编码格式</li><li><a href="https://github.com/webpack-contrib/file-loader" target="_blank" rel="noopener noreferrer">name参数介绍</a></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/* webpack.prod.js */</span></span>
<span class="line"><span>// 处理URL路径的loader</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  : /\\.(jpg|png|gif|bmp|jpeg)$/,</span></span>
<span class="line"><span>  : {</span></span>
<span class="line"><span>    loader: &#39;url-loader&#39;,</span></span>
<span class="line"><span>    options: {</span></span>
<span class="line"><span>      limit: ,</span></span>
<span class="line"><span>      : &#39;images/[hash:7].[ext]&#39; // 作用：将图片输出到images文件夹中，文件名采用7位的哈希值（MD5），并且保持原来的图片文件扩展名</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      // name：指定文件输出路径和输出文件命令规则</span></span>
<span class="line"><span>      // [hash:7]：表示使用7位哈希值代表文件名称</span></span>
<span class="line"><span>      // [ext]：表示保持文件原有后缀名</span></span>
<span class="line"><span>      // name: &#39;imgs/img-[hash:7].[ext]&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>},</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自动删除dist目录" tabindex="-1"><a class="header-anchor" href="#自动删除dist目录"><span>自动删除dist目录</span></a></h3><ul><li>安装：<code>npm i -D clean-webpack-plugin</code></li><li>作用: 每次打包之前, 删除上一次打包的dist目录</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/* webpack.prod.js */</span></span>
<span class="line"><span>const cleanWebpackPlugin = require(&#39;clean-webpack-plugin&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>plugins: [</span></span>
<span class="line"><span>  // 创建一个删除文件夹的插件，删除dist目录</span></span>
<span class="line"><span>   cleanWebpackPlugin([&#39;./dist&#39;])</span></span>
<span class="line"><span>]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分离第三方包" tabindex="-1"><a class="header-anchor" href="#分离第三方包"><span>分离第三方包</span></a></h3><ul><li>目的：将公共的第三方包，抽离为一个单独的包文件，这样防止重复打包！ <ul><li>例如：main.js、router、vuex中都引入了vue，不分离的话，vue会被打包3次</li><li>抽离后, vue文件只会被打包一次, 用到的地方仅仅是引用</li></ul></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/* webpack.prod.js */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 1 入口 -- 打包文件的入口</span></span>
<span class="line"><span>entry: {</span></span>
<span class="line"><span>  // 项目代码入口</span></span>
<span class="line"><span>  app: path.join(__dirname, &#39;./src/js/main.js&#39;),</span></span>
<span class="line"><span>  // 第三方包入口</span></span>
<span class="line"><span>  vendor: [&#39;vue&#39;, &#39;vue-router&#39;, &#39;axios&#39;]</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span></span></span>
<span class="line"><span>output: {</span></span>
<span class="line"><span>  // 2 修改输出文件路径和命名规则</span></span>
<span class="line"><span>  filename: &#39;js/[name].[chunkhash].js&#39;,</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span></span></span>
<span class="line"><span>plugins: [</span></span>
<span class="line"><span>  // 3 抽离第三方包</span></span>
<span class="line"><span>   webpack.optimize.CommonsChunkPlugin({</span></span>
<span class="line"><span>    // 将 entry 中指定的 [&#39;vue&#39;, &#39;vue-router&#39;, &#39;axios&#39;] 打包到名为 vendor 的js文件中</span></span>
<span class="line"><span>    // 第三方包入口名称，对应 entry 中的 vendor 属性</span></span>
<span class="line"><span>    name: &#39;vendor&#39;,</span></span>
<span class="line"><span>  }),</span></span>
<span class="line"><span>]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="压缩混淆js" tabindex="-1"><a class="header-anchor" href="#压缩混淆js"><span>压缩混淆JS</span></a></h3><ul><li>注意：<strong>uglifyjs 无法压缩ES6的代码</strong></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>plugins: [</span></span>
<span class="line"><span>  // 优化代码</span></span>
<span class="line"><span>  // https://github.com/webpack-contrib/uglifyjs-webpack-plugin/tree/v0.4.6</span></span>
<span class="line"><span>   webpack.optimize.UglifyJsPlugin({</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    compress: {</span></span>
<span class="line"><span>      // 移除警告</span></span>
<span class="line"><span>      warnings: false</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }),</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 指定环境为生产环境：vue会根据这一项启用压缩后的vue文件</span></span>
<span class="line"><span>   webpack.DefinePlugin({</span></span>
<span class="line"><span>    &#39;process.env&#39;: {</span></span>
<span class="line"><span>      &#39;NODE_ENV&#39;: .stringify(&#39;production&#39;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="抽取和压缩css文件" tabindex="-1"><a class="header-anchor" href="#抽取和压缩css文件"><span>抽取和压缩CSS文件</span></a></h3><ul><li>安装：抽离 <code>npm i -D extract-text-webpack-plugin</code></li><li>安装：压缩 <code>npm i -D optimize-css-assets-webpack-plugin</code></li><li><a href="https://doc.webpack-china.org/plugins/extract-text-webpack-plugin/" target="_blank" rel="noopener noreferrer">webpack 抽离CSS文档</a></li><li><a href="https://www.npmjs.com/package/optimize-css-assets-webpack-plugin" target="_blank" rel="noopener noreferrer">压缩抽离后的CSS</a></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>压缩和抽离CSS报错的说明：</span></span>
<span class="line"><span>Error processing file: css/style.css</span></span>
<span class="line"><span>postcss-svgo: Error in parsing SVG: Unquoted attribute value</span></span>
<span class="line"><span></span></span>
<span class="line"><span>原因：压缩和抽离CSS的插件中只允许 SVG 使用双引号</span></span>
<span class="line"><span>/* webpack.prod.js */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 分离 css 到独立的文件中</span></span>
<span class="line"><span>const ExtractTextPlugin = require(&quot;extract-text-webpack-plugin&quot;);</span></span>
<span class="line"><span>// 压缩 css 资源文件</span></span>
<span class="line"><span>const OptimizeCssAssetsPlugin = require(&#39;optimize-css-assets-webpack-plugin&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// bug描述: 生成后面的css文件中图片路径错误，打开页面找不到图片</span></span>
<span class="line"><span>// 解决：google搜索 webpack css loader 样式图片路径</span></span>
<span class="line"><span>output: {</span></span>
<span class="line"><span>  // ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // https://doc.webpack-china.org/configuration/output/#output-publicpath</span></span>
<span class="line"><span>  // 设置公共路径</span></span>
<span class="line"><span>  publicPath: ,</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module: {</span></span>
<span class="line"><span>  rules: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      : /\\.css$/,</span></span>
<span class="line"><span>      : ExtractTextPlugin.extract({</span></span>
<span class="line"><span>        fallback: &quot;style-loader&quot;,</span></span>
<span class="line"><span>        : &quot;css-loader&quot;</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      : /\\.scss$/,</span></span>
<span class="line"><span>      : ExtractTextPlugin.extract({</span></span>
<span class="line"><span>        fallback: &quot;style-loader&quot;,</span></span>
<span class="line"><span>        : [&#39;css-loader&#39;, &#39;sass-loader&#39;]</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>plugins: [</span></span>
<span class="line"><span>  // 通过插件抽离 css (参数)</span></span>
<span class="line"><span>   ExtractTextPlugin(&quot;css/style.css&quot;),</span></span>
<span class="line"><span>  // 抽离css 的辅助压缩插件</span></span>
<span class="line"><span>   OptimizeCssAssetsPlugin()</span></span>
<span class="line"><span>]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="压缩html页面" tabindex="-1"><a class="header-anchor" href="#压缩html页面"><span>压缩HTML页面</span></a></h3><ul><li>详细的配置可以参考<a href="https://github.com/kangax/html-minifier#options-quick-reference" target="_blank" rel="noopener noreferrer">html-minifier</a></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> htmlWebpackPlugin({</span></span>
<span class="line"><span>  // 模板页面</span></span>
<span class="line"><span>  template: path.join(__dirname, &#39;./index.html&#39;),</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 压缩HTML</span></span>
<span class="line"><span>  minify: {</span></span>
<span class="line"><span>    // 移除空白</span></span>
<span class="line"><span>    collapseWhitespace: ,</span></span>
<span class="line"><span>    // 移除注释</span></span>
<span class="line"><span>    removeComments: ,</span></span>
<span class="line"><span>    // 移除属性中的双引号</span></span>
<span class="line"><span>    removeAttributeQuotes: </span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}),</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue配合webpack实现路由按需加载" tabindex="-1"><a class="header-anchor" href="#vue配合webpack实现路由按需加载"><span>vue配合webpack实现路由按需加载</span></a></h3><ul><li>1 修改组件的引用方式</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 方式一: require.ensure()</span></span>
<span class="line"><span>const NewsList =  =&gt; require.ensure([], () =&gt; r(require(&#39;../components/news/newslist.vue&#39;)), &#39;news&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 方式二: import() -- 推荐</span></span>
<span class="line"><span>// 注意：/* webpackChunkName: &quot;newsinfo&quot; */ 是一个特殊的语法，表示生成js文件的名称</span></span>
<span class="line"><span>const NewsInfo =  =&gt; import(/* webpackChunkName: &quot;newsinfo&quot; */ &#39;../components/news/newsinfo.vue&#39;)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>2 修改 webpack 配置文件的output</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>output: {</span></span>
<span class="line"><span>  // ------添加 chunkFilename, 指定输出js文件的名称------</span></span>
<span class="line"><span>  chunkFilename: &#39;js/[name].[chunkhash].js&#39;,</span></span>
<span class="line"><span>},</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Measure</p><p>Measure</p>`,151))])}const b=l(t,[["render",v]]),m=JSON.parse(`{"path":"/pages/133172/","title":"VUE开发基本概念","lang":"zh-CN","frontmatter":{"title":"VUE开发基本概念","date":"2024-01-24T23:08:34.000Z","permalink":"/pages/133172/","categories":["vue知识总结","vue3项目问题解决"],"tags":[],"author":{"name":"aXing","link":"https://github.com/08163356"},"description":"Vue -渐进式JavaScript框架 vue 中文网 vue github Vue.js 是一套构建用户界面(UI)的渐进式JavaScript框架 http://www.cnblogs.com/nzbin/p/6363827.html 库和框架的区别 我们所说的前端框架与库的区别？ Library 库，本质上是一些函数的集合。每次调用函数，实现一...","head":[["meta",{"property":"og:url","content":"https://blog.axingit.top/pages/133172/"}],["meta",{"property":"og:site_name","content":"aXing's blog"}],["meta",{"property":"og:title","content":"VUE开发基本概念"}],["meta",{"property":"og:description","content":"Vue -渐进式JavaScript框架 vue 中文网 vue github Vue.js 是一套构建用户界面(UI)的渐进式JavaScript框架 http://www.cnblogs.com/nzbin/p/6363827.html 库和框架的区别 我们所说的前端框架与库的区别？ Library 库，本质上是一些函数的集合。每次调用函数，实现一..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"aXing"}],["meta",{"property":"article:published_time","content":"2024-01-24T23:08:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"VUE开发基本概念\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-24T23:08:34.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"aXing\\",\\"link\\":\\"https://github.com/08163356\\"}]}"]]},"headers":[{"level":2,"title":"库和框架的区别","slug":"库和框架的区别","link":"#库和框架的区别","children":[{"level":3,"title":"Library","slug":"library","link":"#library","children":[]},{"level":3,"title":"Framework","slug":"framework","link":"#framework","children":[]}]},{"level":2,"title":"MVVM的介绍","slug":"mvvm的介绍","link":"#mvvm的介绍","children":[{"level":3,"title":"MVVM组成","slug":"mvvm组成","link":"#mvvm组成","children":[]},{"level":3,"title":"Vue中的MVVM","slug":"vue中的mvvm","link":"#vue中的mvvm","children":[]},{"level":3,"title":"学习Vue要转化思想","slug":"学习vue要转化思想","link":"#学习vue要转化思想","children":[]}]},{"level":2,"title":"起步 - Hello Vue","slug":"起步-hello-vue","link":"#起步-hello-vue","children":[{"level":3,"title":"Vue实例","slug":"vue实例","link":"#vue实例","children":[]}]},{"level":2,"title":"双向数据绑定 Vue two way data binding","slug":"双向数据绑定-vue-two-way-data-binding","link":"#双向数据绑定-vue-two-way-data-binding","children":[{"level":3,"title":"Vue双向绑定的极简实现","slug":"vue双向绑定的极简实现","link":"#vue双向绑定的极简实现","children":[]},{"level":3,"title":"动态添加数据的注意点","slug":"动态添加数据的注意点","link":"#动态添加数据的注意点","children":[]},{"level":3,"title":"异步DOM更新","slug":"异步dom更新","link":"#异步dom更新","children":[]},{"level":3,"title":"v-text","slug":"v-text","link":"#v-text","children":[]},{"level":3,"title":"v-html","slug":"v-html","link":"#v-html","children":[]},{"level":3,"title":"v-bind","slug":"v-bind","link":"#v-bind","children":[]},{"level":3,"title":"事件修饰符","slug":"事件修饰符","link":"#事件修饰符","children":[]},{"level":3,"title":"v-model","slug":"v-model","link":"#v-model","children":[]},{"level":3,"title":"v-for","slug":"v-for","link":"#v-for","children":[]},{"level":3,"title":"key属性","slug":"key属性","link":"#key属性","children":[]}]},{"level":2,"title":"样式处理 -class和style","slug":"样式处理-class和style","link":"#样式处理-class和style","children":[{"level":3,"title":"v-if 和 v-show","slug":"v-if-和-v-show","link":"#v-if-和-v-show","children":[]},{"level":3,"title":"提升性能：v-pre","slug":"提升性能-v-pre","link":"#提升性能-v-pre","children":[]},{"level":3,"title":"提升性能：v-once","slug":"提升性能-v-once","link":"#提升性能-v-once","children":[]}]},{"level":2,"title":"过滤器 filter","slug":"过滤器-filter","link":"#过滤器-filter","children":[{"level":3,"title":"全局过滤器","slug":"全局过滤器","link":"#全局过滤器","children":[]},{"level":3,"title":"局部过滤器","slug":"局部过滤器","link":"#局部过滤器","children":[]}]},{"level":2,"title":"按键值修饰符","slug":"按键值修饰符","link":"#按键值修饰符","children":[]},{"level":2,"title":"监视数据变化 - watch","slug":"监视数据变化-watch","link":"#监视数据变化-watch","children":[]},{"level":2,"title":"实例生命周期","slug":"实例生命周期","link":"#实例生命周期","children":[{"level":3,"title":"生命周期介绍","slug":"生命周期介绍","link":"#生命周期介绍","children":[]},{"level":3,"title":"钩子函数 - beforeCreate()","slug":"钩子函数-beforecreate","link":"#钩子函数-beforecreate","children":[]},{"level":3,"title":"钩子函数 - created()","slug":"钩子函数-created","link":"#钩子函数-created","children":[]},{"level":3,"title":"钩子函数 - beforeMounted()","slug":"钩子函数-beforemounted","link":"#钩子函数-beforemounted","children":[]},{"level":3,"title":"钩子函数 - mounted()","slug":"钩子函数-mounted","link":"#钩子函数-mounted","children":[]},{"level":3,"title":"钩子函数 - beforeUpdated()","slug":"钩子函数-beforeupdated","link":"#钩子函数-beforeupdated","children":[]},{"level":3,"title":"钩子函数 - updated()","slug":"钩子函数-updated","link":"#钩子函数-updated","children":[]},{"level":3,"title":"钩子函数 - beforeDestroy()","slug":"钩子函数-beforedestroy","link":"#钩子函数-beforedestroy","children":[]},{"level":3,"title":"钩子函数 - destroyed()","slug":"钩子函数-destroyed","link":"#钩子函数-destroyed","children":[]}]},{"level":2,"title":"axios","slug":"axios","link":"#axios","children":[{"level":3,"title":"Get 请求","slug":"get-请求","link":"#get-请求","children":[]},{"level":3,"title":"Post 请求","slug":"post-请求","link":"#post-请求","children":[]}]},{"level":2,"title":"自定义指令","slug":"自定义指令","link":"#自定义指令","children":[{"level":3,"title":"全局自定义指令","slug":"全局自定义指令","link":"#全局自定义指令","children":[]},{"level":3,"title":"局部自定义指令","slug":"局部自定义指令","link":"#局部自定义指令","children":[]},{"level":3,"title":"父组件到子组件","slug":"父组件到子组件","link":"#父组件到子组件","children":[]},{"level":3,"title":"子组件到父组件","slug":"子组件到父组件","link":"#子组件到父组件","children":[]},{"level":3,"title":"非父子组件通讯","slug":"非父子组件通讯","link":"#非父子组件通讯","children":[]},{"level":3,"title":"获取组件（或元素） - refs","slug":"获取组件-或元素-refs","link":"#获取组件-或元素-refs","children":[]}]},{"level":2,"title":"SPA -单页应用程序","slug":"spa-单页应用程序","link":"#spa-单页应用程序","children":[{"level":3,"title":"SPA： Single Page Application","slug":"spa-single-page-application","link":"#spa-single-page-application","children":[{"level":4,"title":"路由其他配置","slug":"路由其他配置","link":"#路由其他配置","children":[]},{"level":4,"title":"嵌套路由 - 子路由","slug":"嵌套路由-子路由","link":"#嵌套路由-子路由","children":[]}]}]},{"level":2,"title":"前端模块化","slug":"前端模块化","link":"#前端模块化","children":[{"level":3,"title":"模块的概念","slug":"模块的概念","link":"#模块的概念","children":[]},{"level":3,"title":"模块化解决的问题","slug":"模块化解决的问题","link":"#模块化解决的问题","children":[]},{"level":3,"title":"JS实现模块化的规范","slug":"js实现模块化的规范","link":"#js实现模块化的规范","children":[]}]},{"level":2,"title":"Webpack","slug":"webpack","link":"#webpack","children":[{"level":3,"title":"webpack起源","slug":"webpack起源","link":"#webpack起源","children":[]},{"level":3,"title":"webpack与模块","slug":"webpack与模块","link":"#webpack与模块","children":[]},{"level":3,"title":"webpack文档和资源","slug":"webpack文档和资源","link":"#webpack文档和资源","children":[]}]},{"level":2,"title":"安装webpack","slug":"安装webpack","link":"#安装webpack","children":[]},{"level":2,"title":"webpack的基本使用","slug":"webpack的基本使用","link":"#webpack的基本使用","children":[{"level":3,"title":"命令行方式演示 - 案例：隔行变色","slug":"命令行方式演示-案例-隔行变色","link":"#命令行方式演示-案例-隔行变色","children":[]}]},{"level":2,"title":"webpack-dev-server 配置","slug":"webpack-dev-server-配置","link":"#webpack-dev-server-配置","children":[{"level":3,"title":"一、package.json配置方式","slug":"一、package-json配置方式","link":"#一、package-json配置方式","children":[]},{"level":3,"title":"二、webpack.config.js 配置方式(推荐)","slug":"二、webpack-config-js-配置方式-推荐","link":"#二、webpack-config-js-配置方式-推荐","children":[]},{"level":3,"title":"Loaders（加载器）","slug":"loaders-加载器","link":"#loaders-加载器","children":[{"level":4,"title":"图片打包细节","slug":"图片打包细节","link":"#图片打包细节","children":[]}]},{"level":3,"title":"字体文件打包说明","slug":"字体文件打包说明","link":"#字体文件打包说明","children":[]}]},{"level":2,"title":"babel","slug":"babel","link":"#babel","children":[{"level":3,"title":"基本使用（两步）","slug":"基本使用-两步","link":"#基本使用-两步","children":[]}]},{"level":2,"title":"babel的说明","slug":"babel的说明","link":"#babel的说明","children":[{"level":3,"title":"babel-preset-*","slug":"babel-preset","link":"#babel-preset","children":[]},{"level":3,"title":"babel-polyfill 和 transform-runtime","slug":"babel-polyfill-和-transform-runtime","link":"#babel-polyfill-和-transform-runtime","children":[]}]},{"level":2,"title":"vue单文件组件","slug":"vue单文件组件","link":"#vue单文件组件","children":[{"level":3,"title":"使用单文件组件","slug":"使用单文件组件","link":"#使用单文件组件","children":[]},{"level":3,"title":"单文件组件使用步骤","slug":"单文件组件使用步骤","link":"#单文件组件使用步骤","children":[]},{"level":3,"title":"单文件组件+路由","slug":"单文件组件-路由","link":"#单文件组件-路由","children":[]}]},{"level":2,"title":"Mint-UI","slug":"mint-ui","link":"#mint-ui","children":[]},{"level":2,"title":"ElementUI","slug":"elementui","link":"#elementui","children":[]},{"level":2,"title":"Webpack 发布项目","slug":"webpack-发布项目","link":"#webpack-发布项目","children":[{"level":3,"title":"创建项目发布配置文件","slug":"创建项目发布配置文件","link":"#创建项目发布配置文件","children":[]},{"level":3,"title":"打包处理过程","slug":"打包处理过程","link":"#打包处理过程","children":[]},{"level":3,"title":"处理图片路径","slug":"处理图片路径","link":"#处理图片路径","children":[]},{"level":3,"title":"自动删除dist目录","slug":"自动删除dist目录","link":"#自动删除dist目录","children":[]},{"level":3,"title":"分离第三方包","slug":"分离第三方包","link":"#分离第三方包","children":[]},{"level":3,"title":"压缩混淆JS","slug":"压缩混淆js","link":"#压缩混淆js","children":[]},{"level":3,"title":"抽取和压缩CSS文件","slug":"抽取和压缩css文件","link":"#抽取和压缩css文件","children":[]},{"level":3,"title":"压缩HTML页面","slug":"压缩html页面","link":"#压缩html页面","children":[]},{"level":3,"title":"vue配合webpack实现路由按需加载","slug":"vue配合webpack实现路由按需加载","link":"#vue配合webpack实现路由按需加载","children":[]}]}],"git":{},"readingTime":{"minutes":40.62,"words":12186},"filePathRelative":"16.vue知识总结/2.vue3项目问题解决/36.VUE开发基本概念.md","localizedDate":"2024年1月25日","autoDesc":true}`);export{b as comp,m as data};
