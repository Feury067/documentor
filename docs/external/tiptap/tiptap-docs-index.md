# TipTap Docs Index

**Purpose**: This index provides regex patterns and grep commands to efficiently navigate the massive TipTap documentation (`tiptap-docs.md`).

**File Location**: `docs/external/tiptap/tiptap-docs.md` (218,043 lines)

**Last Updated**: Generated from spidered documentation on 2025-11-06

**Note**: Most grep commands use the `-E` flag for extended regular expressions. This enables proper handling of alternation (`|`) and other regex features.

---

## Quick Navigation Commands

### Find Main Documentation Sections
```bash
# Find main feature sections
grep -n "^## Browse by feature$" tiptap-docs.md

# Find Editor section
grep -n "^### Editor$" tiptap-docs.md

# Find Collaboration section
grep -n "^### Collaboration$" tiptap-docs.md

# Find Content AI section
grep -n "^### Content AI$" tiptap-docs.md

# Find Comments section
grep -n "^### Comments$" tiptap-docs.md

# Find Documents section
grep -n "^### Documents$" tiptap-docs.md

# Find Conversion section
grep -n "^### Conversion$" tiptap-docs.md
```

### Find Extension Documentation
```bash
# Find all extension mentions
grep -n "@tiptap/" tiptap-docs.md | head -50

# Find Pro extensions
grep -n "@tiptap-pro/" tiptap-docs.md | head -30

# Find specific extension (e.g., Collaboration)
grep -n "@tiptap/extension-collaboration" tiptap-docs.md

# Find StarterKit mentions
grep -n "StarterKit\|starter-kit" tiptap-docs.md | head -20
```

### Find Installation Instructions
```bash
# Find all installation sections
grep -n "^### Install" tiptap-docs.md

# Find npm install commands
grep -n "npm install" tiptap-docs.md | head -30

# Find setup/configuration guides
grep -n "How to set up\|Install\|Prepare your editor" tiptap-docs.md | head -20
```

---

## Documentation Organization

The documentation is organized into **6 main feature areas**:

1. **Editor** - Core headless editor and extensions
2. **Collaboration** - Real-time collaborative editing
3. **Content AI** - AI-powered features (Generation, Suggestions, Toolkit)
4. **Comments** - Commenting system
5. **Documents** - Document management and versioning
6. **Conversion** - File import/export (DOCX, etc.)

---

## Section 1: Editor

**Purpose**: Core editor functionality, extensions, and configuration.

### Key Sections

#### Main Editor Overview
```bash
# Find editor overview
grep -n "^### Editor$" tiptap-docs.md

# Find "What is Tiptap?" section
grep -n "^## What is Tiptap\?$" tiptap-docs.md

# Find "Why pick Tiptap?" section
grep -n "^## Why pick Tiptap\?$" tiptap-docs.md

# Find getting started
grep -n "^### Get started \| Tiptap Editor Docs$" tiptap-docs.md
```

#### Installation and Setup
```bash
# Find installation instructions
grep -n "^### Install Tiptap Editor" tiptap-docs.md

# Find basic setup examples
grep -n "npm install @tiptap/extension-document" tiptap-docs.md

# Find React setup
grep -n "@tiptap/react" tiptap-docs.md | head -20

# Find useEditor hook examples
grep -n "useEditor" tiptap-docs.md | head -20

# Find Vue setup
grep -nE "@tiptap/vue|@tiptap/vue-2|@tiptap/vue-3" tiptap-docs.md | head -20

# Find Svelte setup
grep -n "@tiptap/svelte\|svelte" tiptap-docs.md | head -20

# Find Angular setup
grep -n "@tiptap/angular\|angular" tiptap-docs.md | head -20

# Find EditorContent component
grep -n "EditorContent\|<EditorContent" tiptap-docs.md | head -20
```

#### Core Extensions
```bash
# Find Document extension
grep -n "@tiptap/extension-document" tiptap-docs.md

# Find Paragraph extension
grep -n "@tiptap/extension-paragraph" tiptap-docs.md

# Find Text extension
grep -n "@tiptap/extension-text" tiptap-docs.md

# Find StarterKit
grep -nE "@tiptap/starter-kit|StarterKit" tiptap-docs.md | head -20

# Find Heading extension
grep -n "@tiptap/extension-heading" tiptap-docs.md

# Find TextStyleKit
grep -n "TextStyleKit\|@tiptap/extension-text-style" tiptap-docs.md | head -10
```

#### Formatting Extensions
```bash
# Find Bold extension
grep -nE "@tiptap/extension-bold|extension-bold" tiptap-docs.md | head -10

# Find Italic extension
grep -nE "@tiptap/extension-italic|extension-italic" tiptap-docs.md | head -10

# Find Strike extension
grep -nE "@tiptap/extension-strike|extension-strike" tiptap-docs.md | head -10

# Find Underline extension
grep -nE "@tiptap/extension-underline|extension-underline" tiptap-docs.md | head -10

# Find Highlight extension
grep -nE "@tiptap/extension-highlight|extension-highlight" tiptap-docs.md | head -10

# Find Link extension
grep -nE "@tiptap/extension-link|extension-link" tiptap-docs.md | head -10

# Find Code extension
grep -nE "@tiptap/extension-code|extension-code" tiptap-docs.md | head -10

# Find CodeBlock extension
grep -nE "@tiptap/extension-code-block|extension-code-block" tiptap-docs.md | head -10
```

#### Content Extensions
```bash
# Find Image extension
grep -nE "@tiptap/extension-image|extension-image" tiptap-docs.md | head -10

# Find Table extensions
grep -nE "@tiptap/extension-table|extension-table" tiptap-docs.md | head -10

# Find List extensions
grep -nE "@tiptap/extension-list|extension-list" tiptap-docs.md | head -10

# Find Task extensions
grep -nE "@tiptap/extension-task|extension-task" tiptap-docs.md | head -10

# Find Blockquote extension
grep -nE "@tiptap/extension-blockquote|extension-blockquote" tiptap-docs.md | head -10

# Find HorizontalRule extension
grep -nE "@tiptap/extension-horizontal-rule|extension-horizontal-rule" tiptap-docs.md | head -10

# Find HardBreak extension
grep -nE "@tiptap/extension-hard-break|extension-hard-break" tiptap-docs.md | head -10

# Find Emoji extension
grep -nE "@tiptap/extension-emoji|extension-emoji" tiptap-docs.md | head -10
```

#### UI Extensions
```bash
# Find BubbleMenu extension
grep -nE "@tiptap/extension-bubble-menu|extension-bubble-menu" tiptap-docs.md | head -10

# Find FloatingMenu extension
grep -nE "@tiptap/extension-floating-menu|extension-floating-menu" tiptap-docs.md | head -10

# Find DragHandle extension
grep -nE "@tiptap/extension-drag-handle|extension-drag-handle" tiptap-docs.md | head -10

# Find Mention extension
grep -nE "@tiptap/extension-mention|extension-mention" tiptap-docs.md | head -10

# Find Placeholder extension
grep -nE "@tiptap/extension-placeholder|extension-placeholder" tiptap-docs.md | head -10

# Find Focus extension
grep -nE "@tiptap/extension-focus|extension-focus" tiptap-docs.md | head -10
```

#### Utility Extensions
```bash
# Find History extension (undo/redo)
grep -nE "@tiptap/extension-history|extension-history" tiptap-docs.md | head -10

# Find CharacterCount extension
grep -nE "@tiptap/extension-character-count|extension-character-count" tiptap-docs.md | head -10

# Find Dropcursor extension
grep -nE "@tiptap/extension-dropcursor|extension-dropcursor" tiptap-docs.md | head -10

# Find Gapcursor extension
grep -nE "@tiptap/extension-gapcursor|extension-gapcursor" tiptap-docs.md | head -10

# Find CollaborationCursor extension
grep -nE "@tiptap/extension-collaboration-cursor|extension-collaboration-caret" tiptap-docs.md | head -10
```

#### Examples
```bash
# Find examples section
grep -n "^## Examples$" tiptap-docs.md

# Find default text editor example
grep -n "^### Default text editor" tiptap-docs.md

# Find markdown shortcuts example
grep -n "^### Markdown shortcuts$" tiptap-docs.md

# Find tables example
grep -n "^### Tables$" tiptap-docs.md

# Find images example
grep -n "^### Images$" tiptap-docs.md

# Find formatting example
grep -n "^### Formatting$" tiptap-docs.md

# Find collaborative editing example
grep -n "^### Collaborative editing$" tiptap-docs.md

# Find tasks example
grep -n "^### Tasks$" tiptap-docs.md

# Find long texts example
grep -n "^### Long texts$" tiptap-docs.md

# Find menus example
grep -n "^### Menus$" tiptap-docs.md

# Find drawing example
grep -n "^### Drawing$" tiptap-docs.md

# Find mentions example
grep -n "^### Mentions$" tiptap-docs.md

# Find forced content structure example
grep -n "^### Forced content structure$" tiptap-docs.md

# Find clever editor example
grep -n "^### Clever Editor$" tiptap-docs.md

# Find interactive React & Vue views example
grep -n "^### Interactive React & Vue views$" tiptap-docs.md

# Find syntax highlighting example
grep -n "^### Syntax highlighting$" tiptap-docs.md
```

#### Experiment Examples
```bash
# Find experiments section
grep -n "^## Experiments" tiptap-docs.md

# Find collaborative fields experiment
grep -n "^### Collaborative fields$" tiptap-docs.md

# Find figure experiment
grep -n "^### Figure$" tiptap-docs.md

# Find generic figure experiment
grep -n "^### Generic Figure$" tiptap-docs.md

# Find iframe experiment
grep -n "^### iFrame$" tiptap-docs.md

# Find linting experiment
grep -n "^### Linting$" tiptap-docs.md

# Find slash commands experiment
grep -n "^### Slash commands$" tiptap-docs.md
```

#### Guides
```bash
# Find guides section
grep -n "^## Guides$" tiptap-docs.md

# Find setup guide
grep -n "How to set up and configure the Tiptap editor" tiptap-docs.md

# Find Pro Extensions integration guide
grep -n "How to integrate Pro Extensions" tiptap-docs.md

# Find collaboration setup guide
grep -n "How to make your Editor collaborative" tiptap-docs.md

# Find styling guide
grep -n "How to apply styling to the headless Tiptap Editor" tiptap-docs.md
```

#### Migration Guides
```bash
# Find upgrade guide
grep -n "^## Upgrade guide$" tiptap-docs.md

# Find v1 to v2 migration
grep -n "How to upgrade from Tiptap v1 to v2" tiptap-docs.md

# Find migration from other editors
grep -n "Migrate from" tiptap-docs.md | head -10

# Find TinyMCE migration
grep -n "^### Migrate from TinyMCE$" tiptap-docs.md

# Find CKEditor 4 migration
grep -n "^### Migrate from CKEditor 4$" tiptap-docs.md

# Find CKEditor 5 migration
grep -n "^### Migrate from CKEditor 5$" tiptap-docs.md

# Find Quill migration
grep -n "^### Migrate from Quill$" tiptap-docs.md

# Find Slate migration
grep -n "^### Migrate from Slate$" tiptap-docs.md

# Find Lexical migration
grep -n "^### Migrate from Lexical$" tiptap-docs.md

# Find Editor.js migration
grep -n "^### Migrate from Editor.js$" tiptap-docs.md

# Find Draft.js migration
grep -n "^### Migrate from Draft.js$" tiptap-docs.md

# Find v2 to v3 upgrade
grep -n "^### Upgrade v2 to v3" tiptap-docs.md
```

#### Advanced Editor Features
```bash
# Find NodeViews documentation
grep -n "NodeView\|nodeview\|Node View" tiptap-docs.md | head -20

# Find MarkViews documentation
grep -n "MarkView\|markview\|Mark View" tiptap-docs.md | head -20

# Find Server-Side Rendering
grep -n "Server-Side Rendering\|SSR\|server.*render" tiptap-docs.md | head -20

# Find Static Renderer
grep -n "Static Renderer\|static.*render" tiptap-docs.md | head -20

# Find custom extensions guide
grep -n "Create your own extensions\|custom.*extension" tiptap-docs.md | head -20
```

#### Commands API
```bash
# Find chain() method
grep -nE "\.chain()|editor\.chain" tiptap-docs.md | head -20

# Find focus() command
grep -nE "\.focus()|focus()" tiptap-docs.md | head -20

# Find blur() command
grep -nE "\.blur()|blur()" tiptap-docs.md | head -20

# Find insertContent() command
grep -n "insertContent\|\.insertContent" tiptap-docs.md | head -20

# Find deleteContent() command
grep -n "deleteContent\|\.deleteContent" tiptap-docs.md | head -20

# Find clearContent() command
grep -n "clearContent\|\.clearContent" tiptap-docs.md | head -20

# Find can() method (check if command can run)
grep -n "\.can()\|editor\.can" tiptap-docs.md | head -20

# Find run() method
grep -n "\.run()\|\.run()" tiptap-docs.md | head -20
```

#### Events and Hooks
```bash
# Find onUpdate event
grep -nE "onUpdate|on.*update" tiptap-docs.md | head -20

# Find onCreate event
grep -nE "onCreate|on.*create" tiptap-docs.md | head -20

# Find onDestroy event
grep -nE "onDestroy|on.*destroy" tiptap-docs.md | head -20

# Find onTransaction event
grep -nE "onTransaction|on.*transaction" tiptap-docs.md | head -20

# Find contentError event
grep -nE "contentError|content.*error" tiptap-docs.md | head -20

# Find event listeners
grep -nE "\.on\(|addEventListener|event.*listener" tiptap-docs.md | head -20
```

#### Performance Optimization
```bash
# Find performance guide
grep -nE "^### Integration performance|performance" tiptap-docs.md | head -20

# Find useEditorState hook
grep -n "useEditorState\|use.*editor.*state" tiptap-docs.md | head -20

# Find shouldRerenderOnTransaction
grep -n "shouldRerenderOnTransaction\|should.*rerender" tiptap-docs.md | head -20

# Find immediatelyRender option
grep -n "immediatelyRender\|immediately.*render" tiptap-docs.md | head -20

# Find performance issues tracking
grep -n "Track down performance issues\|performance.*issue" tiptap-docs.md | head -20

# Find prevent unnecessary re-renders
grep -n "prevent.*re-render\|unnecessary.*render" tiptap-docs.md | head -20
```

#### Accessibility
```bash
# Find accessibility guide
grep -nE "^### Accessibility|Accessibility \| Tiptap" tiptap-docs.md

# Find keyboard accessibility
grep -n "^## Keyboard accessibility\|keyboard.*accessibility" tiptap-docs.md

# Find semantic markup and ARIA roles
grep -nE "Semantic markup|Aria Roles|ARIA" tiptap-docs.md | head -20

# Find accessibility gotchas
grep -n "Gotchas\|accessibility.*gotcha" tiptap-docs.md | head -20

# Find VoiceOver issues
grep -n "VoiceOver\|voice.*over" tiptap-docs.md | head -20

# Find keyboard traps
grep -n "Keyboard traps\|keyboard.*trap" tiptap-docs.md | head -20
```

#### Styling and Theming
```bash
# Find styling guide
grep -nE "^### Style your editor|How to apply styling" tiptap-docs.md

# Find CSS modules
grep -n "Style with CSS modules\|CSS.*module" tiptap-docs.md | head -20

# Find Tailwind CSS
grep -n "tailwind\|Tailwind\|@tailwindcss" tiptap-docs.md | head -20

# Find global CSS file
grep -n "global CSS\|@apply" tiptap-docs.md | head -20

# Find adding classes to extensions
grep -n "Adding classes to your extensions\|extension.*class" tiptap-docs.md | head -20

# Find typography plugin
grep -n "@tailwindcss/typography\|typography.*plugin" tiptap-docs.md | head -20
```

#### Export and Import
```bash
# Find export to JSON and HTML guide
grep -nE "^### Export to JSON and HTML|Export to JSON" tiptap-docs.md

# Find JSON export
grep -n "Option 1: JSON\|export.*JSON" tiptap-docs.md | head -20

# Find HTML export
grep -n "Option 2: HTML\|export.*HTML" tiptap-docs.md | head -20

# Find Y.js export
grep -n "Option 3: Y.js\|export.*Yjs" tiptap-docs.md | head -20

# Find Markdown export
grep -n "Markdown\|export.*markdown" tiptap-docs.md | head -20

# Find import extension (legacy)
grep -n "@tiptap-pro/extension-import\|Legacy Import" tiptap-docs.md | head -20

# Find export extension (legacy)
grep -n "@tiptap-pro/extension-export\|Legacy Export" tiptap-docs.md | head -20
```

#### Invalid Schema Handling
```bash
# Find invalid schema handling guide
grep -nE "^### Invalid schema handling|How to handle invalid schemas" tiptap-docs.md

# Find content checking
grep -n "Enable content checking\|content.*check" tiptap-docs.md | head -20

# Find contentError event handling
grep -n "Handle contentError events\|contentError.*event" tiptap-docs.md | head -20

# Find schema validation
grep -n "schema.*validation\|invalid.*schema" tiptap-docs.md | head -20
```

---

## Section 2: Collaboration

**Purpose**: Real-time collaborative editing with Yjs and Hocuspocus.

### Key Sections

#### Collaboration Overview
```bash
# Find collaboration section
grep -nE "^### Collaboration \| Tiptap Collaboration Docs$" tiptap-docs.md

# Find collaboration overview
grep -n "^## Maintain documents" tiptap-docs.md
```

#### Installation
```bash
# Find collaboration installation
grep -n "^### Install Collaboration" tiptap-docs.md

# Find Collaboration extension install
grep -n "@tiptap/extension-collaboration" tiptap-docs.md

# Find Yjs installation
grep -n "yjs\|y-protocols" tiptap-docs.md | head -20
```

#### Setup and Configuration
```bash
# Find setup instructions
grep -n "^## Prepare your editor$" tiptap-docs.md

# Find Yjs integration
grep -n "Integrate Yjs and the Collaboration Extension" tiptap-docs.md

# Find document server setup
grep -n "^## Start your Document server$" tiptap-docs.md

# Find provider connection
grep -n "Connect to your Document server" tiptap-docs.md

# Find TiptapCollabProvider
grep -n "TiptapCollabProvider\|@tiptap-pro/provider" tiptap-docs.md | head -20
```

#### Cloud vs On-Premises
```bash
# Find cloud setup
grep -n "^### Cloud$" tiptap-docs.md

# Find dedicated cloud
grep -n "^### Dedicated Cloud$" tiptap-docs.md

# Find on-premises solution
grep -n "^### On-Premises\|Enterprise on-premises solution" tiptap-docs.md

# Find migration from Hocuspocus
grep -n "Migrate from Hocuspocus\|Migrate from Hocuspocus or Collaboration Cloud" tiptap-docs.md

# Find cloud features
grep -n "^### Tiptap Cloud Features$" tiptap-docs.md

# Find trial information
grep -n "^### Trial\|Try every Tiptap feature free" tiptap-docs.md

# Find trial management
grep -n "Manage your trial\|How to start your trial" tiptap-docs.md | head -10
```

#### Authentication
```bash
# Find authentication section
grep -n "^## Authenticate your users$" tiptap-docs.md

# Find JWT token references
grep -n "token\|JWT\|authentication" tiptap-docs.md | head -30
```

#### Content Initialization
```bash
# Find initial content setup
grep -n "Adding initial content\|Initialize Content Properly" tiptap-docs.md

# Find setContent usage
grep -n "setContent\|editor\.commands\.setContent" tiptap-docs.md | head -20
```

---

## Section 3: Content AI

**Purpose**: AI-powered features including generation, suggestions, and toolkit.

### Key Sections

#### AI Overview
```bash
# Find Content AI section
grep -nE "^### AI \| Tiptap Content AI$" tiptap-docs.md

# Find Content AI extensions overview
grep -n "^## Content AI extensions$" tiptap-docs.md
```

#### AI Generation
```bash
# Find AI Generation section
grep -nE "^### AI Generation \| Tiptap Content AI$" tiptap-docs.md

# Find AI Generation features
grep -n "^## AI Generation features$" tiptap-docs.md

# Find how it works
grep -n "^## How it works$" tiptap-docs.md
```

#### AI Suggestion
```bash
# Find AI Suggestion section
grep -n "^### AI Suggestion$" tiptap-docs.md

# Find AI Suggestion extension
grep -n "@tiptap-pro/extension-ai-suggestion" tiptap-docs.md
```

#### AI Toolkit
```bash
# Find AI Toolkit section
grep -n "^### AI Toolkit$" tiptap-docs.md

# Find AI Toolkit extension
grep -n "@tiptap-pro/extension-ai-toolkit" tiptap-docs.md
```

#### OpenAI Integration
```bash
# Find OpenAI references
grep -n "OpenAI\|gpt-4\|gpt-5\|dall-e" tiptap-docs.md | head -20

# Find API key references
grep -n "API key\|appId\|app ID" tiptap-docs.md | head -20

# Find custom LLM setup
grep -n "custom LLM\|custom.*LLM\|override.*resolver" tiptap-docs.md | head -20

# Find AI agent documentation
grep -n "^### AI Agent\|Build an AI agent" tiptap-docs.md

# Find RAG (Retrieval-Augmented Generation)
grep -n "Retrieval-Augmented Generation\|RAG\|Using Retrieval-Augmented Generation" tiptap-docs.md | head -20
```

---

## Section 4: Comments

**Purpose**: Commenting system with threads and moderation.

### Key Sections

#### Comments Overview
```bash
# Find Comments section
grep -nE "^### Comments \| Tiptap Comments Docs$" tiptap-docs.md

# Find Comments features
grep -n "^## Comments features$" tiptap-docs.md
```

#### Installation
```bash
# Find Comments extension install
grep -n "@tiptap-pro/extension-comments" tiptap-docs.md

# Find Comments API references
grep -n "Comments REST API\|Comments API" tiptap-docs.md | head -10
```

#### Features
```bash
# Find inline comments
grep -n "inline.*comment\|comment.*thread" tiptap-docs.md | head -20

# Find webhooks
grep -n "webhook\|Webhook" tiptap-docs.md | head -20
```

---

## Section 5: Documents

**Purpose**: Document management, versioning, and storage.

### Key Sections

#### Documents Overview
```bash
# Find Documents section
grep -nE "^### Documents \| Tiptap Collaboration$" tiptap-docs.md

# Find document management
grep -n "^## Maintain documents$" tiptap-docs.md
```

#### Version History / Snapshot
```bash
# Find Snapshot extension
grep -n "^### Snapshot extension" tiptap-docs.md

# Find snapshot installation
grep -n "@tiptap-pro/extension-snapshot" tiptap-docs.md

# Find autoversioning
grep -n "^## Autoversioning$" tiptap-docs.md

# Find version revert
grep -n "^## Revert to a version$" tiptap-docs.md

# Find version utilities
grep -n "getPreviewContentFromVersionPayload\|watchPreviewContent" tiptap-docs.md
```

#### Document API
```bash
# Find REST API references
grep -n "REST API\|document.*API" tiptap-docs.md | head -20

# Find document storage
grep -n "^## Storage$" tiptap-docs.md

# Find document commands
grep -n "^## Commands$" tiptap-docs.md
```

#### Semantic Search
```bash
# Find Semantic Search section
grep -n "^### Semantic Search" tiptap-docs.md

# Find search endpoint
grep -n "search endpoint\|search.*API" tiptap-docs.md | head -10

# Find how it works
grep -n "^### How it works$" tiptap-docs.md

# Find perform a search
grep -n "^### Perform a search\|Perform a search" tiptap-docs.md

# Find keeping API key secret
grep -n "Keeping your API key secret\|API key.*secret" tiptap-docs.md | head -10
```

#### Pages Integration
```bash
# Find Pages section
grep -n "^### Pages \| Tiptap Pages$" tiptap-docs.md

# Find Pages integration
grep -n "Integrate Pages\|Pages.*integration" tiptap-docs.md | head -10
```

---

## Section 6: Conversion

**Purpose**: File import/export (DOCX, etc.).

### Key Sections

#### Conversion Overview
```bash
# Find Conversion section
grep -nE "^### Conversion \| Tiptap Conversion$" tiptap-docs.md

# Find conversion service
grep -n "^### Conversion service$" tiptap-docs.md
```

#### Editor Extensions vs REST API
```bash
# Find Editor Extensions usage
grep -n "Editor Extensions.*conversion\|Use built-in Tiptap Pro extensions" tiptap-docs.md

# Find REST API usage
grep -n "REST API.*conversion\|HTTP endpoints.*conversion" tiptap-docs.md

# Find conversion service
grep -n "^### Conversion service$" tiptap-docs.md

# Find supported formats
grep -n "Supported formats\|supported.*format" tiptap-docs.md | head -20

# Find conversion caveats
grep -n "Caveats and limitations\|conversion.*limitation" tiptap-docs.md | head -20

# Find legacy conversion API deprecation
grep -n "Legacy.*Conversion REST API Deprecation\|/v1/.*deprecation" tiptap-docs.md | head -10
```

---

## Common Patterns

### Finding Code Examples
```bash
# Find code blocks
grep -n "^```" tiptap-docs.md | head -50

# Find TypeScript examples
grep -n "^```typescript" tiptap-docs.md | head -30

# Find JavaScript examples
grep -n "^```javascript" tiptap-docs.md | head -30

# Find bash/npm install examples
grep -n "^```bash" tiptap-docs.md | head -20
```

### Finding Extension Packages
```bash
# Find all @tiptap/ packages
grep -n "@tiptap/[a-z-]*" tiptap-docs.md | head -50

# Find all @tiptap-pro/ packages
grep -n "@tiptap-pro/[a-z-]*" tiptap-docs.md | head -30

# Find extension names (without @tiptap prefix)
grep -n "extension-[a-z-]*" tiptap-docs.md | head -30
```

### Finding API Methods
```bash
# Find editor commands
grep -n "editor\.commands\." tiptap-docs.md | head -30

# Find setContent
grep -n "setContent" tiptap-docs.md | head -20

# Find getContent
grep -n "getContent" tiptap-docs.md | head -20

# Find chain commands
grep -nE "\.chain|\.focus|\.blur|\.insertContent" tiptap-docs.md | head -30
```

### Finding Configuration Options
```bash
# Find configure() calls
grep -n "\.configure(" tiptap-docs.md | head -30

# Find extension options
grep -n "extensions: \[" tiptap-docs.md | head -30

# Find useEditor options
grep -n "useEditor({" tiptap-docs.md | head -20
```

### Finding Source URLs
```bash
# Find source URL patterns
grep -n "\*\*Source:\*\*" tiptap-docs.md | head -30

# Find specific source URLs
grep -n "tiptap\.dev/docs" tiptap-docs.md | head -30
```

---

## Advanced Search Patterns

### Find All Extension Names
```bash
# Find extension package names
grep -nE "@tiptap/extension-[a-z-]*|@tiptap-pro/extension-[a-z-]*" tiptap-docs.md | head -100

# Extract unique extension names
grep -o "@tiptap[-/][a-z-]*" tiptap-docs.md | sort -u | head -50
```

### Find React/Vue Integration
```bash
# Find React references
grep -nE "@tiptap/react|useEditor|EditorContent" tiptap-docs.md | head -30

# Find Vue references
grep -nE "@tiptap/vue|useEditor.*vue" tiptap-docs.md | head -20
```

### Find UI Components
```bash
# Find UI Components section
grep -nE "^### UI Components|UI Components \| Tiptap$" tiptap-docs.md

# Find components section
grep -n "^## Components and primitives$" tiptap-docs.md

# Find templates
grep -n "^### Templates$" tiptap-docs.md

# Find components subsection
grep -nE "^### Components \| Tiptap UI Component$" tiptap-docs.md

# Find primitives subsection
grep -nE "^### Primitives$" tiptap-docs.md

# Find simple template
grep -nE "^### Simple template|Simple template \| Tiptap UI Components$" tiptap-docs.md

# Find hooks in UI components
grep -n "Hooks\|#### Hooks" tiptap-docs.md | head -20

# Find icons in UI components
grep -n "Icons\|#### Icons" tiptap-docs.md | head -20

# Find node components
grep -n "Node Components\|#### Node Components" tiptap-docs.md | head -20
```

### Find Pro Features
```bash
# Find Pro registry
grep -n "^## Access the Pro registry$" tiptap-docs.md

# Find private registry setup
grep -n "Set up private registry\|private registry" tiptap-docs.md

# Find TIPTAP_PRO_TOKEN
grep -n "TIPTAP_PRO_TOKEN" tiptap-docs.md
```

### Find Cloud Features
```bash
# Find Cloud features
grep -n "^### Tiptap Cloud Features$" tiptap-docs.md

# Find Cloud integration
grep -n "Tiptap Cloud\|Cloud.*integration" tiptap-docs.md | head -20

# Find trial information
grep -n "^### Trial \| Tiptap Resources$" tiptap-docs.md
```

---

## Module-Specific Search Strategies

### For Core Editor Setup
```bash
# Find minimal setup example
grep -n "^### Minimal setup$" tiptap-docs.md

# Find Editor class usage
grep -n "import.*Editor.*from '@tiptap/core'" tiptap-docs.md | head -20

# Find basic extensions (Document, Paragraph, Text)
grep -n -A5 "Document\|Paragraph\|Text" tiptap-docs.md | grep -A5 "extension-document\|extension-paragraph\|extension-text" | head -30
```

### For Collaboration Setup
```bash
# Find Collaboration.configure examples
grep -n -A10 "Collaboration\.configure" tiptap-docs.md | head -40

# Find Yjs Doc creation
grep -n "new Y\.Doc()\|new Yjs\.Doc()" tiptap-docs.md | head -20

# Find provider setup
grep -n -A10 "TiptapCollabProvider" tiptap-docs.md | head -40
```

### For AI Integration
```bash
# Find AI extension setup
grep -n "@tiptap-pro/extension-ai" tiptap-docs.md | head -20

# Find OpenAI configuration
grep -n "appId\|baseURL\|OpenAI" tiptap-docs.md | head -30

# Find streaming examples
grep -n "stream\|streaming" tiptap-docs.md | head -30
```

### For Comments Integration
```bash
# Find Comments extension setup
grep -n "@tiptap-pro/extension-comments" tiptap-docs.md

# Find Comments API endpoints
grep -n "comments.*API\|REST.*comments" tiptap-docs.md | head -20
```

### For Version History
```bash
# Find Snapshot extension setup
grep -n "@tiptap-pro/extension-snapshot" tiptap-docs.md

# Find version management
grep -n "version.*create\|version.*revert\|autoversioning" tiptap-docs.md | head -30
```

---

## Efficient Search Workflow

### Step 1: Identify Feature Area
```bash
# If you know the feature (Editor, Collaboration, AI, etc.)
grep -nE "^### (Editor|Collaboration|AI|Comments|Documents|Conversion)" tiptap-docs.md

# Or search for main sections
grep -n "^## Browse by feature$" tiptap-docs.md
```

### Step 2: Find Specific Extension or Feature
```bash
# Within that area, find the specific extension
# Example: Find Collaboration extension
grep -n "@tiptap/extension-collaboration" tiptap-docs.md

# Or find by feature name
grep -n "collaboration\|Collaboration" tiptap-docs.md | head -30
```

### Step 3: Read Documentation
```bash
# Use line numbers from grep to read specific sections
# Example: Read lines 1700-1800
sed -n '1700,1800p' tiptap-docs.md
```

---

## Key API Surface Areas

### Editor Core
- **Editor**: `setContent()`, `getContent()`, `commands`, `chain()`, `focus()`, `blur()`, `insertContent()`, `deleteContent()`, `clearContent()`, `can()`, `run()`
- **Extensions**: `Document`, `Paragraph`, `Text`, `StarterKit`, `Heading`, `Bold`, `Italic`, `Strike`, `Underline`, `Link`, `Image`, `Table`, `List`, `Task`, `Highlight`, `Code`, `CodeBlock`, `Blockquote`, `Emoji`
- **UI Extensions**: `BubbleMenu`, `FloatingMenu`, `DragHandle`, `Mention`, `Placeholder`, `Focus`
- **Utility Extensions**: `History`, `CharacterCount`, `Dropcursor`, `Gapcursor`, `CollaborationCursor`
- **React**: `useEditor()`, `EditorContent`, `useEditorState()`
- **Vue**: `useEditor()`, `EditorContent` (Vue 2 and Vue 3)
- **Svelte**: `useEditor()`, `EditorContent`
- **Events**: `onUpdate`, `onCreate`, `onDestroy`, `onTransaction`, `contentError`

### Collaboration
- **Collaboration Extension**: `Collaboration.configure()`
- **Yjs**: `new Y.Doc()`, document synchronization
- **Provider**: `TiptapCollabProvider` (Cloud/On-Premises)
- **Authentication**: JWT tokens

### Content AI
- **AI Generation**: `@tiptap-pro/extension-ai-generation`
- **AI Suggestion**: `@tiptap-pro/extension-ai-suggestion`
- **AI Toolkit**: `@tiptap-pro/extension-ai-toolkit`
- **OpenAI Integration**: App ID, API keys, custom LLMs

### Comments
- **Comments Extension**: `@tiptap-pro/extension-comments`
- **Comments API**: REST endpoints for programmatic management
- **Webhooks**: Real-time notifications

### Documents
- **Snapshot Extension**: `@tiptap-pro/extension-snapshot`
- **Version Management**: Autoversioning, manual versioning, revert
- **Document API**: REST endpoints for document CRUD
- **Semantic Search**: Search endpoint for document content

### Conversion
- **Editor Extensions**: Built-in conversion extensions (`@tiptap-pro/extension-import`, `@tiptap-pro/extension-export`)
- **REST API**: HTTP endpoints for file conversion (`/import`, `/export`, `/import-docx`)
- **Formats**: DOCX, HTML, JSON, Markdown, Y.js
- **Legacy**: Legacy DOCX import/export extensions (deprecated), v1 REST API (deprecated)

### UI Components
- **Templates**: Pre-built editor templates
- **Components**: Feature-specific React components (HeadingDropdownMenu, ListButton, etc.)
- **Primitives**: Low-level UI primitives
- **Hooks**: `useTiptapEditor`, `useFloatingElement`, etc.

### Performance & Accessibility
- **Performance**: `useEditorState`, `shouldRerenderOnTransaction`, `immediatelyRender`, performance tracking
- **Accessibility**: Keyboard navigation, ARIA roles, semantic markup, VoiceOver support

### Advanced Features
- **NodeViews**: Custom node rendering with React/Vue components
- **MarkViews**: Custom mark rendering
- **Server-Side Rendering**: SSR support
- **Static Renderer**: Render JSON to HTML/Markdown/React without editor instance
- **Invalid Schema Handling**: Content validation, `contentError` events

### Security
- **XSS Protection**: Security vulnerabilities and patches
- **Authentication**: JWT tokens, user authentication
- **API Key Management**: Secure API key handling

---

## Tips for LLM Navigation

1. **Start with Feature Area**: Identify which main feature (Editor, Collaboration, AI, etc.) contains what you need
2. **Use Line Numbers**: The grep commands provide line numbers - use them to jump directly to sections
3. **Context Matters**: Use `-A` and `-B` flags to get context around matches
4. **Multiple Matches**: Some content appears multiple times - use `head` to limit results
5. **Extension Names**: TipTap uses consistent naming: `@tiptap/extension-{name}` for open source, `@tiptap-pro/extension-{name}` for Pro
6. **Source URLs**: Each section has a source URL - use these to verify against online docs if needed

---

## Example Use Cases

### Use Case 1: Find Collaboration Extension Setup
```bash
# Step 1: Find Collaboration section
grep -n "^### Collaboration" tiptap-docs.md

# Step 2: Find installation
grep -n "@tiptap/extension-collaboration" tiptap-docs.md

# Step 3: Find setup example
grep -n -A30 "Collaboration\.configure" tiptap-docs.md | head -50
```

### Use Case 2: Find AI Suggestion Extension
```bash
# Step 1: Find AI section
grep -n "^### AI Suggestion$" tiptap-docs.md

# Step 2: Find extension package
grep -n "@tiptap-pro/extension-ai-suggestion" tiptap-docs.md

# Step 3: Find usage examples
grep -n -A20 "ai-suggestion\|AI Suggestion" tiptap-docs.md | head -50
```

### Use Case 3: Find Version History Setup
```bash
# Step 1: Find Snapshot extension
grep -n "^### Snapshot extension" tiptap-docs.md

# Step 2: Find installation
grep -n "@tiptap-pro/extension-snapshot" tiptap-docs.md

# Step 3: Find configuration examples
grep -n -A20 "autoversioning\|version.*create" tiptap-docs.md | head -50
```

### Use Case 4: Find React Integration
```bash
# Step 1: Find React references
grep -n "@tiptap/react" tiptap-docs.md | head -10

# Step 2: Find useEditor examples
grep -n -A30 "useEditor({" tiptap-docs.md | head -60

# Step 3: Find EditorContent usage
grep -n -A10 "<EditorContent" tiptap-docs.md | head -30
```

### Use Case 5: Find Performance Optimization
```bash
# Step 1: Find performance section
grep -n "^### Integration performance" tiptap-docs.md

# Step 2: Find useEditorState hook
grep -n "useEditorState" tiptap-docs.md

# Step 3: Find re-render prevention
grep -n "prevent.*re-render\|shouldRerenderOnTransaction" tiptap-docs.md | head -20
```

### Use Case 6: Find Accessibility Guide
```bash
# Step 1: Find accessibility section
grep -n "^### Accessibility" tiptap-docs.md

# Step 2: Find keyboard accessibility
grep -n "^## Keyboard accessibility" tiptap-docs.md

# Step 3: Find ARIA roles
grep -n "Semantic markup\|Aria Roles" tiptap-docs.md | head -20
```

### Use Case 7: Find Export/Import Formats
```bash
# Step 1: Find export guide
grep -n "^### Export to JSON and HTML" tiptap-docs.md

# Step 2: Find JSON export
grep -n "Option 1: JSON" tiptap-docs.md

# Step 3: Find HTML export
grep -n "Option 2: HTML" tiptap-docs.md
```

### Use Case 8: Find Migration Guide
```bash
# Step 1: Find upgrade guide
grep -n "^## Upgrade guide" tiptap-docs.md

# Step 2: Find specific migration (e.g., TinyMCE)
grep -n "^### Migrate from TinyMCE" tiptap-docs.md

# Step 3: Find breaking changes
grep -n "^### Breaking Changes" tiptap-docs.md
```

### Use Case 9: Find Extension Configuration
```bash
# Step 1: Find extension (e.g., Bold)
grep -n "@tiptap/extension-bold" tiptap-docs.md

# Step 2: Find configure() examples
grep -n -A20 "Bold\.configure\|extension-bold.*configure" tiptap-docs.md | head -40

# Step 3: Find extension options
grep -n "extensions: \[.*Bold" tiptap-docs.md | head -20
```

### Use Case 10: Find Changelog and Version Info
```bash
# Step 1: Find changelog
grep -n "^### Changelog\|Changelog \| Tiptap" tiptap-docs.md

# Step 2: Find what's new
grep -n "^### What's new\|What.*new" tiptap-docs.md | head -10

# Step 3: Find breaking changes
grep -n "Breaking Changes\|breaking.*change" tiptap-docs.md | head -20
```

---

## Additional Topics

### Contributing and Development
```bash
# Find contributing guide
grep -n "^### Contributing\|Contributing \| Tiptap$" tiptap-docs.md

# Find development environment setup
grep -n "Set up the development environment\|development.*environment" tiptap-docs.md | head -20

# Find code style guide
grep -n "Our code style\|code.*style" tiptap-docs.md | head -20

# Find testing guide
grep -n "Test for errors\|testing" tiptap-docs.md | head -20

# Find documentation contributions
grep -n "Document your contributions\|documentation" tiptap-docs.md | head -20
```

### TypeScript Support
```bash
# Find TypeScript guide
grep -n "^### TypeScript \| TypeScript \| Tiptap$" tiptap-docs.md

# Find options types
grep -n "^## Options types\|options.*type" tiptap-docs.md | head -20

# Find storage types
grep -n "^## Storage types\|storage.*type" tiptap-docs.md | head -20

# Find command type
grep -n "^## Command type\|command.*type" tiptap-docs.md | head -20
```

### Collaboration API
```bash
# Find Collaboration API documentation
grep -n "^### Collaboration API\|Collaboration API \| Tiptap" tiptap-docs.md

# Find REST API endpoints
grep -n "REST API\|API.*endpoint" tiptap-docs.md | head -30

# Find webhooks
grep -n "webhook\|Webhook" tiptap-docs.md | head -30
```

### Frequently Asked Questions
```bash
# Find FAQ section
grep -n "^### Frequently Asked Questions\|Frequently Asked Questions" tiptap-docs.md

# Find React context issues
grep -n "React context is not working\|React.*context" tiptap-docs.md | head -20

# Find extra divs in NodeViews
grep -n "extra divs\|extra.*div" tiptap-docs.md | head -20
```

### Security and Patches
```bash
# Find security incidents
grep -n "^### Patched Security Incidents\|Security.*Incident" tiptap-docs.md

# Find XSS vulnerability
grep -n "XSS vulnerability\|XSS" tiptap-docs.md | head -20

# Find security warnings
grep -n "Security warning\|security.*warning" tiptap-docs.md | head -20
```

## Notes

- **File Size**: The documentation file is 218,043 lines - always use `head` or `tail` to limit results
- **Format**: Documentation follows TipTap's online documentation format with markdown rendering
- **Source URLs**: Each section includes source URL pointing to original online documentation
- **Line Numbers**: Line numbers are approximate - content may shift if documentation is regenerated
- **Extension Naming**: 
  - Open source: `@tiptap/extension-{name}`
  - Pro: `@tiptap-pro/extension-{name}`
  - StarterKit: `@tiptap/starter-kit`
  - Framework packages: `@tiptap/react`, `@tiptap/vue-2`, `@tiptap/vue-3`, `@tiptap/svelte`
- **Version History**: Documentation covers v1, v2, and v3 with migration guides between versions
- **Experiments**: Some examples are marked as experiments and not officially supported
- **Legacy Features**: Some features (legacy DOCX import/export, v1 REST API) are deprecated

---

## Maintenance

When regenerating the documentation:

1. Update the "Last Updated" date
2. Verify line numbers still match (they may shift)
3. Update any feature-specific sections if structure changes
4. Add new extensions or features as they appear
5. Update "Key API Surface Areas" section with new APIs

---

**End of Index**

