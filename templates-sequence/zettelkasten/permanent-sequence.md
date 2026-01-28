# {{input: title: Concept Name}} ({{zettel-id}})

id:: {{zettel-id}}
type:: permanent
created:: {{date: YYYY-MM-DD}}T{{time: HHmm}}00.000Z
context:: {{select: context: quick-capture | reading | meeting | walking | research | idea | project | personal}}
status:: {{select: status: draft | in-progress | complete | archived}}
tags:: #zettel #permanent {{if: {{device}} == "mobile"}}#mobile-capture{{endif}}
device:: {{device}}

**Concept**: {{input: concept: Core concept or idea}}
**Importance**: {{select: importance: low | medium | high | critical}}
**Confidence**: {{select: confidence: low | medium | high | certain}}

## Core Idea
{{input: claim: Your main claim or argument}}

## Supporting Points
{{input: evidence: Evidence and reasoning}}

{{if: {{select: include-implications: yes | no}} == "yes"}}
## Implications
{{input: implications: Consequences and applications}}
{{endif}}

{{if: {{device}} == "desktop"}}
## Connections
- Builds on: {{input: builds-on: Related notes}}
- Contrasts with: {{input: contrasts-with: Opposing views}}
- Related to: {{input: related-to: Other related concepts}}

## Questions
{{input: questions: Unanswered questions or areas for exploration}}

## Development History
- Created: {{date: YYYY-MM-DD}}
- Last reviewed: {{date: YYYY-MM-DD}}
- Next review: {{date: +30d}}

## References
{{input: references: Supporting sources and citations}}
{{endif}}