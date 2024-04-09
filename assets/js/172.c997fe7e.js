(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{509:function(e,s,t){"use strict";t.r(s);var a=t(7),n=Object(a.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"git解决xmind文件的冲突-git常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git解决xmind文件的冲突-git常用命令"}},[e._v("#")]),e._v(" git解决Xmind文件的冲突  & git常用命令")]),e._v(" "),s("p",[e._v("背景：")]),e._v(" "),s("p",[e._v("error : you need to resolve your current index first")]),e._v(" "),s("p",[e._v("使用Xmind做笔记，本地有修改的同时，使用命令拉取最新Xmind：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("git pull origin master\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[s("strong",[e._v("方法一")]),e._v("：用nodepade++打开xmind文件，解决conflicts后再次执行merge；\n冲突的内容在xmind文件中不好辨别，很难手动解决冲突\n"),s("strong",[e._v("方法二")]),e._v("：回退到merge前\n"),e._v("\n不去resolve conflicts，退回merge前，执行以下代码：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("git reset --merge  \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("使用如下命令查询自己都做过什么操作")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("git reflog\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("再回退到自己本地修改好的那个版本上")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("git reset\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("新开一个分支")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("git checkout -b [your branch name] \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("取消本地修改或者强行用远程的分支覆盖到本地")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("git checkout .\n或者\ngit pull --force  <远程主机名> <远程分支名>:<本地分支名>\neg：  git pull --force origin master:master\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("将自己修改过的文件备份到其他文件夹")]),e._v(" "),s("p",[e._v("git switch到你修改的分支，然后将远程修改的部分复制粘贴到当前文件")]),e._v(" "),s("p",[e._v("强行覆盖远程的分支内容")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("git push origin master --force\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("曲线解决冲突")]),e._v(" "),s("p",[e._v("常用命令如下图：")]),e._v(" "),s("p",[s("img",{attrs:{src:"E:%5C%E6%89%80%E6%9C%89%E6%80%BB%E7%BB%93%5C%E7%9F%A5%E8%AF%86%E6%80%BB%E7%BB%93%EF%BC%88%E5%8D%9A%E5%AE%A2%E3%80%81word%E7%AD%89%EF%BC%89%5CgithubUpload%5Cread_book%5C%E6%8A%80%E6%9C%AF%E7%9B%B8%E5%85%B3%5Cgit%5Cgit%E6%80%9D%E7%BB%B4%E5%AF%BC%E5%9B%BE.jpg",alt:"git思维导图"}})]),e._v(" "),s("p",[e._v("参考文档：https://zhuanlan.zhihu.com/p/59616525")]),e._v(" "),s("p",[e._v("git 合并分支，当前在master分支，将target分支的内容合并到master")]),e._v(" "),s("p",[e._v("git merge target")])])}),[],!1,null,null,null);s.default=n.exports}}]);