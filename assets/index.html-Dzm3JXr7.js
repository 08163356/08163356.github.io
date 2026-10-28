import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as i}from"./app-BBpi8vMY.js";const l={};function t(p,s){return i(),a("div",null,[...s[0]||(s[0]=[e(`<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;span v-for=&quot;(item, index) in favList&quot;</span></span>
<span class="line"><span>      ref=&quot;groupList&quot;&gt;</span></span>
<span class="line"><span>    &lt;img class=&quot;remoteKey&quot;</span></span>
<span class="line"><span>         :src=&quot;remoteKeyPic[index]&quot;</span></span>
<span class="line"><span>         tabindex=&quot;index&quot;&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>&lt;!--                        &lt;img class=&quot;logo&quot; :src=&quot;&#39;data:image/png;base64,&#39; + item.logo.data&quot;&gt;--&gt;</span></span>
<span class="line"><span>        &lt;img class=&quot;logo&quot;</span></span>
<span class="line"><span>             v-if=&quot;item.logo&quot;</span></span>
<span class="line"><span>             :src=&quot;item.logo.data&quot;&gt;</span></span>
<span class="line"><span>        &lt;span v-else class=&quot;logo&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span>        &lt;span class=&quot;logicalNum&quot; v-text=&quot;item.logicalNum&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/span&gt;</span></span>
<span class="line"><span>&lt;!-- more --&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>setup(){</span></span>
<span class="line"><span>      let favList = reactive({})</span></span>
<span class="line"><span>      let groupList = ref(&quot;&quot;)</span></span>
<span class="line"><span>      function _getSwitchChannelData() {</span></span>
<span class="line"><span>        console.log(&quot;test &quot;, groupList)</span></span>
<span class="line"><span>        return groupList</span></span>
<span class="line"><span>        //todo</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      return {</span></span>
<span class="line"><span>        groupList</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取到的值为：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>RefImpl {__v_isShallow: false, dep: undefined, __v_isRef: true, _rawValue: &quot;&quot;, _value: &quot;&quot;}</span></span>
<span class="line"><span>dep: undefined</span></span>
<span class="line"><span>__v_isRef: true</span></span>
<span class="line"><span>__v_isShallow: false</span></span>
<span class="line"><span>_rawValue: (12) [span, span, span, span, span, span, span, span, span, span, span, span]</span></span>
<span class="line"><span>_value: Proxy {0: span, 1: span, 2: span, 3: span, 4: span, 5: span, 6: span, 7: span, 8: span, 9: span, 10: span, 11: span}</span></span>
<span class="line"><span>value: (...)</span></span>
<span class="line"><span>__proto__: Object</span></span>
<span class="line"><span>....</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如何获取到value、_value中的值</p><p>ref=&quot;groupList&quot;提到上一层（加个div），没获取到说明是没有值</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;div id = &quot;group&quot; ref=&quot;groupList&quot;&gt;</span></span>
<span class="line"><span>&lt;span v-for=&quot;(item, index) in favList&quot;</span></span>
<span class="line"><span>      ref=&quot;groupList&quot;&gt;</span></span>
<span class="line"><span>    &lt;img class=&quot;remoteKey&quot;</span></span>
<span class="line"><span>         :src=&quot;remoteKeyPic[index]&quot;</span></span>
<span class="line"><span>         tabindex=&quot;index&quot;&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>&lt;!--                        &lt;img class=&quot;logo&quot; :src=&quot;&#39;data:image/png;base64,&#39; + item.logo.data&quot;&gt;--&gt;</span></span>
<span class="line"><span>        &lt;img class=&quot;logo&quot;</span></span>
<span class="line"><span>             v-if=&quot;item.logo&quot;</span></span>
<span class="line"><span>             :src=&quot;item.logo.data&quot;&gt;</span></span>
<span class="line"><span>        &lt;span v-else class=&quot;logo&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span>        &lt;span class=&quot;logicalNum&quot; v-text=&quot;item.logicalNum&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/span&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)])])}const r=n(l,[["render",t]]),c=JSON.parse(`{"path":"/pages/e9a3af/","title":"VUE-REF vue3获取element","lang":"zh-CN","frontmatter":{"title":"VUE-REF vue3获取element","date":"2024-01-24T23:08:34.000Z","permalink":"/pages/e9a3af/","categories":["vue知识总结","vue3项目问题解决"],"tags":[],"author":{"name":"aXing","link":"https://github.com/08163356"},"description":"获取到的值为： 如何获取到value、_value中的值 ref=\\"groupList\\"提到上一层（加个div），没获取到说明是没有值","head":[["meta",{"property":"og:url","content":"https://blog.axingit.top/pages/e9a3af/"}],["meta",{"property":"og:site_name","content":"aXing's blog"}],["meta",{"property":"og:title","content":"VUE-REF vue3获取element"}],["meta",{"property":"og:description","content":"获取到的值为： 如何获取到value、_value中的值 ref=\\"groupList\\"提到上一层（加个div），没获取到说明是没有值"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"aXing"}],["meta",{"property":"article:published_time","content":"2024-01-24T23:08:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"VUE-REF vue3获取element\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-24T23:08:34.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"aXing\\",\\"link\\":\\"https://github.com/08163356\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":0.85,"words":254},"filePathRelative":"16.vue知识总结/2.vue3项目问题解决/18.VUE-REF vue3获取element.md","localizedDate":"2024年1月25日","autoDesc":true}`);export{r as comp,c as data};
