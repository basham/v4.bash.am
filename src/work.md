---
title: Work
order: 2
index: work
---

<jade>
ol.ArticleList
  each work in collections.work
    li.ArticleList-item
      a(href="/#{work.path}")
        cite.ArticleList-title= work.title
      span.ArticleList-client= work.client
      time.ArticleList-time(datetime=work.endDate, pubdate)= work.endDateLabel
</jade>
