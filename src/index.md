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
    | I&rsquo;m Chris, a designer and front-end developer of Web applications for #[a(class="Link", href="https://uits.iu.edu/") Indiana University] in #[a(class="Link", href="http://en.wikipedia.org/wiki/Bloomington,_Indiana") Bloomington]. I work on a cross-functional Agile team, building enterprise software for students, advisors, and faculty. I experiment with new design and development techniques, and I train coworkers on best practices.
  p.Article-paragraph
    | Outside of work, I play #[a(class="Link", href="https://www.kickstarter.com/profile/basham") Kickstarter board games], listen to #[a(class="Link", href="https://www.audible.com/") audiobooks] and #[a(class="Link", href="https://99percentinvisible.org/") podcasts], and run trails in my #[a(class="Link", href="https://lunasandals.com/") sandals].
  - var links = { 'Work': '#work', 'Articles': '#articles', 'Talks': '#talks', 'Contact': '#contact', 'Résumé': '/resume', 'Colophon': '/colophon' }
  nav
    ul.Nav
      each value, key in links
        li.Nav-item
          a.Link.Link--primary(href=value)= key
</jade>

## Work

<jade>
ol.WorkList
  each work in collections.work
    li.WorkList-item
      .WorkList-content
        a.Link(href="/#{work.path}")
          cite.WorkList-title= work.title
        p.WorkList-description= work.description
      if work.previewImage
        a.WorkList-preview.Link(href="/#{work.path}", aria-hidden="true", tabindex="-1")
          img.WorkList-image(src="#{work.previewImage}")
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
