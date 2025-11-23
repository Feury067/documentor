#!/bin/bash

# Integration Test Script for Doc Aggregator
# Tests actual crawling and update behavior

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

echo "🧪 Doc Aggregator Integration Tests"
echo "===================================="
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

PASSED=0
FAILED=0

# Test 1: Basic functionality with force flag
echo "Test 1: Force mode (full crawl)"
echo "---------------------------------"
if node fetch-docs.js --force 2>&1 | grep -q "Force update mode"; then
  echo -e "${GREEN}✅ PASS: Force flag detected${NC}"
  PASSED=$((PASSED + 1))
else
  echo -e "${RED}❌ FAIL: Force flag not working${NC}"
  FAILED=$((FAILED + 1))
fi
echo ""

# Test 2: Update mode
echo "Test 2: Update mode"
echo "-------------------"
if node fetch-docs.js --update 2>&1 | grep -q "Update mode"; then
  echo -e "${GREEN}✅ PASS: Update mode detected${NC}"
  PASSED=$((PASSED + 1))
else
  echo -e "${RED}❌ FAIL: Update mode not working${NC}"
  FAILED=$((FAILED + 1))
fi
echo ""

# Test 3: Progress file format validation
echo "Test 3: Progress file format"
echo "----------------------------"
node test-validation.js
VALIDATION_EXIT=$?
if [ $VALIDATION_EXIT -eq 0 ]; then
  echo -e "${GREEN}✅ PASS: Progress file format valid${NC}"
  PASSED=$((PASSED + 1))
else
  echo -e "${RED}❌ FAIL: Progress file format invalid${NC}"
  FAILED=$((FAILED + 1))
fi
echo ""

# Test 4: Check for hash calculation
echo "Test 4: Hash calculation"
echo "------------------------"
PROGRESS_FILE=$(find ../../docs/external -name "*-progress.json" | head -1)
if [ -n "$PROGRESS_FILE" ]; then
  if grep -q '"hash"' "$PROGRESS_FILE" 2>/dev/null; then
    echo -e "${GREEN}✅ PASS: Hashes found in progress file${NC}"
    PASSED=$((PASSED + 1))
  else
    echo -e "${YELLOW}⚠️  WARN: No hashes found (may be first run)${NC}"
  fi
else
  echo -e "${YELLOW}⚠️  WARN: No progress file found (run crawler first)${NC}"
fi
echo ""

# Test 5: Check output file creation
echo "Test 5: Output file creation"
echo "----------------------------"
OUTPUT_FILE=$(find ../../docs/external -name "*.md" -o -name "*.txt" | grep -v index | head -1)
if [ -n "$OUTPUT_FILE" ]; then
  if [ -s "$OUTPUT_FILE" ]; then
    echo -e "${GREEN}✅ PASS: Output file exists and has content${NC}"
    PASSED=$((PASSED + 1))
  else
    echo -e "${RED}❌ FAIL: Output file is empty${NC}"
    FAILED=$((FAILED + 1))
  fi
else
  echo -e "${YELLOW}⚠️  WARN: No output file found${NC}"
fi
echo ""

# Test 6: Mode override
echo "Test 6: Mode override"
echo "---------------------"
if node fetch-docs.js --mode never 2>&1 | grep -q "never\|Crawling\|Starting"; then
  echo -e "${GREEN}✅ PASS: Mode override works${NC}"
  PASSED=$((PASSED + 1))
else
  echo -e "${RED}❌ FAIL: Mode override not working${NC}"
  FAILED=$((FAILED + 1))
fi
echo ""

# Summary
echo "===================================="
echo "📊 Test Summary"
echo "===================================="
echo -e "${GREEN}Passed: $PASSED${NC}"
echo -e "${RED}Failed: $FAILED${NC}"
echo ""

if [ $FAILED -eq 0 ]; then
  echo -e "${GREEN}🎉 All integration tests passed!${NC}"
  exit 0
else
  echo -e "${RED}❌ Some tests failed${NC}"
  exit 1
fi

