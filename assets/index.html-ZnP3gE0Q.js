import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as i,o as l}from"./app-BBpi8vMY.js";const e={};function p(t,s){return l(),a("div",null,[...s[0]||(s[0]=[i(`<div class="language-vb line-numbers-mode" data-highlighter="shiki" data-ext="vb" data-title="vb" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&#39;open the .xls file Option Explicit  </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Const </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">MSEXCEL_FILENAME</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Excel文件路径&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Sub</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> VBMain</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()        </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    &#39;加快运行速度，暂停表格刷新和禁止弹出框。 </span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    Application</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ScreenUpdating</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> False</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    Application</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">DisplayAlerts</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> False</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    &#39;遍历每个sheet              </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    Dim</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> xlApp</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> WorkBooks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> Sheet</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    Set </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">xlApp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = WSH.</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">CreateObject</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Excel.Application&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;!--</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> more</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        xlApp.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Visible</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> False</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        Set </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">WorkBooks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = xlApp.Workbooks.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Open</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">MSEXCEL_FILENAME</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)   </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            Set </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Sheet</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = WorkBooks.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Worksheets</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)  </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                &#39;打开第一个工作表  </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                &#39; 也可以打开上次保存时打开的活动工作表  </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                &#39; Set Sheet = WorkBooks.ActiveSheet  打开活动的工作表   </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                WorkBooks.Close </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            end sub    </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                &#39;select data </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">            Range</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;G:G&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            Selection.AutoFilter    </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                ActiveSheet.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Range</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;$G$1:$G$200&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).AutoFilter Field:=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> Criteria1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;fail&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">   </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                &#39;copy and paste data to other sheet    </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                ActiveSheet.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Range</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;$G$1:$G$200&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).AutoFilter Field:=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> Criteria1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;电声工程师&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">                Rows</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2:2&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                    Selection.Copy    </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">                    Sheets</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Sheet1&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">                        Rows</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;1:1&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).EntireRow.AutoFit    </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">                        Rows</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;1:1&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                            ActiveSheet.Paste </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                            </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                            &#39;获取当前sheet页的名称  </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">                            fname</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = ActiveSheet.Name     </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                            </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                            &#39;get the end of excel </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                            Sheet.UsedRange.Rows.Count或者Sheet.UsedRange.Columns.Count</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">                            Sheets</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;yue&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).UsedRange.Rows.Count</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                            &#39;choose entire columns</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                            Selection.EntireColumn.</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Select</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                                 Selection.EntireRow.</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Select</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>activecell.address&#39;这是当前单元格地址 selection.offset(1, 0).select&#39;这是向下跳1格 selection.offset(-1, 0).select&#39;这是向上跳1格 selection.offset(0, -1).select&#39;这是向左跳1格 selection.offset(0, 1).select&#39;这是向右跳1格</p><p>1.搜索表中的内容并且获得位置</p><p>1.缺少遍历所有sheet</p><p>2.将参数设置成变量</p><div class="language-vb line-numbers-mode" data-highlighter="shiki" data-ext="vb" data-title="vb" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Sub </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">全套服务连续版本()</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&#39; 全套服务连续版本 宏</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&#39;创建新sheet 宏</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    dim</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> resultSheetName </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">as </span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">String</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    dim</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> searchResultLocation </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">as </span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">string</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    dim</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> sheetCopyRange </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">as </span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    dim</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> sheetPasteRange </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">as </span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    dim</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> currentSheetName </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">as </span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">string</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    dim</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> colmunsCount </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">As </span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">Integer</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    dim</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> rowsCount </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">As </span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">Integer</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    &#39;新建一个sheet存放失败项</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Sheets.</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">Add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> After:=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ActiveSheet</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    Sheets</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Sheet3&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Select</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    Sheets</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Sheet3&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;failResult&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        &#39;begin to lookup</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        &#39;查找Result行并获取result行的位置</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Cells.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Find</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">What</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Result&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> After</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ActiveCell</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> LookIn</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">xlFormulas</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> LookAt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> _</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        :=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">xlPart</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> SearchOrder</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">xlByRows</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> SearchDirection</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">xlNext</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> MatchCase</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> _</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">        False</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> MatchByte</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">False</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> SearchFormat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">False</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).Activate</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    	searchResultLocation</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = ActiveCell.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Address</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        CONSTCOLUMNS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">Left</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">searchResultLocation</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) + </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;800&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        Selection.EntireColumn.</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Select</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">            &#39;search reasult and get the location，filter the Fail data</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    	Selection.AutoFilter</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        ActiveSheet.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Range</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">searchResultLocation</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">End</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">xlDown</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).AutoFilter Field:=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> Criteria1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Fail&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    &#39;选择有效数据</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    	ActiveSheet.Cells.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">SpecialCells</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">xlCellTypeConstants</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Select</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        &#39;复制粘贴到新的表格</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        Selection.Copy</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    	Sheets</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;failResult&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Select</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        Range</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;A65536&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">End</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Row</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> + </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">		ActiveSheet.Paste</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    	Range</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;A14&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Select</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Application</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">CutCopyMode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> False</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        ActiveCell.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">FormulaR1C1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;AVCVBS&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        Selection.AutoFill Destination:=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Range</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;A14:A24&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">),</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> Type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">xlFillDefault</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        Range</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;A14:A24&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Select</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        Range</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;F20&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Select</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">End Sub</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                                </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                                </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                                </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                                </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                                </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                                &#39;get cell&#39;s address</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">	F_Max_Range</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = ActiveCell.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Address</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()           </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&#39;获得单元格的地址，形式为$A$1</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">       F_Max_Range</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = ActiveCell.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Address</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)       </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&#39;获得单元格的地址，形式为A1</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">   F_Max_Range</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = ActiveCell.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Address</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)       </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&#39;获得单元格的地址，形式为$A1</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">   F_Max_Range</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = ActiveCell.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Address</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)       </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&#39;获得单元格的地址，形式为A$1</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">   F_Max_Range</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = ActiveCell.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Address</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)       </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&#39;获得单元格的地址，形式为$A$1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Dim CONSTCOLUMNS As String</p><p>&#39; Dim searchResultLocation As String</p><p>Cells.Find(What:=&quot;Result&quot;, After:=ActiveCell, LookIn:=xlFormulas, LookAt _ :=xlPart, SearchOrder:=xlByRows, SearchDirection:=xlNext, MatchCase:= _ False, MatchByte:=False, SearchFormat:=False).Activate searchResultLocation = ActiveCell.Address(0, 0) CONSTCOLUMNS = Left(searchResultLocation, 1) + &quot;1000&quot; Selection.EntireColumn.Select ActiveSheet.Colmuns(searchResultLocation, CONSTCOLUMNS).Select</p><h4 id="获取最后一行" tabindex="-1"><a class="header-anchor" href="#获取最后一行"><span>获取最后一行</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> &#39;为最后一个单元格所在行 , 即最后一行,该函数表示Sheet表的使用区域中的最后一行</span></span>
<span class="line"><span>    nLastUseRow = Cells.SpecialCells(xlCellTypeLastCell).Row</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &#39; 得到A列单元格的最后一行</span></span>
<span class="line"><span>    strCell = &quot;A&quot; + CStr(nLastUseRow + 1)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ActiveCell.Address(0, 0) &amp; Left(searchResultLocation, 1) + &quot;800&quot;</p><h1 id="excel表格不是从第一行开始的-也不是隐藏" tabindex="-1"><a class="header-anchor" href="#excel表格不是从第一行开始的-也不是隐藏"><span>excel表格不是从第一行开始的，也不是隐藏</span></a></h1><p>冻结窗口了</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Sub SetCursorToCell(iRow As Integer, iCol As Integer)</span></span>
<span class="line"><span>    Dim pt As POINTAPI</span></span>
<span class="line"><span>    Dim iTRow As Integer</span></span>
<span class="line"><span>    Dim iTCol As Integer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    iTRow = ActiveWindow.VisibleRange.Rows.Count</span></span>
<span class="line"><span>    iTCol = ActiveWindow.VisibleRange.Columns.Count</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    If iRow &lt; ActiveWindow.VisibleRange.Row Or iRow &gt; ActiveWindow.VisibleRange.Row + iTRow - 1 Or iCol &lt; ActiveWindow.VisibleRange.Column Or iCol &gt; ActiveWindow.VisibleRange.Column + iTCol - 1 Then</span></span>
<span class="line"><span>        Cells(iRow, iCol).Select</span></span>
<span class="line"><span>    End If</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    pt.x = ActiveWindow.PointsToScreenPixelsX(0) + _</span></span>
<span class="line"><span>        Point2PixelX(Cells(iRow, iCol).Left)</span></span>
<span class="line"><span>    pt.y = ActiveWindow.PointsToScreenPixelsY(0) + _</span></span>
<span class="line"><span>        Point2PixelX(Cells(iRow, iCol).Top)</span></span>
<span class="line"><span>    SetCursorPos pt.x, pt.y</span></span>
<span class="line"><span>End Sub</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Direction XlDirection 类型，必需。所要移动的方向。</p><p>XlDirection 可为 XlDirection 常量之一。</p><p>xlDown</p><p>xlToRight</p><p>xlToLeft</p><p>xlUp</p><p>二、End(xlUp).Row示例</p><p>本示例选定包含单元格 B4 的区域中 B 列顶端的单元格。</p><p>Range(&quot;B4&quot;).End(xlUp).Select</p><p>本示例选定包含单元格 B4 的区域中第 4 行尾端的单元格。</p><p>Range(&quot;B4&quot;).End(xlToRight).Select</p><h1 id="版本1-0" tabindex="-1"><a class="header-anchor" href="#版本1-0"><span>版本1.0</span></a></h1><div class="language-vb line-numbers-mode" data-highlighter="shiki" data-ext="vb" data-title="vb" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&#39;20201104 1521V1.0  </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&#39;能对单个表进行操作，缺少遍历</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&#39;多重区域选定会出bug</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&#39;优化：可以，没能插入表名称</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&#39; test2 宏</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Dim</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> resultSheetName </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">As </span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">String</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    Dim</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> searchResultLocation </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">As </span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">String</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    Dim</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> sheetCopyRange </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">As </span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">String</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    Dim</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> sheetPasteRange </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">As </span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">String</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    Dim</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> currentSheetName </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">As </span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">String</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    Dim</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> colmunsCount </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">As </span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">Integer</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    Dim</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> rowsCount </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">As </span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">Integer</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    &#39;新建一个sheet存放失败项</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">   </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">   Cells.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Find</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">What</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Result&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> After</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ActiveCell</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> LookIn</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">xlFormulas</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> LookAt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> _</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        :=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">xlPart</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> SearchOrder</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">xlByRows</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> SearchDirection</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">xlNext</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> MatchCase</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> _</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">        False</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> MatchByte</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">False</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> SearchFormat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">False</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).Activate</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          searchResultLocation</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = ActiveCell.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Address</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        CONSTCOLUMNS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">Left</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">searchResultLocation</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) + </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;800&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        Selection.EntireColumn.</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Select</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    &#39;search reasult and get the location</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Selection.AutoFilter</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    ActiveSheet.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Range</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">searchResultLocation</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">End</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">xlDown</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).AutoFilter Field:=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> Criteria1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Fail&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">         ActiveSheet.Cells.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">SpecialCells</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">xlCellTypeConstants</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Select</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">         </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">         Selection.Copy</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">         Sheets</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;failResult&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Select</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">         </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">         Range</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;a&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Cells</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(Rows.Count, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">End</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">xlUp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Row</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> + </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Select</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">         ActiveSheet.Paste</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>版本2.0</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&#39;添加注释</span></span>
<span class="line"><span>Sub test2()</span></span>
<span class="line"><span>&#39;</span></span>
<span class="line"><span>    Application.ScreenUpdating = False</span></span>
<span class="line"><span>    Application.DisplayAlerts = False</span></span>
<span class="line"><span>&#39; test2 宏</span></span>
<span class="line"><span>Dim resultSheetName As String</span></span>
<span class="line"><span>    Dim searchResultLocation As String</span></span>
<span class="line"><span>    Dim sheetCopyRange As String</span></span>
<span class="line"><span>    Dim sheetPasteRange As String</span></span>
<span class="line"><span>    Dim currentSheetName As String</span></span>
<span class="line"><span>    Dim colmunsCount As Integer</span></span>
<span class="line"><span>    Dim rowsCount As Integer</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    &#39;新建一个sheet存放失败项</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>        &#39;获取表名字</span></span>
<span class="line"><span>        fname = ActiveSheet.Name</span></span>
<span class="line"><span>        &#39;搜索并确定result位置</span></span>
<span class="line"><span>         Cells.Find(What:=&quot;Result&quot;, After:=ActiveCell, LookIn:=xlFormulas, LookAt _</span></span>
<span class="line"><span>        :=xlPart, SearchOrder:=xlByRows, SearchDirection:=xlNext, MatchCase:= _</span></span>
<span class="line"><span>        False, MatchByte:=False, SearchFormat:=False).Activate</span></span>
<span class="line"><span>          searchResultLocation = ActiveCell.Address(0, 0)</span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>        CONSTCOLUMNS = Left(searchResultLocation, 1) + &quot;800&quot;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        Selection.EntireColumn.Select</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>    &#39;对选中数据进行筛选</span></span>
<span class="line"><span>    Selection.AutoFilter</span></span>
<span class="line"><span>    ActiveSheet.Range(searchResultLocation).End(xlDown).AutoFilter Field:=1, Criteria1:=&quot;Fail&quot;</span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>         ActiveSheet.Cells.SpecialCells(xlCellTypeConstants).Select</span></span>
<span class="line"><span>         &#39;复制粘贴到新的表</span></span>
<span class="line"><span>         Selection.Copy</span></span>
<span class="line"><span>         Sheets(&quot;failResult&quot;).Select</span></span>
<span class="line"><span>         &#39;插入新得行再复制粘贴</span></span>
<span class="line"><span>         Range(&quot;a&quot; &amp; Cells(Rows.Count, 1).End(xlUp).Row + 1).Select</span></span>
<span class="line"><span>         ActiveSheet.Paste</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>          &#39;选择有效数据</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>End Sub</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="版本3-0" tabindex="-1"><a class="header-anchor" href="#版本3-0"><span>版本3.0</span></a></h3><p>能够遍历</p><p>不能写名字</p><p>能够复制</p><p>不能重复选</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Sub 宏1()</span></span>
<span class="line"><span>&#39;添加注释</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>&#39; test2 宏</span></span>
<span class="line"><span>&#39;Dim sheetCount As Integer</span></span>
<span class="line"><span>Dim resultSheetName As String</span></span>
<span class="line"><span>    Dim searchResultLocation As String</span></span>
<span class="line"><span>    Dim sheetCopyRange As String</span></span>
<span class="line"><span>    Dim sheetPasteRange As String</span></span>
<span class="line"><span>    Dim currentSheetName As Excel.Worksheet</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Dim colmunsCount As Integer</span></span>
<span class="line"><span>    Dim rowsCount As Integer</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    &#39;新建一个sheet存放失败项</span></span>
<span class="line"><span>   &#39;获取脚本数量</span></span>
<span class="line"><span>   &#39; sheetCount = Worksheets.Count</span></span>
<span class="line"><span>    For Each currentSheetName In ThisWorkbook.Worksheets</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        &#39;获取表名字</span></span>
<span class="line"><span>       &#39; fname = ActiveSheet.Name</span></span>
<span class="line"><span>        &#39;搜索并确定result位置</span></span>
<span class="line"><span>         activesheet.Cells.Find(What:=&quot;Result&quot;, After:=ActiveCell, LookIn:=xlFormulas, LookAt _</span></span>
<span class="line"><span>        :=xlPart, SearchOrder:=xlByRows, SearchDirection:=xlNext, MatchCase:= _</span></span>
<span class="line"><span>        False, MatchByte:=False, SearchFormat:=False).Activate</span></span>
<span class="line"><span>          searchResultLocation = ActiveCell.Address(0, 0)</span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>        CONSTCOLUMNS = Left(searchResultLocation, 1) + &quot;800&quot;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        Selection.EntireColumn.Select</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>    &#39;对选中数据进行筛选</span></span>
<span class="line"><span>    Selection.AutoFilter</span></span>
<span class="line"><span>    ActiveSheet.Range(searchResultLocation).End(xlDown).AutoFilter Field:=1, Criteria1:=&quot;Fail&quot;</span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>         ActiveSheet.Cells.SpecialCells(xlCellTypeConstants).Select</span></span>
<span class="line"><span>         &#39;复制粘贴到新的表</span></span>
<span class="line"><span>         Selection.Copy</span></span>
<span class="line"><span>         Sheets(&quot;failResult&quot;).Select</span></span>
<span class="line"><span>         &#39;到最后一格空格处复制粘贴防止覆盖</span></span>
<span class="line"><span>         Range(&quot;a&quot; &amp; Cells(Rows.Count, 1).End(xlUp).Row + 1).Select</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         &#39;Rows(ActiveSheet.UsedRange.Rows.Count).Insert</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         ActiveSheet.Paste</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         colmunsCount = ActiveSheet.UsedRange.Columns.Count</span></span>
<span class="line"><span>         rowsCount = ActiveSheet.UsedRange.Rows.Count</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         ActiveSheet(failResult).Range().Values = currentSheetName</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>          &#39;选择有效数据</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>Next</span></span>
<span class="line"><span>End Sub</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="版本4-0" tabindex="-1"><a class="header-anchor" href="#版本4-0"><span>版本4.0</span></a></h4><p>需要判断是否有fail项目，如果没有就跳出</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>Sub 宏1()</span></span>
<span class="line"><span>&#39;添加注释</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>&#39; test2 宏</span></span>
<span class="line"><span>&#39;Dim sheetCount As Integer</span></span>
<span class="line"><span>Dim resultSheetName As String</span></span>
<span class="line"><span>    Dim searchResultLocation As String</span></span>
<span class="line"><span>    Dim sheetCopyRange As String</span></span>
<span class="line"><span>    Dim sheetPasteRange As String</span></span>
<span class="line"><span>    Dim currentSheetName As Excel.Worksheet</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Dim colmunsCount As Integer</span></span>
<span class="line"><span>    Dim rowsCount As Integer</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    &#39;新建一个sheet存放失败项</span></span>
<span class="line"><span>   &#39;获取脚本数量</span></span>
<span class="line"><span>   &#39; sheetCount = Worksheets.Count</span></span>
<span class="line"><span>    For Each currentSheetName In ThisWorkbook.Worksheets</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>        MsgBox currentSheetName.Name</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        &#39;获取表名字</span></span>
<span class="line"><span>       &#39; fname = ActiveSheet.Name</span></span>
<span class="line"><span>        &#39;搜索并确定result位置</span></span>
<span class="line"><span>         ActiveSheet.Cells.Find(What:=&quot;Result&quot;, After:=ActiveCell, LookIn:=xlFormulas, LookAt _</span></span>
<span class="line"><span>        :=xlPart, SearchOrder:=xlByRows, SearchDirection:=xlNext, MatchCase:= _</span></span>
<span class="line"><span>        False, MatchByte:=False, SearchFormat:=False).Activate</span></span>
<span class="line"><span>          searchResultLocation = ActiveCell.Address(0, 0)</span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>        CONSTCOLUMNS = Left(searchResultLocation, 1) + &quot;800&quot;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        Selection.EntireColumn.Select</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>    &#39;对选中数据进行筛选</span></span>
<span class="line"><span>    Selection.AutoFilter</span></span>
<span class="line"><span>    ActiveSheet.Range(searchResultLocation).End(xlDown).AutoFilter Field:=1, Criteria1:=&quot;Fail&quot;</span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>         ActiveSheet.Cells.SpecialCells(xlCellTypeConstants).Select</span></span>
<span class="line"><span>         &#39;复制粘贴到新的表</span></span>
<span class="line"><span>         Selection.Copy</span></span>
<span class="line"><span>         Sheets(&quot;failResult&quot;).Select</span></span>
<span class="line"><span>         &#39;到最后一格空格处复制粘贴防止覆盖</span></span>
<span class="line"><span>         Range(&quot;a&quot; &amp; Cells(Rows.Count, 1).End(xlUp).Row + 1).Select</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         &#39;Rows(ActiveSheet.UsedRange.Rows.Count).Insert</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         ActiveSheet.Paste</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         &#39;colmunsCount = ActiveSheet.UsedRange.Columns.Count</span></span>
<span class="line"><span>         &#39;rowsCount = ActiveSheet.UsedRange.Rows.Count</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         &#39;ActiveSheet(failResult).Range().Values = currentSheetName</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>          &#39;选择有效数据</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>Next</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>End Sub</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="版本5-0" tabindex="-1"><a class="header-anchor" href="#版本5-0"><span>版本5.0</span></a></h4><div class="language-vb line-numbers-mode" data-highlighter="shiki" data-ext="vb" data-title="vb" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Sub</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> failResult</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&#39;添加注释</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&#39; test2 宏</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&#39;Dim sheetCount As Integer</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Dim</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> resultSheetName </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">As </span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">String</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    Dim</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> searchResultLocation </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">As </span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">String</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    Dim</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> sheetCopyRange </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">As </span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">String</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    Dim</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> sheetPasteRange </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">As </span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">String</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    Dim</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> currentSheetName </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">As </span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">Excel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.Worksheet</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    Dim</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> colmunsCount </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">As </span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">Integer</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    Dim</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> rowsCount </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">As </span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">Integer</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        &#39;判断是否存在failResult文件夹</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    For</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> Each</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> currentSheetName In ThisWorkbook.Worksheets</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        If</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> currentSheetName.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;failResult&quot;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> Then</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            Exit For</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        Else</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            Sheets.</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">Add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> After:=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ActiveSheet</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">            Sheets</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Sheet1&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Select</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">            Sheets</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Sheet1&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;failResult&quot;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        End If</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    Next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> currentSheetName</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    &#39;新建一个sheet存放失败项</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   &#39;获取脚本数量</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   &#39; sheetCount = Worksheets.CountNew</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    For</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> Each</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> currentSheetName In ThisWorkbook.Worksheets</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        </span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">        MsgBox</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> currentSheetName.Name</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        &#39;获取表名字</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">       &#39; fname = ActiveSheet.Name</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        &#39;搜索并确定result位置</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">         ActiveSheet.Cells.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Find</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">What</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Result&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> After</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ActiveCell</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> LookIn</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">xlFormulas</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> LookAt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> _</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        :=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">xlPart</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> SearchOrder</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">xlByRows</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> SearchDirection</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">xlNext</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> MatchCase</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> _</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">        False</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> MatchByte</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">False</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> SearchFormat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">False</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).Activate</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          searchResultLocation</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = ActiveCell.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Address</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        CONSTCOLUMNS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">Left</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">searchResultLocation</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) + </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;800&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        Selection.EntireColumn.</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Select</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    &#39;对选中数据进行筛选</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Selection.AutoFilter</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    ActiveSheet.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Range</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">searchResultLocation</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">End</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">xlDown</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).AutoFilter Field:=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> Criteria1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Fail&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">         ActiveSheet.Cells.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">SpecialCells</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">xlCellTypeConstants</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Select</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">         &#39;复制粘贴到新的表</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">         Selection.Copy</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">         Sheets</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;failResult&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Select</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">         &#39;到最后一格空格处复制粘贴防止覆盖</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">         Range</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;a&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Cells</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(Rows.Count, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">End</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">xlUp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Row</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> + </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Select</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">         </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">         &#39;Rows(ActiveSheet.UsedRange.Rows.Count).Insert</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">         </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">         ActiveSheet.Paste</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">         </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">         &#39;colmunsCount = ActiveSheet.UsedRange.Columns.Count</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">         &#39;rowsCount = ActiveSheet.UsedRange.Rows.Count</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">         </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">         </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">         &#39;ActiveSheet(failResult).Range().Values = currentSheetName</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">         </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">         </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          &#39;选择有效数据</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Next</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">End Sub</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>版本V6.0</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Sub 脚本命令()</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;添加注释</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>&#39; test2 宏</span></span>
<span class="line"><span>&#39;Dim sheetCount As Integer</span></span>
<span class="line"><span>Dim resultSheetName As String</span></span>
<span class="line"><span>    Dim searchResultLocation As String</span></span>
<span class="line"><span>    Dim sheetCopyRange As String</span></span>
<span class="line"><span>    Dim sheetPasteRange As String</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Dim judge, currentSheetName As Excel.Worksheet, s$</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Dim colmunsCount As Integer</span></span>
<span class="line"><span>    Dim rowsCount As Integer</span></span>
<span class="line"><span>        &#39;判断是否存在failResult文件夹</span></span>
<span class="line"><span>        s = &quot;failResult&quot;</span></span>
<span class="line"><span>        Set judge = CreateObject(&quot;Scripting.Dictionary&quot;)</span></span>
<span class="line"><span>        For Each currentResultName In Worksheets</span></span>
<span class="line"><span>        judge(currentResultName.Name) = &quot;&quot;</span></span>
<span class="line"><span>        Next</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        If judge.exists(s) Then</span></span>
<span class="line"><span>        GoTo begin</span></span>
<span class="line"><span>        Else</span></span>
<span class="line"><span>            Sheets.Add After:=ActiveSheet</span></span>
<span class="line"><span>            Sheets(&quot;Sheet1&quot;).Select</span></span>
<span class="line"><span>            Sheets(&quot;Sheet1&quot;).Name = &quot;failResult&quot;</span></span>
<span class="line"><span>        End If</span></span>
<span class="line"><span>        Set judge = Nothing</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>begin:</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    &#39;新建一个sheet存放失败项</span></span>
<span class="line"><span>   &#39;获取脚本数量</span></span>
<span class="line"><span>   &#39; sheetCount = Worksheets.CountNew</span></span>
<span class="line"><span>    For Each currentSheetName In ThisWorkbook.Worksheets</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span></span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        MsgBox currentSheetName.Name</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        &#39;获取表名字</span></span>
<span class="line"><span>       &#39; fname = ActiveSheet.Name</span></span>
<span class="line"><span>        &#39;搜索并确定result位置</span></span>
<span class="line"><span>         ActiveSheet.Cells.Find(What:=&quot;Result&quot;, After:=ActiveCell, LookIn:=xlFormulas, LookAt _</span></span>
<span class="line"><span>        :=xlPart, SearchOrder:=xlByRows, SearchDirection:=xlNext, MatchCase:= _</span></span>
<span class="line"><span>        False, MatchByte:=False, SearchFormat:=False).Activate</span></span>
<span class="line"><span>          searchResultLocation = ActiveCell.Address(0, 0)</span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>        CONSTCOLUMNS = Left(searchResultLocation, 1) + &quot;800&quot;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        Selection.EntireColumn.Select</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>    &#39;对选中数据进行筛选</span></span>
<span class="line"><span>    Selection.AutoFilter</span></span>
<span class="line"><span>    ActiveSheet.Range(searchResultLocation).End(xlDown).AutoFilter Field:=1, Criteria1:=&quot;Fail&quot;</span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>         ActiveSheet.Cells.SpecialCells(xlCellTypeConstants).Select</span></span>
<span class="line"><span>         &#39;复制粘贴到新的表</span></span>
<span class="line"><span>         Selection.Copy</span></span>
<span class="line"><span>         Sheets(&quot;failResult&quot;).Select</span></span>
<span class="line"><span>         &#39;到最后一格空格处复制粘贴防止覆盖</span></span>
<span class="line"><span>         Range(&quot;a&quot; &amp; Cells(Rows.Count, 1).End(xlUp).Row + 1).Select</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         &#39;Rows(ActiveSheet.UsedRange.Rows.Count).Insert</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         ActiveSheet.Paste</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         &#39;colmunsCount = ActiveSheet.UsedRange.Columns.Count</span></span>
<span class="line"><span>         &#39;rowsCount = ActiveSheet.UsedRange.Rows.Count</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         &#39;ActiveSheet(failResult).Range().Values = currentSheetName</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>          &#39;选择有效数据</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>Next</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;</span></span>
<span class="line"><span>End Sub</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>版本v7.0</p><div class="language-vb line-numbers-mode" data-highlighter="shiki" data-ext="vb" data-title="vb" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Sub </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">脚本命令()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&#39;添加注释</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Application</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">DisplayAlerts</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> False</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&#39; test2 宏</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&#39;Dim sheetCount As Integer</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Dim</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> resultSheetName </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">As </span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">String</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    Dim</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> searchResultLocation </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">As </span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">String</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    Dim</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> sheetCopyRange </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">As </span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">String</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    Dim</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> sheetPasteRange </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">As </span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">String</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    Dim</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> judge</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> currentSheetName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> As </span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">Excel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.Worksheet,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">$</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    Dim</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> colmunsCount </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">As </span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">Integer</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    Dim</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> rowsCount </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">As </span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;">Integer</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        &#39;判断是否存在failResult文件夹</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;failResult&quot;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        Set </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">judge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">CreateObject</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Scripting.Dictionary&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        For</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> Each</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> currentResultName In Worksheets</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        judge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(currentResultName.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        Next</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        If</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> judge.</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">exists</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Then</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        GoTo begin</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        Else</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            Sheets.</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">Add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> After:=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ActiveSheet</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">            Sheets</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Sheet1&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Select</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">            Sheets</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Sheet1&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;failResult&quot;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        End If</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        Set </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">judge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> Nothing</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">begin:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    &#39;新建一个sheet存放失败项</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   &#39;获取脚本数量</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   &#39; sheetCount = Worksheets.CountNew</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    For</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> Each</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> currentSheetName In ThisWorkbook.Worksheets</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        If</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> currentSheetName.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;failResult&quot;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> Then</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> GoTo nexttime</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        End If</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        </span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">        MsgBox</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> currentSheetName.Name</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        &#39;获取表名字</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">       &#39; fname = ActiveSheet.Name</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        &#39;搜索并确定result位置</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">         ActiveSheet.Cells.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Find</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">What</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Result&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> After</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ActiveCell</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> LookIn</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">xlFormulas</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> LookAt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> _</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        :=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">xlPart</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> SearchOrder</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">xlByRows</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> SearchDirection</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">xlNext</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> MatchCase</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> _</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">        False</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> MatchByte</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">False</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> SearchFormat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">False</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).Activate</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          searchResultLocation</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = ActiveCell.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Address</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        &#39;CONSTCOLUMNS = Left(searchResultLocation, 1) + &quot;800&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        Selection.EntireColumn.</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Select</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    &#39;对选中数据进行筛选</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Selection.AutoFilter</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    ActiveSheet.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Range</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">searchResultLocation</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">End</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">xlDown</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).AutoFilter Field:=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> Criteria1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Fail&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">         ActiveSheet.Cells.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">SpecialCells</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">xlCellTypeConstants</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Select</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">         &#39;复制粘贴到新的表</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">         Selection.Copy</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">         Sheets</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;failResult&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Select</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">         &#39;到最后一格空格处复制粘贴防止覆盖</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">         Range</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;a&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Cells</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(Rows.Count, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">End</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">xlUp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Row</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> + </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Select</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">         </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">         &#39;Rows(ActiveSheet.UsedRange.Rows.Count).Insert</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">         </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">         ActiveSheet.Paste</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">         Range</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;a&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Cells</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(Rows.Count, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">End</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">xlUp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Row</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> + </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Select</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">         </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">         &#39;colmunsCount = ActiveSheet.UsedRange.Columns.Count</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">         &#39;rowsCount = ActiveSheet.UsedRange.Rows.Count</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">         </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">         </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">         &#39;ActiveSheet(failResult).Range().Values = currentSheetName</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">         </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">         </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          &#39;选择有效数据</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">nexttime:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Next</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">End Sub</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>版本V9.0</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Sub 脚本命令()</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;添加注释</span></span>
<span class="line"><span>Application.ScreenUpdating = False</span></span>
<span class="line"><span>&#39;</span></span>
<span class="line"><span>Application.DisplayAlerts = False</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>&#39; test2 宏</span></span>
<span class="line"><span>&#39;Dim sheetCount As Integer</span></span>
<span class="line"><span>Dim resultSheetName As String</span></span>
<span class="line"><span>    Dim searchResultLocation As String</span></span>
<span class="line"><span>    Dim sheetCopyRange As String</span></span>
<span class="line"><span>    Dim sheetPasteRange As String</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Dim judge, currentSheetName As Excel.Worksheet, s$</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Dim colmunsCount As Integer</span></span>
<span class="line"><span>    Dim rowsCount As Integer</span></span>
<span class="line"><span>    &#39;fail result name</span></span>
<span class="line"><span>    Dim FRN As String</span></span>
<span class="line"><span>        &#39;判断是否存在failResult文件夹</span></span>
<span class="line"><span>         FRN = &quot;failResult&quot;</span></span>
<span class="line"><span>        s = &quot;failResult&quot;</span></span>
<span class="line"><span>        Set judge = CreateObject(&quot;Scripting.Dictionary&quot;)</span></span>
<span class="line"><span>        For Each currentResultName In Worksheets</span></span>
<span class="line"><span>        judge(currentResultName.Name) = &quot;&quot;</span></span>
<span class="line"><span>        Next</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        If judge.exists(s) Then</span></span>
<span class="line"><span>        GoTo begin</span></span>
<span class="line"><span>        Else</span></span>
<span class="line"><span>        MsgBox &quot;请创建一个名为failResult的工作表&quot;</span></span>
<span class="line"><span>            Sheets.Add After:=ActiveSheet</span></span>
<span class="line"><span>            Sheets(2).Select</span></span>
<span class="line"><span>            Sheets(2).Name = FRN</span></span>
<span class="line"><span>        End If</span></span>
<span class="line"><span>        Set judge = Nothing</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>begin:</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    &#39;新建一个sheet存放失败项</span></span>
<span class="line"><span>   &#39;获取脚本数量</span></span>
<span class="line"><span>   &#39; sheetCount = Worksheets.CountNew</span></span>
<span class="line"><span>    For Each currentSheetName In ThisWorkbook.Worksheets</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>        If currentSheetName.Name = FRN Then</span></span>
<span class="line"><span>        GoTo nexttime</span></span>
<span class="line"><span>        End If</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        MsgBox currentSheetName.Name</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        &#39;获取表名字</span></span>
<span class="line"><span>       &#39; fname = ActiveSheet.Name</span></span>
<span class="line"><span>        &#39;搜索并确定result位置</span></span>
<span class="line"><span>         ActiveSheet.Cells.Find(What:=&quot;Result&quot;, After:=ActiveCell, LookIn:=xlFormulas, LookAt _</span></span>
<span class="line"><span>        :=xlPart, SearchOrder:=xlByRows, SearchDirection:=xlNext, MatchCase:= _</span></span>
<span class="line"><span>        False, MatchByte:=False, SearchFormat:=False).Activate</span></span>
<span class="line"><span>          searchResultLocation = ActiveCell.Address(0, 0)</span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>        &#39;CONSTCOLUMNS = Left(searchResultLocation, 1) + &quot;800&quot;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        Selection.EntireColumn.Select</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>    &#39;对选中数据进行筛选</span></span>
<span class="line"><span>    Selection.AutoFilter</span></span>
<span class="line"><span>    ActiveSheet.Range(searchResultLocation).End(xlDown).AutoFilter Field:=1, Criteria1:=&quot;Fail&quot;</span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>         ActiveSheet.Cells.SpecialCells(xlCellTypeConstants).Select</span></span>
<span class="line"><span>         &#39;复制粘贴到新的表</span></span>
<span class="line"><span>         Selection.Copy</span></span>
<span class="line"><span>         Sheets(FRN).Select</span></span>
<span class="line"><span>         &#39;到最后一格空格处复制粘贴防止覆盖</span></span>
<span class="line"><span>         Range(&quot;a&quot; &amp; Cells(Rows.Count, 1).End(xlUp).Row + 1).Select</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         &#39;Rows(ActiveSheet.UsedRange.Rows.Count).Insert</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         ActiveSheet.Paste</span></span>
<span class="line"><span>         Range(&quot;a&quot; &amp; Cells(Rows.Count, 1).End(xlUp).Row + 1).Select</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         &#39;colmunsCount = ActiveSheet.UsedRange.Columns.Count</span></span>
<span class="line"><span>         &#39;rowsCount = ActiveSheet.UsedRange.Rows.Count</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         &#39;ActiveSheet(failResult).Range().Values = currentSheetName</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>          &#39;选择有效数据</span></span>
<span class="line"><span>nexttime:</span></span>
<span class="line"><span>Next</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;</span></span>
<span class="line"><span>End Sub</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>版本V10.0</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Sub 宏1()</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;添加注释</span></span>
<span class="line"><span>Application.ScreenUpdating = False</span></span>
<span class="line"><span>&#39;</span></span>
<span class="line"><span>Application.DisplayAlerts = False</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>&#39; test2 宏</span></span>
<span class="line"><span>&#39;Dim sheetCount As Integer</span></span>
<span class="line"><span>Dim resultSheetName As String</span></span>
<span class="line"><span>    Dim searchResultLocation As String</span></span>
<span class="line"><span>    Dim sheetCopyRange As String</span></span>
<span class="line"><span>    Dim sheetPasteRange As String</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Dim judge, currentSheetName As Excel.Worksheet, s$</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Dim colmunsCount As Integer</span></span>
<span class="line"><span>    Dim rowsCount As Integer</span></span>
<span class="line"><span>    &#39;fail result name</span></span>
<span class="line"><span>    Dim FRN As String</span></span>
<span class="line"><span>        &#39;判断是否存在failResult文件夹</span></span>
<span class="line"><span>         FRN = &quot;failResult&quot;</span></span>
<span class="line"><span>        s = &quot;failResult&quot;</span></span>
<span class="line"><span>        Set judge = CreateObject(&quot;Scripting.Dictionary&quot;)</span></span>
<span class="line"><span>        For Each currentResultName In Worksheets</span></span>
<span class="line"><span>        judge(currentResultName.Name) = &quot;&quot;</span></span>
<span class="line"><span>        Next</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        If judge.exists(s) Then</span></span>
<span class="line"><span>        GoTo begin</span></span>
<span class="line"><span>        Else</span></span>
<span class="line"><span>        MsgBox &quot;请创建一个名为failResult的工作表&quot;</span></span>
<span class="line"><span>            Sheets.Add After:=ActiveSheet</span></span>
<span class="line"><span>            Sheets(2).Select</span></span>
<span class="line"><span>            Sheets(2).Name = FRN</span></span>
<span class="line"><span>        End If</span></span>
<span class="line"><span>        Set judge = Nothing</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>begin:</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    &#39;新建一个sheet存放失败项</span></span>
<span class="line"><span>   &#39;获取脚本数量</span></span>
<span class="line"><span>   &#39; sheetCount = Worksheets.CountNew</span></span>
<span class="line"><span>    For Each currentSheetName In ThisWorkbook.Worksheets</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>        If currentSheetName.Name = FRN Then</span></span>
<span class="line"><span>        GoTo nexttime</span></span>
<span class="line"><span>        MsgBox &quot;failresult&quot;</span></span>
<span class="line"><span>        End If</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        MsgBox currentSheetName.Name</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        &#39;获取表名字</span></span>
<span class="line"><span>       &#39; fname = ActiveSheet.Name</span></span>
<span class="line"><span>        &#39;搜索并确定result位置</span></span>
<span class="line"><span>         ActiveSheet.Cells.Find(What:=&quot;Result&quot;, After:=ActiveCell, LookIn:=xlFormulas, LookAt _</span></span>
<span class="line"><span>        :=xlPart, SearchOrder:=xlByRows, SearchDirection:=xlNext, MatchCase:= _</span></span>
<span class="line"><span>        False, MatchByte:=False, SearchFormat:=False).Activate</span></span>
<span class="line"><span>          searchResultLocation = ActiveCell.Address(0, 0)</span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>        &#39;CONSTCOLUMNS = Left(searchResultLocation, 1) + &quot;800&quot;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        Selection.EntireColumn.Select</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>    &#39;对选中数据进行筛选</span></span>
<span class="line"><span>        Selection.AutoFilter</span></span>
<span class="line"><span>        ActiveSheet.Range(searchResultLocation).End(xlDown).AutoFilter Field:=1, Criteria1:=&quot;Fail&quot;</span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>         ActiveSheet.Cells.SpecialCells(xlCellTypeConstants).Select</span></span>
<span class="line"><span>         &#39;复制粘贴到新的表</span></span>
<span class="line"><span>         Selection.Copy</span></span>
<span class="line"><span>         Sheets(FRN).Select</span></span>
<span class="line"><span>         &#39;到最后一格空格处复制粘贴防止覆盖</span></span>
<span class="line"><span>         Range(&quot;a&quot; &amp; Cells(Rows.Count, 1).End(xlUp).Row + 2).Select</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         &#39;Rows(ActiveSheet.UsedRange.Rows.Count).Insert</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         ActiveSheet.Paste</span></span>
<span class="line"><span>         &#39;Range(&quot;a&quot; &amp; Cells(Rows.Count, 1).End(xlUp).Row + 2).Select</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         &#39;colmunsCount = ActiveSheet.UsedRange.Columns.Count</span></span>
<span class="line"><span>         &#39;rowsCount = ActiveSheet.UsedRange.Rows.Count</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         &#39;ActiveSheet(failResult).Range().Values = currentSheetName</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>          &#39;选择有效数据</span></span>
<span class="line"><span>          MsgBox &quot;执行完一次&quot;</span></span>
<span class="line"><span>nexttime:</span></span>
<span class="line"><span>Next</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;</span></span>
<span class="line"><span>End Sub</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>v11.0</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&#39;Private Declare Sub Sleep Lib &quot;kernel32.dll&quot; (ByVal dwMilliseconds As Long)</span></span>
<span class="line"><span>Sub 宏1()</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;添加注释</span></span>
<span class="line"><span>Application.ScreenUpdating = False</span></span>
<span class="line"><span>&#39;</span></span>
<span class="line"><span>Application.DisplayAlerts = False</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>&#39; test2 宏</span></span>
<span class="line"><span>&#39;Dim sheetCount As Integer</span></span>
<span class="line"><span>Dim resultSheetName As String</span></span>
<span class="line"><span>    Dim searchResultLocation As String</span></span>
<span class="line"><span>    Dim sheetCopyRange As String</span></span>
<span class="line"><span>    Dim sheetPasteRange As String</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Dim judge, currentSheetName As Excel.Worksheet, s$</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Dim colmunsCount As Integer</span></span>
<span class="line"><span>    Dim rowsCount As Integer</span></span>
<span class="line"><span>    &#39;fail result name</span></span>
<span class="line"><span>    Dim FRN As String</span></span>
<span class="line"><span>        &#39;判断是否存在failResult文件夹</span></span>
<span class="line"><span>         FRN = &quot;failResult&quot;</span></span>
<span class="line"><span>        s = &quot;failResult&quot;</span></span>
<span class="line"><span>        Set judge = CreateObject(&quot;Scripting.Dictionary&quot;)</span></span>
<span class="line"><span>        For Each currentResultName In Worksheets</span></span>
<span class="line"><span>        judge(currentResultName.Name) = &quot;&quot;</span></span>
<span class="line"><span>        Next</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        If judge.exists(s) Then</span></span>
<span class="line"><span>        GoTo begin</span></span>
<span class="line"><span>        Else</span></span>
<span class="line"><span>        MsgBox &quot;请创建一个名为failResult的工作表&quot;</span></span>
<span class="line"><span>            Sheets.Add After:=ActiveSheet</span></span>
<span class="line"><span>            Sheets(2).Select</span></span>
<span class="line"><span>            Sheets(2).Name = FRN</span></span>
<span class="line"><span>        End If</span></span>
<span class="line"><span>        Set judge = Nothing</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>begin:</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    &#39;新建一个sheet存放失败项</span></span>
<span class="line"><span>   &#39;获取脚本数量</span></span>
<span class="line"><span>   &#39; sheetCount = Worksheets.CountNew</span></span>
<span class="line"><span>    For Each currentSheetName In ThisWorkbook.Worksheets</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>        If currentSheetName.Name = FRN Then</span></span>
<span class="line"><span>        GoTo nexttime</span></span>
<span class="line"><span>        End If</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        Sheets(currentSheetName.Name).Select</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        MsgBox currentSheetName.Name</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        &#39;获取表名字</span></span>
<span class="line"><span>       &#39; fname = ActiveSheet.Name</span></span>
<span class="line"><span>        &#39;搜索并确定result位置</span></span>
<span class="line"><span>         ActiveSheet.Cells.Find(What:=&quot;Result&quot;, After:=ActiveCell, LookIn:=xlFormulas, LookAt _</span></span>
<span class="line"><span>        :=xlPart, SearchOrder:=xlByRows, SearchDirection:=xlNext, MatchCase:= _</span></span>
<span class="line"><span>        False, MatchByte:=False, SearchFormat:=False).Activate</span></span>
<span class="line"><span>        &#39;等待一段时间再执行</span></span>
<span class="line"><span>        &#39;Application.Wait Now + TimeValue(&quot;00:00:01&quot;)</span></span>
<span class="line"><span>          searchResultLocation = ActiveCell.Address(0, 0)</span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>        &#39;CONSTCOLUMNS = Left(searchResultLocation, 1) + &quot;800&quot;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        Selection.EntireColumn.Select</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>    &#39;对选中数据进行筛选</span></span>
<span class="line"><span>    Selection.AutoFilter</span></span>
<span class="line"><span>    ActiveSheet.Range(searchResultLocation).End(xlDown).AutoFilter Field:=1, Criteria1:=&quot;Fail&quot;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>          &#39;Application.Wait Now + TimeValue(&quot;00:00:01&quot;)</span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>         ActiveSheet.Cells.SpecialCells(xlCellTypeConstants).Select</span></span>
<span class="line"><span>         &#39;复制粘贴到新的表</span></span>
<span class="line"><span>         Selection.Copy</span></span>
<span class="line"><span>         Sheets(FRN).Select</span></span>
<span class="line"><span>         &#39;到最后一格空格处复制粘贴防止覆盖</span></span>
<span class="line"><span>         Range(&quot;a&quot; &amp; Cells(Rows.Count, 1).End(xlUp).Row + 1).Select</span></span>
<span class="line"><span>         &#39;Application.Wait Now + TimeValue(&quot;00:00:01&quot;)</span></span>
<span class="line"><span>         &#39;Rows(ActiveSheet.UsedRange.Rows.Count).Insert</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         ActiveSheet.Paste</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         &#39;Range(&quot;a&quot; &amp; Cells(Rows.Count, 1).End(xlUp).Row + 1).Select</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         &#39;colmunsCount = ActiveSheet.UsedRange.Columns.Count</span></span>
<span class="line"><span>         &#39;rowsCount = ActiveSheet.UsedRange.Rows.Count</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         &#39;ActiveSheet(failResult).Range().Values = currentSheetName</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>          &#39;选择有效数据</span></span>
<span class="line"><span>nexttime:</span></span>
<span class="line"><span>Next</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;</span></span>
<span class="line"><span>End Sub</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>版本V12</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&#39;Private Declare Sub Sleep Lib &quot;kernel32.dll&quot; (ByVal dwMilliseconds As Long)</span></span>
<span class="line"><span>Sub 宏1()</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;添加注释</span></span>
<span class="line"><span>Application.ScreenUpdating = False</span></span>
<span class="line"><span>&#39;</span></span>
<span class="line"><span>Application.DisplayAlerts = False</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>&#39; test2 宏</span></span>
<span class="line"><span>&#39;Dim sheetCount As Integer</span></span>
<span class="line"><span>Dim resultSheetName As String</span></span>
<span class="line"><span>    Dim searchResultLocation As String</span></span>
<span class="line"><span>    Dim sheetCopyRange As String</span></span>
<span class="line"><span>    Dim sheetPasteRange As String</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Dim judge, currentSheetName As Excel.Worksheet, s$</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Dim colmunsCount As Integer</span></span>
<span class="line"><span>    Dim rowsCount As Integer</span></span>
<span class="line"><span>    &#39;fail result name</span></span>
<span class="line"><span>    Dim FRN As String</span></span>
<span class="line"><span>        &#39;判断是否存在failResult文件夹</span></span>
<span class="line"><span>         FRN = &quot;failResult&quot;</span></span>
<span class="line"><span>        s = &quot;failResult&quot;</span></span>
<span class="line"><span>        Set judge = CreateObject(&quot;Scripting.Dictionary&quot;)</span></span>
<span class="line"><span>        For Each currentResultName In Worksheets</span></span>
<span class="line"><span>        judge(currentResultName.Name) = &quot;&quot;</span></span>
<span class="line"><span>        Next</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        If judge.exists(s) Then</span></span>
<span class="line"><span>        GoTo begin</span></span>
<span class="line"><span>        Else</span></span>
<span class="line"><span>        MsgBox &quot;请创建一个名为failResult的工作表&quot;</span></span>
<span class="line"><span>            Sheets.Add After:=ActiveSheet</span></span>
<span class="line"><span>            Sheets(2).Select</span></span>
<span class="line"><span>            Sheets(2).Name = FRN</span></span>
<span class="line"><span>        End If</span></span>
<span class="line"><span>        Set judge = Nothing</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>begin:</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    &#39;新建一个sheet存放失败项</span></span>
<span class="line"><span>   &#39;获取脚本数量</span></span>
<span class="line"><span>   &#39; sheetCount = Worksheets.CountNew</span></span>
<span class="line"><span>    For Each currentSheetName In ThisWorkbook.Worksheets</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>        If currentSheetName.Name = FRN Then</span></span>
<span class="line"><span>        GoTo nexttime</span></span>
<span class="line"><span>        End If</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        Sheets(currentSheetName.Name).Select</span></span>
<span class="line"><span>        Range(&quot;a&quot; &amp; Cells(Rows.Count, 1).End(xlUp).Row + 2).Select</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        MsgBox currentSheetName.Name</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        &#39;获取表名字</span></span>
<span class="line"><span>       &#39; fname = ActiveSheet.Name</span></span>
<span class="line"><span>        &#39;搜索并确定result位置</span></span>
<span class="line"><span>         ActiveSheet.Cells.Find(What:=&quot;Result&quot;, After:=ActiveCell, LookIn:=xlFormulas, LookAt _</span></span>
<span class="line"><span>        :=xlPart, SearchOrder:=xlByRows, SearchDirection:=xlNext, MatchCase:= _</span></span>
<span class="line"><span>        False, MatchByte:=False, SearchFormat:=False).Activate</span></span>
<span class="line"><span>        &#39;等待一段时间再执行</span></span>
<span class="line"><span>        &#39;Application.Wait Now + TimeValue(&quot;00:00:01&quot;)</span></span>
<span class="line"><span>          searchResultLocation = ActiveCell.Address(0, 0)</span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>        &#39;CONSTCOLUMNS = Left(searchResultLocation, 1) + &quot;800&quot;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        Selection.EntireColumn.Select</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>    &#39;对选中数据进行筛选</span></span>
<span class="line"><span>    Selection.AutoFilter</span></span>
<span class="line"><span>    ActiveSheet.Range(searchResultLocation).End(xlDown).AutoFilter Field:=1, Criteria1:=&quot;Fail&quot;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>          &#39;Application.Wait Now + TimeValue(&quot;00:00:01&quot;)</span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>         ActiveSheet.Cells.SpecialCells(xlCellTypeConstants).Select</span></span>
<span class="line"><span>         &#39;复制粘贴到新的表</span></span>
<span class="line"><span>         Selection.Copy</span></span>
<span class="line"><span>         Sheets(FRN).Select</span></span>
<span class="line"><span>         &#39;到最后一格空格处复制粘贴防止覆盖</span></span>
<span class="line"><span>         Range(&quot;a&quot; &amp; Cells(Rows.Count, 1).End(xlUp).Row + 2).Select</span></span>
<span class="line"><span>         &#39;Application.Wait Now + TimeValue(&quot;00:00:01&quot;)</span></span>
<span class="line"><span>         &#39;Rows(ActiveSheet.UsedRange.Rows.Count).Insert</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         ActiveSheet.Paste</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         &#39;Range(&quot;a&quot; &amp; Cells(Rows.Count, 1).End(xlUp).Row + 1).Select</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         &#39;colmunsCount = ActiveSheet.UsedRange.Columns.Count</span></span>
<span class="line"><span>         &#39;rowsCount = ActiveSheet.UsedRange.Rows.Count</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         &#39;ActiveSheet(failResult).Range().Values = currentSheetName</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>          &#39;选择有效数据</span></span>
<span class="line"><span>nexttime:</span></span>
<span class="line"><span>Next</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;</span></span>
<span class="line"><span>End Sub</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若要对一个可能包含多重选定区域的区域使用此属性，请用 Areas.Count 方法测试一下此区域内是否包含多个子区域。如果确实包含多个子区域，可对此区域内的每一子区域进行循环。</p><p>V13.0</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&#39;Private Declare Sub Sleep Lib &quot;kernel32.dll&quot; (ByVal dwMilliseconds As Long)</span></span>
<span class="line"><span>Sub 宏1()</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;添加注释</span></span>
<span class="line"><span>Application.ScreenUpdating = False</span></span>
<span class="line"><span>&#39;</span></span>
<span class="line"><span>Application.DisplayAlerts = False</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>&#39; test2 宏</span></span>
<span class="line"><span>&#39;Dim sheetCount As Integer</span></span>
<span class="line"><span>Dim resultSheetName As String</span></span>
<span class="line"><span>    Dim searchResultLocation As String</span></span>
<span class="line"><span>    Dim sheetCopyRange As String</span></span>
<span class="line"><span>    Dim sheetPasteRange As String</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Dim judge, currentSheetName As Excel.Worksheet, s$</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Dim colmunsCount As Integer</span></span>
<span class="line"><span>    Dim rowsCount As Integer</span></span>
<span class="line"><span>    &#39;fail result name</span></span>
<span class="line"><span>    Dim FRN As String</span></span>
<span class="line"><span>        &#39;判断是否存在failResult文件夹</span></span>
<span class="line"><span>         FRN = &quot;failResult&quot;</span></span>
<span class="line"><span>        s = &quot;failResult&quot;</span></span>
<span class="line"><span>        Set judge = CreateObject(&quot;Scripting.Dictionary&quot;)</span></span>
<span class="line"><span>        For Each currentResultName In Worksheets</span></span>
<span class="line"><span>        judge(currentResultName.Name) = &quot;&quot;</span></span>
<span class="line"><span>        Next</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        If judge.exists(s) Then</span></span>
<span class="line"><span>        GoTo begin</span></span>
<span class="line"><span>        Else</span></span>
<span class="line"><span>        MsgBox &quot;请创建一个名为failResult的工作表&quot;</span></span>
<span class="line"><span>            Sheets.Add After:=ActiveSheet</span></span>
<span class="line"><span>            Sheets(2).Select</span></span>
<span class="line"><span>            Sheets(2).Name = FRN</span></span>
<span class="line"><span>        End If</span></span>
<span class="line"><span>        Set judge = Nothing</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>begin:</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    &#39;新建一个sheet存放失败项</span></span>
<span class="line"><span>   &#39;获取脚本数量</span></span>
<span class="line"><span>   &#39; sheetCount = Worksheets.CountNew</span></span>
<span class="line"><span>    For Each currentSheetName In ThisWorkbook.Worksheets</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>        If currentSheetName.Name = FRN Then</span></span>
<span class="line"><span>        GoTo nexttime</span></span>
<span class="line"><span>        End If</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        Sheets(currentSheetName.Name).Select</span></span>
<span class="line"><span>        Range(&quot;a&quot; &amp; Cells(Rows.Count, 1).End(xlUp).Row + 2).Select</span></span>
<span class="line"><span>        ActiveSheet.UsedRange.AutoFilter</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        MsgBox currentSheetName.Name</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        &#39;获取表名字</span></span>
<span class="line"><span>       &#39; fname = ActiveSheet.Name</span></span>
<span class="line"><span>        &#39;搜索并确定result位置</span></span>
<span class="line"><span>         ActiveSheet.Cells.Find(What:=&quot;Result&quot;, After:=ActiveCell, LookIn:=xlFormulas, LookAt _</span></span>
<span class="line"><span>        :=xlPart, SearchOrder:=xlByRows, SearchDirection:=xlNext, MatchCase:= _</span></span>
<span class="line"><span>        False, MatchByte:=False, SearchFormat:=False).Activate</span></span>
<span class="line"><span>        &#39;等待一段时间再执行</span></span>
<span class="line"><span>        &#39;Application.Wait Now + TimeValue(&quot;00:00:01&quot;)</span></span>
<span class="line"><span>          searchResultLocation = ActiveCell.Address(0, 0)</span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>        &#39;CONSTCOLUMNS = Left(searchResultLocation, 1) + &quot;800&quot;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        Selection.EntireColumn.Select</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>    &#39;对选中数据进行筛选</span></span>
<span class="line"><span>    Selection.AutoFilter</span></span>
<span class="line"><span>    ActiveSheet.Range(searchResultLocation).End(xlDown).AutoFilter Field:=1, Criteria1:=&quot;Fail&quot;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>          &#39;Application.Wait Now + TimeValue(&quot;00:00:01&quot;)</span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>         ActiveSheet.Cells.SpecialCells(xlCellTypeConstants).Select</span></span>
<span class="line"><span>         &#39;复制粘贴到新的表</span></span>
<span class="line"><span>         Selection.Copy</span></span>
<span class="line"><span>         Sheets(FRN).Select</span></span>
<span class="line"><span>         &#39;到最后一格空格处复制粘贴防止覆盖</span></span>
<span class="line"><span>         Range(&quot;a&quot; &amp; Cells(Rows.Count, 1).End(xlUp).Row + 2).Select</span></span>
<span class="line"><span>         &#39;Application.Wait Now + TimeValue(&quot;00:00:01&quot;)</span></span>
<span class="line"><span>         &#39;Rows(ActiveSheet.UsedRange.Rows.Count).Insert</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         ActiveSheet.Paste</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         &#39;Range(&quot;a&quot; &amp; Cells(Rows.Count, 1).End(xlUp).Row + 1).Select</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         &#39;colmunsCount = ActiveSheet.UsedRange.Columns.Count</span></span>
<span class="line"><span>         &#39;rowsCount = ActiveSheet.UsedRange.Rows.Count</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         &#39;ActiveSheet(failResult).Range().Values = currentSheetName</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>          &#39;选择有效数据</span></span>
<span class="line"><span>nexttime:</span></span>
<span class="line"><span>Next</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;</span></span>
<span class="line"><span>End Sub</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="v15-202011051606-可用" tabindex="-1"><a class="header-anchor" href="#v15-202011051606-可用"><span>V15（202011051606 可用）</span></a></h1><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&#39;Private Declare Sub Sleep Lib &quot;kernel32.dll&quot; (ByVal dwMilliseconds As Long)</span></span>
<span class="line"><span>Sub 宏1()</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;添加注释</span></span>
<span class="line"><span>Application.ScreenUpdating = False</span></span>
<span class="line"><span>&#39;</span></span>
<span class="line"><span>Application.DisplayAlerts = False</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>&#39; test2 宏</span></span>
<span class="line"><span>&#39;Dim sheetCount As Integer</span></span>
<span class="line"><span>Dim resultSheetName As String</span></span>
<span class="line"><span>    Dim searchResultLocation As String</span></span>
<span class="line"><span>    Dim sheetCopyRange As String</span></span>
<span class="line"><span>    Dim sheetPasteRange As String</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Dim judge, currentSheetName As Excel.Worksheet, s$</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Dim colmunsCount As Integer</span></span>
<span class="line"><span>    Dim rowsCount As Integer</span></span>
<span class="line"><span>    &#39;fail result name</span></span>
<span class="line"><span>    Dim FRN As String</span></span>
<span class="line"><span>        &#39;判断是否存在failResult文件夹</span></span>
<span class="line"><span>         FRN = &quot;failResult&quot;</span></span>
<span class="line"><span>        s = &quot;failResult&quot;</span></span>
<span class="line"><span>        Set judge = CreateObject(&quot;Scripting.Dictionary&quot;)</span></span>
<span class="line"><span>        For Each currentResultName In Worksheets</span></span>
<span class="line"><span>        judge(currentResultName.Name) = &quot;&quot;</span></span>
<span class="line"><span>        Next</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        If judge.exists(s) Then</span></span>
<span class="line"><span>        GoTo begin</span></span>
<span class="line"><span>        Else</span></span>
<span class="line"><span>        &#39;MsgBox &quot;请创建一个名为failResult的工作表&quot;</span></span>
<span class="line"><span>            Sheets.Add After:=ActiveSheet</span></span>
<span class="line"><span>            Sheets(2).Select</span></span>
<span class="line"><span>            Sheets(2).Name = FRN</span></span>
<span class="line"><span>        End If</span></span>
<span class="line"><span>        Set judge = Nothing</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>begin:</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    &#39;新建一个sheet存放失败项</span></span>
<span class="line"><span>   &#39;获取脚本数量</span></span>
<span class="line"><span>   &#39; sheetCount = Worksheets.CountNew</span></span>
<span class="line"><span>    For Each currentSheetName In ThisWorkbook.Worksheets</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>        If currentSheetName.Name = FRN Then</span></span>
<span class="line"><span>        GoTo nexttime</span></span>
<span class="line"><span>        End If</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        Sheets(currentSheetName.Name).Select</span></span>
<span class="line"><span>        Range(&quot;a&quot; &amp; Cells(Rows.Count, 1).End(xlUp).Row + 2).Select</span></span>
<span class="line"><span>        ActiveSheet.UsedRange.AutoFilter</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>       &#39; MsgBox currentSheetName.Name</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        &#39;获取表名字</span></span>
<span class="line"><span>       &#39; fname = ActiveSheet.Name</span></span>
<span class="line"><span>        &#39;搜索并确定result位置</span></span>
<span class="line"><span>         ActiveSheet.Cells.Find(What:=&quot;Result&quot;, After:=ActiveCell, LookIn:=xlFormulas, LookAt _</span></span>
<span class="line"><span>        :=xlPart, SearchOrder:=xlByRows, SearchDirection:=xlNext, MatchCase:= _</span></span>
<span class="line"><span>        False, MatchByte:=False, SearchFormat:=False).Activate</span></span>
<span class="line"><span>        &#39;等待一段时间再执行</span></span>
<span class="line"><span>        &#39;Application.Wait Now + TimeValue(&quot;00:00:01&quot;)</span></span>
<span class="line"><span>          searchResultLocation = ActiveCell.Address(0, 0)</span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>        &#39;CONSTCOLUMNS = Left(searchResultLocation, 1) + &quot;800&quot;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        Selection.EntireColumn.Select</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>    &#39;对选中数据进行筛选</span></span>
<span class="line"><span>    Selection.AutoFilter</span></span>
<span class="line"><span>    ActiveSheet.Range(searchResultLocation).End(xlDown).AutoFilter Field:=1, Criteria1:=&quot;Fail&quot;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>          &#39;Application.Wait Now + TimeValue(&quot;00:00:01&quot;)</span></span>
<span class="line"><span>          &#39;Range(&quot;a&quot; &amp; Cells(Rows.Count, 1).End(xlUp).Row + 3).Select</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>         &#39;ActiveSheet.Cells.SpecialCells(xlCellTypeConstants).Select</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         Sheets(currentSheetName.Name).Range(&quot;a1&quot;).CurrentRegion.Select</span></span>
<span class="line"><span>         &#39;复制粘贴到新的表</span></span>
<span class="line"><span>         Selection.Copy</span></span>
<span class="line"><span>         Sheets(FRN).Select</span></span>
<span class="line"><span>         &#39;到最后一格空格处复制粘贴防止覆盖</span></span>
<span class="line"><span>         Range(&quot;a&quot; &amp; Cells(Rows.Count, 1).End(xlUp).Row + 2).Select</span></span>
<span class="line"><span>         &#39;Application.Wait Now + TimeValue(&quot;00:00:01&quot;)</span></span>
<span class="line"><span>         &#39;Rows(ActiveSheet.UsedRange.Rows.Count).Insert</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         ActiveSheet.Paste</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         &#39;Range(&quot;a&quot; &amp; Cells(Rows.Count, 1).End(xlUp).Row + 1).Select</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         &#39;colmunsCount = ActiveSheet.UsedRange.Columns.Count</span></span>
<span class="line"><span>         &#39;rowsCount = ActiveSheet.UsedRange.Rows.Count</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         &#39;ActiveSheet(failResult).Range().Values = currentSheetName</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>          &#39;选择有效数据</span></span>
<span class="line"><span>nexttime:</span></span>
<span class="line"><span>Next</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MsgBox &quot;所有失败项都已放置在failResult中&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>End Sub</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="v17-0-不可用" tabindex="-1"><a class="header-anchor" href="#v17-0-不可用"><span>V17.0（不可用）</span></a></h1><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&#39;Private Declare Sub Sleep Lib &quot;kernel32.dll&quot; (ByVal dwMilliseconds As Long)</span></span>
<span class="line"><span>Sub 宏1()</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;添加注释</span></span>
<span class="line"><span>Application.ScreenUpdating = False</span></span>
<span class="line"><span>&#39;</span></span>
<span class="line"><span>Application.DisplayAlerts = False</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>&#39; test2 宏</span></span>
<span class="line"><span>&#39;Dim sheetCount As Integer</span></span>
<span class="line"><span>Dim resultSheetName As String</span></span>
<span class="line"><span>    Dim searchResultLocation As String</span></span>
<span class="line"><span>    Dim sheetCopyRange As String</span></span>
<span class="line"><span>    Dim sheetPasteRange As String</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Dim judge, currentSheetName As Excel.Worksheet, s$</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Dim colmunsCount As Integer</span></span>
<span class="line"><span>    Dim rowsCount As Integer</span></span>
<span class="line"><span>    &#39;fail result name</span></span>
<span class="line"><span>    Dim FRN As String</span></span>
<span class="line"><span>        &#39;判断是否存在failResult文件夹</span></span>
<span class="line"><span>         FRN = &quot;failResult&quot;</span></span>
<span class="line"><span>        s = &quot;failResult&quot;</span></span>
<span class="line"><span>        Set judge = CreateObject(&quot;Scripting.Dictionary&quot;)</span></span>
<span class="line"><span>        For Each currentResultName In Worksheets</span></span>
<span class="line"><span>        judge(currentResultName.Name) = &quot;&quot;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        &#39;判断是否有空表，有则删除</span></span>
<span class="line"><span>        If IsBlankSht(currentSheetName) Then</span></span>
<span class="line"><span>        currentSheetName.Delete</span></span>
<span class="line"><span>        End If</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        Next</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        If judge.exists(s) Then</span></span>
<span class="line"><span>        GoTo begin</span></span>
<span class="line"><span>        Else</span></span>
<span class="line"><span>        &#39;MsgBox &quot;请创建一个名为failResult的工作表&quot;</span></span>
<span class="line"><span>            Sheets.Add After:=ActiveSheet</span></span>
<span class="line"><span>            Sheets(2).Select</span></span>
<span class="line"><span>            Sheets(2).Name = FRN</span></span>
<span class="line"><span>        End If</span></span>
<span class="line"><span>        Set judge = Nothing</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>begin:</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    &#39;新建一个sheet存放失败项</span></span>
<span class="line"><span>   &#39;获取脚本数量</span></span>
<span class="line"><span>   &#39; sheetCount = Worksheets.CountNew</span></span>
<span class="line"><span>    For Each currentSheetName In ThisWorkbook.Worksheets</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        &#39;不对failResult进行操作</span></span>
<span class="line"><span>        If currentSheetName.Name = FRN Then</span></span>
<span class="line"><span>        GoTo nexttime</span></span>
<span class="line"><span>        End If</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        Sheets(currentSheetName.Name).Select</span></span>
<span class="line"><span>        Range(&quot;a&quot; &amp; Cells(Rows.Count, 1).End(xlUp).Row + 2).Select</span></span>
<span class="line"><span>        ActiveSheet.UsedRange.AutoFilter</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>       &#39; MsgBox currentSheetName.Name</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        &#39;获取表名字</span></span>
<span class="line"><span>       &#39; fname = ActiveSheet.Name</span></span>
<span class="line"><span>        &#39;搜索并确定result位置</span></span>
<span class="line"><span>         ActiveSheet.Cells.Find(What:=&quot;Result&quot;, After:=ActiveCell, LookIn:=xlFormulas, LookAt _</span></span>
<span class="line"><span>        :=xlPart, SearchOrder:=xlByRows, SearchDirection:=xlNext, MatchCase:= _</span></span>
<span class="line"><span>        False, MatchByte:=False, SearchFormat:=False).Activate</span></span>
<span class="line"><span>        &#39;等待一段时间再执行</span></span>
<span class="line"><span>        &#39;Application.Wait Now + TimeValue(&quot;00:00:01&quot;)</span></span>
<span class="line"><span>          searchResultLocation = ActiveCell.Address(0, 0)</span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>        &#39;CONSTCOLUMNS = Left(searchResultLocation, 1) + &quot;800&quot;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        Selection.EntireColumn.Select</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>    &#39;对选中数据进行筛选</span></span>
<span class="line"><span>    Selection.AutoFilter</span></span>
<span class="line"><span>    ActiveSheet.Range(searchResultLocation).End(xlDown).AutoFilter Field:=1, Criteria1:=&quot;Fail&quot;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>          &#39;Application.Wait Now + TimeValue(&quot;00:00:01&quot;)</span></span>
<span class="line"><span>          &#39;Range(&quot;a&quot; &amp; Cells(Rows.Count, 1).End(xlUp).Row + 3).Select</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>         &#39;ActiveSheet.Cells.SpecialCells(xlCellTypeConstants).Select</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         Sheets(currentSheetName.Name).Range(&quot;a1&quot;).CurrentRegion.Select</span></span>
<span class="line"><span>         &#39;复制粘贴到新的表</span></span>
<span class="line"><span>         Selection.Copy</span></span>
<span class="line"><span>         Sheets(FRN).Select</span></span>
<span class="line"><span>         &#39;到最后一格空格处复制粘贴防止覆盖</span></span>
<span class="line"><span>         Range(&quot;a&quot; &amp; Cells(Rows.Count, 1).End(xlUp).Row + 2).Select</span></span>
<span class="line"><span>         &#39;Application.Wait Now + TimeValue(&quot;00:00:01&quot;)</span></span>
<span class="line"><span>         &#39;Rows(ActiveSheet.UsedRange.Rows.Count).Insert</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         ActiveSheet.Paste</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         &#39;Range(&quot;a&quot; &amp; Cells(Rows.Count, 1).End(xlUp).Row + 1).Select</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         &#39;colmunsCount = ActiveSheet.UsedRange.Columns.Count</span></span>
<span class="line"><span>         &#39;rowsCount = ActiveSheet.UsedRange.Rows.Count</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         &#39;ActiveSheet(failResult).Range().Values = currentSheetName</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>          &#39;选择有效数据</span></span>
<span class="line"><span>nexttime:</span></span>
<span class="line"><span>Next</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>End Sub</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>Function IsBlankSht(Sh As Variant) As Boolean</span></span>
<span class="line"><span>      If TypeName(Sh) = &quot;String&quot; Then Set Sh = Worksheets(Sh)</span></span>
<span class="line"><span>      If Application.CountA(Sh.UsedRange.Cells) = 0 Then</span></span>
<span class="line"><span>          IsBlankSht = True</span></span>
<span class="line"><span>      End If</span></span>
<span class="line"><span>  End Function</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>V17.1</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;Private Declare Sub Sleep Lib &quot;kernel32.dll&quot; (ByVal dwMilliseconds As Long)</span></span>
<span class="line"><span>Sub 宏1()</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;添加注释</span></span>
<span class="line"><span>Application.ScreenUpdating = False</span></span>
<span class="line"><span>&#39;</span></span>
<span class="line"><span>Application.DisplayAlerts = False</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>&#39; test2 宏</span></span>
<span class="line"><span>&#39;Dim sheetCount As Integer</span></span>
<span class="line"><span>Dim resultSheetName As String</span></span>
<span class="line"><span>    Dim searchResultLocation As String</span></span>
<span class="line"><span>    Dim sheetCopyRange As String</span></span>
<span class="line"><span>    Dim sheetPasteRange As String</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Dim judge, currentSheetName As Excel.Worksheet, s$</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Dim colmunsCount As Integer</span></span>
<span class="line"><span>    Dim rowsCount As Integer</span></span>
<span class="line"><span>    &#39;fail result name</span></span>
<span class="line"><span>    Dim FRN As String</span></span>
<span class="line"><span>        &#39;判断是否存在failResult文件夹</span></span>
<span class="line"><span>         FRN = &quot;failResult&quot;</span></span>
<span class="line"><span>        s = &quot;failResult&quot;</span></span>
<span class="line"><span>        Set judge = CreateObject(&quot;Scripting.Dictionary&quot;)</span></span>
<span class="line"><span>        For Each currentResultName In Worksheets</span></span>
<span class="line"><span>        judge(currentResultName.Name) = &quot;&quot;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        &#39;判断是否有空表，有则删除</span></span>
<span class="line"><span>        If Cells.Find(&quot;*&quot;) Is Nothing Then</span></span>
<span class="line"><span>        Sheets(currentResultName.Name).Delete</span></span>
<span class="line"><span>        End If</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        Next</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        If judge.exists(s) Then</span></span>
<span class="line"><span>        GoTo begin</span></span>
<span class="line"><span>        Else</span></span>
<span class="line"><span>        &#39;MsgBox &quot;请创建一个名为failResult的工作表&quot;</span></span>
<span class="line"><span>            Sheets.Add After:=ActiveSheet</span></span>
<span class="line"><span>            Sheets(2).Select</span></span>
<span class="line"><span>            Sheets(2).Name = FRN</span></span>
<span class="line"><span>        End If</span></span>
<span class="line"><span>        Set judge = Nothing</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>begin:</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    &#39;新建一个sheet存放失败项</span></span>
<span class="line"><span>   &#39;获取脚本数量</span></span>
<span class="line"><span>   &#39; sheetCount = Worksheets.CountNew</span></span>
<span class="line"><span>    For Each currentSheetName In ThisWorkbook.Worksheets</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        &#39;不对failResult进行操作</span></span>
<span class="line"><span>        If currentSheetName.Name = FRN Then</span></span>
<span class="line"><span>        GoTo nexttime</span></span>
<span class="line"><span>        End If</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        Sheets(currentSheetName.Name).Select</span></span>
<span class="line"><span>        Range(&quot;a&quot; &amp; Cells(Rows.Count, 1).End(xlUp).Row + 2).Select</span></span>
<span class="line"><span>        ActiveSheet.UsedRange.AutoFilter</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>       &#39; MsgBox currentSheetName.Name</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        &#39;获取表名字</span></span>
<span class="line"><span>       &#39; fname = ActiveSheet.Name</span></span>
<span class="line"><span>        &#39;搜索并确定result位置</span></span>
<span class="line"><span>         ActiveSheet.Cells.Find(What:=&quot;Result&quot;, After:=ActiveCell, LookIn:=xlFormulas, LookAt _</span></span>
<span class="line"><span>        :=xlPart, SearchOrder:=xlByRows, SearchDirection:=xlNext, MatchCase:= _</span></span>
<span class="line"><span>        False, MatchByte:=False, SearchFormat:=False).Activate</span></span>
<span class="line"><span>        &#39;等待一段时间再执行</span></span>
<span class="line"><span>        &#39;Application.Wait Now + TimeValue(&quot;00:00:01&quot;)</span></span>
<span class="line"><span>          searchResultLocation = ActiveCell.Address(0, 0)</span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>        &#39;CONSTCOLUMNS = Left(searchResultLocation, 1) + &quot;800&quot;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        Selection.EntireColumn.Select</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>    &#39;对选中数据进行筛选</span></span>
<span class="line"><span>    Selection.AutoFilter</span></span>
<span class="line"><span>    ActiveSheet.Range(searchResultLocation).End(xlDown).AutoFilter Field:=1, Criteria1:=&quot;Fail&quot;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>          &#39;Application.Wait Now + TimeValue(&quot;00:00:01&quot;)</span></span>
<span class="line"><span>          &#39;Range(&quot;a&quot; &amp; Cells(Rows.Count, 1).End(xlUp).Row + 3).Select</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>         &#39;ActiveSheet.Cells.SpecialCells(xlCellTypeConstants).Select</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         Sheets(currentSheetName.Name).Range(&quot;a1&quot;).CurrentRegion.Select</span></span>
<span class="line"><span>         &#39;复制粘贴到新的表</span></span>
<span class="line"><span>         Selection.Copy</span></span>
<span class="line"><span>         Sheets(FRN).Select</span></span>
<span class="line"><span>         &#39;到最后一格空格处复制粘贴防止覆盖</span></span>
<span class="line"><span>         Range(&quot;a&quot; &amp; Cells(Rows.Count, 1).End(xlUp).Row + 2).Select</span></span>
<span class="line"><span>         &#39;Application.Wait Now + TimeValue(&quot;00:00:01&quot;)</span></span>
<span class="line"><span>         &#39;Rows(ActiveSheet.UsedRange.Rows.Count).Insert</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         ActiveSheet.Paste</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         &#39;Range(&quot;a&quot; &amp; Cells(Rows.Count, 1).End(xlUp).Row + 1).Select</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         &#39;colmunsCount = ActiveSheet.UsedRange.Columns.Count</span></span>
<span class="line"><span>         &#39;rowsCount = ActiveSheet.UsedRange.Rows.Count</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         &#39;ActiveSheet(failResult).Range().Values = currentSheetName</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>          &#39;选择有效数据</span></span>
<span class="line"><span>nexttime:</span></span>
<span class="line"><span>Next</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>End Sub</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>V18 11051635</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&#39;Private Declare Sub Sleep Lib &quot;kernel32.dll&quot; (ByVal dwMilliseconds As Long)</span></span>
<span class="line"><span>Sub 宏1()</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;添加注释</span></span>
<span class="line"><span>Application.ScreenUpdating = False</span></span>
<span class="line"><span>&#39;</span></span>
<span class="line"><span>Application.DisplayAlerts = False</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>&#39; test2 宏</span></span>
<span class="line"><span>&#39;Dim sheetCount As Integer</span></span>
<span class="line"><span>Dim resultSheetName As String</span></span>
<span class="line"><span>    Dim searchResultLocation As String</span></span>
<span class="line"><span>    &#39;Dim sheetCopyRange As String</span></span>
<span class="line"><span>    &#39;Dim sheetPasteRange As String</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Dim judge, currentSheetName As Excel.Worksheet, s$</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    &#39;Dim colmunsCount As Integer</span></span>
<span class="line"><span>    &#39;Dim rowsCount As Integer</span></span>
<span class="line"><span>    &#39;fail result name</span></span>
<span class="line"><span>    Dim FRN As String</span></span>
<span class="line"><span>        &#39;判断是否存在failResult文件夹</span></span>
<span class="line"><span>         FRN = &quot;failResult&quot;</span></span>
<span class="line"><span>        s = &quot;failResult&quot;</span></span>
<span class="line"><span>        Set judge = CreateObject(&quot;Scripting.Dictionary&quot;)</span></span>
<span class="line"><span>        For Each currentResultName In Worksheets</span></span>
<span class="line"><span>        judge(currentResultName.Name) = &quot;&quot;</span></span>
<span class="line"><span>        Next</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        If judge.exists(s) Then</span></span>
<span class="line"><span>        GoTo begin</span></span>
<span class="line"><span>        Else</span></span>
<span class="line"><span>        &#39;MsgBox &quot;请创建一个名为failResult的工作表&quot;</span></span>
<span class="line"><span>            Sheets.Add After:=ActiveSheet</span></span>
<span class="line"><span>            Sheets(2).Select</span></span>
<span class="line"><span>            Sheets(2).Name = FRN</span></span>
<span class="line"><span>        End If</span></span>
<span class="line"><span>        Set judge = Nothing</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>begin:</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    &#39;新建一个sheet存放失败项</span></span>
<span class="line"><span>   &#39;获取脚本数量</span></span>
<span class="line"><span>   &#39; sheetCount = Worksheets.CountNew</span></span>
<span class="line"><span>    For Each currentSheetName In ThisWorkbook.Worksheets</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>        If currentSheetName.Name = FRN Then</span></span>
<span class="line"><span>        GoTo nexttime</span></span>
<span class="line"><span>        End If</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>       &#39;判断表是否为空</span></span>
<span class="line"><span>        If ShIsBlank(currentSheetName) = True Then</span></span>
<span class="line"><span>            currentSheetName.Delete</span></span>
<span class="line"><span>            GoTo nexttime</span></span>
<span class="line"><span>        End If</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        Sheets(currentSheetName.Name).Select</span></span>
<span class="line"><span>        Range(&quot;a&quot; &amp; Cells(Rows.Count, 1).End(xlUp).Row + 2).Select</span></span>
<span class="line"><span>        ActiveSheet.UsedRange.AutoFilter</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>       &#39; MsgBox currentSheetName.Name</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        &#39;获取表名字</span></span>
<span class="line"><span>       &#39; fname = ActiveSheet.Name</span></span>
<span class="line"><span>        &#39;搜索并确定result位置</span></span>
<span class="line"><span>         ActiveSheet.Cells.Find(What:=&quot;Result&quot;, After:=ActiveCell, LookIn:=xlFormulas, LookAt _</span></span>
<span class="line"><span>        :=xlPart, SearchOrder:=xlByRows, SearchDirection:=xlNext, MatchCase:= _</span></span>
<span class="line"><span>        False, MatchByte:=False, SearchFormat:=False).Activate</span></span>
<span class="line"><span>        &#39;等待一段时间再执行</span></span>
<span class="line"><span>        &#39;Application.Wait Now + TimeValue(&quot;00:00:01&quot;)</span></span>
<span class="line"><span>          searchResultLocation = ActiveCell.Address(0, 0)</span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>        &#39;CONSTCOLUMNS = Left(searchResultLocation, 1) + &quot;800&quot;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        Selection.EntireColumn.Select</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>    &#39;对选中数据进行筛选</span></span>
<span class="line"><span>    Selection.AutoFilter</span></span>
<span class="line"><span>    ActiveSheet.Range(searchResultLocation).End(xlDown).AutoFilter Field:=1, Criteria1:=&quot;Fail&quot;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>          &#39;Application.Wait Now + TimeValue(&quot;00:00:01&quot;)</span></span>
<span class="line"><span>          &#39;Range(&quot;a&quot; &amp; Cells(Rows.Count, 1).End(xlUp).Row + 3).Select</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>         &#39;ActiveSheet.Cells.SpecialCells(xlCellTypeConstants).Select</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         Sheets(currentSheetName.Name).Range(&quot;a1&quot;).CurrentRegion.Select</span></span>
<span class="line"><span>         &#39;复制粘贴到新的表</span></span>
<span class="line"><span>         Selection.Copy</span></span>
<span class="line"><span>         Sheets(FRN).Select</span></span>
<span class="line"><span>         &#39;到最后一格空格处复制粘贴防止覆盖</span></span>
<span class="line"><span>         Range(&quot;a&quot; &amp; Cells(Rows.Count, 1).End(xlUp).Row + 2).Select</span></span>
<span class="line"><span>         &#39;Application.Wait Now + TimeValue(&quot;00:00:01&quot;)</span></span>
<span class="line"><span>         &#39;Rows(ActiveSheet.UsedRange.Rows.Count).Insert</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         ActiveSheet.Paste</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         &#39;Range(&quot;a&quot; &amp; Cells(Rows.Count, 1).End(xlUp).Row + 1).Select</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         &#39;colmunsCount = ActiveSheet.UsedRange.Columns.Count</span></span>
<span class="line"><span>         &#39;rowsCount = ActiveSheet.UsedRange.Rows.Count</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         &#39;ActiveSheet(failResult).Range().Values = currentSheetName</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>          &#39;选择有效数据</span></span>
<span class="line"><span>nexttime:</span></span>
<span class="line"><span>Next</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MsgBox &quot;所有失败项都已放置在failResult中&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>End Sub</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Function ShIsBlank(sht As Variant) As Boolean</span></span>
<span class="line"><span>    If TypeName(sht) = &quot;string&quot; Then</span></span>
<span class="line"><span>        Set sht = Worksheets(sht) &#39;sht是工作表对象,完全可以作为Worksheets集合的参数加以利用.</span></span>
<span class="line"><span>    End If</span></span>
<span class="line"><span>    If Application.WorksheetFunction.CountA(sht.UsedRange.Cells) = 0 Then</span></span>
<span class="line"><span>        ShIsBlank = True</span></span>
<span class="line"><span>    End If</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>End Function</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="v19-00-11051659-keyong" tabindex="-1"><a class="header-anchor" href="#v19-00-11051659-keyong"><span>V19.00 11051659(keyong)</span></a></h1><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&#39;Private Declare Sub Sleep Lib &quot;kernel32.dll&quot; (ByVal dwMilliseconds As Long)</span></span>
<span class="line"><span>Sub 宏1()</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;添加注释</span></span>
<span class="line"><span>Application.ScreenUpdating = False</span></span>
<span class="line"><span>&#39;</span></span>
<span class="line"><span>Application.DisplayAlerts = False</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>&#39; test2 宏</span></span>
<span class="line"><span>&#39;Dim sheetCount As Integer</span></span>
<span class="line"><span>Dim resultSheetName As String</span></span>
<span class="line"><span>    Dim searchResultLocation As String</span></span>
<span class="line"><span>    &#39;Dim sheetCopyRange As String</span></span>
<span class="line"><span>    &#39;Dim sheetPasteRange As String</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Dim judge, currentSheetName As Excel.Worksheet, s$</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    &#39;Dim colmunsCount As Integer</span></span>
<span class="line"><span>    &#39;Dim rowsCount As Integer</span></span>
<span class="line"><span>    &#39;fail result name</span></span>
<span class="line"><span>    Dim FRN As String</span></span>
<span class="line"><span>        &#39;判断是否存在failResult文件夹</span></span>
<span class="line"><span>         FRN = &quot;failResult&quot;</span></span>
<span class="line"><span>        s = &quot;failResult&quot;</span></span>
<span class="line"><span>        Set judge = CreateObject(&quot;Scripting.Dictionary&quot;)</span></span>
<span class="line"><span>        For Each currentResultName In Worksheets</span></span>
<span class="line"><span>        judge(currentResultName.Name) = &quot;&quot;</span></span>
<span class="line"><span>        Next</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        If judge.exists(s) Then</span></span>
<span class="line"><span>        GoTo begin</span></span>
<span class="line"><span>        Else</span></span>
<span class="line"><span>        &#39;MsgBox &quot;请创建一个名为failResult的工作表&quot;</span></span>
<span class="line"><span>            Sheets.Add After:=ActiveSheet</span></span>
<span class="line"><span>            Sheets(2).Select</span></span>
<span class="line"><span>            Sheets(2).Name = FRN</span></span>
<span class="line"><span>        End If</span></span>
<span class="line"><span>        Set judge = Nothing</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>begin:</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    &#39;新建一个sheet存放失败项</span></span>
<span class="line"><span>   &#39;获取脚本数量</span></span>
<span class="line"><span>   &#39; sheetCount = Worksheets.CountNew</span></span>
<span class="line"><span>    For Each currentSheetName In ThisWorkbook.Worksheets</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>        If currentSheetName.Name = FRN Then</span></span>
<span class="line"><span>        GoTo nexttime</span></span>
<span class="line"><span>        End If</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>       &#39;判断表是否为空</span></span>
<span class="line"><span>        If ShIsBlank(currentSheetName) = True Then</span></span>
<span class="line"><span>            currentSheetName.Delete</span></span>
<span class="line"><span>            GoTo nexttime</span></span>
<span class="line"><span>        End If</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        Sheets(currentSheetName.Name).Select</span></span>
<span class="line"><span>        Range(&quot;a&quot; &amp; Cells(Rows.Count, 1).End(xlUp).Row + 2).Select</span></span>
<span class="line"><span>        ActiveSheet.UsedRange.AutoFilter</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>       &#39; MsgBox currentSheetName.Name</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        &#39;获取表名字</span></span>
<span class="line"><span>        fname = ActiveSheet.Name</span></span>
<span class="line"><span>        &#39;搜索并确定result位置</span></span>
<span class="line"><span>         ActiveSheet.Cells.Find(What:=&quot;Result&quot;, After:=ActiveCell, LookIn:=xlFormulas, LookAt _</span></span>
<span class="line"><span>        :=xlPart, SearchOrder:=xlByRows, SearchDirection:=xlNext, MatchCase:= _</span></span>
<span class="line"><span>        False, MatchByte:=False, SearchFormat:=False).Activate</span></span>
<span class="line"><span>        &#39;等待一段时间再执行</span></span>
<span class="line"><span>        &#39;Application.Wait Now + TimeValue(&quot;00:00:01&quot;)</span></span>
<span class="line"><span>          searchResultLocation = ActiveCell.Address(0, 0)</span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>        &#39;CONSTCOLUMNS = Left(searchResultLocation, 1) + &quot;800&quot;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        Selection.EntireColumn.Select</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>    &#39;对选中数据进行筛选</span></span>
<span class="line"><span>    Selection.AutoFilter</span></span>
<span class="line"><span>    ActiveSheet.Range(searchResultLocation).End(xlDown).AutoFilter Field:=1, Criteria1:=&quot;Fail&quot;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>          &#39;Application.Wait Now + TimeValue(&quot;00:00:01&quot;)</span></span>
<span class="line"><span>          &#39;Range(&quot;a&quot; &amp; Cells(Rows.Count, 1).End(xlUp).Row + 3).Select</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>         &#39;ActiveSheet.Cells.SpecialCells(xlCellTypeConstants).Select</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         Sheets(currentSheetName.Name).Range(&quot;a1&quot;).CurrentRegion.Select</span></span>
<span class="line"><span>         &#39;复制粘贴到新的表</span></span>
<span class="line"><span>         Selection.Copy</span></span>
<span class="line"><span>         Sheets(FRN).Select</span></span>
<span class="line"><span>         &#39;到最后一格空格处复制粘贴防止覆盖</span></span>
<span class="line"><span>         Range(&quot;a&quot; &amp; Cells(Rows.Count, 1).End(xlUp).Row + 3).Select</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         &#39;Application.Wait Now + TimeValue(&quot;00:00:01&quot;)</span></span>
<span class="line"><span>         &#39;Rows(ActiveSheet.UsedRange.Rows.Count).Insert</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         ActiveSheet.Paste</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         Range(&quot;a&quot; &amp; Cells(Rows.Count, 1).End(xlUp).Row + 2).Value = &quot;上一个工作表的名字：&quot; + Sheets(currentSheetName.Name).Name</span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>         &#39;Range(&quot;a&quot; &amp; Cells(Rows.Count, 1).End(xlUp).Row + 1).Select</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         &#39;colmunsCount = ActiveSheet.UsedRange.Columns.Count</span></span>
<span class="line"><span>         &#39;rowsCount = ActiveSheet.UsedRange.Rows.Count</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         &#39;ActiveSheet(failResult).Range().Values = currentSheetName</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>          &#39;选择有效数据</span></span>
<span class="line"><span>nexttime:</span></span>
<span class="line"><span>Next</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MsgBox &quot;所有失败项都已放置在failResult中&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>End Sub</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>Function ShIsBlank(sht As Variant) As Boolean</span></span>
<span class="line"><span>    If TypeName(sht) = &quot;string&quot; Then</span></span>
<span class="line"><span>        Set sht = Worksheets(sht) &#39;sht是工作表对象,完全可以作为Worksheets集合的参数加以利用.</span></span>
<span class="line"><span>    End If</span></span>
<span class="line"><span>    If Application.WorksheetFunction.CountA(sht.UsedRange.Cells) = 0 Then</span></span>
<span class="line"><span>        ShIsBlank = True</span></span>
<span class="line"><span>    End If</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>End Function</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,64)])])}const h=n(e,[["render",p]]),r=JSON.parse(`{"path":"/pages/0ffc2d/","title":"1104VBA学习--成功版","lang":"zh-CN","frontmatter":{"title":"1104VBA学习--成功版","date":"2024-01-29T04:23:56.000Z","permalink":"/pages/0ffc2d/","categories":["技术","脚本汇总"],"tags":[],"author":{"name":"aXing","link":"https://github.com/08163356"},"description":"activecell.address'这是当前单元格地址 selection.offset(1, 0).select'这是向下跳1格 selection.offset(-1, 0).select'这是向上跳1格 selection.offset(0, -1).select'这是向左跳1格 selection.offset(0, 1).select'这是...","head":[["meta",{"property":"og:url","content":"https://blog.axingit.top/pages/0ffc2d/"}],["meta",{"property":"og:site_name","content":"aXing's blog"}],["meta",{"property":"og:title","content":"1104VBA学习--成功版"}],["meta",{"property":"og:description","content":"activecell.address'这是当前单元格地址 selection.offset(1, 0).select'这是向下跳1格 selection.offset(-1, 0).select'这是向上跳1格 selection.offset(0, -1).select'这是向左跳1格 selection.offset(0, 1).select'这是..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-02T15:55:47.000Z"}],["meta",{"property":"article:author","content":"aXing"}],["meta",{"property":"article:published_time","content":"2024-01-29T04:23:56.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T15:55:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1104VBA学习--成功版\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-29T04:23:56.000Z\\",\\"dateModified\\":\\"2024-02-02T15:55:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"aXing\\",\\"link\\":\\"https://github.com/08163356\\"}]}"]]},"headers":[{"level":4,"title":"获取最后一行","slug":"获取最后一行","link":"#获取最后一行","children":[]},{"level":3,"title":"版本3.0","slug":"版本3-0","link":"#版本3-0","children":[{"level":4,"title":"版本4.0","slug":"版本4-0","link":"#版本4-0","children":[]},{"level":4,"title":"版本5.0","slug":"版本5-0","link":"#版本5-0","children":[]}]}],"git":{"createdTime":1706339325000,"updatedTime":1706889347000,"contributors":[{"name":"Lx08163356@163.com","username":"Lx08163356@163.com","email":"Lx08163356@163.com","commits":3,"url":"https://github.com/Lx08163356@163.com"}]},"readingTime":{"minutes":20.36,"words":6109},"filePathRelative":"01.技术/23.脚本汇总/10.1104VBA学习--成功版.md","localizedDate":"2024年1月29日","autoDesc":true}`);export{h as comp,r as data};
