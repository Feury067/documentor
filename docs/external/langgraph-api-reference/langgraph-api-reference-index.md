# LangGraph.js API Reference Index

**Purpose**: This index provides regex patterns and grep commands to efficiently navigate the massive LangGraph.js API reference documentation (`langgraph-api-reference.md`).

**File Location**: `docs/external/langgraph-api-reference/langgraph-api-reference.md` (8 lines - file needs to be generated)

**Last Updated**: Generated from spidered documentation on 2025-11-05

**Note**: Most grep commands use the `-E` flag for extended regular expressions. This enables proper handling of alternation (`|`) and other regex features. The documentation file is currently empty and needs to be generated before these patterns can be used.

---

## Quick Navigation Commands

### Find Module Documentation
```bash
# Find any module section
grep -n "^### @langchain/langgraph" langgraph-api-reference.md | head -20

# Find core langgraph module
grep -n "^# Module langgraph$" langgraph-api-reference.md

# Find specific module (e.g., checkpoint)
grep -nE "^### @langchain/langgraph-checkpoint \| LangGraph" langgraph-api-reference.md
```

### Find Class Documentation
```bash
# Find all class sections
grep -n "^## Classes$" langgraph-api-reference.md

# Find specific class (e.g., StateGraph)
grep -nE "^### StateGraph \| LangGraph" langgraph-api-reference.md

# Find class with context (3 lines before, 10 after)
grep -E -B3 -A10 "^### StateGraph \| LangGraph" langgraph-api-reference.md | head -30
```

### Find Interface Documentation
```bash
# Find all interface sections
grep -n "^## Interfaces$" langgraph-api-reference.md

# Find specific interface
grep -nE "^### Checkpoint \| LangGraph" langgraph-api-reference.md
```

---

## Module Organization

The documentation is organized into **10 main modules**:

1. **`langgraph`** - Core graph framework
2. **`@langchain/langgraph-checkpoint`** - Base checkpointing interface
3. **`@langchain/langgraph-checkpoint-mongodb`** - MongoDB checkpointing
4. **`@langchain/langgraph-checkpoint-postgres`** - PostgreSQL checkpointing
5. **`@langchain/langgraph-checkpoint-sqlite`** - SQLite checkpointing
6. **`@langchain/langgraph-checkpoint-validation`** - Checkpoint validation utilities
7. **`@langchain/langgraph-cua`** - CUA (Contextual Understanding API)
8. **`@langchain/langgraph-sdk`** - SDK for LangGraph Platform
9. **`@langchain/langgraph-supervisor`** - Supervisor patterns
10. **`@langchain/langgraph-swarm`** - Swarm/multi-agent patterns

---

## Module 1: Core `langgraph` Module

**Purpose**: Core graph construction, state management, and execution primitives.

### Key Sections

#### Module Header
```bash
# Find module overview (appears multiple times)
grep -n "^# Module langgraph$" langgraph-api-reference.md

# First occurrence around line 16055
# Contains: Overview, installation, examples, ecosystem info
```

#### Core Classes
```bash
# StateGraph - Main graph builder class
grep -nE "^### StateGraph \| LangGraph" langgraph-api-reference.md

# Graph - Lower-level graph class
grep -nE "^### Graph \| LangGraph" langgraph-api-reference.md

# CompiledGraph - Compiled graph executor
grep -nE "^### CompiledGraph \| LangGraph" langgraph-api-reference.md

# CompiledStateGraph - Compiled state graph
grep -nE "^### CompiledStateGraph \| LangGraph" langgraph-api-reference.md

# Pregel - Low-level execution engine
grep -nE "^### Pregel \| LangGraph" langgraph-api-reference.md

# PregelNode - Node in Pregel execution
grep -nE "^### PregelNode \| LangGraph" langgraph-api-reference.md
```

#### StateGraph Methods
```bash
# addNode - Add a node to the graph
grep -n "### \`addNode\`" langgraph-api-reference.md | head -5

# addEdge - Add an edge between nodes
grep -n "### \`addEdge\`" langgraph-api-reference.md | head -5

# addConditionalEdges - Add conditional edges
grep -n "### \`addConditionalEdges\`" langgraph-api-reference.md | head -5

# compile - Compile the graph
grep -n "### \`compile\`" langgraph-api-reference.md | head -5

# setEntryPoint - Set graph entry point
grep -nE "### \`setEntryPoint\`|setEntryPoint" langgraph-api-reference.md | head -5

# setFinishPoint - Set graph finish point
grep -nE "### \`setFinishPoint\`|setFinishPoint" langgraph-api-reference.md | head -5
```

#### CompiledGraph Methods
```bash
# invoke - Execute graph synchronously
grep -n "### \`invoke\`" langgraph-api-reference.md | head -10

# stream - Stream graph execution
grep -n "### \`stream\`" langgraph-api-reference.md | head -10

# streamEvents - Stream execution events
grep -n "### \`streamEvents\`" langgraph-api-reference.md | head -10

# getState - Get current state
grep -n "### \`getState\`" langgraph-api-reference.md | head -10

# updateState - Update graph state
grep -n "### \`updateState\`" langgraph-api-reference.md | head -10

# transform - Transform graph
grep -n "### \`transform\`" langgraph-api-reference.md | head -5
```

#### State Management
```bash
# Annotation - State annotation builder
grep -nE "^### Annotation \| LangGraph" langgraph-api-reference.md

# AnnotationRoot - Root annotation helper
grep -nE "^### AnnotationRoot \| LangGraph" langgraph-api-reference.md

# State Modifier - State modification utilities
grep -nE "^### State Modifier \| LangGraph" langgraph-api-reference.md

# MessagesAnnotation - Messages state annotation
grep -n "MessagesAnnotation" langgraph-api-reference.md | head -5
```

#### Channels and Values
```bash
# Topic - Topic channel for messaging
grep -nE "^### Topic \| LangGraph" langgraph-api-reference.md

# EphemeralValue - Ephemeral state channel
grep -nE "^### EphemeralValue \| LangGraph" langgraph-api-reference.md

# DynamicBarrierValue - Dynamic barrier synchronization
grep -nE "^### DynamicBarrierValue \| LangGraph" langgraph-api-reference.md

# NamedBarrierValue - Named barrier synchronization
grep -nE "^### NamedBarrierValue \| LangGraph" langgraph-api-reference.md

# BinaryOperatorAggregate - Binary operator reducer
grep -nE "^### BinaryOperatorAggregate \| LangGraph" langgraph-api-reference.md

# AnyValue - Any value channel type
grep -nE "^### AnyValue \| LangGraph" langgraph-api-reference.md

# LastValue - Last value channel
grep -nE "^### LastValue \| LangGraph" langgraph-api-reference.md

# Reduce - Reduce channel
grep -nE "^### Reduce \| LangGraph" langgraph-api-reference.md
```

#### Channel Reducers
```bash
# Find reducer patterns
grep -nE "reducer|Reducer" langgraph-api-reference.md | head -50

# Find value reducer
grep -nE "value.*reducer|value:.*=>" langgraph-api-reference.md | head -20

# Find update reducer
grep -nE "update.*reducer|update:.*=>" langgraph-api-reference.md | head -20

# Find reduce function
grep -nE "reduce.*reducer|reduce:.*=>" langgraph-api-reference.md | head -20
```

#### Send API (Parallel Execution)
```bash
# Send - Parallel execution primitive
grep -nE "^### Send \| LangGraph" langgraph-api-reference.md

# Find Send usage examples
grep -n -A20 "Send(" langgraph-api-reference.md | grep -A20 "## Methods" | head -40
```

#### Functional API
```bash
# entrypoint - Graph entrypoint function
grep -nE "^### entrypoint \| LangGraph" langgraph-api-reference.md

# getPreviousState - Get previous state helper
grep -nE "^### getPreviousState \| LangGraph" langgraph-api-reference.md

# task - Task execution helper
grep -nE "^### task \| LangGraph" langgraph-api-reference.md

# wait - Wait for condition helper
grep -nE "^### wait \| LangGraph" langgraph-api-reference.md

# waitForNames - Wait for specific names
grep -nE "^### waitForNames \| LangGraph" langgraph-api-reference.md
```

#### Execution Patterns
```bash
# Find streaming patterns
grep -nE "stream|streaming|streamMode" langgraph-api-reference.md | head -50

# Find stream modes
grep -nE "streamMode.*updates|streamMode.*values|streamMode.*messages" langgraph-api-reference.md | head -20

# Find event streaming
grep -nE "streamEvents|event.*stream" langgraph-api-reference.md | head -20

# Find batch execution
grep -nE "batch|batch.*invoke" langgraph-api-reference.md | head -20

# Find async execution
grep -nE "async.*invoke|await.*invoke" langgraph-api-reference.md | head -20
```

#### Errors
```bash
# BaseLangGraphError - Base error class
grep -nE "^### BaseLangGraphError \| LangGraph" langgraph-api-reference.md

# GraphBubbleUp - Error bubbling
grep -nE "^### GraphBubbleUp \| LangGraph" langgraph-api-reference.md

# GraphInterrupt - Interrupt exception
grep -nE "^### GraphInterrupt \| LangGraph" langgraph-api-reference.md

# GraphRecursionError - Recursion error
grep -nE "^### GraphRecursionError \| LangGraph" langgraph-api-reference.md

# GraphValueError - Value error
grep -nE "^### GraphValueError \| LangGraph" langgraph-api-reference.md

# MultipleSubgraphsError - Multiple subgraphs error
grep -nE "^### MultipleSubgraphsError \| LangGraph" langgraph-api-reference.md

# EmptyChannelError - Empty channel error
grep -nE "^### EmptyChannelError \| LangGraph" langgraph-api-reference.md

# EmptyInputError - Empty input error
grep -nE "^### EmptyInputError \| LangGraph" langgraph-api-reference.md

# InvalidUpdateError - Invalid update error
grep -nE "^### InvalidUpdateError \| LangGraph" langgraph-api-reference.md

# ParentCommand - Parent command error
grep -nE "^### ParentCommand \| LangGraph" langgraph-api-reference.md

# UnreachableNodeError - Unreachable node error
grep -nE "^### UnreachableNodeError \| LangGraph" langgraph-api-reference.md
```

#### Helper Functions
```bash
# Runtime - Runtime helper
grep -nE "^### Runtime \| LangGraph" langgraph-api-reference.md

# WaitForNames - Wait for names helper
grep -nE "^### WaitForNames \| LangGraph" langgraph-api-reference.md

# addMessages - Add messages helper
grep -nE "^### addMessages \| LangGraph" langgraph-api-reference.md

# getConfig - Get config helper
grep -nE "^### getConfig \| LangGraph" langgraph-api-reference.md

# getCurrentTaskInput - Get current task input
grep -nE "^### getCurrentTaskInput \| LangGraph" langgraph-api-reference.md

# getStore - Get store helper
grep -nE "^### getStore \| LangGraph" langgraph-api-reference.md

# getWriter - Get writer helper
grep -nE "^### getWriter \| LangGraph" langgraph-api-reference.md

# interrupt - Interrupt helper
grep -nE "^### interrupt \| LangGraph" langgraph-api-reference.md

# isCommand - Check if command
grep -nE "^### isCommand \| LangGraph" langgraph-api-reference.md

# isGraphBubbleUp - Check if graph bubble up
grep -nE "^### isGraphBubbleUp \| LangGraph" langgraph-api-reference.md

# isGraphInterrupt - Check if graph interrupt
grep -nE "^### isGraphInterrupt \| LangGraph" langgraph-api-reference.md

# isInterrupted - Check if interrupted
grep -nE "^### isInterrupted \| LangGraph" langgraph-api-reference.md

# isParentCommand - Check if parent command
grep -nE "^### isParentCommand \| LangGraph" langgraph-api-reference.md

# pushMessage - Push message helper
grep -nE "^### pushMessage \| LangGraph" langgraph-api-reference.md

# writer - Writer helper
grep -nE "^### writer \| LangGraph" langgraph-api-reference.md

# messagesStateReducer - Messages state reducer
grep -n "messagesStateReducer" langgraph-api-reference.md | head -5

# getToolOutputs - Get tool outputs helper
grep -n "^### getToolOutputs | LangGraph" langgraph-api-reference.md

# isComputerCallToolMessage - Check if computer call tool message
grep -nE "^### isComputerCallToolMessage \| LangGraph" langgraph-api-reference.md
```

#### Store and Cache Helpers
```bash
# Find store operations
grep -nE "store\.get|store\.put|store\.search" langgraph-api-reference.md | head -30

# Find cache operations
grep -nE "cache\.get|cache\.put|cache\.delete" langgraph-api-reference.md | head -30

# Find store interface methods
grep -nE "### \`get\`|### \`put\`|### \`search\`" langgraph-api-reference.md | head -30
```

#### Constants
```bash
# START - Start node constant
grep -nE "^### START \| LangGraph" langgraph-api-reference.md

# END - End node constant
grep -nE "^### END \| LangGraph" langgraph-api-reference.md

# INTERRUPT - Interrupt constant
grep -nE "^### INTERRUPT \| LangGraph" langgraph-api-reference.md

# REMOVE_ALL_MESSAGES - Remove all messages constant
grep -n "REMOVE_ALL_MESSAGES" langgraph-api-reference.md | head -5
```

#### Type Definitions
```bash
# LangGraphRunnableConfig - Runtime configuration type
grep -n "LangGraphRunnableConfig" langgraph-api-reference.md | head -10

# StateType - State type helper
grep -nE "^### StateType \| LangGraph" langgraph-api-reference.md

# StreamMode - Streaming mode enum
grep -nE "^### StreamMode \| LangGraph" langgraph-api-reference.md

# StreamOutputMap - Stream output mapping
grep -n "StreamOutputMap" langgraph-api-reference.md | head -5

# Checkpoint - Checkpoint type
grep -nE "^### Checkpoint \| LangGraph" langgraph-api-reference.md

# CheckpointTuple - Checkpoint tuple type
grep -nE "^### CheckpointTuple \| LangGraph" langgraph-api-reference.md

# StateSnapshot - State snapshot type
grep -nE "^### StateSnapshot \| LangGraph" langgraph-api-reference.md

# StateDefinition - State definition type
grep -nE "^### StateDefinition \| LangGraph" langgraph-api-reference.md

# StateGraphArgs - State graph arguments
grep -n "StateGraphArgs" langgraph-api-reference.md | head -5

# PregelOptions - Pregel options
grep -nE "^### PregelOptions \| LangGraph" langgraph-api-reference.md

# TaskOptions - Task options
grep -nE "^### TaskOptions \| LangGraph" langgraph-api-reference.md

# EntrypointOptions - Entrypoint options
grep -nE "^### EntrypointOptions \| LangGraph" langgraph-api-reference.md

# GetStateOptions - Get state options
grep -nE "^### GetStateOptions \| LangGraph" langgraph-api-reference.md

# CommandParams - Command parameters
grep -nE "^### CommandParams \| LangGraph" langgraph-api-reference.md

# RetryPolicy - Retry policy type
grep -nE "^### RetryPolicy \| LangGraph" langgraph-api-reference.md

# NodeType - Node type enum
grep -nE "^### NodeType \| LangGraph" langgraph-api-reference.md

# UpdateType - Update type enum
grep -nE "^### UpdateType \| LangGraph" langgraph-api-reference.md

# Interrupt - Interrupt type
grep -nE "^### Interrupt \| LangGraph" langgraph-api-reference.md

# Messages - Messages type
grep -nE "^### Messages \| LangGraph" langgraph-api-reference.md

# Command - Command type
grep -nE "^### Command \| LangGraph" langgraph-api-reference.md

# RemoteException - Remote exception type
grep -nE "^### RemoteException \| LangGraph" langgraph-api-reference.md

# NodeInterrupt - Node interrupt type
grep -nE "^### NodeInterrupt \| LangGraph" langgraph-api-reference.md
```

---

## Module 2: `@langchain/langgraph-checkpoint` (Base Checkpointing)

**Purpose**: Base checkpointing interface and in-memory implementation.

### Key Sections

#### Module Header
```bash
# Find checkpoint module
grep -n "^# Module @langchain/langgraph-checkpoint$" langgraph-api-reference.md

# First occurrence around line 74
# Contains: Key concepts (Checkpoint, Thread, Serde, Pending writes)
```

#### Key Concepts Section
```bash
# Checkpoint concept explanation
grep -n "^### Checkpoint $" langgraph-api-reference.md | head -3

# Thread concept explanation
grep -n "^### Thread $" langgraph-api-reference.md | head -3

# Serde concept explanation
grep -n "^### Serde $" langgraph-api-reference.md | head -3

# Pending writes concept
grep -n "^### Pending writes $" langgraph-api-reference.md | head -3
```

#### Classes
```bash
# BaseCheckpointSaver - Base checkpoint saver interface
grep -nE "^### BaseCheckpointSaver \| LangGraph" langgraph-api-reference.md

# MemorySaver - In-memory checkpoint saver
grep -nE "^### MemorySaver \| LangGraph" langgraph-api-reference.md

# BaseStore - Base store interface
grep -nE "^### BaseStore \| LangGraph" langgraph-api-reference.md

# AsyncBatchedStore - Async batched store
grep -nE "^### AsyncBatchedStore \| LangGraph" langgraph-api-reference.md

# InMemoryStore - In-memory store
grep -nE "^### InMemoryStore \| LangGraph" langgraph-api-reference.md

# BaseCache - Base cache interface
grep -nE "^### BaseCache \| LangGraph" langgraph-api-reference.md

# InMemoryCache - In-memory cache
grep -nE "^### InMemoryCache \| LangGraph" langgraph-api-reference.md

# InvalidNamespaceError - Invalid namespace error
grep -nE "^### InvalidNamespaceError \| LangGraph" langgraph-api-reference.md
```

#### Interfaces
```bash
# Checkpoint - Checkpoint interface
grep -nE "^### Checkpoint \| LangGraph" langgraph-api-reference.md

# CheckpointTuple - Checkpoint tuple interface
grep -nE "^### CheckpointTuple \| LangGraph" langgraph-api-reference.md

# ReadonlyCheckpoint - Readonly checkpoint
grep -nE "^### ReadonlyCheckpoint \| LangGraph" langgraph-api-reference.md

# ChannelProtocol - Channel protocol interface
grep -nE "^### ChannelProtocol \| LangGraph" langgraph-api-reference.md

# SendProtocol - Send protocol interface
grep -nE "^### SendProtocol \| LangGraph" langgraph-api-reference.md

# SerializerProtocol - Serializer protocol
grep -nE "^### SerializerProtocol \| LangGraph" langgraph-api-reference.md

# CheckpointMetadata - Checkpoint metadata
grep -nE "^### CheckpointMetadata \| LangGraph" langgraph-api-reference.md

# CheckpointPendingWrite - Pending write type
grep -nE "^### CheckpointPendingWrite \| LangGraph" langgraph-api-reference.md

# PendingWrite - Pending write interface
grep -nE "^### PendingWrite \| LangGraph" langgraph-api-reference.md

# PendingWriteValue - Pending write value
grep -nE "^### PendingWriteValue \| LangGraph" langgraph-api-reference.md

# Item - Store item interface
grep -nE "^### Item \| LangGraph" langgraph-api-reference.md

# SearchItem - Search item interface
grep -nE "^### SearchItem \| LangGraph" langgraph-api-reference.md

# GetOperation - Get operation interface
grep -nE "^### GetOperation \| LangGraph" langgraph-api-reference.md

# PutOperation - Put operation interface
grep -nE "^### PutOperation \| LangGraph" langgraph-api-reference.md

# SearchOperation - Search operation interface
grep -nE "^### SearchOperation \| LangGraph" langgraph-api-reference.md

# ListNamespacesOperation - List namespaces operation
grep -nE "^### ListNamespacesOperation \| LangGraph" langgraph-api-reference.md

# Operation - Operation interface
grep -nE "^### Operation \| LangGraph" langgraph-api-reference.md

# OperationResults - Operation results
grep -nE "^### OperationResults \| LangGraph" langgraph-api-reference.md

# MatchCondition - Match condition
grep -nE "^### MatchCondition \| LangGraph" langgraph-api-reference.md

# IndexConfig - Index configuration
grep -nE "^### IndexConfig \| LangGraph" langgraph-api-reference.md
```

#### Type Aliases
```bash
# CheckpointListOptions - List options
grep -nE "^### CheckpointListOptions \| LangGraph" langgraph-api-reference.md

# ChannelVersions - Channel versions type
grep -nE "^### ChannelVersions \| LangGraph" langgraph-api-reference.md

# NameSpacePath - Namespace path type
grep -nE "^### NameSpacePath \| LangGraph" langgraph-api-reference.md

# NamespaceMatchType - Namespace match type
grep -nE "^### NamespaceMatchType \| LangGraph" langgraph-api-reference.md

# CacheNamespace - Cache namespace type
grep -nE "^### CacheNamespace \| LangGraph" langgraph-api-reference.md

# CacheFullKey - Cache full key type
grep -nE "^### CacheFullKey \| LangGraph" langgraph-api-reference.md

# All - All type
grep -nE "^### All \| LangGraph" langgraph-api-reference.md
```

#### Functions
```bash
# getSubgraphsSeenSet - Get subgraphs seen set
grep -nE "^### getSubgraphsSeenSet \| LangGraph" langgraph-api-reference.md
```

---

## Module 3: `@langchain/langgraph-checkpoint-mongodb`

**Purpose**: MongoDB-backed checkpointing implementation.

### Key Sections

#### Module Header
```bash
# Find MongoDB checkpoint module
grep -n "^# Module @langchain/langgraph-checkpoint-mongodb$" langgraph-api-reference.md
```

#### Classes
```bash
# MongoDBSaver - MongoDB checkpoint saver
grep -nE "^### MongoDBSaver \| LangGraph" langgraph-api-reference.md

# MongoDBSaverParams - MongoDB saver parameters
grep -nE "^### MongoDBSaverParams \| LangGraph" langgraph-api-reference.md
```

#### Usage Examples
```bash
# Find usage section
grep -n "^## Usage $" langgraph-api-reference.md | grep -B2 -A2 "mongodb"
```

---

## Module 4: `@langchain/langgraph-checkpoint-postgres`

**Purpose**: PostgreSQL-backed checkpointing and vector store.

### Key Sections

#### Module Header
```bash
# Find Postgres checkpoint module
grep -n "^# Module @langchain/langgraph-checkpoint-postgres$" langgraph-api-reference.md
```

#### Classes
```bash
# PostgresSaver - PostgreSQL checkpoint saver
grep -nE "^### PostgresSaver \| LangGraph" langgraph-api-reference.md

# PostgresStore - PostgreSQL vector store
grep -nE "^### PostgresStore \| LangGraph" langgraph-api-reference.md

# Embeddings - Embeddings type
grep -nE "^### Embeddings \| LangGraph" langgraph-api-reference.md

# FilterOperators - Filter operators
grep -nE "^### FilterOperators \| LangGraph" langgraph-api-reference.md

# HNSWConfig - HNSW index configuration
grep -nE "^### HNSWConfig \| LangGraph" langgraph-api-reference.md
```

#### Usage Sections
```bash
# Basic usage
grep -n "^## Usage $" langgraph-api-reference.md | head -5

# Usage with existing connection pool
grep -n "^## Usage with existing connection pool $" langgraph-api-reference.md

# Testing section
grep -n "^## Testing $" langgraph-api-reference.md
```

---

## Module 5: `@langchain/langgraph-checkpoint-sqlite`

**Purpose**: SQLite-backed checkpointing implementation.

### Key Sections

#### Module Header
```bash
# Find SQLite checkpoint module
grep -n "^# Module @langchain/langgraph-checkpoint-sqlite$" langgraph-api-reference.md
```

#### Classes
```bash
# SqliteSaver - SQLite checkpoint saver
grep -nE "^### SqliteSaver \| LangGraph" langgraph-api-reference.md
```

---

## Module 6: `@langchain/langgraph-checkpoint-validation`

**Purpose**: Checkpoint validation utilities and testing helpers.

### Key Sections

#### Module Header
```bash
# Find validation module
grep -n "^# Module @langchain/langgraph-checkpoint-validation$" langgraph-api-reference.md
```

#### Classes
```bash
# CheckpointSaverTestInitializer - Test initializer
grep -nE "^### CheckpointSaverTestInitializer \| LangGraph" langgraph-api-reference.md
```

---

## Module 7: `@langchain/langgraph-cua`

**Purpose**: Contextual Understanding API (Computer Use Agent) for LangGraph.

### Key Sections

#### Module Header
```bash
# Find CUA module
grep -n "^# Module @langchain/langgraph-cua$" langgraph-api-reference.md

# Find CUA module overview
grep -nE "^### @langchain/langgraph-cua \| LangGraph" langgraph-api-reference.md
```

#### Installation and Quickstart
```bash
# Find installation instructions
grep -nE "yarn add @langchain/langgraph-cua|npm install @langchain/langgraph-cua" langgraph-api-reference.md | head -10

# Find quickstart section
grep -n "^## Quickstart" langgraph-api-reference.md | head -5

# Find createCua function
grep -nE "^### createCua \| LangGraph" langgraph-api-reference.md
```

#### Configuration and Customization
```bash
# Find configuration parameters
grep -nE "^### Configuration Parameters|Configuration Parameters" langgraph-api-reference.md | head -5

# Find system prompts
grep -nE "^### System Prompts|System Prompts" langgraph-api-reference.md | head -5

# Find node before/after actions
grep -nE "^### Node Before/After Action|Node Before.*After" langgraph-api-reference.md | head -5

# Find state modifier
grep -nE "^### State Modifier|State Modifier" langgraph-api-reference.md | head -5

# Find screenshot upload
grep -nE "Screenshot Upload|screenshot" langgraph-api-reference.md | head -10

# Find auth states
grep -nE "^### Auth States|Auth States|Using Auth States" langgraph-api-reference.md | head -10

# Find zero data retention
grep -nE "Zero Data Retention|ZDR" langgraph-api-reference.md | head -10
```

#### Type Definitions
```bash
# Find CUAState type
grep -nE "CUAState|CUA.*State" langgraph-api-reference.md | head -10

# Find CUAUpdate type
grep -nE "CUAUpdate|CUA.*Update" langgraph-api-reference.md | head -10

# Find CUAAnnotation type
grep -nE "CUAAnnotation|CUA.*Annotation" langgraph-api-reference.md | head -10

# Find CUAConfigurable type
grep -nE "CUAConfigurable|CUA.*Configurable" langgraph-api-reference.md | head -10

# Find CUAEnvironment type
grep -nE "CUAEnvironment|CUA.*Environment" langgraph-api-reference.md | head -10
```

---

## Module 8: `@langchain/langgraph-sdk`

**Purpose**: SDK for LangGraph Platform integration and deployment.

### Key Sections

#### Module Header
```bash
# Find SDK module
grep -n "^# Module @langchain/langgraph-sdk$" langgraph-api-reference.md

# Find SDK module overview
grep -nE "^### @langchain/langgraph-sdk \| LangGraph" langgraph-api-reference.md
```

#### Installation
```bash
# Find installation instructions
grep -nE "yarn add @langchain/langgraph-sdk|npm install @langchain/langgraph-sdk" langgraph-api-reference.md | head -10
```

#### Client Class
```bash
# Find Client class
grep -nE "^### Client \| LangGraph" langgraph-api-reference.md

# Find client methods
grep -nE -A30 "^### Client \| LangGraph" langgraph-api-reference.md | grep -A30 "## Methods" | head -50

# Find runs.stream method
grep -nE "runs\.stream|stream.*run" langgraph-api-reference.md | head -20

# Find runs.create method
grep -nE "runs\.create|create.*run" langgraph-api-reference.md | head -20

# Find runs.get method
grep -nE "runs\.get|get.*run" langgraph-api-reference.md | head -20
```

#### Assistant Classes
```bash
# Find AssistantBase class
grep -nE "^### AssistantBase \| LangGraph" langgraph-api-reference.md

# Find Assistant class
grep -nE "^### Assistant \| LangGraph" langgraph-api-reference.md

# Find AssistantVersion class
grep -nE "^### AssistantVersion \| LangGraph" langgraph-api-reference.md
```

#### Usage Examples
```bash
# Find SDK usage examples
grep -nE -A30 "import.*Client.*from.*@langchain/langgraph-sdk" langgraph-api-reference.md | head -50

# Find streaming examples
grep -nE -A20 "client\.runs\.stream" langgraph-api-reference.md | head -50
```

---

## Module 9: `@langchain/langgraph-supervisor`

**Purpose**: Supervisor patterns for hierarchical multi-agent coordination.

### Key Sections

#### Module Header
```bash
# Find supervisor module
grep -n "^# Module @langchain/langgraph-supervisor$" langgraph-api-reference.md

# Find supervisor module overview
grep -nE "^### @langchain/langgraph-supervisor \| LangGraph" langgraph-api-reference.md
```

#### Installation
```bash
# Find installation instructions
grep -n "npm install @langchain/langgraph-supervisor" langgraph-api-reference.md | head -10
```

#### Core Functions
```bash
# Find createSupervisor function
grep -nE "^### createSupervisor \| LangGraph" langgraph-api-reference.md

# Find createSupervisor usage
grep -nE -A30 "createSupervisor|import.*createSupervisor" langgraph-api-reference.md | head -50
```

#### Usage Patterns
```bash
# Find supervisor examples
grep -n -A30 "createSupervisor({" langgraph-api-reference.md | head -100

# Find compile with checkpointer
grep -nE -A20 "\.compile.*checkpointer|compile.*MemorySaver" langgraph-api-reference.md | head -30

# Find multi-agent patterns
grep -nE "multi.*agent|hierarchical.*agent|supervisor.*agent" langgraph-api-reference.md | head -30
```

#### State Management
```bash
# Find supervisor state
grep -nE "SupervisorState|supervisor.*state" langgraph-api-reference.md | head -20

# Find memory integration
grep -nE "short-term.*memory|long-term.*memory|checkpointer" langgraph-api-reference.md | head -30
```

---

## Module 10: `@langchain/langgraph-swarm`

**Purpose**: Swarm/multi-agent patterns for peer-to-peer agent coordination.

### Key Sections

#### Module Header
```bash
# Find swarm module
grep -n "^# Module @langchain/langgraph-swarm$" langgraph-api-reference.md

# Find swarm module overview
grep -nE "^### @langchain/langgraph-swarm \| LangGraph" langgraph-api-reference.md
```

#### Installation
```bash
# Find installation instructions
grep -n "npm install @langchain/langgraph-swarm" langgraph-api-reference.md | head -10
```

#### Core Functions
```bash
# Find createSwarm function
grep -nE "^### createSwarm \| LangGraph" langgraph-api-reference.md

# Find createHandoffTool function
grep -nE "^### createHandoffTool \| LangGraph" langgraph-api-reference.md

# Find addActiveAgentRouter function
grep -nE "^### addActiveAgentRouter \| LangGraph" langgraph-api-reference.md

# Find createSwarm usage
grep -nE -A30 "createSwarm|import.*createSwarm" langgraph-api-reference.md | head -50
```

#### Usage Patterns
```bash
# Find swarm examples
grep -n -A30 "createSwarm({" langgraph-api-reference.md | head -100

# Find handoff patterns
grep -nE "handoff|Handoff|createHandoffTool" langgraph-api-reference.md | head -30

# Find active agent router
grep -nE "addActiveAgentRouter|active.*agent" langgraph-api-reference.md | head -30

# Find compile with checkpointer
grep -nE -A20 "\.compile.*checkpointer|compile.*MemorySaver" langgraph-api-reference.md | head -30
```

#### State Management
```bash
# Find SwarmState type
grep -nE "SwarmState|swarm.*state" langgraph-api-reference.md | head -20

# Find memory integration
grep -nE "short-term.*memory|long-term.*memory|checkpointer" langgraph-api-reference.md | head -30

# Find conversation state
grep -nE "conversation.*state|multi-turn|turn.*state" langgraph-api-reference.md | head -30
```

---

## Common Patterns

### Finding Method Documentation
```bash
# Find methods section for a class
grep -n "^## Methods$" langgraph-api-reference.md | head -20

# Find specific method (e.g., invoke)
grep -n "### \`invoke\`" langgraph-api-reference.md | head -10

# Find method with class context
grep -E -B10 -A30 "### \`invoke\`" langgraph-api-reference.md | grep -B10 "StateGraph" | head -50
```

### Finding Property Documentation
```bash
# Find properties section
grep -n "^## Properties$" langgraph-api-reference.md | head -20

# Find specific property
grep -n "### \`name\`" langgraph-api-reference.md | head -10
```

### Finding Constructor Documentation
```bash
# Find constructors section
grep -n "^## Constructors$" langgraph-api-reference.md | head -20

# Find constructor method
grep -n "### constructor" langgraph-api-reference.md | head -10
```

### Finding Type Definitions
```bash
# Find type aliases section
grep -n "^## Type Aliases$" langgraph-api-reference.md | head -20

# Find specific type
grep -n "^### [A-Z]" langgraph-api-reference.md | grep "Type\|Interface\|Class" | head -30
```

### Finding Examples
```bash
# Find code blocks (markdown code fences)
grep -n "^```" langgraph-api-reference.md | head -50

# Find usage sections
grep -n "^## Usage" langgraph-api-reference.md | head -20
```

### Finding Source URLs
```bash
# Find source URL patterns (helps locate original docs)
grep -n "\*\*Source:\*\*" langgraph-api-reference.md | head -20
```

---

## Advanced Search Patterns

### Find All Class Definitions
```bash
# Find all class headers (with module context)
grep -n "^### [A-Z][a-zA-Z]* | LangGraph" langgraph-api-reference.md | head -100

# More specific: classes that are likely important
grep -nE "^### (StateGraph|Graph|CompiledGraph|Annotation|Send|Pregel|MemorySaver|PostgresSaver|MongoDBSaver) \| LangGraph" langgraph-api-reference.md
```

### Find All Interface Definitions
```bash
# Find interface headers
grep -nE "^### [A-Z][a-zA-Z]* \| LangGraph" langgraph-api-reference.md | grep -iE "interface|protocol" | head -30

# Or find Interfaces sections
grep -n "^## Interfaces$" langgraph-api-reference.md
```

### Find Error Classes
```bash
# Find all error classes
grep -nE "^### [A-Z][a-zA-Z]*Error \| LangGraph" langgraph-api-reference.md

# Or find Errors sections
grep -n "^## Errors$" langgraph-api-reference.md
```

### Find Constants
```bash
# Find constant definitions (usually in ALL_CAPS)
grep -nE "^### [A-Z_]* \| LangGraph" langgraph-api-reference.md | head -20
```

### Find Functions
```bash
# Find function definitions (lowercase or camelCase)
grep -nE "^### [a-z][a-zA-Z]* \| LangGraph" langgraph-api-reference.md | head -50
```

---

## Module-Specific Search Strategies

### For Graph Construction (Core Module)
```bash
# Find StateGraph methods
grep -nE -A5 "### StateGraph \| LangGraph" langgraph-api-reference.md | grep -A30 "## Methods" | head -50

# Find addNode, addEdge, addConditionalEdges
grep -nE "### \`addNode\`|### \`addEdge\`|### \`addConditionalEdges\`" langgraph-api-reference.md

# Find compile method
grep -n "### \`compile\`" langgraph-api-reference.md | head -5
```

### For State Management (Core Module)
```bash
# Find Annotation usage
grep -nE -A20 "### Annotation \| LangGraph" langgraph-api-reference.md | head -40

# Find state reducer patterns
grep -nE "reducer|Reducer" langgraph-api-reference.md | head -30

# Find channel types
grep -nE "^### (Topic|EphemeralValue|DynamicBarrierValue|NamedBarrierValue) \| LangGraph" langgraph-api-reference.md
```

### For Checkpointing
```bash
# Find checkpoint interface methods
grep -nE "### \`put\`|### \`get\`|### \`list\`|### \`getTuple\`" langgraph-api-reference.md | head -20

# Find checkpoint configuration
grep -nE "thread_id|checkpoint_id|checkpoint_ns" langgraph-api-reference.md | head -30

# Find checkpoint usage examples
grep -nE -A20 "configurable.*thread_id|configurable.*checkpoint_id" langgraph-api-reference.md | head -50

# Find MemorySaver usage
grep -nE -A20 "new MemorySaver|MemorySaver()" langgraph-api-reference.md | head -30

# Find PostgresSaver usage
grep -nE -A20 "PostgresSaver|PostgresSaver\.fromConnString" langgraph-api-reference.md | head -30

# Find MongoDBSaver usage
grep -nE -A20 "MongoDBSaver|new MongoDBSaver" langgraph-api-reference.md | head -30

# Find SqliteSaver usage
grep -nE -A20 "SqliteSaver|new SqliteSaver" langgraph-api-reference.md | head -30

# Find checkpoint setup
grep -nE "\.setup()|checkpointer\.setup" langgraph-api-reference.md | head -20

# Find checkpoint serialization
grep -nE "serde|Serializer|serialization" langgraph-api-reference.md | head -30

# Find pending writes
grep -nE "pending.*write|PendingWrite" langgraph-api-reference.md | head -30
```

### For Parallel Execution (Send API)
```bash
# Find Send class/function
grep -nE "^### Send \| LangGraph" langgraph-api-reference.md

# Find Send usage examples
grep -nE -A30 "Send(" langgraph-api-reference.md | head -100

# Find parallel execution patterns
grep -nE "parallel|concurrent|Send|fan-out" langgraph-api-reference.md | head -50
```

---

## Efficient Search Workflow

### Step 1: Identify Module
```bash
# If you know the module name
grep -n "^# Module @langchain/langgraph-" langgraph-api-reference.md | grep -E "checkpoint|sdk|supervisor|swarm|cua"

# Or search for module header
grep -n "^### @langchain/langgraph-" langgraph-api-reference.md | head -20
```

### Step 2: Find Class/Interface/Function
```bash
# Within that module, find the specific item
# First find the module section, then search within it
LINE=$(grep -n "^# Module @langchain/langgraph-checkpoint$" langgraph-api-reference.md | head -1 | cut -d: -f1)
# Then search from that line forward
sed -n "${LINE},$ p" langgraph-api-reference.md | grep -n "^### MemorySaver" | head -1
```

### Step 3: Read Documentation
```bash
# Use line numbers from grep to read specific sections
# Example: Read lines 1000-1100
sed -n '1000,1100p' langgraph-api-reference.md
```

---

## Key API Surface Areas

### Graph Construction
- **StateGraph**: `addNode()`, `addEdge()`, `addConditionalEdges()`, `compile()`
- **Graph**: Lower-level graph API
- **CompiledGraph**: `invoke()`, `stream()`, `streamEvents()`

### State Management
- **Annotation**: `Annotation.Root()`, channel definitions
- **Channels**: `Topic`, `EphemeralValue`, `DynamicBarrierValue`, `NamedBarrierValue`
- **Reducers**: `value`, `update`, `reduce` functions

### Execution
- **CompiledGraph**: `invoke()`, `stream()`, `streamEvents()`, `getState()`, `updateState()`, `transform()`
- **Streaming**: `streamMode` options (`updates`, `values`, `messages`), event streaming
- **Send**: Parallel execution primitive for fan-out patterns
- **entrypoint**: Graph entrypoint function
- **task**: Task execution helper
- **wait**: Wait for condition helper
- **waitForNames**: Wait for specific names helper

### Checkpointing
- **BaseCheckpointSaver**: `put()`, `get()`, `getTuple()`, `list()`, `putWrites()`, `deleteThread()`
- **MemorySaver**: In-memory implementation (development/testing)
- **PostgresSaver**: PostgreSQL implementation (production)
- **MongoDBSaver**: MongoDB implementation (production)
- **SqliteSaver**: SQLite implementation (development/testing)
- **Checkpoint Concepts**: Thread, checkpoint_id, checkpoint_ns, pending writes, serde
- **Setup**: `.setup()` method for database checkpointers
- **Configuration**: `configurable: { thread_id, checkpoint_id, checkpoint_ns }`

### Configuration
- **LangGraphRunnableConfig**: Runtime configuration
- **CheckpointConfig**: Checkpoint configuration with `thread_id`, `checkpoint_id`, `checkpoint_ns`
- **StreamMode**: Streaming mode enum (`updates`, `values`, `messages`)
- **PregelOptions**: Low-level execution options
- **TaskOptions**: Task execution options
- **EntrypointOptions**: Entrypoint configuration options
- **GetStateOptions**: State retrieval options

### Error Handling
- **GraphInterrupt**: Interrupt mechanism for human-in-the-loop
- **GraphBubbleUp**: Error bubbling to parent graph
- **GraphRecursionError**: Recursion detection and prevention
- **GraphValueError**: Value validation errors
- **EmptyChannelError**: Empty channel access errors
- **EmptyInputError**: Empty input validation errors
- **InvalidUpdateError**: Invalid state update errors
- **UnreachableNodeError**: Unreachable node detection
- **MultipleSubgraphsError**: Multiple subgraph conflicts
- **ParentCommand**: Parent command error handling
- **interrupt()**: Helper function to trigger interrupts
- **isInterrupted()**: Check if graph is interrupted

---

## Tips for LLM Navigation

1. **Start with Module**: Always identify which module contains what you need
2. **Use Line Numbers**: The grep commands provide line numbers - use them to jump directly to sections
3. **Context Matters**: Use `-A` and `-B` flags to get context around matches
4. **Multiple Matches**: Some items appear multiple times (duplicate content) - use `head` to limit results
5. **Hierarchy**: Understand the hierarchy: Module → Classes/Interfaces → Methods/Properties
6. **Source URLs**: Each section has a source URL - use these to verify against online docs if needed

---

## Example Use Cases

### Use Case 1: Find StateGraph.compile() documentation
```bash
# Step 1: Find StateGraph class
grep -nE "^### StateGraph \| LangGraph" langgraph-api-reference.md

# Step 2: Find compile method (should be near StateGraph)
grep -nE -A30 "^### StateGraph \| LangGraph" langgraph-api-reference.md | grep -A30 "### \`compile\`"
```

### Use Case 2: Find Send API usage
```bash
# Step 1: Find Send class/function
grep -nE "^### Send \| LangGraph" langgraph-api-reference.md

# Step 2: Find usage examples
grep -nE -A50 "Send(" langgraph-api-reference.md | head -100
```

### Use Case 3: Find checkpoint configuration
```bash
# Step 1: Find checkpoint module
grep -n "^# Module @langchain/langgraph-checkpoint$" langgraph-api-reference.md

# Step 2: Find configuration examples
grep -nE -A20 "configurable.*thread_id" langgraph-api-reference.md | head -50
```

### Use Case 4: Find error handling patterns
```bash
# Step 1: Find error classes
grep -n "^### [A-Z][a-zA-Z]*Error | LangGraph" langgraph-api-reference.md

# Step 2: Find GraphInterrupt specifically
grep -nE -A30 "^### GraphInterrupt \| LangGraph" langgraph-api-reference.md | head -50
```

### Use Case 5: Find streaming patterns
```bash
# Step 1: Find stream method
grep -n "### \`stream\`" langgraph-api-reference.md | head -5

# Step 2: Find streamEvents method
grep -n "### \`streamEvents\`" langgraph-api-reference.md | head -5

# Step 3: Find streamMode options
grep -nE "streamMode.*updates|streamMode.*values|streamMode.*messages" langgraph-api-reference.md | head -20
```

### Use Case 6: Find checkpointing setup
```bash
# Step 1: Find checkpoint module
grep -n "^# Module @langchain/langgraph-checkpoint$" langgraph-api-reference.md

# Step 2: Find MemorySaver
grep -nE "^### MemorySaver \| LangGraph" langgraph-api-reference.md

# Step 3: Find usage with compile
grep -nE -A20 "\.compile.*checkpointer|compile.*MemorySaver" langgraph-api-reference.md | head -50
```

### Use Case 7: Find multi-agent patterns
```bash
# Step 1: Find supervisor module
grep -n "^# Module @langchain/langgraph-supervisor$" langgraph-api-reference.md

# Step 2: Find createSupervisor
grep -nE "^### createSupervisor \| LangGraph" langgraph-api-reference.md

# Step 3: Find swarm module
grep -nE "^# Module @langchain/langgraph-swarm$" langgraph-api-reference.md

# Step 4: Find createSwarm
grep -nE "^### createSwarm \| LangGraph" langgraph-api-reference.md
```

### Use Case 8: Find state annotation patterns
```bash
# Step 1: Find Annotation class
grep -nE "^### Annotation \| LangGraph" langgraph-api-reference.md

# Step 2: Find Annotation.Root usage
grep -nE -A30 "Annotation\.Root|Annotation\.Root()" langgraph-api-reference.md | head -50

# Step 3: Find channel definitions
grep -nE "Topic|EphemeralValue|DynamicBarrierValue" langgraph-api-reference.md | head -30
```

### Use Case 9: Find Send API for parallel execution
```bash
# Step 1: Find Send class
grep -nE "^### Send \| LangGraph" langgraph-api-reference.md

# Step 2: Find Send usage examples
grep -nE -A30 "Send(" langgraph-api-reference.md | head -100

# Step 3: Find parallel execution patterns
grep -nE "parallel|concurrent|fan-out|Send.*node" langgraph-api-reference.md | head -50
```

### Use Case 10: Find SDK integration
```bash
# Step 1: Find SDK module
grep -n "^# Module @langchain/langgraph-sdk$" langgraph-api-reference.md

# Step 2: Find Client class
grep -nE "^### Client \| LangGraph" langgraph-api-reference.md

# Step 3: Find runs.stream usage
grep -nE -A30 "client\.runs\.stream|runs\.stream(" langgraph-api-reference.md | head -50
```

---

## Additional Topics

### Store and Cache APIs
```bash
# Find BaseStore interface
grep -nE "^### BaseStore \| LangGraph" langgraph-api-reference.md

# Find BaseCache interface
grep -nE "^### BaseCache \| LangGraph" langgraph-api-reference.md

# Find InMemoryStore class
grep -nE "^### InMemoryStore \| LangGraph" langgraph-api-reference.md

# Find InMemoryCache class
grep -nE "^### InMemoryCache \| LangGraph" langgraph-api-reference.md

# Find AsyncBatchedStore class
grep -nE "^### AsyncBatchedStore \| LangGraph" langgraph-api-reference.md

# Find PostgresStore class (vector store)
grep -nE "^### PostgresStore \| LangGraph" langgraph-api-reference.md
```

### Postgres Vector Store
```bash
# Find PostgresStore usage
grep -nE -A30 "PostgresStore|new PostgresStore" langgraph-api-reference.md | head -50

# Find embeddings configuration
grep -nE "^### Embeddings \| LangGraph" langgraph-api-reference.md

# Find filter operators
grep -nE "^### FilterOperators \| LangGraph" langgraph-api-reference.md

# Find HNSW config
grep -nE "^### HNSWConfig \| LangGraph" langgraph-api-reference.md

# Find IVFFlat config
grep -nE "^### IVFFlatConfig \| LangGraph" langgraph-api-reference.md

# Find index configuration
grep -nE "^### IndexConfig \| LangGraph" langgraph-api-reference.md
```

### Validation and Testing
```bash
# Find checkpoint validation module
grep -n "^# Module @langchain/langgraph-checkpoint-validation$" langgraph-api-reference.md

# Find CheckpointSaverTestInitializer
grep -nE "^### CheckpointSaverTestInitializer \| LangGraph" langgraph-api-reference.md

# Find test initializer usage
grep -nE -A30 "CheckpointSaverTestInitializer|test.*initializer" langgraph-api-reference.md | head -50

# Find CLI usage for testing
grep -nE "^## CLI usage|CLI.*usage" langgraph-api-reference.md | head -10

# Find Jest/Vitest integration
grep -nE "Jest|Vitest|test.*framework" langgraph-api-reference.md | head -20
```

### Graph Construction Patterns
```bash
# Find conditional edges patterns
grep -nE -A20 "addConditionalEdges|conditional.*edge" langgraph-api-reference.md | head -50

# Find edge patterns
grep -nE -A20 "addEdge|\.addEdge" langgraph-api-reference.md | head -50

# Find node patterns
grep -nE -A20 "addNode|\.addNode" langgraph-api-reference.md | head -50

# Find entry point patterns
grep -nE "setEntryPoint|entry.*point" langgraph-api-reference.md | head -20

# Find finish point patterns
grep -nE "setFinishPoint|finish.*point" langgraph-api-reference.md | head -20
```

### State Management Patterns
```bash
# Find state reducer patterns
grep -nE -A10 "value:.*=>|update:.*=>|reduce:.*=>" langgraph-api-reference.md | head -50

# Find channel reducer examples
grep -nE -A20 "Topic|EphemeralValue|DynamicBarrierValue" langgraph-api-reference.md | head -50

# Find state annotation examples
grep -nE -A30 "Annotation\.Root|Annotation\.Root()" langgraph-api-reference.md | head -50

# Find messages annotation
grep -nE "MessagesAnnotation|messages.*annotation" langgraph-api-reference.md | head -20
```

### Human-in-the-Loop
```bash
# Find interrupt patterns
grep -nE -A20 "interrupt|GraphInterrupt|isInterrupted" langgraph-api-reference.md | head -50

# Find human-in-the-loop examples
grep -nE "human.*loop|human.*the.*loop" langgraph-api-reference.md | head -20

# Find approval patterns
grep -nE "approval|moderation|check" langgraph-api-reference.md | head -30
```

### Memory and Persistence
```bash
# Find memory patterns
grep -nE "memory|Memory|persistence|persist" langgraph-api-reference.md | head -50

# Find checkpoint persistence
grep -nE -A20 "checkpointer|checkpoint.*persist" langgraph-api-reference.md | head -50

# Find thread management
grep -nE "thread_id|thread.*management|deleteThread" langgraph-api-reference.md | head -30
```

## Notes

- **File Size**: The documentation file is currently 8 lines (empty) and needs to be generated - always use `head` or `tail` to limit results once generated
- **Duplicates**: Some content appears multiple times (navigation sections, repeated module headers) - this is normal
- **Format**: Documentation follows TypeDoc format with markdown rendering
- **Source URLs**: Each section includes source URL pointing to original online documentation
- **Line Numbers**: Line numbers are approximate - content may shift if documentation is regenerated
- **Module Structure**: Each module has its own section with Classes, Interfaces, Type Aliases, Functions, and Variables
- **Execution Patterns**: LangGraph supports synchronous (`invoke`), streaming (`stream`), and event streaming (`streamEvents`) execution modes
- **Checkpointing**: All checkpointers implement `BaseCheckpointSaver` interface with methods: `put()`, `get()`, `getTuple()`, `list()`, `putWrites()`
- **State Management**: State is defined using `Annotation.Root()` with channel definitions (Topic, EphemeralValue, etc.) and reducers
- **Multi-Agent**: Supervisor and Swarm modules provide patterns for multi-agent coordination

---

## Maintenance

When regenerating the documentation:

1. Update the "Last Updated" date
2. Verify line numbers still match (they may shift)
3. Update any module-specific sections if structure changes
4. Add new modules or classes as they appear
5. Update "Key API Surface Areas" section with new APIs

---

**End of Index**

