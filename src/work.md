---
title: Work
order: 2
index: work
description: I reflect on what I’ve designed and what I’ve learned from the process.
---

<jade>
ol.ArticleList
  each work in collections.work
    li.ArticleList-item
      a.Link(href="/#{work.path}")
        cite.ArticleList-title= work.title
      p.ArticleList-description= work.description
</jade>
