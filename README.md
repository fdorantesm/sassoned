# gosp.css
Garlic, onion, salt and pepper...

## How to use

Within sass project
```
@import "gosp.css/src/gosp";
```

CSS file
```
@import "gosp.css/dist/gosp.min.css";
```

HTML Link Tag
```
<link rel="stylesheet" href="./css/gosp.css/dist/gosp.min.css" />;
```

npm
```
npm i gosp.css --save
```

## Build

Just compile gosp.scss file.

```
gulp default
```

Without gulp
```
sass src/gosp.scss dist/gosp.css
```

### Anchor
*  Remove underline decoration and outline
*  Add transition on hover

### Background
* Background color
* Background-size
* Background-position
* Background-attachment
* Background-image

#### Background colors

| Class | Property | Value |
| :-: | :-: | :-: |
|bc0|background-color|#000|
|bc3|background-color|#333|
|bc6|background-color|#666|
|bc9|background-color|#999|
|bcA|background-color|#AAA|
|bcC|background-color|#CCC|
|bcE|background-color|#EEE|
|bcF|background-color|#FFF|

#### Background size
| Class | Property | Value |
| :-: | :-: | :-: |
|bscc|background-size|contain|
|bscv|background-size|cover|
|bsx|background-size|100% 100%|

#### Background position
| Class | Property | Value |
| :-: | :-: | :-: |
|bpbc|background-position|center bottom|
|bpbl|background-position|left bottom|
|bpbr|background-position|right bottom|
|bpcb|background-position|center bottom|
|bpcc|background-position|center center|
|bpcl|background-position|left center|
|bpcr|background-position|right center|
|bpct|background-position|center top|
|bplb|background-position|left bottom|
|bplc|background-position|left center|
|bplt|background-position|left top|
|bprb|background-position|right bottom|
|bprc|background-position|right center|
|bprt|background-position|right top|
|bptc|background-position|center top|
|bptl|background-position|left top|
|bptr|background-position|right top,|

#### Background attachment
| Class | Property | Value |
| :-: | :-: | :-: |
|baf|background-attachment|fixed|

#### Background image
| Class | Property | Value |
| :-: | :-: | :-: |
|biu|background-image|unset|

#### Background repeat
|brnr|background-repeat|no-repeat|
|brr|background-repeat|repeat|
|brrx|background-repeat|repeat-x|
|brry|background-repeat|repeat-y|

### Box
* Border none
* Box sizing box
* Box content box

### Cursor
| Class | Property | Value |
|:-:|:-:|:-:|
|curd|cursor|default|
|curna|cursor|not-allowed|
|curp|cursor|pointer|
|curt|cursor|text|
|curw|cursor|wait|

### Display
| Class | Property | Value |
|:-:|:-:|:-:|
|db|display|block|
|dfx|display|flex|
|di|display|inline|
|dib|display|inline-block|
|din|display|initial|
|dn|display|none|
|dt|display|table|
|dtc|display|table-cell|
|dtr|display|table-row|

### Flex
* Align
* Grow
* Justify
* Order
* Shrink
* Direction

#### Flex align
|Class|Property|Value|
|:-:|:-:|:-:|
|aic|align-items|center|
|aife|align-items|flex-end|
|aifs|align-items|flex-start|
|aiu|align-items|unset|
|aic|align-self|center|
|aife|align-self|flex-end|
|aifs|align-self|flex-start|
|aiu|align-self|unset|

#### Flex direction
|Class|Property|Value|
|:-:|:-:|:-:|
|fdc|flex-direction|column|
|fdr|flex-direction|row|
|fdcr|flex-direction|column-reverse|
|fdrr|flex-direction|row-reverse|

#### Flex grow
|Class|Property|Value|
|:-:|:-:|:-:|
|fg0|flex-grow|0|
|fg1|flex-grow|1|
|fg2|flex-grow|2|
|fg3|flex-grow|3|
|fg4|flex-grow|4|
|fg5|flex-grow|5|
|fg6|flex-grow|6|

Note: From 0 to $gosp-grid-columns / 2

#### Flex justify
|Class|Property|Value|
|:-:|:-:|:-:|
|jcc|justify-content|center|
|jcs|justify-content|stretch|
|jcu|justify-content|unset|
|jcfe|justify-content|flex-end|
|jcfs|justify-content|flex-start|
|jcsa|justify-content|space-around|
|jcsb|justify-content|space-between|
|jcc|justify-self|center|
|jcs|justify-self|stretch|
|jcu|justify-self|unset|
|jcfe|justify-self|flex-end|
|jcfs|justify-self|flex-start|
|jcsa|justify-self|space-around|
|jcsb|justify-self|space-between|

#### Flex order
|Class|Property|Value|
|:-:|:-:|:-:|
|ord-1|order|-1|
|ord0|order|0|
|ord1|order|1|
|ord2|order|2|
|ord3|order|3|
|ord4|order|4|
|ord5|order|5|
|ord6|order|6|
|ord7|order|7|
|ord8|order|8|
|ord9|order|9|
|ord10|order|10|
|ord11|order|11|
|ord12|order|12|

#### Flex shrink
|Class|Property|Value|
|:-:|:-:|:-:|
|fsh0|flex-shrink|0|
|fsh1|flex-shrink|1|
|fsh2|flex-shrink|2|
|fsh3|flex-shrink|3|
|fsh4|flex-shrink|4|
|fsh5|flex-shrink|5|
|fsh6|flex-shrink|6|

Note: From 0 to $gosp-grid-columns / 2

#### Flex wrap
|fwnw|flex-wrap|no-wrap|
|fww|flex-wrap|wrap|
|fwwr|flex-wrap|wrap-reverse|

### Floats
|Class|Property|Value|
|:-:|:-:|:-:|
|fl|float|left|
|fn|float|none|
|fr|float|right|
|fu|float|unset|

### Font

|Prefix class|Property|Unit|From|To|Gap|
|:-:|:-:|:-:|:-:|:-:|:-:|
|fsp|font-size|px|8|48|2|
|fsp|font-size|px|50|100|10|
|fse|font-size|em|0.5|3|0.25|
|fsr|font-size|rem|0.5|3|0.25|

|Class|Property|Value|
|:-:|:-:|:-:|
|fw100|font-weight|100|
|fw200|font-weight|200|
|fw300|font-weight|300|
|fw400|font-weight|400|
|fw500|font-weight|500|
|fw600|font-weight|600|
|fw700|font-weight|700|
|fw800|font-weight|800|
|fw900|font-weight|900|
|b|font-weight|bold|
|l|font-weight|lighter|
|n|font-weight|normal|
|i|font-style|italic|
|o|font-style|oblique|

### Form
* Custom select with angle-down
* Outline 0 on each form control

### Generals
|Class|Property|Value|
|:-:|:-:|:-:|
|fw|width|100%|
|w100vw|width|100vw|

### Grid
|Type|Description|Nested|Offset|Pull|Push|
|:-:|:-|:-:|:-:|:-:|:-:|
|Flex| Based on flexboxgrid)| Yes | Yes | No | No
|Float| Based on twbs bootstrap)| Yes | Yes | Yes | Yes
|Inline| Same as bootstrap but using inline-block)| Yes | Yes | Yes | Yes
|Fractionary| Using fractions like col-md-1-2 eq col-md-6 based on wp grid by Ricardo Aguirre)| Yes | Yes | Yes | Yes

Note: You can order flex columns using order classes and order media helpers.

### Height

|Class|Property|Value|
|:-:|:-:|:-:|
|h0|height|0|
|h25p|height|25%|
|h50p|height|50%|
|h75p|height|75%|
|h100p|height|100%|

|Prefix class|Property|Unit|From|To|Gap|
|:-:|:-:|:-:|:-:|:-:|:-:|
|h|height|px|0|45|5|
|h|height|px|50|90|10|
|h|height|px|100|500|50|

### List

|Class|Description|
|:-:|:-:|
|list-reset| Sets margin and padding to 0 and list-style to none |
|list-inline| Displays list item as inline-block |

|Class|Property|Value|
|:-:|:-:|:-:|
|list-columns-1|columns|1|
|list-columns-2|columns|2|
|list-columns-3|columns|3|
|list-columns-4|columns|4|
|list-columns-5|columns|5|
|list-columns-6|columns|6|

Note: From 1 to $gosp-grid-columns / 2

|Class|Property|Value|
|:-:|:-:|:-:|
|lsd|list-style|decimal|
|lsdlz|list-style|decimal-leading-zero|
|lsla|list-style|lower-alpha|
|lslr|list-style|lower-roman|
|lsua|list-style|upper-alpha|
|lsur|list-style|upper-roman|

### Margin and padding
|Prefix class|Property|Unit|From|To|Gap|
|:-:|:-:|:-:|:-:|:-:|:-:|
|m|margin|px|0|50|5|
|mt|margin-top|px|0|50|5|
|mr|margin-right|px|0|50|5|
|mb|margin-bottom|px|0|50|5|
|ml|margin-left|px|0|50|5|
|p|padding|px|0|50|5|
|pt|padding-top|px|0|50|5|
|pr|padding-right|px|0|50|5|
|pb|padding-bottom|px|0|50|5|
|pl|padding-left|px|0|50|5|

### Position

|Prefix class|Property|Unit|From|To|Gap|
|:-:|:-:|:-:|:-:|:-:|:-:|
|t|top|px|0|50|5|
|r|right|px|0|50|5|
|b|bottom|px|0|50|5|
|l|left|px|0|50|5|

|Class|Property|Value|
|:-:|:-:|:-:|
|pa|position|absolute|
|pf|position|fixed|
|pr|position|relative|
|ps|position|static|
|psy|position|sticky|
|pu|position|unset|

|Class|Description|
|:-:|:-:|
|abs|Creates a layer with the same width and height over the parent element|

### Show and hide
|Class|
|:-:|
|hide|
|hide-[size]|
|hide-[size]|
|hide-[size]|
|hide-[size]-below|
|hide-[size]-above|
|hide-[size]|
|show|
|show-[size]|
|show-[size]|
|show-[size]|
|show-[size]-below|
|show-[size]-above|
|show-[size]|

### Table
|Class| Description|
|Collapsed| Border collapsed|
|Fixed| Columns with the same width|
|Responsive| Table rows to columns under sm size|
|Striped| Even rows with light gray background|

### Text

|Class|Property|Value|
|:-:|:-:|:-:|
|tac|text-align|center|
|taj|text-align|justify|
|tal|text-align|left|
|tar|text-align|right|
|tdlt|text-decoration|line-through|
|tdo|text-decoration|overline|
|tdou|text-decoration|underline overline|
|tdu|text-decoration|underline|
|tduo|text-decoration|underline overline|
|tduos|text-decoration|underline overline line-through|
|tduso|text-decoration|underline overline line-through|
|tdous|text-decoration|underline overline line-through|
|tdosu|text-decoration|underline overline line-through|
|tdsou|text-decoration|underline overline line-through|
|tdsuo|text-decoration|underline overline line-through|
|ttc|text-transform|capitalize|
|ttl|text-transform|lowercase|
|ttn|text-transform|none|
|ttu|text-transform|uppercase|
|tdsda|text-decoration-style|dashed|
|tdsdo|text-decoration-style|dotted|
|tdss|text-decoration-style|solid|
|tdsw|text-decoration-style|wavy|
|tdi|text-direction|initial|
|tdl|text-direction|ltr|
|tdr|text-direction|rtl|

|Class|Description|
|paragraph-reset| Sets margin to 0|

### Vertial align

|Class|Property|Value|
|:-:|:-:|:-:|
|vab|vertical-align|bottom|
|vabl|vertical-align|baseline|
|vainh|vertical-align|inherit|
|vam|vertical-align|middle|
|vasub|vertical-align|sub|
|vasup|vertical-align|super|
|vat|vertical-align|top|
|vatb|vertical-align|text-bottom|
|vatt|vertical-align|text-top|

### Visibility

|Class|Property|Value|
|:-:|:-:|:-:|
vc|visibility|collapse|
vh|visibility|hidden|
vu|visibility|unset|
vv|visibility|visible|

### Z Index
|   Index   |   Elements   |
| :-: | :-:|
| -1 | Any |
| 1 | Any |
| 10 | Fixed |
| 100 | Dialog |
| 1000 | Fullscreen layers |

### Breakpoints
|   Size   |   Min   |   Max  | Prefix |
| :-: | :-:| :-: | :-: | 
| xs |  | 480px| .col-xs | 
| sm | 481px | 768px | .col-sm |
| md | 769px | 1280px | .col-md |
| lg | 1281px|  1600px | .col-lg |
| xl | 1601px | col-xl | .col-xl |

### Media queries
| Size | Mixin |
| :-: | :-:
| xs | xs() |
| sm | sm() |
| sm-down | sm-down() |
| sm-up | sm-up() |
| md | md() |
| md-down | md-down() |
| md-up | md-up() |
| lg | lg() |
| lg-down | lg-down() |
| lg-up | lg-up() |
| xl | xl() |

Example:

<pre>
@include sm-up {
    // rules
}
</pre>

### Media helpers

This classes will be able to change property-value classes in each display resolution. Remember mobile first.

##### {size}-{key}{val}

* Margin
* Padding
* Font size (px, em, rem)
* Position
* Text align
* List columns
* Hide and show

| Property | Value| Helper class  |   Responsive helper   |
| :-: | :-:| :-:| :-:|
| Margin | From 0 to 50 | m50 | md-m50 |
| Margin top| From 0 to 50 | mt50 | md-mt50 |
| Margin right| From 0 to 50 | mr50 | md-mr50 |
| Margin left| From 0 to 50 | ml50 | md-ml50 |
| Margin bottom| From 0 to 50 | mb50 | md-mb50 |
| Padding | From 0 to 50 | p50 | md-p50 |
| Padding top| From 0 to 50 | pt50 | md-pt50 |
| Padding right| From 0 to 50 | pr50 | md-pr50 |
| Padding left| From 0 to 50 | pl50 | md-pl50 |
| Padding bottom| From 0 to 50 | pb50 | md-pb50 |
| Font size | From 8 to 48 | fsp16 | md-fsp16 |
| Font size | From 50 to 100 | fsp60 | xs-fsp20 |

### Credits
* Flexboxgrid: Thanks to @kristoferjoseph https://github.com/kristoferjoseph/flexboxgrid
* Bootstrap: Thanks to Twitter https://github.com/twbs/bootstrap
* RicAg
* @escueladigital: em and rem functions from ED-Grid https://github.com/escueladigital/EDgrid

### Changelog
* Rebuilt lib using sass with scss syntax
* Removed color palette mixin
* Added xl media size
* Added auto column