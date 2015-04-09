---
title: Codifying Colors
date: '2015-03-02'
---

With little effort, you can find abundant examples of how colors have been named. [HTML5 and CSS3 color specifications name 140 colors](http://www.w3schools.com/html/html_colornames.asp). [Crayola names 135 standard crayon colors](http://en.wikipedia.org/wiki/List_of_Crayola_crayon_colors). [Wikipedia lists hundreds of colors](http://en.wikipedia.org/wiki/List_of_colors:_A%E2%80%93F), with undeclared citations. [ColorHexa lists 746 color names](http://www.colorhexa.com/color-names). [Users have named close to 8 million colors on COLOURlovers](http://www.colourlovers.com/colors). There are even [research projects which attempt to resolve the inconsistencies among various color dictionaries](http://people.csail.mit.edu/jaffer/Color/Dictionaries.html).

Naming colors is quite an art in itself, but I'm more interested in how to name variations of a single primary color. For at least Web application design, it's probably best to be conservative when applying colors, keeping to a palette of a few colors with various tints and shades. Too many colors results in a confusing visual language, while a more considered set of colors should help to clarify the interface. In this way, I want to explore helpful ways to consistently codify a controlled set of colors to assist both designers and developers in their practice.

## Exemplars

[Google Material Design color palette](http://www.google.com/design/spec/style/color.html) uses a 10-point scale of 50 to 900, with 50 being the lightest tint, 900 being the darkest shade, and 500 representing the primary color. They also introduce an almost neon-like A-series for most colors (A100, A200, A400, and A700), although they don’t elaborate on how or why to use those variations.

<jade>
figure.Figure
  a.Figure-imgLink
    img(
      alt="Material Design Color Palette"
      src="https://cloud.githubusercontent.com/assets/347558/6315830/867de73c-b9dd-11e4-8b96-2a74124b26c9.png")
</jade>

[PANTONE uses numbering systems](http://www.pantone.com/pages/pantone/Pantone.aspx?pg=20051) in a variety of ways to codify either the color family or where the color is located within their print materials. However, that shallow explanation fails to describe the methods of how they map color families to particular numbers. One can roughly interpret a [pattern of shifting hues to their 3-digit numbers](http://www.pantone-colours.com/), but the 4-digit numbers tend to become much less comprehensible.

<jade>
figure.Figure
  a.Figure-imgLink
    img(
      alt="PANTONE colors"
      src="https://cloud.githubusercontent.com/assets/347558/6315939/7521cd0c-b9e0-11e4-8483-156e6a6903ea.png")
</jade>

The CSS [`font-weight` property](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight) shares a similar scale to that of Material Design. A lighter and thinner font weight starts at `100`, graduating in heaviness in 100-point increments until `900`. `400` maps to a *normal* weight, while `700` maps to a traditionally *bold* weight.

Font Weight|Meaning
--:|:--
100|Thin
200|Extra Light
300|Light
400|Normal
500|Medium
600|Semi Bold
700|Bold
800|Extra Bold
900|Black

CSS frameworks, such as [Bootstrap](http://getbootstrap.com/) and [Foundation](http://foundation.zurb.com/), tend to sidestep the problem by creating derivatives from primary colors using [color functions](http://lesscss.org/functions/#color-operations). Relying on these functions, however, supposes that if the source color should change, the percentages of, e.g., lightness and darkness may need to be adjusted in turn. While it’s easy to keep colors as derivatives by using color variables, it can result in a problem in which there are too many derivatives, if they are managed locally instead of in a shared source file.

For example, rather than defining colors during their use:

```less
// colors.less
@green: green;

// button.less
.Button {
  @background-color: lighten(@green, 20%);
}
```

You should centralize all color declarations:

```less
// colors.less
@green: green;
@green-tint: lighten(@green, 20%);

// button.less
.Button {
  @background-color: @green-tint;
}
```

## Goals for codification

Taking these exemplars into consideration, a new scale for codifying colors should support the following goals:

1. Scales should support granularity.
2. Scales should be able to be generated from any color.
3. Points along the scale should share a common meaning.

Supporting Goal #1 is accomplished with setting a number range. The range of `0`–`1000` provides an abundant of initial possibilites, along with being consistent with Material Design and the `font-weight` specification. This range could always be tightened later, as needed.

Material Design anchors its scale in the middle with primary colors, designated with a `500` marker. This approach supposes that color was perhaps chosen first, and then an evenly distributed series of tints and shades were subsequently derived. In order to support Goal #2, the primary source color should be able to reside anywhere along the range, not just the middle, and appropriate tints and shades could still be derived.

Similar to Material Design, the point along the scale should correspond to the lightness or darkness of a color. If `0` is always pure white (`#fff`) and `1000` is always pure black (`#000`), then to support Goal #3, the steps along the scale should roughly correspond to their equivalent lightness value.

Alas, *lightness* is a tricky subject that requires an understanding of [color spaces](http://en.wikipedia.org/wiki/Color_space) to properly define it. Digital designers should be quite familiar with [RGB](http://en.wikipedia.org/wiki/RGB_color_space), at least for the sake of using hexadecimal color values in CSS. Designers may also be familiar with another family of [hue-saturation-* color spaces](http://en.wikipedia.org/wiki/HSL_and_HSV), which includes HSL (hue-saturation-lightness), HSV (hue-saturation-value), HSB (hue-saturation-brightness), and HSI (hue-saturation-intensity). These are attempts to represent the RGB model in a form that is easier to approach and reason about. While the *lightness*, *value*, *brightness*, and *intensity* values are easy to conceptualize, they ultimately are models describing how computers render color, and therefore, they're [insufficient to inform us how humans would perceive a given color](http://en.wikipedia.org/wiki/HSL_and_HSV#Disadvantages). [Colors may share identical *lightness* values, yet their perceived brightness is probably different](https://vis4.net/blog/posts/avoid-equidistant-hsv-colors/). The [Lab color space](http://en.wikipedia.org/wiki/Lab_color_space) resolves this issue, given its `L*` (lightness) value approximately corresponds to perceived brightness. A `L*` value of `0` is the darkest black, while a value of `100` represents the brightest white.

## Naming color variables

The method for naming color variables will roughly follow the pattern [Nicholas Gallager](http://nicolasgallagher.com) recommends for [naming CSS classes](https://github.com/suitcss/suit/blob/master/doc/README.md):

```
.<namespace>-<Component>--<modifier>
```

Each color variable name consists of three parts:

1. *namespace* labeled as `color` to indicate the variable is a color;
2. *color scale* to group the color derivatives;
3. *point* to indicate the location of the derivative along the scale.

Put together, the template for a [Less color variable](http://lesscss.org/features/#variables-feature) name would follow this pattern:

```
@color-<ColorScale>--<point>
```

In practice, we could describe an abbreviated color scale in this way:

```
// Source color
@color-Green: green;

// Derivatives
@color-Green--100;
@color-Green--500;
@color-Green--900;
```

## Generating color scales

Luckily, much of the difficulty of generating color scales is solved by the work of [Gregor Aisch](http://driven-by-data.net/), as described in his article [*Mastering Multi-hued Color Scales with Chroma.js*](https://vis4.net/blog/posts/mastering-multi-hued-color-scales/). He details how his [Chroma.js](https://github.com/gka/chroma.js) JavaScript library can adjust complex multi-hue gradients to be both true to lightness values and pleasing to the eye.

Using Chroma.js, we can interpolate any color within our scale. For this example, the scale will be seeded with white, green, and black colors.

<jade>
- var colors = ['white', 'green', 'black'];
.article-Scale.article-Scale-row
  each color in colors
    div(style="background-color: #{color}")
</jade>

[Bezier interpolation](https://github.com/gka/chroma.js/blob/master/doc/api.md#chromainterpolatebeziercolors) will ease the blending of the colors, while [lightness correction](https://github.com/gka/chroma.js/blob/master/doc/api.md#scalecorrectlightness) will ensure a linear lightness progression throughout the scale. Run the following [Node](http://nodejs.org/) script to generate the nine-point color scale.

<jade>
- var colors = ['#d8e7d2', '#b3ceaa', '#91b585', '#739c66', '#57824b', '#406835', '#2c4f23', '#1d3617', '#121e0c'];
.article-Scale.article-Scale-row
  each color in colors
    div(style="background-color: #{color}")
</jade>

```js
// Import npm dependencies.
var chroma = require('chroma-js'); // Version 0.6.x
// Settings.
var scaleSourceHex = 'green'; // equivalent to #008000
var scaleVarName = '@color-Green';
var scaleVarNameDelimiter = '--';
var useBezierInterpolation = true;
var useLightnessCorrection = true;
// Prepare color scale.
var colors = ['#fff', scaleSourceHex, '#000'];
if(useBezierInterpolation) {
  colors = chroma.interpolate.bezier(colors);
}
var scale = chroma.scale(colors).mode('lab').correctLightness(useLightnessCorrection);
// Output source color.
console.log(scaleVarName + ': ' + scaleSourceHex + ';');
// Interpolate colors, skipping the generation of white and black.
for(var i = 1, steps = 10; i < steps; i++) {
  var point = i / steps;
  // Convert point to numbering system value.
  var name = Math.round(point * 1000);
  // Generate RGB color from luminance location along scale.
  var hex = scale(point).hex();
  // Output.
  var varName = scaleVarName + scaleVarNameDelimiter + name;
  console.log(varName + ': ' + hex + ';');
}
```

The color scale is generated as Less variables. However, with little tweaking, the output could be adapted as desired to better conform to other contexts.

```less
@color-Green: green;
@color-Green--100: #d8e7d2;
@color-Green--200: #b3ceaa;
@color-Green--300: #91b585;
@color-Green--400: #739c66;
@color-Green--500: #57824b;
@color-Green--600: #406835;
@color-Green--700: #2c4f23;
@color-Green--800: #1d3617;
@color-Green--900: #121e0c;
```

For those desiring a visual editor rather than running a custom Node script, the [Chroma.js Color Scale Helper](http://gka.github.io/palettes/) tool is an excellent alternative to quickly experiment with various color scale configurations.

<jade>
figure.Figure
  a.Figure-imgLink(href="http://gka.github.io/palettes/#colors=#fff,#ff0000,#000|steps=11|bez=1|coL=1")
    img(
      alt="Chroma.js Color Scale Helper"
      src="https://cloud.githubusercontent.com/assets/347558/6433936/c672b1ac-c049-11e4-8fff-6226b677c4ff.png")
</jade>

## Conclusion

We demonstrated it is very possible to consistently devise color scales, linearly graduating from light to dark. By codifying the scale based on perceived brightness, we have a normalized way to compare colors across any scale, and it can simplify how we choose colors.

From here, there are several more tools and features that could be created to assist designers and developers interested in using codified color scales:

- Publish a [`npm`](https://www.npmjs.com/) package to codify color scales.
- Create a visual editor for codifying color scales, similar to the [Chroma.js Color Scale Helper](http://gka.github.io/palettes/).
- Allow the source color to be retained and placed within the generated scale, instead of the scale merely being seeded by it.
- The output from these tools should be highly tailorable, and the output should not be bias toward any tangental tool; for example, its usefulness would be severely limited if it only is compatible with Less variables.
