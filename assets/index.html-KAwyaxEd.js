import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as i,o as l}from"./app-BBpi8vMY.js";const e={};function p(t,s){return l(),a("div",null,[...s[0]||(s[0]=[i(`<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>正则表达式应用——实例应用</span></span>
<span class="line"><span>1.验证用户名和密码：（&quot;^[a-zA-Z]\\w{5,15}$&quot;）正确格式：&quot;(?!^\\\\d+$)(?!^[a-zA-Z]+$)(?!^[_#@]+$).{8,}&quot;组成,并且第一个字必须为字母6~16位；</span></span>
<span class="line"><span>2.验证电话号码：（&quot;^(\\d{3,4}-)\\d{7,8}$&quot;）正确格式：xxx/xxxx-xxxxxxx/xxxxxxxx；</span></span>
<span class="line"><span>3.验证手机号码：&quot;^1[3|4|5|7|8][0-9]\\\\d{8}$&quot;；</span></span>
<span class="line"><span>4.验证身份证号（15位或18位数字）：&quot;\\d{14}[[0-9],0-9xX]&quot;；</span></span>
<span class="line"><span>5.验证Email地址：(&quot;^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$&quot;)；</span></span>
<span class="line"><span>6.只能输入由数字和26个英文字母组成的字符串：(&quot;^[A-Za-z0-9]+$&quot;)；</span></span>
<span class="line"><span>7.整数或者小数：^[0-9]+([.][0-9]+){0,1}$</span></span>
<span class="line"><span>8.只能输入数字：&quot;^[0-9]*$&quot;。</span></span>
<span class="line"><span>9.只能输入n位的数字：&quot;^\\d{n}$&quot;。</span></span>
<span class="line"><span>10.只能输入至少n位的数字：&quot;^\\d{n,}$&quot;。</span></span>
<span class="line"><span>11.只能输入m~n位的数字：&quot;^\\d{m,n}$&quot;。</span></span>
<span class="line"><span>12.只能输入零和非零开头的数字：&quot;^(0|[1-9][0-9]*)$&quot;。</span></span>
<span class="line"><span>13.只能输入有两位小数的正实数：&quot;^[0-9]+(\\.[0-9]{2})?$&quot;。</span></span>
<span class="line"><span>&lt;!-- more --&gt;</span></span>
<span class="line"><span>14.只能输入有1~3位小数的正实数：&quot;^[0-9]+(\\.[0-9]{1,3})?$&quot;。</span></span>
<span class="line"><span>15.只能输入非零的正整数：&quot;^\\+?[1-9][0-9]*$&quot;。</span></span>
<span class="line"><span>16.只能输入非零的负整数：&quot;^\\-[1-9][0-9]*$&quot;。</span></span>
<span class="line"><span>17.只能输入长度为3的字符：&quot;^.{3}$&quot;。</span></span>
<span class="line"><span>18.只能输入由26个英文字母组成的字符串：&quot;^[A-Za-z]+$&quot;。</span></span>
<span class="line"><span>19.只能输入由26个大写英文字母组成的字符串：&quot;^[A-Z]+$&quot;。</span></span>
<span class="line"><span>20.只能输入由26个小写英文字母组成的字符串：&quot;^[a-z]+$&quot;。</span></span>
<span class="line"><span>21.验证是否含有^%&amp;&#39;,;=?$\\&quot;等字符：&quot;[%&amp;&#39;,;=?$\\\\^]+&quot;。</span></span>
<span class="line"><span>22.只能输入汉字：&quot;^[\\u4e00-\\u9fa5]{0,}$&quot;。</span></span>
<span class="line"><span>23.验证URL：&quot;^http://([\\w-]+\\.)+[\\w-]+(/[\\w-./?%&amp;=]*)?$&quot;。</span></span>
<span class="line"><span>24.验证一年的12个月：&quot;^(0?[1-9]|1[0-2])$&quot;正确格式为：&quot;01&quot;～&quot;09&quot;和&quot;10&quot;～&quot;12&quot;。</span></span>
<span class="line"><span>25.验证一个月的31天：&quot;^((0?[1-9])|((1|2)[0-9])|30|31)$&quot;正确格式为；&quot;01&quot;～&quot;09&quot;、&quot;10&quot;～&quot;29&quot;和“30”~“31”。</span></span>
<span class="line"><span>26.获取日期正则表达式：\\\\d{4}[年|\\-|\\.]\\d{\\1-\\12}[月|\\-|\\.]\\d{\\1-\\31}日?</span></span>
<span class="line"><span>评注：可用来匹配大多数年月日信息。</span></span>
<span class="line"><span>27.匹配双字节字符(包括汉字在内)：[^\\x00-\\xff]</span></span>
<span class="line"><span>评注：可以用来计算字符串的长度（一个双字节字符长度计2，ASCII字符计1）</span></span>
<span class="line"><span>28.匹配空白行的正则表达式：\\n\\s*\\r</span></span>
<span class="line"><span>评注：可以用来删除空白行</span></span>
<span class="line"><span>29.匹配HTML标记的正则表达式：&lt;(\\S*?)[^&gt;]*&gt;.*?&lt;/&gt;|&lt;.*? /&gt;</span></span>
<span class="line"><span>评注：网上流传的版本太糟糕，上面这个也仅仅能匹配部分，对于复杂的嵌套标记依旧无能为力</span></span>
<span class="line"><span>30.匹配首尾空白字符的正则表达式：^\\s*|\\s*$</span></span>
<span class="line"><span>评注：可以用来删除行首行尾的空白字符(包括空格、制表符、换页符等等)，非常有用的表达式</span></span>
<span class="line"><span>31.匹配网址URL的正则表达式：[a-zA-z]+://[^\\s]*</span></span>
<span class="line"><span>评注：网上流传的版本功能很有限，上面这个基本可以满足需求</span></span>
<span class="line"><span>32.匹配帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)：^[a-zA-Z][a-zA-Z0-9_]{4,15}$</span></span>
<span class="line"><span>评注：表单验证时很实用</span></span>
<span class="line"><span>33.匹配腾讯QQ号：[1-9][0-9]{4,}</span></span>
<span class="line"><span>评注：腾讯QQ号从10 000 开始</span></span>
<span class="line"><span>34.匹配中国邮政编码：[1-9]\\\\d{5}(?!\\d)</span></span>
<span class="line"><span>评注：中国邮政编码为6位数字</span></span>
<span class="line"><span>35.匹配ip地址：([1-9]{1,3}\\.){3}[1-9]。</span></span>
<span class="line"><span>评注：提取ip地址时有用</span></span>
<span class="line"><span>36.匹配MAC地址：([A-Fa-f0-9]{2}\\:){5}[A-Fa-f0-9]</span></span>
<span class="line"><span>Function IsRegu(Regu,s)</span></span>
<span class="line"><span>&#39;正则表达式校验</span></span>
<span class="line"><span>If Regu=&quot;&quot; Then</span></span>
<span class="line"><span>Exit Function</span></span>
<span class="line"><span>End if</span></span>
<span class="line"><span>Dim Re,Sre</span></span>
<span class="line"><span>Set Re = New RegExp</span></span>
<span class="line"><span>Re.Pattern = Regu</span></span>
<span class="line"><span>Sre = Re.Test(s)</span></span>
<span class="line"><span>If Sre = True Then</span></span>
<span class="line"><span>IsRegu = True</span></span>
<span class="line"><span>Else</span></span>
<span class="line"><span>IsRegu = False</span></span>
<span class="line"><span>End If</span></span>
<span class="line"><span>End Function</span></span>
<span class="line"><span>tmp=&quot; &quot;</span></span>
<span class="line"><span>if (IsRegu(&quot;\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*&quot;,tmp )) =false then</span></span>
<span class="line"><span>msgbox &quot;E-mail地址不合法 ！&quot;</span></span>
<span class="line"><span>FieldCheck#N=false</span></span>
<span class="line"><span>不同的语言（如PHP和JAVA）、相同语言的不同类库（如来自Sun的Java Regular Expression类库跟Apache Jakarta的正则表达式类库）间，用法会有所差别，在使用的时候，要注意这些差别。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">验证URL</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> IsValidUrl</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">str</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">){</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> regu</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;^(https?://)&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    +</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;?(([0-9a-z_!~*&#39;().&amp;=+$%-]+:)?[0-9a-z_!~*&#39;().&amp;=+$%-]+@)?&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    +</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;(([0-9]{1,3}</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\.</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">){3}[0-9]{1,3}&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    +</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;|&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    +</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;([0-9a-z_!~*&#39;()-]+</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\.</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">)*&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    +</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\.</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    +</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;[a-z]{2,6})&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    +</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;(:[0-9]{1,4})?&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    +</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;((/?)|&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    +</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;(/[0-9a-z_!~*&#39;().;?:@&amp;=+$,%#-]+)+/?)$&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> re</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> RegExp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">regu</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">!</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">re</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">test</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">str</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)){</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    	return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)])])}const c=n(e,[["render",p]]),h=JSON.parse(`{"path":"/pages/a44803/","title":"正则表达式实例","lang":"zh-CN","frontmatter":{"title":"正则表达式实例","date":"2024-01-29T04:23:44.000Z","permalink":"/pages/a44803/","categories":["技术","正则表达式"],"tags":[],"author":{"name":"aXing","link":"https://github.com/08163356"},"head":[["meta",{"property":"og:url","content":"https://blog.axingit.top/pages/a44803/"}],["meta",{"property":"og:site_name","content":"aXing's blog"}],["meta",{"property":"og:title","content":"正则表达式实例"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-02T15:55:47.000Z"}],["meta",{"property":"article:author","content":"aXing"}],["meta",{"property":"article:published_time","content":"2024-01-29T04:23:44.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T15:55:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"正则表达式实例\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-29T04:23:44.000Z\\",\\"dateModified\\":\\"2024-02-02T15:55:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"aXing\\",\\"link\\":\\"https://github.com/08163356\\"}]}"]]},"headers":[],"git":{"createdTime":1706109170000,"updatedTime":1706889347000,"contributors":[{"name":"Lx08163356@163.com","username":"Lx08163356@163.com","email":"Lx08163356@163.com","commits":4,"url":"https://github.com/Lx08163356@163.com"}]},"readingTime":{"minutes":3.7,"words":1110},"filePathRelative":"01.技术/17.正则表达式/5.正则表达式实例.md","localizedDate":"2024年1月29日"}`);export{c as comp,h as data};
