# OOCSS
Object Oriented Cascade Style Sheet

## How to use

* @import css sentence
* link stylesheet html tag

## Build

Just compile style.scss file.

```
sass style.scss style.css
```


### Anchor
*  Remove underline decoration and outline
*  Add transition on hover

### Background
* Background colors (grayscale: #FFF, #EEE, #CCC, #AAA, #999, #666, #333, #000)
* Background-size
* Background-position
* Background-attachment
* Background-image unset

### Box
* Border none
* Box sizing box
* Box padding box
* Box content box

### Cursor
* Default
* Not allowed
* Pointer
* Text
* Wait

### Display
* Block
* Inline
* Inline block
* Table
* Table cell
* Table row
* Table row group
* Flex
* None

### Flex
* Align
* Grow
* Justify
* Shrink

### Font
Font-size in px, em and rem

* 8px - 48px with 2px gap
* 50px - 100px with 10px gap
* 0.5em - 3em with 0.25em gap
* 0.5rem - 3rem with 0.25rem gap

### Form
* Custom select with angle-down
* Outline 0 on each form control

### Generals
* Width 100%
* Width 100vw

### Grid
* Flex (based on flexboxgrid)
* Float (based on twbs bootstrap)
* Inline (same as bootstrap but using inline-block)
* Wp (Using fractions like col-md-1-2 eq col-md-6 based on wp grid by Ricardo Aguirre)

NOTE: It's just based on previous grid system, doesn't contains another elements outside grid.

### Height
* Height 0
* Height 25%
* Height 50%
* Height 75%
* Height 100%
* Height from 10px to 50px with 10px gap
* Height from 100px to 500px with 100px gap

### List
* Reseted list without padding and list-style
* Inline list
* List style decimal
* List style decimal leading zero
* List style lower alpha
* List style lower roman
* List style upper alpha
* List style upper roman

### Margin and padding
* Margin and padding (normal, left, top, right bottom) from 5px to 50px with gap 5px

### Position
* Left, top, right and bottom from 5px to 50px
* Absolute
* Fixed
* Relative
* Unset
* Floats
* Aboslute copy layer (top 100, left 0, width 100, height 100)
* Vertial align (top, middle, bottom, sub)

### Show and hide
* Hide
* Hide-{size}
* Hide-{size}
* Hide-{size}
* Hide-{size}-below
* Hide-{size}-above
* Hide-{size}

* Show
* show-{size}
* show-{size}
* show-{size}
* show-{size}-below
* show-{size}-above
* show-{size}

### Table
* Border collapse
* Table layout

### Text
* Uppercase
* Lowercase
* Underline
* Overline
* Strike
* Underline and overline at the same time
* Underline, overline and strike at the same time
* Bold
* Normal
* Italic
* Oblique
* Align left
* Align right
* Align center
* Align justify
* {size}-text-center
* Parragraph reset without margin (optional: using a class)
* Decoration style solid
* Decoration style dotted
* Decoration style dashed
* Decoration style wavy

### Z Index
* Z-index from -1 to 10

### Breakpoints and media queries
|   Size   |   Min   |   Max   | Mixin | Prefix |
| :-: | :-:| :-: | :-: | :-: |
| xs |  | 480px| xs() | .col-xs | 
| sm | 481px | 960px | sm() | .col-sm |
| md | 961px | 1280px | md() | .col-md |
| lg | 1281px|  1600px | lg() | .col-lg |
| xl | 1601px | | xl() | col-xl |

Example:

<pre>
sm-up(){
    // rules
}
</pre>

### Credits
* Flexboxgrid: Thanks to @kristoferjoseph https://github.com/kristoferjoseph/flexboxgrid
* Bootstrap: Thanks to Twitter https://github.com/twbs/bootstrap
* RicAg

### Changelog
* Rebuilt lib using sass with scss syntax
* Removed color palette mixin
* Added xl media size
