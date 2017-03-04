---
title: Chris Basham
hide_title: true
---

<jade>
figure.ProfileFigure
  a(href="https://cloud.githubusercontent.com/assets/347558/13899180/a64ead02-edbd-11e5-91a1-7eaa06e06f18.jpg")
    img.ProfileFigure-img(
      alt="headshot of Chris Basham",
      height="200",
      src="https://cloud.githubusercontent.com/assets/347558/13899452/e7535698-edc4-11e5-89ab-0187467ce700.jpg",
      width="200")
</jade>

I'm Chris, a craftsman of Web applications, equally skilled in both designing and developing user interfaces. I believe every word, byte, and pixel is an opportunity for a person to experience a [new and better story](/articles/storytellers), one [worth the heartbeats](/articles/heartbeats) it demands.

I [reflect](#work) on what I've designed and what I've learned from the process. I [write](#articles) about design philosophy, practices, and strategy. I [speak](#talks) at conferences and local meetups.

<jade>
- var links = 'Work,About,Articles,Talks,Contact'.split(',')
nav
  ul.Elsewhere
    each value in links
      li.Elsewhere-item
        - var href = '#' + value.toLowerCase()
        a.Link.Link--primary(href=href)= value
</jade>

</div>

<div class="Article-section">

<md>

## Work

<jade>
ol.ArticleList
  each work in collections.work
    li.ArticleList-item
      a.Link(href="/#{work.path}")
        cite.ArticleList-title= work.title
      p.ArticleList-description= work.description
</jade>

## About

Since 2012, I’ve worked for [Indiana University](http://www.iu.edu/) in the quaint town of [Bloomington](http://en.wikipedia.org/wiki/Bloomington,_Indiana), designing and developing student-related Web software. As the lead UX designer in a cross-functional Agile team, I train coworkers on design and development processes, and I coordinate best practices with sister teams.

I also co-organize the [Bloomington chapter of IxDA]({{site.ixda_bloomington}}) in an effort to cultivate the local design community, encouraging student designers and local professionals to socialize and share expertise. Occasionally I [write](/articles) or [talk](/talks) about my [craft](/work). The best ways to contact me are by [email](mailto:{{site.email}}) or [Twitter]({{site.elsewhere.Twitter}} 'Follow me on Twitter').

When not slicing fingers with sticky notes or [refactoring repositories]({{site.elsewhere.GitHub}}), I'm desperately convincing others to play a backed [Kickstarter]({{site.elsewhere.Kickstarter}}) game, fervently listening to an [audiobook](http://www.audible.com) or [podcast](http://99percentinvisible.org/), or blissfully running trails in my [sandals](http://www.lunasandals.com/).

<jade>
- var links = { 'Résumé': '/resume', 'Colophon': '/colophon' }
ul.Elsewhere
  each value, key in links
    li.Elsewhere-item
      a.Link.Link--primary(href=value)= key
</jade>

## Articles

<jade>
ol.ArticleList
  each article in collections.articles
    li.ArticleList-item
      a.Link(href="/#{article.path}")
        cite.ArticleList-title= article.title
      p.ArticleList-description
        if article.description
          = article.description
          |  &mdash;
        time.ArticleList-time(datetime=article.date)= monthFormat(article.date)
</jade>

## Talks

<jade>
ol.ArticleList
  each talk in collections.talks
    li.ArticleList-item
      a.Link(href="/#{talk.path}")
        cite.ArticleList-title= talk.title
      p.ArticleList-description= talk.location
</jade>

## Contact

Reach me via email at [{{site.email}}](mailto:{{site.email}}) or find me elsewhere:

<jade>
ul.Elsewhere
  each value, key in site.elsewhere
    li.Elsewhere-item
      a.Link(href=value)= key
</jade>

</md>
