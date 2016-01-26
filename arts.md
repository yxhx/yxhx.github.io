---
layout: page
title: 游戏资料
permalink: /arts/
id: 2
---

<div class="home">  

  <ul class="post-list">
    {% for post in site.categories.arts %}
      <li>       

        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
      </li>
    {% endfor %}
  </ul>

</div>