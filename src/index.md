---
title: Chris Basham
hide_title: true
hide_header: true
---

<jade>
.Article-header
  h1.Article-h1= title
  figure.ProfileFigure
    a(href="https://cloud.githubusercontent.com/assets/347558/13899180/a64ead02-edbd-11e5-91a1-7eaa06e06f18.jpg")
      img.ProfileFigure-img(
        alt="headshot of Chris Basham",
        height="200",
        src="https://cloud.githubusercontent.com/assets/347558/13899452/e7535698-edc4-11e5-89ab-0187467ce700.jpg",
        width="200")
  p.Article-paragraph
    | I&rsquo;m Chris, a craftsman of Web applications, equally skilled in both designing and developing user interfaces. I&nbsp;believe every word, byte, and pixel is an opportunity for a person to experience a #[a(class="Link", href="/articles/storytellers") new and better story], one #[a(class="Link", href="/articles/heartbeats") worth the heartbeats] it demands.
  - var links = 'Work,About,Articles,Talks,Contact'.split(',')
  nav
    ul.Nav
      each value in links
        li.Nav-item
          - var href = '#' + value.toLowerCase()
          a.Link.Link--primary(href=href)= value
</jade>

## Work

<jade>
ol.WorkList
  each work in collections.work
    li.WorkList-item
      if work.previewImage
        a.WorkList-preview.Link(href="/#{work.path}", aria-hidden="true", tabindex="-1")
          img.WorkList-image(src="#{work.previewImage}")
      .WorkList-content
        a.Link(href="/#{work.path}")
          cite.WorkList-title= work.title
        p.WorkList-description= work.description
</jade>

## About

Since 2012, I’ve worked for [Indiana University](http://www.iu.edu/) in the quaint town of [Bloomington](http://en.wikipedia.org/wiki/Bloomington,_Indiana), designing and developing student-related Web software. As the UX designer in a cross-functional Agile team, I train coworkers on design and development processes, and I coordinate best practices with sister teams.

I also co-organize the [Bloomington chapter of IxDA]({{site.ixda_bloomington}}) in an effort to cultivate the local design community, encouraging student designers and local professionals to socialize and share expertise. Occasionally I [write](#articles) or [talk](#talks) about my [work](#work), design philosophy, practices, and strategy. [Email me](mailto:{{site.email}}) or [find me elsewhere](#contact) if you want to chat.

When not slicing fingers with sticky notes or [refactoring repositories]({{site.elsewhere.GitHub}}), I'm desperately convincing others to play a backed [Kickstarter]({{site.elsewhere.Kickstarter}}) game, fervently listening to an [audiobook](http://www.audible.com) or [podcast](http://99percentinvisible.org/), or blissfully running trails in my [sandals](http://www.lunasandals.com/).

<jade>
- var links = { 'Résumé': '/resume', 'Colophon': '/colophon' }
ul.Nav
  each value, key in links
    li.Nav-item
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
        time.ArticleList-time(datetime=article.date)= yearFormat(article.date)
        if article.description
          |  &middot; 
          = article.description
</jade>

## Talks

<jade>
ol.ArticleList
  each talk in collections.talks
    li.ArticleList-item
      a.Link(href="/#{talk.path}")
        cite.ArticleList-title= talk.title
      p.ArticleList-description
        time.ArticleList-time(datetime=talk.date)= yearFormat(talk.date)
        |  &middot; 
        = talk.location
p.Article-paragraph
  a.Link.Link--primary(href="#{site.elsewhere['Speaker Deck']}") More slide decks
</jade>

## Contact

Reach me via email at [{{site.email}}](mailto:{{site.email}}) or find me elsewhere:

<jade>
ul.Nav
  each value, key in site.elsewhere
    li.Nav-item
      a.Link(href=value)= key
</jade>
