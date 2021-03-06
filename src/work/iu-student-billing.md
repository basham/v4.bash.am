---
title: Student Billing
startDate: '2013-03-01'
startDateLabel: March
endDate: '2013-05-07'
endDateLabel: May 2013
description: Functional prototype for Indiana University.
---

In late 2012, the Indiana University student billing user interface was redesigned in order to make it easier for students to understand their monthly statements and pay the balance on their accounts. After numerous low-fidelity design iterations and subsequent user tests, a functional prototype was crafted in [AngularJS](https://angularjs.org/) as a model for the production version.

<jade>
figure.Figure
  a.Figure-imgLink(href="https://cloud.githubusercontent.com/assets/347558/5120220/7a7922c4-704c-11e4-8c3e-09c165d31334.png")
    img(
      alt="Screenshot of the Amount Due and Account Status summaries in the student billing prototype.",
      src="https://cloud.githubusercontent.com/assets/347558/5120220/7a7922c4-704c-11e4-8c3e-09c165d31334.png", width="800", height="850")
  figcaption.Figure-caption
    p.Figure-paragraph The prototype features two primary views. Current Status provides an easy means for students to understand recent billing activity and pay the account balance, while History provides an archive of all past account activity.
    ul.Nav
      li.Nav-item
        a.Link(href="http://pxa.github.io/billing")
          b View prototype
      li.Nav-item
        a.Link(href="https://github.com/pxa/billing") GitHub repository
</jade>
