---
title: Color Palette
client: Indiana University (UITS)
clientLink: https://uits.iu.edu/
startDate: '2014-12-01'
startDateLabel: December 2014
endDate: '2015-01-28'
endDateLabel: January 2015
---

Before 2015, there were rarely any designers permanently staffed on development teams at Indiana University, so teams managed design issues, such as color, as best as possible. Without cross-team collaboration or governing design standards, the use and choice of colors diversified for every new system over the last 20 years. A new color palette would be determined to start aligning the aesthetic experience across these vast applications. It would be the initial project for the first style guide targeting Indiana University’s student-oriented Web applications.

## Audit

To discover the severity of current color usage, a sampling of screenshots and style sheets were curated from over a dozen applications, then subjectively assessed. Colors were overused, were used inconsistently, and clashed, both within a single application and among applications.

<jade>
figure.Figure.Figure-wrap.Figure-wrap--2
  a.Figure-imgLink(href="https://cloud.githubusercontent.com/assets/347558/8455110/3285c556-1fd0-11e5-901a-26fb8f97c65c.png")
    img(
      alt="Screenshot of academic planner application"
      src="https://cloud.githubusercontent.com/assets/347558/8455099/209cde6a-1fd0-11e5-915b-2f36f50614d9.jpg")
  a.Figure-imgLink(href="https://cloud.githubusercontent.com/assets/347558/8455089/07d03256-1fd0-11e5-8717-e879842d6993.png")
    img(
      alt="Screenshot of application login page"
      src="https://cloud.githubusercontent.com/assets/347558/8455082/00201dbe-1fd0-11e5-858a-14d126a1c949.jpg")
  a.Figure-imgLink(href="https://cloud.githubusercontent.com/assets/347558/8455138/67cbedc6-1fd0-11e5-851a-55332bd42c06.png")
    img(
      alt="Screenshot of online admissions application"
      src="https://cloud.githubusercontent.com/assets/347558/8455072/ed340954-1fcf-11e5-9292-acbaf31bf0b3.png")
  a.Figure-imgLink(href="https://cloud.githubusercontent.com/assets/347558/8455143/77bcb8a0-1fd0-11e5-8e60-c07c41242164.png")
    img(
      alt="Screenshot of administrative interface"
      src="https://cloud.githubusercontent.com/assets/347558/8455052/c38555ea-1fcf-11e5-8777-431c29301500.jpg")
</jade>

Given its diversity of both color and user interface components, the *Schedule Manager* application was chosen for further analysis and eventual experimentation with a new palette.

<jade>
figure.Figure
  a.Figure-imgLink(href="https://cloud.githubusercontent.com/assets/347558/8400002/d4de6016-1de5-11e5-8d0a-cae54d929604.png")
    img(
      alt="Screenshot of Schedule Manager"
      src="https://cloud.githubusercontent.com/assets/347558/8400002/d4de6016-1de5-11e5-8d0a-cae54d929604.png")
</jade>

*Schedule Manager* is composed of 34 colors. Twelve colors are variations of black and white:

<jade>
- var colors = ['#000', '#212121', '#2a2a2a', '#333', '#474747', '#666', '#737373', '#999', '#ddd', '#e6e6e6', '#f5f5f5', '#fff'].reverse();
.article-Scale.article-Scale-row
  each color in colors
    div(style="background-color: #{color}")
</jade>

Five colors are sourced from the [Indiana University brand guidelines](http://brand.iu.edu/apply/color.shtml):

<jade>
- var colors = ['#7d110c', '#44697d', '#9adcc6', '#4b306a', '#c59217'];
.article-Scale.article-Scale-row
  each color in colors
    div(style="background-color: #{color}")
</jade>

Six colors are from [Bootstrap](https://github.com/twbs/bootstrap/blob/v2.3.2/less/variables.less):

<jade>
- var colors = ['#08c', '#0044cc', '#5bc0de', '#2f96b4', '#ee5f5b', '#bd362f'];
.article-Scale.article-Scale-row
  each color in colors
    div(style="background-color: #{color}")
</jade>

Eleven colors are from unknown origins:

<jade>
- var colors = ['#ff0000', '#d00031', '#990000', '#6dafbf', '#444d7e', '#a2c417', '#fbeed5', '#e1d8b7', '#d1c38f', '#cfc08c', '#4a3c31'];
.article-Scale.article-Scale-row
  each color in colors
    div(style="background-color: #{color}")
</jade>

Within the context of this exemplar, as more color is added, the louder and more meaningless the visual language becomes. This chaos encourages only inaction. It is confounding, paralyzing, and unsure, and those traits are inevitably imparted on the user.

## Goals

Ensuing from the audit, three goals guided the process of determining a new color palette:

1. **Align with branding**: Align the color scheme as strongly with the [university brand colors](http://brand.iu.edu/apply/color.shtml) as possible.
2. **Limit breadth**: Identify a few primary colors to be the foundation of the entire palette, each with its own unique meaning.
3. **Control depth**: Introduce a very controlled set of shades and tints based on the primary colors, and standardize their naming schema.

## Palette

In order to quickly experiment with alternative colors to determine a new palette, a static HTML snapshot of the *Schedule Manager* application was grabbed and all colors in its style sheets were abstracted into [Less variables](http://lesscss.org/features/#variables-feature). As much as possible, markup remained unaltered from the original source and only CSS color properties were adjusted. A [custom build system](https://github.com/iuux/ess-color/tree/master/tasks), managed by the [gulp](http://gulpjs.com/) task runner, allowed the snapshot to instantly update when the variable values changed. Once the untampered snapshot (located in the [repository's `master` branch](https://github.com/iuux/ess-color)) was ready, all new application of color existed in the [`palette` branch](https://github.com/iuux/ess-color/tree/palette).

<jade>
figure.Figure
  .work-Toggle
    input.work-Toggle-checkbox(type="checkbox", id="toggleFigure")
    .work-Toggle-control
      label.work-Toggle-label(for="toggleFigure") Show original use of color
    a.work-Toggle-item.work-Toggle-item--showWhenSelected.Figure-imgLink(href="https://cloud.githubusercontent.com/assets/347558/8400002/d4de6016-1de5-11e5-8d0a-cae54d929604.png")
      img(
        alt="Screenshot of Schedule Manager, with original coloration"
        src="https://cloud.githubusercontent.com/assets/347558/8400002/d4de6016-1de5-11e5-8d0a-cae54d929604.png")
    a.work-Toggle-item.work-Toggle-item--hideWhenSelected.Figure-imgLink(href="https://cloud.githubusercontent.com/assets/347558/8446709/7bad363c-1f7c-11e5-879f-d4add34a5676.png")
      img(
        alt="Screenshot of Schedule Manager colored with new palette"
        src="https://cloud.githubusercontent.com/assets/347558/8446709/7bad363c-1f7c-11e5-879f-d4add34a5676.png")
  figcaption.Figure-caption
    p
      | Particular color values were chosen through experimentation, testing the colors in numerous permutations for their aesthetic harmony. Code for the experiment is located on
      | #{' '}
      a(href="https://github.com/iuux/ess-color")
        | GitHub (
        code iuux/ess-color
        | )
      | .
</jade>

The experiment resulted in a new color palette based on five primary colors:

<jade>
- var colors = ['#fff', '#000', '#e1d8b7', '#4b306a', '#7d110c'];
.article-Scale.article-Scale-row
  each color in colors
    div(style="background-color: #{color}")
</jade>

1. **White** is the background color, a pure and clean backdrop capable of hosting any user interface.
2. **Black** and its shades are used for static, non-interactive text (*Text*).
3. **IU Cream** and its variants frame the interface, coloring structural items such as borders and headers (*Base*).
4. **IU Majestic (violet)** and its variants indicate interactive components, such as form fields and buttons (*Interactive*).
5. **IU Crimson** is used as a rare accent (*Accent*).

Variants to these primary colors were generated according to techniques described in the <a href="/articles/codifying-colors/"><cite>Codying Colors</cite></a> article. The technique allows a full range of tints and shades to be interpolated from a single color. These colors are codified on a scale of `0` (representing pure white) to `1000` (representing pure black) in steps of `50` units. Each source color is placed roughly along its appropriate place in the scale. For example, IU Cream is coded as `Base-150`, while IU Majestic is coded as `Interactive-750` and IU Crimson as `Accent-750`.

<jade>
- var colors = [];
- colors.push({ label: 'Text', variants: [{ label: '400', hex: '#919191'}, { label: '900', hex: '#1b1b1b' }] });
- colors.push({ label: 'Base', variants: [{ label: '050', hex: '#f4f1e4'}, { label: '075', hex: '#efe9d7' }, { label: '150', hex: '#e1d8b7', name: 'IU Cream' }, { label: '250', hex: '#c0b89d' }] });
- colors.push({ label: 'Interactive', variants: [{ label: '100', hex: '#e6e0ea'}, { label: '150', hex: '#d9d1df' }, { label: '400', hex: '#9c89ac' }, { label: '750', hex: '#4b306a', name: 'IU Majestic' }] });
- colors.push({ label: 'Accent', variants: [{ label: '750', hex: '#7d110c', name: 'IU Crimson'}] });

- var values = {};
- colors.forEach(function(color) { color.variants.forEach(function(c) { values[c.label] = true; }) });
- values = Object.keys(values).sort();

.Article-tableFigure
  table.Article-table.work-Palette
    thead
      tr
        each color in colors
          th.Article-tableCell.Article-tableCell--center.Article-tableCell--header= color.label
    tbody
      each value in values
        tr
          each color in colors
            - var item = color.variants.filter(function(c) { return c.label === value })[0];
            - var style = '';
            - style += item ? 'background-color: ' + item.hex : '';
            - var cn = [];
            - if(item && value > 500) { cn.push('work-Palette-color--dark'); }
            - if(item && item.isNew) { cn.push('work-Palette-color--highlight'); }
            td.Article-tableCell.Article-tableCell--center.work-Palette-color(style=style, class=cn)
              if item
                if item.name
                  em= item.name
                if !item.hideValue
                  div= value
                div= item.hex
</jade>

An ancillary benefit of codifying colors is their ability to approximate text contrast ratios. As long as the background and foreground colors are at least a code value of `450` different, then most likely acceptable [AA text contrast (`4.5:1`)](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) is achieved. However, these approximations should always be confirmed.

## Palette, version 2

After several months of applying the color palette to a variety of applications, none of the original colors have been removed or altered. Instead, a darker gray was added to the Text family, and a new shade and tint were added to the Interactive family. Danger (red) and Success (green) color families, not sourced from the IU brand guidelines, were added to accommodate alert messages.

The only deviant to the norm was the Link color. Any variant along the IU Majestic scale resulted in links appearing dull. In order for links to pop, without the aid of additional visual affordances like underlines, the color needed to be brighter. More specifically, it was generated by increasing the saturation of IU Majestic to `100%`. Mostly, colors in the Interactive family are used for borders and backgrounds, not for text.

<jade>
- var colors = [];
- colors.push({ label: 'Text', variants: [{ label: '400', hex: '#919191'}, { label: '600', hex: '#5f5f5f', isNew: true }, { label: '900', hex: '#1b1b1b' }] });
- colors.push({ label: 'Base', variants: [{ label: '050', hex: '#f4f1e4'}, { label: '075', hex: '#efe9d7' }, { label: '150', hex: '#e1d8b7', name: 'IU Cream' }, { label: '250', hex: '#c0b89d' }] });
- colors.push({ label: 'Interactive', variants: [{ label: '050', hex: '#f2f0f4', isNew: true}, { label: '100', hex: '#e6e0ea'}, { label: '150', hex: '#d9d1df' }, { label: '400', hex: '#9c89ac' }, { label: '600', hex: '#6d5485', isNew: true }, { label: '750', hex: '#4b306a', name: 'IU Majestic' }, { label: '999', hex: '#48009a', name: 'Link', hideValue: true, isNew: true }] });
- colors.push({ label: 'Accent', variants: [{ label: '750', hex: '#7d110c', name: 'IU Crimson'}] });
- colors.push({ label: 'Danger', variants: [{ label: '100', hex: '#ffdad4', isNew: true }, { label: '400', hex: '#f04e45', isNew: true }] });
- colors.push({ label: 'Success', variants: [{ label: '100', hex: '#deefd8', isNew: true }, { label: '400', hex: '#006633', isNew: true }] });

- var values = {};
- colors.forEach(function(color) { color.variants.forEach(function(c) { values[c.label] = true; }) });
- values = Object.keys(values).sort();

figure.Figure.Figure--deck
  .Article-tableFigure
    table.Article-table.work-Palette
      thead
        tr
          each color in colors
            th.Article-tableCell.Article-tableCell--center.Article-tableCell--header= color.label
      tbody
        each value in values
          tr
            each color in colors
              - var item = color.variants.filter(function(c) { return c.label === value })[0];
              - var style = '';
              - style += item ? 'background-color: ' + item.hex : '';
              - var cn = [];
              - if(item && value > 500) { cn.push('work-Palette-color--dark'); }
              - if(item && item.isNew) { cn.push('work-Palette-color--highlight'); }
              td.Article-tableCell.Article-tableCell--center.work-Palette-color(style=style, class=cn)
                if item
                  if item.name
                    em= item.name
                  if !item.hideValue
                    div= value
                  div= item.hex
  figcaption.Figure-caption
    p Colors added in the second version of the palette are outlined in black.
</jade>

<jade>
figure.Figure
  a.Figure-imgLink(href="https://cloud.githubusercontent.com/assets/347558/8455455/c633a924-1fd2-11e5-99b6-fc2ab78d2e88.png")
    img(
      alt="Screenshot of AdRx Caseload, which uses the newest version of the color palette"
      src="https://cloud.githubusercontent.com/assets/347558/8455455/c633a924-1fd2-11e5-99b6-fc2ab78d2e88.png")
  figcaption.Figure-caption
    p Implemented in spring 2015, the feature called <em>Caseload</em> contributed significantly to the refinements in version 2 of the color palette.
</jade>

## Conclusion

The exercise to design a new color palette for Indiana University student enterprise applications resulted in a controlled visual language that will allow users familiar with one interface to quickly understand unfamiliar interfaces. Systematic methods for generating and codifying colors will allow the palette to become richer with new colors as needed, enable consistent naming schemes, and provide utility to those applying the colors.

As the palette is challenged against more user interfaces, it'll become increasingly important to conduct user studies to determine how effective the color families are on describing interfaces and discover if there are any unforseen accessibility issues. Color families outside of the IU brand guidelines, such as Danger and Success, should be occasionally refined to better fit within the rest of the palette. The Link family may soon need additional colors to represent visited or active states.
