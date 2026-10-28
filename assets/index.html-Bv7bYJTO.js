import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as i,o as e}from"./app-BBpi8vMY.js";const l={};function p(t,n){return e(),a("div",null,[...n[0]||(n[0]=[i(`<p>A：添加width和height就行</p><p>新需求：如何用flex，根据同的个数，渲染不同的大小</p><p>解决方案：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;div id = &quot;options&quot;&gt;</span></span>
<span class="line"><span>    &lt;span v-for=&quot;n in 2&quot; </span></span>
<span class="line"><span>          :key=&quot;n&quot;</span></span>
<span class="line"><span>          v-text=&quot;String.fromCharCode(64 + n)&quot;&gt;</span></span>
<span class="line"><span>&lt;!-- more --&gt;</span></span>
<span class="line"><span>    &lt;/span&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>...</span></span>
<span class="line"><span>        width: 570px;</span></span>
<span class="line"><span>        height: 850px;</span></span>
<span class="line"><span>        padding: 20px;</span></span>
<span class="line"><span>        position: fixed;</span></span>
<span class="line"><span>        bottom: 20px;</span></span>
<span class="line"><span>        right: 20px;</span></span>
<span class="line"><span>        font-size: 28px;</span></span>
<span class="line"><span>        color: rgb(178, 178, 178);</span></span>
<span class="line"><span>        background: rgb(15, 15, 19);</span></span>
<span class="line"><span>        /*display: none;*/</span></span>
<span class="line"><span>        #headContainer {</span></span>
<span class="line"><span>            #title {</span></span>
<span class="line"><span>                margin-bottom: 6px;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            #options { //核心代码</span></span>
<span class="line"><span>                display: flex;</span></span>
<span class="line"><span>                flex-wrap: nowrap;</span></span>
<span class="line"><span>                flex-direction: row;</span></span>
<span class="line"><span>                justify-content: space-around;</span></span>
<span class="line"><span>                align-items: flex-start;</span></span>
<span class="line"><span>                &gt;span {</span></span>
<span class="line"><span>                    width: 48%;</span></span>
<span class="line"><span>                    text-align: center;</span></span>
<span class="line"><span>                    margin-right: 10px;</span></span>
<span class="line"><span>                    background: rgb(55, 55, 55);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                /*margin-right: 10px;*/</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>...</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)])])}const c=s(l,[["render",p]]),o=JSON.parse(`{"path":"/pages/a480a5/","title":"img控制图片显示大小","lang":"zh-CN","frontmatter":{"title":"img控制图片显示大小","date":"2024-01-24T23:08:35.000Z","permalink":"/pages/a480a5/","categories":["前端三件套","CSS"],"tags":[],"author":{"name":"aXing","link":"https://github.com/08163356"},"description":"A：添加width和height就行 新需求：如何用flex，根据同的个数，渲染不同的大小 解决方案：","head":[["meta",{"property":"og:url","content":"https://blog.axingit.top/pages/a480a5/"}],["meta",{"property":"og:site_name","content":"aXing's blog"}],["meta",{"property":"og:title","content":"img控制图片显示大小"}],["meta",{"property":"og:description","content":"A：添加width和height就行 新需求：如何用flex，根据同的个数，渲染不同的大小 解决方案："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"aXing"}],["meta",{"property":"article:published_time","content":"2024-01-24T23:08:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"img控制图片显示大小\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-24T23:08:35.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"aXing\\",\\"link\\":\\"https://github.com/08163356\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":0.58,"words":173},"filePathRelative":"14.前端三件套/1.CSS/10.img控制图片显示大小.md","localizedDate":"2024年1月25日","autoDesc":true}`);export{c as comp,o as data};
