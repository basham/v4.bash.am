---
title: Articles
order: 1
hide_title: true
permalink: false
---

<ol class="ArticleList">
{{#each collections.articles}}
  <li class="ArticleList-item">
    <a class="ArticleList-title" href="{{path}}">{{title}}</a>
    <time class="ArticleList-time" datetime="{{date}}">{{formatDate date}}</time>
  </li>
{{/each}}
</ol>
