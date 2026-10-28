import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as i}from"./app-BBpi8vMY.js";const l={};function p(c,s){return i(),a("div",null,[...s[0]||(s[0]=[e(`<p>问题：</p><p>devtool layer中出现重复的canvas原因、解决方案</p><p>方案：</p><p>使用对象池实现canvas重用</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>​\`\`\`javascript</span></span>
<span class="line"><span>// 定义对象池类</span></span>
<span class="line"><span>class ObjectPool {</span></span>
<span class="line"><span>constructor(create, reset) {</span></span>
<span class="line"><span>&lt;!-- more --&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>this.create = create;</span></span>
<span class="line"><span>this.reset = reset;</span></span>
<span class="line"><span>this.pool = [];</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 从对象池中获取对象</span></span>
<span class="line"><span>acquire() {</span></span>
<span class="line"><span>if (this.pool.length &gt; 0) {</span></span>
<span class="line"><span>return this.pool.pop();</span></span>
<span class="line"><span>} else {</span></span>
<span class="line"><span>return this.create();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 将对象归还到对象池中</span></span>
<span class="line"><span>release(obj) {</span></span>
<span class="line"><span>this.reset(obj);</span></span>
<span class="line"><span>this.pool.push(obj);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建Canvas对象池</span></span>
<span class="line"><span>const canvasPool = new ObjectPool(</span></span>
<span class="line"><span>// 创建Canvas对象</span></span>
<span class="line"><span>() =&gt; {</span></span>
<span class="line"><span>const canvas = document.createElement(&#39;canvas&#39;);</span></span>
<span class="line"><span>return canvas;</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>// 重置Canvas对象</span></span>
<span class="line"><span>(canvas) =&gt; {</span></span>
<span class="line"><span>canvas.width = 0;</span></span>
<span class="line"><span>canvas.height = 0;</span></span>
<span class="line"><span>canvas.getContext(&#39;2d&#39;).clearRect(0, 0, canvas.width, canvas.height);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用对象池获取和归还Canvas对象</span></span>
<span class="line"><span>const canvas = canvasPool.acquire();</span></span>
<span class="line"><span>// 使用Canvas对象</span></span>
<span class="line"><span>// ...</span></span>
<span class="line"><span>canvasPool.release(canvas);</span></span>
<span class="line"><span>​\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在这个例子中，我们定义了一个ObjectPool类，它包含了一个对象池和两个回调函数：create和reset。create函数用于创建新的Canvas对象，reset函数用于重置已有的Canvas对象。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在使用Canvas对象时，我们可以通过acquire函数从对象池中获取Canvas对象，使用完后再通过release函数将Canvas对象归还到对象池中。这样就可以避免重复创建和销毁Canvas对象，从而提高性能和效率。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>需要注意的是，对象池的实现方式可能因具体场景而异，需要根据实际情况进行调整和优化。同时，需要注意避免对象池中对象的过度增长，应该根据具体情况来调整对象池的大小和使用方式。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)])])}const d=n(l,[["render",p]]),v=JSON.parse(`{"path":"/pages/8e5d5b/","title":"【css优化】layer中出现重复的canvas","lang":"zh-CN","frontmatter":{"title":"【css优化】layer中出现重复的canvas","date":"2024-01-29T04:27:55.000Z","permalink":"/pages/8e5d5b/","categories":["性能优化","项目性能分析、优化"],"tags":[],"author":{"name":"aXing","link":"https://github.com/08163356"},"description":"问题： devtool layer中出现重复的canvas原因、解决方案 方案： 使用对象池实现canvas重用","head":[["meta",{"property":"og:url","content":"https://blog.axingit.top/pages/8e5d5b/"}],["meta",{"property":"og:site_name","content":"aXing's blog"}],["meta",{"property":"og:title","content":"【css优化】layer中出现重复的canvas"}],["meta",{"property":"og:description","content":"问题： devtool layer中出现重复的canvas原因、解决方案 方案： 使用对象池实现canvas重用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-02T15:55:47.000Z"}],["meta",{"property":"article:author","content":"aXing"}],["meta",{"property":"article:published_time","content":"2024-01-29T04:27:55.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T15:55:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"【css优化】layer中出现重复的canvas\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-29T04:27:55.000Z\\",\\"dateModified\\":\\"2024-02-02T15:55:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"aXing\\",\\"link\\":\\"https://github.com/08163356\\"}]}"]]},"headers":[],"git":{"createdTime":1706109170000,"updatedTime":1706889347000,"contributors":[{"name":"Lx08163356@163.com","username":"Lx08163356@163.com","email":"Lx08163356@163.com","commits":4,"url":"https://github.com/Lx08163356@163.com"}]},"readingTime":{"minutes":1.35,"words":404},"filePathRelative":"性能优化/4.项目性能分析、优化/20.【css优化】layer中出现重复的canvas.md","localizedDate":"2024年1月29日","autoDesc":true}`);export{d as comp,v as data};
