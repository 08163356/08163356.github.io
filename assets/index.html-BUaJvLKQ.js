import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as i,o as l}from"./app-BBpi8vMY.js";const e={};function p(d,s){return l(),a("div",null,[...s[0]||(s[0]=[i(`<p>場景，是AI gpt问答的时候，希望答案出现的时候逐字出现，而不是隐藏了，等全部返回之后再出现：</p><p>场景代码：是用数组去接受列表，然后v-for去显示的</p><p>需求：如何实现，先显示用户的问题，然后逐字显示GPT的答案</p><p>实现：js 实现逐字显示、延时函数模拟对话</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;chat-gpt&quot;&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;chat-dialog&quot; class=&quot;chat-dialog&quot; ref=&quot;chatDialogRef&quot;&gt;</span></span>
<span class="line"><span>      &lt;div id=&quot;chat-list&quot; class=&quot;chat-list&quot; ref=&quot;chatListRef&quot;&gt;</span></span>
<span class="line"><span>        &lt;div v-for=&quot;(item, index) in chatList&quot; :key=&quot;index&quot;&gt;</span></span>
<span class="line"><span>          &lt;img</span></span>
<span class="line"><span>            v-if=&quot;item.status &amp;&amp; index % 2 == 0&quot;</span></span>
<span class="line"><span>            src=&quot;../../public/img/speak1.gif&quot;</span></span>
<span class="line"><span>            alt=&quot;&quot;</span></span>
<span class="line"><span>          /&gt;</span></span>
<span class="line"><span>          &lt;div :class=&quot;index % 2 == 0 ? &#39;odd&#39; : &#39;even&#39;&quot;&gt;{{ item.content }}&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  data() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      textCount: 0,</span></span>
<span class="line"><span>      timer: null,</span></span>
<span class="line"><span>      chatBaseList: [</span></span>
<span class="line"><span>        &quot;以今日5辆满电无人车，运输5小时能运完50吨货物的标准，已知每辆无人车运输1小时耗电10%，运输效率是多少，每辆无人车耗电多少？花费多长时间？&quot;,</span></span>
<span class="line"><span>        &quot;运输效率：50吨/5小时=10顿/小时，每辆无人车耗电：10%×5小时=50%，需花费5小时。&quot;,</span></span>
<span class="line"><span>        &quot;以现有运输效率前提下，再增加5辆无人运输车，完成共计150吨物资的运输任务，整体效率会提高到多少？每辆无人车耗电又是多少？共花费多长时间？&quot;,</span></span>
<span class="line"><span>        &quot;增加到10辆无人车，完成共计150吨物资运输任务，整体效率会提高到15顿/小时，每辆无人车耗电百分比是15%。运完150吨的话，总共要耗用1.5小时。&quot;,</span></span>
<span class="line"><span>        &quot;我来想想是否确认执行此调配操作？&quot;,</span></span>
<span class="line"><span>        &quot;您好，请您慎重考虑。我们将根据您的确认来决定是否执行此调配操作。&quot;,</span></span>
<span class="line"><span>        &quot;是&quot;</span></span>
<span class="line"><span>      ],</span></span>
<span class="line"><span>      chatList: []</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  mounted() {</span></span>
<span class="line"><span>    this.initGPT();</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>    // 延时函数</span></span>
<span class="line"><span>    sleep(delaytime = 10000) {</span></span>
<span class="line"><span>      return new Promise(resolve =&gt; setTimeout(resolve, delaytime));</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    // 同步遍历，自定义延时时间</span></span>
<span class="line"><span>    async delayDo(</span></span>
<span class="line"><span>      iterList,</span></span>
<span class="line"><span>      callback = data =&gt; console.log(\`数据：\${data}\`),</span></span>
<span class="line"><span>      delaytimeList</span></span>
<span class="line"><span>    ) {</span></span>
<span class="line"><span>      let len = iterList.length;</span></span>
<span class="line"><span>      for (let i = 0; i &lt; len; i++) {</span></span>
<span class="line"><span>        callback(iterList[i], i);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        await this.sleep(delaytimeList[i]);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    // 逐字显示内容</span></span>
<span class="line"><span>    getChatContent(text, index) {</span></span>
<span class="line"><span>      this.timer = setInterval(() =&gt; {</span></span>
<span class="line"><span>        this.textCount++;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (this.textCount == text.length + 1) {</span></span>
<span class="line"><span>          this.textCount = 0;</span></span>
<span class="line"><span>          this.chatList.splice(index, 1, { content: text, status: false });</span></span>
<span class="line"><span>          clearInterval(this.timer);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 取字符串子串</span></span>
<span class="line"><span>        let nowStr = text.substring(0, this.textCount);</span></span>
<span class="line"><span>        this.chatList.splice(index, 1, { content: nowStr, status: true });</span></span>
<span class="line"><span>      }, 200);</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    // 点击开始聊天</span></span>
<span class="line"><span>    initGPT() {</span></span>
<span class="line"><span>      // const delaytimeList = [11000, 8000, 6000, 15000, 4000];</span></span>
<span class="line"><span>      const delaytimeList = [16000, 11000, 16000, 16000, 5000, 7000];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      this.delayDo(</span></span>
<span class="line"><span>        this.chatBaseList,</span></span>
<span class="line"><span>        (item, i) =&gt; {</span></span>
<span class="line"><span>          this.getChatContent(item, i);</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        delaytimeList</span></span>
<span class="line"><span>      );</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;</span></span>
<span class="line"><span>.chat-gpt {</span></span>
<span class="line"><span>  width: 33rem;</span></span>
<span class="line"><span>  height: 43rem;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  .chat-dialog {</span></span>
<span class="line"><span>    position: relative;</span></span>
<span class="line"><span>    height: 43rem;</span></span>
<span class="line"><span>    background: 0/33rem url(&quot;../../public/img/chat-bg.png&quot;) no-repeat;</span></span>
<span class="line"><span>    overflow: hidden;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .close-icon {</span></span>
<span class="line"><span>      position: absolute;</span></span>
<span class="line"><span>      top: 1rem;</span></span>
<span class="line"><span>      right: 1rem;</span></span>
<span class="line"><span>      width: 3.4rem;</span></span>
<span class="line"><span>      height: 3.4rem;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      img {</span></span>
<span class="line"><span>        width: 100%;</span></span>
<span class="line"><span>        height: 100%;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .chat-list {</span></span>
<span class="line"><span>      display: flex;</span></span>
<span class="line"><span>      flex-direction: column;</span></span>
<span class="line"><span>      width: 90%;</span></span>
<span class="line"><span>      margin: 0 auto;</span></span>
<span class="line"><span>      margin-top: 2rem;</span></span>
<span class="line"><span>      overflow: auto;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      &gt;div {</span></span>
<span class="line"><span>        display: flex;</span></span>
<span class="line"><span>        margin-top: 1rem;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &gt;div {</span></span>
<span class="line"><span>          max-width: 19rem;</span></span>
<span class="line"><span>          padding: 0.6rem;</span></span>
<span class="line"><span>          opacity: 0.8;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          font-size: 0.9rem;</span></span>
<span class="line"><span>          font-family: FZLanTingHei-L-GBK;</span></span>
<span class="line"><span>          font-weight: 400;</span></span>
<span class="line"><span>          color: #c5e7ff;</span></span>
<span class="line"><span>          text-align: start;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .odd {</span></span>
<span class="line"><span>          align-self: flex-start;</span></span>
<span class="line"><span>          background: #435e6f;</span></span>
<span class="line"><span>          border-radius: 0px 16px 16px 16px;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .even {</span></span>
<span class="line"><span>          align-self: flex-end;</span></span>
<span class="line"><span>          background: #31b8c8;</span></span>
<span class="line"><span>          border-radius: 16px 0px 16px 16px;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        img {</span></span>
<span class="line"><span>          width: 2rem;</span></span>
<span class="line"><span>          height: 2rem;</span></span>
<span class="line"><span>          margin-right: 1rem;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      &gt;div:nth-of-type(odd) {</span></span>
<span class="line"><span>        align-self: flex-start;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      &gt;div:nth-of-type(even) {</span></span>
<span class="line"><span>        align-self: flex-end;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  .chat-tips {</span></span>
<span class="line"><span>    display: flex;</span></span>
<span class="line"><span>    height: 5.82rem;</span></span>
<span class="line"><span>    margin-top: 1rem;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .gpt-icon {</span></span>
<span class="line"><span>      height: 100%;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      img {</span></span>
<span class="line"><span>        height: 100%;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;span&gt;{{ showText }}&lt;/span&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  data() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      timer: null, //settimeout</span></span>
<span class="line"><span>      showText: &quot;&quot;,</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>  mounted() {</span></span>
<span class="line"><span>    this.appear(</span></span>
<span class="line"><span>      &quot;俄乌局势发生变化？泽连斯基点名批评西方国家，喊话普京坐下来谈。&quot;</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>    appear(content) {</span></span>
<span class="line"><span>      const _this = this;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>      this.showText = &quot;&quot;;</span></span>
<span class="line"><span>      clearTimeout(this.timer);</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>      var speed = 50; //设置定时的速度 越来越快</span></span>
<span class="line"><span>      var count = 1;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>      function changeContent() {</span></span>
<span class="line"><span>        _this.showText = content.substring(0, count); //截取字符串</span></span>
<span class="line"><span>        count++;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>        if (count != content.length + 1) {</span></span>
<span class="line"><span>          speed -= 1;</span></span>
<span class="line"><span>          if (speed &lt; 5) speed = 5;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>          _this.timer = setTimeout(changeContent, speed);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      changeContent();</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;chat&quot;&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;chat-bubble&quot; v-for=&quot;(message, index) in messages&quot; :key=&quot;index&quot;&gt;</span></span>
<span class="line"><span>      &lt;div&gt;{{ message.content }}&lt;/div&gt;</span></span>
<span class="line"><span>      &lt;span v-if=&quot;showTyping &amp;&amp; index === messages.length - 1&quot;&gt;{{ typing }}&lt;/span&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  name: &#39;Chat&#39;,</span></span>
<span class="line"><span>  data() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      messages: [],</span></span>
<span class="line"><span>      typing: &#39;&#39;,</span></span>
<span class="line"><span>      showTyping: false,</span></span>
<span class="line"><span>      intervalId: null</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  created() {</span></span>
<span class="line"><span>    this.addMessage({</span></span>
<span class="line"><span>      content: </span></span>
<span class="line"><span>      \`</span></span>
<span class="line"><span>      为什么如此？因为在青春时代，生活充满了奇特而辛酸的不可思议的事。</span></span>
<span class="line"><span>      Why is this so? Because in youth, life is filled with strange and poignant incredible things.</span></span>
<span class="line"><span>      \`</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>    addMessage(message) {</span></span>
<span class="line"><span>      this.messages.push({ ...message, content: &#39;&#39; })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      let i = 0</span></span>
<span class="line"><span>      const msgLength = message.content.length</span></span>
<span class="line"><span>      const typingDelay = Math.floor(Math.random() * 100) + 50 // 随机生成打字的延迟时间</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      const typeNextLetter = () =&gt; {</span></span>
<span class="line"><span>        this.messages[this.messages.length - 1].content += message.content.charAt(i)</span></span>
<span class="line"><span>        i++</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (i &lt;= msgLength) {</span></span>
<span class="line"><span>          setTimeout(typeNextLetter, typingDelay)</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>          clearTimeout(this.intervalId)</span></span>
<span class="line"><span>          this.showTyping = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          this.intervalId = setTimeout(() =&gt; {</span></span>
<span class="line"><span>            this.addMessage({</span></span>
<span class="line"><span>              content: &#39;...&#39;</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>          }, Math.floor(Math.random() * 5000) + 1000)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      clearTimeout(this.intervalId)</span></span>
<span class="line"><span>      this.showTyping = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      this.intervalId = setTimeout(typeNextLetter, 500)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>.chat {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  flex-direction: column;</span></span>
<span class="line"><span>  justify-content: flex-start;</span></span>
<span class="line"><span>  align-items: flex-start;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.chat-bubble {</span></span>
<span class="line"><span>  margin: 5px;</span></span>
<span class="line"><span>  padding: 10px;</span></span>
<span class="line"><span>  border-radius: 10px;</span></span>
<span class="line"><span>  background: #eee;</span></span>
<span class="line"><span>  color: #333;</span></span>
<span class="line"><span>  display: inline-block;</span></span>
<span class="line"><span>  max-width: 70%;</span></span>
<span class="line"><span>  word-break: break-word;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.chat-bubble:last-child {</span></span>
<span class="line"><span>  margin-bottom: 20px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>无用：https://www.nuomiphp.com/github/zh/600bfa8f4f34c64e0170449d.html</p><p>无用：https://github.com/Orlandster/vue-typed-js</p><p>无用：https://mattboldt.com/demos/typed-js/</p><p>无用：https://github.com/Orlandster/vue-typed-js</p><p>可参考：https://blog.csdn.net/weixin_41000111/article/details/78725784</p><p>可参考：https://wenku.csdn.net/answer/2if1iqkez1</p><p>尝试ing：https://blog.csdn.net/weixin_43997331/article/details/135376110?spm=1001.2101.3001.6650.1&amp;utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-135376110-blog-124999549.235%5Ev43%5Econtrol&amp;depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-135376110-blog-124999549.235%5Ev43%5Econtrol&amp;utm_relevant_index=2</p><p>最终实现：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>          &lt;section class=&quot;banner&quot;&gt;</span></span>
<span class="line"><span>            &lt;section</span></span>
<span class="line"><span>              class=&quot;p3&quot;</span></span>
<span class="line"><span>              v-if=&quot;item.type === &#39;ai&#39; &amp;&amp; dialogueList.length - 1 === index&quot;</span></span>
<span class="line"><span>            &gt;</span></span>
<span class="line"><span>              &lt;span&gt;{{ latestAiMsg }}&lt;/span&gt;</span></span>
<span class="line"><span>            &lt;/section&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const latestAiMsg = ref&lt;string&gt;(&#39;&#39;)</span></span>
<span class="line"><span>const tempStrForLatestMsg = ref&lt;string&gt;(&#39;&#39;)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const printCharacter = (</span></span>
<span class="line"><span>  latestAiMsg: Ref&lt;UnwrapRef&lt;string&gt;&gt;,</span></span>
<span class="line"><span>  tempStrForLatestMsg: Ref&lt;UnwrapRef&lt;string&gt;&gt;</span></span>
<span class="line"><span>) =&gt; {</span></span>
<span class="line"><span>  if (latestAiMsg.value.length &gt;= tempStrForLatestMsg.value.length) {</span></span>
<span class="line"><span>    return</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    // latestAiMsg仍然比tempStrForLatestMsg短，进入下一次等待和递归</span></span>
<span class="line"><span>    setTimeout(() =&gt; {</span></span>
<span class="line"><span>      latestAiMsg.value += tempStrForLatestMsg.value.charAt(</span></span>
<span class="line"><span>        latestAiMsg.value.length</span></span>
<span class="line"><span>      )</span></span>
<span class="line"><span>      printCharacter(latestAiMsg, tempStrForLatestMsg)</span></span>
<span class="line"><span>    }, 20)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// function callback(timestamp: number) {</span></span>
<span class="line"><span>//   if (!lastTime) lastTime = timestamp // 初始化 lastTime</span></span>
<span class="line"><span>//   const progress = timestamp - lastTime // 计算距离上次调用的时间差</span></span>
<span class="line"><span>//</span></span>
<span class="line"><span>//   if (progress &gt;= 1000) {</span></span>
<span class="line"><span>//     console.log(&#39;这段代码每秒执行一次&#39;)</span></span>
<span class="line"><span>//     lastTime = timestamp // 更新 lastTime</span></span>
<span class="line"><span>//   }</span></span>
<span class="line"><span>//</span></span>
<span class="line"><span>//   requestAnimationFrame(callback) // 继续请求下一个动画帧</span></span>
<span class="line"><span>// }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>watch(dialogueList.value, (nv) =&gt; {</span></span>
<span class="line"><span>  if (nv.length === chatLen.value) {</span></span>
<span class="line"><span>    return</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  latestAiMsg.value = &#39;&#39;</span></span>
<span class="line"><span>  tempStrForLatestMsg.value = &#39;&#39;</span></span>
<span class="line"><span>  let newMsg = nv.slice(-1)[0]</span></span>
<span class="line"><span>  if (newMsg.type === &#39;ai&#39;) {</span></span>
<span class="line"><span>    tempStrForLatestMsg.value = newMsg.content</span></span>
<span class="line"><span>    printCharacter(latestAiMsg, tempStrForLatestMsg)</span></span>
<span class="line"><span>    chatLen.value = nv.length</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18)])])}const v=n(e,[["render",p]]),r=JSON.parse(`{"path":"/pages/5739e9/","title":"前端文字逐字显示","lang":"zh-CN","frontmatter":{"title":"前端文字逐字显示","date":"2025-04-30T17:17:38.000Z","permalink":"/pages/5739e9/","categories":["项目","AI项目"],"tags":[],"author":{"name":"aXing","link":"https://github.com/08163356"},"description":"場景，是AI gpt问答的时候，希望答案出现的时候逐字出现，而不是隐藏了，等全部返回之后再出现： 场景代码：是用数组去接受列表，然后v-for去显示的 需求：如何实现，先显示用户的问题，然后逐字显示GPT的答案 实现：js 实现逐字显示、延时函数模拟对话 无用：https://www.nuomiphp.com/github/zh/600bfa8f4f3...","head":[["meta",{"property":"og:url","content":"https://blog.axingit.top/pages/5739e9/"}],["meta",{"property":"og:site_name","content":"aXing's blog"}],["meta",{"property":"og:title","content":"前端文字逐字显示"}],["meta",{"property":"og:description","content":"場景，是AI gpt问答的时候，希望答案出现的时候逐字出现，而不是隐藏了，等全部返回之后再出现： 场景代码：是用数组去接受列表，然后v-for去显示的 需求：如何实现，先显示用户的问题，然后逐字显示GPT的答案 实现：js 实现逐字显示、延时函数模拟对话 无用：https://www.nuomiphp.com/github/zh/600bfa8f4f3..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"aXing"}],["meta",{"property":"article:published_time","content":"2025-04-30T17:17:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"前端文字逐字显示\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2025-04-30T17:17:38.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"aXing\\",\\"link\\":\\"https://github.com/08163356\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":4.34,"words":1302},"filePathRelative":"08.项目/01.AI项目/04.前端文字逐字显示.md","localizedDate":"2025年5月1日","autoDesc":true}`);export{v as comp,r as data};
