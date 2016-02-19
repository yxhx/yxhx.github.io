---
layout: page
title: 游戏资料
permalink: /arts/
id: 2
---

<div class="home">  


  <hr class="top">

  <div class="page-col page-col-1">
  	<h3>游戏介绍</h3>
    {% for post in site.categories.arts_1 %}
    <div>   
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
     </div>        
    {% endfor %}
  </div>

  <div class="page-col page-col-2">
  	<h3>特色系统</h3>
    {% for post in site.categories.arts_2 %}
    <div>   
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
     </div>        
    {% endfor %}
  </div>

  <div class="clear"/>
  <hr class="bottom">
  <div><br><br></div>
  <hr class="top">


  <div class="page-col page-col-1">
  	<h3>游戏玩法</h3>
    {% for post in site.categories.arts_3 %}
    <div>   
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
     </div>        
    {% endfor %}
  </div>

  <div class="page-col page-col-2">
  	<h3>游戏活动</h3>
    {% for post in site.categories.arts_4 %}
    <div>   
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
     </div>        
    {% endfor %}
  </div>

  <div class="clear"/>
  <hr class="bottom">


</div>