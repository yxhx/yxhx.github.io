---
layout: page
title: 游戏日志
permalink: /blogs/
id: 1
---

<div class="home">  

  <ul class="post-list">
    {% for post in site.categories.blogs %}
      <li>       

        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
      </li>
    {% endfor %}
  </ul>

</div>