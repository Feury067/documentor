# MDN CSS Documentation Index

**Purpose**: This index provides regex patterns and grep commands to efficiently navigate the massive MDN CSS documentation (`mdn-css-docs.md`).

**File Location**: `docs/external/css/mdn-css-docs.md` (243,434 lines)

**Last Updated**: Generated from spidered documentation on 2025-11-22

**Note**: Most grep commands use the `-E` flag for extended regular expressions. This enables proper handling of alternation (`|`) and other regex features.

---

## Quick Navigation Commands

### Find Main Documentation Sections
```bash
# Find CSS properties section
grep -n "^### CSS properties - CSS | MDN$" mdn-css-docs.md

# Find CSS selectors section
grep -n "^### CSS selectors - CSS | MDN$" mdn-css-docs.md

# Find CSS at-rules section
grep -n "^### CSS at-rules - CSS | MDN$" mdn-css-docs.md

# Find CSS values section
grep -n "^### CSS values - CSS | MDN$" mdn-css-docs.md

# Find CSS reference section
grep -n "^### CSS reference - CSS | MDN$" mdn-css-docs.md

# Find CSS guides section
grep -n "^### CSS guides - CSS | MDN$" mdn-css-docs.md

# Find CSS layout cookbook section
grep -n "^### CSS layout cookbook - CSS | MDN$" mdn-css-docs.md

# Find tutorials (box model, animations, flexbox)
grep -nE "^### (Introduction to the CSS box model|Using CSS animations|Basic concepts of flexbox)" mdn-css-docs.md
```

### Find Property Documentation
```bash
# Find specific property (e.g., display)
grep -n "^### display - CSS | MDN$" mdn-css-docs.md

# Find property by pattern
grep -nE "^### (flex|grid|position|margin|padding|color|background|border|width|height) - CSS" mdn-css-docs.md

# Find all properties starting with a letter
grep -n "^### [a-z-]* - CSS | MDN$" mdn-css-docs.md | head -50
```

### Find Selector Documentation
```bash
# Find selector types
grep -nE "^### (Basic selectors|Grouping selectors|Combinators|Pseudo)" mdn-css-docs.md

# Find specific selector patterns
grep -n "selector\|Selectors" mdn-css-docs.md | head -30
```

---

## Documentation Organization

The documentation is organized into **main sections**:

1. **CSS Properties** - Complete reference of all CSS properties, organized alphabetically
2. **CSS Selectors** - Selector syntax, combinators, pseudo-classes, pseudo-elements
3. **CSS At-Rules** - @media, @keyframes, @import, @supports, etc.
4. **CSS Values** - Value types, units, keywords, functions
5. **CSS Reference** - General CSS reference and syntax
6. **CSS Guides** - Comprehensive guides and tutorials for CSS concepts
7. **CSS Layout Cookbook** - Recipes for common layout patterns
8. **Tutorials and Guides** - Box model, animations, flexbox, etc.

---

## Section 1: CSS Properties

**Purpose**: Complete reference of all CSS properties with syntax, examples, and specifications.

### Key Sections

#### Properties Overview
```bash
# Find CSS properties main section
grep -n "^### CSS properties - CSS | MDN$" mdn-css-docs.md

# Find alphabetical index
grep -n "^## Alphabetical index of properties" mdn-css-docs.md

# Find property categories (alphabetical groupings)
grep -nE "^### (A |B |B - C |D - F |G - I |J - M |O - P |Q - S |T - Z |Non-standard)" mdn-css-docs.md
```

#### Finding Specific Properties

##### Layout Properties
```bash
# Find display property
grep -n "^### display - CSS | MDN$" mdn-css-docs.md

# Find position property
grep -n "^### position - CSS | MDN$" mdn-css-docs.md

# Find flex property
grep -n "^### flex - CSS | MDN$" mdn-css-docs.md

# Find grid properties
grep -nE "^### (grid|grid-template|grid-column|grid-row|grid-area) - CSS" mdn-css-docs.md

# Find float property
grep -n "^### float - CSS | MDN$" mdn-css-docs.md

# Find overflow property
grep -n "^### overflow - CSS | MDN$" mdn-css-docs.md

# Find visibility property
grep -n "^### visibility - CSS | MDN$" mdn-css-docs.md
```

##### Spacing Properties
```bash
# Find margin property
grep -n "^### margin - CSS | MDN$" mdn-css-docs.md

# Find padding property
grep -n "^### padding - CSS | MDN$" mdn-css-docs.md

# Find gap property
grep -n "^### gap - CSS | MDN$" mdn-css-docs.md

# Find spacing-related properties
grep -nE "^### (margin|padding|gap|space) - CSS" mdn-css-docs.md
```

##### Sizing Properties
```bash
# Find width property
grep -n "^### width - CSS | MDN$" mdn-css-docs.md

# Find height property
grep -n "^### height - CSS | MDN$" mdn-css-docs.md

# Find min/max properties
grep -nE "^### (min-width|max-width|min-height|max-height) - CSS" mdn-css-docs.md

# Find box-sizing property
grep -n "^### box-sizing - CSS | MDN$" mdn-css-docs.md
```

##### Typography Properties
```bash
# Find font properties
grep -nE "^### (font|font-family|font-size|font-weight|font-style|font-variant) - CSS" mdn-css-docs.md

# Find text properties
grep -nE "^### (text|text-align|text-decoration|text-transform|text-shadow|line-height|letter-spacing|word-spacing) - CSS" mdn-css-docs.md

# Find color property
grep -n "^### color - CSS | MDN$" mdn-css-docs.md
```

##### Background Properties
```bash
# Find background property
grep -n "^### background - CSS | MDN$" mdn-css-docs.md

# Find background-related properties
grep -nE "^### (background-color|background-image|background-position|background-size|background-repeat|background-attachment) - CSS" mdn-css-docs.md
```

##### Border Properties
```bash
# Find border property
grep -n "^### border - CSS | MDN$" mdn-css-docs.md

# Find border-related properties
grep -nE "^### (border-width|border-style|border-color|border-radius|border-image) - CSS" mdn-css-docs.md

# Find border side properties
grep -nE "^### (border-top|border-right|border-bottom|border-left) - CSS" mdn-css-docs.md
```

##### Animation Properties
```bash
# Find animation property
grep -n "^### animation - CSS | MDN$" mdn-css-docs.md

# Find animation-related properties
grep -nE "^### (animation-name|animation-duration|animation-timing-function|animation-delay|animation-iteration-count|animation-direction|animation-fill-mode|animation-play-state) - CSS" mdn-css-docs.md

# Find transition property
grep -n "^### transition - CSS | MDN$" mdn-css-docs.md

# Find transform property
grep -n "^### transform - CSS | MDN$" mdn-css-docs.md
```

##### Flexbox Properties
```bash
# Find flexbox properties
grep -nE "^### (flex|flex-direction|flex-wrap|flex-flow|flex-grow|flex-shrink|flex-basis|justify-content|align-items|align-content|align-self|order) - CSS" mdn-css-docs.md
```

##### Grid Properties
```bash
# Find grid properties
grep -nE "^### (grid|grid-template|grid-template-columns|grid-template-rows|grid-template-areas|grid-column|grid-row|grid-area|grid-gap|grid-auto-columns|grid-auto-rows|grid-auto-flow|justify-items|align-items|place-items|justify-content|align-content|place-content) - CSS" mdn-css-docs.md
```

##### Other Common Properties
```bash
# Find z-index property
grep -n "^### z-index - CSS | MDN$" mdn-css-docs.md

# Find opacity property
grep -n "^### opacity - CSS | MDN$" mdn-css-docs.md

# Find cursor property
grep -n "^### cursor - CSS | MDN$" mdn-css-docs.md

# Find list properties
grep -nE "^### (list-style|list-style-type|list-style-position|list-style-image) - CSS" mdn-css-docs.md
```

---

## Section 2: CSS Selectors

**Purpose**: Complete reference of CSS selectors, combinators, and pseudo-classes/elements.

### Key Sections

#### Selectors Overview
```bash
# Find CSS selectors main section
grep -n "^### CSS selectors - CSS | MDN$" mdn-css-docs.md

# Find selector index
grep -n "^## Index of selectors" mdn-css-docs.md

# Find selector categories
grep -nE "^### (Basic selectors|Grouping selectors|Combinators|Pseudo)" mdn-css-docs.md
```

#### Basic Selectors
```bash
# Find basic selectors section
grep -n "^### Basic selectors" mdn-css-docs.md

# Find type selector
grep -n "type.*selector\|element.*selector" mdn-css-docs.md | head -20

# Find class selector
grep -n "class.*selector\|\.class" mdn-css-docs.md | head -20

# Find ID selector
grep -n "id.*selector\|#id" mdn-css-docs.md | head -20

# Find universal selector
grep -n "universal.*selector\|\*" mdn-css-docs.md | head -20
```

#### Combinators
```bash
# Find combinators section
grep -n "^### Combinators" mdn-css-docs.md

# Find descendant combinator
grep -n "descendant.*combinator\| " mdn-css-docs.md | head -20

# Find child combinator
grep -n "child.*combinator\|>" mdn-css-docs.md | head -20

# Find adjacent sibling combinator
grep -n "adjacent.*sibling\|+" mdn-css-docs.md | head -20

# Find general sibling combinator
grep -n "general.*sibling\|~" mdn-css-docs.md | head -20
```

#### Pseudo-classes and Pseudo-elements
```bash
# Find pseudo section
grep -n "^### Pseudo" mdn-css-docs.md

# Find pseudo-classes
grep -n "pseudo-class\|:hover\|:focus\|:active\|:visited\|:link" mdn-css-docs.md | head -30

# Find pseudo-elements
grep -n "pseudo-element\|::before\|::after\|::first-line\|::first-letter" mdn-css-docs.md | head -30
```

---

## Section 3: CSS At-Rules

**Purpose**: Reference for CSS at-rules like @media, @keyframes, @import, etc.

### Key Sections

#### At-Rules Overview
```bash
# Find CSS at-rules main section
grep -n "^### CSS at-rules - CSS | MDN$" mdn-css-docs.md

# Find at-rules index
grep -n "^## Index of at-rules and at-rule descriptors" mdn-css-docs.md

# Find media features index
grep -n "^## Index of media features" mdn-css-docs.md
```

#### Common At-Rules
```bash
# Find @media rule
grep -n "@media\|media.*query" mdn-css-docs.md | head -30

# Find @keyframes rule
grep -n "@keyframes\|keyframes" mdn-css-docs.md | head -30

# Find @import rule
grep -n "@import\|import" mdn-css-docs.md | head -20

# Find @supports rule
grep -n "@supports\|supports" mdn-css-docs.md | head -20

# Find @container rule
grep -n "@container\|container.*query" mdn-css-docs.md | head -20

# Find @font-face rule
grep -n "@font-face\|font-face" mdn-css-docs.md | head -20
```

---

## Section 4: CSS Values

**Purpose**: Reference for CSS value types, units, keywords, and functions.

### Key Sections

#### Values Overview
```bash
# Find CSS values main section
grep -n "^### CSS values - CSS | MDN$" mdn-css-docs.md

# Find values index
grep -n "^## Index of keywords" mdn-css-docs.md
```

#### Value Types
```bash
# Find numeric values
grep -n "numeric\|number\|integer\|percentage" mdn-css-docs.md | head -30

# Find length values
grep -n "length\|px\|em\|rem\|vh\|vw\|%" mdn-css-docs.md | head -30

# Find color values
grep -n "color\|rgb\|rgba\|hsl\|hsla\|hex" mdn-css-docs.md | head -30

# Find function values
grep -n "function\|calc\|var\|url\|linear-gradient\|radial-gradient" mdn-css-docs.md | head -30
```

---

## Section 5: CSS Reference

**Purpose**: General CSS reference including syntax, concepts, and guides.

### Key Sections

#### Reference Overview
```bash
# Find CSS reference main section
grep -n "^### CSS reference - CSS | MDN$" mdn-css-docs.md

# Find syntax section
grep -n "^## Syntax\|^### Style rule syntax\|^### At-rule syntax" mdn-css-docs.md

# Find concepts section
grep -n "^### Concepts\|^## Concepts" mdn-css-docs.md
```

#### CSS Concepts
```bash
# Find cascade and specificity
grep -n "cascade\|specificity\|inheritance" mdn-css-docs.md | head -30

# Find box model
grep -n "box.*model\|margin\|padding\|border" mdn-css-docs.md | head -30

# Find stacking context
grep -n "stacking.*context\|z-index" mdn-css-docs.md | head -20

# Find containing block
grep -n "containing.*block" mdn-css-docs.md | head -20
```

---

## Section 6: CSS Guides

**Purpose**: Comprehensive guides and tutorials for CSS concepts, techniques, and best practices.

### Key Sections

#### Guides Overview
```bash
# Find CSS guides main section
grep -n "^### CSS guides - CSS | MDN$" mdn-css-docs.md

# Find guide topics
grep -nE "^### (CSS|Introduction|Using|Basic concepts)" mdn-css-docs.md | head -50
```

#### Common Guide Topics
```bash
# Find box model guides
grep -nE "^### (CSS box model|Introduction to the CSS box model|CSS box sizing)" mdn-css-docs.md

# Find flexbox guides
grep -nE "^### (CSS flexible box layout|Basic concepts of flexbox)" mdn-css-docs.md

# Find grid guides
grep -nE "^### CSS grid layout - CSS" mdn-css-docs.md

# Find animation guides
grep -nE "^### (CSS animations|Using CSS animations)" mdn-css-docs.md

# Find color guides
grep -nE "^### CSS colors - CSS" mdn-css-docs.md

# Find background guides
grep -nE "^### CSS backgrounds and borders - CSS" mdn-css-docs.md

# Find other module guides (shapes, masking, multi-column, etc.)
grep -nE "^### CSS (shapes|masking|multi-column|display|anchor positioning|basic user interface|logical properties|writing modes|values and units|paged media) - CSS" mdn-css-docs.md
```

---

## Section 7: CSS Layout Cookbook

**Purpose**: Recipes for common layout patterns and practical implementation examples.

### Key Sections

#### Cookbook Overview
```bash
# Find CSS layout cookbook main section
grep -n "^### CSS layout cookbook - CSS | MDN$" mdn-css-docs.md

# Find cookbook recipes
grep -n "layout cookbook\|recipe\|pattern" mdn-css-docs.md | head -30
```

#### Common Layout Patterns
```bash
# Find specific layout patterns
grep -nE "^### (Center|Grid|Flexbox|Multi-column|Sticky|Overlay|Split|Card)" mdn-css-docs.md | head -30

# Find responsive patterns
grep -n "responsive\|media.*query\|container.*query" mdn-css-docs.md | head -30
```

---

## Section 8: Tutorials and Guides

**Purpose**: Practical guides and tutorials for CSS concepts.

### Key Sections

#### Box Model
```bash
# Find box model tutorial
grep -n "^### Introduction to the CSS box model - CSS | MDN$" mdn-css-docs.md

# Find box model content
grep -n -A30 "Introduction to the CSS box model" mdn-css-docs.md | head -50
```

#### Animations
```bash
# Find animations tutorial
grep -n "^### Using CSS animations - CSS | MDN$" mdn-css-docs.md

# Find animation examples
grep -nE "^### (Making text slide|Adding another keyframe|Repeating the animation|Making the animation move|Using animation events|Animating display)" mdn-css-docs.md
```

#### Flexbox
```bash
# Find flexbox tutorial
grep -n "^### Basic concepts of flexbox - CSS | MDN$" mdn-css-docs.md

# Find flexbox concepts
grep -nE "^### (The main axis|The cross axis|Initial values|Changing flex-direction|The flex-basis property|The flex-grow property|The flex-shrink property|Shorthand values|align-items|justify-content|justify-items|place-items)" mdn-css-docs.md
```

---

## Common Patterns

### Finding Property Documentation
```bash
# Find any property by name
grep -nE "^### [a-z-]+ - CSS \| MDN$" mdn-css-docs.md | grep "property-name"

# Find property with context (10 lines before and after)
grep -nE -B10 -A10 "^### display - CSS \| MDN$" mdn-css-docs.md | head -30

# Find all properties in alphabetical sections
grep -nE "^### (A |B |B - C |D - F |G - I |J - M |O - P |Q - S |T - Z |Non-standard)" mdn-css-docs.md | head -20
```

### Finding Examples
```bash
# Find code blocks (markdown code fences)
grep -n "^```" mdn-css-docs.md | head -100

# Find example sections
grep -nE "^#### (HTML|CSS|JavaScript|Result|Example)" mdn-css-docs.md | head -50

# Find style rule examples
grep -n "^#### Style rule examples" mdn-css-docs.md
```

### Finding Source URLs
```bash
# Find source URL patterns
grep -n "\*\*Source:\*\*" mdn-css-docs.md | head -50

# Find specific source URLs
grep -n "developer.mozilla.org" mdn-css-docs.md | head -50
```

### Finding Specifications
```bash
# Find specifications sections
grep -n "^## Specifications" mdn-css-docs.md

# Find spec references
grep -n "W3C\|specification\|Spec" mdn-css-docs.md | head -50
```

---

## Advanced Search Patterns

### Find All Properties
```bash
# Find all property headers
grep -nE "^### [a-z-]+ - CSS \| MDN$" mdn-css-docs.md | head -100

# Extract unique property names
grep -oE "^### [a-z-]+ - CSS" mdn-css-docs.md | sed 's/^### //' | sed 's/ - CSS$//' | sort -u | head -100
```

### Find Properties by Category
```bash
# Find layout properties
grep -nE "^### (display|position|float|clear|overflow|visibility|z-index|flex|grid|align|justify|place) - CSS" mdn-css-docs.md

# Find spacing properties
grep -nE "^### (margin|padding|gap|space) - CSS" mdn-css-docs.md

# Find sizing properties
grep -nE "^### (width|height|min-width|max-width|min-height|max-height|box-sizing) - CSS" mdn-css-docs.md

# Find typography properties
grep -nE "^### (font|text|line-height|letter-spacing|word-spacing|color) - CSS" mdn-css-docs.md

# Find background properties
grep -nE "^### background - CSS" mdn-css-docs.md

# Find border properties
grep -nE "^### border - CSS" mdn-css-docs.md

# Find animation properties
grep -nE "^### (animation|transition|transform) - CSS" mdn-css-docs.md
```

### Find Non-Standard Properties
```bash
# Find non-standard properties section
grep -n "^### Non-standard properties" mdn-css-docs.md

# Find vendor prefixes
grep -nE "^#### (`-moz-`|`-webkit-`|`-ms-`|`-o-`)" mdn-css-docs.md
```

### Find Shorthand Properties
```bash
# Find shorthand properties (mentioned in descriptions)
grep -n "shorthand\|Shorthand" mdn-css-docs.md | head -50

# Common shorthand properties
grep -nE "^### (margin|padding|border|background|font|animation|transition|flex|grid) - CSS" mdn-css-docs.md
```

---

## Module-Specific Search Strategies

### For Layout
```bash
# Find display values
grep -n "display.*block\|display.*flex\|display.*grid\|display.*inline" mdn-css-docs.md | head -30

# Find positioning
grep -n "position.*absolute\|position.*relative\|position.*fixed\|position.*sticky" mdn-css-docs.md | head -30

# Find flexbox
grep -n "flex\|flexbox\|flexible.*box" mdn-css-docs.md | head -30

# Find grid
grep -n "grid\|CSS.*Grid" mdn-css-docs.md | head -30
```

### For Typography
```bash
# Find font properties
grep -n "font-family\|font-size\|font-weight\|font-style" mdn-css-docs.md | head -30

# Find text properties
grep -n "text-align\|text-decoration\|text-transform\|text-shadow" mdn-css-docs.md | head -30

# Find line and letter spacing
grep -n "line-height\|letter-spacing\|word-spacing" mdn-css-docs.md | head -20
```

### For Colors
```bash
# Find color values
grep -n "rgb\|rgba\|hsl\|hsla\|hex\|color.*keyword" mdn-css-docs.md | head -30

# Find color property
grep -n "^### color - CSS \| MDN$" mdn-css-docs.md

# Find background-color
grep -n "background-color\|background.*color" mdn-css-docs.md | head -20
```

### For Animations
```bash
# Find animation properties
grep -n "animation\|@keyframes\|keyframe" mdn-css-docs.md | head -30

# Find transition properties
grep -n "transition\|transition-property\|transition-duration\|transition-timing-function" mdn-css-docs.md | head -30

# Find transform properties
grep -n "transform\|transform-origin\|translate\|rotate\|scale" mdn-css-docs.md | head -30
```

### For Responsive Design
```bash
# Find media queries
grep -n "@media\|media.*query\|responsive" mdn-css-docs.md | head -30

# Find container queries
grep -n "@container\|container.*query" mdn-css-docs.md | head -20

# Find viewport units
grep -n "vh\|vw\|vmin\|vmax\|viewport" mdn-css-docs.md | head -20
```

---

## Efficient Search Workflow

### Step 1: Identify Category
```bash
# If you know the property category (Layout, Typography, etc.)
grep -nE "^### (display|position|flex|grid|margin|padding|font|text|color|background|border|animation|transition) - CSS" mdn-css-docs.md

# Or search for main sections
grep -nE "^### (CSS properties|CSS selectors|CSS at-rules|CSS values|CSS reference|CSS guides|CSS layout cookbook)" mdn-css-docs.md
```

### Step 2: Find Specific Property/Selector/At-Rule
```bash
# Within that category, find the specific item
# Example: Find display property
grep -n "^### display - CSS \| MDN$" mdn-css-docs.md

# Or find by pattern
grep -nE "^### (display|flex|grid)" mdn-css-docs.md | head -10
```

### Step 3: Read Documentation
```bash
# Use line numbers from grep to read specific sections
# Example: Read lines 117996-118500 (display property section)
sed -n '117996,118500p' mdn-css-docs.md
```

---

## Key API Surface Areas

### Layout Properties
- **Display**: `display`, `position`, `float`, `clear`, `overflow`, `visibility`, `z-index`
- **Flexbox**: `flex`, `flex-direction`, `flex-wrap`, `flex-flow`, `flex-grow`, `flex-shrink`, `flex-basis`, `justify-content`, `align-items`, `align-content`, `align-self`, `order`
- **Grid**: `grid`, `grid-template`, `grid-template-columns`, `grid-template-rows`, `grid-template-areas`, `grid-column`, `grid-row`, `grid-area`, `grid-gap`, `grid-auto-columns`, `grid-auto-rows`, `grid-auto-flow`, `justify-items`, `align-items`, `place-items`, `justify-content`, `align-content`, `place-content`

### Spacing Properties
- **Margin**: `margin`, `margin-top`, `margin-right`, `margin-bottom`, `margin-left`
- **Padding**: `padding`, `padding-top`, `padding-right`, `padding-bottom`, `padding-left`
- **Gap**: `gap`, `row-gap`, `column-gap`

### Sizing Properties
- **Dimensions**: `width`, `height`, `min-width`, `max-width`, `min-height`, `max-height`
- **Box Model**: `box-sizing`, `margin`, `padding`, `border`

### Typography Properties
- **Font**: `font`, `font-family`, `font-size`, `font-weight`, `font-style`, `font-variant`, `font-stretch`, `line-height`
- **Text**: `text-align`, `text-decoration`, `text-transform`, `text-shadow`, `text-indent`, `text-overflow`, `white-space`, `word-wrap`, `word-break`
- **Color**: `color`

### Background Properties
- **Background**: `background`, `background-color`, `background-image`, `background-position`, `background-size`, `background-repeat`, `background-attachment`, `background-clip`, `background-origin`

### Border Properties
- **Border**: `border`, `border-width`, `border-style`, `border-color`, `border-radius`, `border-image`, `border-top`, `border-right`, `border-bottom`, `border-left`

### Animation Properties
- **Animation**: `animation`, `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, `animation-play-state`
- **Transition**: `transition`, `transition-property`, `transition-duration`, `transition-timing-function`, `transition-delay`
- **Transform**: `transform`, `transform-origin`, `transform-style`, `perspective`, `perspective-origin`

### Selectors
- **Basic**: Type selector, Class selector (`.`), ID selector (`#`), Universal selector (`*`)
- **Combinators**: Descendant (` `), Child (`>`), Adjacent sibling (`+`), General sibling (`~`)
- **Pseudo-classes**: `:hover`, `:focus`, `:active`, `:visited`, `:link`, `:first-child`, `:last-child`, `:nth-child()`, `:not()`, etc.
- **Pseudo-elements**: `::before`, `::after`, `::first-line`, `::first-letter`, `::selection`, etc.

### At-Rules
- **Media Queries**: `@media`
- **Animations**: `@keyframes`
- **Imports**: `@import`
- **Supports**: `@supports`
- **Container Queries**: `@container`
- **Fonts**: `@font-face`
- **Page**: `@page`
- **Namespace**: `@namespace`

### Value Types
- **Lengths**: `px`, `em`, `rem`, `vh`, `vw`, `vmin`, `vmax`, `%`, `ch`, `ex`
- **Colors**: `rgb()`, `rgba()`, `hsl()`, `hsla()`, hex (`#`), named colors
- **Functions**: `calc()`, `var()`, `url()`, `linear-gradient()`, `radial-gradient()`, `conic-gradient()`, `min()`, `max()`, `clamp()`

---

## Tips for LLM Navigation

1. **Start with Property Name**: Most CSS properties follow the pattern `^### property-name - CSS | MDN$`
2. **Use Line Numbers**: The grep commands provide line numbers - use them to jump directly to sections
3. **Context Matters**: Use `-A` and `-B` flags to get context around matches
4. **Multiple Matches**: Some content appears multiple times (duplicate sections) - use `head` to limit results
5. **Source URLs**: Each section has a source URL - use these to verify against online docs if needed
6. **Property Naming**: CSS uses kebab-case for property names (e.g., `background-color`, `font-size`)
7. **Shorthand Properties**: Many properties have shorthand versions (e.g., `margin` is shorthand for `margin-top`, `margin-right`, etc.)

---

## Example Use Cases

### Use Case 1: Find display property documentation
```bash
# Step 1: Find display property
grep -n "^### display - CSS \| MDN$" mdn-css-docs.md

# Step 2: Read the section (example line numbers)
sed -n '117996,118500p' mdn-css-docs.md
```

### Use Case 2: Find flexbox properties
```bash
# Step 1: Find flex property
grep -n "^### flex - CSS \| MDN$" mdn-css-docs.md

# Step 2: Find all flexbox-related properties
grep -nE "^### (flex|flex-direction|flex-wrap|flex-flow|flex-grow|flex-shrink|flex-basis|justify-content|align-items|align-content|align-self|order) - CSS" mdn-css-docs.md
```

### Use Case 3: Find animation tutorial
```bash
# Step 1: Find animations tutorial
grep -n "^### Using CSS animations - CSS \| MDN$" mdn-css-docs.md

# Step 2: Find animation examples
grep -nE "^### (Making text slide|Adding another keyframe|Repeating the animation)" mdn-css-docs.md
```

### Use Case 4: Find media query documentation
```bash
# Step 1: Find @media references
grep -n "@media\|media.*query" mdn-css-docs.md | head -30

# Step 2: Find media features
grep -n "^## Index of media features" mdn-css-docs.md
```

### Use Case 5: Find selector documentation
```bash
# Step 1: Find selectors section
grep -n "^### CSS selectors - CSS \| MDN$" mdn-css-docs.md

# Step 2: Find specific selector types
grep -nE "^### (Basic selectors|Combinators|Pseudo)" mdn-css-docs.md
```

### Use Case 6: Find color values
```bash
# Step 1: Find color property
grep -n "^### color - CSS \| MDN$" mdn-css-docs.md

# Step 2: Find color value types
grep -n "rgb\|rgba\|hsl\|hsla\|hex\|color.*keyword" mdn-css-docs.md | head -30
```

### Use Case 7: Find grid layout properties
```bash
# Step 1: Find grid property
grep -n "^### grid - CSS \| MDN$" mdn-css-docs.md

# Step 2: Find all grid-related properties
grep -nE "^### (grid|grid-template|grid-column|grid-row|grid-area|grid-gap|grid-auto) - CSS" mdn-css-docs.md
```

### Use Case 8: Find box model tutorial
```bash
# Step 1: Find box model tutorial
grep -n "^### Introduction to the CSS box model - CSS \| MDN$" mdn-css-docs.md

# Step 2: Read the tutorial section
# Use line numbers from grep output
```

### Use Case 9: Find transition properties
```bash
# Step 1: Find transition property
grep -n "^### transition - CSS \| MDN$" mdn-css-docs.md

# Step 2: Find transition-related properties
grep -nE "^### (transition-property|transition-duration|transition-timing-function|transition-delay) - CSS" mdn-css-docs.md
```

### Use Case 10: Find pseudo-class selectors
```bash
# Step 1: Find pseudo section
grep -n "^### Pseudo" mdn-css-docs.md

# Step 2: Find pseudo-class examples
grep -n ":hover\|:focus\|:active\|:visited\|:link\|:first-child\|:last-child\|:nth-child" mdn-css-docs.md | head -30
```

### Use Case 11: Find CSS guides
```bash
# Step 1: Find CSS guides section
grep -n "^### CSS guides - CSS \| MDN$" mdn-css-docs.md

# Step 2: Find specific guide topics
grep -nE "^### (CSS box model|CSS flexible box layout|CSS grid layout|CSS animations)" mdn-css-docs.md
```

### Use Case 12: Find layout cookbook recipes
```bash
# Step 1: Find CSS layout cookbook section
grep -n "^### CSS layout cookbook - CSS \| MDN$" mdn-css-docs.md

# Step 2: Find specific layout patterns
grep -n "layout.*pattern\|recipe\|cookbook" mdn-css-docs.md | head -30
```

---

## Notes

- **File Size**: The documentation file is 243,434 lines - always use `head` or `tail` to limit results
- **Duplicates**: Some content appears multiple times (navigation sections, repeated headers) - this is normal and expected due to how the documentation is structured
- **Format**: Documentation follows MDN's standard format with markdown rendering
- **Source URLs**: Each section includes source URL pointing to original online documentation (developer.mozilla.org)
- **Line Numbers**: Line numbers are approximate - content may shift if documentation is regenerated
- **Property Naming**: CSS uses kebab-case for property names (e.g., `background-color`, `font-size`)
- **Property Headers**: Individual properties follow the pattern `^### property-name - CSS | MDN$` (note the pipe character before MDN)
- **Alphabetical Groupings**: Properties are grouped alphabetically with patterns like "A ", "B ", "B - C", "D - F", "G - I", "J - M", "O - P", "Q - S", "T - Z", and "Non-standard"
- **Shorthand Properties**: Many properties have shorthand versions that combine multiple related properties
- **Browser Compatibility**: Documentation includes browser compatibility information where relevant
- **Specifications**: Each property/feature references relevant CSS specifications
- **Module Sections**: Additional module-specific sections exist (e.g., "CSS colors", "CSS animations", "CSS shapes") which are part of the guides or reference sections

---

## Maintenance

When regenerating the documentation:

1. Update the "Last Updated" date
2. Verify line numbers still match (they may shift)
3. Update any section-specific content if structure changes
4. Add new properties, selectors, or at-rules as they appear
5. Update "Key API Surface Areas" section with new features
6. Check for new tutorials, guides, or cookbook recipes
7. Verify property alphabetical groupings pattern matches current structure
8. Add any new major sections (e.g., CSS guides, layout cookbook) to the main sections list

---

**End of Index**

