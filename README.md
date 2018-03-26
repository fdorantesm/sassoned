# oocss-framework
Oriented Object CSS

## Installation

You need to include bootstrap.css in your document or styles file throug @import sentence.

## Build

Just compile bootstrap.styl file.

```
stylus -c -u nib bootstrap.styl
```

## Classes

### Anchor
*  remove underline and outline

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

### Form
* Custom select with angle-down

### Generals
* Width 100%

### Height
* Height 0
* Height 25%
* Height 50%
* Height 75%
* Height 100%
* Height from 10px to 50px and 100px - 500px

### List
* Reseted list without padding and list-style
* Inline list
* Some list-style properties

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
* Align left
* Align right
* Align center
* Align justify
* {size}-text-center
* Parragraph reset without margin (optional)

### Z Index
* Z-index from -1 to 10

## Breakpoints
* xs <- 480px
* sm 481px - 960px
* md 961px - 1280px
* lg 1281px ->

### Media queries
* xs()
* sm()
* md()
* lg()

### Credits
* Material palette color thanks to @danlevan https://github.com/danlevan/google-material-color
