---
layout: page
title: 游戏活动
permalink: /activity/
id: 2
---

<div class="home">

  <h1 class="page-heading">游戏活动</h1>

  <ul class="post-list">
    {% for post in site.categories.activity %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
      </li>
    {% endfor %}
  </ul>

</div>
