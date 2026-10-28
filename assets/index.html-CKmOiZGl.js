import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as i,o as e}from"./app-BBpi8vMY.js";const p={};function l(t,s){return e(),a("div",null,[...s[0]||(s[0]=[i(`<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>在 Vite 中，可以通过在 \`vite.config.js\` 文件中配置 \`build.rollupOptions.output\` 选项来控制打包后生成的 HTML 文件中 script 标签的属性。具体步骤如下：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 在项目根目录下创建 \`vite.config.js\` 文件。</span></span>
<span class="line"><span>2. 在 \`vite.config.js\` 文件中添加以下代码：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>​\`\`\`js</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>build: {</span></span>
<span class="line"><span>rollupOptions: {</span></span>
<span class="line"><span>&lt;!-- more --&gt;</span></span>
<span class="line"><span>output: {</span></span>
<span class="line"><span>// 禁用 script 标签的 type 属性</span></span>
<span class="line"><span>scriptType: null,</span></span>
<span class="line"><span>// 禁用 script 标签的 crossorigin 属性</span></span>
<span class="line"><span>crossorigin: null,</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>​\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>上述代码中，\`build.rollupOptions.output.scriptType\` 和 \`build.rollupOptions.output.crossorigin\` 分别控制 script 标签的 type 属性和 crossorigin 属性。将它们设置为 \`null\` 即可禁用这些属性，使生成的 script 标签不包含这些属性。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 保存 \`vite.config.js\` 文件并重新运行 Vite 打包命令，生成的 HTML 文件中的 script 标签将不再包含 type 属性和 crossorigin 属性。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>需要注意的是，禁用 script 标签的 type 属性可能会导致一些浏览器无法正确解析 JavaScript 代码，因此建议仅在必要时才禁用该属性。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1)])])}const o=n(p,[["render",l]]),d=JSON.parse(`{"path":"/pages/343b0c/","title":"vite打包时候如何不生成type和crossOrigin","lang":"zh-CN","frontmatter":{"title":"vite打包时候如何不生成type和crossOrigin","date":"2024-01-24T23:08:35.000Z","permalink":"/pages/343b0c/","categories":["前端工程化","项目工程化问题解决"],"tags":[],"author":{"name":"aXing","link":"https://github.com/08163356"},"head":[["meta",{"property":"og:url","content":"https://blog.axingit.top/pages/343b0c/"}],["meta",{"property":"og:site_name","content":"aXing's blog"}],["meta",{"property":"og:title","content":"vite打包时候如何不生成type和crossOrigin"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"aXing"}],["meta",{"property":"article:published_time","content":"2024-01-24T23:08:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"vite打包时候如何不生成type和crossOrigin\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-24T23:08:35.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"aXing\\",\\"link\\":\\"https://github.com/08163356\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":0.94,"words":283},"filePathRelative":"13.前端工程化/19.项目工程化问题解决/7.vite打包时候如何不生成type和crossOrigin.md","localizedDate":"2024年1月25日"}`);export{o as comp,d as data};
