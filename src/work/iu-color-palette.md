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

To discover the severity of current color usage, a sampling of screenshots and style sheets were curated from over a dozen applications. Colors were overused, were used inconsistently, and clashed, both within a single application and among applications. While an objective analysis of the overall color usage could have been conducted, the screenshots were sufficiently self-revealing for our purposes.

<jade>
figure.Figure
  a.Figure-imgLink(href="https://cloud.githubusercontent.com/assets/347558/8400002/d4de6016-1de5-11e5-8d0a-cae54d929604.png")
    img(
      alt="Screenshot of Schedule Manager"
      src="https://cloud.githubusercontent.com/assets/347558/8400002/d4de6016-1de5-11e5-8d0a-cae54d929604.png")
</jade>

Given its diversity of color and user interface components, the *Schedule Manager* application was chosen for analysis and experimentation with a new palette.

<jade>
figure.Figure
  a.Figure-imgLink(href="https://cloud.githubusercontent.com/assets/347558/8400002/d4de6016-1de5-11e5-8d0a-cae54d929604.png")
    img(
      alt="Screenshot of Schedule Manager"
      src="https://cloud.githubusercontent.com/assets/347558/8400002/d4de6016-1de5-11e5-8d0a-cae54d929604.png")
</jade>

The application is composed of 34 colors. Twelve colors are variations of black and white:

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

The visual language becomes meaningless in its struggle to be meaningful. Its loud chaos encourages only inaction. It is confounding, paralyzing, and unsure, and those traits are imparted on the user.

## Goals

Ensuing from the audit, three goals guided the process of determining a new color palette:

1. **Align with branding**: Align the color scheme as strongly with the [university brand colors](http://brand.iu.edu/apply/color.shtml) as possible.
2. **Limit breadth**: Identify a few primary colors to be the foundation of the entire palette, each with its own unique meaning.
3. **Control depth**: Introduce a very controlled set of shades and tints based on the primary colors, and standardize their naming schema.

## Experimentation

[Getting the repo prepped]
https://github.com/iuux/ess-color

## Primary palette

The experiment resulted basing the new color palette from five primary colors:

<jade>
- var colors = ['#fff', '#000', '#e1d8b7', '#4b306a', '#7d110c'];
.article-Scale.article-Scale-row
  each color in colors
    div(style="background-color: #{color}")
</jade>

1. **White** is the background color, a pure and clean backdrop capable of hosting any interface.
2. **Black** and its shades are used for static text (*Text*).
3. **IU Cream** and its variants structure the interface (*Base*).
4. **IU Majestic (violet)** and its variants indicate interactive elements (*Interactive*).
5. **IU Crimson** is used as a rare accent (*Accent*).

## Variants

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

## Variants (Version 2)

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
    p Note: Colors added in this second version are outlined in black.
</jade>
