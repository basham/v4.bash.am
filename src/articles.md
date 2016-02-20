---
title: Articles
order: 3
index: articles
description: I write about design philosophy, practices, and strategy.
---

<jade>
ol.ArticleList
  each article in collections.articles
    li.ArticleList-item
      a.Link(href="/#{article.path}")
        cite.ArticleList-title= article.title
      p.ArticleList-description
        time.ArticleList-time(datetime=article.date)= dateFormat(article.date)
</jade>
