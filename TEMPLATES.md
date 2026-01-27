# Template Guide - Logseq Zettelkasten Templates

## Overview

This template system provides three mobile-first Zettelkasten templates that work without plugins. Templates use Logseq's native template variables and query-based integration for automatic journal listing.

## Default Templates

### 1. Fleeting Note Template
**Purpose**: Quick capture of immediate thoughts

```markdown
# {{today}}-{{time}} - Quick Thought

id:: {{today}}-{{time}}
type:: fleeting

**Captured**: {{today}} {{time}} • 📱 Mobile
**Context**: {{select: quick-capture | reading | meeting | walking | research | idea | project | personal}}

## Thought
[Enter your quick thought here]

## To Process Later
- [ ] Expand into permanent note
- [ ] Find connections
- [ ] Add context

<!-- Desktop sections below -->
**Status**: draft  
**Tags**: #zettel #fleeting #mobile-capture
**Created**: {{today}}T{{time}}:00.000Z
<!-- End desktop sections -->
```

### 2. Literature Note Template
**Purpose**: Notes from reading/learning

```markdown
# {{today}}-{{time}} - [Source Title]

id:: {{today}}-{{time}}
type:: literature

**Source**: [Book/Article Title]  
**Author**: [Author Name]  
**Read**: {{today}} • 📱 Mobile
**Context**: {{select: quick-capture | reading | meeting | walking | research | idea | project | personal}}

## Summary
[Brief summary of the source]

## Key Points
[Main points or arguments]

<!-- Desktop sections below -->
## Quotes
[Key quotes or passages]

## My Thoughts  
[Your reflections and connections]

## References
[Citation details or links]

**Status**: draft  
**Tags**: #zettel #literature #mobile-capture  
**Created**: {{today}}T{{time}}:00.000Z
<!-- End desktop sections -->
```

### 3. Permanent Note Template
**Purpose**: Developed ideas and synthesized concepts

```markdown
# {{today}}-{{time}} - [Concept Name]

id:: {{today}}-{{time}}
type:: permanent

**Concept**: [Core concept or idea]  
**Developed**: {{today}} {{time}} • 📱 Mobile
**Context**: {{select: quick-capture | reading | meeting | walking | research | idea | project | personal}}

## Core Idea
[Your main claim or argument]

## Supporting Points
[Evidence and reasoning]

<!-- Desktop sections below -->
## Implications
[Consequences and applications]

## Connections
- Builds on: [[ ]]
- Contrasts with: [[ ]]
- Related to: [[ ]]

## Questions
[Unanswered questions or areas for exploration]

**Status**: draft  
**Tags**: #zettel #permanent #mobile-capture  
**Created**: {{today}}T{{time}}:00.000Z
<!-- End desktop sections -->
```

## Template Variables

### Logseq Native Variables
| Variable | Description | Example |
|----------|-------------|---------|
| `{{today}}` | Current date | `2026-01-27` |
| `{{time}}` | Current time | `14:30` |
| `{{select: option1 \| option2}}` | Dropdown selection | `quick-capture` |

### Template-Specific Variables
| Variable | Description | Usage |
|----------|-------------|-------|
| `{{today}}-{{time}}` | Page title/ID | `2026-01-27-143022` |
| `{{select: quick-capture \| reading \| meeting \| walking \| research \| idea \| project \| personal}}` | Context dropdown | Mobile-friendly selection |
| `<!-- Desktop sections below -->` | Conditional marker | Shows content on desktop only |
| `<!-- End desktop sections -->` | Conditional marker | Ends desktop-only section |

### Manual Entry Fields
| Field | Template | Purpose |
|-------|----------|---------|
| `[Enter your quick thought here]` | Fleeting | Main thought content |
| `[Book/Article Title]` | Literature | Source title |
| `[Author Name]` | Literature | Author name |
| `[Brief summary of the source]` | Literature | Summary content |
| `[Main points or arguments]` | Literature | Key points |
| `[Core concept or idea]` | Permanent | Concept name |
| `[Your main claim or argument]` | Permanent | Core idea |
| `[Evidence and reasoning]` | Permanent | Supporting points |

## Customizing Templates

### Step 1: Locate Template Files
Templates are stored as files in your Logseq graph:
```
/path/to/your/logseq-graph/templates/zettelkasten/
├── fleeting.md
├── literature.md
└── permanent.md
```

### Step 2: Edit Template Files
1. Open the template file in a text editor
2. Modify the structure as needed
3. Save changes

### Step 3: Test Changes
1. Create a test note using the modified template
2. Verify template loads correctly
3. Check journal query integration

### Modification Examples

#### Add Custom Fields
```markdown
# Add to template
**Project**: [Project Name]
**Priority**: {{select: low | medium | high}}
```

#### Change Section Order
```markdown
# Reorder sections
## Key Points
[Main points]

## Summary  
[Brief summary]
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
1. **ID Property**: Must include `id:: {{today}}-{{time}}`
2. **Type Property**: Must include `type:: [fleeting/literature/permanent]`
3. **Title Format**: `# {{today}}-{{time}} - [Description]`

### Recommended Structure
1. **Title** (with ID format)
2. **Properties** (`id::`, `type::`)
3. **Metadata** (context, date, device indicator)
4. **Content Sections** (template-specific)
5. **Desktop-Only Sections** (wrapped in conditional comments)

### Mobile-First Considerations
- **Minimal Properties**: Only `id::` and `type::` on mobile
- **Context Dropdowns**: Use `{{select:}}` for mobile-friendly selection
- **Conditional Sections**: Desktop-only content in `<!-- -->` comments
- **Colon-Free IDs**: `YYYY-MM-DD-HHMMSS` format (no `:`)

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
2. **Clarity**: Clear section headers with descriptive names
3. **Mobile-First**: Design for mobile capture first, desktop enhancement second
4. **Export-Friendly**: Ensure Obsidian compatibility with standard Markdown

### Variable Usage
1. **Required Variables**: Always include `{{today}}` and `{{time}}` for IDs
2. **Context Dropdowns**: Use `{{select:}}` for consistent categorization
3. **Conditional Sections**: Use `<!-- -->` comments for desktop-only content

### Testing Changes
1. **Small Changes**: Test each modification individually
2. **Cross-Platform**: Test on mobile and desktop Logseq
3. **Export Test**: Verify Obsidian compatibility
4. **Backup**: Keep original template files

## Troubleshooting Template Issues

### Templates Not Loading
- Check file location: `templates/zettelkasten/` directory
- Verify file extensions: `.md` format required
- Restart Logseq after adding templates

### Variables Not Working
- Check Logseq version supports `{{today}}` and `{{time}}`
- Use `/date` and `/time` commands as fallback
- Manual entry if auto-population fails

### Mobile Issues
- Conditional sections (`<!-- -->`) may not hide on all mobile versions
- Dropdowns (`{{select:}}`) may show as plain text
- Use page `templates/zettelkasten` for quick template access

### Query Integration Issues
- Properties must be at page level: `property:: value`
- Date format must match: `YYYY-MM-DD`
- Query syntax: `{{query (property type [[fleeting/literature/permanent]])}}`

## Creating New Template Types

You can create custom template variations:

1. **Duplicate Existing Template**: Copy and modify template files
2. **Create New Template File**: Add to `templates/zettelkasten/` directory
3. **Update Journal Queries**: Include new types in query filters

Example custom template:
```markdown
# {{today}}-{{time}} - Meeting Notes

id:: {{today}}-{{time}}
type:: meeting

**Topic**: [Meeting Topic]
**Date**: {{today}}
**Attendees**: [Names]

## Agenda
[Meeting agenda]

## Discussion
[Key discussion points]

## Decisions
[Decisions made]

## Action Items
- [ ] [Task 1]
- [ ] [Task 2]
```

## Template Versioning

### Backup Strategy
1. **File Backup**: Copy template files regularly
2. **Version Control**: Use git for template management
3. **Change Log**: Document template modifications

### Migration Strategy
When updating templates:
1. **Backup First**: Copy existing templates
2. **Test in New Graph**: Create test graph for new templates
3. **Gradual Rollout**: Update one template type at a time
4. **Update Queries**: Ensure journal queries match new templates

---

For more help, see the `examples/` directory for sample notes and `TEMPLATE-INSTALLATION.md` for setup instructions.