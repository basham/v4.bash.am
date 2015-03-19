---
title: Home
order: 1
hide_title: true
hide_heading: true
permalink: false
---

I'm Chris Basham, an [interaction designer](http://en.wikipedia.org/wiki/Interaction_design) and [front-end developer](http://en.wikipedia.org/wiki/Front_end_development) living in the quaint town of [Bloomington, Indiana](http://en.wikipedia.org/wiki/Bloomington,_Indiana). Since <time class="Article-time" datetime="2012-07">mid-2012</time>, I've worked for [Indiana University](http://www.iu.edu/), designing and developing various student-related web software.

When not slicing fingers with sticky notes or [refactoring repositories](https://github.com/basham), I'm desperately convincing others to play a backed [Kickstarter](https://www.kickstarter.com/profile/1468456177) game, fervently listening to an [audiobook](http://www.audible.com) or [podcast](http://99percentinvisible.org/), or blissfully running trails in my [sandals](http://www.lunasandals.com/).

## Articles

<ol class="ArticleList">
{{#each collections.articles}}
  <li class="ArticleList-item">
    <time class="ArticleList-time" datetime="{{date}}">{{formatDate date}}</time>
    <a href="{{path}}">{{title}}</a>
  </li>
{{/each}}
</ol>

## Find me elsewhere

<p class="Elsewhere">
{{#each site.elsewhere}}
  <a class="Button" href="{{this}}">{{@key}}</a>
{{/each}}
</p>
