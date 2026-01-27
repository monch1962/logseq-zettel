# Mobile-First Zettelkasten Template Installation Guide

## Overview

This guide explains how to set up the mobile-first Zettelkasten templates for Logseq without using plugins. These templates are designed for:
- **Mobile-first capture**: Optimized for quick entry on mobile devices
- **Colon-free IDs**: `YYYY-MM-DD-HHMMSS` format (no colons in filenames)
- **Single template set**: Works on both mobile and desktop
- **Query-based integration**: Auto-lists notes in daily journals
- **Minimal properties**: Fast mobile capture with essential metadata only

## Installation Methods

### Method 1: Plugin Installation (Recommended for Desktop)

If you can use plugins on desktop:

1. **Install the plugin** from Logseq Marketplace or build from source
2. **Enable the plugin** in Logseq settings
3. **Use slash commands**:
   - `/zettel fleeting` or `/z fle` - Quick thought
   - `/zettel literature` or `/z lit` - Reading notes
   - `/zettel permanent` or `/z per` - Developed ideas

### Method 2: Manual Template Installation (Mobile & Desktop)

For mobile Logseq or plugin-free setup:

#### Step 1: Copy Template Files

1. **Create template directory** in your Logseq graph:
   ```
   /path/to/your/logseq-graph/templates/zettelkasten/
   ```

2. **Copy the template files**:
   - `fleeting.md` - Quick capture template
   - `literature.md` - Reading notes template  
   - `permanent.md` - Developed ideas template

3. **Copy the daily journal template**:
   - `daily-journal-with-zettels.md` to your templates directory

#### Step 2: Configure Logseq Templates

1. **Open Logseq Settings**
2. **Go to "Editor" section**
3. **Set "Preferred format"** to Markdown
4. **Set "Preferred date format"** to `YYYY-MM-DD`
5. **Set "Preferred workflow"** to left-sidebar

#### Step 3: Set Up Template Shortcuts

1. **Create page**: `templates/zettelkasten`
2. **Add template links**:
   ```markdown
   # Zettelkasten Templates
   
   Quick access to Zettelkasten templates:
   
   - [[fleeting]] - Quick thoughts and ideas
   - [[literature]] - Notes from reading/learning
   - [[permanent]] - Developed concepts and arguments
   
   ## Daily Journal
   - [[daily-journal-with-zettels]] - Journal with auto-listed zettels
   ```

## Template Features

### Mobile-Optimized Design

**For Mobile:**
- Minimal properties (`id::` and `type::` only)
- Context dropdown selection
- Mobile device indicator (📱 Mobile)
- Essential content sections only

**For Desktop:**
- Full property set (status, tags, created timestamp)
- Additional sections (quotes, references, connections, questions)
- Desktop device indicator (💻 Desktop)

### ID System

**Format:** `{{today}}-{{time}}` → `2026-01-27-143022`
- **No colons**: Uses `HHMMSS` instead of `HH:MM:SS`
- **Page title as ID**: Page name matches the ID
- **Unique**: Second precision ensures uniqueness

### Context Selection

**Dropdown options:**
- `quick-capture` - Default for spontaneous thoughts
- `reading` - Notes from books/articles
- `meeting` - Discussion notes
- `walking` - Thoughts while walking
- `research` - Research notes
- `idea` - New ideas
- `project` - Project-related thoughts
- `personal` - Personal reflections

### Journal Integration

**Two methods:**

1. **Manual Linking**:
   ```markdown
   - [[2026-01-27-143022]] - Quick thought about Lindy Effect
   ```

2. **Query-Based Auto-Listing**:
   ```markdown
   {{query (and (property type [[fleeting/literature/permanent]]) (page-property created 2026-01-27))}}
   ```

**Daily journal template** includes both methods.

## Usage Workflow

### Mobile Capture (Priority)

1. **Quick Launch**:
   - Open Logseq on mobile
   - Create new page with template
   - Or use page `templates/zettelkasten` for quick access

2. **Minimal Input**:
   - Select context from dropdown
   - Enter thought in main content area
   - Save (ID auto-generated from date/time)

3. **Auto-Tagging**:
   - Mobile notes get `#mobile-capture` tag
   - Easy filtering for desktop processing

### Desktop Processing

1. **Review Queue**:
   - Filter `#mobile-capture` notes
   - Review mobile-captured thoughts

2. **Enhance Content**:
   - Add desktop-only sections
   - Include quotes, references, connections
   - Update status and tags

3. **Convert Types**:
   - Upgrade fleeting → literature/permanent
   - Add connections between notes
   - Remove `#mobile-capture` tag when processed

### Syncthing Setup (Mobile ↔ Desktop)

1. **Install Syncthing** on both devices
2. **Configure folder sync**:
   - Sync your Logseq graph directory
   - Include `pages/` and `journals/` directories
   - Exclude `logseq/` and `bak/` directories

3. **Conflict resolution**:
   - Newer timestamp wins
   - Manual review for important conflicts
   - Regular backups recommended

## Template Customization

### Modify Template Structure

1. **Edit template files** directly
2. **Add custom sections**:
   ```markdown
   ## Custom Section
   [Your custom content]
   ```

3. **Change property defaults**:
   ```markdown
   status:: {{select: draft | in-progress | complete}}
   priority:: {{select: low | medium | high}}
   ```

### Create Template Variations

1. **Project-specific templates**:
   ```
   templates/zettelkasten/project-x-fleeting.md
   templates/zettelkasten/project-x-literature.md
   ```

2. **Context-specific templates**:
   ```
   templates/zettelkasten/meeting-notes.md
   templates/zettelkasten/research-notes.md
   ```

## Troubleshooting

### Common Issues

1. **Templates not showing**:
   - Check template directory path
   - Verify file extensions (.md)
   - Restart Logseq

2. **Date/time not populating**:
   - Ensure Logseq date format is `YYYY-MM-DD`
   - Check system time settings
   - Use `/date` and `/time` commands manually

3. **Query not working**:
   - Verify property names match (`type::`, `created::`)
   - Check date format in query
   - Ensure properties are at page level (not block level)

4. **Syncthing conflicts**:
   - Check timestamps on conflicting files
   - Review conflict files (.sync-conflict-*)
   - Manual merge if needed

### Mobile-Specific Tips

1. **Quick capture**:
   - Use voice-to-text for faster entry
   - Take photos of physical notes
   - Use share-to-Logseq from other apps

2. **Battery optimization**:
   - Disable auto-sync when battery low
   - Use offline mode when needed
   - Batch process on desktop

3. **Storage management**:
   - Regular cleanup of `#mobile-capture` notes
   - Archive old notes
   - Use cloud backup for important notes

## Advanced Features

### Query-Based Organization

**Find all fleeting notes from this week:**
```markdown
{{query (and (property type fleeting) (between -7d today))}}
```

**Find literature notes about specific topic:**
```markdown
{{query (and (property type literature) (property tags [[topic-name]]))}}
```

**Find unprocessed mobile captures:**
```markdown
{{query (and (property tags [[mobile-capture]]) (property status draft))}}
```

### Property Inheritance

**Create template with inherited properties:**
```markdown
template-includes:: [[zettelkasten-base]]
type:: literature
# Rest of template...
```

### Export to Obsidian

**Compatibility:**
- All templates use standard Markdown
- Properties compatible with Obsidian
- Links use `[[page-name]]` format
- Tags use `#tag` format

**Export workflow:**
1. Sync Logseq graph to Obsidian vault
2. Convert Logseq-specific syntax if needed
3. Use Obsidian plugins for enhanced features

## Support & Resources

### Documentation
- `TEMPLATES.md` - Detailed template documentation
- `examples/` - Sample notes and workflows
- `QUICKSTART.md` - Quick start guide

### Community
- Logseq Discord: #plugins channel
- GitHub Issues: Bug reports and feature requests
- Template repository: Updates and examples

### Updates
- Check for template updates regularly
- Backup before updating templates
- Test new templates in separate graph first

---

**Next Steps:**
1. Copy template files to your Logseq graph
2. Test with a few sample notes
3. Set up Syncthing for mobile-desktop sync
4. Customize templates for your workflow
5. Join the community for support and ideas