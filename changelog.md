### 1.0.4

- Restored col-auto (removed by mistake)
- Added flex order (ord) classes (without media prefix)
- Readme updated

### 1.0.3

- Added justify-self, align-self to responsive helpers. center-box and text-align classes were moved to responsive helpers
- Removed center-text class
- Added margin 0 to body
- Removed commented code


### 1.0.2

Grid type and fractionary mix

- Added fractionary as boolean config param. You could enable to get fractionary column classes.
- Added grid type. You could choose between flex, inline or float.
- Added column gutter var.

#### In progress

* Fractionary grid optimization
* Flex order aliases when fractionary is enabled

#### 1.0.1

NEW

- List column classes were renamed to list-columns prefix.
--- Added list-columns to generate these classes.

ie: list-columns-sm-4, list-columns-4


FIXES

- List columns were outside its media queries.
