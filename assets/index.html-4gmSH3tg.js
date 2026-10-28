import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as i,o as e}from"./app-BBpi8vMY.js";const l={};function p(c,n){return e(),a("div",null,[...n[0]||(n[0]=[i(`<p>js中如何创建对象池重复利用对象</p><p>在JavaScript中，可以使用对象池来重复利用对象，从而减少创建和销毁对象的次数，提高性能。对象池是一个存储对象的容器，当需要使用对象时，可以从对象池中取出一个对象，使用完毕后再将其放回对象池中，以便下次重复利用。 以下是一个简单的对象池实现示例：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>​\`\`\`javascript</span></span>
<span class="line"><span>function ObjectPool(createObjectFn) {</span></span>
<span class="line"><span>var pool = [];</span></span>
<span class="line"><span>return {</span></span>
<span class="line"><span>get: function() {</span></span>
<span class="line"><span>if (pool.length &gt; 0) {</span></span>
<span class="line"><span>return pool.shift();</span></span>
<span class="line"><span>&lt;!-- more --&gt;</span></span>
<span class="line"><span>} else {</span></span>
<span class="line"><span>return createObjectFn();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>put: function(obj) {</span></span>
<span class="line"><span>pool.push(obj);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>使用该对象池可以这样实现：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>​\`\`\`javascript</span></span>
<span class="line"><span>// 定义一个对象类</span></span>
<span class="line"><span>function MyObject() {</span></span>
<span class="line"><span>// ...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建对象池</span></span>
<span class="line"><span>var pool = ObjectPool(function() {</span></span>
<span class="line"><span>return new MyObject();</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 从对象池中获取对象</span></span>
<span class="line"><span>var obj1 = pool.get();</span></span>
<span class="line"><span>var obj2 = pool.get();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用对象</span></span>
<span class="line"><span>// ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 将对象放回对象池中</span></span>
<span class="line"><span>pool.put(obj1);</span></span>
<span class="line"><span>pool.put(obj2);</span></span>
<span class="line"><span>​\`\`\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在Canvas中，可以使用对象池来重复利用对象，从而减少创建和销毁对象的次数，提高性能。下面是一个使用对象池实现Canvas中对象重用的示例代码：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>javascript</span></span>
<span class="line"><span>// 定义一个圆形对象类</span></span>
<span class="line"><span>function Circle(x, y, radius) {</span></span>
<span class="line"><span>this.x = x;</span></span>
<span class="line"><span>this.y = y;</span></span>
<span class="line"><span>this.radius = radius;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 定义一个圆形对象池</span></span>
<span class="line"><span>var circlePool = {</span></span>
<span class="line"><span>pool: [],</span></span>
<span class="line"><span>get: function(x, y, radius) {</span></span>
<span class="line"><span>if (this.pool.length &gt; 0) {</span></span>
<span class="line"><span>var circle = this.pool.pop();</span></span>
<span class="line"><span>circle.x = x;</span></span>
<span class="line"><span>circle.y = y;</span></span>
<span class="line"><span>circle.radius = radius;</span></span>
<span class="line"><span>return circle;</span></span>
<span class="line"><span>} else {</span></span>
<span class="line"><span>return new Circle(x, y, radius);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>put: function(circle) {</span></span>
<span class="line"><span>this.pool.push(circle);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 绘制圆形</span></span>
<span class="line"><span>function drawCircle(ctx, x, y, radius) {</span></span>
<span class="line"><span>var circle = circlePool.get(x, y, radius);</span></span>
<span class="line"><span>ctx.beginPath();</span></span>
<span class="line"><span>ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);</span></span>
<span class="line"><span>ctx.fill();</span></span>
<span class="line"><span>circlePool.put(circle);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用示例</span></span>
<span class="line"><span>var canvas = document.getElementById(&#39;myCanvas&#39;);</span></span>
<span class="line"><span>var ctx = canvas.getContext(&#39;2d&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>drawCircle(ctx, 50, 50, 20);</span></span>
<span class="line"><span>drawCircle(ctx, 100, 100, 30);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，定义了一个圆形对象类<code>Circle</code>，并创建了一个圆形对象池<code>circlePool</code>。在绘制圆形时，通过调用<code>circlePool.get()</code>方法从对象池中获取一个圆形对象，使用完毕后再通过<code>circlePool.put()</code>方法将其放回对象池中，以便下次重复利用。通过使用对象池，可以减少创建和销毁圆形对象的次数，提高性能。 需要注意的是，在实际应用中，需要根据具体情况来优化对象池的实现，例如限制对象池的大小、调整对象池中对象的生命周期等。同时，在使用对象池时，需要确保每次从对象池中取出的对象都是一个新的状态，以避免出现意外的错误。</p>`,6)])])}const v=s(l,[["render",p]]),t=JSON.parse(`{"path":"/pages/84c419/","title":"JS使用对象池实现对象重用","lang":"zh-CN","frontmatter":{"title":"JS使用对象池实现对象重用","date":"2024-01-29T04:27:18.000Z","permalink":"/pages/84c419/","categories":["前端知识汇总","浏览器知识"],"tags":[],"author":{"name":"aXing","link":"https://github.com/08163356"},"description":"js中如何创建对象池重复利用对象 在JavaScript中，可以使用对象池来重复利用对象，从而减少创建和销毁对象的次数，提高性能。对象池是一个存储对象的容器，当需要使用对象时，可以从对象池中取出一个对象，使用完毕后再将其放回对象池中，以便下次重复利用。 以下是一个简单的对象池实现示例： 在Canvas中，可以使用对象池来重复利用对象，从而减少创建和销毁...","head":[["meta",{"property":"og:url","content":"https://blog.axingit.top/pages/84c419/"}],["meta",{"property":"og:site_name","content":"aXing's blog"}],["meta",{"property":"og:title","content":"JS使用对象池实现对象重用"}],["meta",{"property":"og:description","content":"js中如何创建对象池重复利用对象 在JavaScript中，可以使用对象池来重复利用对象，从而减少创建和销毁对象的次数，提高性能。对象池是一个存储对象的容器，当需要使用对象时，可以从对象池中取出一个对象，使用完毕后再将其放回对象池中，以便下次重复利用。 以下是一个简单的对象池实现示例： 在Canvas中，可以使用对象池来重复利用对象，从而减少创建和销毁..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"aXing"}],["meta",{"property":"article:published_time","content":"2024-01-29T04:27:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JS使用对象池实现对象重用\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-29T04:27:18.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"aXing\\",\\"link\\":\\"https://github.com/08163356\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":2.13,"words":640},"filePathRelative":"15.前端知识汇总/01.浏览器知识/2.JS使用对象池实现对象重用.md","localizedDate":"2024年1月29日","autoDesc":true}`);export{v as comp,t as data};
