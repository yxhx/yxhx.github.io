---
layout: page
title: 游戏资料
permalink: /arts/
id: 2
---

<div class="home">  

  <div class="page-col">
    {% for post in site.categories.arts %}
    <div>   
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
     </div>        
    {% endfor %}
  </div>

</div>