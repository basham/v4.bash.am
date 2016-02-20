---
title: Talks
order: 4
description: I speak at conferences and local meetups.
---

<jade>
ol.ArticleList
  each talk in collections.talks
    li.ArticleList-item
      cite.ArticleList-title
        a.Link(href="/#{talk.path}")= talk.title
      p.ArticleList-description= talk.location
.Article-section
  hr.Article-hr
p.Article-paragraph.Article-paragraph--center
  a.Button(href="https://speakerdeck.com/basham") View more slide decks on Speaker Deck
</jade>
