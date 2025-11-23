# Documentor

```
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║  ▗▄▄▄  ▗▄▖  ▗▄▄▖▗▖ ▗▖▗▖  ▗▖▗▄▄▄▖▗▖  ▗▖▗▄▄▄▖▗▄▖ ▗▄▄▖          ║
║  ▐▌  █▐▌ ▐▌▐▌   ▐▌ ▐▌▐▛▚▞▜▌▐▌   ▐▛▚▖▐▌  █ ▐▌ ▐▌▐▌ ▐▌         ║
║  ▐▌  █▐▌ ▐▌▐▌   ▐▌ ▐▌▐▌  ▐▌▐▛▀▀▘▐▌ ▝▜▌  █ ▐▌ ▐▌▐▛▀▚▖         ║
║  ▐▙▄▄▀▝▚▄▞▘▝▚▄▄▖▝▚▄▞▘▐▌  ▐▌▐▙▄▄▖▐▌  ▐▌  █ ▝▚▄▞▘▐▌ ▐▌         ║
║                                                              ║
║   📚  ────→  🕷️  ────→  📖  ────→  🔍  ────→  🤖   ───→  🎉    ║              
║   Docs    Spider   Aggregate  Index   AI Assistants          ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

A repository for managing and aggregating external documentation for use with AI assistants and LLM-powered tools.

## Overview

This repository contains tools and documentation for spidering, aggregating, and indexing external documentation sites. The aggregated documentation is optimized for consumption by AI assistants like Composer, Claude, and other LLM-powered tools.

## Structure

```
documentor/
├── docs/
│   ├── external/          # Aggregated documentation files (organized by source)
│   └── guide/            # Comprehensive guides and documentation
├── tools/
│   └── doc-aggregator/   # Tool for spidering documentation sites
└── prompts/              # Prompts for AI assistants
```

For a complete list of available documentation, see the [Documentation Guide](docs/guide/DOCUMENTATION.md).

## Purpose

This repository serves as a centralized location for:

1. **Documentation Aggregation**: Using the `doc-aggregator` tool to spider and consolidate external documentation sites
2. **Documentation Storage**: Storing aggregated documentation in a structured format optimized for LLM consumption
3. **Index Creation**: Creating grep indexes and other search indices for efficient document retrieval
4. **AI Assistant Integration**: Providing documentation context for AI assistants working on related projects

## Documentation Files

All aggregated documentation is stored in `docs/external/` organized by source. Each documentation set typically includes:

- **Main Documentation Files**: `.md` or `.txt` files containing the full aggregated content
- **Index Files**: `*-index.md` files containing structured indexes for quick reference
- **Progress Files**: `*-progress.json` files tracking crawl progress (used by the aggregator tool)

See the [Documentation Guide](docs/guide/DOCUMENTATION.md) for a complete catalog of available documentation.

## Tools

### Doc Aggregator

The `tools/doc-aggregator/` directory contains a Node.js tool for spidering documentation sites. See [tools/doc-aggregator/README.md](tools/doc-aggregator/README.md) for detailed usage instructions.

**Quick Start:**

1. Edit `tools/doc-aggregator/config.json` to add documentation sites
2. Run `node tools/doc-aggregator/run-direct.js`
3. Generated files appear in `docs/external/`

## Adding New Documentation

To add documentation for a new site:

1. **Configure**: Add a new site entry to `tools/doc-aggregator/config.json`
2. **Crawl**: Run the doc-aggregator tool to spider the site
3. **Index**: Create a grep index using the prompt in `prompts/` (see below)
4. **Organize**: Place files in appropriate subdirectories under `docs/external/`

## Creating Grep Indexes

After aggregating documentation, create a grep index to enable efficient search. See `prompts/create-grep-index.md` for instructions on how to use Composer to generate accurate grep indexes for any documentation file.

## Maintenance

### Updating Documentation

The doc-aggregator tool supports multiple update strategies including automatic change detection. By default, it uses **smart update mode** which automatically detects and updates changed content.

**Quick Update Options:**
- **Automatic Updates**: Run `node fetch-docs.js --update` to check for changes (recommended)
- **Force Update**: Run `node fetch-docs.js --force` for a complete re-crawl
- **Configure Updates**: Set `updateMode` and `reCrawlAfterDays` in config.json for automatic updates

For detailed information, see:
- [Documentation Guide](docs/guide/DOCUMENTATION.md) - Complete catalog of available documentation
- [Update Behavior Guide](docs/guide/UPDATE_BEHAVIOR.md) - Comprehensive guide to how updates work
- [Doc Aggregator README](tools/doc-aggregator/README.md) - Tool usage and configuration

### Best Practices

- **Regular Updates**: Periodically re-crawl documentation to capture updates
- **Version Control**: Commit documentation files to track changes over time
- **Index Maintenance**: Regenerate indexes when documentation is updated
- **Organization**: Keep related documentation in logical subdirectories

## License

This repository contains aggregated documentation from various sources. Each source maintains its own copyright and licensing. This repository is for organizational and reference purposes only.

