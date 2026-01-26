export const TEMPLATES = {
  fleeting: `id:: {{id}}
type:: fleeting
created:: {{timestamp}}
context:: {{context}}
status:: draft
tags:: #zettel #fleeting

# {{id}} - Fleeting Note

**Context**: {{context}}
**Captured**: {{date}} {{time}}
**Device**: {{capture-device}}

## Quick Thought
{{content}}

## To Develop
- [ ] Expand into permanent note
- [ ] Find connections
- [ ] Add references

## Raw Capture
{{raw-thought}}`,

  literature: `id:: {{id}}
type:: literature
created:: {{timestamp}}
context:: {{context}}
status:: draft
tags:: #zettel #literature

# {{id}} - Literature Note

**Source**: {{source-title}}
**Author**: {{source-author}}
**Read**: {{date}}
**Context**: {{context}}

## Summary
{{summary}}

## Key Quotes
{{quotes}}

## My Thoughts
{{thoughts}}

## Connections
- [[ ]]
- [[ ]]

## References
{{references}}`,

  permanent: `id:: {{id}}
type:: permanent
created:: {{timestamp}}
context:: {{context}}
status:: draft
tags:: #zettel #permanent

# {{id}} - Permanent Note

**Concept**: {{concept}}
**Developed**: {{date}} {{time}}
**Context**: {{context}}

## Claim
{{claim}}

## Evidence
{{evidence}}

## Implications
{{implications}}

## Connections
- Builds on: [[ ]]
- Contrasts with: [[ ]]
- Related to: [[ ]]

## Questions
{{questions}}`
};

export function getTemplate(noteType) {
  return TEMPLATES[noteType] || TEMPLATES.fleeting;
}

export function getTemplateNames() {
  return Object.keys(TEMPLATES);
}

export function getTemplateDisplayName(noteType) {
  const names = {
    fleeting: 'Fleeting Note',
    literature: 'Literature Note',
    permanent: 'Permanent Note'
  };
  return names[noteType] || 'Fleeting Note';
}