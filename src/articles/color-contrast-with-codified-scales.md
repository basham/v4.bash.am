---
title: Color Contrast with Codified Scales
date: '2015-03-30'
publish: draft
---

Last week, I examined how light to dark color scales could be generated with the [Chroma.js](https://github.com/gka/chroma.js) library and subsequently [codified according to the lightness of the color](../codifying-colors). This week, I want to explore the relationship between lightness and color contrast, to see how this dynamic could affect a designer's practice.

A primary concern of designers adhering to [WCAG 2.0](http://www.w3.org/TR/WCAG20/) recommendations is how to pair text of a particular color with backgrounds of another color. To give people of various physical abilities the best chance of easily reading content, [these colors should maintain sufficient contrast](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html). These recommendations [define color contrast](http://www.w3.org/TR/WCAG/#contrast-ratiodef) as essentially a ratio between the *relative luminance* values of the lighter color to the darker color, noting that these values "can generally be computed without regard to specific color deficiency."

WCAG Level|Contrast ratio for body text|Contrast ratio for [large text](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html#larger-scaledef)
--:|--:|--:
AA|`4.5:1`|`3:1`
AAA|`7:1`|`4.5:1`

## Luminance verses lightness

[Relative luminance](http://www.w3.org/TR/WCAG/#relativeluminancedef) is defined as "the relative brightness of any point in a colorspace, normalized to 0 for darkest black and 1 for lightest white." The addition of *relative* to this terminology essentially clarifies that "Web content does not emit light itself" unlike other things with inherit luminance properties. It is calculated from the [sRGB colorspace](http://en.wikipedia.org/wiki/SRGB) (the assumed colorspace for the Web) via the following algorithm:

```
L = 0.2126 * R + 0.7152 * G + 0.0722 * B
```

Green is perceived far brighter than red and blue, and therefore, it contributes the most (72%) to the calculated luminance value. Red contributes 21%, while blue contributes 7%.

Calculating the `L*` lightness value is more [complex within the Lab color space](http://en.wikipedia.org/wiki/Lab_color_space#CIELAB-CIEXYZ_conversions), but Chroma.js simplifies the process considerably.

```js
var chroma = require('chroma-js');
var lightness = chroma('green').lab()[0];
```

The distinction between relative luminance and lightness is evident when examining several colors and normalizing the calculations to gray values.

Color|R|G|B|Luminance|Lightness
:--|--:|--:|--:|--:|--:
`green` <div class="Color" style="background-color: rgb(0, 128, 0)"/>|`0/255`<div class="Color" style="background-color: rgb(0, 0, 0)"/>|`128/255`<div class="Color" style="background-color: rgb(0, 128, 0)"/>|`0/255`<div class="Color" style="background-color: rgb(0, 0, 0)"/>|`0.36`<div class="Color" style="background-color: rgba(0, 0, 0, 0.64)"/>
`goldenrod` <div class="Color" style="background-color: rgb(218, 165, 32)"/>|`218/255`<div class="Color" style="background-color: rgb(218, 0, 0)"/>|`165/255`<div class="Color" style="background-color: rgb(0, 165, 0)"/>|`32/255`<div class="Color" style="background-color: rgb(0, 0, 32)"/>|`0.65`<div class="Color" style="background-color: rgba(0, 0, 0, 0.35)"/>

The disparity is magnified when doing the same exercise to a scale of colors.

[Use same examples above with color scale]

## Luminance color scales

Working with relative luminance also means that it's easier to reason about color contrast.

Practically, this means in order to meet the AA recommendation of `4.5:1` color contrast for body text, if the relative luminance value of the lighter color is `0.45`, then the relative luminance value of the darker color should be no greater than `0.10`.

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

<div class="article-Scale">
  <div class="article-Scale-row">
    <div style="background-color: #d8e7d2;"></div>
    <div style="background-color: #57824b;"></div>
    <div style="background-color: #2c4f23;"></div>
  </div>
  <div class="article-Scale-row">
    <div style="background-color: #f6daf5;"></div>
    <div style="background-color: #976795;"></div>
    <div style="background-color: #5c3c5b;"></div>
  </div>
</div>

## Conclusion

***

Generating the color scales involved manipulating the `L*` (lightness) value within the [Lab color space](http://en.wikipedia.org/wiki/Lab_color_space). Abbreviating the scale generation algorithm from last week, a single interpolated value within the scale could be accomplished with the following:

```js
// Import npm dependencies.
var chroma = require('chroma-js'); // Version 0.6.x
// Settings.
var scaleSourceHex = 'green';
var scalePoint = 0.5;
// Interpolate colors.
var colors = ['#fff', scaleSourceHex, '#000'];
colors = chroma.interpolate.bezier(colors);
var scale = chroma.scale(colors).mode('lab').correctLightness(true);
// Generate RGB color from luminance location along scale.
var hex = scale(scalePoint).hex();
```

[Contrast checker](http://webaim.org/resources/contrastchecker/)

The [Lab color space](http://en.wikipedia.org/wiki/Lab_color_space) resolves this issue, given its `L*` (lightness) value approximately corresponds to perceived brightness (i.e. [relative luminance](http://en.wikipedia.org/wiki/Relative_luminance))

<style>
.Color {
  box-shadow: inset 0 0 0 0.0625em #ddd, inset 0 0 0 0.125em #fff;
  height: 1em;
  width: 100%;
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
