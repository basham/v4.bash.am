---
title: Color Contrast with Codified Scales
date: '2015-03-07'
publish: draft
---

http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
http://webaim.org/resources/contrastchecker/

The [Lab color space](http://en.wikipedia.org/wiki/Lab_color_space) resolves this issue, given its `L*` (lightness) value approximately corresponds to perceived brightness (i.e. [relative luminance](http://en.wikipedia.org/wiki/Relative_luminance))

Working with relative luminance also means that it's easier to reason about color contrast. A primary concern of web designers adhering to [WCAG 2.0](http://www.w3.org/TR/WCAG20/) recommendations is how to pair text of a particular color with backgrounds of another color. To give people of various physical abilities the best chance of easily reading content, [these colors should maintain sufficient contrast](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html). These recommendations [define color contrast](http://www.w3.org/TR/WCAG/#contrast-ratiodef) as essentially a ratio between the relative luminance values of the lighter color to the darker color.

WCAG Level|Contrast ratio for body text|Contrast ratio for [large text](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html#larger-scaledef)
--:|--:|--:
AA|`4.5:1`|`3:1`
AAA|`7:1`|`4.5:1`

Practically, this means in order to meet the AA recommendation of `4.5:1` color contrast for body text, if the `L*` value of the lighter color is `45`, then the `L*` value of the darker color should be no greater than `10`.

The Lab color space is the most appropriate tool to both interpolate these colors and compare them in their respective contexts of use.

As previously mentioned, the color scale significantly simplifies how we enforce contrast ratios. We can now confidently pair any two colors and know by their numerical values which contrast ratios they're compatible with. Synthesizing the 9-point scale with WCAG contrast ratios reveals there are 12 pairs for the `3:1` ratio, 6 pairs for the `4.5:1` ratio, and 3 pairs for the `7:1` ratio.

Contrast ratio|Light value|Dark value
--:|--:|--:
`3:1`|`100`|`300–900`
|`200`|`600–900`
|`300`|`900`
`4.5:1`|`100`|`500–900`
|`200`|`900`
`7:1`|`100`|`700–900`

In practice, these contrast pairings work well within the same scale:

<figure class="Figure">
  <p class="Contrast Contrast--G500">This paragraph complies to AA contrast ratio `4.5:1`, using `@color-Green--500` and `@color-Green--100` colors.</p>
  <p class="Contrast Contrast--G700">This paragraph complies to AAA contrast ratio `7:1`, using `@color-Green--700` and `@color-Green--100` colors.</p>
</figure>

But the pairings also work well across different scales:

<figure class="Figure">
  <p class="Contrast Contrast--V500">This paragraph complies to AA contrast ratio `4.5:1`, using `@color-Violet--500` and `@color-Green--100` colors.</p>
  <p class="Contrast Contrast--V700">This paragraph complies to AAA contrast ratio `7:1`, using `@color-Violet--700` and `@color-Green--100` colors.</p>
</figure>

Visually comparing the `100`, `500`, and `700` values within the green and violet color scales demonstrates how simular their perceived brightnesses truly are. In the same way, we can be confident that these methods will work among any sets of color scales.

<div class="Scale">
  <div class="Scale-row">
    <div style="background-color: #d8e7d2;"></div>
    <div style="background-color: #57824b;"></div>
    <div style="background-color: #2c4f23;"></div>
  </div>
  <div class="Scale-row">
    <div style="background-color: #f6daf5;"></div>
    <div style="background-color: #976795;"></div>
    <div style="background-color: #5c3c5b;"></div>
  </div>
</div>

<style>
.Scale {
  border: 0.0625em solid #ddd;
  margin-top: 1em;
}
.Scale-row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  height: 3em;
}
.Scale-row > div {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.Contrast {
  background-color: #d8e7d2;
  margin: 0 1em !important;
}
.Contrast + .Contrast {
  margin-top: 1em !important;
}
.Contrast--G500 {
  color: #57824b;
}
.Contrast--G700 {
  color: #2c4f23;
}
.Contrast--V500 {
  color: #976795;
}
.Contrast--V700 {
  color: #5c3c5b;
}
</style>
