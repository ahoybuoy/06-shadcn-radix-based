# shadcn/ui + Radix Test Repository

## Purpose
This test repository represents a **typical modern React project using shadcn/ui and Radix primitives**. It tests how Buoy handles this very common pattern.

## What This Tests
- Detection of shadcn/ui component patterns
- Recognition of @radix-ui primitives
- Understanding of class-variance-authority (cva) patterns
- Identification of drift in custom components that override shadcn defaults
- Proper handling of components.json configuration

## Characteristics
- **40+ components** in components/ui/ directory
- Uses @radix-ui/react-* primitives
- Has `components.json` for shadcn configuration
- Uses class-variance-authority (cva) for variant styling
- Mix of:
  - Pure shadcn components (clean)
  - Slightly modified shadcn components (minor drift)
  - Custom components with drift (overrides, arbitrary values)

## Drift Patterns to Detect
1. **Clean shadcn components** - Using default shadcn patterns
2. **Extended components** - Adding variants to shadcn base
3. **Custom overrides** - Components that override shadcn defaults with arbitrary values
4. **Conflicting patterns** - Some custom components that break from the shadcn design system

## Expected Buoy Results
- Should identify shadcn/ui as the design system base
- Should detect drift in custom components
- Should recognize cva patterns
- Drift score should be moderate (~20-30%) due to custom components

## Component Structure
```
src/
  components/
    ui/           - shadcn/ui components (40+)
    custom/       - Custom components with drift
  lib/
    utils.ts      - cn utility function
```

## Tech Stack
- React 18
- TypeScript
- Tailwind CSS
- @radix-ui/react-* primitives
- class-variance-authority (cva)
- shadcn/ui components
