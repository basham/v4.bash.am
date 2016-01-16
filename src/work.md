---
title: Work
order: 2
index: work
---

<jade>
ol.ArticleList
  each work in collections.work
    li.ArticleList-item
      span.ArticleList-link
        a.Link(href="/#{work.path}")
          cite.ArticleList-title= work.title
      span.ArticleList-client= work.client
      time.ArticleList-time.ArticleList-time--year(datetime=work.endDate)= yearFormat(work.endDate)
</jade>
