---
title: DNT
date: 2024-01-21 03:32:44
permalink: /pages/499d51/
categories:
  - 技术
  - 计算机网络
  - http
tags:
  - 
author: 
  name: aXing
  link: https://github.com/08163356
---
## DNT

请求首部 **`DNT`** (**D**o **N**ot **T**rack) 表明了用户对于网站追踪的偏好。它允许用户指定自己是否更注重个人隐私还是定制化内容。

## 指令

```
DNT: 0
DNT: 1
```



- 0

<!-- more -->
  表示用户愿意目标站点追踪用户个人信息。

- 1

  表示用户不愿意目标站点追踪用户个人信息。

用户对 DNT 的设置还可以使用 [`Navigator.doNotTrack`](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/doNotTrack) 属性进行读取:

```
navigator.doNotTrack; // "0" or "1"
```

## 如何在浏览器开发该功能



## js是否可以修改DNT的值

```
request.setRequestHeader("DNT","1");
```



## DNT 背后的利益之争

用户希望自己的隐私得到保护。

互联网广告公司利用 Cookie 等技术追踪用户的偏好，而后向用户推荐个性化广告，以此牟利。

如果所有用户都开启 DNT，就断了广告公司的财路。

## DNT 的局限性

DNT 是一个君子协定。

在实际操作过程中，哪怕用户将其值设定为`1`，服务器还是可能阳奉阴违。

## 参考文档

https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/DNT

https://www.csdn.net/tags/MtTaMgzsNDQ3NTE3LWJsb2cO0O0O.html

https://segmentfault.com/a/1190000000385867

https://www.cnblogs.com/doit8791/p/7613567.html（有用）