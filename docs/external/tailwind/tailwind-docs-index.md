# Tailwind CSS Documentation Index

**Purpose**: This index provides regex patterns and grep commands to efficiently navigate the massive Tailwind CSS documentation (`tailwind-docs.md`).

**File Location**: `docs/external/tailwind/tailwind-docs.md` (20,647 lines)

**Last Updated**: Generated from spidered documentation on 2025-11-21

**Note**: Most grep commands use the `-E` flag for extended regular expressions. This enables proper handling of alternation (`|`) and other regex features.

---

## Quick Navigation Commands

### Find Main Documentation Sections
```bash
# Find Getting Started section
grep -nE "^### .* - Getting started - Tailwind CSS$" tailwind-docs.md

# Find Core Concepts section
grep -nE "^### .* - Core concepts - Tailwind CSS$" tailwind-docs.md

# Find Layout utilities
grep -nE "^### .* - Layout - Tailwind CSS$" tailwind-docs.md | head -20

# Find Typography utilities
grep -nE "^### .* - Typography - Tailwind CSS$" tailwind-docs.md | head -20
```

### Find Installation Guides
```bash
# Find installation with Vite
grep -n "Installing Tailwind CSS with Vite" tailwind-docs.md

# Find installation with PostCSS
grep -n "Installing Tailwind CSS with PostCSS\|Using PostCSS" tailwind-docs.md

# Find Tailwind CLI installation
grep -n "Tailwind CLI\|tailwindcss.*cli" tailwind-docs.md | head -10
```

### Find Utility Classes
```bash
# Find specific utility (e.g., flex)
grep -nE "^### display - Layout - Tailwind CSS$" tailwind-docs.md

# Find color utilities
grep -nE "^### color - Typography - Tailwind CSS$" tailwind-docs.md

# Find spacing utilities
grep -n "padding\|margin\|gap" tailwind-docs.md | head -20
```

---

## Documentation Organization

The documentation is organized into **main sections**:

1. **Getting Started** - Installation, Editor setup, Compatibility, Upgrade guide
2. **Core Concepts** - Utility classes, States, Responsive design, Dark mode, Theme variables, Colors, Custom styles, Class detection, Functions and directives
3. **Base Styles** - Preflight (CSS reset)
4. **Utilities** - Organized by category:
   - **Layout** - Display, Position, Overflow, Visibility, Z-index, Aspect ratio, Object fit, etc.
   - **Flexbox & Grid** - Flex utilities, Grid utilities, Alignment, Justification, Gap
   - **Spacing** - Padding, Margin, Space between
   - **Sizing** - Width, Height, Min/Max width, Min/Max height
   - **Typography** - Font, Text, Lists, Line height, Letter spacing, etc.

---

## Section 1: Getting Started

**Purpose**: Installation, setup, and compatibility information.

### Key Sections

#### Installation Overview
```bash
# Find installation overview
grep -n "^# Get started with Tailwind CSS$" tailwind-docs.md

# Find installation methods
grep -nE "^## (Installation|Using Vite|Using PostCSS|Tailwind CLI|Framework Guides|Play CDN)$" tailwind-docs.md
```

#### Installing with Vite
```bash
# Find Vite installation guide
grep -n "Installing Tailwind CSS with Vite\|Installing Tailwind CSS as a Vite plugin" tailwind-docs.md

# Find Vite plugin configuration
grep -n "@tailwindcss/vite\|vite.*plugin" tailwind-docs.md | head -20

# Find Vite setup steps
grep -nE "^#### (Create your project|Install Tailwind CSS|Configure|Import|Start)" tailwind-docs.md | head -20
```

#### Installing with PostCSS
```bash
# Find PostCSS installation
grep -n "Installing Tailwind CSS with PostCSS\|Using PostCSS" tailwind-docs.md

# Find PostCSS configuration
grep -n "postcss.config\|PostCSS.*config" tailwind-docs.md | head -20
```

#### Tailwind CLI
```bash
# Find CLI installation
grep -n "Tailwind CLI\|tailwindcss.*cli" tailwind-docs.md | head -20

# Find CLI commands
grep -n "tailwindcss.*--input\|tailwindcss.*--output" tailwind-docs.md | head -20
```

#### Editor Setup
```bash
# Find editor setup guide
grep -n "^### Editor setup - Getting started - Tailwind CSS$" tailwind-docs.md

# Find VS Code IntelliSense
grep -n "IntelliSense\|VS Code\|VSCode" tailwind-docs.md | head -20

# Find Prettier plugin
grep -n "Prettier\|prettier-plugin-tailwindcss" tailwind-docs.md | head -20
```

#### Compatibility
```bash
# Find compatibility guide
grep -n "^### Compatibility - Getting started - Tailwind CSS$" tailwind-docs.md

# Find browser support
grep -n "Browser support\|browser.*support" tailwind-docs.md | head -20

# Find Sass/Less/Stylus compatibility
grep -n "Sass\|Less\|Stylus\|CSS modules" tailwind-docs.md | head -20
```

#### Upgrade Guide
```bash
# Find upgrade guide
grep -n "^### Upgrade guide - Getting started - Tailwind CSS$" tailwind-docs.md

# Find upgrade tool
grep -n "upgrade tool\|upgrading manually" tailwind-docs.md | head -20

# Find changes from v3
grep -n "Changes from v3\|v3.*changes" tailwind-docs.md | head -20
```

---

## Section 2: Core Concepts

**Purpose**: Fundamental concepts and patterns for using Tailwind CSS.

### Key Sections

#### Styling with Utility Classes
```bash
# Find utility classes guide
grep -n "^### Styling with utility classes - Core concepts - Tailwind CSS$" tailwind-docs.md

# Find why not inline styles
grep -n "Why not just use inline styles\|inline.*styles" tailwind-docs.md | head -20
```

#### Hover, Focus, and Other States
```bash
# Find states guide
grep -n "^### Hover, focus, and other states - Core concepts - Tailwind CSS$" tailwind-docs.md

# Find state variants
grep -n "hover:\|focus:\|active:\|disabled:" tailwind-docs.md | head -30
```

#### Responsive Design
```bash
# Find responsive design guide
grep -n "^### Responsive design - Core concepts - Tailwind CSS$" tailwind-docs.md

# Find breakpoint variants
grep -n "sm:\|md:\|lg:\|xl:\|2xl:" tailwind-docs.md | head -30

# Find breakpoint configuration
grep -n "breakpoints\|screens\|responsive.*breakpoint" tailwind-docs.md | head -20
```

#### Dark Mode
```bash
# Find dark mode guide
grep -n "^### Dark mode - Core concepts - Tailwind CSS$" tailwind-docs.md

# Find dark mode variants
grep -n "dark:\|dark.*mode" tailwind-docs.md | head -30

# Find dark mode configuration
grep -n "darkMode\|data.*theme.*dark" tailwind-docs.md | head -20
```

#### Theme Variables
```bash
# Find theme variables guide
grep -n "^### Theme variables - Core concepts - Tailwind CSS$" tailwind-docs.md

# Find theme configuration
grep -n "theme:\|theme.*variables\|design.*tokens" tailwind-docs.md | head -30
```

#### Colors
```bash
# Find colors guide
grep -n "^### Colors - Core concepts - Tailwind CSS$" tailwind-docs.md

# Find color utilities
grep -nE "^### color - Typography - Tailwind CSS$" tailwind-docs.md

# Find background colors
grep -n "bg-\|background.*color" tailwind-docs.md | head -30
```

#### Adding Custom Styles
```bash
# Find custom styles guide
grep -n "^### Adding custom styles - Core concepts - Tailwind CSS$" tailwind-docs.md

# Find @apply directive
grep -n "@apply\|@layer" tailwind-docs.md | head -30
```

#### Detecting Classes in Source Files
```bash
# Find class detection guide
grep -n "^### Detecting classes in source files - Core concepts - Tailwind CSS$" tailwind-docs.md

# Find content configuration
grep -n "content:\|content.*files\|scanning.*files" tailwind-docs.md | head -30
```

#### Functions and Directives
```bash
# Find functions and directives guide
grep -n "^### Functions and directives - Core concepts - Tailwind CSS$" tailwind-docs.md

# Find @tailwind directive
grep -n "@tailwind\|@import.*tailwindcss" tailwind-docs.md | head -30

# Find theme() function
grep -n "theme(\|theme.*function" tailwind-docs.md | head -20
```

---

## Section 3: Layout Utilities

**Purpose**: Utilities for controlling layout, display, and positioning.

### Key Sections

#### aspect-ratio
```bash
# Find aspect-ratio utility
grep -n "^### aspect-ratio - Layout - Tailwind CSS$" tailwind-docs.md

# Find aspect ratio examples
grep -n "aspect-\|aspect.*ratio" tailwind-docs.md | head -20
```

#### columns
```bash
# Find columns utility
grep -n "^### columns - Layout - Tailwind CSS$" tailwind-docs.md

# Find column utilities
grep -n "columns-\|column.*count" tailwind-docs.md | head -20
```

#### display
```bash
# Find display utility
grep -n "^### display - Layout - Tailwind CSS$" tailwind-docs.md

# Find display classes
grep -n "block\|inline\|flex\|grid\|hidden" tailwind-docs.md | head -30
```

#### position
```bash
# Find position utility
grep -n "^### position - Layout - Tailwind CSS$" tailwind-docs.md

# Find position classes
grep -n "static\|relative\|absolute\|fixed\|sticky" tailwind-docs.md | head -30
```

#### top / right / bottom / left
```bash
# Find positioning utilities
grep -n "^### top / right / bottom / left - Layout - Tailwind CSS$" tailwind-docs.md

# Find positioning classes
grep -n "top-\|right-\|bottom-\|left-\|inset-" tailwind-docs.md | head -30
```

#### overflow
```bash
# Find overflow utility
grep -n "^### overflow - Layout - Tailwind CSS$" tailwind-docs.md

# Find overflow classes
grep -n "overflow-\|overflow-x-\|overflow-y-" tailwind-docs.md | head -20
```

#### z-index
```bash
# Find z-index utility
grep -n "^### z-index - Layout - Tailwind CSS$" tailwind-docs.md

# Find z-index classes
grep -n "z-\|z-index" tailwind-docs.md | head -20
```

#### float
```bash
# Find float utility
grep -n "^### float - Layout - Tailwind CSS$" tailwind-docs.md

# Find float classes
grep -n "float-\|float-left\|float-right" tailwind-docs.md | head -20
```

#### clear
```bash
# Find clear utility
grep -n "^### clear - Layout - Tailwind CSS$" tailwind-docs.md

# Find clear classes
grep -n "clear-\|clear-left\|clear-right" tailwind-docs.md | head -20
```

#### object-fit
```bash
# Find object-fit utility
grep -n "^### object-fit - Layout - Tailwind CSS$" tailwind-docs.md

# Find object-fit classes
grep -n "object-\|object-contain\|object-cover" tailwind-docs.md | head -20
```

#### object-position
```bash
# Find object-position utility
grep -n "^### object-position - Layout - Tailwind CSS$" tailwind-docs.md

# Find object-position classes
grep -n "object-\|object-top\|object-center\|object-bottom" tailwind-docs.md | head -20
```

#### visibility
```bash
# Find visibility utility
grep -n "^### visibility - Layout - Tailwind CSS$" tailwind-docs.md

# Find visibility classes
grep -n "visible\|invisible" tailwind-docs.md | head -20
```

#### break-after / break-before / break-inside
```bash
# Find break utilities
grep -nE "^### break-(after|before|inside) - Layout - Tailwind CSS$" tailwind-docs.md

# Find break classes
grep -n "break-\|break-after-\|break-before-" tailwind-docs.md | head -20
```

#### box-decoration-break
```bash
# Find box-decoration-break utility
grep -n "^### box-decoration-break - Layout - Tailwind CSS$" tailwind-docs.md
```

#### box-sizing
```bash
# Find box-sizing utility
grep -n "^### box-sizing - Layout - Tailwind CSS$" tailwind-docs.md

# Find box-sizing classes
grep -n "box-\|box-border\|box-content" tailwind-docs.md | head -20
```

#### isolation
```bash
# Find isolation utility
grep -n "^### isolation - Layout - Tailwind CSS$" tailwind-docs.md

# Find isolation classes
grep -n "isolate\|isolation-auto" tailwind-docs.md | head -20
```

#### overscroll-behavior
```bash
# Find overscroll-behavior utility
grep -n "^### overscroll-behavior - Layout - Tailwind CSS$" tailwind-docs.md

# Find overscroll classes
grep -n "overscroll-\|overscroll-auto\|overscroll-contain" tailwind-docs.md | head -20
```

---

## Section 3: Base Styles

**Purpose**: Base styles and CSS reset (Preflight).

### Key Sections

#### Preflight
```bash
# Find Preflight documentation
grep -n "^### Preflight - Base styles - Tailwind CSS$" tailwind-docs.md

# Find Preflight examples
grep -n -A30 "Preflight\|preflight\|base.*styles" tailwind-docs.md | head -50
```

---

## Section 4: Flexbox & Grid Utilities

**Purpose**: Utilities for Flexbox and CSS Grid layouts.

### Key Sections

#### flex
```bash
# Find flex utility
grep -nE "^### flex - Flexbox" tailwind-docs.md

# Find flex classes
grep -n "flex-\|flex-1\|flex-auto\|flex-none" tailwind-docs.md | head -20
```

#### flex-direction
```bash
# Find flex-direction utility
grep -nE "^### flex-direction - Flexbox" tailwind-docs.md

# Find flex direction classes
grep -n "flex-row\|flex-col\|flex-row-reverse\|flex-col-reverse" tailwind-docs.md | head -20
```

#### flex-wrap
```bash
# Find flex-wrap utility
grep -nE "^### flex-wrap - Flexbox" tailwind-docs.md

# Find flex wrap classes
grep -n "flex-wrap\|flex-nowrap\|flex-wrap-reverse" tailwind-docs.md | head -20
```

#### flex-grow
```bash
# Find flex-grow utility
grep -nE "^### flex-grow - Flexbox" tailwind-docs.md

# Find flex grow classes
grep -n "grow-\|grow\|grow-0" tailwind-docs.md | head -20
```

#### flex-shrink
```bash
# Find flex-shrink utility
grep -nE "^### flex-shrink - Flexbox" tailwind-docs.md

# Find flex shrink classes
grep -n "shrink-\|shrink\|shrink-0" tailwind-docs.md | head -20
```

#### flex-basis
```bash
# Find flex-basis utility
grep -nE "^### flex-basis - Flexbox" tailwind-docs.md

# Find flex basis classes
grep -n "basis-\|basis-auto\|basis-full" tailwind-docs.md | head -20
```

#### order
```bash
# Find order utility
grep -nE "^### order - Flexbox" tailwind-docs.md

# Find order classes
grep -n "order-\|order-first\|order-last" tailwind-docs.md | head -20
```

#### grid-template-columns
```bash
# Find grid-template-columns utility
grep -nE "^### grid-template-columns - Flexbox" tailwind-docs.md

# Find grid column classes
grep -n "grid-cols-\|grid-cols-1\|grid-cols-12" tailwind-docs.md | head -20
```

#### grid-column
```bash
# Find grid-column utility
grep -nE "^### grid-column - Flexbox" tailwind-docs.md

# Find grid column span classes
grep -n "col-\|col-span-\|col-start-\|col-end-" tailwind-docs.md | head -20
```

#### grid-template-rows
```bash
# Find grid-template-rows utility
grep -nE "^### grid-template-rows - Flexbox" tailwind-docs.md

# Find grid row classes
grep -n "grid-rows-\|grid-rows-1\|grid-rows-6" tailwind-docs.md | head -20
```

#### grid-row
```bash
# Find grid-row utility
grep -nE "^### grid-row - Flexbox" tailwind-docs.md

# Find grid row span classes
grep -n "row-\|row-span-\|row-start-\|row-end-" tailwind-docs.md | head -20
```

#### gap
```bash
# Find gap utility
grep -nE "^### gap - Flexbox" tailwind-docs.md

# Find gap classes
grep -n "gap-\|gap-x-\|gap-y-" tailwind-docs.md | head -20
```

#### justify-content
```bash
# Find justify-content utility
grep -nE "^### justify-content - Flexbox" tailwind-docs.md

# Find justify classes
grep -n "justify-\|justify-start\|justify-end\|justify-center\|justify-between\|justify-around\|justify-evenly" tailwind-docs.md | head -20
```

#### justify-items
```bash
# Find justify-items utility
grep -nE "^### justify-items - Flexbox" tailwind-docs.md

# Find justify-items classes
grep -n "justify-items-\|justify-items-start\|justify-items-end\|justify-items-center" tailwind-docs.md | head -20
```

#### justify-self
```bash
# Find justify-self utility
grep -nE "^### justify-self - Flexbox" tailwind-docs.md

# Find justify-self classes
grep -n "justify-self-\|justify-self-start\|justify-self-end\|justify-self-center" tailwind-docs.md | head -20
```

#### align-content
```bash
# Find align-content utility
grep -nE "^### align-content - Flexbox" tailwind-docs.md

# Find align-content classes
grep -n "content-\|content-start\|content-end\|content-center\|content-between\|content-around" tailwind-docs.md | head -20
```

#### align-items
```bash
# Find align-items utility
grep -nE "^### align-items - Flexbox" tailwind-docs.md

# Find align-items classes
grep -n "items-\|items-start\|items-end\|items-center\|items-baseline\|items-stretch" tailwind-docs.md | head -20
```

#### align-self
```bash
# Find align-self utility
grep -nE "^### align-self - Flexbox" tailwind-docs.md

# Find align-self classes
grep -n "self-\|self-start\|self-end\|self-center\|self-baseline\|self-stretch" tailwind-docs.md | head -20
```

#### place-content
```bash
# Find place-content utility
grep -nE "^### place-content - Flexbox" tailwind-docs.md

# Find place-content classes
grep -n "place-content-\|place-content-center\|place-content-between" tailwind-docs.md | head -20
```

#### place-items
```bash
# Find place-items utility
grep -nE "^### place-items - Flexbox" tailwind-docs.md

# Find place-items classes
grep -n "place-items-\|place-items-start\|place-items-center" tailwind-docs.md | head -20
```

#### place-self
```bash
# Find place-self utility
grep -nE "^### place-self - Flexbox" tailwind-docs.md

# Find place-self classes
grep -n "place-self-\|place-self-start\|place-self-center" tailwind-docs.md | head -20
```

#### grid-auto-flow
```bash
# Find grid-auto-flow utility
grep -nE "^### grid-auto-flow - Flexbox" tailwind-docs.md

# Find grid auto flow classes
grep -n "grid-flow-\|grid-flow-row\|grid-flow-col\|grid-flow-dense" tailwind-docs.md | head -20
```

#### grid-auto-columns
```bash
# Find grid-auto-columns utility
grep -nE "^### grid-auto-columns - Flexbox" tailwind-docs.md

# Find grid auto columns classes
grep -n "auto-cols-\|auto-cols-auto\|auto-cols-min" tailwind-docs.md | head -20
```

#### grid-auto-rows
```bash
# Find grid-auto-rows utility
grep -nE "^### grid-auto-rows - Flexbox" tailwind-docs.md

# Find grid auto rows classes
grep -n "auto-rows-\|auto-rows-auto\|auto-rows-min" tailwind-docs.md | head -20
```

---

## Section 5: Spacing Utilities

**Purpose**: Utilities for controlling spacing (padding and margin).

### Key Sections

#### padding
```bash
# Find padding utility
grep -n "^### padding - Spacing - Tailwind CSS$" tailwind-docs.md

# Find padding classes
grep -n "p-\|px-\|py-\|pt-\|pb-\|pl-\|pr-\|ps-\|pe-" tailwind-docs.md | head -30
```

#### margin
```bash
# Find margin utility
grep -n "^### margin - Spacing - Tailwind CSS$" tailwind-docs.md

# Find margin classes
grep -n "m-\|mx-\|my-\|mt-\|mb-\|ml-\|mr-\|ms-\|me-" tailwind-docs.md | head -30

# Find space between utilities
grep -n "space-x-\|space-y-\|space-[xy]-" tailwind-docs.md | head -20
```

---

## Section 6: Sizing Utilities

**Purpose**: Utilities for controlling element dimensions.

### Key Sections

#### width
```bash
# Find width utility
grep -n "^### width - Sizing - Tailwind CSS$" tailwind-docs.md

# Find width classes
grep -n "w-\|w-full\|w-screen\|w-auto\|w-fit\|w-min\|w-max" tailwind-docs.md | head -30
```

#### min-width
```bash
# Find min-width utility
grep -n "^### min-width - Sizing - Tailwind CSS$" tailwind-docs.md

# Find min-width classes
grep -n "min-w-\|min-w-full\|min-w-min\|min-w-max\|min-w-fit" tailwind-docs.md | head -20
```

#### max-width
```bash
# Find max-width utility
grep -n "^### max-width - Sizing - Tailwind CSS$" tailwind-docs.md

# Find max-width classes
grep -n "max-w-\|max-w-full\|max-w-screen\|max-w-xs\|max-w-sm\|max-w-md\|max-w-lg\|max-w-xl\|max-w-2xl" tailwind-docs.md | head -30
```

#### height
```bash
# Find height utility
grep -n "^### height - Sizing - Tailwind CSS$" tailwind-docs.md

# Find height classes
grep -n "h-\|h-full\|h-screen\|h-auto\|h-fit\|h-min\|h-max" tailwind-docs.md | head -30
```

#### min-height
```bash
# Find min-height utility
grep -n "^### min-height - Sizing - Tailwind CSS$" tailwind-docs.md

# Find min-height classes
grep -n "min-h-\|min-h-full\|min-h-screen\|min-h-min\|min-h-max\|min-h-fit" tailwind-docs.md | head -20
```

#### max-height
```bash
# Find max-height utility
grep -n "^### max-height - Sizing - Tailwind CSS$" tailwind-docs.md

# Find max-height classes
grep -n "max-h-\|max-h-full\|max-h-screen\|max-h-fit" tailwind-docs.md | head -20
```

---

## Section 7: Typography Utilities

## Section 4: Typography Utilities

**Purpose**: Utilities for controlling typography, fonts, and text styling.

### Key Sections

#### font-family
```bash
# Find font-family utility
grep -n "^### font-family - Typography - Tailwind CSS$" tailwind-docs.md

# Find font family classes
grep -n "font-\|font-sans\|font-serif\|font-mono" tailwind-docs.md | head -20
```

#### font-size
```bash
# Find font-size utility
grep -n "^### font-size - Typography - Tailwind CSS$" tailwind-docs.md

# Find font size classes
grep -n "text-\|text-xs\|text-sm\|text-base\|text-lg\|text-xl" tailwind-docs.md | head -30
```

#### font-weight
```bash
# Find font-weight utility
grep -n "^### font-weight - Typography - Tailwind CSS$" tailwind-docs.md

# Find font weight classes
grep -n "font-\|font-thin\|font-normal\|font-bold\|font-black" tailwind-docs.md | head -20
```

#### font-style
```bash
# Find font-style utility
grep -n "^### font-style - Typography - Tailwind CSS$" tailwind-docs.md

# Find font style classes
grep -n "italic\|not-italic" tailwind-docs.md | head -20
```

#### font-smoothing
```bash
# Find font-smoothing utility
grep -n "^### font-smoothing - Typography - Tailwind CSS$" tailwind-docs.md

# Find font smoothing classes
grep -n "antialiased\|subpixel-antialiased" tailwind-docs.md | head -20
```

#### font-stretch
```bash
# Find font-stretch utility
grep -n "^### font-stretch - Typography - Tailwind CSS$" tailwind-docs.md
```

#### font-variant-numeric
```bash
# Find font-variant-numeric utility
grep -n "^### font-variant-numeric - Typography - Tailwind CSS$" tailwind-docs.md
```

#### letter-spacing
```bash
# Find letter-spacing utility
grep -n "^### letter-spacing - Typography - Tailwind CSS$" tailwind-docs.md

# Find letter spacing classes
grep -n "tracking-\|tracking-tight\|tracking-wide" tailwind-docs.md | head -20
```

#### line-height
```bash
# Find line-height utility
grep -n "^### line-height - Typography - Tailwind CSS$" tailwind-docs.md

# Find line height classes
grep -n "leading-\|leading-none\|leading-tight\|leading-normal" tailwind-docs.md | head -20
```

#### line-clamp
```bash
# Find line-clamp utility
grep -n "^### line-clamp - Typography - Tailwind CSS$" tailwind-docs.md

# Find line clamp classes
grep -n "line-clamp-\|line-clamp-1\|line-clamp-2" tailwind-docs.md | head -20
```

#### text-align
```bash
# Find text-align utility
grep -n "^### text-align - Typography - Tailwind CSS$" tailwind-docs.md

# Find text align classes
grep -n "text-\|text-left\|text-center\|text-right\|text-justify" tailwind-docs.md | head -20
```

#### color
```bash
# Find color utility
grep -n "^### color - Typography - Tailwind CSS$" tailwind-docs.md

# Find text color classes
grep -n "text-\|text-red-\|text-blue-\|text-gray-" tailwind-docs.md | head -30
```

#### list-style-image
```bash
# Find list-style-image utility
grep -n "^### list-style-image - Typography - Tailwind CSS$" tailwind-docs.md
```

#### list-style-position
```bash
# Find list-style-position utility
grep -n "^### list-style-position - Typography - Tailwind CSS$" tailwind-docs.md

# Find list position classes
grep -n "list-\|list-inside\|list-outside" tailwind-docs.md | head -20
```

#### list-style-type
```bash
# Find list-style-type utility
grep -n "^### list-style-type - Typography - Tailwind CSS$" tailwind-docs.md

# Find list style classes
grep -n "list-\|list-disc\|list-decimal\|list-none" tailwind-docs.md | head -20
```

---

## Common Patterns

### Multi-panel Flex Dock Layout
```bash
# Core flexbox guidance (width negotiation, min-w-0)
grep -n "^### flex - Flexbox" tailwind-docs.md
grep -n "^### min-width - Sizing - Tailwind CSS$" tailwind-docs.md

# Overflow + scroll clipping when mixing side panels
grep -n "^### overflow - Layout - Tailwind CSS$" tailwind-docs.md

# Example utility combo for side-by-side docks:
# flex, basis-[var(--panel-width)], min-w-0, max-w-[30rem], overflow-hidden
```

### Finding Utility Classes
```bash
# Find all utility class documentation
grep -nE "^### [a-z-]+ - (Layout|Flexbox|Spacing|Sizing|Typography|Base styles) - Tailwind CSS$" tailwind-docs.md

# Find specific utility category
grep -nE "^### .* - Layout - Tailwind CSS$" tailwind-docs.md

# Find Flexbox & Grid utilities (note: category uses HTML entity &amp;)
grep -nE "^### .* - Flexbox" tailwind-docs.md

# Find utility by name pattern
grep -nE "^### (flex|grid|text|bg|border|padding|margin|width|height)" tailwind-docs.md | head -20
```

### Finding Examples
```bash
# Find code examples (markdown code fences)
grep -n "^```" tailwind-docs.md | head -100

# Find example sections
grep -nE "^## Examples$" tailwind-docs.md | head -50

# Find quick reference sections
grep -n "Quick reference\|Class.*Styles" tailwind-docs.md | head -30
```

### Finding Configuration
```bash
# Find configuration examples
grep -n "tailwind.config\|@config\|theme:" tailwind-docs.md | head -30

# Find content configuration
grep -n "content:\|content.*files" tailwind-docs.md | head -20

# Find plugin configuration
grep -n "plugins:\|@plugin" tailwind-docs.md | head -20
```

### Finding Source URLs
```bash
# Find source URL patterns
grep -n "\*\*Source:\*\*" tailwind-docs.md | head -50

# Find specific source URLs
grep -n "tailwindcss.com/docs" tailwind-docs.md | head -50
```

---

## Advanced Search Patterns

### Find All Layout Utilities
```bash
# Find all layout utilities
grep -nE "^### .* - Layout - Tailwind CSS$" tailwind-docs.md

# Extract unique utility names
grep -oE "^### [a-z-]+ - Layout" tailwind-docs.md | sort -u
```

### Find All Flexbox & Grid Utilities
```bash
# Find all flexbox & grid utilities (note: category uses HTML entity &amp;)
grep -nE "^### .* - Flexbox" tailwind-docs.md

# Extract unique utility names
grep -oE "^### [a-z-]+ - Flexbox" tailwind-docs.md | sort -u
```

### Find All Spacing Utilities
```bash
# Find all spacing utilities
grep -nE "^### .* - Spacing - Tailwind CSS$" tailwind-docs.md

# Extract unique utility names
grep -oE "^### [a-z-]+ - Spacing" tailwind-docs.md | sort -u
```

### Find All Sizing Utilities
```bash
# Find all sizing utilities
grep -nE "^### .* - Sizing - Tailwind CSS$" tailwind-docs.md

# Extract unique utility names
grep -oE "^### [a-z-]+ - Sizing" tailwind-docs.md | sort -u
```

### Find All Typography Utilities
```bash
# Find all typography utilities
grep -nE "^### .* - Typography - Tailwind CSS$" tailwind-docs.md

# Extract unique utility names
grep -oE "^### [a-z-]+ - Typography" tailwind-docs.md | sort -u
```

### Find Responsive Variants
```bash
# Find responsive breakpoint documentation
grep -n "sm:\|md:\|lg:\|xl:\|2xl:\|breakpoint" tailwind-docs.md | head -50

# Find responsive examples
grep -n -A10 "responsive\|breakpoint\|screen.*size" tailwind-docs.md | head -100
```

### Find State Variants
```bash
# Find state variant documentation
grep -n "hover:\|focus:\|active:\|disabled:\|group:\|peer:" tailwind-docs.md | head -50

# Find state examples
grep -n -A10 "state.*variant\|pseudo.*class" tailwind-docs.md | head -100
```

### Find Color Utilities
```bash
# Find color documentation
grep -n "color\|bg-\|text-\|border-" tailwind-docs.md | head -50

# Find color palette
grep -n "red-\|blue-\|green-\|yellow-\|purple-\|pink-\|gray-" tailwind-docs.md | head -100
```

### Find Spacing Utilities
```bash
# Find spacing documentation
grep -n "padding\|margin\|gap\|space-" tailwind-docs.md | head -50

# Find spacing scale
grep -n "p-\|m-\|gap-\|space-" tailwind-docs.md | head -50
```

---

## Module-Specific Search Strategies

### For Layout and Positioning
```bash
# Find display utilities
grep -n "display\|block\|inline\|flex\|grid\|hidden" tailwind-docs.md | head -30

# Find positioning
grep -n "absolute\|relative\|fixed\|sticky\|top-\|left-" tailwind-docs.md | head -30

# Find overflow and visibility
grep -n "overflow-\|visible\|invisible\|z-" tailwind-docs.md | head -30
```

### For Flexbox & Grid
```bash
# Find flexbox utilities
grep -n "flex\|flex-col\|flex-row\|flex-wrap\|grow\|shrink\|basis" tailwind-docs.md | head -30

# Find grid utilities
grep -n "grid\|grid-cols-\|grid-rows-\|grid-template\|col-\|row-" tailwind-docs.md | head -30

# Find alignment utilities
grep -n "justify-\|items-\|self-\|content-\|place-" tailwind-docs.md | head -30
```

### For Spacing
```bash
# Find padding utilities
grep -n "p-\|px-\|py-\|pt-\|pb-\|pl-\|pr-" tailwind-docs.md | head -30

# Find margin utilities
grep -n "m-\|mx-\|my-\|mt-\|mb-\|ml-\|mr-" tailwind-docs.md | head -30

# Find space between utilities
grep -n "space-x-\|space-y-" tailwind-docs.md | head -20
```

### For Sizing
```bash
# Find width utilities
grep -n "w-\|w-full\|w-screen\|w-auto\|w-fit" tailwind-docs.md | head -30

# Find height utilities
grep -n "h-\|h-full\|h-screen\|h-auto\|h-fit" tailwind-docs.md | head -30

# Find min/max utilities
grep -n "min-w-\|max-w-\|min-h-\|max-h-" tailwind-docs.md | head -30
```

### For Typography
```bash
# Find font utilities
grep -n "font-\|text-\|leading-\|tracking-" tailwind-docs.md | head -30

# Find text styling
grep -n "text-\|text-center\|text-justify\|text-ellipsis" tailwind-docs.md | head -30
```

### For Colors and Backgrounds
```bash
# Find background colors
grep -n "bg-\|background" tailwind-docs.md | head -30

# Find text colors
grep -n "text-\|color" tailwind-docs.md | head -30

# Find border colors
grep -n "border-\|border-color" tailwind-docs.md | head -30
```

### For Spacing
```bash
# Find padding
grep -n "p-\|px-\|py-\|pt-\|pb-\|pl-\|pr-" tailwind-docs.md | head -30

# Find margin
grep -n "m-\|mx-\|my-\|mt-\|mb-\|ml-\|mr-" tailwind-docs.md | head -30

# Find gap
grep -n "gap-\|gap-x-\|gap-y-" tailwind-docs.md | head -20
```

### For Responsive Design
```bash
# Find responsive utilities
grep -n "sm:\|md:\|lg:\|xl:\|2xl:" tailwind-docs.md | head -50

# Find breakpoint configuration
grep -n -A20 "breakpoints\|screens\|responsive" tailwind-docs.md | head -100
```

### For Dark Mode
```bash
# Find dark mode utilities
grep -n "dark:\|dark.*mode" tailwind-docs.md | head -50

# Find dark mode configuration
grep -n -A20 "darkMode\|dark.*variant" tailwind-docs.md | head -100
```

---

## Efficient Search Workflow

### Step 1: Identify Category
```bash
# If you know the utility category (Layout, Flexbox, Spacing, Sizing, Typography, etc.)
grep -nE "^### .* - (Layout|Flexbox|Spacing|Sizing|Typography|Base styles) - Tailwind CSS$" tailwind-docs.md

# Or search for main sections
grep -nE "^### .* - (Getting started|Core concepts)" tailwind-docs.md
```

### Step 2: Find Specific Utility
```bash
# Within that category, find the specific utility
# Example: Find flex utility
grep -n "^### display - Layout - Tailwind CSS$" tailwind-docs.md

# Or find by pattern
grep -nE "^### (flex|grid|text|bg)" tailwind-docs.md | head -20
```

### Step 3: Read Documentation
```bash
# Use line numbers from grep to read specific sections
# Example: Read lines 9278-9600 (display utility section)
sed -n '9278,9600p' tailwind-docs.md
```

---

## Key API Surface Areas

### Getting Started
- **Installation**: Vite plugin, PostCSS, CLI, Framework guides
- **Editor Setup**: VS Code IntelliSense, Prettier plugin, JetBrains IDEs
- **Compatibility**: Browser support, Sass/Less/Stylus, CSS modules
- **Upgrade Guide**: Upgrade tool, manual upgrade, v3 to v4 changes

### Core Concepts
- **Utility Classes**: Styling approach, benefits over inline styles
- **States**: Hover, focus, active, disabled, group, peer variants
- **Responsive Design**: Breakpoints (sm, md, lg, xl, 2xl), mobile-first
- **Dark Mode**: Dark variant, data attribute, system theme support
- **Theme Variables**: Design tokens, theme configuration
- **Colors**: Color palette, color utilities, custom colors
- **Custom Styles**: @apply directive, @layer directive
- **Class Detection**: Content configuration, file scanning
- **Functions and Directives**: @tailwind, @import, theme() function

### Layout Utilities
- **Display**: block, inline, flex, grid, hidden
- **Position**: static, relative, absolute, fixed, sticky
- **Positioning**: top-*, right-*, bottom-*, left-*, inset-*
- **Overflow**: overflow-*, overflow-x-*, overflow-y-*
- **Z-index**: z-*, z-10, z-50, z-auto
- **Aspect Ratio**: aspect-*, aspect-square, aspect-video
- **Object Fit**: object-contain, object-cover, object-fill
- **Object Position**: object-top, object-center, object-bottom
- **Visibility**: visible, invisible
- **Float**: float-left, float-right, float-none
- **Clear**: clear-left, clear-right, clear-both
- **Columns**: columns-*, columns-1, columns-12
- **Break**: break-after-*, break-before-*, break-inside-*
- **Box Sizing**: box-border, box-content
- **Isolation**: isolate, isolation-auto
- **Overscroll**: overscroll-auto, overscroll-contain

### Flexbox & Grid Utilities
- **Flex**: flex, flex-1, flex-auto, flex-none
- **Flex Direction**: flex-row, flex-col, flex-row-reverse, flex-col-reverse
- **Flex Wrap**: flex-wrap, flex-nowrap, flex-wrap-reverse
- **Flex Grow**: grow, grow-0, grow-*
- **Flex Shrink**: shrink, shrink-0, shrink-*
- **Flex Basis**: basis-*, basis-auto, basis-full
- **Order**: order-*, order-first, order-last
- **Grid Template Columns**: grid-cols-*, grid-cols-1, grid-cols-12
- **Grid Column**: col-span-*, col-start-*, col-end-*
- **Grid Template Rows**: grid-rows-*, grid-rows-1, grid-rows-6
- **Grid Row**: row-span-*, row-start-*, row-end-*
- **Gap**: gap-*, gap-x-*, gap-y-*
- **Justify Content**: justify-start, justify-end, justify-center, justify-between, justify-around, justify-evenly
- **Justify Items**: justify-items-start, justify-items-end, justify-items-center
- **Justify Self**: justify-self-start, justify-self-end, justify-self-center
- **Align Content**: content-start, content-end, content-center, content-between, content-around
- **Align Items**: items-start, items-end, items-center, items-baseline, items-stretch
- **Align Self**: self-start, self-end, self-center, self-baseline, self-stretch
- **Place Content**: place-content-center, place-content-between, etc.
- **Place Items**: place-items-start, place-items-center, etc.
- **Place Self**: place-self-start, place-self-center, etc.
- **Grid Auto Flow**: grid-flow-row, grid-flow-col, grid-flow-dense
- **Grid Auto Columns**: auto-cols-auto, auto-cols-min, auto-cols-max
- **Grid Auto Rows**: auto-rows-auto, auto-rows-min, auto-rows-max

### Spacing Utilities
- **Padding**: p-*, px-*, py-*, pt-*, pb-*, pl-*, pr-*, ps-*, pe-*
- **Margin**: m-*, mx-*, my-*, mt-*, mb-*, ml-*, mr-*, ms-*, me-*
- **Space Between**: space-x-*, space-y-*

### Sizing Utilities
- **Width**: w-*, w-full, w-screen, w-auto, w-fit, w-min, w-max
- **Min Width**: min-w-*, min-w-full, min-w-min, min-w-max, min-w-fit
- **Max Width**: max-w-*, max-w-full, max-w-screen, max-w-xs, max-w-sm, max-w-md, max-w-lg, max-w-xl, max-w-2xl, etc.
- **Height**: h-*, h-full, h-screen, h-auto, h-fit, h-min, h-max
- **Min Height**: min-h-*, min-h-full, min-h-screen, min-h-min, min-h-max, min-h-fit
- **Max Height**: max-h-*, max-h-full, max-h-screen, max-h-fit

### Typography Utilities
- **Font Family**: font-sans, font-serif, font-mono
- **Font Size**: text-xs, text-sm, text-base, text-lg, text-xl, text-2xl
- **Font Weight**: font-thin, font-normal, font-medium, font-bold, font-black
- **Font Style**: italic, not-italic
- **Letter Spacing**: tracking-tight, tracking-normal, tracking-wide
- **Line Height**: leading-none, leading-tight, leading-normal, leading-relaxed
- **Text Align**: text-left, text-center, text-right, text-justify
- **Text Color**: text-*, text-red-500, text-blue-600, etc.
- **Line Clamp**: line-clamp-1, line-clamp-2, line-clamp-3
- **List Styles**: list-disc, list-decimal, list-none, list-inside, list-outside


### Color Utilities
- **Text Colors**: text-{color}-{shade}
- **Background Colors**: bg-{color}-{shade}
- **Border Colors**: border-{color}-{shade}
- **Color Palette**: red, blue, green, yellow, purple, pink, gray, slate, etc.

### Responsive Variants
- **Breakpoints**: sm: (640px), md: (768px), lg: (1024px), xl: (1280px), 2xl: (1536px)
- **Mobile-First**: Default styles apply to mobile, larger breakpoints override

### State Variants
- **Hover**: hover:*
- **Focus**: focus:*, focus-visible:*
- **Active**: active:*
- **Disabled**: disabled:*
- **Group**: group:*, group-hover:*
- **Peer**: peer:*, peer-hover:*

### Dark Mode
- **Dark Variant**: dark:*
- **Configuration**: darkMode: 'class' or 'media'
- **Data Attribute**: data-theme="dark"

---

## Tips for LLM Navigation

1. **Start with Category**: Identify which utility category (Layout, Typography, etc.) contains what you need
2. **Use Line Numbers**: The grep commands provide line numbers - use them to jump directly to sections
3. **Context Matters**: Use `-A` and `-B` flags to get context around matches
4. **Multiple Matches**: Some content appears multiple times - use `head` to limit results
5. **Utility Naming**: Tailwind uses consistent naming: `{property}-{value}` (e.g., `text-center`, `bg-red-500`)
6. **Source URLs**: Each section has a source URL - use these to verify against online docs if needed
7. **Quick Reference**: Many utility pages have "Quick reference" tables showing all available classes

---

## Example Use Cases

### Use Case 1: Find flexbox utilities
```bash
# Step 1: Find display utility (includes flex)
grep -n "^### display - Layout - Tailwind CSS$" tailwind-docs.md

# Step 2: Find flex examples
grep -n -A30 "flex\|flex-col\|flex-row" tailwind-docs.md | head -100

# Step 3: Find flex properties
grep -n "items-\|justify-\|flex-wrap\|flex-nowrap" tailwind-docs.md | head -30
```

### Use Case 2: Find responsive breakpoints
```bash
# Step 1: Find responsive design guide
grep -n "^### Responsive design - Core concepts - Tailwind CSS$" tailwind-docs.md

# Step 2: Find breakpoint examples
grep -n -A30 "sm:\|md:\|lg:\|xl:" tailwind-docs.md | head -100

# Step 3: Find breakpoint configuration
grep -n -A20 "breakpoints\|screens" tailwind-docs.md | head -50
```

### Use Case 3: Find color utilities
```bash
# Step 1: Find color guide
grep -n "^### Colors - Core concepts - Tailwind CSS$" tailwind-docs.md

# Step 2: Find color utility
grep -n "^### color - Typography - Tailwind CSS$" tailwind-docs.md

# Step 3: Find color examples
grep -n -A30 "text-\|bg-\|border-" tailwind-docs.md | head -100
```

### Use Case 4: Find dark mode setup
```bash
# Step 1: Find dark mode guide
grep -n "^### Dark mode - Core concepts - Tailwind CSS$" tailwind-docs.md

# Step 2: Find dark mode examples
grep -n -A30 "dark:\|dark.*mode" tailwind-docs.md | head -100

# Step 3: Find dark mode configuration
grep -n -A20 "darkMode\|data-theme" tailwind-docs.md | head -50
```

### Use Case 5: Find installation guide
```bash
# Step 1: Find installation overview
grep -n "^# Get started with Tailwind CSS$" tailwind-docs.md

# Step 2: Find Vite installation
grep -n "Installing Tailwind CSS with Vite" tailwind-docs.md

# Step 3: Find installation steps
grep -nE "^#### (Create|Install|Configure|Import|Start)" tailwind-docs.md | head -30
```

### Use Case 6: Find spacing utilities
```bash
# Step 1: Find padding/margin documentation
grep -n "padding\|margin\|spacing" tailwind-docs.md | head -30

# Step 2: Find spacing examples
grep -n -A20 "p-\|m-\|px-\|mx-" tailwind-docs.md | head -100

# Step 3: Find spacing scale
grep -n "p-0\|p-1\|p-2\|p-4\|p-8" tailwind-docs.md | head -20
```

### Use Case 7: Find @apply directive usage
```bash
# Step 1: Find custom styles guide
grep -n "^### Adding custom styles - Core concepts - Tailwind CSS$" tailwind-docs.md

# Step 2: Find @apply examples
grep -n -A30 "@apply" tailwind-docs.md | head -100

# Step 3: Find @layer usage
grep -n -A20 "@layer" tailwind-docs.md | head -50
```

### Use Case 8: Find theme configuration
```bash
# Step 1: Find theme variables guide
grep -n "^### Theme variables - Core concepts - Tailwind CSS$" tailwind-docs.md

# Step 2: Find theme configuration examples
grep -n -A30 "theme:\|tailwind.config" tailwind-docs.md | head -100

# Step 3: Find design tokens
grep -n "design.*tokens\|theme.*variables" tailwind-docs.md | head -30
```

### Use Case 9: Find state variants
```bash
# Step 1: Find states guide
grep -n "^### Hover, focus, and other states - Core concepts - Tailwind CSS$" tailwind-docs.md

# Step 2: Find state examples
grep -n -A30 "hover:\|focus:\|active:\|disabled:" tailwind-docs.md | head -100

# Step 3: Find group/peer variants
grep -n -A20 "group:\|peer:" tailwind-docs.md | head -50
```

### Use Case 10: Find upgrade information
```bash
# Step 1: Find upgrade guide
grep -n "^### Upgrade guide - Getting started - Tailwind CSS$" tailwind-docs.md

# Step 2: Find upgrade tool
grep -n "upgrade tool\|upgrading manually" tailwind-docs.md | head -20

# Step 3: Find breaking changes
grep -n "Changes from v3\|breaking.*change" tailwind-docs.md | head -30
```

---

## Additional Topics

### Configuration
```bash
# Find configuration documentation
grep -n "tailwind.config\|configuration\|config.*file" tailwind-docs.md | head -30

# Find content configuration
grep -n -A20 "content:\|content.*files" tailwind-docs.md | head -50

# Find theme configuration
grep -n -A30 "theme:\|theme.*extend" tailwind-docs.md | head -100
```

### Plugins
```bash
# Find plugin documentation
grep -n "plugin\|@plugin\|plugins:" tailwind-docs.md | head -30

# Find plugin examples
grep -n -A30 "addUtilities\|addComponents" tailwind-docs.md | head -100
```

### Customization
```bash
# Find customization guides
grep -n "custom\|customize\|extend" tailwind-docs.md | head -30

# Find custom utilities
grep -n -A30 "addUtilities\|@layer utilities" tailwind-docs.md | head -100

# Find custom components
grep -n -A30 "addComponents\|@layer components" tailwind-docs.md | head -100
```

### Performance
```bash
# Find performance documentation
grep -n "performance\|purge\|content.*scanning" tailwind-docs.md | head -30

# Find JIT mode
grep -n "JIT\|just.*time\|on.*demand" tailwind-docs.md | head -20
```

### Arbitrary Values
```bash
# Find arbitrary values documentation
grep -n "arbitrary\|\[.*\]\|arbitrary.*value" tailwind-docs.md | head -30

# Find arbitrary value examples
grep -n -A20 "w-\[.*\]\|bg-\[.*\]\|text-\[.*\]" tailwind-docs.md | head -100
```

---

## Notes

- **File Size**: The documentation file is 20,647 lines - always use `head` or `tail` to limit results
- **Duplicates**: Some content appears multiple times (installation guides for different tools) - this is normal
- **Format**: Documentation follows Tailwind's official format with markdown rendering
- **Source URLs**: Each section includes source URL pointing to original online documentation (tailwindcss.com/docs)
- **Line Numbers**: Line numbers are approximate - content may shift if documentation is regenerated
- **Utility Naming**:
  - Format: `{property}-{value}` (e.g., `text-center`, `bg-red-500`)
  - Responsive: `{breakpoint}:{utility}` (e.g., `md:text-center`)
  - State: `{state}:{utility}` (e.g., `hover:bg-blue-500`)
  - Dark mode: `dark:{utility}` (e.g., `dark:bg-gray-800`)
- **Quick Reference**: Many utility pages include "Quick reference" tables showing all available classes
- **Version Coverage**: Documentation covers Tailwind CSS v4 with upgrade guides from v3

---

## Maintenance

When regenerating the documentation:

1. Update the "Last Updated" date
2. Verify line numbers still match (they may shift)
3. Update any section-specific content if structure changes
4. Add new utilities or features as they appear
5. Update "Key API Surface Areas" section with new utilities
6. Check for new categories or major feature additions

---

**End of Index**

