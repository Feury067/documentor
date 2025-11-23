# ProseMirror Documentation Index

**Purpose**: This index provides regex patterns and grep commands to efficiently navigate the massive ProseMirror documentation (`prosemirror-docs.md`).

**File Location**: `docs/external/prosemirror/prosemirror-docs.md` (725,124 lines)

**Last Updated**: Generated from spidered documentation on 2025-11-21

**Note**: Most grep commands use the `-E` flag for extended regular expressions. This enables proper handling of alternation (`|`) and other regex features.

---

## Quick Navigation Commands

### Find Guide Sections
```bash
# Find guide introduction
grep -n "^## Introduction$" prosemirror-docs.md | head -5

# Find guide sections
grep -nE "^## Documents$|^## Schemas$|^## Document transformations$|^## The editor state$|^## The view component$|^## Commands$|^## Collaborative editing$" prosemirror-docs.md | head -20

# Find specific guide topic (e.g., Transactions)
grep -n "^### Transactions$" prosemirror-docs.md | head -5
```

### Find Reference Manual Sections
```bash
# Find reference manual header
grep -n "^## Reference manual$" prosemirror-docs.md | head -5

# Find module sections
grep -n "^## prosemirror-" prosemirror-docs.md | head -20

# Find specific module (e.g., prosemirror-state)
grep -n "^## prosemirror-state module" prosemirror-docs.md
```

### Find Class Documentation
```bash
# Find EditorState class
grep -nE "^#### \`class\`\s*EditorState" prosemirror-docs.md | head -5

# Find EditorView class
grep -n "^#### \`class\`\s*EditorView" prosemirror-docs.md | head -5

# Find Node class
grep -n "^#### \`class\`\s*Node" prosemirror-docs.md | head -5

# Find Schema class
grep -n "^#### \`class\`\s*Schema" prosemirror-docs.md | head -5
```

### Find Method Documentation
```bash
# Find create method (EditorState.create)
grep -n "#### \`create\`" prosemirror-docs.md | head -10

# Find apply method (Transaction/EditorState.apply)
grep -n "#### \`apply\`" prosemirror-docs.md | head -10

# Find dispatch method
grep -n "#### \`dispatch\`" prosemirror-docs.md | head -10
```

---

## Module Organization

The documentation is organized into **main modules**:

1. **`prosemirror-model`** - Document model, nodes, marks, schema
2. **`prosemirror-state`** - Editor state, selection, transactions, plugins
3. **`prosemirror-view`** - Editor view, DOM rendering, user interaction
4. **`prosemirror-transform`** - Document transformations, steps, mapping
5. **`prosemirror-commands`** - Editing commands
6. **`prosemirror-collab`** - Collaborative editing
7. **`prosemirror-history`** - Undo/redo history
8. **`prosemirror-keymap`** - Keyboard bindings
9. **`prosemirror-inputrules`** - Input rules
10. **`prosemirror-gapcursor`** - Gap cursor
11. **`prosemirror-schema-basic`** - Basic schema
12. **`prosemirror-schema-list`** - List schema

---

## Guide Sections

### Introduction
```bash
# Find introduction section
grep -n "^## Introduction$" prosemirror-docs.md | head -5

# Find "My first editor" example
grep -n "^### My first editor$" prosemirror-docs.md | head -5

# Find essential modules list
grep -n "essential modules\|prosemirror-model\|prosemirror-state\|prosemirror-view\|prosemirror-transform" prosemirror-docs.md | head -20
```

### Documents
```bash
# Find documents section
grep -n "^## Documents$" prosemirror-docs.md | head -5

# Find document structure topics
grep -nE "^### (Content|Structure|Identity and persistence|Data structures|Indexing|Slices|Changing)$" prosemirror-docs.md | head -20

# Find Node class in guide
grep -n -A10 "^### Content$" prosemirror-docs.md | grep -A10 "Node" | head -20
```

### Schemas
```bash
# Find schemas section
grep -n "^## Schemas$" prosemirror-docs.md | head -5

# Find schema topics
grep -nE "^### (Node Types|Marks|Attributes|Serialization and Parsing|Extending a schema)$" prosemirror-docs.md | head -20

# Find Schema class usage
grep -n "new Schema(" prosemirror-docs.md | head -20
```

### Document Transformations
```bash
# Find transformations section
grep -n "^## Document transformations$" prosemirror-docs.md | head -5

# Find transformation topics
grep -nE "^### (Why\?|Steps|Transforms|Mapping|Rebasing)$" prosemirror-docs.md | head -20

# Find Transform class
grep -n "new Transform\|Transform(" prosemirror-docs.md | head -20
```

### The Editor State
```bash
# Find editor state section
grep -n "^## The editor state$" prosemirror-docs.md | head -5

# Find state topics
grep -nE "^### (Selection|Transactions|Plugins)$" prosemirror-docs.md | head -20

# Find EditorState.create
grep -n "EditorState\.create" prosemirror-docs.md | head -20
```

### The View Component
```bash
# Find view component section
grep -n "^## The view component$" prosemirror-docs.md | head -5

# Find view topics
grep -nE "^### (Editable DOM|Data flow|Efficient updating|Props|Decorations|Node views)$" prosemirror-docs.md | head -20

# Find EditorView constructor
grep -n "new EditorView(" prosemirror-docs.md | head -20
```

### Commands
```bash
# Find commands section
grep -n "^## Commands$" prosemirror-docs.md | head -5

# Find command examples
grep -n -A20 "^## Commands$" prosemirror-docs.md | head -50
```

### Collaborative Editing
```bash
# Find collaborative editing section
grep -n "^## Collaborative editing$" prosemirror-docs.md | head -5

# Find collab topics
grep -nE "^### (Algorithm|The Authority|The \`collab\` Module)$" prosemirror-docs.md | head -20

# Find collab module usage
grep -n "collab\|Collaborative" prosemirror-docs.md | head -30
```

---

## Module 1: `prosemirror-state`

**Purpose**: Editor state, selection, transactions, and plugin system.

### Key Sections

#### Module Header
```bash
# Find prosemirror-state module
grep -n "^## prosemirror-state module" prosemirror-docs.md

# First occurrence around line 2320
# Contains: EditorState, Selection, Plugin System, Props, Decorations
```

#### EditorState Class
```bash
# Find EditorState class definition
grep -nE "^#### \`class\`\s*EditorState" prosemirror-docs.md | head -5

# Find EditorState.create
grep -n "#### \`create\`" prosemirror-docs.md | head -5

# Find EditorState.apply
grep -n "#### \`apply\`" prosemirror-docs.md | head -5

# Find EditorState properties
grep -nE -A5 "^#### \`class\`\s*EditorState" prosemirror-docs.md | grep -E -A30 "doc:|selection:|storedMarks:" | head -40

# Find EditorState methods
grep -nE -A50 "^#### \`class\`\s*EditorState" prosemirror-docs.md | grep "#### \`" | head -20
```

#### Selection
```bash
# Find Selection section
grep -n "^### Selection" prosemirror-docs.md | head -5

# Find Selection class
grep -nE "^#### \`class\`\s*Selection" prosemirror-docs.md | head -5

# Find TextSelection
grep -n "TextSelection\|textSelection" prosemirror-docs.md | head -20

# Find NodeSelection
grep -n "NodeSelection\|nodeSelection" prosemirror-docs.md | head -20

# Find AllSelection
grep -n "AllSelection\|allSelection" prosemirror-docs.md | head -20
```

#### Transactions
```bash
# Find Transaction class
grep -nE "^#### \`class\`\s*Transaction" prosemirror-docs.md | head -5

# Find transaction methods
grep -nE "#### \`(replace|insert|delete|setSelection|setStoredMarks|ensureMarks|addMark|removeMark|removeStoredMark|split|join|setMeta|getMeta)\`" prosemirror-docs.md | head -30

# Find transaction properties
grep -nE -A5 "^#### \`class\`\s*Transaction" prosemirror-docs.md | grep -E -A30 "doc:|selection:|storedMarks:|steps:|scrolledIntoView:" | head -40
```

#### Plugin System
```bash
# Find Plugin System section
grep -n "^### Plugin System" prosemirror-docs.md | head -5

# Find Plugin class
grep -nE "^#### \`class\`\s*Plugin" prosemirror-docs.md | head -5

# Find PluginSpec
grep -n "PluginSpec\|pluginSpec" prosemirror-docs.md | head -20

# Find StateField
grep -n "StateField\|stateField" prosemirror-docs.md | head -20

# Find PluginKey
grep -n "PluginKey\|pluginKey" prosemirror-docs.md | head -20
```

#### Props
```bash
# Find Props section
grep -n "^### Props" prosemirror-docs.md | head -5

# Find EditorProps
grep -n "EditorProps\|editorProps" prosemirror-docs.md | head -20

# Find dispatchTransaction prop
grep -n "dispatchTransaction" prosemirror-docs.md | head -20
```

#### Decorations
```bash
# Find Decorations section
grep -n "^### Decorations" prosemirror-docs.md | head -5

# Find Decoration class
grep -nE "^#### \`class\`\s*Decoration" prosemirror-docs.md | head -5

# Find DecorationSet
grep -n "DecorationSet\|decorationSet" prosemirror-docs.md | head -20

# Find decoration methods
grep -nE "#### \`(node|widget|inline)\`" prosemirror-docs.md | head -20
```

---

## Module 2: `prosemirror-model`

**Purpose**: Document model, nodes, marks, schema, and DOM representation.

### Key Sections

#### Module Header
```bash
# Find prosemirror-model module
grep -n "^## prosemirror-model module" prosemirror-docs.md

# Contains: Document Structure, Resolved Positions, Document Schema, DOM Representation
```

#### Document Structure
```bash
# Find Document Structure section
grep -n "^### Document Structure" prosemirror-docs.md | head -5

# Find Node class
grep -nE "^#### \`class\`\s*Node" prosemirror-docs.md | head -5

# Find Node methods
grep -nE "#### \`(textBetween|textContent|firstChild|lastChild|child|childCount|nodeSize|isBlock|isInline|isLeaf|isText|canReplace|canReplaceWith|replace|replaceWith|copy|slice|mark|cut|append|toString)\`" prosemirror-docs.md | head -40

# Find Node properties
grep -nE -A5 "^#### \`class\`\s*Node" prosemirror-docs.md | grep -E -A30 "type:|content:|attrs:|marks:|text:|nodeSize:" | head -40
```

#### Resolved Positions
```bash
# Find Resolved Positions section
grep -n "^### Resolved Positions" prosemirror-docs.md | head -5

# Find ResolvedPos class
grep -nE "^#### \`class\`\s*ResolvedPos" prosemirror-docs.md | head -5

# Find Node.resolve
grep -n "Node\.resolve\|\.resolve(" prosemirror-docs.md | head -20
```

#### Document Schema
```bash
# Find Document Schema section
grep -n "^### Document Schema" prosemirror-docs.md | head -5

# Find Schema class
grep -nE "^#### \`class\`\s*Schema" prosemirror-docs.md | head -5

# Find NodeType
grep -nE "^#### \`class\`\s*NodeType" prosemirror-docs.md | head -5

# Find MarkType
grep -nE "^#### \`class\`\s*MarkType" prosemirror-docs.md | head -5

# Find Mark class
grep -nE "^#### \`class\`\s*Mark" prosemirror-docs.md | head -5

# Find schema nodes and marks
grep -n "schema\.nodes\|schema\.marks" prosemirror-docs.md | head -20
```

#### DOM Representation
```bash
# Find DOM Representation section
grep -n "^### DOM Representation" prosemirror-docs.md | head -5

# Find DOMParser
grep -n "DOMParser\|domParser" prosemirror-docs.md | head -20

# Find DOMSerializer
grep -n "DOMSerializer\|domSerializer" prosemirror-docs.md | head -20

# Find toDOM
grep -n "toDOM\|toDOM:" prosemirror-docs.md | head -20

# Find parseDOM
grep -n "parseDOM\|parseDOM:" prosemirror-docs.md | head -20
```

---

## Module 3: `prosemirror-view`

**Purpose**: Editor view, DOM rendering, and user interaction.

### Key Sections

#### Module Header
```bash
# Find prosemirror-view module
grep -n "^## prosemirror-view module" prosemirror-docs.md

# Contains: EditorView, DOM rendering, event handling
```

#### EditorView Class
```bash
# Find EditorView class
grep -n "^#### \`class\`\s*EditorView" prosemirror-docs.md | head -5

# Find EditorView constructor
grep -n "#### \`constructor\`" prosemirror-docs.md | head -5

# Find EditorView methods
grep -nE "#### \`(dispatch|update|destroy|setProps|someProp|endOfTextblock|posAtCoords|coordsAtPos|domAtPos|nodeDOM|focus|blur|root)\`" prosemirror-docs.md | head -30

# Find EditorView properties
grep -nE -A5 "^#### \`class\`\s*EditorView" prosemirror-docs.md | grep -E -A30 "state:|dom:|root:" | head -40
```

#### Node Views
```bash
# Find Node views section
grep -n "^### Node views" prosemirror-docs.md | head -5

# Find NodeView interface
grep -n "NodeView\|nodeView" prosemirror-docs.md | head -20

# Find createNodeView
grep -n "createNodeView" prosemirror-docs.md | head -20
```

---

## Module 4: `prosemirror-transform`

**Purpose**: Document transformations, steps, and position mapping.

### Key Sections

#### Module Header
```bash
# Find prosemirror-transform module
grep -n "^## prosemirror-transform module" prosemirror-docs.md

# Contains: Steps, Position Mapping, Document transforms
```

#### Steps
```bash
# Find Steps section
grep -n "^### Steps" prosemirror-docs.md | head -5

# Find Step class
grep -nE "^#### \`class\`\s*Step" prosemirror-docs.md | head -5

# Find specific step types
grep -n "ReplaceStep\|InsertStep\|DeleteStep\|AddMarkStep\|RemoveMarkStep\|ReplaceAroundStep" prosemirror-docs.md | head -30

# Find step methods
grep -nE "#### \`(apply|invert|map|getMap|merge)\`" prosemirror-docs.md | head -20
```

#### Position Mapping
```bash
# Find Position Mapping section
grep -n "^### Position Mapping" prosemirror-docs.md | head -5

# Find Mapping class
grep -nE "^#### \`class\`\s*Mapping" prosemirror-docs.md | head -5

# Find map method
grep -n "\.map(" prosemirror-docs.md | head -30
```

#### Document Transforms
```bash
# Find Document transforms section
grep -n "^### Document transforms" prosemirror-docs.md | head -5

# Find Transform class
grep -nE "^#### \`class\`\s*Transform" prosemirror-docs.md | head -5

# Find transform methods
grep -nE "#### \`(replace|insert|delete|addMark|removeMark|setNodeMarkup|split|join|lift|wrap|setBlockType|clearIncompatible|canReplace|canInsert|canDelete|findWrapping)\`" prosemirror-docs.md | head -30
```

---

## Module 5: `prosemirror-commands`

**Purpose**: Common editing commands.

### Key Sections

#### Module Header
```bash
# Find prosemirror-commands module
grep -n "^## prosemirror-commands module" prosemirror-docs.md

# Contains: Command functions for editing
```

#### Common Commands
```bash
# Find command functions
grep -nE "#### \`(deleteSelection|joinBackward|joinForward|selectNodeBackward|selectNodeForward|selectAll|selectTextblockStart|selectTextblockEnd|wrapIn|setBlockType|toggleMark|exitCode|splitBlock|lift|newlineInCode|createParagraphNear|liftEmptyBlock|splitListItem|sinkListItem|liftListItem|wrapInList|unwrapInList|toggleList|joinUp|joinDown|selectParentNode)\`" prosemirror-docs.md | head -30
```

---

## Module 6: `prosemirror-collab`

**Purpose**: Collaborative editing support.

### Key Sections

#### Module Header
```bash
# Find prosemirror-collab module
grep -n "^## prosemirror-collab module" prosemirror-docs.md

# Contains: Collaborative editing, send/receive steps
```

#### Collaborative Editing
```bash
# Find collab class
grep -nE "^#### \`class\`\s*collab|^#### \`class\`\s*Collab" prosemirror-docs.md | head -5

# Find send/receive methods
grep -n "send\|receive\|getVersion\|getSteps" prosemirror-docs.md | head -30
```

---

## Common Patterns

### Finding Class Documentation
```bash
# Find all class definitions
grep -n "^#### \`class\`" prosemirror-docs.md | head -50

# Find class with context (3 lines before, 10 after)
grep -E -B3 -A10 "^#### \`class\`\s*EditorState" prosemirror-docs.md | head -30
```

### Finding Method Documentation
```bash
# Find all method definitions (#### `methodName`)
grep -n "^#### \`[a-z]" prosemirror-docs.md | head -50

# Find specific method (e.g., create)
grep -n "#### \`create\`" prosemirror-docs.md | head -10

# Find method with class context
grep -B10 -A30 "#### \`create\`" prosemirror-docs.md | grep -B10 "EditorState" | head -50
```

### Finding Property Documentation
```bash
# Find property definitions (usually in class sections)
grep -n "\`[a-zA-Z]*:\s*" prosemirror-docs.md | head -50

# Find specific property (e.g., doc)
grep -n "\`doc:\|doc: " prosemirror-docs.md | head -20
```

### Finding Examples
```bash
# Find code blocks (markdown code fences)
grep -n "^```" prosemirror-docs.md | head -100

# Find usage examples
grep -n -A30 "EditorState\.create\|new EditorView\|new Schema" prosemirror-docs.md | head -100
```

### Finding Source URLs
```bash
# Find source URL patterns (helps locate original docs)
grep -n "\*\*Source:\*\*" prosemirror-docs.md | head -50
```

---

## Advanced Search Patterns

### Find All Class Definitions
```bash
# Find all class headers
grep -n "^#### \`class\`" prosemirror-docs.md | head -100

# More specific: important classes
grep -nE "^#### \`class\`\s*(EditorState|EditorView|Node|Mark|Schema|Transaction|Selection|Transform|Step|Plugin|ResolvedPos|NodeType|MarkType|Decoration|DecorationSet|Mapping|DOMParser|DOMSerializer|NodeView|Collab)" prosemirror-docs.md
```

### Find All Method Definitions
```bash
# Find method headers (lowercase or camelCase)
grep -n "^#### \`[a-z][a-zA-Z]*\`$" prosemirror-docs.md | head -100
```

### Find Constants and Static Methods
```bash
# Find static methods (usually class.method)
grep -n "#### \`[A-Z][a-zA-Z]*\." prosemirror-docs.md | head -50

# Find EditorState.create, Node.resolve, etc.
grep -n "EditorState\.create\|Node\.resolve\|Schema\.nodes\|Schema\.marks" prosemirror-docs.md | head -30
```

---

## Module-Specific Search Strategies

### For State Management (prosemirror-state)
```bash
# Find EditorState methods
grep -nE -A5 "^#### \`class\`\s*EditorState" prosemirror-docs.md | grep -A30 "## Methods" | head -50

# Find create, apply, reconfigure
grep -nE "#### \`(create|apply|reconfigure|toJSON|fromJSON)\`" prosemirror-docs.md | head -20

# Find transaction methods
grep -nE "#### \`(replace|insert|delete|setSelection|setStoredMarks|addMark|removeMark)\`" prosemirror-docs.md | head -30
```

### For Document Model (prosemirror-model)
```bash
# Find Node methods
grep -nE -A5 "^#### \`class\`\s*Node" prosemirror-docs.md | grep -A30 "## Methods" | head -50

# Find Node properties
grep -nE -A5 "^#### \`class\`\s*Node" prosemirror-docs.md | grep -E -A30 "type:|content:|attrs:|marks:" | head -40

# Find Schema usage
grep -n -A20 "new Schema(" prosemirror-docs.md | head -50
```

### For View (prosemirror-view)
```bash
# Find EditorView methods
grep -nE -A5 "^#### \`class\`\s*EditorView" prosemirror-docs.md | grep -A30 "## Methods" | head -50

# Find dispatch, update, destroy
grep -nE "#### \`(dispatch|update|destroy|setProps|focus|blur)\`" prosemirror-docs.md | head -20
```

### For Transformations (prosemirror-transform)
```bash
# Find Transform methods
grep -nE -A5 "^#### \`class\`\s*Transform" prosemirror-docs.md | grep -A30 "## Methods" | head -50

# Find step types
grep -n "ReplaceStep\|InsertStep\|DeleteStep\|AddMarkStep\|RemoveMarkStep" prosemirror-docs.md | head -30
```

---

## Efficient Search Workflow

### Step 1: Identify Module
```bash
# If you know the module name
grep -n "^## prosemirror-" prosemirror-docs.md | grep -E "state|model|view|transform|commands|collab"

# Or search for module header
grep -nE "^## prosemirror-state module|^## prosemirror-model module|^## prosemirror-view module" prosemirror-docs.md
```

### Step 2: Find Class/Interface/Function
```bash
# Within that module, find the specific item
# First find the module section, then search within it
LINE=$(grep -n "^## prosemirror-state module" prosemirror-docs.md | head -1 | cut -d: -f1)
# Then search from that line forward
sed -n "${LINE},$ p" prosemirror-docs.md | grep -nE "^#### \`class\`\s*EditorState" | head -1
```

### Step 3: Read Documentation
```bash
# Use line numbers from grep to read specific sections
# Example: Read lines 2340-2400
sed -n '2340,2400p' prosemirror-docs.md
```

---

## Key API Surface Areas

### State Management
- **EditorState**: `create()`, `apply()`, `reconfigure()`, `toJSON()`, `fromJSON()`
- **Transaction**: `replace()`, `insert()`, `delete()`, `setSelection()`, `setStoredMarks()`, `addMark()`, `removeMark()`
- **Selection**: `TextSelection`, `NodeSelection`, `AllSelection`
- **Plugin**: `new Plugin()`, `PluginKey`, `StateField`

### Document Model
- **Node**: `textBetween()`, `textContent()`, `firstChild()`, `lastChild()`, `child()`, `childCount()`, `nodeSize()`, `isBlock()`, `isInline()`, `isLeaf()`, `isText()`, `canReplace()`, `replace()`, `copy()`, `slice()`, `mark()`
- **Mark**: `addToSet()`, `removeFromSet()`, `isInSet()`
- **Schema**: `new Schema()`, `nodes`, `marks`
- **NodeType**: `create()`, `createAndFill()`
- **MarkType**: `create()`

### View
- **EditorView**: `dispatch()`, `update()`, `destroy()`, `setProps()`, `someProp()`, `endOfTextblock()`, `posAtCoords()`, `coordsAtPos()`, `domAtPos()`, `nodeDOM()`, `focus()`, `blur()`
- **NodeView**: Custom node rendering

### Transformations
- **Transform**: `replace()`, `insert()`, `delete()`, `addMark()`, `removeMark()`, `setNodeMarkup()`, `split()`, `join()`, `lift()`, `wrap()`, `setBlockType()`, `clearIncompatible()`
- **Step**: `apply()`, `invert()`, `map()`, `getMap()`, `merge()`
- **Mapping**: `map()`, `invert()`, `appendMapping()`

### Commands
- **Common Commands**: `deleteSelection()`, `joinBackward()`, `joinForward()`, `selectNodeBackward()`, `selectNodeForward()`, `selectAll()`, `selectTextblockStart()`, `selectTextblockEnd()`, `wrapIn()`, `setBlockType()`, `toggleMark()`, `exitCode()`, `splitBlock()`, `lift()`, `newlineInCode()`, `createParagraphNear()`, `liftEmptyBlock()`, `splitListItem()`, `sinkListItem()`, `liftListItem()`, `wrapInList()`, `unwrapInList()`, `toggleList()`, `joinUp()`, `joinDown()`, `selectParentNode()`

### Collaborative Editing
- **Collab**: `send()`, `receive()`, `getVersion()`, `getSteps()`

---

## Tips for LLM Navigation

1. **Start with Module**: Always identify which module contains what you need
2. **Use Line Numbers**: The grep commands provide line numbers - use them to jump directly to sections
3. **Context Matters**: Use `-A` and `-B` flags to get context around matches
4. **Multiple Matches**: Some items appear multiple times (duplicate content) - use `head` to limit results
5. **Hierarchy**: Understand the hierarchy: Module → Classes → Methods/Properties
6. **Source URLs**: Each section has a source URL - use these to verify against online docs if needed
7. **Guide vs Reference**: Guide sections explain concepts, Reference sections document APIs

---

## Example Use Cases

### Use Case 1: Find EditorState.create() documentation
```bash
# Step 1: Find EditorState class
grep -n "^#### \`class\`\s*EditorState" prosemirror-docs.md

# Step 2: Find create method (should be near EditorState)
grep -nE -A30 "^#### \`class\`\s*EditorState" prosemirror-docs.md | grep -A30 "#### \`create\`"
```

### Use Case 2: Find Transaction.replace() usage
```bash
# Step 1: Find Transaction class
grep -n "^#### \`class\`\s*Transaction" prosemirror-docs.md

# Step 2: Find replace method
grep -nE -A30 "^#### \`class\`\s*Transaction" prosemirror-docs.md | grep -A30 "#### \`replace\`"
```

### Use Case 3: Find Schema creation examples
```bash
# Step 1: Find Schema class
grep -n "^#### \`class\`\s*Schema" prosemirror-docs.md

# Step 2: Find usage examples
grep -n -A30 "new Schema(" prosemirror-docs.md | head -100
```

### Use Case 4: Find Node methods
```bash
# Step 1: Find Node class
grep -n "^#### \`class\`\s*Node" prosemirror-docs.md

# Step 2: Find methods section
grep -nE -A50 "^#### \`class\`\s*Node" prosemirror-docs.md | grep -A50 "## Methods" | head -100
```

### Use Case 5: Find plugin creation patterns
```bash
# Step 1: Find Plugin class
grep -n "^#### \`class\`\s*Plugin" prosemirror-docs.md

# Step 2: Find plugin examples
grep -n -A30 "new Plugin(" prosemirror-docs.md | head -100
```

### Use Case 6: Find selection types
```bash
# Step 1: Find Selection section
grep -n "^### Selection" prosemirror-docs.md | head -5

# Step 2: Find selection classes
grep -n "TextSelection\|NodeSelection\|AllSelection" prosemirror-docs.md | head -30
```

### Use Case 7: Find transform operations
```bash
# Step 1: Find Transform class
grep -n "^#### \`class\`\s*Transform" prosemirror-docs.md

# Step 2: Find transform methods
grep -nE "#### \`(replace|insert|delete|addMark|removeMark|split|join|lift|wrap)\`" prosemirror-docs.md | head -30
```

### Use Case 8: Find EditorView setup
```bash
# Step 1: Find EditorView class
grep -n "^#### \`class\`\s*EditorView" prosemirror-docs.md

# Step 2: Find constructor examples
grep -n -A30 "new EditorView(" prosemirror-docs.md | head -100
```

### Use Case 9: Find DOM parsing/serialization
```bash
# Step 1: Find DOM Representation section
grep -n "^### DOM Representation" prosemirror-docs.md | head -5

# Step 2: Find DOMParser
grep -n -A30 "DOMParser\|DOMParser\.fromSchema" prosemirror-docs.md | head -50

# Step 3: Find DOMSerializer
grep -n -A30 "DOMSerializer\|DOMSerializer\.fromSchema" prosemirror-docs.md | head -50
```

### Use Case 10: Find collaborative editing setup
```bash
# Step 1: Find collab module
grep -n "^## prosemirror-collab module" prosemirror-docs.md

# Step 2: Find collab usage
grep -n -A30 "collab\|Collaborative" prosemirror-docs.md | head -100
```

---

## Notes

- **File Size**: The documentation file is 725,125 lines - always use `head` or `tail` to limit results
- **Duplicates**: Some content appears multiple times (navigation sections, repeated guide sections) - this is normal
- **Format**: Documentation follows ProseMirror's standard format with markdown rendering
- **Source URLs**: Each section includes source URL pointing to original online documentation
- **Line Numbers**: Line numbers are approximate - content may shift if documentation is regenerated
- **Module Structure**: Each module has its own section with Classes, Methods, and Properties
- **Guide vs Reference**: Guide sections explain concepts with examples, Reference sections document APIs in detail

---

## Maintenance

When regenerating the documentation:

1. Update the "Last Updated" date
2. Verify line numbers still match (they may shift)
3. Update any module-specific sections if structure changes
4. Add new modules or classes as they appear
5. Update "Key API Surface Areas" section with new APIs

---

**End of Index**

