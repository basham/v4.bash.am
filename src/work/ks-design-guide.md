---
title: Design Guide
startDate: '2014-03-01'
startDateLabel: March
endDate: '2014-08-01'
endDateLabel: August 2014
description: Responsive, statically generated pattern library for Kuali Student.
---

The [Kuali Student Design Guide](http://ksux.github.io/ks-design-guide/) is an initial foundation for a design pattern library created to centralize and articulate user interface design decisions occurring within Kuali Student products. The guide is meant to be maintained by Kuali designers and front-end developers, regularly updated as problems are encountered and resolved throughout development. Patterns are abstracted as nested components, following the [Atomic design methodology](http://bradfrost.com/blog/post/atomic-web-design/). It serves as a daily reference for designers and developers, yet also invites the larger non-design community to see and engage in the process. Research and recommendations are initially documented as [repository issues](https://github.com/ksux/ks-design-guide/issues) before being adopted into the guide.

<jade>
figure.Figure
  a.Figure-imgLink(href="https://cloud.githubusercontent.com/assets/347558/5119089/35e2c4e2-703a-11e4-8607-9679b3dc3fed.png")
    img(
      alt="Screenshot of the mobile and widescreen view of the Pagination pattern."
      src="https://cloud.githubusercontent.com/assets/347558/5119089/35e2c4e2-703a-11e4-8607-9679b3dc3fed.png")
  figcaption.Figure-caption
    p.Figure-paragraph The Design Guide features a responsive design and statically generated content, making it both accessible and performant.
    ul.Nav
      li.Nav-item
        a.Link(href="http://ksux.github.io/ks-design-guide/")
          b View the Design Guide
      li.Nav-item
        a.Link(href="https://github.com/ksux/ks-design-guide")
          b GitHub repository
</jade>
