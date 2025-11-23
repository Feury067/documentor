# Documentation Update Behavior

Comprehensive guide to how documentation updates work in the documentor repository.

## Overview

The `doc-aggregator` tool supports multiple update strategies to keep documentation current. This guide explains how updates work and best practices for maintaining documentation.

## Update Modes

The tool supports several update modes, each with different behaviors:

### Smart Mode (Default)

**How it works:**
- Re-checks pages after a configurable time interval (default: 30 days)
- Compares content hashes to detect actual changes
- Only updates pages that have changed
- Skips unchanged pages (efficient)

**Best for:** Most use cases - balances efficiency with freshness

**Configuration:**
```json
{
  "updateMode": "smart",
  "reCrawlAfterDays": 30,
  "checkContentHash": true
}
```

### Time Mode

**How it works:**
- Re-crawls pages after time interval regardless of content
- Doesn't check content hashes
- May re-crawl unchanged pages

**Best for:** When you want predictable update schedules

**Configuration:**
```json
{
  "updateMode": "time",
  "reCrawlAfterDays": 30
}
```

### Hash Mode

**How it works:**
- Always checks content hashes
- Updates only if content changed
- Requires fetching pages to compare

**Best for:** When you need maximum accuracy

**Configuration:**
```json
{
  "updateMode": "hash",
  "checkContentHash": true
}
```

### Force Mode

**How it works:**
- Always re-crawls all pages
- Ignores progress and timestamps
- Complete refresh

**Best for:** Initial crawls or complete refreshes

**Usage:**
```bash
node fetch-docs.js --force
```

### Never Mode

**How it works:**
- Never re-crawls visited pages
- Original "spider once and done" behavior

**Best for:** Static documentation that never changes

**Configuration:**
```json
{
  "updateMode": "never"
}
```

### Update Mode

**How it works:**
- Only checks/updates existing pages
- Doesn't discover new pages
- Incremental updates only

**Best for:** Quick updates without full crawl

**Usage:**
```bash
node fetch-docs.js --update
```

## How Updates Work

### Progress Tracking

The tool maintains progress files (`*-progress.json`) that track:

```json
{
  "visitedUrls": {
    "https://example.com/page": {
      "lastCrawled": 1234567890,
      "hash": "abc123...",
      "title": "Page Title",
      "url": "https://example.com/page"
    }
  },
  "processedCount": 123,
  "lastUpdate": 1234567890,
  "updateMode": "smart",
  "reCrawlAfterDays": 30
}
```

### Update Decision Logic

For each URL, the tool:

1. **Checks if visited**: If not visited → crawl (new page)
2. **Checks time expiration**: If `now > lastCrawled + reCrawlAfterDays` → check for updates
3. **Compares hash**: If hash changed → update content
4. **Skips if unchanged**: If hash same → skip (no update needed)

### Content Hash Comparison

- Uses SHA-256 hash of page content
- Detects actual content changes (not just timestamp)
- Efficient: only updates when content actually changed

## Updating Documentation

### Automatic Updates (Recommended)

**Using Smart Mode:**
```bash
# Run periodically (e.g., weekly via cron)
node fetch-docs.js --update
```

The tool automatically:
- Checks pages that expired (time-based)
- Compares hashes to detect changes
- Updates only changed pages
- Skips unchanged content

### Manual Updates

**Force Full Re-crawl:**
```bash
node fetch-docs.js --force
```

**Update Specific Site:**
```bash
# Edit config.json to include only the site you want
node fetch-docs.js --force
```

**Selective Update:**
1. Edit progress file (`*-progress.json`)
2. Remove URLs you want to re-crawl
3. Run update mode

### Per-Site Configuration

Different sites can have different update strategies:

```json
{
  "sites": [
    {
      "name": "Fast-Changing API",
      "updateMode": "smart",
      "reCrawlAfterDays": 7
    },
    {
      "name": "Static Docs",
      "updateMode": "never"
    }
  ]
}
```

## Update Workflow

### Recommended Workflow

1. **Initial Crawl**: Run with `--force` to crawl everything
2. **Regular Updates**: Schedule `--update` runs (weekly/monthly)
3. **Monitor Changes**: Check output files for update markers
4. **Regenerate Indexes**: Update grep indexes when content changes

### Scheduling Updates

**Using Cron (Linux/Mac):**
```bash
# Weekly updates every Monday at 2 AM
0 2 * * 1 cd /path/to/documentor/tools/doc-aggregator && node fetch-docs.js --update
```

**Using GitHub Actions:**
```yaml
name: Update Documentation
on:
  schedule:
    - cron: '0 2 * * 1'  # Weekly
jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: cd tools/doc-aggregator && node fetch-docs.js --update
```

## Output File Updates

### Update Markers

When pages are updated, output files include markers:

```markdown
### Page Title

**Source:** https://example.com/page
**Updated:** 2024-01-15T10:30:00Z
**Previous:** 2024-01-01T08:00:00Z

[Updated content here]

---
```

### File Growth

- Updates append to files (maintains history)
- Files grow over time with update markers
- Consider periodic cleanup if files become too large

## Best Practices

### Update Frequency

- **Fast-changing docs**: Weekly updates (`reCrawlAfterDays: 7`)
- **Moderate changes**: Monthly updates (`reCrawlAfterDays: 30`)
- **Static docs**: Never mode or very long intervals

### Monitoring

- Check progress files for `lastUpdate` timestamps
- Review output files for update markers
- Monitor file sizes (growing files indicate updates)

### Maintenance

- **Regular Updates**: Schedule automatic updates
- **Index Maintenance**: Regenerate indexes after updates
- **Version Control**: Commit updates to track changes
- **Cleanup**: Periodically review and clean up old progress files

## Troubleshooting

### Pages Not Updating

**Check:**
1. Is `reCrawlAfterDays` too long?
2. Is `updateMode` set to `never`?
3. Has enough time passed since last crawl?

**Solution:**
```bash
# Force update
node fetch-docs.js --force

# Or reduce reCrawlAfterDays
# Edit config.json: "reCrawlAfterDays": 0.001
```

### Too Many Updates

**Check:**
1. Is `reCrawlAfterDays` too short?
2. Is content actually changing?

**Solution:**
- Increase `reCrawlAfterDays`
- Use `never` mode for static docs
- Check if source site is frequently changing

### Hash Mismatches

If hashes don't match but content looks the same:
- Check for dynamic content (ads, timestamps)
- Verify HTML extraction is consistent
- Consider using `time` mode instead of `hash`

## Advanced Configuration

### CLI Overrides

Override config settings via CLI:

```bash
# Set update mode
node fetch-docs.js --mode smart

# Set re-crawl interval
node fetch-docs.js --days 7

# Disable hash checking
node fetch-docs.js --no-hash
```

### Environment Variables

Future enhancement: Could support environment variables for configuration.

## See Also

- [Documentation Guide](DOCUMENTATION.md) - Catalog of available documentation
- [Doc Aggregator README](../../tools/doc-aggregator/README.md) - Tool documentation
- [Create Grep Index](../../prompts/create-grep-index.md) - Index creation guide

