---
title: Course Registration
startDate: '2013-12-01'
startDateLabel: December 2013
endDate: '2014-01-01'
endDateLabel: January 2014
description: Mobile-first prototype for Kuali Student.
previewImage: https://cloud.githubusercontent.com/assets/347558/5187445/392b4858-749b-11e4-9837-9995c39bb213.png
---

Using the recommendations as outlined in the [<mark><cite>Mobile Strategies for Kuali Student</cite></mark>](/articles/mobile-strategies-for-kuali-student) document, a proof of concept for a university course registration application was developed over a period of six weeks as part of an initiation phase for the student enrollment product. The application features a responsive, mobile-first interface, developed in [AngularJS](https://angularjs.org/).

## Backstory

The Kuali Student project is a [student information system](http://en.wikipedia.org/wiki/Student_information_system) established by the [Kuali Foundation](https://kuali.org) in 2007. Over the initial years, the primary objective was to build the administrative foundation, which included Curriculum Management and Course Offering. These applications defined essential relationships, such as:

* What is a course, and how is it offered for any given academic term?
* How do the culmination of attended classes constitute an academic degree?

With this data in place, Kuali Student started to prepare for Registration, which would enable students to search and register for classes for a given academic term. As the first student-facing application within this suite of tools, there was no precedent to follow, and all recognized how different of a user experience is needed when students, not administrators, are the primary audience.

In understanding that there were numerous unknowns regarding the best approach for either design or development, I authored a [document listing a number of recommendations](/articles/mobile-strategies-for-kuali-student) in order to guide the process along, including:

* designing baseline experiences which can be enhanced according to device capabilities or context;
* building a single responsive application, rather than multiple applications intended for different categories of devices;
* ensuring the application is accessible according to [WAI-ARIA](http://en.wikipedia.org/wiki/WAI-ARIA) specifications;
* serving data via [REST web services](http://en.wikipedia.org/wiki/Representational_state_transfer) in order to decouple user interfaces from back-end concerns;
* and generally encouraging more freedom when choosing tools.

Backing these recommendations, leadership allocated six weeks to develop a proof of concept application that embodied these recommendations.

## Process

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
  figcaption.Figure-caption.Figure-paragraph
    | A #[a(class="Link", href="https://www.dropbox.com/s/jmpv8o0fre3xuua/ks-cr-poc-2014-01-09-sketches.pdf?dl=0") series of sketches] explored how to navigate among academic terms.
</jade>

<jade>
figure.Figure
  a.Figure-imgLink(href="https://cloud.githubusercontent.com/assets/347558/5187445/392b4858-749b-11e4-9837-9995c39bb213.png")
    img(
      alt="Wireframe of course search form for mobile."
      src="https://cloud.githubusercontent.com/assets/347558/5187445/392b4858-749b-11e4-9837-9995c39bb213.png")
  figcaption.Figure-caption.Figure-paragraph
    | Wireframes helped to define relationships within the interface and explore rudimentary interactions.
</jade>

Leveraging my experience using the [AngularJS](https://angularjs.org/) framework the past year for Indiana University projects, I was able to quickly develop the general architecture of the front-end. Once the markup and styles fleshed out, data embedded into the markup was abstracted into static [JSON](http://en.wikipedia.org/wiki/JSON) fixtures, and the template was altered to be dynamically driven by these fixtures. With the fixtures as a guide, the services team was able to adapt the [web API](http://en.wikipedia.org/wiki/Web_API) to match the fixtures. By the third week, the fixtures were starting to be replaced by live web services.

Templates were originally driven by static JSON fixtures, such as in the [*ScheduleService*](https://github.com/ksux/kscr-poc/blob/069e8ac18a45aadfb380eb3ebfe7275223690b49/app/modules/shared/services/ScheduleService.js):

```js
angular.module('kscrPocApp')
  .value('ScheduleService', [
    {
      termName: 'Fall 2012',
      registrationGroups: [
        {
          courseCode: 'CHEM105',
          courseTitle: 'Introduction to Chemistry',
          creditType: 'fixed',
          fixedCredits: 4,
          activityOfferings: [
            {
              type: 'Lecture',
              isMon: true,
              isWed: true,
              isFri: true,
              startTime: '13:00',
              endTime: '15:00',
              buildingCode: 'CHM',
              roomCode: '1105'
            }
          ]
        }
      ]
    }
  ]);
```

Once built, JSON fixtures were replaced by live web services, such as in the [*scheduleService* provider](https://github.com/ksux/kscr-poc/blob/069e8ac18a45aadfb380eb3ebfe7275223690b49/app/modules/shared/services/ScheduleService.js):

```js
angular.module('kscrPocApp')
  .controller('AppScheduleCtrl', function ($scope, scheduleService) {
    $scope.schedule = scheduleService.query({
      person: 'admin',
      termCode: '201208'
    });
  });
```

Even though the proof of concept was primarily concerned with the technical feasibility of this approach, I was still able to receive rudimentary student feedback to guide refinement of the user interface throughout the entire project, by means of an Indiana University undergraduate intern.

In order to ensure basic accessibility, the proof of concept was frequently tested with a keyboard as the sole input device.

## Outcomes

The proof of concept successfully demonstrated the rapid speed of development capable by decoupling the front-end from the back-end, the engaging user experience possible through modern client-side JavaScript frameworks, and the incredible performance of [REST web services](http://en.wikipedia.org/wiki/Representational_state_transfer). Based on these results, the development team has continued this general architecture, producing higher quality user experiences in less time than sibling teams.

For the first few months following the proof of concept, I guided the Registration development team as they learned AngularJS, and I frequently provided feedback regarding both design and development directions.

<jade>
figure.Figure
  .Embed
    <iframe src="//player.vimeo.com/video/112133422?title=0&amp;byline=0&amp;portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
  figcaption.Figure-caption
    p.Figure-paragraph The proof of concept was demonstrated to Kuali Student development teams at the end of the allotted six weeks.
    ul.Nav
      li.Nav-item
        a.Link.Link--primary(href="https://vimeo.com/112133422") Watch demo video
      li.Nav-item
        a.Link.Link--primary(href="https://github.com/ksux/kscr-poc") GitHub repository
</jade>

## Reflection

Since the purpose of the proof of concept was challenging technical concerns over design concerns, a number of design compromises were made. By devoting either more time or a second designer to the project, more effort would have been placed in refining lower fidelity ideas before rushing into code; a visual style would be explored, especially regarding typography and color; and further feedback would be gathered from students, including those proficient with assistive technologies.
