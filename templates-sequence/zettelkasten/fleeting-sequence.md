# {{input: title: Quick Thought}} ({{zettel-id}})

id:: {{zettel-id}}
type:: fleeting
created:: {{date: YYYY-MM-DD}}T{{time: HHmm}}00.000Z
context:: {{select: context: quick-capture | reading | meeting | walking | research | idea | project | personal}}
status:: draft
tags:: #zettel #fleeting {{if: {{device}} == "mobile"}}#mobile-capture{{endif}}
device:: {{device}}

**Captured**: {{date: YYYY-MM-DD}} {{time: HHmm}}
**Priority**: {{select: priority: low | medium | high}}
**Project**: {{input: project: Optional project name}}

## Thought
{{input: content: Enter your quick thought here}}

## To Process Later
- [ ] Expand into permanent note
- [ ] Find connections
- [ ] Add context
- [ ] Review by: {{date: +3d}}

{{if: {{select: include-advanced: yes | no}} == "yes"}}
## Advanced
**Energy Level**: {{select: energy: low | medium | high}}
**Location**: {{input: location: Where are you?}}
**Mood**: {{input: mood: How are you feeling?}}
{{endif}}

{{if: {{device}} == "desktop"}}
## Desktop-Only Sections
**Review Notes**: 
**Connections**: 
- Related to: [[ ]]
- Inspired by: [[ ]]
{{endif}}