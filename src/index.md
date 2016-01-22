---
title: Designer & Developer
hide_title: true
permalink: false
---

I'm Chris Basham, a craftsman of Web applications, equally skilled in both designing and developing user interfaces. I believe every word, byte, and pixel is an opportunity for a person to experience a [new and better story](/articles/storytellers), one [worth the heartbeats](/articles/heartbeats) it demands.

<jade>
p.Article-paragraph
  a.Link.Link--primary(href="/about") More about me
</jade>

<jade>
.Article-notice
  p.Article-paragraph
   | #[strong January 2016:] I’m seeking to relocate to Colorado and join a design team in a mid-to-senior-level role, contributing as both an interaction designer and a front-end developer. I want practice in user research, and I want to mentor junior team members. If you think I’m a good fit for your company or if you have any leads, please #[a.Link(href="mailto:{{site.email}}") email me].
  p.Article-paragraph
    a.Link.Link--primary(href="/resume") Résumé
</jade>

## Work

<jade>
ol.ArticleList
  each work in collections.work.slice(0, 2)
    li.ArticleList-item
      a.Link(href="/#{work.path}")
        cite.ArticleList-title= work.title
      p.ArticleList-description= work.description
p.Article-paragraph
  a.Link.Link--primary(href="/work") All work
</jade>

## Articles

<jade>
ol.ArticleList
  each article in collections.articles.slice(0, 2)
    li.ArticleList-item
      a.Link(href="/#{article.path}")
        cite.ArticleList-title= article.title
      p.ArticleList-description
        time.ArticleList-time(datetime=article.date)= dateFormat(article.date)
p.Article-paragraph
  a.Link.Link--primary(href="/articles") All articles
</jade>

## Talks

Occasionally, I've given talks.

## Contact

Reach me via email at <{{site.email}}> or Twitter at [@{{site.twitter}}]({{site.elsewhere.Twitter}} 'Follow me on Twitter').
