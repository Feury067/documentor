# Creating a Grep Index for Documentation

## Purpose

This prompt guides Composer (or other AI assistants) in creating an accurate grep index for aggregated documentation files. A grep index is a structured markdown file that maps important terms, concepts, functions, classes, and topics to their locations within the documentation, enabling efficient search and retrieval.

## When to Use This Prompt

Use this prompt after:
- A new documentation file has been spidered and aggregated
- An existing documentation file has been updated
- You need to create or regenerate a grep index for better searchability

## Prompt Template

```
I need you to create an accurate grep index for the documentation file at [PATH_TO_DOC_FILE].

A grep index is a structured markdown file that maps important terms, concepts, functions, classes, APIs, and topics to their locations within the documentation. This enables efficient search and retrieval when working with large documentation files.

## Requirements

1. **Read the Documentation**: First, read the entire documentation file to understand its structure and content.

2. **Identify Key Elements**: Extract and index:
   - Function names and signatures
   - Class names and methods
   - API endpoints and parameters
   - Configuration options
   - Important concepts and terminology
   - Code examples and their contexts
   - Section headings and topics
   - Common patterns and usage examples

3. **Create Structured Index**: Generate a markdown file named `[DOC_NAME]-index.md` in the same directory as the documentation file with:
   - **Header**: Document name, source URL, index generation date
   - **Table of Contents**: Links to major sections
   - **Alphabetical Index**: Terms organized A-Z with:
     - Term/concept name
     - Brief description (1-2 sentences)
     - Section/page reference (if applicable)
     - Related terms (cross-references)
   - **Category Sections**: Group related terms by category (e.g., "API Methods", "Configuration", "Concepts")
   - **Quick Reference**: Common patterns, code snippets, and examples

4. **Accuracy**: Ensure:
   - All terms are spelled correctly
   - References point to actual content in the documentation
   - Cross-references are valid
   - Descriptions accurately reflect the documentation content

5. **Completeness**: Include:
   - All public APIs and methods
   - All configuration options
   - All important concepts
   - Common use cases and patterns
   - Error handling and edge cases (if documented)

## Output Format

The index should be saved as `[DOC_NAME]-index.md` in the same directory as the source documentation file.

## Example Structure

```markdown
# [Documentation Name] - Grep Index

**Source**: [source URL]  
**Generated**: [date]  
**Source File**: [relative path to doc file]

## Table of Contents
- [API Reference](#api-reference)
- [Concepts](#concepts)
- [Configuration](#configuration)
- [Alphabetical Index](#alphabetical-index)

## API Reference
[Grouped by category]

## Concepts
[Key concepts and terminology]

## Configuration
[All configuration options]

## Alphabetical Index
### A
- **term1**: Description. See [Section Name](#section-link)
- **term2**: Description. Related: term1, term3

### B
[Continue alphabetically...]
```

Please create the grep index for [PATH_TO_DOC_FILE] now.
```

## Usage Instructions

1. **Identify the Documentation File**: Note the full path to the documentation file you want to index (e.g., `docs/external/anthropic/claude-anthropic-api-docs.txt`)

2. **Use the Prompt**: Copy the prompt template above and replace:
   - `[PATH_TO_DOC_FILE]` with the actual path to your documentation file
   - `[DOC_NAME]` with an appropriate name for the index file

3. **Provide Context**: If the documentation has specific characteristics (e.g., API reference, tutorial format, mixed content), mention these in the prompt

4. **Review the Index**: After Composer generates the index, review it for:
   - Accuracy of terms and descriptions
   - Completeness of coverage
   - Proper cross-references
   - Correct file location

5. **Iterate if Needed**: If the index is missing important terms or has inaccuracies, ask Composer to update specific sections

## Tips for Best Results

- **Be Specific**: Provide the exact path to the documentation file
- **Mention Format**: If the documentation is in a specific format (e.g., API reference, tutorial, mixed), mention it
- **Specify Scope**: If you only want to index certain sections, specify which ones
- **Request Examples**: Ask for code examples or usage patterns to be included in the index
- **Cross-Reference**: Request cross-references between related concepts

## Example Usage

```
I need you to create an accurate grep index for the documentation file at docs/external/anthropic/claude-anthropic-api-docs.txt.

[Use the full prompt template above]
```

## Maintenance

- **Regenerate After Updates**: When documentation is updated, regenerate the index
- **Version Together**: Keep index files versioned with their source documentation
- **Review Periodically**: Periodically review indexes for accuracy and completeness

