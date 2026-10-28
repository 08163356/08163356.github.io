import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as i}from"./app-BBpi8vMY.js";const l={};function p(t,s){return i(),a("div",null,[...s[0]||(s[0]=[e(`<p>方法一：没用</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>switchTextToUTF8(str) {</span></span>
<span class="line"><span>  // let encoder = new TextEncoder(&#39;utf8&#39;)</span></span>
<span class="line"><span>  // return encoder.encode(str)</span></span>
<span class="line"><span>  let encode = window.btoa(unescape(encodeURIComponent(str)));</span></span>
<span class="line"><span>  return decodeURIComponent(escape(window.atob(encode)));</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法二：没用</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>  // 将字符串格式化为UTF8编码的字节</span></span>
<span class="line"><span>&lt;!-- more --&gt;</span></span>
<span class="line"><span>  writeUTF(str, isGetBytes) {</span></span>
<span class="line"><span>    var back = [];</span></span>
<span class="line"><span>    var byteSize = 0;</span></span>
<span class="line"><span>    for (var i = 0; i &lt; str.length; i++) {</span></span>
<span class="line"><span>      var code = str.charCodeAt(i);</span></span>
<span class="line"><span>      if (0x00 &lt;= code &amp;&amp; code &lt;= 0x7f) {</span></span>
<span class="line"><span>        byteSize += 1;</span></span>
<span class="line"><span>        back.push(code);</span></span>
<span class="line"><span>      } else if (0x80 &lt;= code &amp;&amp; code &lt;= 0x7ff) {</span></span>
<span class="line"><span>        byteSize += 2;</span></span>
<span class="line"><span>        back.push((192 | (31 &amp; (code &gt;&gt; 6))));</span></span>
<span class="line"><span>        back.push((128 | (63 &amp; code)))</span></span>
<span class="line"><span>      } else if ((0x800 &lt;= code &amp;&amp; code &lt;= 0xd7ff)</span></span>
<span class="line"><span>        || (0xe000 &lt;= code &amp;&amp; code &lt;= 0xffff)) {</span></span>
<span class="line"><span>        byteSize += 3;</span></span>
<span class="line"><span>        back.push((224 | (15 &amp; (code &gt;&gt; 12))));</span></span>
<span class="line"><span>        back.push((128 | (63 &amp; (code &gt;&gt; 6))));</span></span>
<span class="line"><span>        back.push((128 | (63 &amp; code)))</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    for (i = 0; i &lt; back.length; i++) {</span></span>
<span class="line"><span>      back[i] &amp;= 0xff;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if (isGetBytes) {</span></span>
<span class="line"><span>      return back</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if (byteSize &lt;= 0xff) {</span></span>
<span class="line"><span>      return [0, byteSize].concat(back);</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      return [byteSize &gt;&gt; 8, byteSize &amp; 0xff].concat(back);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  readUTF (arr) {</span></span>
<span class="line"><span>    if (typeof arr === &#39;string&#39;) {</span></span>
<span class="line"><span>      return arr;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    var UTF = &#39;&#39;, _arr = this.init(arr);</span></span>
<span class="line"><span>    for (var i = 0; i &lt; _arr.length; i++) {</span></span>
<span class="line"><span>      var one = _arr[i].toString(2),</span></span>
<span class="line"><span>        v = one.match(/^1+?(?=0)/);</span></span>
<span class="line"><span>      if (v &amp;&amp; one.length == 8) {</span></span>
<span class="line"><span>        var bytesLength = v[0].length;</span></span>
<span class="line"><span>        var store = _arr[i].toString(2).slice(7 - bytesLength);</span></span>
<span class="line"><span>        for (var st = 1; st &lt; bytesLength; st++) {</span></span>
<span class="line"><span>          store += _arr[st + i].toString(2).slice(2)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        UTF += String.fromCharCode(parseInt(store, 2));</span></span>
<span class="line"><span>        i += bytesLength - 1</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        UTF += String.fromCharCode(_arr[i])</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return UTF</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  /**</span></span>
<span class="line"><span>   * 初始化字节流,把-128至128的区间改为0-256的区间.便于计算</span></span>
<span class="line"><span>   * @param {Array} array 字节流数组</span></span>
<span class="line"><span>   * @return {Array} 转化好的字节流数组</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  init(array) {</span></span>
<span class="line"><span>  for (var i = 0; i &lt; array.length; i++) {</span></span>
<span class="line"><span>    array[i] &amp;= 0xff;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return array;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法三：没用</p><p>如果web application的编码规则是utf-8，如网页头中的：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=UTF-8&quot; /&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>那么js文件中如果有中文输出就会出现乱码，解决此个问题可在引用javascript输出的地方加上charset=&quot;gb2312&quot; 或 charset=&quot;big5&quot;（假设输出的是Big5繁体字）。</p><p>例：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;script type=&quot;text/javascript&quot; language=&quot;javascript&quot; src=&quot;scripts/output.js&quot; charset=&quot;gb2312&quot;&gt;&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>PS：另一种解决方法是把js文件保存为utf-8编码。 如果web application的编码规则是utf-8，如网页头中的：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=UTF-8&quot; /&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>那么js文件中如果有中文输出就会出现乱码，解决此个问题可在引用javascript输出的地方加上charset=&quot;gb2312&quot; 或 charset=&quot;big5&quot;（假设输出的是Big5繁体字）。</p><p>例：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;script type=&quot;text/javascript&quot; language=&quot;javascript&quot; src=&quot;scripts/output.js&quot; charset=&quot;gb2312&quot;&gt;&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>PS：另一种解决方法是把js文件保存为utf-8编码。</p><p>方法四：使用iconv-lite库</p><p><a href="https://blog.csdn.net/hwoehn/article/details/100582930?spm=1001.2101.3001.6650.2&amp;utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-2-100582930-blog-116279183.pc_relevant_multi_platform_whitelistv3&amp;depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-2-100582930-blog-116279183.pc_relevant_multi_platform_whitelistv3&amp;utm_relevant_index=5" target="_blank" rel="noopener noreferrer">控制台进行编码改变参考</a></p><p><a href="https://blog.csdn.net/momDIY/article/details/78329718" target="_blank" rel="noopener noreferrer">参考文档</a></p><p><a href="https://segmentfault.com/a/1190000005794963" target="_blank" rel="noopener noreferrer">readUTF参考</a></p>`,20)])])}const d=n(l,[["render",p]]),o=JSON.parse(`{"path":"/pages/018459/","title":"JS更改编解码方式","lang":"zh-CN","frontmatter":{"title":"JS更改编解码方式","date":"2024-01-24T23:08:35.000Z","permalink":"/pages/018459/","categories":["前端三件套","js"],"tags":[],"author":{"name":"aXing","link":"https://github.com/08163356"},"description":"方法一：没用 方法二：没用 方法三：没用 如果web application的编码规则是utf-8，如网页头中的： 那么js文件中如果有中文输出就会出现乱码，解决此个问题可在引用javascript输出的地方加上charset=\\"gb2312\\" 或 charset=\\"big5\\"（假设输出的是Big5繁体字）。 例： PS：另一种解决方法是把js文件保存...","head":[["meta",{"property":"og:url","content":"https://blog.axingit.top/pages/018459/"}],["meta",{"property":"og:site_name","content":"aXing's blog"}],["meta",{"property":"og:title","content":"JS更改编解码方式"}],["meta",{"property":"og:description","content":"方法一：没用 方法二：没用 方法三：没用 如果web application的编码规则是utf-8，如网页头中的： 那么js文件中如果有中文输出就会出现乱码，解决此个问题可在引用javascript输出的地方加上charset=\\"gb2312\\" 或 charset=\\"big5\\"（假设输出的是Big5繁体字）。 例： PS：另一种解决方法是把js文件保存..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"aXing"}],["meta",{"property":"article:published_time","content":"2024-01-24T23:08:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JS更改编解码方式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-24T23:08:35.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"aXing\\",\\"link\\":\\"https://github.com/08163356\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":2.04,"words":611},"filePathRelative":"14.前端三件套/3.js/26.JS更改编解码方式.md","localizedDate":"2024年1月25日","autoDesc":true}`);export{d as comp,o as data};
