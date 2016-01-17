---
title: Articles
order: 3
index: articles
---

<jade>
ol.ArticleList
  each article in collections.articles
    li.ArticleList-item
      span.ArticleList-link
        a.Link(href="/#{article.path}")
          cite.ArticleList-title= article.title
      time.ArticleList-time(datetime=article.date)= dateFormat(article.date)
</jade>
