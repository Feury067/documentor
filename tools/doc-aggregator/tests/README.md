# Doc Aggregator Tests

Test suite for the documentation aggregator tool.

## Test Structure

- `test-runner.js` - Main test runner that executes all tests
- `test-validation.js` - Validates progress file format, hashes, timestamps
- `test-change-detection.js` - Integration test with real MDN Web APIs site
- `test-config-mdn.json` - Test configuration for MDN Web APIs

## Running Tests

### Run all tests
```bash
cd documentor/tools/doc-aggregator
node tests/test-runner.js
```

### Run individual tests
```bash
# Validation tests
node tests/test-validation.js

# Change detection test (requires network)
node tests/test-change-detection.js
```

## Test Descriptions

### test-validation.js
Validates:
- Progress file structure (object format vs old array)
- Content hash storage and format
- Timestamp storage
- Configuration structure
- Output file format

**Requirements:** Progress files must exist (run crawler first)

### test-change-detection.js
Integration test that:
1. Crawls MDN Web APIs documentation
2. Modifies a hash in progress file to simulate change
3. Runs update mode
4. Verifies change was detected and page re-crawled

**Requirements:** Network access, may take a few minutes

## Test Output

Tests exit with code 0 on success, non-zero on failure. The test runner provides a summary of passed/failed tests.

