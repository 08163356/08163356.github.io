---
title: DLNA
date: 2024-01-21 03:32:44
permalink: /pages/6f90e7/
categories:
  - 技术
  - 计算机网络
tags:
  - 
author: 
  name: aXing
  link: https://github.com/08163356
---
## 一、是什么？

DLNA(Digital Living Network Alliance)。是一个比较老旧的协议

DLNA 2003年诞生是为了能够把当时相互独立的电视机及其相关设备（功放、音响、DVD/蓝光播放机）、PC及其相关设备（[数码相机](https://www.zhihu.com/search?q=数码相机&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A23109998})、音乐播放器）和移动电话在家庭中有机地整合起来，使得多媒体内容能够在各个设备上便捷地播放。

## 二、有什么应用场景？

### 手机

 **Android 手机中的 DLNA 功能是把手机作为 DMS(Digital Media Server) 或者 DMC(Digital Media Controller) 这两种角色。**有时候也作为 DMP (Digital Media Player) 或者 DMD(Digital Media Downloader) 或者 DMU(Digital Media Uploader) 查看/下载/上传网络上其他服务器的内容，不过这些功能很多厂商并不一定实现了。

### 场景一

通过网络可以把手机上播放的本地照片、视频或者照片在电视或者扬声器播放，需要手机端软件支持，同时电视或者扬声器支持。

### 场景二

通过网络可以把手机上播放的在线照片、视频或者照片在电视或者扬声器播放，需要手机端软件支持，同时电视或者扬声器支持。

### 场景三

通过手机控制卧室的电视或者扬声器播放客厅联网的 Play Station 3/4 上的多媒体内容。

### 场景四

打开手机上的 DMS(Digital Media Server) 功能，通过电视或者播放器可以选择播放手机上的[多媒体](https://www.zhihu.com/search?q=多媒体&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A23109998})内容，要求电视支持相关功能。

### 其他场景

- 多个屏幕或者扬声器同步播放同一内容
- 客厅看到一半到卧室继续看
- 手机双向同步更新局域网中的 DLNA 服务器的多媒体数据

## 三、如何使用?

需要**连上局域网**，如果局域网中存在 DMP(Digital Media Player) 或者 DMR(Digital Media Render)，通常是电视或者音响，**就可以把手机上**（也可以是同一个网络上的 NAS 或者其他服务器）的**内容通过网络在电视或者音响上播放**。如果局域网中存在 DMPr(Digital Media Printer)，就可以把手机上或者其他服务器上的照片透过网络打印出来。

## 四、代码如何体现？

## 五、有什么替代品？

AirPlay 

NAS 常见的共享访问协议有：SMB、NFS、FTP、WebDav、DLNA

## 六、和替代品的差异在何方？

## 七、问题汇总

### 7.1 NAS 是什么？

网络附接存储（英語：Network Attached Storage，缩写：NAS）一种私有云。是一种文件级（与块级存储相对）的计算机数据存储服务器，它连接到计算机网络，并提供对异构网络用户的数据访问。 它专门用于通过其硬件、软件或配置来提供文件服务。 它通常作为专门制造的专用计算机设备制造。

### 7.2 局域网中通信需要耗费额外的流量吗？

猜测：不需要，因为没有通过运营商网络

### 7.3 和matter协议的区别是什么？

## 八、想法

自己可以基于dlna生成一个共享的局域网服务

## 九、常见设备

最常见也是最常用的电视。通常 DLNA 联盟内的电视厂商出的电视都带有 DLNA 认证

Netgear 、Cisco 和 华硕 500RMB+ 的路由器，原生固件都带 DLNA Server

## 十、DLNA协议的显著特性

是早年的标准且很久未更新。DLNA 宣布组织在2017年1月15日正式解散，未来不会再更新DLAN标准。

1. 在服务器端 (DMS/M-DMS)，多媒体数据不是以文件夹的结构 Publish 给客户端的。而是以 Meta-data 为结构的。比如音乐是按照年份和流派等属性分类的，完全没有文件夹结构的。

2. 服务器端的多媒体文件会有多种编码格式 Publish 给客户端，以供选择。举个例子，服务器端存储的 [wav](https://www.zhihu.com/search?q=wav&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A23109998}) 音频文件，客户端如果不支持的话，服务器端会提供 mp3 的版本给客户端播放或者下载。图片和视频也一样
3.  不支持外挂字幕。
4. DLNA 的 3-box 模式。把网络上的内容通过手机推送到电视或者扬声器，手机只是起到一个控制的作用，数据流是可以不经过手机的，这样的话只要电视或者播放机是有线连接的话，就不会受到无线的速度限制。这一点是比 AirPlay 要好的。在播放 NAS [大码率](https://www.zhihu.com/search?q=大码率&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A23109998})高清影片和卧室观看客厅蓝光播放机内容时，就会很从容了。而且手机也不耗电，关机也不影响。

## 参考文档

[DLNA介绍](https://www.zhihu.com/question/22927139/answer/23109998)

[其他协议](http://www.92nas.com/forum.php?mod=viewthread&tid=352)