import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as i}from"./app-BBpi8vMY.js";const l={};function p(t,s){return i(),a("div",null,[...s[0]||(s[0]=[e(`<h2 id="vue中ref的作用" tabindex="-1"><a class="header-anchor" href="#vue中ref的作用"><span>vue中ref的作用</span></a></h2><p>1.基本用法，本页面获取dom元素</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>    &lt;div ref=&quot;testDom&quot;&gt;11111&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;button @click=&quot;getTest&quot;&gt;获取test节点&lt;/button&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>&lt;!-- more --&gt;</span></span>
<span class="line"><span>    getTest() {</span></span>
<span class="line"><span>      console.log(this.$refs.testDom)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.获取子组件中的data和调用子组件中的方法</p><p>子组件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>      {{ msg }}</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  data() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      msg: &quot;hello world&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>父组件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>    &lt;HelloWorld ref=&quot;hello&quot;/&gt;</span></span>
<span class="line"><span>    &lt;button @click=&quot;getHello&quot;&gt;获取helloworld组件中的值&lt;/button&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import HelloWorld from &quot;./components/HelloWorld.vue&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  components: {</span></span>
<span class="line"><span>    HelloWorld</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  data() {</span></span>
<span class="line"><span>    return {}</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>    getHello() {</span></span>
<span class="line"><span>      console.log(this.$refs.hello.msg)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.调用子组件方法</p><p>子组件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>    open() {</span></span>
<span class="line"><span>      console.log(&quot;调用到了&quot;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>父组件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>    &lt;HelloWorld ref=&quot;hello&quot;/&gt;</span></span>
<span class="line"><span>    &lt;button @click=&quot;getHello&quot;&gt;获取helloworld组件中的值&lt;/button&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import HelloWorld from &quot;./components/HelloWorld.vue&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  components: {</span></span>
<span class="line"><span>    HelloWorld</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  data() {</span></span>
<span class="line"><span>    return {}</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>    getHello() {</span></span>
<span class="line"><span>      this.$refs.hello.open();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.ref和toref</p><p>ref 是对<code>值类型</code>创造响应式的方法</p><p>toRef、toRefs 是延续<code>引用类型</code>响应式对象的方法</p><p>只不过 toRef 延续单个响应式对象的属性,</p><p>而 toRefs 延续响应式对象的全部属性</p><p>参考文档：</p><p>https://juejin.cn/post/6844904000806993934</p>`,20)])])}const r=n(l,[["render",p]]),v=JSON.parse(`{"path":"/pages/761bf0/","title":"vue ref作用","lang":"zh-CN","frontmatter":{"title":"vue ref作用","date":"2024-01-24T23:08:34.000Z","permalink":"/pages/761bf0/","categories":["vue知识总结","vue3项目问题解决"],"tags":[],"author":{"name":"aXing","link":"https://github.com/08163356"},"description":"vue中ref的作用 1.基本用法，本页面获取dom元素 2.获取子组件中的data和调用子组件中的方法 子组件 父组件 3.调用子组件方法 子组件 父组件 4.ref和toref ref 是对值类型创造响应式的方法 toRef、toRefs 是延续引用类型响应式对象的方法 只不过 toRef 延续单个响应式对象的属性, 而 toRefs 延续响应式对...","head":[["meta",{"property":"og:url","content":"https://blog.axingit.top/pages/761bf0/"}],["meta",{"property":"og:site_name","content":"aXing's blog"}],["meta",{"property":"og:title","content":"vue ref作用"}],["meta",{"property":"og:description","content":"vue中ref的作用 1.基本用法，本页面获取dom元素 2.获取子组件中的data和调用子组件中的方法 子组件 父组件 3.调用子组件方法 子组件 父组件 4.ref和toref ref 是对值类型创造响应式的方法 toRef、toRefs 是延续引用类型响应式对象的方法 只不过 toRef 延续单个响应式对象的属性, 而 toRefs 延续响应式对..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"aXing"}],["meta",{"property":"article:published_time","content":"2024-01-24T23:08:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"vue ref作用\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-24T23:08:34.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"aXing\\",\\"link\\":\\"https://github.com/08163356\\"}]}"]]},"headers":[{"level":2,"title":"vue中ref的作用","slug":"vue中ref的作用","link":"#vue中ref的作用","children":[]}],"git":{},"readingTime":{"minutes":0.99,"words":298},"filePathRelative":"16.vue知识总结/2.vue3项目问题解决/14.vue ref作用.md","localizedDate":"2024年1月25日","autoDesc":true}`);export{r as comp,v as data};
