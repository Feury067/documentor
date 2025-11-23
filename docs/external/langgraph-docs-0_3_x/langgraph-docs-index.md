# LangGraph Documentation Index

**Purpose**: This index provides navigation patterns and grep commands to efficiently navigate the LangGraph documentation files.

**File Location**: `docs/external/langgraph-docs-0_3_x/` (60 markdown files, ~11,683 lines total)

**Last Updated**: Reviewed and updated on 2025-01-27

---

## Quick Navigation Commands

### Find Documentation by Topic
```bash
# Find all markdown files
find docs/external/langgraph-docs-0_3_x -name "*.md" -type f

# Find files containing specific topics
grep -r "persistence\|checkpoint" docs/external/langgraph-docs-0_3_x --include="*.md" | head -20

# Find multi-agent documentation
grep -r "multi-agent\|multi_agent\|supervisor\|swarm" docs/external/langgraph-docs-0_3_x --include="*.md" | head -20

# Find streaming documentation
grep -r "stream\|streaming" docs/external/langgraph-docs-0_3_x --include="*.md" | head -20

# Find memory documentation
grep -r "memory\|Memory" docs/external/langgraph-docs-0_3_x --include="*.md" | head -20
```

### Find Documentation by Section
```bash
# Concepts section
find docs/external/langgraph-docs-0_3_x/concepts -name "*.md" -type f

# Agents section
find docs/external/langgraph-docs-0_3_x/agents -name "*.md" -type f

# Tutorials section
find docs/external/langgraph-docs-0_3_x/tutorials -name "*.md" -type f

# How-tos section
find docs/external/langgraph-docs-0_3_x/how-tos -name "*.md" -type f

# Troubleshooting section
find docs/external/langgraph-docs-0_3_x/troubleshooting -name "*.md" -type f
```

---

## Documentation Organization

The documentation is organized into **5 main sections**:

1. **Concepts** - Conceptual guides explaining LangGraph concepts and architecture
2. **Agents** - Prebuilt agent components and agent development guides
3. **Tutorials** - Step-by-step tutorials and example implementations
4. **How-tos** - Goal-oriented guides for specific tasks
5. **Troubleshooting** - Error handling and debugging guides

---

## Root-Level Files

**Location**: `docs/external/langgraph-docs-0_3_x/`

### Key Files
```bash
# Main documentation index
cat docs/external/langgraph-docs-0_3_x/index.md

# LangGraph adopters (companies using LangGraph)
cat docs/external/langgraph-docs-0_3_x/adopters.md

# LLMs.txt overview
cat docs/external/langgraph-docs-0_3_x/llms-txt-overview.md

# Version history
cat docs/external/langgraph-docs-0_3_x/versions/index.md
```

---

## Section 1: Concepts

**Purpose**: Conceptual guides explaining LangGraph framework concepts, architecture, and design patterns.

**Location**: `docs/external/langgraph-docs-0_3_x/concepts/`

### Key Files

#### Core Concepts
```bash
# Concepts index
cat docs/external/langgraph-docs-0_3_x/concepts/index.md

# High-level overview
cat docs/external/langgraph-docs-0_3_x/concepts/high_level.md

# Low-level graph primitives
cat docs/external/langgraph-docs-0_3_x/concepts/low_level.md

# Agentic concepts and patterns
cat docs/external/langgraph-docs-0_3_x/concepts/agentic_concepts.md

# Functional API alternative
cat docs/external/langgraph-docs-0_3_x/concepts/functional_api.md

# FAQ
cat docs/external/langgraph-docs-0_3_x/concepts/faq.md
```

#### State Management
```bash
# Persistence and checkpointing
cat docs/external/langgraph-docs-0_3_x/concepts/persistence.md

# Memory management
cat docs/external/langgraph-docs-0_3_x/concepts/memory.md

# Streaming
cat docs/external/langgraph-docs-0_3_x/concepts/streaming.md
```

#### Multi-Agent Systems
```bash
# Multi-agent architectures
cat docs/external/langgraph-docs-0_3_x/concepts/multi_agent.md

# Find supervisor patterns
grep -r "supervisor\|Supervisor" docs/external/langgraph-docs-0_3_x/concepts --include="*.md"

# Find swarm patterns
grep -r "swarm\|Swarm" docs/external/langgraph-docs-0_3_x/concepts --include="*.md"
```

#### Human-in-the-Loop
```bash
# Human-in-the-loop concepts
cat docs/external/langgraph-docs-0_3_x/concepts/human_in_the_loop.md

# Breakpoints
cat docs/external/langgraph-docs-0_3_x/concepts/breakpoints.md

# Time travel
cat docs/external/langgraph-docs-0_3_x/concepts/time-travel.md

# v0 human-in-the-loop (legacy)
cat docs/external/langgraph-docs-0_3_x/concepts/v0-human-in-the-loop.md
```

#### LangGraph Platform
```bash
# Platform overview
cat docs/external/langgraph-docs-0_3_x/concepts/langgraph_platform.md

# Deployment options
cat docs/external/langgraph-docs-0_3_x/concepts/deployment_options.md

# LangGraph Server
cat docs/external/langgraph-docs-0_3_x/concepts/langgraph_server.md

# LangGraph Studio
cat docs/external/langgraph-docs-0_3_x/concepts/langgraph_studio.md

# LangGraph CLI
cat docs/external/langgraph-docs-0_3_x/concepts/langgraph_cli.md

# SDK
cat docs/external/langgraph-docs-0_3_x/concepts/sdk.md

# Self-hosted options
cat docs/external/langgraph-docs-0_3_x/concepts/self_hosted.md

# Bring your own cloud
cat docs/external/langgraph-docs-0_3_x/concepts/bring_your_own_cloud.md

# LangGraph Cloud
cat docs/external/langgraph-docs-0_3_x/concepts/langgraph_cloud.md

# Version history
cat docs/external/langgraph-docs-0_3_x/versions/index.md
```

#### Platform Features
```bash
# Application structure
cat docs/external/langgraph-docs-0_3_x/concepts/application_structure.md

# Assistants
cat docs/external/langgraph-docs-0_3_x/concepts/assistants.md

# Authentication
cat docs/external/langgraph-docs-0_3_x/concepts/auth.md

# Plans and pricing
cat docs/external/langgraph-docs-0_3_x/concepts/plans.md

# Template applications
cat docs/external/langgraph-docs-0_3_x/concepts/template_applications.md

# Double texting handling
cat docs/external/langgraph-docs-0_3_x/concepts/double_texting.md
```

### Search Patterns
```bash
# Find StateGraph documentation
grep -r "StateGraph\|state graph" docs/external/langgraph-docs-0_3_x/concepts --include="*.md" -i

# Find checkpoint documentation
grep -r "checkpoint\|Checkpoint" docs/external/langgraph-docs-0_3_x/concepts --include="*.md"

# Find node documentation
grep -r "node\|Node" docs/external/langgraph-docs-0_3_x/concepts --include="*.md" | head -20

# Find edge documentation
grep -r "edge\|Edge" docs/external/langgraph-docs-0_3_x/concepts --include="*.md" | head -20
```

---

## Section 2: Agents

**Purpose**: Prebuilt agent components, agent development guides, and agent-specific features.

**Location**: `docs/external/langgraph-docs-0_3_x/agents/`

### Key Files

#### Agent Overview
```bash
# Agent overview and introduction
cat docs/external/langgraph-docs-0_3_x/agents/overview.md

# Creating agents
cat docs/external/langgraph-docs-0_3_x/agents/agents.md

# Prebuilt agents
cat docs/external/langgraph-docs-0_3_x/agents/prebuilt.md

# Running agents
cat docs/external/langgraph-docs-0_3_x/agents/run_agents.md
```

#### Agent Features
```bash
# Memory integration
cat docs/external/langgraph-docs-0_3_x/agents/memory.md

# Human-in-the-loop
cat docs/external/langgraph-docs-0_3_x/agents/human-in-the-loop.md

# Streaming
cat docs/external/langgraph-docs-0_3_x/agents/streaming.md

# Multi-agent systems
cat docs/external/langgraph-docs-0_3_x/agents/multi-agent.md

# Tools
cat docs/external/langgraph-docs-0_3_x/agents/tools.md

# Context
cat docs/external/langgraph-docs-0_3_x/agents/context.md

# Models
cat docs/external/langgraph-docs-0_3_x/agents/models.md

# UI integration
cat docs/external/langgraph-docs-0_3_x/agents/ui.md
```

#### Agent Deployment
```bash
# Deployment guide
cat docs/external/langgraph-docs-0_3_x/agents/deployment.md

# Evaluations
cat docs/external/langgraph-docs-0_3_x/agents/evals.md

# MCP (Model Context Protocol)
cat docs/external/langgraph-docs-0_3_x/agents/mcp.md
```

### Search Patterns
```bash
# Find ReAct agent documentation
grep -r "ReAct\|react" docs/external/langgraph-docs-0_3_x/agents --include="*.md" -i

# Find tool calling patterns
grep -r "tool\|Tool" docs/external/langgraph-docs-0_3_x/agents --include="*.md" | head -20

# Find memory patterns
grep -r "memory\|Memory" docs/external/langgraph-docs-0_3_x/agents --include="*.md" | head -20
```

---

## Section 3: Tutorials

**Purpose**: Step-by-step tutorials and example implementations of common patterns.

**Location**: `docs/external/langgraph-docs-0_3_x/tutorials/`

### Key Files

#### Tutorial Index
```bash
# Tutorial overview
cat docs/external/langgraph-docs-0_3_x/tutorials/index.md

# Common workflows
cat docs/external/langgraph-docs-0_3_x/tutorials/workflows/index.md

# Deployment tutorial
cat docs/external/langgraph-docs-0_3_x/tutorials/deployment.md

# LangGraph Platform local server
cat docs/external/langgraph-docs-0_3_x/tutorials/langgraph-platform/local-server.md
```

### Search Patterns
```bash
# Find chatbot tutorials
find docs/external/langgraph-docs-0_3_x/tutorials -path "*chatbot*" -name "*.md"

# Find RAG tutorials
find docs/external/langgraph-docs-0_3_x/tutorials -path "*rag*" -name "*.md"

# Find multi-agent tutorials
find docs/external/langgraph-docs-0_3_x/tutorials -path "*multi_agent*" -name "*.md"

# Find reflection tutorials
find docs/external/langgraph-docs-0_3_x/tutorials -path "*reflection*" -name "*.md"
```

---

## Section 4: How-tos

**Purpose**: Goal-oriented guides for accomplishing specific tasks.

**Location**: `docs/external/langgraph-docs-0_3_x/how-tos/`

### Key Files

#### How-to Index
```bash
# Complete how-to index
cat docs/external/langgraph-docs-0_3_x/how-tos/index.md
```

#### Common Tasks
```bash
# Use remote graph
cat docs/external/langgraph-docs-0_3_x/how-tos/use-remote-graph.md

# Deploy self-hosted
cat docs/external/langgraph-docs-0_3_x/how-tos/deploy-self-hosted.md

# Custom authentication
cat docs/external/langgraph-docs-0_3_x/how-tos/auth/custom_auth.md

# Custom routes
cat docs/external/langgraph-docs-0_3_x/how-tos/http/custom_routes.md

# Custom middleware
cat docs/external/langgraph-docs-0_3_x/how-tos/http/custom_middleware.md
```

### Search Patterns
```bash
# Find persistence how-tos
grep -r "persistence\|persist" docs/external/langgraph-docs-0_3_x/how-tos --include="*.md" -i

# Find streaming how-tos
grep -r "stream\|streaming" docs/external/langgraph-docs-0_3_x/how-tos --include="*.md" -i

# Find human-in-the-loop how-tos
grep -r "human.*loop\|breakpoint\|interrupt" docs/external/langgraph-docs-0_3_x/how-tos --include="*.md" -i
```

---

## Section 5: Troubleshooting

**Purpose**: Error handling, debugging guides, and common issues.

**Location**: `docs/external/langgraph-docs-0_3_x/troubleshooting/`

### Key Files

#### Error Documentation
```bash
# Error index
cat docs/external/langgraph-docs-0_3_x/troubleshooting/errors/index.md

# Graph recursion limit
cat docs/external/langgraph-docs-0_3_x/troubleshooting/errors/GRAPH_RECURSION_LIMIT.ipynb

# Invalid concurrent graph update
cat docs/external/langgraph-docs-0_3_x/troubleshooting/errors/INVALID_CONCURRENT_GRAPH_UPDATE.ipynb

# Invalid graph node return value
cat docs/external/langgraph-docs-0_3_x/troubleshooting/errors/INVALID_GRAPH_NODE_RETURN_VALUE.ipynb

# Multiple subgraphs
cat docs/external/langgraph-docs-0_3_x/troubleshooting/errors/MULTIPLE_SUBGRAPHS.ipynb

# Unreachable node
cat docs/external/langgraph-docs-0_3_x/troubleshooting/errors/UNREACHABLE_NODE.ipynb
```

### Search Patterns
```bash
# Find error codes
grep -r "ERROR\|error_code\|lc_error_code" docs/external/langgraph-docs-0_3_x/troubleshooting --include="*.md" -i

# Find debugging guides
grep -r "debug\|Debug\|troubleshoot" docs/external/langgraph-docs-0_3_x/troubleshooting --include="*.md" -i
```

---

## Common Use Cases

### Use Case 1: Find StateGraph Documentation
```bash
# Search across all docs
grep -r "StateGraph\|state graph" docs/external/langgraph-docs-0_3_x --include="*.md" -i | head -20

# Check concepts
grep -r "StateGraph" docs/external/langgraph-docs-0_3_x/concepts --include="*.md"

# Check how-tos
grep -r "StateGraph" docs/external/langgraph-docs-0_3_x/how-tos --include="*.md"
```

### Use Case 2: Find Checkpointing Documentation
```bash
# Search for checkpoint
grep -r "checkpoint\|Checkpoint" docs/external/langgraph-docs-0_3_x --include="*.md" | head -30

# Concepts
cat docs/external/langgraph-docs-0_3_x/concepts/persistence.md

# How-tos
grep -r "persistence\|checkpoint" docs/external/langgraph-docs-0_3_x/how-tos --include="*.md" -i
```

### Use Case 3: Find Multi-Agent Patterns
```bash
# Search for multi-agent
grep -r "multi-agent\|multi_agent\|supervisor\|swarm" docs/external/langgraph-docs-0_3_x --include="*.md" -i | head -30

# Concepts
cat docs/external/langgraph-docs-0_3_x/concepts/multi_agent.md

# Agents
cat docs/external/langgraph-docs-0_3_x/agents/multi-agent.md

# Tutorials
find docs/external/langgraph-docs-0_3_x/tutorials -path "*multi_agent*" -name "*.md"
```

### Use Case 4: Find Streaming Documentation
```bash
# Search for streaming
grep -r "stream\|streaming\|Stream" docs/external/langgraph-docs-0_3_x --include="*.md" | head -30

# Concepts
cat docs/external/langgraph-docs-0_3_x/concepts/streaming.md

# Agents
cat docs/external/langgraph-docs-0_3_x/agents/streaming.md

# How-tos
grep -r "stream" docs/external/langgraph-docs-0_3_x/how-tos --include="*.md" -i
```

### Use Case 5: Find Human-in-the-Loop Documentation
```bash
# Search for human-in-the-loop
grep -r "human.*loop\|breakpoint\|interrupt" docs/external/langgraph-docs-0_3_x --include="*.md" -i | head -30

# Concepts
cat docs/external/langgraph-docs-0_3_x/concepts/human_in_the_loop.md
cat docs/external/langgraph-docs-0_3_x/concepts/breakpoints.md
cat docs/external/langgraph-docs-0_3_x/concepts/v0-human-in-the-loop.md

# Agents
cat docs/external/langgraph-docs-0_3_x/agents/human-in-the-loop.md

# How-tos
grep -r "human.*loop\|breakpoint\|interrupt" docs/external/langgraph-docs-0_3_x/how-tos --include="*.md" -i
```

### Use Case 6: Find Send API Documentation
```bash
# Search for Send API
grep -r "Send\|send\|parallel\|concurrent" docs/external/langgraph-docs-0_3_x --include="*.md" -i | head -30

# Check concepts for parallel execution
grep -r "parallel\|concurrent\|fan-out\|map-reduce" docs/external/langgraph-docs-0_3_x/concepts --include="*.md" -i

# Check how-tos for branching
grep -r "branch\|parallel\|map-reduce" docs/external/langgraph-docs-0_3_x/how-tos --include="*.md" -i
```

### Use Case 7: Find Memory Documentation
```bash
# Search for memory
grep -r "memory\|Memory" docs/external/langgraph-docs-0_3_x --include="*.md" | head -30

# Concepts
cat docs/external/langgraph-docs-0_3_x/concepts/memory.md

# Agents
cat docs/external/langgraph-docs-0_3_x/agents/memory.md

# How-tos
grep -r "memory\|conversation.*history" docs/external/langgraph-docs-0_3_x/how-tos --include="*.md" -i
```

### Use Case 8: Find Deployment Documentation
```bash
# Search for deployment
grep -r "deploy\|Deployment" docs/external/langgraph-docs-0_3_x --include="*.md" -i | head -30

# Concepts
cat docs/external/langgraph-docs-0_3_x/concepts/deployment_options.md
cat docs/external/langgraph-docs-0_3_x/concepts/langgraph_platform.md
cat docs/external/langgraph-docs-0_3_x/concepts/langgraph_cloud.md
cat docs/external/langgraph-docs-0_3_x/concepts/self_hosted.md

# Agents
cat docs/external/langgraph-docs-0_3_x/agents/deployment.md

# Tutorials
cat docs/external/langgraph-docs-0_3_x/tutorials/deployment.md

# How-tos
cat docs/external/langgraph-docs-0_3_x/how-tos/deploy-self-hosted.md
```

### Use Case 9: Find Subgraph Documentation
```bash
# Search for subgraph
grep -r "subgraph\|Subgraph" docs/external/langgraph-docs-0_3_x --include="*.md" -i | head -30

# Check concepts
grep -r "subgraph" docs/external/langgraph-docs-0_3_x/concepts --include="*.md" -i

# Check how-tos
grep -r "subgraph" docs/external/langgraph-docs-0_3_x/how-tos --include="*.md" -i
```

### Use Case 10: Find Tool Calling Documentation
```bash
# Search for tool calling
grep -r "tool.*call\|ToolNode\|tool calling" docs/external/langgraph-docs-0_3_x --include="*.md" -i | head -30

# Agents
cat docs/external/langgraph-docs-0_3_x/agents/tools.md

# How-tos
grep -r "tool" docs/external/langgraph-docs-0_3_x/how-tos --include="*.md" -i | head -20
```

---

## Key Topics Quick Reference

### Graph Construction
- **StateGraph**: `concepts/low_level.md`, `concepts/functional_api.md`
- **Nodes**: `concepts/low_level.md`
- **Edges**: `concepts/low_level.md`
- **Subgraphs**: `concepts/low_level.md`, `how-tos/index.md` (subgraph section)
- **Functional API**: `concepts/functional_api.md`
- **FAQ**: `concepts/faq.md`

### State Management
- **Persistence**: `concepts/persistence.md`, `how-tos/index.md` (persistence section)
- **Checkpoints**: `concepts/persistence.md`
- **Threads**: `concepts/persistence.md`
- **Memory**: `concepts/memory.md`, `agents/memory.md`, `how-tos/index.md` (memory section)

### Execution Patterns
- **Streaming**: `concepts/streaming.md`, `agents/streaming.md`, `how-tos/index.md` (streaming section)
- **Parallel Execution**: `how-tos/index.md` (branching, map-reduce sections)
- **Send API**: Search for "Send" or "parallel" in concepts and how-tos
- **Recursion Limits**: `how-tos/index.md` (recursion limit section)

### Agent Patterns
- **ReAct**: `agents/agents.md`, `agents/prebuilt.md`, `how-tos/index.md` (ReAct section)
- **Multi-Agent**: `concepts/multi_agent.md`, `agents/multi-agent.md`, `tutorials/index.md` (multi-agent section)
- **Supervisor**: Search for "supervisor" in concepts and tutorials
- **Swarm**: Search for "swarm" in concepts and agents

### Human-in-the-Loop
- **Breakpoints**: `concepts/breakpoints.md`, `concepts/human_in_the_loop.md`
- **Interrupts**: `concepts/human_in_the_loop.md`, `how-tos/index.md` (human-in-the-loop section)
- **Time Travel**: `concepts/time-travel.md`, `how-tos/index.md` (time travel section)
- **v0 Human-in-the-Loop (Legacy)**: `concepts/v0-human-in-the-loop.md`

### Platform & Deployment
- **LangGraph Platform**: `concepts/langgraph_platform.md`
- **LangGraph Server**: `concepts/langgraph_server.md`
- **LangGraph Studio**: `concepts/langgraph_studio.md`
- **LangGraph CLI**: `concepts/langgraph_cli.md`
- **Deployment Options**: `concepts/deployment_options.md`
- **Self-Hosted**: `concepts/self_hosted.md`, `how-tos/deploy-self-hosted.md`
- **Cloud**: `concepts/langgraph_cloud.md`
- **Bring Your Own Cloud**: `concepts/bring_your_own_cloud.md`
- **Version History**: `versions/index.md`

### Error Handling
- **Error Codes**: `troubleshooting/errors/index.md`
- **Common Errors**: `troubleshooting/errors/*.ipynb`
- **Debugging**: Search for "debug" or "troubleshoot" across docs

---

## Tips for Navigation

1. **Start with Concepts**: For understanding how LangGraph works, start with `concepts/index.md`, `concepts/high_level.md`, and `concepts/low_level.md`
2. **Use How-tos for Tasks**: For specific implementation tasks, check `how-tos/index.md` first
3. **Check Tutorials for Examples**: For complete examples, see `tutorials/index.md`
4. **Search Across Sections**: Many topics span multiple sections - use grep to find all occurrences
5. **File Names**: Most files use kebab-case (e.g., `human-in-the-loop.md`) or snake_case (e.g., `multi_agent.md`)
6. **Index Files**: Each section has an `index.md` file that provides an overview and links to related content
7. **Root Files**: Check root-level files like `index.md`, `adopters.md`, and `versions/index.md` for general information

---

## Maintenance

When updating the documentation:

1. Update the "Last Updated" date
2. Verify file counts and line counts if structure changes
3. Add new topics to relevant sections
4. Update search patterns if file organization changes
5. Keep the "Key Topics Quick Reference" section current

---

**End of Index**

