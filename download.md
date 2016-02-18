---
layout: page
title: 游戏下载
permalink: /download/
id: 3
---

<div class="home">

  <div class="align-center">
    <font color="grey">请选择合适的版本下载</font>
  </div>

  <!--  游戏下载  -->
  <div class="wrapper">
    
    <hr class="top">
    <div class="index-box">
      <div class="page-col-wrapper">           
        <div class="page-col  page-col-1">
          <img src="/images/android.png"/>
          <div class="align-center">安卓版</div>          
        </div>

        <div class="page-col  page-col-2">    
          <div>程序版本：2.0.000000.60128</div>
          <div>更新日期：2016/1/27</div>
          <div>适配系统：Android 2.3 以上</div>
          {% if site.download-url-android != nil and site.download-url-android != "" %}
          <a href="{{ site.download-url-android }}" target="_blank"><img src="/images/download.png" style="margin: 10px 0px;"></a>
          {%  else %}
          <font color="red">暂未开放</font>
          {% endif %}
        </div>
      </div>
    </div>
    <hr class="bottom">
    <br>

    <hr class="top">
    <div class="index-box">
      <div class="page-col-wrapper">           
        <div class="page-col  page-col-1">
          <img src="/images/pc.png"/>
          <div class="align-center">微端版</div>
        </div>

        <div class="page-col  page-col-2">
          <div>程序版本：2.0.000000.60217</div>
          <div>更新日期：2016/2/17</div>
          <div>适配系统：Windows XP/Vista/7/8/10</div>
          {% if site.download-url-pc != nil and site.download-url-pc != "" %}
          <a href="{{ site.download-url-pc }}" target="_blank"><img src="/images/download.png" style="margin: 10px 0px;"></a>
          {%  else %}
          <font color="red">暂未开放</font>
          {% endif %}
        </div>
      </div>
    </div>
    <hr class="bottom">
    <br>

    <hr class="top">
    <div class="index-box">
      <div class="page-col-wrapper">           
        <div class="page-col  page-col-1">
          <img src="/images/ios.png"/>
          <div class="align-center">苹果版</div>
        </div>

        <div class="page-col  page-col-2">
          <div>程序版本：2.0.000000.60128</div>
          <div>更新日期：2016/1/27</div>
          <div>适配系统：iOS 6.0 以上</div>
          {% if site.download-url-ios != nil and site.download-url-ios != "" %}
          <a href="{{ site.download-url-ios }}" target="_blank"><img src="/images/download.png" style="margin: 10px 0px;"></a>
          {%  else %}
          <font color="red">暂未开放</font>
          {% endif %}
        </div>
      </div>
    </div>
    <hr class="bottom">
    <br>

  </div>

</div>
