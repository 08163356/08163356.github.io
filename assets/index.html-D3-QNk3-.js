import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as i}from"./app-BBpi8vMY.js";const l={};function p(t,s){return i(),a("div",null,[...s[0]||(s[0]=[e(`<p>vue2写法</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>this.$refs[&#39;获取元素&#39;].$el.scrollLeft = 300</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>方法二：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;ul class=&quot;branchChoiceData&quot; ref = &quot;list&quot;&gt;</span></span>
<span class="line"><span>  &lt;li v-for=&quot;(item, index) in infoOp&quot;</span></span>
<span class="line"><span>  :key=&quot;item.remoteKey&quot;</span></span>
<span class="line"><span>  :tabindex=&quot;index&quot;</span></span>
<span class="line"><span>  :class=&quot;[focus.active === index ? &#39;focus&#39; : &#39;&#39;]&quot;&gt;</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>&lt;!-- more --&gt;</span></span>
<span class="line"><span>&lt;/ul&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>let focus = reactive({</span></span>
<span class="line"><span>active: 0</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>let list = ref(null)</span></span>
<span class="line"><span>let branchLength = ref(null)</span></span>
<span class="line"><span>  function _handleUp() {</span></span>
<span class="line"><span>    focus.active = (focus.active - 1 + branchLength._value) % branchLength._value</span></span>
<span class="line"><span>    if ((branchLength._value &gt; 4 &amp;&amp; focus.active &gt;= 3)) {</span></span>
<span class="line"><span>      list._value.scrollTop = (focus.active !== branchLength._value - 1) ? list._value.scrollTop - 58 : 800</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function _handleDown() {</span></span>
<span class="line"><span>    focus.active = (focus.active + 1) % branchLength._value</span></span>
<span class="line"><span>    if ((branchLength._value &gt; 4 &amp;&amp; focus.active &gt; 3) || focus.active === 0) {</span></span>
<span class="line"><span>      list._value.scrollTop = focus.active !== 0 ? list._value.scrollTop + 58 : 0</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>        .branchChoiceData {</span></span>
<span class="line"><span>            width: 100%;</span></span>
<span class="line"><span>            height: 240px;</span></span>
<span class="line"><span>            background: rgb(114, 118, 120);</span></span>
<span class="line"><span>            border-width: 0px 40px 6px 6px;</span></span>
<span class="line"><span>            border: solid rgb(15, 15, 19);</span></span>
<span class="line"><span>            overflow-x: auto;</span></span>
<span class="line"><span>            overflow-y: scroll;</span></span>
<span class="line"><span>            &gt; li {</span></span>
<span class="line"><span>                width: 100%;</span></span>
<span class="line"><span>                height: 58px;</span></span>
<span class="line"><span>                line-height: 58px;</span></span>
<span class="line"><span>                list-style: none;</span></span>
<span class="line"><span>                .listItem {</span></span>
<span class="line"><span>                    display: flex;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            .divider {</span></span>
<span class="line"><span>                width: 100%;</span></span>
<span class="line"><span>                margin: 0;</span></span>
<span class="line"><span>                border: 1px solid rgb(15, 15, 19);</span></span>
<span class="line"><span>                size: 5px;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            .focus {</span></span>
<span class="line"><span>                background: rgb(142, 154, 84);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://blog.csdn.net/DeepLies/article/details/78854032?spm=1001.2101.3001.6650.9&amp;utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-9-78854032-blog-106502021.pc_relevant_multi_platform_whitelistv1&amp;depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-9-78854032-blog-106502021.pc_relevant_multi_platform_whitelistv1&amp;utm_relevant_index=14" target="_blank" rel="noopener noreferrer">参考文档</a></p>`,7)])])}const r=n(l,[["render",p]]),v=JSON.parse(`{"path":"/pages/7af93c/","title":"vue overflow中实现键盘上下键滚动","lang":"zh-CN","frontmatter":{"title":"vue overflow中实现键盘上下键滚动","date":"2024-01-24T23:08:34.000Z","permalink":"/pages/7af93c/","categories":["vue知识总结","vue3项目问题解决"],"tags":[],"author":{"name":"aXing","link":"https://github.com/08163356"},"description":"vue2写法 方法二： 参考文档","head":[["meta",{"property":"og:url","content":"https://blog.axingit.top/pages/7af93c/"}],["meta",{"property":"og:site_name","content":"aXing's blog"}],["meta",{"property":"og:title","content":"vue overflow中实现键盘上下键滚动"}],["meta",{"property":"og:description","content":"vue2写法 方法二： 参考文档"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"aXing"}],["meta",{"property":"article:published_time","content":"2024-01-24T23:08:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"vue overflow中实现键盘上下键滚动\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-24T23:08:34.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"aXing\\",\\"link\\":\\"https://github.com/08163356\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":0.76,"words":228},"filePathRelative":"16.vue知识总结/2.vue3项目问题解决/13.vue overflow中实现键盘上下键滚动.md","localizedDate":"2024年1月25日","autoDesc":true}`);export{r as comp,v as data};
