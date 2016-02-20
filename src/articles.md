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
      cite.ArticleList-title
        a.Link(href="/#{article.path}")= article.title
      p.ArticleList-description
        time.ArticleList-time(datetime=article.date)= dateFormat(article.date)
</jade>
