# Gemini API Documentation Index

**Purpose**: This index provides regex patterns and grep commands to efficiently navigate the massive Gemini API documentation (`gemini-api-docs.md`).

**File Location**: `docs/external/gemini-api-docs/gemini-api-docs.md` (207,118 lines)

**Last Updated**: Generated from spidered documentation on 2025-11-19

**Note**: Most grep commands use the `-E` flag for extended regular expressions. This enables proper handling of alternation (`|`) and other regex features.

---

## Quick Navigation Commands

### Find Main Documentation Sections
```bash
# Find Gemini API main section
grep -n "^# Gemini API$" gemini-api-docs.md

# Find Meet the models section
grep -n "^## Meet the models$" gemini-api-docs.md

# Find Explore Capabilities section
grep -n "^## Explore Capabilities$" gemini-api-docs.md

# Find Developer Toolkit section
grep -n "^## Developer Toolkit$" gemini-api-docs.md

# Find Quickstart section
grep -nE "^### Gemini API quickstart" gemini-api-docs.md

# Find API Keys section
grep -nE "^### Using Gemini API keys" gemini-api-docs.md

# Find Models documentation
grep -nE "^### Gemini models" gemini-api-docs.md

# Find OpenAI compatibility section
grep -nE "^### OpenAI compatibility" gemini-api-docs.md

# Find Embeddings section
grep -n "^## Embeddings$" gemini-api-docs.md

# Find Text-to-Speech section
grep -n "^## Single-speaker text-to-speech$" gemini-api-docs.md

# Find Video input section
grep -n "^## Video input$" gemini-api-docs.md

# Find PDF processing section
grep -n "^## Passing inline PDF data$" gemini-api-docs.md

# Find Image input section
grep -n "^## Passing images to Gemini$" gemini-api-docs.md

# Find Audio input section
grep -n "^## Input audio$" gemini-api-docs.md

# Find Rate limits section
grep -n "^## How rate limits work$" gemini-api-docs.md

# Find Computer Use section
grep -n "^## How Computer Use works$" gemini-api-docs.md

# Find Robotics section
grep -n "^## Getting started: Finding objects in a scene$" gemini-api-docs.md

# Find Gemma models section
grep -n "^## Gemma 3$" gemini-api-docs.md
```

### Find Language-Specific Examples
```bash
# Find Python examples
grep -n "^### Python$" gemini-api-docs.md

# Find JavaScript examples
grep -n "^### JavaScript$" gemini-api-docs.md

# Find Go examples
grep -n "^### Go$" gemini-api-docs.md

# Find Java examples
grep -n "^### Java$" gemini-api-docs.md

# Find C# examples
grep -n "^### C#$" gemini-api-docs.md

# Find REST examples
grep -n "^### REST$" gemini-api-docs.md

# Find Apps Script examples
grep -n "^### Apps Script$" gemini-api-docs.md
```

### Find Model Documentation
```bash
# Find Gemini 3 Pro
grep -n "^## Gemini 3 Pro$" gemini-api-docs.md

# Find Gemini 2.5 Pro
grep -n "^## Gemini 2.5 Pro$" gemini-api-docs.md

# Find Gemini 2.5 Flash
grep -n "^## Gemini 2.5 Flash$" gemini-api-docs.md

# Find Gemini 2.5 Flash-Lite
grep -n "^## Gemini 2.5 Flash-Lite$" gemini-api-docs.md

# Find Gemini 2.0 Flash
grep -n "^## Gemini 2.0 Flash$" gemini-api-docs.md

# Find all model sections
grep -nE "^## Gemini [0-9]" gemini-api-docs.md
```

---

## Documentation Organization

The documentation is organized into **main sections**:

1. **Gemini API Overview** - Main landing page with quick start examples
2. **Meet the models** - Overview of available models
3. **Explore Capabilities** - Features and capabilities overview
4. **Developer Toolkit** - Tools and resources for developers
5. **Quickstart Guides** - Getting started tutorials
6. **API Keys** - Authentication and API key management
7. **Libraries** - SDK documentation for different languages
8. **OpenAI Compatibility** - OpenAI API compatibility layer
9. **Models Documentation** - Detailed model specifications
10. **Gemini 3 Developer Guide** - Gemini 3 specific features
11. **Imagen** - Image generation documentation
12. **Veo** - Video generation documentation
13. **Lyria** - Music generation documentation
14. **Build Mode in Google AI Studio** - Building applications in Google AI Studio
15. **Embeddings** - Text and multimodal embeddings
16. **Robotics** - Robotics capabilities
17. **Text-to-Speech (TTS)** - Speech generation
18. **Video Input** - Video processing capabilities
19. **PDF Processing** - PDF document processing
20. **Image Input** - Image processing capabilities
21. **Audio Input** - Audio processing capabilities
22. **Rate Limits** - API rate limits and quotas
23. **Computer Use** - Browser automation and interaction
24. **Gemma Models** - Open-source language models

---

## Section 1: Gemini API Overview

**Purpose**: Main landing page with quick start examples and overview.

### Key Sections

#### Main Landing Page
```bash
# Find Gemini API main section
grep -n "^# Gemini API$" gemini-api-docs.md

# Find quick start code examples
grep -nE "^### (Python|JavaScript|Go|Java|C#|REST)$" gemini-api-docs.md | head -20
```

#### Meet the Models
```bash
# Find Meet the models section
grep -n "^## Meet the models$" gemini-api-docs.md

# Find model overview content
grep -n -A30 "^## Meet the models$" gemini-api-docs.md | head -50
```

#### Explore Capabilities
```bash
# Find Explore Capabilities section
grep -n "^## Explore Capabilities$" gemini-api-docs.md

# Find capabilities overview
grep -n -A30 "^## Explore Capabilities$" gemini-api-docs.md | head -50
```

#### Developer Toolkit
```bash
# Find Developer Toolkit section
grep -n "^## Developer Toolkit$" gemini-api-docs.md

# Find toolkit overview
grep -n -A30 "^## Developer Toolkit$" gemini-api-docs.md | head -50
```

---

## Section 2: Quickstart Guides

**Purpose**: Getting started tutorials for different languages.

### Key Sections

#### Quickstart Overview
```bash
# Find quickstart section
grep -nE "^### Gemini API quickstart" gemini-api-docs.md

# Find Before you begin
grep -n "^## Before you begin$" gemini-api-docs.md

# Find Install SDK section
grep -n "^## Install the Google GenAI SDK$" gemini-api-docs.md

# Find Make your first request
grep -n "^## Make your first request$" gemini-api-docs.md

# Find What's next
grep -n "^## What's next$" gemini-api-docs.md
```

#### Language-Specific Quickstarts
```bash
# Find Python quickstart
grep -n "^### Python$" gemini-api-docs.md | head -10

# Find JavaScript quickstart
grep -n "^### JavaScript$" gemini-api-docs.md | head -10

# Find Go quickstart
grep -n "^### Go$" gemini-api-docs.md | head -10

# Find Java quickstart
grep -n "^### Java$" gemini-api-docs.md | head -10

# Find C# quickstart
grep -n "^### C#$" gemini-api-docs.md | head -10

# Find REST quickstart
grep -n "^### REST$" gemini-api-docs.md | head -10

# Find Apps Script quickstart
grep -n "^### Apps Script$" gemini-api-docs.md
```

---

## Section 3: API Keys

**Purpose**: Authentication and API key management.

### Key Sections

#### API Keys Overview
```bash
# Find API Keys section
grep -nE "^### Using Gemini API keys" gemini-api-docs.md

# Find API Keys subsection
grep -n "^## API Keys$" gemini-api-docs.md

# Find Google Cloud projects
grep -n "^## Google Cloud projects$" gemini-api-docs.md

# Find Default project
grep -n "^### Default project$" gemini-api-docs.md

# Find Import projects
grep -n "^## Import projects$" gemini-api-docs.md

# Find Limitations
grep -n "^## Limitations$" gemini-api-docs.md
```

#### Setting API Key
```bash
# Find Setting the API key as environment variable
grep -n "^## Setting the API key as an environment variable$" gemini-api-docs.md

# Find Linux/macOS - Bash
grep -n "^### Linux/macOS - Bash$" gemini-api-docs.md

# Find macOS - Zsh
grep -n "^### macOS - Zsh$" gemini-api-docs.md

# Find Windows
grep -n "^### Windows$" gemini-api-docs.md

# Find Providing API key explicitly
grep -n "^## Providing the API key explicitly$" gemini-api-docs.md
```

#### Security
```bash
# Find Keep your API key secure
grep -n "^## Keep your API key secure$" gemini-api-docs.md

# Find Critical security rules
grep -n "^### Critical security rules$" gemini-api-docs.md

# Find Best practices
grep -n "^### Best practices$" gemini-api-docs.md
```

---

## Section 4: Libraries

**Purpose**: SDK documentation for different programming languages.

### Key Sections

#### Libraries Overview
```bash
# Find Libraries section
grep -nE "^### Gemini API libraries" gemini-api-docs.md

# Find Language support and installation
grep -n "^## Language support and installation$" gemini-api-docs.md

# Find General availability
grep -n "^## General availability$" gemini-api-docs.md

# Find Legacy libraries and migration
grep -n "^## Legacy libraries and migration$" gemini-api-docs.md

# Find Prompt templates for code generation
grep -n "^## Prompt templates for code generation$" gemini-api-docs.md
```

#### Language-Specific Libraries
```bash
# Find Python library
grep -n "^### Python$" gemini-api-docs.md | grep -B2 "libraries\|library"

# Find JavaScript library
grep -n "^### JavaScript$" gemini-api-docs.md | grep -B2 "libraries\|library"

# Find Go library
grep -n "^### Go$" gemini-api-docs.md | grep -B2 "libraries\|library"

# Find Java library
grep -n "^### Java$" gemini-api-docs.md | grep -B2 "libraries\|library"

# Find C# library
grep -n "^### C#$" gemini-api-docs.md | grep -B2 "libraries\|library"
```

---

## Section 5: OpenAI Compatibility

**Purpose**: OpenAI API compatibility layer documentation.

### Key Sections

#### Compatibility Overview
```bash
# Find OpenAI compatibility section
grep -nE "^### OpenAI compatibility" gemini-api-docs.md

# Find Thinking
grep -n "^## Thinking$" gemini-api-docs.md

# Find Streaming
grep -n "^## Streaming$" gemini-api-docs.md

# Find Function calling
grep -n "^## Function calling$" gemini-api-docs.md

# Find Image understanding
grep -n "^## Image understanding$" gemini-api-docs.md

# Find Generate an image
grep -n "^## Generate an image$" gemini-api-docs.md

# Find Audio understanding
grep -n "^## Audio understanding$" gemini-api-docs.md

# Find Structured output
grep -n "^## Structured output$" gemini-api-docs.md

# Find Embeddings
grep -n "^## Embeddings$" gemini-api-docs.md

# Find Batch API
grep -n "^## Batch API$" gemini-api-docs.md
```

#### Compatibility Features
```bash
# Find Thinking examples
grep -nE "^### (Python|JavaScript|REST)$" gemini-api-docs.md | grep -B5 "Thinking" | head -20

# Find Streaming examples
grep -nE "^### (Python|JavaScript|REST)$" gemini-api-docs.md | grep -B5 "Streaming" | head -20

# Find Function calling examples
grep -nE "^### (Python|JavaScript|REST)$" gemini-api-docs.md | grep -B5 "Function calling" | head -20

# Find Image understanding examples
grep -nE "^### (Python|JavaScript|REST)$" gemini-api-docs.md | grep -B5 "Image understanding" | head -20

# Find Audio understanding examples
grep -nE "^### (Python|JavaScript|REST)$" gemini-api-docs.md | grep -B5 "Audio understanding" | head -20
```

#### Extra Body Parameters
```bash
# Find extra_body section
grep -n "^## \`extra_body\`$" gemini-api-docs.md

# Find cached_content
grep -n "^### \`cached_content\`$" gemini-api-docs.md
```

#### Model Management
```bash
# Find List models
grep -n "^## List models$" gemini-api-docs.md

# Find Retrieve a model
grep -n "^## Retrieve a model$" gemini-api-docs.md

# Find Current limitations
grep -n "^## Current limitations$" gemini-api-docs.md
```

---

## Section 6: Models Documentation

**Purpose**: Detailed documentation for each Gemini model.

### Key Sections

#### Models Overview
```bash
# Find Models section
grep -nE "^### Gemini models" gemini-api-docs.md

# Find Model version name patterns
grep -n "^## Model version name patterns$" gemini-api-docs.md

# Find Stable versions
grep -n "^### Stable$" gemini-api-docs.md

# Find Preview versions
grep -n "^### Preview$" gemini-api-docs.md

# Find Latest versions
grep -n "^### Latest$" gemini-api-docs.md

# Find Experimental versions
grep -n "^### Experimental$" gemini-api-docs.md

# Find Model deprecations
grep -n "^## Model deprecations$" gemini-api-docs.md
```

#### Gemini 3 Pro
```bash
# Find Gemini 3 Pro section
grep -n "^## Gemini 3 Pro$" gemini-api-docs.md

# Find Expand to learn more
grep -n "^### Expand to learn more$" gemini-api-docs.md | head -5

# Find Model details
grep -n "^#### Model details$" gemini-api-docs.md

# Find Gemini 3 Pro Preview
grep -n "^### Gemini 3 Pro Preview$" gemini-api-docs.md
```

#### Gemini 2.5 Pro
```bash
# Find Gemini 2.5 Pro section
grep -n "^## Gemini 2.5 Pro$" gemini-api-docs.md

# Find Gemini 2.5 Pro model
grep -n "^### Gemini 2.5 Pro$" gemini-api-docs.md

# Find Gemini 2.5 Pro TTS
grep -n "^### Gemini 2.5 Pro TTS$" gemini-api-docs.md
```

#### Gemini 2.5 Flash
```bash
# Find Gemini 2.5 Flash section
grep -n "^## Gemini 2.5 Flash$" gemini-api-docs.md

# Find Gemini 2.5 Flash model
grep -n "^### Gemini 2.5 Flash$" gemini-api-docs.md

# Find Gemini 2.5 Flash Preview
grep -n "^### Gemini 2.5 Flash Preview$" gemini-api-docs.md

# Find Gemini 2.5 Flash Image
grep -n "^### Gemini 2.5 Flash Image$" gemini-api-docs.md

# Find Gemini 2.5 Flash Live
grep -n "^### Gemini 2.5 Flash Live$" gemini-api-docs.md

# Find Gemini 2.5 Flash TTS
grep -n "^### Gemini 2.5 Flash TTS$" gemini-api-docs.md
```

#### Gemini 2.5 Flash-Lite
```bash
# Find Gemini 2.5 Flash-Lite section
grep -n "^## Gemini 2.5 Flash-Lite$" gemini-api-docs.md

# Find Gemini 2.5 Flash-Lite model
grep -n "^### Gemini 2.5 Flash-Lite$" gemini-api-docs.md

# Find Gemini 2.5 Flash-Lite Preview
grep -n "^### Gemini 2.5 Flash-Lite Preview$" gemini-api-docs.md
```

#### Previous Gemini Models
```bash
# Find Previous Gemini models section
grep -n "^## Previous Gemini models$" gemini-api-docs.md

# Find Gemini 2.0 Flash
grep -n "^## Gemini 2.0 Flash$" gemini-api-docs.md

# Find Gemini 2.0 Flash model
grep -n "^### Gemini 2.0 Flash$" gemini-api-docs.md

# Find Gemini 2.0 Flash Image
grep -n "^### Gemini 2.0 Flash Image$" gemini-api-docs.md

# Find Gemini 2.0 Flash Live
grep -n "^### Gemini 2.0 Flash Live$" gemini-api-docs.md

# Find Gemini 2.0 Flash-Lite
grep -n "^## Gemini 2.0 Flash-Lite$" gemini-api-docs.md
```

---

## Section 7: Gemini 3 Developer Guide

**Purpose**: Gemini 3 specific features and migration guide.

### Key Sections

#### Developer Guide Overview
```bash
# Find Gemini 3 Developer Guide
grep -nE "^### Gemini 3 Developer Guide" gemini-api-docs.md

# Find Explore section
grep -n "^## Explore$" gemini-api-docs.md

# Find Meet Gemini 3
grep -n "^## Meet Gemini 3$" gemini-api-docs.md

# Find New API features in Gemini 3
grep -n "^## New API features in Gemini 3$" gemini-api-docs.md

# Find Migrating from Gemini 2.5
grep -n "^## Migrating from Gemini 2.5$" gemini-api-docs.md

# Find OpenAI compatibility
grep -n "^## OpenAI compatibility$" gemini-api-docs.md

# Find Prompting best practices
grep -n "^## Prompting best practices$" gemini-api-docs.md

# Find FAQ
grep -n "^## FAQ$" gemini-api-docs.md

# Find Next steps
grep -n "^## Next steps$" gemini-api-docs.md
```

#### Gemini 3 Features
```bash
# Find Thinking level
grep -n "^### Thinking level$" gemini-api-docs.md

# Find Media resolution
grep -n "^### Media resolution$" gemini-api-docs.md

# Find Temperature
grep -n "^### Temperature$" gemini-api-docs.md

# Find Thought signatures
grep -n "^### Thought signatures$" gemini-api-docs.md

# Find Structured Outputs with tools
grep -n "^### Structured Outputs with tools$" gemini-api-docs.md
```

---

## Section 8: Imagen (Image Generation)

**Purpose**: Image generation using Imagen models.

### Key Sections

#### Imagen Overview
```bash
# Find Generate images using Imagen section
grep -nE "^### Generate images using Imagen" gemini-api-docs.md

# Find Generate images using the Imagen models
grep -n "^## Generate images using the Imagen models$" gemini-api-docs.md

# Find Imagen prompt guide
grep -n "^## Imagen prompt guide$" gemini-api-docs.md

# Find Model versions
grep -n "^## Model versions$" gemini-api-docs.md
```

#### Imagen Features
```bash
# Find Imagen configuration
grep -n "^### Imagen configuration$" gemini-api-docs.md

# Find Prompt writing basics
grep -n "^### Prompt writing basics$" gemini-api-docs.md

# Find Generate text in images
grep -n "^### Generate text in images$" gemini-api-docs.md

# Find Prompt parameterization
grep -n "^### Prompt parameterization$" gemini-api-docs.md

# Find Advanced prompt writing techniques
grep -n "^### Advanced prompt writing techniques$" gemini-api-docs.md

# Find Illustration and art
grep -n "^### Illustration and art$" gemini-api-docs.md
```

#### Imagen Models
```bash
# Find Imagen 4
grep -n "^### Imagen 4$" gemini-api-docs.md

# Find Imagen 3
grep -n "^### Imagen 3$" gemini-api-docs.md
```

---

## Section 9: Veo (Video Generation)

**Purpose**: Video generation using Veo models.

### Key Sections

#### Veo Overview
```bash
# Find Veo quickstart
grep -nE "^### Gemini API quickstart" gemini-api-docs.md | grep -B5 -A5 "Veo\|video" | head -20

# Find Text to video generation
grep -n "^## Text to video generation$" gemini-api-docs.md

# Find Image to video generation
grep -n "^## Image to video generation$" gemini-api-docs.md

# Find Extending Veo videos
grep -n "^## Extending Veo videos$" gemini-api-docs.md

# Find Handling asynchronous operations
grep -n "^## Handling asynchronous operations$" gemini-api-docs.md

# Find Veo API parameters and specifications
grep -n "^## Veo API parameters and specifications$" gemini-api-docs.md

# Find Veo prompt guide
grep -n "^## Veo prompt guide$" gemini-api-docs.md

# Find Limitations
grep -n "^## Limitations$" gemini-api-docs.md | grep -B5 -A5 "Veo\|video" | head -20

# Find Model features
grep -n "^## Model features$" gemini-api-docs.md | grep -B5 -A5 "Veo\|video" | head -20

# Find Model versions
grep -n "^## Model versions$" gemini-api-docs.md | grep -B5 -A5 "Veo\|video" | head -20

# Find What's next
grep -n "^## What's next$" gemini-api-docs.md | grep -B5 -A5 "Veo\|video" | head -20
```

---

## Section 10: Lyria (Music Generation)

**Purpose**: Music generation using Lyria models.

### Key Sections

#### Lyria Overview
```bash
# Find How music generation works
grep -n "^## How music generation works$" gemini-api-docs.md

# Find Generate and control music
grep -n "^## Generate and control music$" gemini-api-docs.md

# Find Steer music in real-time
grep -n "^## Steer music in real-time$" gemini-api-docs.md

# Find Prompt guide for Lyria RealTime
grep -n "^## Prompt guide for Lyria RealTime$" gemini-api-docs.md

# Find Best practices
grep -n "^## Best practices$" gemini-api-docs.md | grep -B5 -A5 "Lyria\|music" | head -20

# Find Technical details
grep -n "^## Technical details$" gemini-api-docs.md | grep -B5 -A5 "Lyria\|music" | head -20

# Find What's next
grep -n "^## What's next$" gemini-api-docs.md | grep -B5 -A5 "Lyria\|music" | head -20
```

---

## Section 11: Build Mode in Google AI Studio

**Purpose**: Building applications in Google AI Studio.

### Key Sections

#### Build Mode Overview
```bash
# Find Build mode in Google AI Studio
grep -nE "^### Build mode in Google AI Studio" gemini-api-docs.md

# Find Get started
grep -n "^## Get started$" gemini-api-docs.md | head -5

# Find What is created?
grep -n "^## What is created\?$" gemini-api-docs.md

# Find Continue building
grep -n "^## Continue building$" gemini-api-docs.md

# Find Build in Google AI Studio
grep -n "^### Build in Google AI Studio$" gemini-api-docs.md

# Find Develop externally
grep -n "^### Develop externally$" gemini-api-docs.md

# Find Key features
grep -n "^## Key features$" gemini-api-docs.md | head -5

# Find Deploy or archive your app
grep -n "^## Deploy or archive your app$" gemini-api-docs.md

# Find Limitations
grep -n "^## Limitations$" gemini-api-docs.md | head -5

# Find What's Next?
grep -n "^## What's Next\?$" gemini-api-docs.md
```

---

## Section 12: Embeddings

**Purpose**: Text and multimodal embeddings for semantic search and similarity.

### Key Sections

#### Embeddings Overview
```bash
# Find Embeddings section
grep -n "^## Embeddings$" gemini-api-docs.md

# Find Generating embeddings
grep -n "^## Generating embeddings$" gemini-api-docs.md

# Find Specify task type to improve performance
grep -n "^## Specify task type to improve performance$" gemini-api-docs.md

# Find Controlling embedding size
grep -n "^## Controlling embedding size$" gemini-api-docs.md

# Find Ensuring quality for smaller dimensions
grep -n "^## Ensuring quality for smaller dimensions$" gemini-api-docs.md

# Find Use cases
grep -n "^## Use cases$" gemini-api-docs.md | grep -B5 -A5 "embedding\|Embedding" | head -20

# Find Storing embeddings
grep -n "^## Storing embeddings$" gemini-api-docs.md

# Find Model versions
grep -n "^## Model versions$" gemini-api-docs.md | grep -B5 -A5 "embedding\|Embedding" | head -20

# Find Batch embeddings
grep -n "^## Batch embeddings$" gemini-api-docs.md

# Find Responsible use notice
grep -n "^## Responsible use notice$" gemini-api-docs.md | grep -B5 -A5 "embedding\|Embedding" | head -20

# Find Start building with embeddings
grep -n "^## Start building with embeddings$" gemini-api-docs.md

# Find Deprecation notice for legacy models
grep -n "^## Deprecation notice for legacy models$" gemini-api-docs.md | grep -B5 -A5 "embedding\|Embedding" | head -20
```

---

## Section 13: Robotics

**Purpose**: Robotics capabilities using Gemini Robotics models.

### Key Sections

#### Robotics Overview
```bash
# Find Safety section
grep -n "^## Safety$" gemini-api-docs.md | grep -B5 -A5 "robotic\|Robotic" | head -20

# Find Getting started: Finding objects in a scene
grep -n "^## Getting started: Finding objects in a scene$" gemini-api-docs.md

# Find How it works
grep -n "^## How it works$" gemini-api-docs.md | grep -B5 -A5 "robotic\|Robotic" | head -20

# Find Agentic capabilities for robotics
grep -n "^## Agentic capabilities for robotics$" gemini-api-docs.md

# Find Best practices
grep -n "^## Best practices$" gemini-api-docs.md | grep -B5 -A5 "robotic\|Robotic" | head -20

# Find Limitations
grep -n "^## Limitations$" gemini-api-docs.md | grep -B5 -A5 "robotic\|Robotic" | head -20

# Find Privacy Notice
grep -n "^## Privacy Notice$" gemini-api-docs.md | grep -B5 -A5 "robotic\|Robotic" | head -20

# Find Pricing
grep -n "^## Pricing$" gemini-api-docs.md | grep -B5 -A5 "robotic\|Robotic" | head -20

# Find Model versions
grep -n "^## Model versions$" gemini-api-docs.md | grep -B5 -A5 "robotic\|Robotic" | head -20

# Find Next steps
grep -n "^## Next steps$" gemini-api-docs.md | grep -B5 -A5 "robotic\|Robotic" | head -20
```

#### Robotics Models
```bash
# Find Gemini Robotics-ER 1.5 Preview
grep -n "^## Gemini Robotics-ER 1.5 Preview$" gemini-api-docs.md
```

---

## Section 14: Text-to-Speech (TTS)

**Purpose**: Text-to-speech generation using Gemini TTS models.

### Key Sections

#### TTS Overview
```bash
# Find Before you begin
grep -n "^## Before you begin$" gemini-api-docs.md | grep -B5 -A5 "TTS\|speech" | head -20

# Find Single-speaker text-to-speech
grep -n "^## Single-speaker text-to-speech$" gemini-api-docs.md

# Find Multi-speaker text-to-speech
grep -n "^## Multi-speaker text-to-speech$" gemini-api-docs.md

# Find Controlling speech style with prompts
grep -n "^## Controlling speech style with prompts$" gemini-api-docs.md

# Find Generating a prompt to convert to audio
grep -n "^## Generating a prompt to convert to audio$" gemini-api-docs.md

# Find Voice options
grep -n "^## Voice options$" gemini-api-docs.md

# Find Supported languages
grep -n "^## Supported languages$" gemini-api-docs.md

# Find Supported models
grep -n "^## Supported models$" gemini-api-docs.md | grep -B5 -A5 "TTS\|speech" | head -20

# Find Limitations
grep -n "^## Limitations$" gemini-api-docs.md | grep -B5 -A5 "TTS\|speech" | head -20

# Find What's next
grep -n "^## What's next$" gemini-api-docs.md | grep -B5 -A5 "TTS\|speech" | head -20
```

#### TTS Models
```bash
# Find Gemini 2.5 Pro TTS
grep -n "^### Gemini 2.5 Pro TTS$" gemini-api-docs.md

# Find Gemini 2.5 Flash TTS
grep -n "^### Gemini 2.5 Flash TTS$" gemini-api-docs.md

# Find Gemini 2.5 Pro Preview TTS
grep -n "^### Gemini 2.5 Pro Preview TTS$" gemini-api-docs.md

# Find Gemini 2.5 Flash Preview TTS
grep -n "^### Gemini 2.5 Flash Preview TTS$" gemini-api-docs.md
```

---

## Section 15: Video Input

**Purpose**: Processing video inputs with Gemini models.

### Key Sections

#### Video Input Overview
```bash
# Find Video input section
grep -n "^## Video input$" gemini-api-docs.md

# Find Refer to timestamps in the content
grep -n "^## Refer to timestamps in the content$" gemini-api-docs.md

# Find Extract detailed insights from video
grep -n "^## Extract detailed insights from video$" gemini-api-docs.md

# Find Customize video processing
grep -n "^## Customize video processing$" gemini-api-docs.md

# Find Supported video formats
grep -n "^## Supported video formats$" gemini-api-docs.md

# Find Technical details about videos
grep -n "^## Technical details about videos$" gemini-api-docs.md

# Find What's next
grep -n "^## What's next$" gemini-api-docs.md | grep -B5 -A5 "video\|Video" | head -20
```

---

## Section 16: PDF Processing

**Purpose**: Processing PDF documents with Gemini models.

### Key Sections

#### PDF Overview
```bash
# Find Passing inline PDF data
grep -n "^## Passing inline PDF data$" gemini-api-docs.md

# Find Uploading PDFs using the File API
grep -n "^## Uploading PDFs using the File API$" gemini-api-docs.md

# Find Passing multiple PDFs
grep -n "^## Passing multiple PDFs$" gemini-api-docs.md

# Find Technical details
grep -n "^## Technical details$" gemini-api-docs.md | grep -B5 -A5 "PDF\|pdf" | head -20

# Find What's next
grep -n "^## What's next$" gemini-api-docs.md | grep -B5 -A5 "PDF\|pdf" | head -20
```

---

## Section 17: Image Input

**Purpose**: Processing image inputs with Gemini models.

### Key Sections

#### Image Input Overview
```bash
# Find Passing images to Gemini
grep -n "^## Passing images to Gemini$" gemini-api-docs.md

# Find Prompting with multiple images
grep -n "^## Prompting with multiple images$" gemini-api-docs.md

# Find Object detection
grep -n "^## Object detection$" gemini-api-docs.md

# Find Segmentation
grep -n "^## Segmentation$" gemini-api-docs.md

# Find Supported image formats
grep -n "^## Supported image formats$" gemini-api-docs.md

# Find Capabilities
grep -n "^## Capabilities$" gemini-api-docs.md | grep -B5 -A5 "image\|Image" | head -20

# Find Limitations and key technical information
grep -n "^## Limitations and key technical information$" gemini-api-docs.md

# Find Tips and best practices
grep -n "^## Tips and best practices$" gemini-api-docs.md | grep -B5 -A5 "image\|Image" | head -20

# Find What's next
grep -n "^## What's next$" gemini-api-docs.md | grep -B5 -A5 "image\|Image" | head -20
```

---

## Section 18: Audio Input

**Purpose**: Processing audio inputs with Gemini models.

### Key Sections

#### Audio Input Overview
```bash
# Find Input audio section
grep -n "^## Input audio$" gemini-api-docs.md

# Find Get a transcript
grep -n "^## Get a transcript$" gemini-api-docs.md

# Find Refer to timestamps
grep -n "^## Refer to timestamps$" gemini-api-docs.md | grep -B5 -A5 "audio\|Audio" | head -20

# Find Count tokens
grep -n "^## Count tokens$" gemini-api-docs.md

# Find Supported audio formats
grep -n "^## Supported audio formats$" gemini-api-docs.md

# Find Technical details about audio
grep -n "^## Technical details about audio$" gemini-api-docs.md

# Find What's next
grep -n "^## What's next$" gemini-api-docs.md | grep -B5 -A5 "audio\|Audio" | head -20
```

---

## Section 19: Rate Limits

**Purpose**: Understanding and managing API rate limits.

### Key Sections

#### Rate Limits Overview
```bash
# Find How rate limits work
grep -n "^## How rate limits work$" gemini-api-docs.md

# Find Usage tiers
grep -n "^## Usage tiers$" gemini-api-docs.md

# Find Standard API rate limits
grep -n "^## Standard API rate limits$" gemini-api-docs.md

# Find Batch API rate limits
grep -n "^## Batch API rate limits$" gemini-api-docs.md

# Find How to upgrade to the next tier
grep -n "^## How to upgrade to the next tier$" gemini-api-docs.md

# Find Request a rate limit increase
grep -n "^## Request a rate limit increase$" gemini-api-docs.md

# Find Rate limits (general)
grep -n "^## Rate limits$" gemini-api-docs.md

# Find Pricing and rate limits
grep -n "^## Pricing and rate limits$" gemini-api-docs.md
```

---

## Section 20: Computer Use

**Purpose**: Computer Use capabilities for browser automation and interaction.

### Key Sections

#### Computer Use Overview
```bash
# Find How Computer Use works
grep -n "^## How Computer Use works$" gemini-api-docs.md

# Find How to implement Computer Use
grep -n "^## How to implement Computer Use$" gemini-api-docs.md

# Find Gemini 2.5 Computer Use Preview
grep -n "^## Gemini 2.5 Computer Use Preview$" gemini-api-docs.md
```

---

## Section 21: Gemma Models

**Purpose**: Gemma open-source language models.

### Key Sections

#### Gemma Models Overview
```bash
# Find Gemma 3
grep -n "^## Gemma 3$" gemini-api-docs.md

# Find Gemma 3n
grep -n "^## Gemma 3n$" gemini-api-docs.md
```

---

## Common Patterns

### Finding Code Examples
```bash
# Find code blocks (markdown code fences)
grep -n "^```" gemini-api-docs.md | head -100

# Find Python code examples
grep -n "^### Python$" gemini-api-docs.md | head -50

# Find JavaScript code examples
grep -n "^### JavaScript$" gemini-api-docs.md | head -50

# Find REST API examples
grep -n "^### REST$" gemini-api-docs.md | head -50
```

### Finding Source URLs
```bash
# Find source URL patterns
grep -n "\*\*Source:\*\*" gemini-api-docs.md | head -50

# Find specific source URLs
grep -n "ai.google.dev" gemini-api-docs.md | head -50
```

### Finding API Endpoints
```bash
# Find API endpoint patterns
grep -nE "(POST|GET|PUT|DELETE) /v[0-9]" gemini-api-docs.md | head -50

# Find endpoint URLs
grep -n "https://" gemini-api-docs.md | head -100
```

---

## Advanced Search Patterns

### Find All Models
```bash
# Find all model sections
grep -nE "^## Gemini [0-9]" gemini-api-docs.md

# Find all model variants
grep -nE "^### Gemini [0-9]" gemini-api-docs.md

# Extract unique model names
grep -oE "Gemini [0-9.]+ (Pro|Flash|Flash-Lite|Preview|TTS|Image|Live)" gemini-api-docs.md | sort -u
```

### Find All Language Examples
```bash
# Find all Python examples
grep -n "^### Python$" gemini-api-docs.md

# Find all JavaScript examples
grep -n "^### JavaScript$" gemini-api-docs.md

# Find all Go examples
grep -n "^### Go$" gemini-api-docs.md

# Find all Java examples
grep -n "^### Java$" gemini-api-docs.md

# Find all C# examples
grep -n "^### C#$" gemini-api-docs.md

# Find all REST examples
grep -n "^### REST$" gemini-api-docs.md
```

### Find API Features
```bash
# Find Thinking feature
grep -n "Thinking\|thinking" gemini-api-docs.md | head -30

# Find Streaming feature
grep -n "Streaming\|streaming" gemini-api-docs.md | head -30

# Find Function calling feature
grep -n "Function calling\|function calling\|functionCalling" gemini-api-docs.md | head -30

# Find Image understanding feature
grep -n "Image understanding\|image understanding\|imageUnderstanding" gemini-api-docs.md | head -30

# Find Audio understanding feature
grep -n "Audio understanding\|audio understanding\|audioUnderstanding" gemini-api-docs.md | head -30

# Find Structured output feature
grep -n "Structured output\|structured output\|structuredOutput" gemini-api-docs.md | head -30

# Find Embeddings feature
grep -n "Embeddings\|embeddings" gemini-api-docs.md | head -30
```

---

## Module-Specific Search Strategies

### For Text Generation
```bash
# Find text generation examples
grep -n "generate.*content\|generateContent\|text generation" gemini-api-docs.md | head -30

# Find prompt examples
grep -n "prompt\|Prompt" gemini-api-docs.md | head -50

# Find temperature settings
grep -n "temperature\|Temperature" gemini-api-docs.md | head -30

# Find Thinking with Gemini 2.5
grep -n "^## Thinking with Gemini 2.5$" gemini-api-docs.md

# Find System instructions
grep -n "^## System instructions and other configurations$" gemini-api-docs.md

# Find Multimodal inputs
grep -n "^## Multimodal inputs$" gemini-api-docs.md

# Find Multi-turn conversations
grep -n "^## Multi-turn conversations (chat)$" gemini-api-docs.md

# Find Chat functionality
grep -n "^## Chat$" gemini-api-docs.md

# Find Code execution in chat
grep -n "^## Use code execution in chat$" gemini-api-docs.md
```

### For Image Generation
```bash
# Find Imagen documentation
grep -n "Imagen\|imagen" gemini-api-docs.md | head -50

# Find image generation examples
grep -n "generate.*image\|generateImage\|image.*generation" gemini-api-docs.md | head -30

# Find image understanding
grep -n "image.*understanding\|imageUnderstanding\|vision" gemini-api-docs.md | head -30
```

### For Video Generation
```bash
# Find Veo documentation
grep -n "Veo\|veo" gemini-api-docs.md | head -50

# Find video generation examples
grep -n "video.*generation\|generate.*video\|videoGeneration" gemini-api-docs.md | head -30

# Find video extension
grep -n "extend.*video\|video.*extend\|extending.*video" gemini-api-docs.md | head -20
```

### For Music Generation
```bash
# Find Lyria documentation
grep -n "Lyria\|lyria" gemini-api-docs.md | head -50

# Find music generation examples
grep -n "music.*generation\|generate.*music\|musicGeneration" gemini-api-docs.md | head -30

# Find real-time music
grep -n "real-time\|realtime\|steer.*music" gemini-api-docs.md | head -20
```

### For Streaming
```bash
# Find streaming examples
grep -n "stream\|Stream\|streaming\|Streaming" gemini-api-docs.md | head -50

# Find streaming responses
grep -n "stream.*response\|response.*stream" gemini-api-docs.md | head -20
```

### For Function Calling
```bash
# Find function calling examples
grep -n "function.*call\|functionCall\|tools\|Tools" gemini-api-docs.md | head -50

# Find tool definitions
grep -n "tool.*definition\|define.*tool" gemini-api-docs.md | head -20
```

### For Embeddings
```bash
# Find embeddings examples
grep -n "embed\|Embed\|embedding\|Embedding" gemini-api-docs.md | head -50

# Find embedding models
grep -n "embedding.*model\|model.*embedding" gemini-api-docs.md | head -20

# Find embedding task types
grep -n "task.*type\|taskType\|classification\|clustering\|retrieval" gemini-api-docs.md | head -30

# Find embedding size control
grep -n "embedding.*size\|dimension\|dimension.*embedding" gemini-api-docs.md | head -20
```

### For Text-to-Speech
```bash
# Find TTS documentation
grep -n "TTS\|text-to-speech\|text.*speech\|speech.*generation" gemini-api-docs.md | head -50

# Find TTS models
grep -nE "^### (Gemini.*TTS|.*TTS.*)" gemini-api-docs.md

# Find voice options
grep -n "voice.*option\|voiceOption\|speaker" gemini-api-docs.md | head -20

# Find supported languages for TTS
grep -n "supported.*language\|language.*TTS" gemini-api-docs.md | head -20
```

### For Video Input
```bash
# Find video input documentation
grep -n "video.*input\|input.*video\|video.*processing" gemini-api-docs.md | head -50

# Find video timestamp references
grep -n "timestamp.*video\|video.*timestamp\|refer.*timestamp" gemini-api-docs.md | head -20

# Find video formats
grep -n "video.*format\|format.*video\|supported.*video" gemini-api-docs.md | head -20
```

### For PDF Processing
```bash
# Find PDF documentation
grep -n "PDF\|pdf\|document.*processing" gemini-api-docs.md | head -50

# Find File API for PDFs
grep -n "File.*API\|upload.*PDF\|PDF.*upload" gemini-api-docs.md | head -20

# Find inline PDF data
grep -n "inline.*PDF\|PDF.*inline" gemini-api-docs.md | head -20
```

### For Image Input
```bash
# Find image input documentation
grep -n "image.*input\|input.*image\|passing.*image" gemini-api-docs.md | head -50

# Find object detection
grep -n "object.*detection\|detection.*object" gemini-api-docs.md | head -20

# Find segmentation
grep -n "segmentation\|Segment" gemini-api-docs.md | head -20

# Find image formats
grep -n "image.*format\|format.*image\|supported.*image" gemini-api-docs.md | head -20
```

### For Audio Input
```bash
# Find audio input documentation
grep -n "audio.*input\|input.*audio\|audio.*transcription" gemini-api-docs.md | head -50

# Find transcript
grep -n "transcript\|Transcription" gemini-api-docs.md | head -30

# Find audio formats
grep -n "audio.*format\|format.*audio\|supported.*audio" gemini-api-docs.md | head -20
```

### For Rate Limits
```bash
# Find rate limits documentation
grep -n "rate.*limit\|rateLimit\|quota\|Quota" gemini-api-docs.md | head -50

# Find usage tiers
grep -n "usage.*tier\|tier\|upgrade.*tier" gemini-api-docs.md | head -20

# Find rate limit increase
grep -n "rate.*limit.*increase\|increase.*rate.*limit" gemini-api-docs.md | head -20
```

### For Computer Use
```bash
# Find Computer Use documentation
grep -n "Computer Use\|computer.*use\|browser.*automation" gemini-api-docs.md | head -50

# Find Playwright
grep -n "Playwright\|playwright" gemini-api-docs.md | head -20

# Find browser automation
grep -n "browser.*automation\|automation.*browser" gemini-api-docs.md | head -20
```

### For Robotics
```bash
# Find robotics documentation
grep -n "robotic\|Robotic\|robotics\|Robotics" gemini-api-docs.md | head -50

# Find object detection in scene
grep -n "object.*scene\|scene.*object\|finding.*object" gemini-api-docs.md | head -20

# Find robotics models
grep -n "Robotics-ER\|robotics.*model" gemini-api-docs.md | head -20
```

### For Gemma Models
```bash
# Find Gemma documentation
grep -n "Gemma\|gemma" gemini-api-docs.md | head -50

# Find Gemma 3
grep -n "^## Gemma 3$" gemini-api-docs.md

# Find Gemma 3n
grep -n "^## Gemma 3n$" gemini-api-docs.md
```

### For Live API
```bash
# Find Live API documentation
grep -n "Live API\|live.*API" gemini-api-docs.md | head -50

# Find Get started with Live API
grep -nE "^### Get started with Live API" gemini-api-docs.md

# Find Live API capabilities guide
grep -nE "^### Live API capabilities guide" gemini-api-docs.md

# Find Tool use with Live API
grep -nE "^### Tool use with Live API" gemini-api-docs.md

# Find Session management with Live API
grep -nE "^### Session management with Live API" gemini-api-docs.md
```

### For Google Maps Grounding
```bash
# Find Grounding with Google Maps
grep -nE "^### Grounding with Google Maps" gemini-api-docs.md

# Find Google Maps contextual widget
grep -nE "^### Display the Google Maps contextual widget" gemini-api-docs.md

# Find Google Maps attribution
grep -nE "^### Google Maps text attribution guidelines" gemini-api-docs.md

# Find Google Maps sources
grep -n "Google Maps.*source\|source.*Google Maps" gemini-api-docs.md | head -20
```

### For Troubleshooting
```bash
# Find Troubleshooting guide
grep -nE "^### Troubleshooting guide" gemini-api-docs.md

# Find Troubleshooting multimodal prompt
grep -nE "^### Troubleshooting your multimodal prompt" gemini-api-docs.md

# Find troubleshooting patterns
grep -n "troubleshoot\|Troubleshoot\|error\|Error\|issue\|Issue" gemini-api-docs.md | head -50
```

### For OAuth Authentication
```bash
# Find Authentication with OAuth quickstart
grep -nE "^### Authentication with OAuth quickstart" gemini-api-docs.md

# Find OAuth patterns
grep -n "OAuth\|oauth" gemini-api-docs.md | head -30
```

### For Context Window and Long Context
```bash
# Find Context window documentation
grep -n "^## What is a context window" gemini-api-docs.md

# Find Getting started with long context
grep -n "^## Getting started with long context$" gemini-api-docs.md

# Find Long context use cases
grep -n "^## Long context use cases$" gemini-api-docs.md

# Find Long context optimizations
grep -n "^## Long context optimizations$" gemini-api-docs.md

# Find Long context limitations
grep -n "^## Long context limitations$" gemini-api-docs.md

# Find Context window compression
grep -n "^## Context window compression$" gemini-api-docs.md
```

### For Model Context Protocol (MCP)
```bash
# Find Model context protocol (MCP)
grep -n "^## Model context protocol (MCP)$" gemini-api-docs.md

# Find MCP patterns
grep -n "MCP\|Model context protocol" gemini-api-docs.md | head -30
```

### For Token Counting
```bash
# Find Count tokens
grep -n "^## Count tokens$" gemini-api-docs.md

# Find Token count
grep -n "^## Token count$" gemini-api-docs.md

# Find token patterns
grep -n "token.*count\|count.*token\|Token" gemini-api-docs.md | head -30
```

### For Ephemeral Tokens
```bash
# Find How ephemeral tokens work
grep -n "^## How ephemeral tokens work$" gemini-api-docs.md

# Find Create an ephemeral token
grep -n "^## Create an ephemeral token$" gemini-api-docs.md

# Find Connect to Live API with an ephemeral token
grep -n "^## Connect to Live API with an ephemeral token$" gemini-api-docs.md

# Find ephemeral token patterns
grep -n "ephemeral.*token\|token.*ephemeral" gemini-api-docs.md | head -20
```

---

## Efficient Search Workflow

### Step 1: Identify Section
```bash
# If you know the section (Quickstart, Models, etc.)
grep -nE "^## (Meet the models|Explore Capabilities|Developer Toolkit|Before you begin|API Keys|Thinking|Streaming|Function calling|Image understanding|Audio understanding|Structured output|Embeddings|Batch API|Gemini 3 Pro|Gemini 2.5 Pro|Gemini 2.5 Flash|Text to video|Image to video|How music generation|Generating embeddings|Single-speaker text-to-speech|Video input|Passing inline PDF data|Passing images to Gemini|Input audio|How rate limits work|How Computer Use works|Getting started: Finding objects in a scene|Gemma 3)" gemini-api-docs.md

# Or search for main sections
grep -n "^## " gemini-api-docs.md | head -50
```

### Step 2: Find Specific Feature/Model/API
```bash
# Within that section, find the specific item
# Example: Find Gemini 2.5 Flash
grep -n "^## Gemini 2.5 Flash$" gemini-api-docs.md

# Or find by pattern
grep -nE "^## (Gemini 2.5|Gemini 3|Imagen|Veo|Lyria)" gemini-api-docs.md
```

### Step 3: Find Language Examples
```bash
# Find language-specific examples
# Example: Find Python examples for streaming
grep -n "^### Python$" gemini-api-docs.md | grep -B5 -A5 "Streaming" | head -20
```

### Step 4: Read Documentation
```bash
# Use line numbers from grep to read specific sections
# Example: Read lines 1000-1500 (example section)
sed -n '1000,1500p' gemini-api-docs.md
```

---

## Key API Surface Areas

### Core API Features
- **Text Generation**: `generateContent`, `generateContentStream`
- **Thinking**: Thinking level, thought signatures (Gemini 3), Thinking with Gemini 2.5
- **Streaming**: Stream responses for real-time output
- **Function Calling**: Tool definitions and function calling
- **Image Understanding**: Vision capabilities, image analysis
- **Audio Understanding**: Audio processing and transcription
- **Structured Output**: Schema-based output formatting
- **Embeddings**: Text and multimodal embeddings
- **Batch API**: Batch processing for multiple requests
- **Multi-turn Conversations**: Chat functionality, conversation management
- **System Instructions**: Custom system prompts and configurations
- **Multimodal Inputs**: Combining text, images, audio, video in single requests
- **Code Execution**: Code execution in chat contexts
- **Live API**: Real-time streaming API capabilities
- **Grounding**: Google Maps grounding and attribution
- **Context Window**: Long context support, context window management
- **Model Context Protocol (MCP)**: Protocol for model context management
- **Token Counting**: Token usage tracking and limits
- **Ephemeral Tokens**: Temporary tokens for Live API connections

### Models
- **Gemini 3 Pro**: Latest flagship model with thinking capabilities
- **Gemini 2.5 Pro**: High-performance model with TTS support
- **Gemini 2.5 Flash**: Fast, efficient model with multiple variants (Preview, Image, Live, TTS)
- **Gemini 2.5 Flash-Lite**: Lightweight model variant
- **Gemini 2.0 Flash**: Previous generation model
- **Gemini 2.0 Flash-Lite**: Previous generation lightweight model

### Image Generation (Imagen)
- **Imagen 4**: Latest image generation model
- **Imagen 3**: Previous generation image model
- **Features**: Text-to-image, image editing, prompt optimization

### Video Generation (Veo)
- **Text to Video**: Generate videos from text prompts
- **Image to Video**: Generate videos from images
- **Video Extension**: Extend existing videos
- **Features**: Asynchronous operations, prompt guide

### Music Generation (Lyria)
- **Music Generation**: Generate music from prompts
- **Real-time Control**: Steer music generation in real-time
- **Features**: Prompt guide, best practices, technical details

### SDKs and Libraries
- **Python**: `google-genai` package
- **JavaScript**: `@google/genai` package
- **Go**: `google.golang.org/genai` package
- **Java**: Java SDK
- **C#**: C# SDK
- **REST**: REST API endpoints
- **Apps Script**: Google Apps Script support

### Authentication
- **API Keys**: Environment variables, explicit provision
- **OAuth Authentication**: OAuth-based authentication
- **Google Cloud Projects**: Default project, import projects
- **Security**: Best practices, critical security rules

### Embeddings
- **Text Embeddings**: Semantic search and similarity
- **Multimodal Embeddings**: Text and image embeddings
- **Task Types**: Classification, clustering, retrieval, etc.
- **Embedding Size**: Control embedding dimensions
- **Batch Embeddings**: Process multiple embeddings

### Input Processing
- **Image Input**: Image analysis, object detection, segmentation
- **Video Input**: Video processing, timestamp references, insights
- **Audio Input**: Audio transcription, timestamp references
- **PDF Processing**: PDF document processing, File API

### Additional Models
- **Gemini Embedding**: Embedding models
- **Gemini Robotics-ER 1.5 Preview**: Robotics capabilities
- **Gemini 2.5 Computer Use Preview**: Browser automation
- **Gemma 3**: Open-source language model
- **Gemma 3n**: Open-source language model variant

### Rate Limits and Quotas
- **Usage Tiers**: Different rate limit tiers
- **Standard API Rate Limits**: Per-minute and per-day limits
- **Batch API Rate Limits**: Batch processing limits
- **Rate Limit Increases**: Request process for higher limits

---

## Tips for LLM Navigation

1. **Start with Section**: Always identify which main section (Quickstart, Models, Features, etc.) contains what you need
2. **Use Line Numbers**: The grep commands provide line numbers - use them to jump directly to sections
3. **Context Matters**: Use `-A` and `-B` flags to get context around matches
4. **Multiple Matches**: Some content appears multiple times (overview sections, repeated headers) - use `head` to limit results
5. **Language Examples**: Most features have examples in Python, JavaScript, Go, Java, C#, and REST
6. **Source URLs**: Each section has a source URL - use these to verify against online docs if needed
7. **Pattern Matching**: Gemini API uses consistent naming: models follow `Gemini X.Y [Variant]`, features use camelCase or kebab-case

---

## Example Use Cases

### Use Case 1: Find Python quickstart example
```bash
# Step 1: Find quickstart section
grep -nE "^### Gemini API quickstart" gemini-api-docs.md

# Step 2: Find Python example in quickstart
grep -n "^### Python$" gemini-api-docs.md | head -5

# Step 3: Read the Python quickstart section
# Use line numbers from grep output
```

### Use Case 2: Find Gemini 2.5 Flash model details
```bash
# Step 1: Find Gemini 2.5 Flash section
grep -n "^## Gemini 2.5 Flash$" gemini-api-docs.md

# Step 2: Find model details
grep -n "^#### Model details$" gemini-api-docs.md | grep -B5 "Flash" | head -10

# Step 3: Read the model details section
# Use line numbers from grep output
```

### Use Case 3: Find streaming examples
```bash
# Step 1: Find Streaming section
grep -n "^## Streaming$" gemini-api-docs.md

# Step 2: Find Python streaming example
grep -n "^### Python$" gemini-api-docs.md | grep -B5 -A5 "Streaming" | head -20

# Step 3: Read the streaming examples
# Use line numbers from grep output
```

### Use Case 4: Find function calling documentation
```bash
# Step 1: Find Function calling section
grep -n "^## Function calling$" gemini-api-docs.md

# Step 2: Find JavaScript function calling example
grep -n "^### JavaScript$" gemini-api-docs.md | grep -B5 -A5 "Function calling" | head -20

# Step 3: Read the function calling documentation
# Use line numbers from grep output
```

### Use Case 5: Find Imagen image generation
```bash
# Step 1: Find Imagen section
grep -nE "^### Generate images using Imagen" gemini-api-docs.md

# Step 2: Find Python Imagen example
grep -n "^### Python$" gemini-api-docs.md | grep -B5 -A5 "Imagen\|image" | head -20

# Step 3: Read the Imagen documentation
# Use line numbers from grep output
```

### Use Case 6: Find API key setup
```bash
# Step 1: Find API Keys section
grep -nE "^### Using Gemini API keys" gemini-api-docs.md

# Step 2: Find environment variable setup
grep -n "^## Setting the API key as an environment variable$" gemini-api-docs.md

# Step 3: Find Python explicit API key example
grep -n "^### Python$" gemini-api-docs.md | grep -B5 -A5 "API key\|api.*key" | head -20
```

### Use Case 7: Find Gemini 3 features
```bash
# Step 1: Find Gemini 3 Developer Guide
grep -nE "^### Gemini 3 Developer Guide" gemini-api-docs.md

# Step 2: Find Thinking level feature
grep -n "^### Thinking level$" gemini-api-docs.md

# Step 3: Find Media resolution feature
grep -n "^### Media resolution$" gemini-api-docs.md

# Step 4: Read the Gemini 3 features
# Use line numbers from grep output
```

### Use Case 8: Find Veo video generation
```bash
# Step 1: Find Text to video generation
grep -n "^## Text to video generation$" gemini-api-docs.md

# Step 2: Find Python Veo example
grep -n "^### Python$" gemini-api-docs.md | grep -B5 -A5 "Veo\|video" | head -20

# Step 3: Read the Veo documentation
# Use line numbers from grep output
```

### Use Case 9: Find OpenAI compatibility
```bash
# Step 1: Find OpenAI compatibility section
grep -nE "^### OpenAI compatibility" gemini-api-docs.md

# Step 2: Find compatibility features
grep -nE "^## (Thinking|Streaming|Function calling|Image understanding|Audio understanding|Structured output|Embeddings|Batch API)$" gemini-api-docs.md

# Step 3: Read the compatibility documentation
# Use line numbers from grep output
```

### Use Case 10: Find model version patterns
```bash
# Step 1: Find Model version name patterns
grep -n "^## Model version name patterns$" gemini-api-docs.md

# Step 2: Find version types
grep -nE "^### (Stable|Preview|Latest|Experimental)$" gemini-api-docs.md

# Step 3: Read the version patterns documentation
# Use line numbers from grep output
```

### Use Case 11: Find embeddings documentation
```bash
# Step 1: Find Embeddings section
grep -n "^## Embeddings$" gemini-api-docs.md

# Step 2: Find Generating embeddings
grep -n "^## Generating embeddings$" gemini-api-docs.md

# Step 3: Find embedding examples
grep -n "^### Python$" gemini-api-docs.md | grep -B5 -A5 "embedding\|Embedding" | head -20
```

### Use Case 12: Find text-to-speech documentation
```bash
# Step 1: Find Single-speaker text-to-speech
grep -n "^## Single-speaker text-to-speech$" gemini-api-docs.md

# Step 2: Find Multi-speaker text-to-speech
grep -n "^## Multi-speaker text-to-speech$" gemini-api-docs.md

# Step 3: Find TTS examples
grep -n "^### Python$" gemini-api-docs.md | grep -B5 -A5 "TTS\|speech" | head -20
```

### Use Case 13: Find video input documentation
```bash
# Step 1: Find Video input section
grep -n "^## Video input$" gemini-api-docs.md

# Step 2: Find video processing examples
grep -n "^### Python$" gemini-api-docs.md | grep -B5 -A5 "video\|Video" | head -20

# Step 3: Find supported video formats
grep -n "^## Supported video formats$" gemini-api-docs.md
```

### Use Case 14: Find PDF processing documentation
```bash
# Step 1: Find Passing inline PDF data
grep -n "^## Passing inline PDF data$" gemini-api-docs.md

# Step 2: Find Uploading PDFs using the File API
grep -n "^## Uploading PDFs using the File API$" gemini-api-docs.md

# Step 3: Find PDF examples
grep -n "^### Python$" gemini-api-docs.md | grep -B5 -A5 "PDF\|pdf" | head -20
```

### Use Case 15: Find rate limits documentation
```bash
# Step 1: Find How rate limits work
grep -n "^## How rate limits work$" gemini-api-docs.md

# Step 2: Find Standard API rate limits
grep -n "^## Standard API rate limits$" gemini-api-docs.md

# Step 3: Find Request a rate limit increase
grep -n "^## Request a rate limit increase$" gemini-api-docs.md
```

### Use Case 16: Find Computer Use documentation
```bash
# Step 1: Find How Computer Use works
grep -n "^## How Computer Use works$" gemini-api-docs.md

# Step 2: Find How to implement Computer Use
grep -n "^## How to implement Computer Use$" gemini-api-docs.md

# Step 3: Find Computer Use examples
grep -n "^### Python$" gemini-api-docs.md | grep -B5 -A5 "Computer Use\|computer use" | head -20
```

### Use Case 17: Find robotics documentation
```bash
# Step 1: Find Getting started: Finding objects in a scene
grep -n "^## Getting started: Finding objects in a scene$" gemini-api-docs.md

# Step 2: Find Agentic capabilities for robotics
grep -n "^## Agentic capabilities for robotics$" gemini-api-docs.md

# Step 3: Find robotics examples
grep -n "^### Python$" gemini-api-docs.md | grep -B5 -A5 "robotic\|Robotic" | head -20
```

### Use Case 18: Find image input documentation
```bash
# Step 1: Find Passing images to Gemini
grep -n "^## Passing images to Gemini$" gemini-api-docs.md

# Step 2: Find Object detection
grep -n "^## Object detection$" gemini-api-docs.md

# Step 3: Find Segmentation
grep -n "^## Segmentation$" gemini-api-docs.md
```

### Use Case 19: Find audio input documentation
```bash
# Step 1: Find Input audio section
grep -n "^## Input audio$" gemini-api-docs.md

# Step 2: Find Get a transcript
grep -n "^## Get a transcript$" gemini-api-docs.md

# Step 3: Find audio examples
grep -n "^### Python$" gemini-api-docs.md | grep -B5 -A5 "audio\|Audio" | head -20
```

### Use Case 20: Find Gemma models documentation
```bash
# Step 1: Find Gemma 3
grep -n "^## Gemma 3$" gemini-api-docs.md

# Step 2: Find Gemma 3n
grep -n "^## Gemma 3n$" gemini-api-docs.md

# Step 3: Find Gemma examples
grep -n "^### Python$" gemini-api-docs.md | grep -B5 -A5 "Gemma\|gemma" | head -20
```

### Use Case 21: Find Live API documentation
```bash
# Step 1: Find Get started with Live API
grep -nE "^### Get started with Live API" gemini-api-docs.md

# Step 2: Find Live API capabilities guide
grep -nE "^### Live API capabilities guide" gemini-api-docs.md

# Step 3: Find Live API examples
grep -n "^### Python$" gemini-api-docs.md | grep -B5 -A5 "Live API\|live.*API" | head -20
```

### Use Case 22: Find multi-turn conversation documentation
```bash
# Step 1: Find Multi-turn conversations
grep -n "^## Multi-turn conversations (chat)$" gemini-api-docs.md

# Step 2: Find Chat section
grep -n "^## Chat$" gemini-api-docs.md

# Step 3: Find chat examples
grep -n "^### Python$" gemini-api-docs.md | grep -B5 -A5 "chat\|Chat\|conversation" | head -20
```

### Use Case 23: Find Google Maps grounding documentation
```bash
# Step 1: Find Grounding with Google Maps
grep -nE "^### Grounding with Google Maps" gemini-api-docs.md

# Step 2: Find Google Maps attribution guidelines
grep -nE "^### Google Maps text attribution guidelines" gemini-api-docs.md

# Step 3: Find Google Maps examples
grep -n "^### Python$" gemini-api-docs.md | grep -B5 -A5 "Google Maps\|Maps" | head -20
```

### Use Case 24: Find troubleshooting documentation
```bash
# Step 1: Find Troubleshooting guide
grep -nE "^### Troubleshooting guide" gemini-api-docs.md

# Step 2: Find Troubleshooting multimodal prompt
grep -nE "^### Troubleshooting your multimodal prompt" gemini-api-docs.md

# Step 3: Find troubleshooting examples
grep -n "troubleshoot\|error\|issue" gemini-api-docs.md | head -50
```

### Use Case 25: Find context window documentation
```bash
# Step 1: Find What is a context window
grep -n "^## What is a context window" gemini-api-docs.md

# Step 2: Find Getting started with long context
grep -n "^## Getting started with long context$" gemini-api-docs.md

# Step 3: Find long context examples
grep -n "^### Python$" gemini-api-docs.md | grep -B5 -A5 "context\|Context" | head -20
```

### Use Case 26: Find token counting documentation
```bash
# Step 1: Find Count tokens
grep -n "^## Count tokens$" gemini-api-docs.md

# Step 2: Find Token count
grep -n "^## Token count$" gemini-api-docs.md

# Step 3: Find token counting examples
grep -n "^### Python$" gemini-api-docs.md | grep -B5 -A5 "token\|Token" | head -20
```

### Use Case 27: Find ephemeral tokens documentation
```bash
# Step 1: Find How ephemeral tokens work
grep -n "^## How ephemeral tokens work$" gemini-api-docs.md

# Step 2: Find Create an ephemeral token
grep -n "^## Create an ephemeral token$" gemini-api-docs.md

# Step 3: Find ephemeral token examples
grep -n "^### Python$" gemini-api-docs.md | grep -B5 -A5 "ephemeral\|token" | head -20
```

---

## Notes

- **File Size**: The documentation file is 207,118 lines - always use `head` or `tail` to limit results
- **Duplicates**: Some content appears multiple times (overview sections, repeated headers) - this is normal and expected due to how the documentation is structured
- **Format**: Documentation follows Google AI's standard format with markdown rendering
- **Source URLs**: Each section includes source URL pointing to original online documentation (ai.google.dev/gemini-api)
- **Line Numbers**: Line numbers are approximate - content may shift if documentation is regenerated
- **Naming Conventions**:
  - Models: `Gemini X.Y [Variant]` (e.g., `Gemini 3 Pro`, `Gemini 2.5 Flash`)
  - Features: camelCase or kebab-case (e.g., `generateContent`, `function calling`)
  - Languages: Capitalized (e.g., `Python`, `JavaScript`, `Go`)
- **Section Structure**: Each feature/model typically has: Overview, Language examples (Python, JavaScript, Go, Java, C#, REST), Configuration, Best practices
- **Version Coverage**: Documentation covers Gemini 3, Gemini 2.5, Gemini 2.0, Imagen 4, Imagen 3, Veo, Lyria, Gemma 3, Gemma 3n, Gemini Robotics-ER 1.5 Preview, and Gemini 2.5 Computer Use Preview

---

## Maintenance

When regenerating the documentation:

1. Update the "Last Updated" date
2. Verify line numbers still match (they may shift)
3. Update any section-specific content if structure changes
4. Add new models, features, or APIs as they appear
5. Update "Key API Surface Areas" section with new APIs
6. Check for new sections (new models, features, etc.)
7. Update model version patterns if they change
8. Add new language SDKs if they're added

---

**End of Index**

