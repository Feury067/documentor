# React Reference Index

**Purpose**: This index provides regex patterns and grep commands to efficiently navigate the massive React reference documentation (`react-reference.md`).

**File Location**: `docs/external/react-reference/react-reference.md` (41,684 lines)

**Last Updated**: Generated from spidered documentation on 2025-11-21

**Note**: Most grep commands use the `-E` flag for extended regular expressions. This enables proper handling of alternation (`|`) and other regex features.

---

## Quick Navigation Commands

### Find Main Documentation Sections
```bash
# Find React Reference Overview
grep -n "^### React Reference Overview – React$" react-reference.md

# Find React section
grep -n "^## React $" react-reference.md

# Find React DOM section
grep -n "^## React DOM $" react-reference.md

# Find React Compiler section
grep -n "^## React Compiler $" react-reference.md

# Find ESLint Plugin section
grep -n "^## ESLint Plugin React Hooks $" react-reference.md

# Find Rules of React section
grep -n "^## Rules of React $" react-reference.md

# Find Legacy APIs section
grep -n "^## Legacy APIs $" react-reference.md
```

### Find Hook Documentation
```bash
# Find all React hooks
grep -nE "^### (use[A-Z][a-zA-Z]*|use) – React$" react-reference.md

# Find specific hook (e.g., useState)
grep -n "^### useState – React$" react-reference.md

# Find Built-in React Hooks overview
grep -n "^### Built-in React Hooks – React$" react-reference.md
```

### Find Component Documentation
```bash
# Find all React components
grep -nE "^### &lt;[A-Z][a-zA-Z]*&gt;" react-reference.md

# Find specific component (e.g., Fragment)
grep -n "^### &lt;Fragment&gt;" react-reference.md

# Find Built-in React Components overview
grep -n "^### Built-in React Components – React$" react-reference.md
```

### Find API Documentation
```bash
# Find all React APIs
grep -nE "^### [a-z][a-zA-Z]* – React$" react-reference.md | grep -v "^### use"

# Find specific API (e.g., createContext)
grep -n "^### createContext – React$" react-reference.md

# Find Built-in React APIs overview
grep -n "^### Built-in React APIs – React$" react-reference.md
```

---

## Documentation Organization

The documentation is organized into **7 main sections**:

1. **React** - Core React features (Hooks, Components, APIs, Directives)
2. **React DOM** - Web-specific features (Hooks, Components, APIs, Client/Server/Static APIs)
3. **React Compiler** - Build-time optimization tool
4. **ESLint Plugin React Hooks** - Linting rules for React Hooks
5. **Rules of React** - React idioms and best practices
6. **Legacy APIs** - Deprecated APIs not recommended for new code

---

## Section 1: React

**Purpose**: Core React features including hooks, components, APIs, and directives.

### Key Sections

#### React Reference Overview
```bash
# Find React Reference Overview
grep -n "^### React Reference Overview – React$" react-reference.md

# First occurrence around line 9
# Contains: Overview of React reference documentation structure
```

#### Built-in React Hooks Overview
```bash
# Find Built-in React Hooks overview
grep -n "^### Built-in React Hooks – React$" react-reference.md

# Contains: Categorization of hooks (State, Context, Ref, Effect, Performance, Other)
```

### State Hooks

#### useState
```bash
# Find useState hook
grep -n "^### useState – React$" react-reference.md

# Find useState reference section
grep -nE "^## Reference$" react-reference.md | grep -B5 "useState" | head -10

# Find useState usage examples
grep -nE "^## Usage$" react-reference.md | grep -B5 "useState" | head -10
```

#### useReducer
```bash
# Find useReducer hook
grep -n "^### useReducer – React$" react-reference.md

# Find useReducer examples
grep -n -A30 "^### useReducer – React$" react-reference.md | head -50
```

#### useActionState
```bash
# Find useActionState hook
grep -n "^### useActionState – React$" react-reference.md

# Find useActionState reference
grep -nE "^### \`useActionState\(action, initialState, permalink\?\)\`" react-reference.md
```

### Context Hooks

#### useContext
```bash
# Find useContext hook
grep -n "^### useContext – React$" react-reference.md

# Find useContext reference
grep -nE "^### \`useContext\(SomeContext\)\`" react-reference.md

# Find context usage examples
grep -n -A30 "^### useContext – React$" react-reference.md | head -50
```

#### createContext
```bash
# Find createContext API
grep -n "^### createContext – React$" react-reference.md

# Find createContext reference
grep -nE "^### \`createContext\(defaultValue\)\`" react-reference.md
```

### Ref Hooks

#### useRef
```bash
# Find useRef hook
grep -n "^### useRef – React$" react-reference.md

# Find useRef reference
grep -nE "^### \`useRef\(initialValue\)\`" react-reference.md
```

#### useImperativeHandle
```bash
# Find useImperativeHandle hook
grep -n "^### useImperativeHandle – React$" react-reference.md

# Find useImperativeHandle reference
grep -nE "^### \`useImperativeHandle\(ref, createHandle, dependencies\?\)\`" react-reference.md
```

### Effect Hooks

#### useEffect
```bash
# Find useEffect hook
grep -n "^### useEffect – React$" react-reference.md

# Find useEffect reference
grep -nE "^### \`useEffect\(setup, dependencies\?\)\`" react-reference.md

# Find useEffect usage examples
grep -n -A30 "^### useEffect – React$" react-reference.md | head -50
```

#### useLayoutEffect
```bash
# Find useLayoutEffect hook
grep -n "^### useLayoutEffect – React$" react-reference.md

# Find useLayoutEffect reference
grep -nE "^### \`useLayoutEffect\(setup, dependencies\?\)\`" react-reference.md

# Find useLayoutEffect vs useEffect
grep -n "useLayoutEffect vs useEffect\|useEffect vs useLayoutEffect" react-reference.md | head -10
```

#### useInsertionEffect
```bash
# Find useInsertionEffect hook
grep -n "^### useInsertionEffect – React$" react-reference.md

# Find useInsertionEffect reference
grep -nE "^### \`useInsertionEffect\(setup, dependencies\?\)\`" react-reference.md
```

#### useEffectEvent
```bash
# Find useEffectEvent hook
grep -n "^### useEffectEvent – React$" react-reference.md

# Find useEffectEvent reference
grep -nE "^### \`useEffectEvent\(callback\)\`" react-reference.md
```

### Performance Hooks

#### useMemo
```bash
# Find useMemo hook
grep -n "^### useMemo – React$" react-reference.md

# Find useMemo reference
grep -nE "^### \`useMemo\(calculateValue, dependencies\)\`" react-reference.md

# Find useMemo vs useCallback
grep -n "useMemo.*useCallback\|useCallback.*useMemo" react-reference.md | head -10
```

#### useCallback
```bash
# Find useCallback hook
grep -n "^### useCallback – React$" react-reference.md

# Find useCallback reference
grep -nE "^### \`useCallback\(fn, dependencies\)\`" react-reference.md

# Find useCallback usage examples
grep -n -A30 "^### useCallback – React$" react-reference.md | head -50
```

#### useTransition
```bash
# Find useTransition hook
grep -n "^### useTransition – React$" react-reference.md

# Find useTransition reference
grep -nE "^### \`useTransition\(\)\`" react-reference.md
```

#### useDeferredValue
```bash
# Find useDeferredValue hook
grep -n "^### useDeferredValue – React$" react-reference.md

# Find useDeferredValue reference
grep -nE "^### \`useDeferredValue\(value, initialValue\?\)\`" react-reference.md
```

### Other Hooks

#### useId
```bash
# Find useId hook
grep -n "^### useId – React$" react-reference.md

# Find useId reference
grep -nE "^### \`useId\(\)\`" react-reference.md
```

#### useDebugValue
```bash
# Find useDebugValue hook
grep -n "^### useDebugValue – React$" react-reference.md

# Find useDebugValue reference
grep -nE "^### \`useDebugValue\(value, format\?\)\`" react-reference.md
```

#### useSyncExternalStore
```bash
# Find useSyncExternalStore hook
grep -n "^### useSyncExternalStore – React$" react-reference.md

# Find useSyncExternalStore reference
grep -nE "^### \`useSyncExternalStore\(subscribe, getSnapshot, getServerSnapshot\?\)\`" react-reference.md
```

#### useOptimistic
```bash
# Find useOptimistic hook
grep -n "^### useOptimistic – React$" react-reference.md

# Find useOptimistic reference
grep -nE "^### \`useOptimistic\(state, updateFn\)\`" react-reference.md
```

#### use
```bash
# Find use hook
grep -n "^### use – React$" react-reference.md

# Find use reference
grep -nE "^### \`use\(resource\)\`" react-reference.md
```

### Built-in React Components

#### Fragment
```bash
# Find Fragment component (includes shorthand syntax notation)
grep -nE "^### &lt;Fragment&gt;.*React$" react-reference.md

# Find Fragment usage
grep -n -A30 "^### &lt;Fragment&gt;.*React$" react-reference.md | head -50
```

#### Profiler
```bash
# Find Profiler component
grep -n "^### &lt;Profiler&gt;" react-reference.md

# Find Profiler reference section
grep -nE "^## Reference$" react-reference.md | grep -B5 "Profiler" | head -10
```

#### StrictMode
```bash
# Find StrictMode component
grep -n "^### &lt;StrictMode&gt;" react-reference.md

# Find StrictMode usage
grep -n -A30 "^### &lt;StrictMode&gt;" react-reference.md | head -50
```

#### Suspense
```bash
# Find Suspense component
grep -n "^### &lt;Suspense&gt;" react-reference.md

# Find Suspense reference section
grep -nE "^## Reference$" react-reference.md | grep -B5 "Suspense" | head -10

# Find Suspense usage examples
grep -n -A30 "^### &lt;Suspense&gt;" react-reference.md | head -50
```

#### Activity
```bash
# Find Activity component
grep -n "^### &lt;Activity&gt;" react-reference.md

# Find Activity reference section
grep -nE "^## Reference$" react-reference.md | grep -B5 "Activity" | head -10
```

#### ViewTransition
```bash
# Find ViewTransition component
grep -n "^### &lt;ViewTransition&gt;" react-reference.md

# Find ViewTransition reference section
grep -nE "^## Reference$" react-reference.md | grep -B5 "ViewTransition" | head -10
```

### Built-in React APIs

#### act
```bash
# Find act API
grep -n "^### act – React$" react-reference.md

# Find act reference
grep -nE "^### \`act\(callback\)\`" react-reference.md
```

#### cache
```bash
# Find cache API
grep -n "^### cache – React$" react-reference.md

# Find cache reference
grep -nE "^### \`cache\(fn\)\`" react-reference.md
```

#### cacheSignal
```bash
# Find cacheSignal API
grep -n "^### cacheSignal – React$" react-reference.md

# Find cacheSignal reference
grep -nE "^### \`cacheSignal\(fn\)\`" react-reference.md
```

#### captureOwnerStack
```bash
# Find captureOwnerStack API
grep -n "^### captureOwnerStack – React$" react-reference.md

# Find captureOwnerStack reference
grep -nE "^### \`captureOwnerStack\(fn\)\`" react-reference.md
```

#### lazy
```bash
# Find lazy API
grep -n "^### lazy – React$" react-reference.md

# Find lazy reference
grep -nE "^### \`lazy\(load\)\`" react-reference.md
```

#### memo
```bash
# Find memo API
grep -n "^### memo – React$" react-reference.md

# Find memo reference
grep -nE "^### \`memo\(Component, compare\?\)\`" react-reference.md
```

#### startTransition
```bash
# Find startTransition API
grep -n "^### startTransition – React$" react-reference.md

# Find startTransition reference
grep -nE "^### \`startTransition\(callback\)\`" react-reference.md
```

#### addTransitionType
```bash
# Find addTransitionType API
grep -n "^### addTransitionType – React$" react-reference.md

# Find addTransitionType reference
grep -nE "^### \`addTransitionType\(type\)\`" react-reference.md
```

#### experimental_taintObjectReference
```bash
# Find experimental_taintObjectReference API
grep -n "^### experimental_taintObjectReference – React$" react-reference.md

# Find experimental_taintObjectReference reference
grep -nE "^### \`experimental_taintObjectReference\(message, object\)\`" react-reference.md
```

#### experimental_taintUniqueValue
```bash
# Find experimental_taintUniqueValue API
grep -n "^### experimental_taintUniqueValue – React$" react-reference.md

# Find experimental_taintUniqueValue reference
grep -nE "^### \`experimental_taintUniqueValue\(message, lifetime, value\)\`" react-reference.md
```

---

## Section 2: React DOM

**Purpose**: Web-specific React features including DOM hooks, components, and APIs.

### Key Sections

#### React DOM Overview
```bash
# Find React DOM section
grep -n "^## React DOM $" react-reference.md

# Contains: Hooks, Components, APIs, Client APIs, Server APIs, Static APIs
```

### Built-in React DOM Hooks

#### useFormStatus
```bash
# Find useFormStatus hook
grep -n "^### useFormStatus – React$" react-reference.md

# Find useFormStatus reference
grep -nE "^### \`useFormStatus\(\)\`" react-reference.md

# Find useFormStatus usage examples
grep -n -A30 "^### useFormStatus – React$" react-reference.md | head -50
```

### React DOM Components

#### Common Components (div, span, etc.)
```bash
# Find common components section
grep -nE "^### Common components" react-reference.md

# Find specific HTML elements (note: individual HTML elements are documented within the Common components section)
grep -nE "^### &lt;(div|span|p|h1|h2|h3|h4|h5|h6|a|button|img|ul|ol|li|table|tr|td|th)&gt;" react-reference.md
```

#### form
```bash
# Find form component
grep -n "^### &lt;form&gt;" react-reference.md

# Find form reference
grep -nE "^### \`&lt;form&gt;" react-reference.md

# Find form action prop
grep -n "form.*action\|action.*form" react-reference.md | head -20
```

#### input
```bash
# Find input component
grep -n "^### &lt;input&gt;" react-reference.md

# Find input reference
grep -nE "^### \`&lt;input" react-reference.md

# Find input types
grep -n "input.*type\|type.*input" react-reference.md | head -20
```

#### select
```bash
# Find select component
grep -n "^### &lt;select&gt;" react-reference.md

# Find select reference
grep -nE "^### \`&lt;select" react-reference.md
```

#### textarea
```bash
# Find textarea component
grep -n "^### &lt;textarea&gt;" react-reference.md

# Find textarea reference
grep -nE "^### \`&lt;textarea" react-reference.md
```

#### option
```bash
# Find option component
grep -n "^### &lt;option&gt;" react-reference.md

# Find option reference
grep -nE "^### \`&lt;option" react-reference.md
```

#### progress
```bash
# Find progress component
grep -n "^### &lt;progress&gt;" react-reference.md

# Find progress reference
grep -nE "^### \`&lt;progress" react-reference.md
```

#### link
```bash
# Find link component
grep -n "^### &lt;link&gt;" react-reference.md

# Find link reference
grep -nE "^### \`&lt;link" react-reference.md
```

#### meta
```bash
# Find meta component
grep -n "^### &lt;meta&gt;" react-reference.md

# Find meta reference
grep -nE "^### \`&lt;meta" react-reference.md
```

#### script
```bash
# Find script component
grep -n "^### &lt;script&gt;" react-reference.md

# Find script reference
grep -nE "^### \`&lt;script" react-reference.md
```

#### style
```bash
# Find style component
grep -n "^### &lt;style&gt;" react-reference.md

# Find style reference
grep -nE "^### \`&lt;style" react-reference.md
```

#### title
```bash
# Find title component
grep -n "^### &lt;title&gt;" react-reference.md

# Find title reference
grep -nE "^### \`&lt;title" react-reference.md
```

### React DOM APIs

#### createPortal
```bash
# Find createPortal API
grep -n "^### createPortal – React$" react-reference.md

# Find createPortal reference
grep -nE "^### \`createPortal\(children, container\)\`" react-reference.md

# Find createPortal usage examples
grep -n -A30 "^### createPortal – React$" react-reference.md | head -50
```

#### flushSync
```bash
# Find flushSync API
grep -n "^### flushSync – React$" react-reference.md

# Find flushSync reference
grep -nE "^### \`flushSync\(callback\)\`" react-reference.md
```

### Client APIs

#### Client React DOM APIs Overview
```bash
# Find Client React DOM APIs section
grep -n "^### Client React DOM APIs – React$" react-reference.md

# Contains: createRoot, hydrateRoot
```

#### createRoot
```bash
# Find createRoot API
grep -n "^### createRoot – React$" react-reference.md

# Find createRoot reference
grep -nE "^### \`createRoot\(domNode, options\?\)\`" react-reference.md

# Find createRoot usage
grep -n "createRoot\|ReactDOM\.createRoot" react-reference.md | head -20
```

#### hydrateRoot
```bash
# Find hydrateRoot API
grep -n "^### hydrateRoot – React$" react-reference.md

# Find hydrateRoot reference
grep -nE "^### \`hydrateRoot\(domNode, reactNode, options\?\)\`" react-reference.md

# Find hydrateRoot usage
grep -n "hydrateRoot\|ReactDOM\.hydrateRoot" react-reference.md | head -20
```

### Server APIs

#### Server React DOM APIs Overview
```bash
# Find Server React DOM APIs section
grep -n "^### Server React DOM APIs – React$" react-reference.md

# Contains: renderToString, renderToReadableStream, renderToPipeableStream, renderToStaticMarkup, resume, resumeToPipeableStream
```

#### renderToString
```bash
# Find renderToString API
grep -n "^### renderToString – React$" react-reference.md

# Find renderToString reference
grep -nE "^### \`renderToString\(reactNode, options\?\)\`" react-reference.md
```

#### renderToReadableStream
```bash
# Find renderToReadableStream API
grep -n "^### renderToReadableStream – React$" react-reference.md

# Find renderToReadableStream reference
grep -nE "^### \`renderToReadableStream\(reactNode, options\?\)\`" react-reference.md
```

#### renderToPipeableStream
```bash
# Find renderToPipeableStream API
grep -n "^### renderToPipeableStream – React$" react-reference.md

# Find renderToPipeableStream reference
grep -nE "^### \`renderToPipeableStream\(reactNode, options\?\)\`" react-reference.md
```

#### renderToStaticMarkup
```bash
# Find renderToStaticMarkup API
grep -n "^### renderToStaticMarkup – React$" react-reference.md

# Find renderToStaticMarkup reference
grep -nE "^### \`renderToStaticMarkup\(reactNode, options\?\)\`" react-reference.md
```

#### resume
```bash
# Find resume API
grep -n "^### resume – React$" react-reference.md

# Find resume reference
grep -nE "^### \`resume\(reactNode, options\?\)\`" react-reference.md
```

#### resumeToPipeableStream
```bash
# Find resumeToPipeableStream API
grep -n "^### resumeToPipeableStream – React$" react-reference.md

# Find resumeToPipeableStream reference
grep -nE "^### \`resumeToPipeableStream\(reactNode, options\?\)\`" react-reference.md
```

### Static APIs

#### Static React DOM APIs Overview
```bash
# Find Static React DOM APIs section
grep -n "^### Static React DOM APIs – React$" react-reference.md

# Contains: prerender, prerenderToNodeStream, resumeAndPrerender, resumeAndPrerenderToNodeStream
```

#### prerender
```bash
# Find prerender API
grep -n "^### prerender – React$" react-reference.md

# Find prerender reference
grep -nE "^### \`prerender\(reactNode, options\?\)\`" react-reference.md
```

#### prerenderToNodeStream
```bash
# Find prerenderToNodeStream API
grep -n "^### prerenderToNodeStream – React$" react-reference.md

# Find prerenderToNodeStream reference
grep -nE "^### \`prerenderToNodeStream\(reactNode, options\?\)\`" react-reference.md
```

#### resumeAndPrerender
```bash
# Find resumeAndPrerender API
grep -n "^### resumeAndPrerender – React$" react-reference.md

# Find resumeAndPrerender reference
grep -nE "^### \`resumeAndPrerender\(reactNode, options\?\)\`" react-reference.md
```

#### resumeAndPrerenderToNodeStream
```bash
# Find resumeAndPrerenderToNodeStream API
grep -n "^### resumeAndPrerenderToNodeStream – React$" react-reference.md

# Find resumeAndPrerenderToNodeStream reference
grep -nE "^### \`resumeAndPrerenderToNodeStream\(reactNode, options\?\)\`" react-reference.md
```

### Resource Hints APIs

#### preconnect
```bash
# Find preconnect API
grep -n "^### preconnect – React$" react-reference.md

# Find preconnect reference
grep -nE "^### \`preconnect\(href\)\`" react-reference.md
```

#### prefetchDNS
```bash
# Find prefetchDNS API
grep -n "^### prefetchDNS – React$" react-reference.md

# Find prefetchDNS reference
grep -nE "^### \`prefetchDNS\(href\)\`" react-reference.md
```

#### preinit
```bash
# Find preinit API
grep -n "^### preinit – React$" react-reference.md

# Find preinit reference
grep -nE "^### \`preinit\(href, options\?\)\`" react-reference.md
```

#### preinitModule
```bash
# Find preinitModule API
grep -n "^### preinitModule – React$" react-reference.md

# Find preinitModule reference
grep -nE "^### \`preinitModule\(href, options\?\)\`" react-reference.md
```

#### preload
```bash
# Find preload API
grep -n "^### preload – React$" react-reference.md

# Find preload reference
grep -nE "^### \`preload\(href, options\?\)\`" react-reference.md
```

#### preloadModule
```bash
# Find preloadModule API
grep -n "^### preloadModule – React$" react-reference.md

# Find preloadModule reference
grep -nE "^### \`preloadModule\(href, options\?\)\`" react-reference.md
```

---

## Section 3: React Compiler

**Purpose**: Build-time optimization tool for React.

### Key Sections

#### React Compiler Overview
```bash
# Find React Compiler section
grep -n "^## React Compiler $" react-reference.md

# Contains: Configuration, Directives, Compiling Libraries
```

#### Configuration
```bash
# Find React Compiler Configuration section
grep -n "^### Configuration – React$" react-reference.md

# Find Configuration reference
grep -nE -A30 "^### Configuration – React$" react-reference.md | head -50
```

#### compilationMode
```bash
# Find compilationMode API
grep -n "^### compilationMode – React$" react-reference.md

# Find compilationMode reference
grep -nE "^### \`compilationMode\`" react-reference.md
```

#### Directives
```bash
# Find React Compiler directives
grep -n "React Compiler.*Directive\|Directive.*React Compiler" react-reference.md | head -10
```

#### Compiling Libraries
```bash
# Find compiling libraries guide
grep -n "Compiling Libraries\|Compiling.*Library" react-reference.md | head -10
```

---

## Section 4: ESLint Plugin React Hooks

**Purpose**: Linting rules for React Hooks.

### Key Sections

#### ESLint Plugin Overview
```bash
# Find ESLint Plugin section
grep -n "^## ESLint Plugin React Hooks $" react-reference.md

# Contains: Linting rules documentation
```

#### Lints
```bash
# Find lints documentation
grep -n "^### Lints\|Lints.*React Hooks" react-reference.md | head -10
```

---

## Section 5: Rules of React

**Purpose**: React idioms and best practices.

### Key Sections

#### Rules of React Overview
```bash
# Find Rules of React section
grep -n "^## Rules of React $" react-reference.md

# Contains: Components and Hooks must be pure, React calls Components and Hooks, Rules of Hooks
```

#### Components and Hooks must be pure
```bash
# Find purity rules
grep -n "Components and Hooks must be pure\|must be pure" react-reference.md | head -10
```

#### React calls Components and Hooks
```bash
# Find React calls rules
grep -n "React calls Components and Hooks\|calls Components" react-reference.md | head -10
```

#### Rules of Hooks
```bash
# Find Rules of Hooks
grep -n "Rules of Hooks\|Rules.*Hooks" react-reference.md | head -10
```

---

## Section 6: Legacy APIs

**Purpose**: Deprecated APIs not recommended for new code.

### Key Sections

#### Legacy APIs Overview
```bash
# Find Legacy APIs section
grep -n "^## Legacy APIs $" react-reference.md

# Contains: Deprecated React APIs
```

#### Legacy Server APIs
```bash
# Find Legacy Server APIs
grep -n "^## Legacy Server APIs for non-streaming environments" react-reference.md

# Find non-streaming server APIs
grep -n "non-streaming\|Legacy Server" react-reference.md | head -10
```

---

## Common Patterns

### Finding Hook Documentation
```bash
# Find all hooks (React and React DOM)
grep -nE "^### use[A-Z][a-zA-Z]* – React$" react-reference.md

# Find hook reference sections
grep -nE "^## Reference$" react-reference.md | head -50

# Find hook usage sections
grep -nE "^## Usage$" react-reference.md | head -50

# Find hook troubleshooting sections
grep -nE "^## Troubleshooting$" react-reference.md | head -50
```

### Finding Component Documentation
```bash
# Find all component sections
grep -nE "^### &lt;[A-Z]" react-reference.md

# Find component reference sections
grep -nE "^## Reference$" react-reference.md | grep -B5 "&lt;" | head -30

# Find component usage sections
grep -nE "^## Usage$" react-reference.md | grep -B5 "&lt;" | head -30
```

### Finding API Documentation
```bash
# Find all API sections (lowercase, not hooks)
grep -nE "^### [a-z][a-zA-Z]* – React$" react-reference.md | grep -v "^### use"

# Find API reference sections
grep -nE "^## Reference$" react-reference.md | head -50

# Find API usage sections
grep -nE "^## Usage$" react-reference.md | head -50
```

### Finding Examples
```bash
# Find code blocks (markdown code fences)
grep -n "^```" react-reference.md | head -100

# Find example sections
grep -nE "^#### Example [0-9]+" react-reference.md | head -50

# Find usage examples
grep -n -A30 "Example.*of" react-reference.md | head -100
```

### Finding Source URLs
```bash
# Find source URL patterns
grep -n "\*\*Source:\*\*" react-reference.md | head -50

# Find specific source URLs
grep -n "react\.dev/reference" react-reference.md | head -50
```

---

## Advanced Search Patterns

### Find All Hooks
```bash
# Find all React hooks
grep -nE "^### use[A-Z][a-zA-Z]* – React$" react-reference.md

# Extract unique hook names
grep -oE "^### use[A-Z][a-zA-Z]*" react-reference.md | sort -u
```

### Find All Components
```bash
# Find all React components
grep -nE "^### &lt;[A-Z][a-zA-Z]*&gt;" react-reference.md

# Extract unique component names
grep -oE "&lt;[A-Z][a-zA-Z]*&gt;" react-reference.md | sort -u
```

### Find All APIs
```bash
# Find all React APIs (lowercase, not hooks)
grep -nE "^### [a-z][a-zA-Z_]* – React$" react-reference.md | grep -v "^### use"

# Extract unique API names
grep -oE "^### [a-z][a-zA-Z_]*" react-reference.md | grep -v "^### use" | sort -u
```

### Find Parameters Sections
```bash
# Find all Parameters sections
grep -nE "^#### Parameters$" react-reference.md | head -50

# Find Parameters with context
grep -nE -B5 "^#### Parameters$" react-reference.md | head -100
```

### Find Returns Sections
```bash
# Find all Returns sections
grep -nE "^#### Returns$" react-reference.md | head -50

# Find Returns with context
grep -nE -B5 "^#### Returns$" react-reference.md | head -100
```

### Find Caveats Sections
```bash
# Find all Caveats sections
grep -nE "^#### Caveats$" react-reference.md | head -50

# Find Caveats with context
grep -nE -B5 "^#### Caveats$" react-reference.md | head -100
```

---

## Module-Specific Search Strategies

### For State Management
```bash
# Find useState
grep -n "^### useState – React$" react-reference.md

# Find useReducer
grep -n "^### useReducer – React$" react-reference.md

# Find useActionState
grep -n "^### useActionState – React$" react-reference.md

# Find useOptimistic
grep -n "^### useOptimistic – React$" react-reference.md
```

### For Context Management
```bash
# Find useContext
grep -n "^### useContext – React$" react-reference.md

# Find createContext
grep -n "^### createContext – React$" react-reference.md

# Find context usage examples
grep -n -A30 "Context\|context" react-reference.md | head -100
```

### For Effects and Side Effects
```bash
# Find useEffect
grep -n "^### useEffect – React$" react-reference.md

# Find useLayoutEffect
grep -n "^### useLayoutEffect – React$" react-reference.md

# Find useInsertionEffect
grep -n "^### useInsertionEffect – React$" react-reference.md

# Find useEffectEvent
grep -n "^### useEffectEvent – React$" react-reference.md

# Find effect cleanup patterns
grep -n "cleanup\|return.*function" react-reference.md | head -30
```

### For Performance Optimization
```bash
# Find useMemo
grep -n "^### useMemo – React$" react-reference.md

# Find useCallback
grep -n "^### useCallback – React$" react-reference.md

# Find useTransition
grep -n "^### useTransition – React$" react-reference.md

# Find useDeferredValue
grep -n "^### useDeferredValue – React$" react-reference.md

# Find memo
grep -n "^### memo – React$" react-reference.md
```

### For Refs
```bash
# Find useRef
grep -n "^### useRef – React$" react-reference.md

# Find useImperativeHandle
grep -n "^### useImperativeHandle – React$" react-reference.md

# Find ref usage examples
grep -n -A20 "\.current\|ref=" react-reference.md | head -50
```

### For Server-Side Rendering
```bash
# Find renderToString
grep -n "^### renderToString – React$" react-reference.md

# Find renderToReadableStream
grep -n "^### renderToReadableStream – React$" react-reference.md

# Find renderToPipeableStream
grep -n "^### renderToPipeableStream – React$" react-reference.md

# Find renderToStaticMarkup
grep -n "^### renderToStaticMarkup – React$" react-reference.md

# Find resume APIs
grep -n "^### resume – React$\|^### resumeToPipeableStream – React$" react-reference.md

# Find server rendering examples
grep -n -A30 "server.*render\|SSR\|Server.*Side" react-reference.md | head -50
```

### For Static Rendering
```bash
# Find prerender
grep -n "^### prerender – React$" react-reference.md

# Find prerenderToNodeStream
grep -n "^### prerenderToNodeStream – React$" react-reference.md

# Find resumeAndPrerender
grep -n "^### resumeAndPrerender – React$" react-reference.md

# Find resumeAndPrerenderToNodeStream
grep -n "^### resumeAndPrerenderToNodeStream – React$" react-reference.md

# Find static rendering examples
grep -n -A30 "prerender\|static.*render" react-reference.md | head -50
```

### For Resource Hints
```bash
# Find preconnect
grep -n "^### preconnect – React$" react-reference.md

# Find prefetchDNS
grep -n "^### prefetchDNS – React$" react-reference.md

# Find preinit
grep -n "^### preinit – React$" react-reference.md

# Find preinitModule
grep -n "^### preinitModule – React$" react-reference.md

# Find preload
grep -n "^### preload – React$" react-reference.md

# Find preloadModule
grep -n "^### preloadModule – React$" react-reference.md

# Find resource hints examples
grep -n -A30 "preconnect\|prefetchDNS\|preinit\|preload" react-reference.md | head -50
```

### For Client-Side Rendering
```bash
# Find createRoot
grep -n "^### createRoot – React$" react-reference.md

# Find hydrateRoot
grep -n "^### hydrateRoot – React$" react-reference.md

# Find client rendering examples
grep -n -A30 "createRoot\|hydrateRoot" react-reference.md | head -50
```

### For Forms
```bash
# Find form component
grep -n "^### &lt;form&gt;" react-reference.md

# Find useFormStatus
grep -n "^### useFormStatus – React$" react-reference.md

# Find useActionState
grep -n "^### useActionState – React$" react-reference.md

# Find form examples
grep -n -A30 "form\|Form" react-reference.md | head -100
```

### For Suspense and Async
```bash
# Find Suspense component
grep -n "^### &lt;Suspense&gt;" react-reference.md

# Find use hook
grep -n "^### use – React$" react-reference.md

# Find lazy
grep -n "^### lazy – React$" react-reference.md

# Find Suspense examples
grep -n -A30 "Suspense\|suspense" react-reference.md | head -50
```

---

## Efficient Search Workflow

### Step 1: Identify Section
```bash
# If you know the section (React, React DOM, etc.)
grep -nE "^## (React|React DOM|React Compiler|ESLint|Rules|Legacy)" react-reference.md

# Or search for main sections
grep -n "^## " react-reference.md | head -20
```

### Step 2: Find Specific Hook/Component/API
```bash
# Within that section, find the specific item
# Example: Find useState
grep -n "^### useState – React$" react-reference.md

# Or find by pattern
grep -nE "^### (useState|useEffect|useContext)" react-reference.md
```

### Step 3: Read Documentation
```bash
# Use line numbers from grep to read specific sections
# Example: Read lines 7123-7500 (useState section)
sed -n '7123,7500p' react-reference.md
```

---

## Key API Surface Areas

### React Hooks
- **State Hooks**: `useState`, `useReducer`, `useActionState`, `useOptimistic`
- **Context Hooks**: `useContext`
- **Ref Hooks**: `useRef`, `useImperativeHandle`
- **Effect Hooks**: `useEffect`, `useLayoutEffect`, `useInsertionEffect`, `useEffectEvent`
- **Performance Hooks**: `useMemo`, `useCallback`, `useTransition`, `useDeferredValue`
- **Other Hooks**: `useId`, `useDebugValue`, `useSyncExternalStore`, `use`

### React Components
- **Built-in Components**: `<Fragment>`, `<Profiler>`, `<StrictMode>`, `<Suspense>`, `<Activity>`, `<ViewTransition>`

### React APIs
- **Component APIs**: `memo`, `lazy`, `createContext`
- **Performance APIs**: `startTransition`, `addTransitionType`
- **Caching APIs**: `cache`, `cacheSignal`
- **Utility APIs**: `act`, `captureOwnerStack`
- **Experimental APIs**: `experimental_taintObjectReference`, `experimental_taintUniqueValue`

### React DOM Hooks
- **Form Hooks**: `useFormStatus`

### React DOM Components
- **HTML Elements**: All standard HTML elements (`<div>`, `<span>`, `<form>`, `<input>`, `<select>`, `<textarea>`, etc.)
- **Document Elements**: `<link>`, `<meta>`, `<script>`, `<style>`, `<title>`

### React DOM APIs
- **Portal APIs**: `createPortal`
- **Synchronous APIs**: `flushSync`

### Client APIs
- **Rendering**: `createRoot`, `hydrateRoot`

### Server APIs
- **String Rendering**: `renderToString`, `renderToStaticMarkup`
- **Stream Rendering**: `renderToReadableStream`, `renderToPipeableStream`
- **Resume APIs**: `resume`, `resumeToPipeableStream`

### Static APIs
- **Prerendering**: `prerender`, `prerenderToNodeStream`
- **Resume and Prerender**: `resumeAndPrerender`, `resumeAndPrerenderToNodeStream`

### Resource Hints APIs
- **Connection Hints**: `preconnect`, `prefetchDNS`
- **Resource Hints**: `preinit`, `preinitModule`, `preload`, `preloadModule`

### React Compiler
- **Configuration**: `Configuration`, `compilationMode` - Build-time optimization configuration
- **Directives**: Function-level compilation directives
- **Library Compilation**: Guide for pre-compiled libraries

### Rules of React
- **Purity**: Components and Hooks must be pure
- **Calling**: React calls Components and Hooks
- **Rules of Hooks**: Restrictions on where hooks can be called

---

## Tips for LLM Navigation

1. **Start with Section**: Always identify which main section (React, React DOM, etc.) contains what you need
2. **Use Line Numbers**: The grep commands provide line numbers - use them to jump directly to sections
3. **Context Matters**: Use `-A` and `-B` flags to get context around matches
4. **Multiple Matches**: Some content appears multiple times (overview sections) - use `head` to limit results
5. **Hierarchy**: Understand the hierarchy: Section → Hook/Component/API → Reference/Usage/Troubleshooting
6. **Source URLs**: Each section has a source URL - use these to verify against online docs if needed
7. **Pattern Matching**: React uses consistent naming: hooks start with `use`, components use JSX syntax `<>`, APIs are camelCase

---

## Example Use Cases

### Use Case 1: Find useState() documentation
```bash
# Step 1: Find useState hook
grep -n "^### useState – React$" react-reference.md

# Step 2: Find reference section (should be near useState)
grep -nE -A30 "^### useState – React$" react-reference.md | grep -A30 "^## Reference$" | head -50

# Step 3: Find usage examples
grep -nE -A30 "^### useState – React$" react-reference.md | grep -A30 "^## Usage$" | head -50
```

### Use Case 2: Find useEffect() usage patterns
```bash
# Step 1: Find useEffect hook
grep -n "^### useEffect – React$" react-reference.md

# Step 2: Find usage examples
grep -nE -A50 "^### useEffect – React$" react-reference.md | grep -A50 "^## Usage$" | head -100

# Step 3: Find cleanup patterns
grep -n -A20 "return.*function\|cleanup" react-reference.md | grep -B5 "useEffect" | head -50
```

### Use Case 3: Find createRoot() setup
```bash
# Step 1: Find createRoot API
grep -n "^### createRoot – React$" react-reference.md

# Step 2: Find usage examples
grep -n -A30 "createRoot\|ReactDOM\.createRoot" react-reference.md | head -50

# Step 3: Find reference section
grep -nE -A30 "^### createRoot – React$" react-reference.md | grep -A30 "^## Reference$" | head -50
```

### Use Case 4: Find Suspense component usage
```bash
# Step 1: Find Suspense component
grep -n "^### &lt;Suspense&gt;" react-reference.md

# Step 2: Find usage examples
grep -n -A30 "&lt;Suspense&gt;\|Suspense" react-reference.md | head -100

# Step 3: Find fallback prop usage
grep -n "fallback=\|fallback.*Suspense" react-reference.md | head -20
```

### Use Case 5: Find form handling patterns
```bash
# Step 1: Find form component
grep -n "^### &lt;form&gt;" react-reference.md

# Step 2: Find useFormStatus
grep -n "^### useFormStatus – React$" react-reference.md

# Step 3: Find useActionState
grep -n "^### useActionState – React$" react-reference.md

# Step 4: Find form examples
grep -n -A30 "&lt;form&gt;\|form.*action" react-reference.md | head -100
```

### Use Case 6: Find performance optimization patterns
```bash
# Step 1: Find useMemo
grep -n "^### useMemo – React$" react-reference.md

# Step 2: Find useCallback
grep -n "^### useCallback – React$" react-reference.md

# Step 3: Find memo
grep -n "^### memo – React$" react-reference.md

# Step 4: Find performance examples
grep -n -A30 "performance\|optimization\|memo\|useMemo\|useCallback" react-reference.md | head -100
```

### Use Case 7: Find server-side rendering setup
```bash
# Step 1: Find renderToString
grep -n "^### renderToString – React$" react-reference.md

# Step 2: Find renderToReadableStream
grep -n "^### renderToReadableStream – React$" react-reference.md

# Step 3: Find server rendering examples
grep -n -A30 "server.*render\|SSR\|renderToString\|renderToReadableStream" react-reference.md | head -100
```

### Use Case 8: Find context usage patterns
```bash
# Step 1: Find useContext
grep -n "^### useContext – React$" react-reference.md

# Step 2: Find createContext
grep -n "^### createContext – React$" react-reference.md

# Step 3: Find context examples
grep -n -A30 "Context\|createContext\|useContext" react-reference.md | head -100
```

### Use Case 9: Find error boundaries and error handling
```bash
# Step 1: Find error boundary patterns
grep -n "error.*boundary\|Error.*Boundary\|componentDidCatch" react-reference.md | head -30

# Step 2: Find error handling in Suspense
grep -n -A20 "Suspense.*error\|error.*Suspense" react-reference.md | head -50

# Step 3: Find error recovery patterns
grep -n "recover.*error\|error.*recover" react-reference.md | head -20
```

### Use Case 10: Find React Compiler configuration
```bash
# Step 1: Find React Compiler section
grep -n "^## React Compiler $" react-reference.md

# Step 2: Find Configuration section
grep -n "^### Configuration – React$" react-reference.md

# Step 3: Find compilationMode
grep -n "^### compilationMode – React$" react-reference.md

# Step 4: Find directives
grep -n -A30 "React Compiler.*Directive\|Directive.*React Compiler" react-reference.md | head -50
```

### Use Case 11: Find resource hints APIs
```bash
# Step 1: Find preconnect
grep -n "^### preconnect – React$" react-reference.md

# Step 2: Find preload
grep -n "^### preload – React$" react-reference.md

# Step 3: Find preinit
grep -n "^### preinit – React$" react-reference.md

# Step 4: Find usage examples
grep -n -A30 "preconnect\|preload\|preinit" react-reference.md | head -100
```

### Use Case 12: Find static rendering APIs
```bash
# Step 1: Find prerender
grep -n "^### prerender – React$" react-reference.md

# Step 2: Find prerenderToNodeStream
grep -n "^### prerenderToNodeStream – React$" react-reference.md

# Step 3: Find resumeAndPrerender
grep -n "^### resumeAndPrerender – React$" react-reference.md

# Step 4: Find usage examples
grep -n -A30 "prerender\|resumeAndPrerender" react-reference.md | head -100
```

---

## Additional Topics

### Troubleshooting Common Issues
```bash
# Find all troubleshooting sections
grep -nE "^## Troubleshooting$" react-reference.md | head -50

# Find common error messages
grep -n "Error\|error\|Warning\|warning" react-reference.md | head -100

# Find infinite loop patterns
grep -n "infinite.*loop\|loop.*infinite" react-reference.md | head -20

# Find re-render issues
grep -n "re-render\|rerender\|unnecessary.*render" react-reference.md | head -30
```

### Migration and Breaking Changes
```bash
# Find breaking changes
grep -n "breaking.*change\|Breaking.*Change\|deprecated\|Deprecated" react-reference.md | head -50

# Find migration guides
grep -n "migration\|Migration\|upgrade\|Upgrade" react-reference.md | head -30

# Find legacy API references
grep -n "Legacy\|legacy" react-reference.md | head -30
```

### Best Practices
```bash
# Find best practices
grep -n "best.*practice\|Best.*Practice\|recommended\|Recommended" react-reference.md | head -30

# Find common pitfalls
grep -n "Pitfall\|pitfall\|common.*mistake" react-reference.md | head -30

# Find performance tips
grep -n "performance.*tip\|tip.*performance\|optimize\|Optimize" react-reference.md | head -30
```

### TypeScript Support
```bash
# Find TypeScript references
grep -n "TypeScript\|typescript\|Type\|type:" react-reference.md | head -50

# Find generic types
grep -n "&lt;[A-Z].*&gt;\|generic\|Generic" react-reference.md | head -30
```

### Accessibility
```bash
# Find accessibility references
grep -n "accessibility\|Accessibility\|a11y\|ARIA\|aria-" react-reference.md | head -30

# Find useId for accessibility
grep -n -A20 "useId.*accessibility\|accessibility.*useId" react-reference.md | head -50
```

### Testing
```bash
# Find testing references
grep -n "test\|Test\|testing\|Testing" react-reference.md | head -30

# Find act() for testing
grep -n -A20 "^### act – React$" react-reference.md | head -50
```

---

## Notes

- **File Size**: The documentation file is 41,684 lines - always use `head` or `tail` to limit results
- **Duplicates**: Some content appears multiple times (overview sections, repeated headers) - this is normal
- **Format**: Documentation follows React's official reference format with markdown rendering
- **Source URLs**: Each section includes source URL pointing to original online documentation (react.dev/reference)
- **Line Numbers**: Line numbers are approximate - content may shift if documentation is regenerated
- **Naming Conventions**:
  - Hooks: `use[A-Z][a-zA-Z]*` (e.g., `useState`, `useEffect`)
  - Components: `&lt;[A-Z][a-zA-Z]*&gt;` (e.g., `&lt;Fragment&gt;`, `&lt;Suspense&gt;`)
  - APIs: `[a-z][a-zA-Z_]*` (e.g., `createContext`, `memo`, `startTransition`)
- **Section Structure**: Each hook/component/API typically has: Reference (Parameters, Returns, Caveats), Usage (with examples), Troubleshooting
- **Version Coverage**: Documentation covers React 18+ features including Server Components, Suspense, and React Compiler

---

## Maintenance

When regenerating the documentation:

1. Update the "Last Updated" date
2. Verify line numbers still match (they may shift)
3. Update any section-specific content if structure changes
4. Add new hooks, components, or APIs as they appear
5. Update "Key API Surface Areas" section with new APIs
6. Check for new sections (React Compiler features, new hooks, etc.)

---

**End of Index**

