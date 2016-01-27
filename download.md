---
layout: page
title: 游戏下载
permalink: /download/
id: 3
download-url-pc:
download-url-android: http://file.lesafe.net/yxhx2.0.000000.60128.apk
download-url-ios:
---

<div class="home">

  <div class="align-center">
    <font color="grey">请选择合适的版本下载</font>
  </div>

  <!--  游戏下载  -->
  <div class="wrapper">
    
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
          {% if page.download-url-android != nil and page.download-url-android != "" %}
          <a href="{{ page.download-url-android }}" target="_blank"><img src="/images/download.png" style="margin: 10px 0px;"></a>
          {%  else %}
          <font color="red">暂未开放</font>
          {% endif %}
        </div>
      </div>
    </div>

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
          {% if page.download-url-ios != nil and page.download-url-ios != "" %}
          <a href="{{ page.download-url-ios }}" target="_blank"><img src="/images/download.png" style="margin: 10px 0px;"></a>
          {%  else %}
          <font color="red">暂未开放</font>
          {% endif %}
        </div>
      </div>
    </div>

    <div class="index-box">
      <div class="page-col-wrapper">           
        <div class="page-col  page-col-1">
          <img src="/images/pc.png"/>
          <div class="align-center">微端版</div>
        </div>

        <div class="page-col  page-col-2">
          <div>程序版本：2.0.000000.60128</div>
          <div>更新日期：2016/1/27</div>
          <div>适配系统：Windows xp/Vista/7/8/10</div>
          {% if page.download-url-pc != nil and page.download-url-pc != "" %}
          <a href="{{ page.download-url-pc }}" target="_blank"><img src="/images/download.png" style="margin: 10px 0px;"></a>
          {%  else %}
          <font color="red">暂未开放</font>
          {% endif %}
        </div>
      </div>
    </div>

  </div>

</div>
