# Documentation Aggregator

A tool to spider and consolidate entire documentation sites into separate files optimized for LLM consumption.

## Features

- **Site Spidering**: Crawls entire documentation sites following internal links
- **Separate Output Files**: Creates individual files for each documentation source
- **Rate Limiting**: Respectful crawling with configurable delays
- **Redirect Handling**: Follows HTTP redirects automatically
- **Clean Text Extraction**: Converts HTML to clean text removing navigation/UI elements
- **Depth Control**: Configurable maximum crawling depth
- **Error Handling**: Reports failed URLs while continuing with successful ones
- **Resume Capability**: Saves progress and can resume interrupted crawls
- **Smart Updates**: Automatically detects and updates changed content using content hashing
- **Time-Based Re-Crawl**: Configurable automatic re-crawling after specified days
- **Force Update Mode**: Command-line option to force full re-crawl
- **Update Tracking**: Tracks content hashes and timestamps for efficient updates

## Usage

### Basic Usage

1. Edit `config.json` to add the documentation sites you want to crawl
2. Run the tool:

```bash
# Using the direct runner (recommended)
node run-direct.js

# Or using the main script directly
node fetch-docs.js [config-file]

# Or using the shell script
./run.sh
```

### CLI Options

```bash
# Force full re-crawl of all sites
node fetch-docs.js --force

# Update mode: only re-crawl changed/expired pages
node fetch-docs.js --update

# Force update for specific config file
node fetch-docs.js custom-config.json --force

# Set update mode via CLI
node fetch-docs.js --mode smart

# Set re-crawl interval (days)
node fetch-docs.js --days 7

# Disable content hash checking
node fetch-docs.js --no-hash

# Enable content hash checking (default)
node fetch-docs.js --hash
```

**CLI Flags:**
- `--force` or `-f`: Force re-crawl all URLs (ignores progress)
- `--update` or `-u`: Update mode - only crawl changed/expired pages
- `--mode <mode>`: Set update mode (smart, time, hash, force, never, update)
- `--days <number>`: Set re-crawl interval in days
- `--no-hash`: Disable content hash checking
- `--hash`: Enable content hash checking (default)

### Configuration

Edit `config.json` to customize:

```json
{
  "maxConcurrent": 4,
  "delay": 3000,
  "maxDepth": 10,
  "updateMode": "smart",
  "reCrawlAfterDays": 30,
  "checkContentHash": true,
  "sites": [
    {
      "name": "Site Name",
      "startUrl": "https://example.com/docs",
      "urlPattern": "https://example.com/docs",
      "outputFile": "site-docs.md",
      "updateMode": "smart",
      "reCrawlAfterDays": 30,
      "checkContentHash": true
    }
  ]
}
```

**Global Configuration Options:**

- `maxConcurrent`: Number of concurrent requests (keep low to be respectful, default: 2-4)
- `delay`: Milliseconds to wait between requests (default: 2000-3000)
- `maxDepth`: Maximum crawling depth to prevent infinite loops (default: 5-10)
- `updateMode`: Update strategy - `smart` (default), `time`, `hash`, `force`, `never`, or `update`
- `reCrawlAfterDays`: Days before re-checking pages for updates (default: 30)
- `checkContentHash`: Whether to compare content hashes to detect changes (default: true)

**Site-Specific Configuration Options:**

- `name`: Display name for the site (used in output and progress files)
- `startUrl`: Where to begin crawling (entry point URL)
- `urlPattern`: URL prefix pattern to stay within (only crawls URLs matching this prefix)
- `outputFile`: Output filename for this site's documentation (relative to `docs/external/`)
- `updateMode`: Override global update mode for this site
- `reCrawlAfterDays`: Override global re-crawl interval for this site
- `checkContentHash`: Override global hash checking for this site

## Update Modes

The tool supports multiple update strategies to keep documentation current:

### Update Modes Explained

1. **`smart`** (Recommended - Default)
   - Re-crawls pages after `reCrawlAfterDays` (default: 30 days)
   - Compares content hash to detect actual changes
   - Only updates if content changed or time expired
   - Most efficient: skips unchanged pages

2. **`time`**
   - Re-crawls pages after `reCrawlAfterDays` regardless of content
   - Doesn't check content hashes
   - Simpler but may re-crawl unchanged pages

3. **`hash`**
   - Always checks content hash (requires fetching)
   - Updates only if content changed
   - Most accurate but requires fetching all pages

4. **`force`**
   - Always re-crawls all pages
   - Ignores progress and timestamps
   - Use for complete refresh

5. **`never`**
   - Never re-crawls visited pages
   - Original "spider once and done" behavior
   - Use when documentation is static

6. **`update`**
   - Only checks/updates existing pages
   - Doesn't discover new pages
   - Use for incremental updates

### How Smart Update Works

1. **First Run**: Crawls all pages, stores content hashes and timestamps
2. **Subsequent Runs**: 
   - Checks if page was crawled more than `reCrawlAfterDays` ago
   - If expired: fetches page and compares hash
   - If hash changed: updates content in output file
   - If hash unchanged: skips (content hasn't changed)
   - If not expired: skips (too soon to check)
3. **New Pages**: Automatically discovered and crawled
4. **Progress Tracking**: Enhanced progress files store:
   - URL → metadata mapping (hash, timestamp, title)
   - Process count and last update time
   - Update mode configuration

### Updating Documentation

**Automatic Updates** (Recommended):
- Run with `--update` flag or set `updateMode: "smart"` in config
- Tool automatically checks and updates changed pages
- No manual intervention needed

**Force Full Re-crawl**:
```bash
node fetch-docs.js --force
```

**Manual Update** (Legacy):
- Delete the `*-progress.json` file for full re-crawl
- Edit progress file to remove specific URLs for selective update

## Output

Each site generates its own markdown file in `docs/external/` containing:
- Header with metadata (generation time, base URL, URL pattern)
- Complete documentation content with clear section boundaries
- Source URL for each page
- Page titles extracted from HTML
- Update timestamps (for updated pages)

**Update Markers**: When pages are updated, the output includes:
- `**Updated:**` timestamp showing when the update occurred
- `**Previous:**` timestamp showing when the page was last crawled before update

Files are optimized for LLM consumption with:
- Clean text extraction (removes navigation, headers, footers)
- Preserved code blocks with syntax highlighting
- Structured markdown formatting
- Clear page boundaries with separators
- Version tracking for updated content

## Directory Structure

```
doc-aggregator/
├── fetch-docs.js          # Main tool class
├── config.json            # Configuration file
├── run-direct.js          # Direct runner (recommended)
├── run.sh                 # Shell script runner
├── README.md              # This file
└── docs/                  # Output directory (created automatically)
    └── external/          # Generated documentation files
        ├── site-docs.md
        └── *-progress.json # Progress tracking files
```

## Tips

- **Start Small**: Test with a small `maxDepth` first to ensure the tool works correctly
- **Be Respectful**: Keep `delay` high (3000ms+) and `maxConcurrent` low (2-4) to avoid overwhelming servers
- **Monitor Progress**: Check `*-progress.json` files to see crawl progress
- **Interrupt Safely**: Use Ctrl+C to interrupt - progress is saved every 5 pages
- **Check Output**: Review generated markdown files to ensure content quality