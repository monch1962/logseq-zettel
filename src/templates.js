export const TEMPLATES = {
  fleeting: `id:: {{id}}
type:: fleeting

# {{date}}-{{time-no-colon}} - Quick Thought

**Captured**: {{date}} {{time-no-colon}} • {{capture-device}}
**Context**: {{context}}

## Thought
{{content}}

## To Process Later
- [ ] Expand into permanent note
- [ ] Find connections
- [ ] Add context

{{if-desktop}}
**Status**: draft  
**Tags**: #zettel #fleeting #mobile-capture
**Created**: {{timestamp}}
{{endif}}`,

  literature: `id:: {{id}}
type:: literature

# {{date}}-{{time-no-colon}} - {{source-title}}

**Source**: {{source-title}}  
**Author**: {{source-author}}  
**Read**: {{date}} • {{capture-device}}
**Context**: {{context}}

## Summary
{{summary}}

## Key Points
{{key-points}}

{{if-desktop}}
## Quotes
{{quotes}}

## My Thoughts  
{{thoughts}}

## References
{{references}}

**Status**: draft  
**Tags**: #zettel #literature #mobile-capture  
**Created**: {{timestamp}}
{{endif}}`,

  permanent: `id:: {{id}}
type:: permanent

# {{date}}-{{time-no-colon}} - {{concept}}

**Concept**: {{concept}}  
**Developed**: {{date}} {{time-no-colon}} • {{capture-device}}
**Context**: {{context}}

## Core Idea
{{claim}}

## Supporting Points
{{evidence}}

{{if-desktop}}
## Implications
{{implications}}

## Connections
- Builds on: [[ ]]
- Contrasts with: [[ ]]
- Related to: [[ ]]

## Questions
{{questions}}

**Status**: draft  
**Tags**: #zettel #permanent #mobile-capture  
**Created**: {{timestamp}}
{{endif}}`
};

export function getTemplate(noteType) {
  return TEMPLATES[noteType] || TEMPLATES.fleeting;
}

export function getTemplateNames() {
  return Object.keys(TEMPLATES);
}

export function getTemplateDisplayName(noteType) {
  const names = {
    fleeting: 'Quick Thought',
    literature: 'Reading Note',
    permanent: 'Developed Idea'
  };
  return names[noteType] || 'Quick Thought';
}