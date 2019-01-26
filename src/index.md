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
  - var links = { 'Work': '#work', 'Articles': '#articles', 'Talks': '#talks', 'Colophon': '#colophon', 'Contact': '#contact', 'Résumé': '/resume' }
  nav
    ul.Nav
      each value, key in links
        li.Nav-item
          a.Link.Link--primary(href=value)= key
</jade>

## Design Systems

In mid-2013, as part of a partnership between the [Kuali Foundation](https://kuali.org/) and [Indiana University](https://www.iu.edu/), I started working on the Kuali Student project on the Core Design Team. In this role, I worked alongside the designers of several product teams, to encourage collaboration, alignment, and community. As such, I helped kickoff a UI pattern library called the [Kuali Student Design Guide](/work/ks-design-guide) to start establishing standards and best practices. While the project didn't have time to mature because of the dissolution of the Kuali Student teams, I learned about the complexities of such a system, such as maintenance, political buy-in, versioning, documentation, and governance.

In late 2014, I was assigned to one of several newly formed product teams under the university's Enterprise Student Systems (ESS) division. After a year of understanding the technical directions of the products and the needs of the teams, I started development of the ESS Component Library, as a way to establish a common set of UI components, icons, and colors. The components were built using [React](https://reactjs.org/), vetted by the university's [accessibility experts](https://atac.iu.edu/), and published to the university's enterprise [npm registry](https://www.npmjs.com/). Icons used a mix of custom icons and the [Iconic set](https://useiconic.com/). A [new color palette](/work/iu-color-palette) was adapted from the university's brand colors, and [color variations were systematically generated and codified](/articles/codifying-colors/). Over the course of two years, we published dozens of components and icons, while integrating them into about a half-dozen new products. 

In late 2016, the university established the [User Experience Office](https://ux.iu.edu/) to oversee design efforts across offices, departments, and schools. In collaboration with the university's design and development communities, they maintain the [Rivet Software Design System](https://rivet.iu.edu/), and it has experienced an exponential growth in adoption. I am a regular contributor to Rivet, sharing many lessons learned from my prior design system projects.

## Work

<jade>
ol.WorkList
  - var workList = collections.work.filter((i) => !i.hide)
  each work in workList
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
</jade>

<jade>
p.Article-paragraph
  a.Link.Link--primary(href="https://speakerdeck.com/basham") More slide decks
</jade>

## Colophon

This site is [hosted on GitHub]({{site.repo}}) and uses [Merriweather](https://fonts.google.com/specimen/Merriweather) and [Inconsolata](https://fonts.google.com/specimen/Inconsolata) typefaces. Past versions of this site are archived for reasons of historical stewardship and general amusement:

- [Version 3](http://v3.bash.am), 2010&ndash;2014
- [Version 2](http://v2.bash.am), 2008&ndash;2009
- [Version 1](http://v1.bash.am), 2007&ndash;2008

## Contact

Reach me via email at [{{site.email}}](mailto:{{site.email}}) or find me elsewhere:

<jade>
ul.Nav
  each value, key in site.elsewhere
    li.Nav-item
      a.Link(href=value)= key
</jade>
