import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as i}from"./app-BBpi8vMY.js";const l={};function t(p,s){return i(),a("div",null,[...s[0]||(s[0]=[e(`<p>让内存占用到80%</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const os = require(&#39;os&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const totalMem = os.totalmem();</span></span>
<span class="line"><span>let usedMem = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>while (usedMem &lt; totalMem * 0.8) {</span></span>
<span class="line"><span>  const arr = new Array(1000000);</span></span>
<span class="line"><span>&lt;!-- more --&gt;</span></span>
<span class="line"><span>  usedMem += arr.length * 8; // 每个数字占用8个字节</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让CPU占用到80%</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const os = require(&#39;os&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const cpus = os.cpus();</span></span>
<span class="line"><span>const numCPUs = cpus.length;</span></span>
<span class="line"><span>const threads = [];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for (let i = 0; i &lt; numCPUs * 0.8; i++) {</span></span>
<span class="line"><span>  const worker = setInterval(() =&gt; {</span></span>
<span class="line"><span>    let result = 0;</span></span>
<span class="line"><span>    for (let j = 0; j &lt; 100000000; j++) {</span></span>
<span class="line"><span>      result += Math.random();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }, 1);</span></span>
<span class="line"><span>  threads.push(worker);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)])])}const d=n(l,[["render",t]]),o=JSON.parse(`{"path":"/pages/45ea1a/","title":"控制CPU或内存的占用率","lang":"zh-CN","frontmatter":{"title":"控制CPU或内存的占用率","date":"2024-01-24T23:08:35.000Z","permalink":"/pages/45ea1a/","categories":["前端工程化","项目工程化问题解决"],"tags":[],"author":{"name":"aXing","link":"https://github.com/08163356"},"description":"让内存占用到80% 让CPU占用到80%","head":[["meta",{"property":"og:url","content":"https://blog.axingit.top/pages/45ea1a/"}],["meta",{"property":"og:site_name","content":"aXing's blog"}],["meta",{"property":"og:title","content":"控制CPU或内存的占用率"}],["meta",{"property":"og:description","content":"让内存占用到80% 让CPU占用到80%"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"aXing"}],["meta",{"property":"article:published_time","content":"2024-01-24T23:08:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"控制CPU或内存的占用率\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-24T23:08:35.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"aXing\\",\\"link\\":\\"https://github.com/08163356\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":0.42,"words":127},"filePathRelative":"13.前端工程化/19.项目工程化问题解决/18.控制CPU或内存的占用率.md","localizedDate":"2024年1月25日","autoDesc":true}`);export{d as comp,o as data};
