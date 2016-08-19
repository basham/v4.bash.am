---
title: Designer & Developer
hide_title: true
---

I'm Chris Basham, a craftsman of Web applications, equally skilled in both designing and developing user interfaces. I believe every word, byte, and pixel is an opportunity for a person to experience a [new and better story](/articles/storytellers), one [worth the heartbeats](/articles/heartbeats) it demands.

<jade>
p.Article-paragraph
  a.Link.Link--primary(href="/about") More about me
</jade>

</div>

<div class="Article-section">

<md>

## Work

I [reflect](/work) on what I've designed and what I've learned from the process.

<jade>
ol.ArticleList
  each work in collections.work.slice(0, 2)
    li.ArticleList-item
      a.Link(href="/#{work.path}")
        cite.ArticleList-title.ArticleList-title--small= work.title
      p.ArticleList-description= work.description
</jade>

## Articles

I [write](/articles) about design philosophy, practices, and strategy.

<jade>
ol.ArticleList
  each article in collections.articles.slice(0, 2)
    li.ArticleList-item
      a.Link(href="/#{article.path}")
        cite.ArticleList-title.ArticleList-title--small= article.title
      p.ArticleList-description
        time.ArticleList-time(datetime=article.date)= dateFormat(article.date)
</jade>

## Talks

I [speak](/talks) at conferences and local meetups.

<jade>
ol.ArticleList
  each talk in collections.talks.slice(0, 2)
    li.ArticleList-item
      a.Link(href="/#{talk.path}")
        cite.ArticleList-title.ArticleList-title--small= talk.title
      p.ArticleList-description= talk.location
</jade>

## Contact

Reach me via email at [{{site.email}}](mailto:{{site.email}}) or Twitter at [@{{site.twitter}}]({{site.elsewhere.Twitter}} 'Follow me on Twitter').

</md>
