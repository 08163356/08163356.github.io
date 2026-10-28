import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as i}from"./app-BBpi8vMY.js";const l={};function t(p,s){return i(),a("div",null,[...s[0]||(s[0]=[e(`<p>data对象：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>clearItem: [</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>func: &quot;Clear Cookies&quot;,</span></span>
<span class="line"><span>info: &quot;Cookies will be clear. When deleted, most sites will be signed out.&quot;,</span></span>
<span class="line"><span>event: &quot;clearCookies&quot;</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>func: &quot;Clear Search History&quot;,</span></span>
<span class="line"><span>info: &quot;Search history that was manually entered and accessed from the browser&#39;s search box will be cleared.&quot;,</span></span>
<span class="line"><span>event: &quot;clearSearchCookies&quot;</span></span>
<span class="line"><span>&lt;!-- more --&gt;</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>func: &quot;Clear All Browsing Data&quot;,</span></span>
<span class="line"><span>info: &quot;Clear your browsing history,search history including cookies.&quot;,</span></span>
<span class="line"><span>event: &quot;clearAllBrowsingData&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>],</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>html</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;el-menu-item id = &quot;clearBrowsingData&quot; :key=&quot;item.func&quot;  class = &quot;clear&quot; v-for=&quot;item in clearItem&quot; :style=&quot;menuClear&quot;&gt;</span></span>
<span class="line"><span>    &lt;template  @click=&quot;clearData(item.event)&quot; v-slot:title&gt;</span></span>
<span class="line"><span>        &lt;el-button  tabindex=&quot;1&quot;  class=&quot;function-style&quot; type=&quot;text&quot;&gt;</span></span>
<span class="line"><span>            {{item.func}}&lt;br&gt;</span></span>
<span class="line"><span>            &lt;p class=&quot;buttonHint&quot;&gt;{{item.info}}&lt;/p&gt;</span></span>
<span class="line"><span>        &lt;/el-button&gt;</span></span>
<span class="line"><span>    &lt;/template&gt;</span></span>
<span class="line"><span>    &lt;el-divider class=&quot;main_divider&quot;&gt;&lt;/el-divider&gt;</span></span>
<span class="line"><span>&lt;/el-menu-item&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>methods里面写入方法</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>        clearData (format) {</span></span>
<span class="line"><span>          this[format]()</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        clearCookies () {</span></span>
<span class="line"><span>            console.log(&quot;clearCookies&quot;)</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        clearSearchCookies () {</span></span>
<span class="line"><span>            console.log(&quot;clearSearchCookies&quot;)</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        clearAllBrowsingData () {</span></span>
<span class="line"><span>            console.log(&quot;clearAllBrowsingData&quot;)</span></span>
<span class="line"><span>        },</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考文档</p><p>https://blog.csdn.net/Poppy_LYT/article/details/98482207</p>`,8)])])}const c=n(l,[["render",t]]),d=JSON.parse(`{"path":"/pages/1258b3/","title":"v-for调用函数","lang":"zh-CN","frontmatter":{"title":"v-for调用函数","date":"2024-01-24T23:08:34.000Z","permalink":"/pages/1258b3/","categories":["vue知识总结","vue3项目问题解决"],"tags":[],"author":{"name":"aXing","link":"https://github.com/08163356"},"description":"data对象： html methods里面写入方法 参考文档 https://blog.csdn.net/Poppy_LYT/article/details/98482207","head":[["meta",{"property":"og:url","content":"https://blog.axingit.top/pages/1258b3/"}],["meta",{"property":"og:site_name","content":"aXing's blog"}],["meta",{"property":"og:title","content":"v-for调用函数"}],["meta",{"property":"og:description","content":"data对象： html methods里面写入方法 参考文档 https://blog.csdn.net/Poppy_LYT/article/details/98482207"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"aXing"}],["meta",{"property":"article:published_time","content":"2024-01-24T23:08:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"v-for调用函数\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-24T23:08:34.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"aXing\\",\\"link\\":\\"https://github.com/08163356\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":0.59,"words":177},"filePathRelative":"16.vue知识总结/2.vue3项目问题解决/11.v-for调用函数.md","localizedDate":"2024年1月25日","autoDesc":true}`);export{c as comp,d as data};
