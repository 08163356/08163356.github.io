import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as i,o as e}from"./app-BBpi8vMY.js";const p={};function l(t,n){return e(),a("div",null,[...n[0]||(n[0]=[i(`<p>方法一：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>import json</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>with open(&#39;long_answer_example_subval.json&#39;, &#39;r&#39;) as input:</span></span>
<span class="line"><span>    a = json.load(input)#一个包含文件名字的字典</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>o = open(&#39;cmd.txt&#39;,&#39;w&#39;)#包含命令的输出文件，后期需要把.txt后缀改成.bat</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>for k, v in a.items():</span></span>
<span class="line"><span>    image_path = v[&quot;image_path&quot;]</span></span>
<span class="line"><span>    image_path = image_path.replace(&#39;/&#39;, &#39;\\\\&#39;)# windows下的路径格式</span></span>
<span class="line"><span>    cmd = &#39;copy D:\\\\Work\\\\content\\\\ST-VQA\\\\ST-VQA\\\\&#39;+image_path+&#39; D:\\\\Work\\\\lctog\\\\best_CAN\\\\example_pictures\\\\&#39; + image_path</span></span>
<span class="line"><span>&lt;!-- more --&gt;</span></span>
<span class="line"><span>    o.write(cmd)</span></span>
<span class="line"><span>    o.write(&#39;\\n&#39;)</span></span>
<span class="line"><span>o.write(&#39;PAUSE&#39;)</span></span>
<span class="line"><span>o.close()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法二：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@echo off</span></span>
<span class="line"><span></span></span>
<span class="line"><span>REM 小蓝</span></span>
<span class="line"><span>REM 12.04</span></span>
<span class="line"><span>REM 文件复制工具</span></span>
<span class="line"><span></span></span>
<span class="line"><span>REM ①源文件</span></span>
<span class="line"><span>set primitive=D:\\Users\\luxing3\\WebstormProjects\\TVS_HTML\\src\\assets\\img\\infoDisplay\\</span></span>
<span class="line"><span></span></span>
<span class="line"><span>REM ②目的文件夹</span></span>
<span class="line"><span>set destination=E:\\办公文件\\日本电视软件开发室\\资料汇总\\BUI资料\\ICON\\rom_bui\\rom_bui\\common\\</span></span>
<span class="line"><span></span></span>
<span class="line"><span>REM ③循环次数</span></span>
<span class="line"><span>set time=1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>REM 循环复制</span></span>
<span class="line"><span>for /l %%i in (1, 1, %time%) do copy /y %primitive% %destination%%%i</span></span>
<span class="line"><span></span></span>
<span class="line"><span>REM 展示过程</span></span>
<span class="line"><span>pause</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法三：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@echo off</span></span>
<span class="line"><span></span></span>
<span class="line"><span>REM 小蓝</span></span>
<span class="line"><span>REM 12.04</span></span>
<span class="line"><span>REM 文件复制工具</span></span>
<span class="line"><span>REM ①源文件</span></span>
<span class="line"><span>set primitive=%~dp0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>REM ②目的文件夹</span></span>
<span class="line"><span>set destination=D:\\Users\\luxing3\\WebstormProjects\\TVS_HTML\\src\\assets\\img\\infoDisplay\\</span></span>
<span class="line"><span>echo %primitive%</span></span>
<span class="line"><span>XCOPY %primitive%st_SD_480i_2160.png %destination%</span></span>
<span class="line"><span>XCOPY %primitive%st_SD_481p_2160.png %destination%</span></span>
<span class="line"><span>XCOPY %primitive%st_HD_1080i_2160.png %destination%</span></span>
<span class="line"><span>XCOPY %primitive%st_HD_720p_2160.png %destination%</span></span>
<span class="line"><span>XCOPY %primitive%st_4K_2160p_2160.png %destination%</span></span>
<span class="line"><span>XCOPY %primitive%st_8K_4320p_2160.png %destination%</span></span>
<span class="line"><span>XCOPY %primitive%st_nijuuonsei_2160.png %destination%</span></span>
<span class="line"><span>XCOPY %primitive%st_stereo_2160.png %destination%</span></span>
<span class="line"><span>XCOPY %primitive%st_surround_2160.png %destination%</span></span>
<span class="line"><span>XCOPY %primitive%st_moji_2160.png %destination%</span></span>
<span class="line"><span>XCOPY %primitive%st_singou_2160.png %destination%</span></span>
<span class="line"><span>XCOPY %primitive%st_DcopyX_2160.png %destination%</span></span>
<span class="line"><span>XCOPY %primitive%st_DcopyOK_2160.png %destination%</span></span>
<span class="line"><span>XCOPY %primitive%st_key_dubbing_2160.png %destination%</span></span>
<span class="line"><span>XCOPY %primitive%st_DoutX_2160.png %destination%</span></span>
<span class="line"><span>XCOPY %primitive%st_light_DcopyOK_2160.png %destination%</span></span>
<span class="line"><span>XCOPY %primitive%st_light_Dcopy1_2160.png %destination%</span></span>
<span class="line"><span>XCOPY %primitive%st_light_DcopyX_2160.png %destination%</span></span>
<span class="line"><span>REM 展示过程</span></span>
<span class="line"><span>XCOPY %primitive%st_light_DoutX_2160.png %destination%</span></span>
<span class="line"><span>pause</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://blog.csdn.net/chuangxin/article/details/104329792" target="_blank" rel="noopener noreferrer">参考文档</a></p>`,7)])])}const r=s(p,[["render",l]]),v=JSON.parse(`{"path":"/pages/f2f5a2/","title":"bat批量复制文件","lang":"zh-CN","frontmatter":{"title":"bat批量复制文件","date":"2024-01-29T04:23:42.000Z","permalink":"/pages/f2f5a2/","categories":["技术","操作系统","Window"],"tags":[],"author":{"name":"aXing","link":"https://github.com/08163356"},"description":"方法一： 方法二： 方法三： 参考文档","head":[["meta",{"property":"og:url","content":"https://blog.axingit.top/pages/f2f5a2/"}],["meta",{"property":"og:site_name","content":"aXing's blog"}],["meta",{"property":"og:title","content":"bat批量复制文件"}],["meta",{"property":"og:description","content":"方法一： 方法二： 方法三： 参考文档"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-02T15:55:47.000Z"}],["meta",{"property":"article:author","content":"aXing"}],["meta",{"property":"article:published_time","content":"2024-01-29T04:23:42.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T15:55:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"bat批量复制文件\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-29T04:23:42.000Z\\",\\"dateModified\\":\\"2024-02-02T15:55:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"aXing\\",\\"link\\":\\"https://github.com/08163356\\"}]}"]]},"headers":[],"git":{"createdTime":1706109170000,"updatedTime":1706889347000,"contributors":[{"name":"Lx08163356@163.com","username":"Lx08163356@163.com","email":"Lx08163356@163.com","commits":3,"url":"https://github.com/Lx08163356@163.com"}]},"readingTime":{"minutes":1.17,"words":351},"filePathRelative":"01.技术/12.操作系统/3.Window/2.bat批量复制文件.md","localizedDate":"2024年1月29日","autoDesc":true}`);export{r as comp,v as data};
