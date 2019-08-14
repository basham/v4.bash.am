---
title: An Event Apart Takeaways
date: '2019-08-14'
description: Sketchnotes and insights from a web design conference.
---

A couple weeks ago, I attended the web design conference [An Event Apart in Washington, D.C.](https://aneventapart.com/event/washington-dc-2019) The 3 days and 17 talks covered not only how to technically build a better web, but how to meaningfully include others in the process.

I took [<b>sketchnotes for each talk</b>](https://twitter.com/chrisbasham/status/1156932722075623424), distilled those notes into relevant insights and major themes, and shared them with my colleagues. It will be an ongoing effort to experiment with these ideas in my work and personal life.

<jade>
figure.Figure
  a.Figure-imgLink(href="https://user-images.githubusercontent.com/347558/62989210-1f495100-be15-11e9-83f6-8e406cd5ce07.jpg")
    img(
      alt="Sketchnote of a talk, with quotes, question prompts, and lessons"
      src="https://user-images.githubusercontent.com/347558/62989210-1f495100-be15-11e9-83f6-8e406cd5ce07.jpg" width="810" height="486")
  figcaption.Figure-caption.Figure-paragraph
    | #[a.Link(href="https://twitter.com/chrisbasham/status/1156932946487578624") Sketchnote of talk 16/17]: #[a.Link(href="https://aneventapart.com/event/washington-dc-2019#s16756") #[cite Inclusive, By Design]], by #[a.Link(href="http://feather.ca/") Derek Featherstone].
</jade>

## Share

- Practices (research, design, etc.) that are not visible or understood, can't be valued.
- Build trust by being consistent (authentic to expectations) and vulnerable (willing to revisit and revise).
- Communicate about your practice as much as you practice it. Get into a cadence. Share and explain why your practice helps others. Get them excited to hear it.
- Methods of sharing: Design reviews. Restrospective. Design partners. Office hours. Slack channel. Brown bag. Newsletters. Wall work.

## Collaborate

- Break out of silos and collaborate. Share what you create. Use what others share.
- Every person is unique. Designing for the average person is designing for no one.
- Intentionally include others early in both the process and the product. Empower each person to contribute in meaningful and unique ways. Make them co-creators. Help them to belong. (See [*Inclusive Design Principles*](https://inclusivedesignprinciples.org/).)
- How can we measure inclusion?

## Serve

- Business success should be measured by user success.
- Build operations (e.g. dev ops, design ops, research ops) to support the organization's values (e.g. time, fulfillment, and quality).
- Be careful and considerate of users' personal preferences, capabilities, privacy, and experience. Each person experiences situations and stress differently. Permit users to opt-out or opt-in. Beware that motion can trigger illness (use [`prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)). Some users may prefer dark color modes (use [`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)).
- User experience is a continuum that scales with capabilities (e.g. device, individual). Start with a great, baseline experience. Then enhance it as capabilities allow. Text → HTML → CSS → JavaScript → Device features.
- Understand user behavior with analytics. Use a framework (e.g. [HEART](http://www.gv.com/lib/how-to-choose-the-right-ux-metrics-for-your-product)) to strategize how to determine, record, and analyze analytics.
- Time is friction. Slow down the user to help comprehension.
- Simplify: Make it easy. Make it less. Make it fast.
- Test performance by simulating a mobile device on a poor network. (See [Lighthouse Dev Tool](https://developers.google.com/web/tools/lighthouse/).)
- Test multiple screen readers. All behave differently and can be configured differently.
- Build to help, not to impress.
