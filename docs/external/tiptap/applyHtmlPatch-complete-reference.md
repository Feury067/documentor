# Complete Reference: `applyHtmlPatch` Method

**Source**: TipTap AI Toolkit (`@tiptap-pro/ai-toolkit@3.0.0-alpha.28`)  
**Last Updated**: 2025-11-06  
**Combined from**: TipTap Docs + Library Type Definitions + Codebase Usage

---

## Overview

`applyHtmlPatch` is a direct method on the AI Toolkit that applies a list of patch operations to the current document. It provides more control than the `applyPatch` tool wrapper, including preview/review modes, metadata, and rich error handling.

---

## Method Signature

```typescript
applyHtmlPatch(
  operations: PatchOperation[],
  options?: ApplyHtmlPatchOptions
): ApplyHtmlPatchResult
```

---

## Parameters

### `operations: PatchOperation[]`

An array of patch operations to apply. Each operation can be one of two types:

#### `JumpOperation`

Navigates to a specific context in the document before applying subsequent replace operations.

```typescript
type JumpOperation = {
  type: 'jump';
  context: string;  // The context string to search for and position the cursor after
};
```

**Purpose**: Useful when the same text appears multiple times in the document. Positions the cursor at a specific location before applying replace operations.

**Example**:
```typescript
{ type: 'jump', context: '<p data-id="abc123">The quick brown fox ' }
```

#### `ReplaceOperation`

Performs the actual content modifications by removing specified text and replacing it with new text.

```typescript
type ReplaceOperation = {
  type: 'replace';
  delete: string;  // The exact text to delete (can be empty for pure insertions)
  insert: string;  // The text to insert in place of the deleted text
};
```

**Critical Behavior**:
- The `delete` text must be found **exactly** at the current cursor position for the operation to succeed
- Uses `indexOf(deleteText, cursorPosition)` for matching - requires EXACT character-by-character match
- Operations are applied sequentially; each operation modifies the document before the next runs
- If not found at cursor, searches from `fallbackCursorPosition` (usually 0 or last jump position)
- Throws `ApplyPatchError` if delete text not found EXACTLY

**Examples**:
```typescript
// Standard replace
{ type: 'replace', delete: 'jumps', insert: '<b>jumps</b>' }

// Pure insertion (no delete text)
{ type: 'replace', delete: '', insert: 'Hello World' }

// Pure deletion (no insert text)
{ type: 'replace', delete: '<p>Remove this</p>', insert: '' }
```

### `options?: ApplyHtmlPatchOptions`

Optional configuration for patch application behavior.

```typescript
interface ApplyHtmlPatchOptions {
  /**
   * The range to apply diffs to. If not provided, applies the diffs to the whole document.
   * This is useful when working with large documents that have been split into chunks.
   */
  range?: Range;
  
  /**
   * Options for controlling review behavior of the diff application
   * Allows preview mode or review mode with visual feedback
   */
  reviewOptions?: Omit<ReviewOptions, 'diffMode'>;
}
```

#### `range?: Range`

Optional range to limit patch application to a specific portion of the document.

```typescript
type Range = {
  from: number;  // Inclusive start position
  to: number;    // Exclusive end position
};
```

**Default**: If not provided, applies patches to the entire document.

#### `reviewOptions?: Omit<ReviewOptions, 'diffMode'>`

Options for controlling preview/review behavior. Note: `diffMode` is omitted from this interface (it's handled internally).

```typescript
interface ReviewOptions {
  /**
   * Whether to review the changes before or after applying them.
   * - 'disabled' - No review, changes applied immediately
   * - 'review' - Review after applying (changes already applied, user can see diff)
   * - 'preview' - Preview before applying (changes shown as suggestions, user accepts/rejects)
   * 
   * @default 'disabled'
   */
  mode?: 'disabled' | 'review' | 'preview';
  
  /**
   * Customize how suggestions are displayed.
   * Normally, suggestions are displayed as diffs where you can see the document
   * before and after the change.
   */
  displayOptions?: DisplayOptions<{ suggestion: Suggestion }>;
  
  /**
   * Extra metadata for the suggestions that can be used to store additional
   * information about them (e.g. their source or their category). It is not used
   * internally by the extension but it may help developers customize how the
   * suggestions are displayed in the UI.
   */
  metadata?: Record<string, any>;
}
```

**Important**: The TipTap documentation shows `chunkIndex` and `chunkSize` in the options, but the actual library type definition (`ApplyHtmlPatchOptions`) does **NOT** include these fields. These options are only available via `executeTool('applyPatch', ...)`.

---

## Return Value

### `ApplyHtmlPatchResult`

```typescript
interface ApplyHtmlPatchResult {
  /** Whether the document was modified */
  docChanged: boolean;
  
  /** Error if the diff application failed because not all diffs could be applied, null if successful */
  error: ApplyPatchError | null;
}
```

**Important**: The method can edit the document but return an error at the same time. This happens when some operations are applied but some fail.

### `ApplyPatchError`

Rich error object providing comprehensive context about patch application failures.

```typescript
declare class ApplyPatchError extends Error {
  /** The zero-based index of the operation that failed */
  operationIndex: number;
  
  /** Array of operations that were successfully applied before the failure */
  previousOperations: PatchOperation[];
  
  /** The operation that failed to apply */
  operation: PatchOperation;
  
  /** The content after the current cursor position when the error occurred */
  contentAfterCursor: string;
}
```

**Use Cases**:
- Debugging why a patch failed
- Understanding which operations succeeded before failure
- Inspecting document state at failure point
- Implementing retry logic with partial success handling

---

## Examples

### Basic Usage

```typescript
import { getAiToolkit } from '@tiptap-pro/ai-toolkit';

const toolkit = getAiToolkit(editor);

// Simple replace operation
const result = toolkit.applyHtmlPatch([
  { type: 'replace', delete: 'fine', insert: '<em>great</em>' }
]);

if (result.error) {
  console.error('Patch failed:', {
    operationIndex: result.error.operationIndex,
    failedOperation: result.error.operation,
    contentAfterCursor: result.error.contentAfterCursor
  });
} else {
  console.log('Patch applied successfully!', result.docChanged);
}
```

### With Preview Mode

```typescript
const toolkit = getAiToolkit(editor);

// Apply patches with preview mode (user can accept/reject)
const result = toolkit.applyHtmlPatch([
  { type: 'jump', context: '<p data-id="abc123">Original text</p>' },
  { type: 'replace', delete: '<p data-id="abc123">Old</p>', insert: '<p data-id="abc123">New</p>' }
], {
  reviewOptions: {
    mode: 'preview',  // Show suggestions before applying
    metadata: {
      source: 'universal_edit',
      summary: 'Grammar corrections'
    }
  }
});
```

### With Range Limitation

```typescript
const toolkit = getAiToolkit(editor);

// Apply patches only to a specific range
const result = toolkit.applyHtmlPatch([
  { type: 'replace', delete: 'old text', insert: 'new text' }
], {
  range: { from: 0, to: 100 },  // Only apply to first 100 characters
  reviewOptions: {
    mode: 'preview'
  }
});
```

### Multiple Operations

```typescript
const toolkit = getAiToolkit(editor);

// Apply multiple operations in sequence
const result = toolkit.applyHtmlPatch([
  { type: 'jump', context: '<p data-id="abc">Context</p>' },
  { type: 'replace', delete: 'first', insert: 'FIRST' },
  { type: 'replace', delete: 'second', insert: 'SECOND' },
  { type: 'jump', context: '<p data-id="def">Another context</p>' },
  { type: 'replace', delete: 'third', insert: 'THIRD' }
], {
  reviewOptions: {
    mode: 'preview',
    metadata: { source: 'backend' }
  }
});
```

### Error Handling

```typescript
const toolkit = getAiToolkit(editor);

const result = toolkit.applyHtmlPatch(operations, {
  reviewOptions: { mode: 'preview' }
});

if (result.error) {
  const { operationIndex, previousOperations, operation, contentAfterCursor } = result.error;
  
  console.error(`Failed at operation ${operationIndex}:`, {
    failedOperation: operation,
    successfulOperations: previousOperations.length,
    documentState: contentAfterCursor.substring(0, 100) + '...'
  });
  
  // Optionally retry with remaining operations
  if (previousOperations.length > 0) {
    const remainingOps = operations.slice(operationIndex + 1);
    // Retry logic...
  }
}
```

---

## Comparison with `executeTool('applyPatch', ...)`

| Feature | `applyHtmlPatch` (Direct Method) | `executeTool('applyPatch', ...)` (Tool Wrapper) |
|---------|----------------------------------|-------------------------------------------------|
| **Input Format** | `PatchOperation[]` array | Universal Patch Format string |
| **Parsing** | You provide parsed operations | TipTap parses string internally |
| **Options** | `range`, `reviewOptions` | `chunkSize`, `reviewOptions` (via `ExecuteToolOptions`) |
| **Error Handling** | `ApplyPatchError` with rich context | `hasError: boolean` + `output: string` |
| **Use Case** | Programmatic control, better errors | AI agent workflows, simpler API |
| **Chunking** | Not directly supported | `chunkIndex`, `chunkSize` options |

---

## Internal Behavior

### Application Algorithm

When `applyHtmlPatch` is called:

1. **Validates operations** - Ensures all operations are valid `PatchOperation` objects
2. **Gets target range** - Uses `range` option if provided, otherwise entire document
3. **Extracts HTML for range** - Gets HTML string for that character range using `getHtmlRange()`
4. **Applies operations sequentially** - Maintains a cursor position, applies each operation in order:
   - Jump operations: Search for context string, position cursor after it
   - Replace operations: Find `delete` text at cursor, replace with `insert` text
5. **Updates document** - If successful, replaces the range with modified HTML
6. **Creates suggestions** - If `mode: 'preview'`, creates suggestions for user review
7. **Returns result** - `{ docChanged, error }` with any errors encountered

### Critical Matching Behavior

- **Exact text matching**: Uses `indexOf(deleteText, cursorPosition)` - requires EXACT character-by-character match
- **Sequential application**: Operations applied one-by-one; each operation modifies the document before the next runs
- **Cursor-based matching**: Each operation searches **forward** from cursor position (never backwards)
- **Forward-only cursor movement**: The cursor can only move forward through the document:
  - After each operation: `newCursorPosition = foundIndex + insertText.length`
  - Jump operations position cursor forward to a specific context
  - Cursor never moves backwards - it only advances
- **Fallback search**: If not found at cursor, searches **forward** from `fallbackCursorPosition` (usually 0 or last jump position)
  - **Important**: Fallback also searches forward, not backwards - it just starts from an earlier position
  - The cursor itself doesn't move backwards; it just searches from an earlier starting point
- **Error on mismatch**: Throws `ApplyPatchError` if delete text not found EXACTLY

### Cursor Movement Direction

**Answer: Forward-only pass**

The cursor in `applyHtmlPatch` can **only move forward** through the document. It never moves backwards.

**How it works**:

1. **Initial position**: Cursor starts at position 0 (or after a jump operation)
2. **After each replace operation**: Cursor moves forward to `foundIndex + insertText.length`
3. **Jump operations**: Position cursor forward to a specific context location
4. **Fallback search**: If text not found at current cursor, searches **forward** from an earlier position (fallbackCursorPosition), but the cursor itself doesn't move backwards

**Example**:
```typescript
// Document: "The quick brown fox jumps over the lazy dog"
// Operations:
[
  { type: 'replace', delete: 'quick', insert: 'slow' },  // Cursor: 0 → finds at 4 → moves to 8
  { type: 'replace', delete: 'fox', insert: 'cat' }      // Cursor: 8 → searches forward → finds at 16 → moves to 19
]

// After operation 1: "The slow brown fox jumps..."
// Cursor is now at position 8 (after "slow")
// Operation 2 searches forward from 8, finds "fox" at 16, replaces it
// Cursor moves to 19 (after "cat")
```

**Why forward-only**:
- `indexOf(string, startPosition)` searches forward from the start position
- Fallback search uses `indexOf(deleteText, fallbackCursorPosition)` which also searches forward
- Cursor position is always updated forward: `newCursorPosition = foundIndex + insertText.length`

**Implications**:
- Operations must be ordered correctly (earlier operations come first)
- Cannot reference text that appears before the current cursor position
- Jump operations are essential for editing text that appears earlier in the document
- If you need to edit backwards, use jump operations to reposition the cursor

---

## Common Patterns

### Preview Mode Workflow

```typescript
// 1. Start comparison session (optional, for document comparison)
toolkit.startComparingDocuments();

// 2. Apply patches with preview mode
const result = toolkit.applyHtmlPatch(operations, {
  reviewOptions: { mode: 'preview' }
});

// 3. User reviews suggestions (via UI)
// 4. User accepts/rejects via:
//    - toolkit.applySuggestion(suggestionId)
//    - toolkit.applyAllSuggestions()
//    - toolkit.removeSuggestion(suggestionId)

// 5. Stop comparison session
toolkit.stopComparingDocuments();
```

### Streaming Patches

```typescript
// Stream multiple patch segments
for (const patchSegment of streamedPatches) {
  const operations = parsePatchString(patchSegment);
  
  const result = toolkit.applyHtmlPatch(operations, {
    reviewOptions: {
      mode: 'preview',
      metadata: { source: 'streaming', segmentIndex: index++ }
    }
  });
  
  if (result.error) {
    // Handle partial failure, continue with remaining segments
    console.warn('Segment failed:', result.error.operationIndex);
  }
}
```

### Error Recovery

```typescript
function applyPatchWithRetry(
  toolkit: AiToolkitMethods,
  operations: PatchOperation[],
  maxRetries = 3
): ApplyHtmlPatchResult {
  let result: ApplyHtmlPatchResult;
  let remainingOps = operations;
  
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    result = toolkit.applyHtmlPatch(remainingOps, {
      reviewOptions: { mode: 'preview' }
    });
    
    if (!result.error) {
      return result;  // Success!
    }
    
    // Skip failed operation and retry with remaining
    const failedIndex = result.error.operationIndex;
    remainingOps = remainingOps.slice(failedIndex + 1);
    
    if (remainingOps.length === 0) {
      break;  // No more operations to retry
    }
  }
  
  return result!;  // Return last result (may have errors)
}
```

---

## Known Issues and Limitations

### 1. Documentation Discrepancy

**Issue**: TipTap documentation (lines 35495-35497) mentions `chunkIndex` and `chunkSize` options, but these are **NOT** in the actual `ApplyHtmlPatchOptions` type definition.

**Reality**: These options are only available via `executeTool('applyPatch', ...)` with `ExecuteToolOptions`.

**Workaround**: Use `range` option to limit patch application to specific document portions.

### 2. Example Type Error

**Issue**: TipTap documentation example (line 35578) shows `type: 'replace'`, but earlier examples in the same docs incorrectly show `type: 'diff'`.

**Reality**: The correct type is `'replace'`, not `'diff'`.

### 3. Sequential Application Limitation

**Issue**: Operations are applied sequentially, so if an early operation changes the document, later operations may fail if they reference text that no longer exists.

**Mitigation**: Use jump operations to position cursor correctly, and ensure operations don't conflict with each other.

---

## Related Types and Interfaces

### `PatchOperation`

```typescript
type PatchOperation = JumpOperation | ReplaceOperation;
```

### `ReviewOptions`

```typescript
interface ReviewOptions {
  mode?: 'disabled' | 'review' | 'preview';
  diffMode?: 'detailed' | 'full';
  displayOptions?: DisplayOptions<{ suggestion: Suggestion }>;
  metadata?: Record<string, any>;
}
```

### `DisplayOptions`

```typescript
interface DisplayOptions<T = object> {
  showAsDiff?: boolean;
  hideCurrentContent?: boolean;
  diffPosition?: 'before' | 'after';
  attributes?: Record<string, any>;
  renderDecorations?: RenderDecorations<T>;
}
```

---

## References

- **TipTap Docs**: Lines 35485-35579 in `docs/external/tiptap/tiptap-docs.md`
- **Library Types**: `playground/frontend/node_modules/@tiptap-pro/ai-toolkit/dist/index.d.ts` (lines 809-837)
- **Codebase Usage**: `playground/frontend/src/lib/main-assistant-client.ts` (lines 233-284)
- **Parser Implementation**: `playground/frontend/src/lib/patch-parser.ts`

---

## Version History

- **v3.0.0-alpha.28**: Current version
- **Earlier versions**: Method was named `applyHtmlDiff` (renamed in changelog entries 37597, 37947)

