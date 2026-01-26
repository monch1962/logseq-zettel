# Template Guide - Logseq Zettelkasten Plugin

## Overview

The plugin provides three default Zettelkasten templates that can be modified to suit your workflow. Templates are stored as regular Logseq pages and use variable substitution for dynamic content.

## Default Templates

### 1. Fleeting Note Template
**Purpose**: Quick capture of immediate thoughts

```markdown
id:: {{id}}
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
{{raw-thought}}
```

### 2. Literature Note Template
**Purpose**: Notes from reading/learning

```markdown
id:: {{id}}
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
{{references}}
```

### 3. Permanent Note Template
**Purpose**: Developed ideas and synthesized concepts

```markdown
id:: {{id}}
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
{{questions}}
```

## Template Variables

### Available Variables
| Variable | Description | Example |
|----------|-------------|---------|
| `{{id}}` | Timestamp ID | `2026-01-27-143022` |
| `{{date}}` | Current date | `2026-01-27` |
| `{{time}}` | Current time | `14:30` |
| `{{timestamp}}` | ISO timestamp | `2026-01-27T14:30:22.000Z` |
| `{{context}}` | Capture context | `quick-capture` |
| `{{note-type}}` | Note type | `fleeting` |
| `{{status}}` | Default status | `draft` |
| `{{capture-device}}` | Device type | `mobile` or `desktop` |
| `{{year}}` | Current year | `2026` |
| `{{month}}` | Current month | `01` |
| `{{day}}` | Current day | `27` |
| `{{weekday}}` | Day of week | `Tuesday` |

### User Variables (Fill manually)
| Variable | Used In | Purpose |
|----------|---------|---------|
| `{{content}}` | Fleeting | Main thought |
| `{{raw-thought}}` | Fleeting | Unprocessed thought |
| `{{source-title}}` | Literature | Book/article title |
| `{{source-author}}` | Literature | Author name |
| `{{summary}}` | Literature | Brief summary |
| `{{quotes}}` | Literature | Key passages |
| `{{thoughts}}` | Literature | Personal reflections |
| `{{references}}` | Literature | Citation details |
| `{{concept}}` | Permanent | Core concept |
| `{{claim}}` | Permanent | Main argument |
| `{{evidence}}` | Permanent | Supporting evidence |
| `{{implications}}` | Permanent | Consequences |
| `{{questions}}` | Permanent | Unanswered questions |

## Customizing Templates

### Step 1: Locate Template Pages
Templates are stored as pages in your Logseq graph:
- `templates/zettel-fleeting`
- `templates/zettel-literature`
- `templates/zettel-permanent`

### Step 2: Edit Template Content
1. Open the template page
2. Modify the structure
3. Save changes

### Step 3: Test Changes
1. Create a test note with modified template
2. Verify variable substitution works
3. Check journal integration

### Modification Examples

#### Add Custom Fields
```markdown
# Add to template
**Project**: {{project}}
**Priority**: {{priority}}
```

#### Change Section Order
```markdown
# Reorder sections
## My Thoughts
{{thoughts}}

## Key Quotes  
{{quotes}}

## Summary
{{summary}}
```

#### Add Custom Sections
```markdown
# Add new section
## Action Items
- [ ] Research further
- [ ] Discuss with team
- [ ] Write blog post
```

## Template Design Guidelines

### Essential Elements (Do Not Remove)
1. **Properties Block**: Must include `id::`, `type::`, `created::`
2. **Title Format**: `# {{id}} - [Note Type]`
3. **Basic Metadata**: Context, date, device

### Recommended Structure
1. **Properties** (top of note)
2. **Title & Metadata**
3. **Content Sections** (template-specific)
4. **Connection Fields**
5. **Optional Sections**

### Mobile Considerations
- **Simplify**: Mobile templates auto-remove optional sections
- **Essential Only**: Keep critical fields
- **Quick Entry**: Minimize typing on mobile

## Template Examples Repository

### Sample Custom Templates

#### Academic Research Template
```markdown
id:: {{id}}
type:: literature
created:: {{timestamp}}
context:: research
status:: draft
tags:: #zettel #literature #academic

# {{id}} - Research Note: {{paper-title}}

**Authors**: {{authors}}
**Journal**: {{journal}}
**Year**: {{year}}
**DOI**: {{doi}}

## Research Question
{{research-question}}

## Methodology
{{methodology}}

## Key Findings
{{findings}}

## Limitations
{{limitations}}

## Connections to My Work
{{connections}}

## Citations
{{citations}}
```

#### Meeting Notes Template
```markdown
id:: {{id}}
type:: fleeting  
created:: {{timestamp}}
context:: meeting
status:: draft
tags:: #zettel #fleeting #meeting

# {{id}} - Meeting: {{meeting-topic}}

**Date**: {{date}}
**Time**: {{time}}
**Attendees**: {{attendees}}
**Location**: {{location}}

## Agenda
{{agenda}}

## Discussion Points
{{discussion}}

## Decisions Made
{{decisions}}

## Action Items
{{action-items}}

## Next Steps
{{next-steps}}
```

## Best Practices

### Template Design
1. **Consistency**: Use similar structure across templates
2. **Clarity**: Clear section headers
3. **Flexibility**: Allow for different content types
4. **Export-Friendly**: Ensure Obsidian compatibility

### Variable Usage
1. **Required Variables**: Always include `{{id}}`, `{{date}}`, `{{timestamp}}`
2. **Context Variables**: Use `{{context}}` for workflow tracking
3. **Custom Variables**: Add as needed for your workflow

### Testing Changes
1. **Small Changes**: Test each modification
2. **Cross-Platform**: Test on mobile and desktop
3. **Export Test**: Verify Obsidian compatibility
4. **Backup**: Keep original templates

## Troubleshooting Template Issues

### Variables Not Substituting
- Check variable spelling (case-sensitive)
- Ensure `{{` and `}}` are correct
- Verify template is being used

### Template Not Loading
- Check page exists: `templates/zettel-[type]`
- Verify plugin is enabled
- Restart Logseq

### Mobile Template Issues
- Mobile uses simplified version
- Some sections auto-removed
- Check mobile-specific behavior

### Export Formatting Issues
- Ensure Markdown compatibility
- Test in Obsidian
- Check link formatting

## Advanced: Creating New Template Types

While the plugin supports three default types, you can create variations:

1. **Duplicate Existing Template**: Copy and modify
2. **Update Plugin Code**: Modify `src/templates.js` (advanced)
3. **Use Template Variables**: Create flexible templates

## Template Versioning

### Backup Strategy
1. **Export Templates**: Copy template pages
2. **Version Control**: Consider git for templates
3. **Document Changes**: Note modifications

### Migration Strategy
When updating templates:
1. **Backup First**
2. **Test in New Graph**
3. **Gradual Rollout**
4. **Update Documentation**

---

For more help, see the `examples/` directory for sample notes and `README.md` for general usage.