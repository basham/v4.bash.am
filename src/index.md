# {{site.author}}

<jade>
figure.ProfileFigure
  a(href="https://cloud.githubusercontent.com/assets/347558/13899180/a64ead02-edbd-11e5-91a1-7eaa06e06f18.jpg")
    img.ProfileFigure-img(
      alt="Headshot of {{site.author}}",
      height="200",
      src="https://cloud.githubusercontent.com/assets/347558/13899452/e7535698-edc4-11e5-89ab-0187467ce700.jpg",
      width="200")
</jade>

I'm Chris, a designer and front-end developer for [Indiana University](https://uits.iu.edu/) in [Bloomington](https://www.visitbloomington.com/). I work on a cross-functional Agile team, building enterprise web software for students, advisors, and faculty. I'm interested in [<b>application development</b>](#application-development), [<b>design systems</b>](#design-systems), and [<b>team practices</b>](#team-practices).

For more details, explore my [<b>work</b>](#work), [<b>articles</b>](#articles), [<b>talks</b>](#talks), and [<b>résumé</b>](/resume)&thinsp;&mdash;&thinsp;or [<b>contact me</b>](#contact).

Outside of work, I play [Kickstarter board games](https://www.kickstarter.com/profile/basham), listen to [audiobooks](https://www.audible.com/) and [podcasts](https://99percentinvisible.org/), and run trails in my [sandals](https://lunasandals.com/).

## Application development

In 2013, I started experimenting with using the [AngularJS](https://angularjs.org/) framework for building functional prototypes, such as new interfaces for students [<b>viewing their billing information</b>](/work/iu-student-billing), [<b>searching for courses</b>](/work/iu-course-search), and [<b>registering for classes</b>](/work/ks-course-registration). Each proof-of-concept built on the next, teaching me about REST APIs, minification, version control ([git](https://git-scm.com/) and [GitHub](https://github.com/)), accessibility ([WAI-ARIA](https://en.wikipedia.org/wiki/WAI-ARIA)), build systems ([Grunt](https://gruntjs.com/) and [gulp.js](https://gulpjs.com/)), NoSQL databases ([Firebase](https://firebase.google.com/)), and mobile-first and responsive design.

From 2014 to 2016, I studied CSS, trying to determine best practices for [using CSS units](https://gist.github.com/basham/2175a16ab7c60ce8e001), [integrating media queries](https://gist.github.com/basham/3b24062dfaecaa712a68), [organizing project files](https://gist.github.com/basham/877db54fffb08e47bd39), and [<b>setting style naming conventions</b>](/talks/architecting-css).

In 2015, I shifted to [React](https://reactjs.org/) as my rendering library choice.

React. Reflux as simplier Flux. AdRx Quick Notes in 2015. SAS Student in 2015. Cycle.js. RxJS experiments in 2016. SER in 2017. Conduit in 2017.

Review code samples on [GitHub]({{site.elsewhere.GitHub}}) or [CodePen]({{site.elsewhere.CodePen}}).

## Design systems

In mid-2013, as part of a partnership between the [Kuali Foundation](https://kuali.org/) and [Indiana University](https://www.iu.edu/), I started working on the Kuali Student project on the Core Design Team. In this role, I worked alongside the designers of several product teams, to encourage collaboration, alignment, and community. As such, I helped kickoff a UI pattern library called the [<b>Kuali Student Design Guide</b>](/work/ks-design-guide) to start establishing standards and best practices. While the project didn't have time to mature because of the dissolution of the Kuali Student teams, I learned about the complexities of such a system, such as maintenance, political buy-in, versioning, documentation, and governance.

In late 2014, I was assigned to one of several newly formed product teams under the university's Enterprise Student Systems (ESS) division. After a year of understanding the technical directions of the products and the needs of the teams, I started development of the ESS Component Library, as a way to establish a common set of UI components, icons, and colors. The components were built using [React](https://reactjs.org/), vetted by the university's [accessibility experts](https://atac.iu.edu/), and published to the university's enterprise [npm registry](https://www.npmjs.com/). Icons used a mix of custom icons and the [Iconic set](https://useiconic.com/). A [<b>new color palette</b>](/work/iu-color-palette) was adapted from the university's brand colors, and [<b>color variations were systematically generated and codified</b>](/articles/codifying-colors/). Over the course of two years, we published dozens of components and icons, while integrating them into about a half-dozen new products. 

In late 2016, the university established the [User Experience Office](https://ux.iu.edu/) to oversee design efforts across offices, departments, and schools. In collaboration with the university's design and development communities, they maintain the [Rivet Software Design System](https://rivet.iu.edu/), and it has experienced an exponential growth in adoption. I am a regular contributor to Rivet, sharing many lessons learned from my prior design system projects.

## Team practices

Faciliation. Agile. Lean UX. User research. Accessibility. Roles. Training. Designer facilitates the design process, not owns it.

## Work

<jade>
ol.ArticleList
  each item in collections.work
    li.ArticleList-item
      a.Link(href="/#{item.path}")
        cite.ArticleList-title= item.title
      p.ArticleList-description
        time.ArticleList-time= yearFormat(item.date || item.endDate)
        if item.description
          |  &middot; 
          = item.description
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

[More slide decks](https://speakerdeck.com/basham)

## Colophon

This site is [hosted on GitHub]({{site.repo}}) and uses [Noto Sans](https://fonts.google.com/specimen/Noto+Sans) and [Inconsolata](https://fonts.google.com/specimen/Inconsolata) typefaces. Past versions of this site are archived for reasons of historical stewardship and general amusement:

- [Version 3](http://v3.bash.am), 2010&ndash;2014
- [Version 2](http://v2.bash.am), 2008&ndash;2009
- [Version 1](http://v1.bash.am), 2007&ndash;2008

## Contact

Reach me at [<b>{{site.email}}</b>](mailto:{{site.email}}).

Follow me on [Twitter]({{site.elsewhere.Twitter}}), [GitHub]({{site.elsewhere.GitHub}}), and [CodePen]({{site.elsewhere.CodePen}}).
