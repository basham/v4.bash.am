---
title: Portfolio
order: 2
---

## Kuali Student Design Guide

<time datetime="2014-03">March</time> &ndash; <time datetime="2014-08">August 2014</time>

The [Kuali Student Design Guide](http://ksux.github.io/ks-design-guide/) is an initial foundation for a design pattern library created to centralize and articulate user interface design decisions occurring within the [Kuali Student](http://www.kuali.org/ks) products. The guide is meant to be maintained by Kuali designers and front-end developers, regularly updated as problems are encountered and resolved throughout development. Patterns are abstracted as nested components, following the [Atomic design methodology](http://bradfrost.com/blog/post/atomic-web-design/). It serves as a daily reference for designers and developers, yet also invites the larger non-design community to see and engage in the process. Research and recommendations are initially documented as [repository issues](https://github.com/ksux/ks-design-guide/issues) before being adopted into the guide.

<figure class="Figure">
  <a class="Figure-imgLink" href="https://cloud.githubusercontent.com/assets/347558/5119089/35e2c4e2-703a-11e4-8607-9679b3dc3fed.png">
![Screenshot of the mobile and widescreen view of the Pagination pattern.](https://cloud.githubusercontent.com/assets/347558/5119089/35e2c4e2-703a-11e4-8607-9679b3dc3fed.png)
  </a>
  <figcaption class="Figure-caption">The Design Guide features a responsive design and statically generated content, making it both accessible and performant.</figcaption>
</figure>

<a class="Button" href="http://ksux.github.io/ks-design-guide/">View the Design Guide</a>
<a class="Button" href="https://github.com/ksux/ks-design-guide">GitHub repository</a>

## Course Registration proof of concept

<time datetime="2013-12">December 2013</time> &ndash; <time datetime="2014-01">January 2014</time>

Using the recommendations as outlined in the [Mobile Strategies for Kuali Student](/articles/mobile-strategies-for-kuali-student) document, a proof of concept for a university course registration application was developed over a period of six weeks as part of an initiation phase for the student enrollment product. The application features a responsive, mobile-first layout, developed in [AngularJS](https://angularjs.org/).

### Backstory

The [Kuali Student](http://www.kuali.org/ks) project is a [student information system](http://en.wikipedia.org/wiki/Student_information_system) [established by the Kuali Foundation in 2007](http://www.kuali.org/about/history). Over the initial years, the primary objective was to build the administrative foundation, which included [Curriculum Management](http://www.kuali.org/ks/functionality/cm) and [Course Offering](http://www.kuali.org/ks/functionality/enr). These applications defined essential relationships, such as:

* What is a course, and how is it offered for any given academic term?
* How do the culmination of attended classes constitute an academic degree?

With this data in place, Kuali Student started to prepare for Registration, which would enable students to search and register for classes for a given academic term. As the first student-facing application within this suite of tools, there was no precedent to follow, and all recognized how different of a user experience is needed when students, not administrators, are the primary audience.

In understanding that there were numerous unknowns regarding the best approach for either design or development, I authored a [document listing a number of recommendations](/articles/mobile-strategies-for-kuali-student) in order to guide the process along, including:

* designing baseline experiences which can be enhanced according to device capabilities or context;
* building a single responsive application, rather than multiple applications intended for different categories of devices;
* ensuring the application is accessible according to [WAI-ARIA](http://en.wikipedia.org/wiki/WAI-ARIA) specifications;
* serving data via [REST web services](http://en.wikipedia.org/wiki/Representational_state_transfer) in order to decouple user interfaces from back-end concerns;
* and generally encouraging more freedom when choosing tools.

<a class="Button" href="/articles/mobile-strategies-for-kuali-student">Read *Mobile Strategies for Kuali Student*</a>

Backing these recommendations, leadership allocated six weeks to develop a proof of concept application that embodied these recommendations.

### Process

* past explorations at IU have shown this is possible
* but those explorations weren't mobile-first

<figure class="Figure">
  <a class="Figure-imgLink" href="https://cloud.githubusercontent.com/assets/347558/5187105/bd27c6a2-7498-11e4-8da6-97ed00a63837.jpg">
    <img src="https://cloud.githubusercontent.com/assets/347558/5187105/bd27c6a2-7498-11e4-8da6-97ed00a63837.jpg" alt="Sketch of a list of selectable university terms."/>
  </a>
  <a class="Figure-imgLink" href="https://cloud.githubusercontent.com/assets/347558/5187153/12ab7d12-7499-11e4-81dd-de3e01e2727d.jpg">
    <img src="https://cloud.githubusercontent.com/assets/347558/5187153/12ab7d12-7499-11e4-81dd-de3e01e2727d.jpg" alt="Sketch of a course search form"/>
  </a>
  <figcaption class="Figure-caption">A <a href="https://www.dropbox.com/s/jmpv8o0fre3xuua/ks-cr-poc-2014-01-09-sketches.pdf?dl=0">series of sketches</a> explored what could be accomplished, within the limited scope of the project.</figcaption>
</figure>

<figure class="Figure">
<a class="Figure-imgLink" href="https://cloud.githubusercontent.com/assets/347558/5187445/392b4858-749b-11e4-9837-9995c39bb213.png">
<img src="https://cloud.githubusercontent.com/assets/347558/5187445/392b4858-749b-11e4-9837-9995c39bb213.png" alt="Wireframe of course search form for mobile"/>
</a>
<figcaption class="Figure-caption">Wireframes helped to define relationships within the interface and explore rudimentary interactions.</figcaption>
</figure>

### Outcomes

The proof of concept successfully demonstrated the rapid speed of development capable by decoupling the front-end from the back-end, the engaging user experience possible through modern client-side JavaScript frameworks, and the incredible performance of [REST web services](http://en.wikipedia.org/wiki/Representational_state_transfer). Based on these results, the development team has continued this general architecture, producing higher quality user experiences in less time than sibling teams.

<figure class="Figure">
  <div class="Embed">
    <iframe src="//player.vimeo.com/video/112133422?title=0&amp;byline=0&amp;portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
  </div>
  <figcaption class="Figure-caption">The proof of concept was demonstrated to all Kuali Student development teams at the end of the allotted six weeks.</figcaption>
</figure>

<a class="Button" href="https://vimeo.com/112133422">Watch demo video</a>
<a class="Button" href="https://github.com/ksux/kscr-poc">GitHub repository</a>

### Reflection

...

## Course Search proof of concept

<time datetime="2013-03">March</time> &ndash; <time datetime="2013-05">May 2013</time>

Tasked with building a proof of concept web application for [Indiana University](http://www.iu.edu/) students to search and bookmark classes, this six-week project was the first attempt within the [University Information Technology Services department](http://uits.iu.edu/) to pair a client-side framework ([AngularJS](https://angularjs.org/)) with [REST web services](http://en.wikipedia.org/wiki/Representational_state_transfer) for a student-facing application.

<figure class="Figure">
  <div class="Embed">
    <iframe src="//player.vimeo.com/video/111944142?title=0&amp;byline=0&amp;portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
  </div>
  <figcaption class="Figure-caption">Demonstration of the proof of concept course search and bookmarking application.</figcaption>
</figure>

<a class="Button" href="https://vimeo.com/111944142">Watch demo video</a>
<a class="Button" href="https://github.com/pxa/course-search">GitHub repository</a>

## Student Billing functional prototype

<time datetime="2013-03">March</time> &ndash; <time datetime="2013-05">May 2013</time>

In late 2012, the [Indiana University](http://www.iu.edu/) student billing user interface was redesigned in order to make it easier for students to understand their monthly statements and pay the balance on their accounts. After numerous low-fidelity design iterations and subsequent user tests, a functional prototype was crafted in [AngularJS](https://angularjs.org/) as a model for the production version.

<figure class="Figure">
  <a class="Figure-imgLink" href="https://cloud.githubusercontent.com/assets/347558/5120220/7a7922c4-704c-11e4-8c3e-09c165d31334.png">
![Screenshot of the Amount Due and Account Status summaries in the student billing prototype.](https://cloud.githubusercontent.com/assets/347558/5120220/7a7922c4-704c-11e4-8c3e-09c165d31334.png)
  </a>
  <figcaption class="Figure-caption">The prototype features two primary views. Current Status provides an easy means for students to understand recent billing activity and pay the account balance, while History provides an archive of all past account activity.</figcaption>
</figure>

<a class="Button" href="http://pxa.github.io/billing">View prototype</a>
<a class="Button" href="https://github.com/pxa/billing">GitHub repository</a>

## Past portfolios

- [Version 3, 2010&ndash;2014](http://v3.bash.am)
- [Version 2, 2008&ndash;2009](http://v2.bash.am)
- [Version 1, 2007&ndash;2008](http://v1.bash.am)
