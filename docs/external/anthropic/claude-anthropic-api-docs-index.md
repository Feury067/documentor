# Claude Anthropic API Documentation Index

**Purpose**: This index provides regex patterns and grep commands to efficiently navigate the Claude Anthropic API documentation (`claude-anthropic-api-docs.txt`).

**File Location**: `docs/external/anthropic/claude-anthropic-api-docs.txt` (89,809 lines)

**Last Updated**: Generated from spidered documentation on 2025-11-22

**Note**: Most grep commands use the `-E` flag for extended regular expressions. This enables proper handling of alternation (`|`) and other regex features.

---

## Quick Navigation Commands

### Find Main Documentation Sections
```bash
# Find API endpoints (Messages, Models, etc.)
grep -n "^# Messages$" claude-anthropic-api-docs.txt
grep -n "^# List Models$" claude-anthropic-api-docs.txt
grep -n "^# Get a Model$" claude-anthropic-api-docs.txt

# Find major feature sections
grep -n "^# (Beta headers|Client SDKs|Errors|Features overview|Models overview)" claude-anthropic-api-docs.txt

# Find Agent SDK sections
grep -n "^# Agent SDK" claude-anthropic-api-docs.txt

# Find tool-related sections
grep -n "^# .*tool" claude-anthropic-api-docs.txt | head -20
```

### Find API Endpoints
```bash
# Find specific endpoint documentation
grep -n "^# Messages$" claude-anthropic-api-docs.txt
grep -n "^# Count Message tokens$" claude-anthropic-api-docs.txt
grep -n "^# Create a Message Batch$" claude-anthropic-api-docs.txt

# Find all endpoint sections
grep -nE "^# (post|get|put|delete|patch) /v1/" claude-anthropic-api-docs.txt
```

### Find Source URLs
```bash
# Find source URL patterns
grep -n "^Source: https://docs.claude.com" claude-anthropic-api-docs.txt | head -50

# Find specific documentation sections by URL pattern
grep -n "docs.claude.com/en/api/" claude-anthropic-api-docs.txt | head -30
grep -n "docs.claude.com/en/docs/" claude-anthropic-api-docs.txt | head -30
```

---

## Documentation Organization

The documentation is organized into **main sections**:

1. **API Reference** - Core API endpoints (Messages, Models, Batches, Files, etc.)
2. **Client SDKs** - Language-specific SDK documentation
3. **Agent SDK** - Agent SDK reference and guides
4. **Tools** - Tool use documentation (Bash, Code Execution, Computer Use, etc.)
5. **Models** - Model information, selection, migration guides
6. **Features** - Advanced features (Extended Thinking, Citations, Context Editing, etc.)
7. **Guides** - Best practices, prompt engineering, use cases, guardrails
8. **Admin API** - Organization and workspace management
9. **Agent Skills** - Agent Skills documentation
10. **MCP** - Model Context Protocol documentation
11. **Getting Started** - Introductory guides and tutorials
12. **Reference** - Versions, glossary, content moderation, regions
13. **Migration** - Migration guides and compatibility information
14. **Claude Developer Platform** - Developer platform and adaptive editor
15. **FAQ** - Frequently asked questions
16. **Additional APIs** - Analytics API, platform integrations

---

## Section 1: API Reference

**Purpose**: Core API endpoints and reference documentation.

### Key Sections

#### API Endpoints Overview
```bash
# Find main API endpoint sections
grep -n "^# Messages$" claude-anthropic-api-docs.txt
grep -n "^# Count Message tokens$" claude-anthropic-api-docs.txt
grep -n "^# Get a Model$" claude-anthropic-api-docs.txt
grep -n "^# List Models$" claude-anthropic-api-docs.txt
grep -n "^# Create a Message Batch$" claude-anthropic-api-docs.txt
grep -n "^# Retrieve Message Batch Results$" claude-anthropic-api-docs.txt
grep -n "^# Retrieve a Message Batch$" claude-anthropic-api-docs.txt

# Find all endpoint documentation
grep -nE "^# (Messages|Count Message tokens|Get a Model|List Models|Create a Message Batch|Retrieve Message Batch|Cancel a Message Batch|Delete a Message Batch|List Message Batches|Download a File|Create a File|Delete a File|List Files|Get File Metadata)" claude-anthropic-api-docs.txt
```

#### Beta Headers
```bash
# Find beta headers section
grep -n "^# Beta headers$" claude-anthropic-api-docs.txt

# Find beta headers source URL
grep -n "Source: https://docs.claude.com/en/api/beta-headers$" claude-anthropic-api-docs.txt

# Find beta feature usage
grep -n "beta.*header\|anthropic-beta" claude-anthropic-api-docs.txt | head -20
```

#### Messages API
```bash
# Find Messages API section
grep -n "^# Messages$" claude-anthropic-api-docs.txt

# Find Messages API source URL
grep -n "Source: https://docs.claude.com/en/api/messages$" claude-anthropic-api-docs.txt

# Find Messages API usage
grep -n "Using the Messages API" claude-anthropic-api-docs.txt
```

#### Models API
```bash
# Find Models API sections
grep -nE "^# (Get a Model|List Models)$" claude-anthropic-api-docs.txt

# Find model information
grep -n "model.*information\|model.*details" claude-anthropic-api-docs.txt | head -20
```

#### Batch Processing
```bash
# Find batch processing sections
grep -nE "^# (Create a Message Batch|Retrieve Message Batch|Batch processing|Message Batches API)" claude-anthropic-api-docs.txt

# Find batch management endpoints
grep -nE "^# (Cancel a Message Batch|Delete a Message Batch|List Message Batches)$" claude-anthropic-api-docs.txt

# Find batch API source URLs
grep -n "docs.claude.com/en/api.*batch" claude-anthropic-api-docs.txt
```

#### Files API
```bash
# Find Files API section
grep -n "^# Files API$" claude-anthropic-api-docs.txt

# Find Files API endpoints
grep -nE "^# (Download a File|Create a File|Delete a File|List Files|Get File Metadata)$" claude-anthropic-api-docs.txt

# Find Files API source URLs
grep -n "docs.claude.com/en/docs/build-with-claude/files" claude-anthropic-api-docs.txt
```

#### Errors and Error Handling
```bash
# Find errors section
grep -n "^# Errors$" claude-anthropic-api-docs.txt

# Find error types
grep -nE "^## (HTTP errors|Request size limits|Error shapes|Request id|Long requests)" claude-anthropic-api-docs.txt

# Find error handling documentation
grep -n "error.*handling\|Error handling" claude-anthropic-api-docs.txt | head -20
```

#### Rate Limits and Service Tiers
```bash
# Find rate limits section
grep -n "^# Rate limits$" claude-anthropic-api-docs.txt

# Find service tiers section
grep -n "^# Service tiers$" claude-anthropic-api-docs.txt

# Find rate limit source URLs
grep -n "docs.claude.com/en/api/rate-limits\|docs.claude.com/en/api/service-tiers" claude-anthropic-api-docs.txt
```

---

## Section 2: Client SDKs

**Purpose**: Language-specific SDK documentation and installation instructions.

### Key Sections

#### SDK Overview
```bash
# Find Client SDKs main section
grep -n "^# Client SDKs$" claude-anthropic-api-docs.txt

# Find SDK source URL
grep -n "Source: https://docs.claude.com/en/api/client-sdks$" claude-anthropic-api-docs.txt
```

#### Language-Specific SDKs
```bash
# Find Python SDK
grep -n "^## Python$" claude-anthropic-api-docs.txt

# Find TypeScript/JavaScript SDK
grep -n "^## TypeScript$" claude-anthropic-api-docs.txt

# Find Java SDK
grep -n "^## Java$" claude-anthropic-api-docs.txt

# Find Go SDK
grep -n "^## Go$" claude-anthropic-api-docs.txt

# Find C# SDK
grep -n "^## C#" claude-anthropic-api-docs.txt

# Find Ruby SDK
grep -n "^## Ruby$" claude-anthropic-api-docs.txt

# Find PHP SDK
grep -n "^## PHP$" claude-anthropic-api-docs.txt

# Find all SDK sections
grep -nE "^## (Python|TypeScript|Java|Go|C#|Ruby|PHP)$" claude-anthropic-api-docs.txt
```

#### Beta Namespace
```bash
# Find beta namespace documentation
grep -n "^## Beta namespace in client SDKs$" claude-anthropic-api-docs.txt

# Find beta features in SDKs
grep -n "beta.*namespace\|beta.*SDK" claude-anthropic-api-docs.txt | head -20
```

---

## Section 3: Agent SDK

**Purpose**: Agent SDK reference, guides, and best practices.

### Key Sections

#### Agent SDK Overview
```bash
# Find Agent SDK main sections
grep -n "^# Agent SDK" claude-anthropic-api-docs.txt

# Find Agent SDK overview
grep -n "^# Agent SDK overview$" claude-anthropic-api-docs.txt

# Find Agent SDK source URLs
grep -n "docs.claude.com/en/docs/agent-sdk" claude-anthropic-api-docs.txt | head -20
```

#### Agent SDK Reference
```bash
# Find Python Agent SDK reference
grep -n "^# Agent SDK reference - Python$" claude-anthropic-api-docs.txt

# Find TypeScript Agent SDK reference
grep -n "^# Agent SDK reference - TypeScript$" claude-anthropic-api-docs.txt

# Find SDK installation instructions
grep -n "pip install claude-agent-sdk\|npm install.*agent" claude-anthropic-api-docs.txt
```

#### Agent SDK Features
```bash
# Find custom tools in SDK
grep -n "^# Custom Tools$" claude-anthropic-api-docs.txt

# Find session management
grep -n "^# Session Management$" claude-anthropic-api-docs.txt

# Find Agent Skills in SDK
grep -n "^# Agent Skills in the SDK$" claude-anthropic-api-docs.txt

# Find slash commands
grep -n "^# Slash Commands in the SDK$" claude-anthropic-api-docs.txt

# Find subagents
grep -n "^# Subagents in the SDK$" claude-anthropic-api-docs.txt

# Find todo lists
grep -n "^# Todo Lists$" claude-anthropic-api-docs.txt

# Find streaming input
grep -n "^# Streaming Input$" claude-anthropic-api-docs.txt

# Find MCP in SDK
grep -n "^# MCP in the SDK$" claude-anthropic-api-docs.txt

# Find plugins
grep -n "^# Plugins in the SDK$" claude-anthropic-api-docs.txt

# Find permissions
grep -n "^# (Handling Permissions|SDK Permissions)$" claude-anthropic-api-docs.txt
```

#### Agent SDK Configuration
```bash
# Find project guidelines
grep -n "^# Project Guidelines$" claude-anthropic-api-docs.txt

# Find system prompt modification
grep -n "^# Modifying system prompts$" claude-anthropic-api-docs.txt

# Find hosting information
grep -n "^# Hosting the Agent SDK$" claude-anthropic-api-docs.txt
```

---

## Section 4: Tools

**Purpose**: Tool use documentation for various tools available to Claude.

### Key Sections

#### Tool Use Overview
```bash
# Find tool use overview
grep -n "^# Tool use with Claude$" claude-anthropic-api-docs.txt

# Find how to implement tool use
grep -n "^# How to implement tool use$" claude-anthropic-api-docs.txt

# Find tool use source URLs
grep -n "docs.claude.com/en/docs/agents-and-tools/tool-use" claude-anthropic-api-docs.txt | head -20
```

#### Specific Tools
```bash
# Find Bash tool
grep -n "^# Bash tool$" claude-anthropic-api-docs.txt

# Find code execution tool
grep -n "^# Code execution tool$" claude-anthropic-api-docs.txt

# Find computer use tool
grep -n "^# Computer use tool$" claude-anthropic-api-docs.txt

# Find memory tool
grep -n "^# Memory tool$" claude-anthropic-api-docs.txt

# Find text editor tool
grep -n "^# Text editor tool$" claude-anthropic-api-docs.txt

# Find web fetch tool
grep -n "^# Web fetch tool$" claude-anthropic-api-docs.txt

# Find web search tool
grep -n "^# Web search tool$" claude-anthropic-api-docs.txt

# Find all tool sections
grep -nE "^# (Bash|Code execution|Computer use|Memory|Text editor|Web fetch|Web search) tool$" claude-anthropic-api-docs.txt
```

#### Tool Features
```bash
# Find fine-grained tool streaming
grep -n "^# Fine-grained tool streaming$" claude-anthropic-api-docs.txt

# Find token-efficient tool use
grep -n "^# Token-efficient tool use$" claude-anthropic-api-docs.txt
```

---

## Section 5: Models

**Purpose**: Model information, selection guides, migration guides, and model-specific documentation.

### Key Sections

#### Models Overview
```bash
# Find models overview
grep -n "^# Models overview$" claude-anthropic-api-docs.txt

# Find choosing a model
grep -n "^# Choosing the right model$" claude-anthropic-api-docs.txt

# Find model comparison
grep -n "model.*comparison\|Latest models comparison" claude-anthropic-api-docs.txt | head -20
```

#### Model-Specific Documentation
```bash
# Find Claude Sonnet 3.7
grep -n "^# Claude Sonnet 3.7$" claude-anthropic-api-docs.txt

# Find Claude 4 models
grep -n "^# Claude 4 models$" claude-anthropic-api-docs.txt

# Find model deprecations
grep -n "^# Model deprecations$" claude-anthropic-api-docs.txt

# Find deprecation history
grep -n "^## Deprecation history$" claude-anthropic-api-docs.txt
```

#### Migration Guides
```bash
# Find migration to Claude 4.5
grep -n "^# Migrating to Claude 4.5$" claude-anthropic-api-docs.txt

# Find migration steps
grep -n "Migration steps\|migration checklist" claude-anthropic-api-docs.txt | head -20

# Find migration from specific models
grep -n "Migrating from.*to" claude-anthropic-api-docs.txt | head -20
```

#### Model Features
```bash
# Find what's new in Claude 4.5
grep -n "^# What's new in Claude 4.5$" claude-anthropic-api-docs.txt

# Find model improvements
grep -n "Key improvements\|improvements in" claude-anthropic-api-docs.txt | head -20
```

#### Pricing
```bash
# Find pricing information
grep -n "^# Pricing$" claude-anthropic-api-docs.txt

# Find cost tracking
grep -n "^# Tracking Costs and Usage$" claude-anthropic-api-docs.txt

# Find SDK cost tracking
grep -n "^# SDK Cost Tracking$" claude-anthropic-api-docs.txt
```

---

## Section 6: Features

**Purpose**: Advanced features and capabilities documentation.

### Key Sections

#### Features Overview
```bash
# Find features overview
grep -n "^# Features overview$" claude-anthropic-api-docs.txt

# Find core capabilities
grep -n "^## Core capabilities$" claude-anthropic-api-docs.txt

# Find tools section in features
grep -n "^## Tools$" claude-anthropic-api-docs.txt
```

#### Core Features
```bash
# Find extended thinking
grep -n "Extended thinking\|extended-thinking" claude-anthropic-api-docs.txt | head -20

# Find citations
grep -n "^# Citations$" claude-anthropic-api-docs.txt

# Find context editing
grep -n "^# Context editing$" claude-anthropic-api-docs.txt

# Find context windows
grep -n "^# Context windows$" claude-anthropic-api-docs.txt

# Find embeddings
grep -n "^# Embeddings$" claude-anthropic-api-docs.txt

# Find files API
grep -n "^# Files API$" claude-anthropic-api-docs.txt

# Find prompt caching
grep -n "^# Prompt caching$" claude-anthropic-api-docs.txt

# Find search results
grep -n "^# Search results$" claude-anthropic-api-docs.txt

# Find structured outputs
grep -n "^# Structured outputs$" claude-anthropic-api-docs.txt

# Find streaming messages
grep -n "^# Streaming Messages$" claude-anthropic-api-docs.txt

# Find token counting
grep -n "^# Token counting$" claude-anthropic-api-docs.txt

# Find vision
grep -n "^# Vision$" claude-anthropic-api-docs.txt
```

#### Feature-Specific Guides
```bash
# Find building with extended thinking
grep -n "^# Building with extended thinking$" claude-anthropic-api-docs.txt

# Find multilingual support
grep -n "^# Multilingual support$" claude-anthropic-api-docs.txt

# Find PDF support
grep -n "^# PDF support\|PDF Processing" claude-anthropic-api-docs.txt | head -10
```

---

## Section 7: Guides and Best Practices

**Purpose**: Guides, tutorials, best practices, and use case examples.

### Key Sections

#### Prompt Engineering
```bash
# Find prompt engineering overview
grep -n "^# Prompt engineering overview$" claude-anthropic-api-docs.txt

# Find prompting best practices
grep -n "^# Prompting best practices$" claude-anthropic-api-docs.txt

# Find prompt templates
grep -n "prompt templates\|Prompt templates" claude-anthropic-api-docs.txt | head -20

# Find system prompts
grep -n "^# System Prompts$" claude-anthropic-api-docs.txt

# Find XML tags for prompts
grep -n "XML tags\|Use XML tags" claude-anthropic-api-docs.txt | head -10
```

#### Use Cases and Examples
```bash
# Find guides to common use cases
grep -n "^# Guides to common use cases$" claude-anthropic-api-docs.txt

# Find prompt library
grep -n "^# Prompt Library$" claude-anthropic-api-docs.txt

# Find example conversations
grep -n "^# Example conversation:" claude-anthropic-api-docs.txt

# Find specific use cases
grep -nE "^# (Customer support agent|Legal summarization|Ticket routing|Career coach|Code consultant)" claude-anthropic-api-docs.txt | head -20
```

#### Best Practices
```bash
# Find best practices sections
grep -n "best practices\|Best practices" claude-anthropic-api-docs.txt | head -30

# Find skill authoring best practices
grep -n "^# Skill authoring best practices$" claude-anthropic-api-docs.txt

# Find Claude 4 best practices
grep -n "Claude 4 best practices\|claude-4-best-practices" claude-anthropic-api-docs.txt | head -10
```

#### Evaluation and Testing
```bash
# Find evaluation tool
grep -n "^# Using the Evaluation Tool$" claude-anthropic-api-docs.txt

# Find evaluation guides
grep -nE "^# (Define your success criteria|Create strong empirical evaluations)$" claude-anthropic-api-docs.txt

# Find testing documentation
grep -n "test.*evaluate\|evaluation\|testing" claude-anthropic-api-docs.txt | head -20
```

#### Strengthen Guardrails
```bash
# Find guardrails sections
grep -nE "^# (Streaming refusals|Increase output consistency|Keep Claude in character|Mitigate jailbreaks|Reduce hallucinations|Reducing latency|Reduce prompt leak)$" claude-anthropic-api-docs.txt

# Find guardrails source URLs
grep -n "docs.claude.com/en/docs/test-and-evaluate/strengthen-guardrails" claude-anthropic-api-docs.txt
```

#### Prompt Tools
```bash
# Find prompt generation tools
grep -nE "^# (Generate a prompt|Improve a prompt|Templatize a prompt)$" claude-anthropic-api-docs.txt

# Find prompt tools source URLs
grep -n "docs.claude.com/en/api.*prompt" claude-anthropic-api-docs.txt
```

---

## Section 8: Admin API

**Purpose**: Organization, workspace, and user management API documentation.

### Key Sections

#### Admin API Overview
```bash
# Find Admin API overview
grep -n "^# Admin API overview$" claude-anthropic-api-docs.txt

# Find Admin API endpoints
grep -nE "^# (Get API Key|List API Keys|Update API Keys|Get Organization Info|Get Cost Report|Get Usage Report)" claude-anthropic-api-docs.txt

# Find workspace management
grep -nE "^# (Create Workspace|Get Workspace|List Workspaces|Update Workspace|Archive Workspace)" claude-anthropic-api-docs.txt

# Find user management
grep -nE "^# (Get User|List Users|Remove User|Update User|Add Workspace Member|Delete Workspace Member)" claude-anthropic-api-docs.txt
```

#### Usage and Cost API
```bash
# Find usage and cost API
grep -n "^# Usage and Cost API$" claude-anthropic-api-docs.txt

# Find Claude Code usage report
grep -n "^# Get Claude Code Usage Report$" claude-anthropic-api-docs.txt
```

---

## Section 9: Agent Skills

**Purpose**: Agent Skills documentation for extending Claude's capabilities.

### Key Sections

#### Agent Skills Overview
```bash
# Find Agent Skills overview
grep -n "^# Agent Skills$" claude-anthropic-api-docs.txt

# Find get started with Agent Skills
grep -n "Get started with Agent Skills\|Agent Skills quickstart" claude-anthropic-api-docs.txt | head -10

# Find using Agent Skills with API
grep -n "^# Using Agent Skills with the API$" claude-anthropic-api-docs.txt
```

#### Skill Management
```bash
# Find skill API endpoints
grep -nE "^# (Create Skill|Create Skill Version|Delete Skill|Delete Skill Version|Get Skill|Get Skill Version|List Skill Versions|List Skills)$" claude-anthropic-api-docs.txt

# Find skill examples
grep -nE "^# (PDF Processing|BigQuery Data Analysis|DOCX Processing|SKILL.md)$" claude-anthropic-api-docs.txt
```

---

## Section 10: MCP (Model Context Protocol)

**Purpose**: MCP connector and remote MCP servers documentation.

### Key Sections

#### MCP Overview
```bash
# Find MCP connector
grep -n "^# MCP connector$" claude-anthropic-api-docs.txt

# Find remote MCP servers
grep -n "^# Remote MCP servers$" claude-anthropic-api-docs.txt

# Find Model Context Protocol
grep -n "^# Model Context Protocol (MCP)$" claude-anthropic-api-docs.txt
```

---

## Section 11: Getting Started and Introduction

**Purpose**: Introductory guides and getting started documentation.

### Key Sections

#### Getting Started
```bash
# Find get started guide
grep -n "^# Get started with Claude$" claude-anthropic-api-docs.txt

# Find intro to Claude
grep -n "^# Intro to Claude$" claude-anthropic-api-docs.txt

# Find use with Claude
grep -n "^# Use with Claude$" claude-anthropic-api-docs.txt
```

---

## Section 12: Reference and Migration

**Purpose**: Reference materials, migration guides, and compatibility information.

### Key Sections

#### Reference Materials
```bash
# Find versions documentation
grep -n "^# Versions$" claude-anthropic-api-docs.txt

# Find glossary
grep -n "^# Glossary$" claude-anthropic-api-docs.txt

# Find content moderation
grep -n "^# Content moderation$" claude-anthropic-api-docs.txt

# Find IP addresses
grep -n "^# IP addresses$" claude-anthropic-api-docs.txt

# Find supported regions
grep -n "^# Supported regions$" claude-anthropic-api-docs.txt
```

#### Migration and Compatibility
```bash
# Find migrating from Text Completions
grep -n "^# Migrating from Text Completions$" claude-anthropic-api-docs.txt

# Find OpenAI SDK compatibility
grep -n "^# OpenAI SDK compatibility$" claude-anthropic-api-docs.txt

# Find migration guides
grep -n "Migrating from\|migration" claude-anthropic-api-docs.txt | head -30
```

---

## Section 13: Claude Developer Platform

**Purpose**: Claude Developer Platform and Adaptive Editor documentation.

### Key Sections

#### Developer Platform
```bash
# Find Claude Developer Platform
grep -n "^# Claude Developer Platform$" claude-anthropic-api-docs.txt

# Find Adaptive editor
grep -n "^# Adaptive editor$" claude-anthropic-api-docs.txt
```

---

## Section 14: FAQ and Support

**Purpose**: Frequently asked questions and support information.

### Key Sections

#### FAQ
```bash
# Find FAQ section
grep -n "^# FAQ$" claude-anthropic-api-docs.txt

# Find common questions
grep -n "FAQ\|frequently asked\|common questions" claude-anthropic-api-docs.txt | head -20
```

---

## Section 15: Additional APIs

**Purpose**: Additional API endpoints and services.

### Key Sections

#### Claude Code Analytics API
```bash
# Find Claude Code Analytics API
grep -n "^# Claude Code Analytics API$" claude-anthropic-api-docs.txt

# Find analytics API endpoints
grep -n "Analytics API\|analytics" claude-anthropic-api-docs.txt | head -20
```

#### Platform Integrations
```bash
# Find Claude on Amazon Bedrock
grep -n "^# Claude on Amazon Bedrock$" claude-anthropic-api-docs.txt

# Find Claude on Vertex AI
grep -n "^# Claude on Vertex AI$" claude-anthropic-api-docs.txt

# Find Google Sheets add-on
grep -n "^# Google Sheets add-on$" claude-anthropic-api-docs.txt
```

---

## Common Patterns

### Finding API Endpoints
```bash
# Find all endpoint sections (pattern: # Endpoint Name)
grep -nE "^# (Messages|Count Message tokens|Get a Model|List Models|Create|Retrieve|Delete|Update|Cancel|Download|List|Get|Archive|Add|Remove)" claude-anthropic-api-docs.txt | head -50

# Find HTTP method patterns
grep -nE "^(post|get|put|delete|patch) /v1/" claude-anthropic-api-docs.txt
```

### Finding Code Examples
```bash
# Find code blocks (Python, TypeScript, etc.)
grep -nE "^```(python|typescript|bash|json|http)" claude-anthropic-api-docs.txt | head -100

# Find example code sections
grep -n "Example\|example\|Example:" claude-anthropic-api-docs.txt | head -50
```

### Finding Source URLs
```bash
# Find all source URLs
grep -n "^Source: https://docs.claude.com" claude-anthropic-api-docs.txt | head -100

# Find API reference URLs
grep -n "docs.claude.com/en/api/" claude-anthropic-api-docs.txt | head -50

# Find documentation URLs
grep -n "docs.claude.com/en/docs/" claude-anthropic-api-docs.txt | head -50
```

### Finding Beta Features
```bash
# Find beta headers section
grep -n "^# Beta headers$" claude-anthropic-api-docs.txt

# Find beta feature mentions
grep -n "beta\|Beta" claude-anthropic-api-docs.txt | head -50
```

---

## Advanced Search Patterns

### Find All Main Sections
```bash
# Find all top-level sections (single #)
grep -n "^# [A-Z]" claude-anthropic-api-docs.txt | head -100

# Extract unique section names
grep -oE "^# [A-Z][^$]*" claude-anthropic-api-docs.txt | sort -u | head -100
```

### Find Sections by Category
```bash
# Find API endpoint sections
grep -nE "^# (Messages|Models|Batches|Files|Embeddings)" claude-anthropic-api-docs.txt

# Find SDK sections
grep -nE "^# (Client SDKs|Agent SDK)" claude-anthropic-api-docs.txt

# Find tool sections
grep -nE "^# .*tool$" claude-anthropic-api-docs.txt

# Find model sections
grep -nE "^# (Models|Claude|Model deprecations|Choosing)" claude-anthropic-api-docs.txt

# Find feature sections
grep -nE "^# (Extended thinking|Citations|Context|Streaming|Structured|Vision|Embeddings)" claude-anthropic-api-docs.txt
```

### Find Configuration and Setup
```bash
# Find installation instructions
grep -n "pip install\|npm install\|go get\|Installation:" claude-anthropic-api-docs.txt | head -30

# Find setup instructions
grep -n "Get started\|Setup\|Initial setup" claude-anthropic-api-docs.txt | head -30

# Find authentication
grep -n "API.*key\|authentication\|API Key" claude-anthropic-api-docs.txt | head -30
```

---

## Efficient Search Workflow

### Step 1: Identify Category
```bash
# If you know the category (API, SDK, Tools, Models, Features, etc.)
grep -nE "^# (Messages|Client SDKs|Agent SDK|Tool use|Models|Features|Admin)" claude-anthropic-api-docs.txt

# Or search for main sections
grep -n "^# [A-Z]" claude-anthropic-api-docs.txt | head -50
```

### Step 2: Find Specific Topic
```bash
# Within that category, find the specific topic
# Example: Find Messages API
grep -n "^# Messages$" claude-anthropic-api-docs.txt

# Or find by pattern
grep -nE "^# (Messages|Models|Batches)" claude-anthropic-api-docs.txt | head -10
```

### Step 3: Read Documentation
```bash
# Use line numbers from grep to read specific sections
# Example: Read lines 400-500 (Messages API section)
sed -n '400,500p' claude-anthropic-api-docs.txt
```

---

## Key API Surface Areas

### Core API Endpoints
- **Messages**: `POST /v1/messages` - Send messages to Claude
- **Count Tokens**: `POST /v1/messages/count_tokens` - Count tokens in messages
- **Get Model**: `GET /v1/models/{model_id}` - Get model information
- **List Models**: `GET /v1/models` - List available models
- **Message Batches**: Create, retrieve, cancel, delete, and list message batches
- **Files API**: Upload, download, list, delete files, and get file metadata

### Client SDKs
- **Python**: `pip install anthropic`
- **TypeScript/JavaScript**: `npm install @anthropic-ai/sdk`
- **Java**: Maven/Gradle dependencies
- **Go**: `go get` installation
- **C#**: NuGet package
- **Ruby**: Gem installation
- **PHP**: Composer installation

### Agent SDK
- **Python SDK**: `pip install claude-agent-sdk`
- **TypeScript SDK**: npm package
- **Features**: Sessions, Skills, Slash Commands, Subagents, Custom Tools, Plugins

### Tools
- **Bash Tool**: Execute bash commands
- **Code Execution Tool**: Run Python code in sandbox
- **Computer Use Tool**: Control computer interfaces
- **Memory Tool**: Store and retrieve information
- **Text Editor Tool**: Edit files
- **Web Fetch Tool**: Fetch web content
- **Web Search Tool**: Search the web

### Models
- **Claude Sonnet 4.5**: Most intelligent model
- **Claude Haiku 4.5**: Fastest and most intelligent Haiku
- **Claude Opus 4.1**: High-performance model
- **Model Selection**: Guides for choosing the right model
- **Migration Guides**: Upgrading between model versions

### Features
- **Extended Thinking**: Enhanced reasoning capabilities
- **Citations**: Source attribution for responses
- **Context Editing**: Automatic context management
- **Context Windows**: 1M token context window
- **Files API**: Upload and manage files
- **Prompt Caching**: Reduce costs and latency
- **Structured Outputs**: Schema-conformant responses
- **Streaming**: Stream responses in real-time
- **Vision**: Process images and visual content

### Admin API
- **API Keys**: Create, list, update API keys
- **Organizations**: Get organization info
- **Workspaces**: Create, manage workspaces
- **Users**: Manage users and workspace members
- **Usage Reports**: Track usage and costs
- **Cost Reports**: Monitor spending

---

## Tips for LLM Navigation

1. **Start with Section Headers**: Main sections use `^# [A-Z]` pattern
2. **Use Line Numbers**: The grep commands provide line numbers - use them to jump directly to sections
3. **Context Matters**: Use `-A` and `-B` flags to get context around matches
4. **Multiple Matches**: Some content appears multiple times - use `head` to limit results
5. **Source URLs**: Each section has a source URL - use these to verify against online docs if needed
6. **API Endpoints**: Look for HTTP method patterns (`POST /v1/messages`, etc.)
7. **Code Examples**: Code blocks are marked with language identifiers (```python, ```typescript, etc.)
8. **Beta Features**: Beta features are marked with "beta" or "Beta" in headers

---

## Example Use Cases

### Use Case 1: Find Messages API documentation
```bash
# Step 1: Find Messages API section
grep -n "^# Messages$" claude-anthropic-api-docs.txt

# Step 2: Read the section (example line numbers)
sed -n '400,450p' claude-anthropic-api-docs.txt
```

### Use Case 2: Find Python SDK installation
```bash
# Step 1: Find Client SDKs section
grep -n "^# Client SDKs$" claude-anthropic-api-docs.txt

# Step 2: Find Python section
grep -n "^## Python$" claude-anthropic-api-docs.txt

# Step 3: Read installation instructions
# Use line numbers from grep output
```

### Use Case 3: Find tool use documentation
```bash
# Step 1: Find tool use overview
grep -n "^# Tool use with Claude$" claude-anthropic-api-docs.txt

# Step 2: Find specific tools
grep -nE "^# (Bash|Code execution|Memory|Text editor) tool$" claude-anthropic-api-docs.txt
```

### Use Case 4: Find model migration guide
```bash
# Step 1: Find migration section
grep -n "^# Migrating to Claude 4.5$" claude-anthropic-api-docs.txt

# Step 2: Find migration steps
grep -n "Migration steps\|migration checklist" claude-anthropic-api-docs.txt
```

### Use Case 5: Find extended thinking documentation
```bash
# Step 1: Find extended thinking section
grep -n "Extended thinking\|extended-thinking" claude-anthropic-api-docs.txt | head -10

# Step 2: Find building with extended thinking
grep -n "^# Building with extended thinking$" claude-anthropic-api-docs.txt
```

### Use Case 6: Find Agent SDK reference
```bash
# Step 1: Find Agent SDK reference sections
grep -n "^# Agent SDK reference" claude-anthropic-api-docs.txt

# Step 2: Find Python or TypeScript specific reference
grep -nE "^# Agent SDK reference - (Python|TypeScript)$" claude-anthropic-api-docs.txt
```

### Use Case 7: Find prompt engineering guides
```bash
# Step 1: Find prompt engineering overview
grep -n "^# Prompt engineering overview$" claude-anthropic-api-docs.txt

# Step 2: Find best practices
grep -n "^# Prompting best practices$" claude-anthropic-api-docs.txt
```

### Use Case 8: Find rate limits documentation
```bash
# Step 1: Find rate limits section
grep -n "^# Rate limits$" claude-anthropic-api-docs.txt

# Step 2: Find service tiers
grep -n "^# Service tiers$" claude-anthropic-api-docs.txt
```

### Use Case 9: Find error handling documentation
```bash
# Step 1: Find errors section
grep -n "^# Errors$" claude-anthropic-api-docs.txt

# Step 2: Find error types
grep -nE "^## (HTTP errors|Request size limits|Error shapes)" claude-anthropic-api-docs.txt
```

### Use Case 10: Find Admin API endpoints
```bash
# Step 1: Find Admin API overview
grep -n "^# Admin API overview$" claude-anthropic-api-docs.txt

# Step 2: Find specific endpoints
grep -nE "^# (Get API Key|List API Keys|Get Organization Info|Get Cost Report)$" claude-anthropic-api-docs.txt
```

### Use Case 11: Find Files API endpoints
```bash
# Step 1: Find Files API section
grep -n "^# Files API$" claude-anthropic-api-docs.txt

# Step 2: Find Files API endpoints
grep -nE "^# (Download a File|Create a File|Delete a File|List Files|Get File Metadata)$" claude-anthropic-api-docs.txt
```

### Use Case 12: Find guardrails documentation
```bash
# Step 1: Find guardrails sections
grep -nE "^# (Streaming refusals|Reduce hallucinations|Mitigate jailbreaks|Reduce prompt leak)$" claude-anthropic-api-docs.txt

# Step 2: Find guardrails source URLs
grep -n "docs.claude.com/en/docs/test-and-evaluate/strengthen-guardrails" claude-anthropic-api-docs.txt
```

### Use Case 13: Find prompt tools
```bash
# Step 1: Find prompt generation tools
grep -nE "^# (Generate a prompt|Improve a prompt|Templatize a prompt)$" claude-anthropic-api-docs.txt

# Step 2: Find prompt tools usage
grep -n "prompt.*tool\|prompt.*generator\|prompt.*improver" claude-anthropic-api-docs.txt | head -20
```

### Use Case 14: Find evaluation documentation
```bash
# Step 1: Find evaluation tool
grep -n "^# Using the Evaluation Tool$" claude-anthropic-api-docs.txt

# Step 2: Find evaluation guides
grep -nE "^# (Define your success criteria|Create strong empirical evaluations)$" claude-anthropic-api-docs.txt
```

### Use Case 15: Find migration guides
```bash
# Step 1: Find migration from Text Completions
grep -n "^# Migrating from Text Completions$" claude-anthropic-api-docs.txt

# Step 2: Find OpenAI SDK compatibility
grep -n "^# OpenAI SDK compatibility$" claude-anthropic-api-docs.txt
```

### Use Case 16: Find reference materials
```bash
# Step 1: Find versions
grep -n "^# Versions$" claude-anthropic-api-docs.txt

# Step 2: Find glossary
grep -n "^# Glossary$" claude-anthropic-api-docs.txt

# Step 3: Find supported regions
grep -n "^# Supported regions$" claude-anthropic-api-docs.txt
```

---

## Notes

- **File Size**: The documentation file is 89,809 lines - always use `head` or `tail` to limit results
- **Duplicates**: Some content appears multiple times (navigation sections, repeated headers) - this is normal
- **Format**: Documentation follows markdown format with code blocks and structured sections
- **Source URLs**: Each section includes source URL pointing to original online documentation (docs.claude.com)
- **Line Numbers**: Line numbers are approximate - content may shift if documentation is regenerated
- **Section Headers**: Main sections use single `#`, subsections use `##`, sub-subsections use `###`
- **API Endpoints**: HTTP methods and paths appear before endpoint descriptions
- **Code Examples**: Code blocks use language identifiers (python, typescript, bash, json, http, etc.)
- **Beta Features**: Beta features are marked with "beta" or "Beta" in section headers
- **URL Patterns**: API docs use `/en/api/` path, guides use `/en/docs/` path

---

## Maintenance

When regenerating the documentation:

1. Update the "Last Updated" date
2. Verify line numbers still match (they may shift)
3. Update any section-specific content if structure changes
4. Add new API endpoints, SDKs, tools, or features as they appear
5. Update "Key API Surface Areas" section with new features
6. Check for new guides, best practices, guardrails, or use cases
7. Verify source URL patterns still match
8. Update example use cases if API changes
9. Add new reference sections (Versions, Glossary, etc.) as they appear
10. Update migration guides and compatibility information
11. Check for new platform integrations or additional APIs

---

**End of Index**

