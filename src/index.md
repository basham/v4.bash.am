---
title: Articles
order: 1
hide_title: true
index: articles
permalink: false
---

<jade>
ol.ArticleList
  each article in collections.articles
    li.ArticleList-item
      a.ArticleList-title(href=article.path)= article.title
      time.ArticleList-time(datetime=article.date)= dateFormat(article.date)
</jade>
