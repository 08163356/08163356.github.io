import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,a,o as i}from"./app-BBpi8vMY.js";const l={};function t(p,n){return i(),e("div",null,[...n[0]||(n[0]=[a(`<p>&#39; 32 位系统为 &#39; Declare Function GetCommandLine Lib &quot;kernel32&quot; Alias &quot;GetCommandLineW&quot; () As Long &#39; Declare Sub CopyMemory Lib &quot;kernel32&quot; Alias &quot;RtlMoveMemory&quot; (MyDest As Any, MySource As Any, ByVal MySize As Long) &#39; Declare Function lstrlenW Lib &quot;kernel32&quot; (ByVal lpString As Long) As Long &#39; 64 位系统为 Private Declare PtrSafe Function GetCommandLine Lib &quot;kernel32&quot; Alias &quot;GetCommandLineW&quot; () As LongPtr Private Declare PtrSafe Function lstrlenW Lib &quot;kernel32&quot; (ByVal lpString As LongPtr) As LongPtr Private Declare PtrSafe Sub CopyMemory Lib &quot;kernel32&quot; Alias &quot;RtlMoveMemory&quot; (MyDest As Any, MySource As Any, ByVal MySize As LongPtr)</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span> </span></span>
<span class="line"><span>&lt;!-- more --&gt;</span></span>
<span class="line"><span>Private Sub Workbook_Open()</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Dim CmdRaw  As LongPtr</span></span>
<span class="line"><span>    Dim CmdLine As String</span></span>
<span class="line"><span>    Dim Msg     As String</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>    CmdRaw = GetCommandLine</span></span>
<span class="line"><span>    CmdLine = CmdToSTr(CmdRaw)</span></span>
<span class="line"><span>    Dim paraPos%</span></span>
<span class="line"><span>    On Error Resume Next &#39; 这句是必须的，防止非bat打开，下面代码会报错</span></span>
<span class="line"><span>    paraPos = WorksheetFunction.Search(&quot;/batOpen&quot;, CmdLine, 1) &#39;检查打开方式</span></span>
<span class="line"><span>     If paraPos &gt; 0 Then</span></span>
<span class="line"><span>        MsgBox &quot;bat&quot;</span></span>
<span class="line"><span>        &#39;===============</span></span>
<span class="line"><span>         &#39;===============</span></span>
<span class="line"><span>    Else</span></span>
<span class="line"><span>        MsgBox &quot;man&quot;</span></span>
<span class="line"><span>    End If</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>End Sub</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>&#39; 被调用的子函数 , 用来将命令行参数转换成字符串类型:</span></span>
<span class="line"><span>Function CmdToSTr(Cmd As LongPtr) As String</span></span>
<span class="line"><span>    Dim Buffer() As Byte</span></span>
<span class="line"><span>    Dim StrLen   As LongPtr</span></span>
<span class="line"><span>    If Cmd Then</span></span>
<span class="line"><span>        StrLen = lstrlenW(Cmd) * 2</span></span>
<span class="line"><span>        If StrLen Then</span></span>
<span class="line"><span>            ReDim Buffer(0 To CInt(StrLen - 1)) As Byte</span></span>
<span class="line"><span>            CopyMemory Buffer(0), ByVal Cmd, StrLen</span></span>
<span class="line"><span>            CmdToSTr = Buffer</span></span>
<span class="line"><span>        End If</span></span>
<span class="line"><span>    End If</span></span>
<span class="line"><span>End Function</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)])])}const c=s(l,[["render",t]]),d=JSON.parse(`{"path":"/pages/870ef5/","title":"1105--bat打开VBA","lang":"zh-CN","frontmatter":{"title":"1105--bat打开VBA","date":"2024-01-29T04:23:56.000Z","permalink":"/pages/870ef5/","categories":["技术","脚本汇总"],"tags":[],"author":{"name":"aXing","link":"https://github.com/08163356"},"description":"' 32 位系统为 ' Declare Function GetCommandLine Lib \\"kernel32\\" Alias \\"GetCommandLineW\\" () As Long ' Declare Sub CopyMemory Lib \\"kernel32\\" Alias \\"RtlMoveMemory\\" (MyDest As Any, MySou...","head":[["meta",{"property":"og:url","content":"https://blog.axingit.top/pages/870ef5/"}],["meta",{"property":"og:site_name","content":"aXing's blog"}],["meta",{"property":"og:title","content":"1105--bat打开VBA"}],["meta",{"property":"og:description","content":"' 32 位系统为 ' Declare Function GetCommandLine Lib \\"kernel32\\" Alias \\"GetCommandLineW\\" () As Long ' Declare Sub CopyMemory Lib \\"kernel32\\" Alias \\"RtlMoveMemory\\" (MyDest As Any, MySou..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-02T15:55:47.000Z"}],["meta",{"property":"article:author","content":"aXing"}],["meta",{"property":"article:published_time","content":"2024-01-29T04:23:56.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T15:55:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1105--bat打开VBA\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-29T04:23:56.000Z\\",\\"dateModified\\":\\"2024-02-02T15:55:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"aXing\\",\\"link\\":\\"https://github.com/08163356\\"}]}"]]},"headers":[],"git":{"createdTime":1706339325000,"updatedTime":1706889347000,"contributors":[{"name":"Lx08163356@163.com","username":"Lx08163356@163.com","email":"Lx08163356@163.com","commits":3,"url":"https://github.com/Lx08163356@163.com"}]},"readingTime":{"minutes":0.87,"words":260},"filePathRelative":"01.技术/23.脚本汇总/11.1105--bat打开VBA.md","localizedDate":"2024年1月29日","autoDesc":true}`);export{c as comp,d as data};
