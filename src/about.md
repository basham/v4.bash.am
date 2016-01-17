---
title: About
order: 1
---

Since mid-2012, I’ve worked for [Indiana University](http://www.iu.edu/) in the quaint town of [Bloomington](http://en.wikipedia.org/wiki/Bloomington,_Indiana), designing and developing various student-related Web software. As the lead UX designer in a cross-functional Agile team, I train coworkers on design and development processes, and I coordinate best practices with sister teams.

I also co-organize the [Bloomington chapter of IxDA](http://www.meetup.com/IxDA-Bloomington/) in an effort to cultivate the local design community, encouraging student designers and local professionals to share and network. Occasionally I [write](/articles) or [talk](/talks) about my craft, but freely inquire about more details via [email](mailto:chris@bash.am) or [Twitter]({{site.elsewhere.Twitter}} 'Follow me on Twitter').

When not slicing fingers with sticky notes or [refactoring repositories](https://github.com/basham), I'm desperately convincing others to play a backed [Kickstarter](https://www.kickstarter.com/profile/1468456177) game, fervently listening to an [audiobook](http://www.audible.com) or [podcast](http://99percentinvisible.org/), or blissfully running trails in my [sandals](http://www.lunasandals.com/).

<a class="Button" href="../resume">View Résumé</a>

## Colophon

This site is forged with [Metalsmith](http://www.metalsmith.io/) and hosted via [GitHub Pages](https://pages.github.com/). [Merriweather](https://www.google.com/fonts/specimen/Merriweather) and [Inconsolata](http://www.google.com/fonts/specimen/Inconsolata) typefaces are supplied through [Google Fonts](http://www.google.com/fonts).

<a class="Button" href="https://github.com/basham/v4.bash.am">GitHub repository</a>

Past versions of the site are archived for reasons of historical stewardship and general amusement.

- [Version 3, 2010&ndash;2014](http://v3.bash.am)
- [Version 2, 2008&ndash;2009](http://v2.bash.am)
- [Version 1, 2007&ndash;2008](http://v1.bash.am)

## Find me elsewhere

<jade>
p.Elsewhere
  each value, key in site.elsewhere
    a.Button(href=value)= key
</jade>
