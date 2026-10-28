import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as i,o as e}from"./app-BBpi8vMY.js";const l={};function p(t,n){return e(),a("div",null,[...n[0]||(n[0]=[i(`<p><code>call</code>, <code>apply</code>, 和 <code>bind</code> 是 <code>JavaScript</code> 中常用的函数。它们的作用是在<code>函数调用时动态地改变函数的上下文</code>。具体来说，它们可以指定函数中的 <code>this</code> 指向哪个对象，以及传递参数给函数。</p><h2 id="call和apply" tabindex="-1"><a class="header-anchor" href="#call和apply"><span>call和apply</span></a></h2><p>其中call和apply是类似的，call访问的传递的参数是一个对象，而apply传递的参数是一个数组。</p><h3 id="call的应用实例" tabindex="-1"><a class="header-anchor" href="#call的应用实例"><span>call的应用实例：</span></a></h3><p>函数：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>fn.call(ctx, arg1, arg2, ...)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>例子</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const obj = {</span></span>
<span class="line"><span>name: &quot;test&quot;</span></span>
<span class="line"><span>fn: function(){</span></span>
<span class="line"><span>console.log(&quot;this is a &quot;, this.name)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>obj.fn() //输出&quot;this is a test&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const test2 = { name: &quot;test2&quot; }</span></span>
<span class="line"><span>obj.fn.call(test2) // 输出&quot;this is a test2&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bind的应用实例" tabindex="-1"><a class="header-anchor" href="#bind的应用实例"><span>bind的应用实例</span></a></h3><p>函数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>function.apply(context, [argsArray])</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>例子</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const obj = {</span></span>
<span class="line"><span>name: &quot;test&quot;</span></span>
<span class="line"><span>fn: function(arg1, arg2){</span></span>
<span class="line"><span>console.log(\`this is a \${this.name}, and this prams is \${arg1} and \${arg2}\`);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>obj.fn(&quot;test11&quot;, &quot;test12&quot;) //输出&quot;this is a test, and this prams is test11 and test12&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const test2 = { name: &quot;test2&quot; }</span></span>
<span class="line"><span>obj.fn.apply(test2, [&quot;test22&quot;,&quot;test23&quot;]) // 输出&quot;this is a test2, and this prams is test22 and test23&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bind" tabindex="-1"><a class="header-anchor" href="#bind"><span>bind</span></a></h2><p>bind<code>函数与</code>call<code>和</code>apply<code> 函数不同，它不会立即调用函数。相反，它</code>返回一个新函数\`，该函数将绑定到指定的上下文，当该函数被调用时，它将以指定的上下文运行。它的语法如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>function.bind(ctx, arg1, arg2, ...)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>实例：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const obj = {</span></span>
<span class="line"><span>name: &quot;test&quot;</span></span>
<span class="line"><span>fn: function(arg1, arg2){</span></span>
<span class="line"><span>console.log(\`this is a \${this.name}, and this prams is \${arg1} and \${arg2}\`);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const test2 = { name: &quot;test2&quot; }</span></span>
<span class="line"><span>const bindFn = obj.fn.bind(test2, &quot;test22&quot;)</span></span>
<span class="line"><span>bindFn(&quot;testBind&quot;)</span></span>
<span class="line"><span>// 输出&quot;this is a test2, and this prams is test22 and testBind&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现"><span>实现</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 实现 call 方法</span></span>
<span class="line"><span>Function.prototype.myCall = function (context, ...args) {</span></span>
<span class="line"><span>  // 如果 context 参数为空，则默认为 window 对象</span></span>
<span class="line"><span>  context = context || window;</span></span>
<span class="line"><span>  // 使用 Symbol 函数创建一个唯一的标识符</span></span>
<span class="line"><span>  const fnSymbol = Symbol();</span></span>
<span class="line"><span>  // 将原始函数存储为 context 对象的属性</span></span>
<span class="line"><span>  context[fnSymbol] = this;</span></span>
<span class="line"><span>  // 调用函数并将结果存储在 result 变量中</span></span>
<span class="line"><span>  const result = context[fnSymbol](...args);</span></span>
<span class="line"><span>  // 删除 context 对象的属性</span></span>
<span class="line"><span>  delete context[fnSymbol];</span></span>
<span class="line"><span>  // 返回函数的结果</span></span>
<span class="line"><span>  return result;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 实现 apply 方法</span></span>
<span class="line"><span>Function.prototype.myApply = function (context, args) {</span></span>
<span class="line"><span>  // 如果 context 参数为空，则默认为 window 对象</span></span>
<span class="line"><span>  context = context || window;</span></span>
<span class="line"><span>  // 使用 Symbol 函数创建一个唯一的标识符</span></span>
<span class="line"><span>  const fnSymbol = Symbol();</span></span>
<span class="line"><span>  // 将原始函数存储为 context 对象的属性</span></span>
<span class="line"><span>  context[fnSymbol] = this;</span></span>
<span class="line"><span>  // 调用函数并将结果存储在 result 变量中</span></span>
<span class="line"><span>  const result = context[fnSymbol](...args);</span></span>
<span class="line"><span>  // 删除 context 对象的属性</span></span>
<span class="line"><span>  delete context[fnSymbol];</span></span>
<span class="line"><span>  // 返回函数的结果</span></span>
<span class="line"><span>  return result;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 实现 bind 方法</span></span>
<span class="line"><span>Function.prototype.myBind = function (context, ...args) {</span></span>
<span class="line"><span>  // 将 this 存储在 fn 变量中</span></span>
<span class="line"><span>  const fn = this;</span></span>
<span class="line"><span>  // 返回一个新的函数，该函数将传入的参数与新函数的参数合并，并在新的上下文中使用 apply 调用原始函数</span></span>
<span class="line"><span>  return function (...newArgs) {</span></span>
<span class="line"><span>    return fn.apply(context, [...args, ...newArgs]);</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面对其中一个函数进行详细的分析：</p><p>函数：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Function.prototype.myCall = function (context, ...args) {</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  context = context || window;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  const fnSymbol = Symbol();</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  context[fnSymbol] = this;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  const result = context[fnSymbol](...args);</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  delete context[fnSymbol];</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  return result;</span></span>
<span class="line"><span>};}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分析</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>这是一个自定义的 JavaScript 函数 myCall，它被添加到 Function.prototype 上，以便能够在任何函数对象上调用。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>该函数的作用是模拟实现 Function.prototype.call 方法，用于在指定的上下文（context）中调用函数，并传递参数（args）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>下面是对该函数的解释：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>context = context || window;：这行代码用于设置默认的上下文对象，如果没有传入上下文对象，则默认为全局对象 window。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const fnSymbol = Symbol();：这行代码创建了一个唯一的 Symbol 作为临时属性名，用于在上下文对象中存储需要调用的函数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>context[fnSymbol] = this;：这行代码将当前函数对象（调用 myCall 的函数）赋值给上下文对象的临时属性，以便稍后调用。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const result = context[fnSymbol](...args);：这行代码通过上下文对象的临时属性，调用存储的函数，并传递参数。结果将被保存在 result 变量中。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>delete context[fnSymbol];：这行代码删除上下文对象的临时属性，以清理不再需要的临时数据。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return result;：这行代码返回调用函数后的结果。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="面试回答" tabindex="-1"><a class="header-anchor" href="#面试回答"><span>面试回答</span></a></h2><p>通常虽然是三个函数，但分为两类，call和apply是及时调用，而bind是返回一个函数，call和apply的区别在于call的参数是一个对象而bind的参数是一个数组，bind是返回一个函数等到调用的时候再执行。这三者的实现思路有点类似于装饰器模式，动态的给函数添加功能，而这三个函数是动态的调用函数上下文内容。</p>`,27)])])}const r=s(l,[["render",p]]),o=JSON.parse(`{"path":"/pages/27e8ef/","title":"bind和apply","lang":"zh-CN","frontmatter":{"title":"bind和apply","date":"2024-02-29T23:08:35.000Z","permalink":"/pages/27e8ef/","categories":["前端三件套","js"],"tags":[],"author":{"name":"aXing","link":"https://github.com/08163356"},"description":"call, apply, 和 bind 是 JavaScript 中常用的函数。它们的作用是在函数调用时动态地改变函数的上下文。具体来说，它们可以指定函数中的 this 指向哪个对象，以及传递参数给函数。 call和apply 其中call和apply是类似的，call访问的传递的参数是一个对象，而apply传递的参数是一个数组。 call的应用实例：...","head":[["meta",{"property":"og:url","content":"https://blog.axingit.top/pages/27e8ef/"}],["meta",{"property":"og:site_name","content":"aXing's blog"}],["meta",{"property":"og:title","content":"bind和apply"}],["meta",{"property":"og:description","content":"call, apply, 和 bind 是 JavaScript 中常用的函数。它们的作用是在函数调用时动态地改变函数的上下文。具体来说，它们可以指定函数中的 this 指向哪个对象，以及传递参数给函数。 call和apply 其中call和apply是类似的，call访问的传递的参数是一个对象，而apply传递的参数是一个数组。 call的应用实例：..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"aXing"}],["meta",{"property":"article:published_time","content":"2024-02-29T23:08:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"bind和apply\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-29T23:08:35.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"aXing\\",\\"link\\":\\"https://github.com/08163356\\"}]}"]]},"headers":[{"level":2,"title":"call和apply","slug":"call和apply","link":"#call和apply","children":[{"level":3,"title":"call的应用实例：","slug":"call的应用实例","link":"#call的应用实例","children":[]},{"level":3,"title":"bind的应用实例","slug":"bind的应用实例","link":"#bind的应用实例","children":[]}]},{"level":2,"title":"bind","slug":"bind","link":"#bind","children":[]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]},{"level":2,"title":"面试回答","slug":"面试回答","link":"#面试回答","children":[]}],"git":{},"readingTime":{"minutes":3.74,"words":1122},"filePathRelative":"14.前端三件套/3.js/3.bind和apply.md","localizedDate":"2024年3月1日","autoDesc":true}`);export{r as comp,o as data};
