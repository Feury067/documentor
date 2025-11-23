# Documentation Catalog

Complete catalog of aggregated documentation available in this repository.

## Overview

All documentation is stored in `docs/external/` organized by source. Documentation is aggregated from external sites using the `doc-aggregator` tool and optimized for consumption by AI assistants and LLM-powered tools.

## Documentation Structure

Each documentation source typically includes:
- **Main documentation file(s)**: Full aggregated content (`.md` or `.txt`)
- **Index file(s)**: Structured grep indexes (`*-index.md`) for quick reference
- **Progress file(s)**: Crawl tracking (`*-progress.json`) - used by aggregator tool

## Available Documentation

### API Documentation

#### Anthropic / Claude
- **Location**: `docs/external/anthropic/`
- **Source**: Anthropic API Documentation
- **Files**:
  - `claude-anthropic-api-docs.txt` - Full API documentation
  - `claude-anthropic-api-docs-index.md` - Grep index

#### Gemini API
- **Location**: `docs/external/gemini-api-docs/`
- **Source**: Google Gemini API Documentation
- **Files**:
  - `gemini-api-docs.md` - Full API documentation
  - `gemini-api-docs-index.md` - Grep index

#### LangGraph API Reference
- **Location**: `docs/external/langgraph-api-reference/`
- **Source**: LangGraph JS API Reference
- **Files**:
  - `langgraph-api-reference.md` - Full API reference
  - `langgraph-api-reference-index.md` - Grep index

#### LangGraph Documentation
- **Location**: `docs/external/langgraph-docs-0_3_x/`
- **Source**: LangGraph Documentation (v0.3.x)
- **Files**: Comprehensive documentation including:
  - Concepts, agents, tutorials, how-tos
  - Multiple markdown files organized by topic
  - `langgraph-docs-index.md` - Grep index

### Web Technologies

#### CSS Documentation
- **Location**: `docs/external/css/`
- **Source**: MDN CSS Documentation
- **Files**:
  - `mdn-css-docs.md` - Full CSS documentation
  - `mdn-css-docs-index.md` - Grep index

#### JavaScript Documentation
- **Location**: `docs/external/javascript/`
- **Source**: JavaScript Documentation
- **Files**:
  - `javascript-docs.md` - Full JavaScript documentation

#### TypeScript Documentation
- **Location**: `docs/external/typescript/`
- **Source**: TypeScript Documentation
- **Files**:
  - `typescript-docs.md` - Full TypeScript documentation

#### React Reference
- **Location**: `docs/external/react-reference/`
- **Source**: React API Reference
- **Files**:
  - `react-reference.md` - Full React reference
  - `react-reference-index.md` - Grep index

### UI Frameworks & Libraries

#### ProseMirror
- **Location**: `docs/external/prosemirror/`
- **Source**: ProseMirror Documentation
- **Files**:
  - `prosemirror-docs.md` - Full ProseMirror documentation
  - `prosemirror-docs-index.md` - Grep index

#### Tiptap
- **Location**: `docs/external/tiptap/`
- **Source**: Tiptap Editor Documentation
- **Files**:
  - `tiptap-docs.md` - Full Tiptap documentation
  - `tiptap-docs-index.md` - Grep index
  - `applyHtmlPatch-complete-reference.md` - HTML patch reference

#### Tailwind CSS
- **Location**: `docs/external/tailwind/`
- **Source**: Tailwind CSS Documentation
- **Files**:
  - `tailwind-docs.md` - Full Tailwind CSS documentation
  - `tailwind-docs-index.md` - Grep index

## Finding Documentation

### By File Type

**Main Documentation Files:**
```bash
find docs/external -name "*.md" -o -name "*.txt" | grep -v index | grep -v progress
```

**Index Files:**
```bash
find docs/external -name "*-index.md"
```

**Progress Files:**
```bash
find docs/external -name "*-progress.json"
```

### By Topic

- **APIs**: Look in directories with "api" in the name
- **Web Technologies**: Check `css/`, `javascript/`, `typescript/`
- **UI Libraries**: Check `prosemirror/`, `tiptap/`, `tailwind/`, `react-reference/`
- **AI/ML**: Check `anthropic/`, `gemini-api-docs/`, `langgraph-*/`

## Adding New Documentation

When new documentation is added:

1. **Update this catalog** - Add an entry in the appropriate section
2. **Organize by category** - Place in logical subdirectories
3. **Create indexes** - Generate grep indexes for searchability
4. **Document source** - Note the source URL and last update date

## Documentation Maintenance

### Update Status

Documentation is updated using the `doc-aggregator` tool with smart update mode. See:
- [Update Behavior Guide](UPDATE_BEHAVIOR.md) - How updates work
- [Doc Aggregator README](../../tools/doc-aggregator/README.md) - Tool usage

### Last Updated

Check progress files (`*-progress.json`) for `lastUpdate` timestamps to see when each documentation set was last crawled.

## Usage Tips

1. **Use Index Files**: Start with `*-index.md` files for quick reference
2. **Search Main Files**: Use grep or search tools on main documentation files
3. **Check Progress**: Review progress files to understand crawl status
4. **Version Control**: Documentation files are versioned in git - check history for changes

## Contributing

To add new documentation:

1. Configure the site in `tools/doc-aggregator/config.json`
2. Run the aggregator tool
3. Create a grep index using `prompts/create-grep-index.md`
4. Update this catalog with the new entry

---

*Last updated: Check git history for latest changes*

