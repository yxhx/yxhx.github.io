---
layout: page
title: 新闻公告
permalink: /news/
id: 1
---

<div class="home">

  <h1 class="page-heading">新闻公告</h1>

  <ul class="post-list">
    {% for post in site.categories.news %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
      </li>
    {% endfor %}
  </ul>

</div>