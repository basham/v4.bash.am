---
title: Work
order: 2
---

## Kuali Student Design Guide

<time datetime="2014-03">March</time> &ndash; <time datetime="2014-08">August 2014</time>

The [Kuali Student Design Guide](http://ksux.github.io/ks-design-guide/) is an initial foundation for a design pattern library created to centralize and articulate user interface design decisions occurring within the [Kuali Student](http://www.kuali.org/ks) products. The guide is meant to be maintained by Kuali designers and front-end developers, regularly updated as problems are encountered and resolved throughout development. Patterns are abstracted as nested components, following the [Atomic design methodology](http://bradfrost.com/blog/post/atomic-web-design/). It serves as a daily reference for designers and developers, yet also invites the larger non-design community to see and engage in the process. Research and recommendations are initially documented as [repository issues](https://github.com/ksux/ks-design-guide/issues) before being adopted into the guide.

<jade>
figure.Figure
  a.Figure-imgLink(href="https://cloud.githubusercontent.com/assets/347558/5119089/35e2c4e2-703a-11e4-8607-9679b3dc3fed.png")
    img(
      alt="Screenshot of the mobile and widescreen view of the Pagination pattern."
      src="https://cloud.githubusercontent.com/assets/347558/5119089/35e2c4e2-703a-11e4-8607-9679b3dc3fed.png")
  figcaption.Figure-caption
    p The Design Guide features a responsive design and statically generated content, making it both accessible and performant.
    p
      a.Button(href="http://ksux.github.io/ks-design-guide/") View the Design Guide
      a.Button(href="https://github.com/ksux/ks-design-guide") GitHub repository
</jade>

## Course Registration proof of concept

<time datetime="2013-12">December 2013</time> &ndash; <time datetime="2014-01">January 2014</time>

Using the recommendations as outlined in the [<cite>Mobile Strategies for Kuali Student</cite>](/articles/mobile-strategies-for-kuali-student) document, a proof of concept for a university course registration application was developed over a period of six weeks as part of an initiation phase for the student enrollment product. The application features a responsive, mobile-first interface, developed in [AngularJS](https://angularjs.org/).

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

<a class="Button" href="/articles/mobile-strategies-for-kuali-student">Read <cite>Mobile Strategies for Kuali Student</cite></a>

Backing these recommendations, leadership allocated six weeks to develop a proof of concept application that embodied these recommendations.

### Process

While a separate team prepared the back-end to offer a web services layer, I spent most of the first couple weeks sketching and producing wireframes of the interface, keeping in mind small and larger viewports.

<jade>
figure.Figure
  a.Figure-imgLink(href="https://cloud.githubusercontent.com/assets/347558/5240378/a5a834ee-78d0-11e4-82ad-346272517202.png")
    img(
      alt="Sketch of a list of selectable university terms."
      src="https://cloud.githubusercontent.com/assets/347558/5240378/a5a834ee-78d0-11e4-82ad-346272517202.png")
  a.Figure-imgLink(href="https://cloud.githubusercontent.com/assets/347558/5240382/bea41b0c-78d0-11e4-9165-42618c3d2d5b.png")
    img(
      alt="Sketch of a list of selectable university terms."
      src="https://cloud.githubusercontent.com/assets/347558/5240382/bea41b0c-78d0-11e4-9165-42618c3d2d5b.png")
  figcaption.Figure-caption
    | A <a href="https://www.dropbox.com/s/jmpv8o0fre3xuua/ks-cr-poc-2014-01-09-sketches.pdf?dl=0">series of sketches</a> explored how to navigate among academic terms.
</jade>

<jade>
figure.Figure
  a.Figure-imgLink(href="https://cloud.githubusercontent.com/assets/347558/5187445/392b4858-749b-11e4-9837-9995c39bb213.png")
    img(
      alt="Wireframe of course search form for mobile."
      src="https://cloud.githubusercontent.com/assets/347558/5187445/392b4858-749b-11e4-9837-9995c39bb213.png")
  figcaption.Figure-caption Wireframes helped to define relationships within the interface and explore rudimentary interactions.
</jade>

Leveraging my experience using the [AngularJS](https://angularjs.org/) framework the past year for Indiana University projects, I was able to quickly develop the general architecture of the front-end. Once the markup and styles fleshed out, data embedded into the markup was abstracted into static [JSON](http://en.wikipedia.org/wiki/JSON) fixtures, and the template was altered to be dynamically driven by these fixtures. With the fixtures as a guide, the services team was able to adapt the [web API](http://en.wikipedia.org/wiki/Web_API) to match the fixtures. By the third week, the fixtures were starting to be replaced by live web services.

<jade>
figure.Figure.Figure--code
  <script src="http://gist-it.sudarmuthu.com/https://github.com/ksux/kscr-poc/blob/069e8ac18a45aadfb380eb3ebfe7275223690b49/app/modules/shared/services/ScheduleService.js?footer=no"></script>
  figcaption.Figure-caption
    | Templates were originally driven by static JSON fixtures, such as in the <a href="https://github.com/ksux/kscr-poc/blob/069e8ac18a45aadfb380eb3ebfe7275223690b49/app/modules/shared/services/ScheduleService.js"><em>ScheduleService</em></a>.
</jade>

<jade>
figure.Figure.Figure--code
  <script src="http://gist-it.sudarmuthu.com/https://github.com/ksux/kscr-poc/blob/8cb8ce312cb3a8fa828b7dcdf703a742bd7eaf89/app/modules/app/schedule.js?footer=no"></script>
  figcaption.Figure-caption
    | Once built, JSON fixtures were replaced by live web services, such as in the <a href="https://github.com/ksux/kscr-poc/blob/069e8ac18a45aadfb380eb3ebfe7275223690b49/app/modules/shared/services/ScheduleService.js"><em>scheduleService</em> provider</a>.
</jade>

Even though the proof of concept was primarily concerned with the technical feasibility of this approach, I was still able to receive rudimentary student feedback to guide refinement of the user interface throughout the entire project, by means of an Indiana University undergraduate intern.

In order to ensure basic accessibility, the proof of concept was frequently tested with a keyboard as the sole input device.

### Outcomes

The proof of concept successfully demonstrated the rapid speed of development capable by decoupling the front-end from the back-end, the engaging user experience possible through modern client-side JavaScript frameworks, and the incredible performance of [REST web services](http://en.wikipedia.org/wiki/Representational_state_transfer). Based on these results, the development team has continued this general architecture, producing higher quality user experiences in less time than sibling teams.

For the first few months following the proof of concept, I guided the Registration development team as they learned AngularJS, and I frequently provided feedback regarding both design and development directions.

<jade>
figure.Figure
  .Embed
    <iframe src="//player.vimeo.com/video/112133422?title=0&amp;byline=0&amp;portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
  figcaption.Figure-caption
    p The proof of concept was demonstrated to Kuali Student development teams at the end of the allotted six weeks.
    p
      a.Button(href="https://vimeo.com/112133422") Watch demo video
      a.Button(href="https://github.com/ksux/kscr-poc") GitHub repository
</jade>

### Reflection

Since the purpose of the proof of concept was challenging technical concerns over design concerns, a number of design compromises were made. By devoting either more time or a second designer to the project, more effort would have been placed in refining lower fidelity ideas before rushing into code; a visual style would be explored, especially regarding typography and color; and further feedback would be gathered from students, including those proficient with assistive technologies.

## Course Search proof of concept

<time datetime="2013-03">March</time> &ndash; <time datetime="2013-05">May 2013</time>

Tasked with building a proof of concept web application for [Indiana University](http://www.iu.edu/) students to search and bookmark classes, this six-week project was the first attempt within the [University Information Technology Services department](http://uits.iu.edu/) to pair a client-side framework ([AngularJS](https://angularjs.org/)) with [REST web services](http://en.wikipedia.org/wiki/Representational_state_transfer) for a student-facing application.

<jade>
figure.Figure
  .Embed
    <iframe src="//player.vimeo.com/video/111944142?title=0&amp;byline=0&amp;portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
  figcaption.Figure-caption
    p Demonstration of the proof of concept course search and bookmarking application.
    p
      a.Button(href="https://vimeo.com/111944142") Watch demo video
      a.Button(href="https://github.com/pxa/course-search") GitHub repository
</jade>

## Student Billing functional prototype

<time datetime="2013-03">March</time> &ndash; <time datetime="2013-05">May 2013</time>

In late 2012, the [Indiana University](http://www.iu.edu/) student billing user interface was redesigned in order to make it easier for students to understand their monthly statements and pay the balance on their accounts. After numerous low-fidelity design iterations and subsequent user tests, a functional prototype was crafted in [AngularJS](https://angularjs.org/) as a model for the production version.

<jade>
figure.Figure
  a.Figure-imgLink(href="https://cloud.githubusercontent.com/assets/347558/5120220/7a7922c4-704c-11e4-8c3e-09c165d31334.png")
    img(
      alt="Screenshot of the Amount Due and Account Status summaries in the student billing prototype."
      src="https://cloud.githubusercontent.com/assets/347558/5120220/7a7922c4-704c-11e4-8c3e-09c165d31334.png")
  figcaption.Figure-caption
    p The prototype features two primary views. Current Status provides an easy means for students to understand recent billing activity and pay the account balance, while History provides an archive of all past account activity.
    p
      a.Button(href="http://pxa.github.io/billing") View prototype
      a.Button(href="https://github.com/pxa/billing") GitHub repository
</jade>
