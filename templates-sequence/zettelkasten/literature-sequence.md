# {{input: title: Source Title}} ({{zettel-id}})

id:: {{zettel-id}}
type:: literature
created:: {{date: YYYY-MM-DD}}T{{time: HHmm}}00.000Z
context:: {{select: context: quick-capture | reading | meeting | walking | research | idea | project | personal}}
status:: draft
tags:: #zettel #literature {{if: {{device}} == "mobile"}}#mobile-capture{{endif}}
device:: {{device}}

**Source**: {{input: source-title: Book/Article Title}}
**Author**: {{input: author: Author Name}}
**Read**: {{date: YYYY-MM-DD}}
**Source Type**: {{select: source-type: book | article | paper | blog | video | podcast | other}}
**Rating**: {{select: rating: ⭐☆☆☆☆ | ⭐⭐☆☆☆ | ⭐⭐⭐☆☆ | ⭐⭐⭐⭐☆ | ⭐⭐⭐⭐⭐}}

## Summary
{{input: summary: Brief summary of the source}}

## Key Points
{{input: key-points: Main points or arguments}}

{{if: {{select: include-quotes: yes | no}} == "yes"}}
## Quotes
{{input: quotes: Key quotes or passages}}
{{endif}}

{{if: {{select: include-thoughts: yes | no}} == "yes"}}
## My Thoughts
{{input: thoughts: Your reflections and connections}}
{{endif}}

{{if: {{device}} == "desktop"}}
## References
{{input: references: Citation details or links}}

## Connections
- Builds on: [[ ]]
- Contrasts with: [[ ]]
- Related to: [[ ]]

## Action Items
- [ ] Follow up on references
- [ ] Share with colleagues
- [ ] Apply to current projects
{{endif}}