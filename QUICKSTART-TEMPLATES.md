# Quick Start: Mobile-First Zettelkasten Templates

## ⚡ 5-Minute Setup

### Step 1: Copy Templates
```bash
# Copy these files to your Logseq graph:
cp templates/zettelkasten/fleeting.md /path/to/logseq/templates/zettelkasten/
cp templates/zettelkasten/literature.md /path/to/logseq/templates/zettelkasten/
cp templates/zettelkasten/permanent.md /path/to/logseq/templates/zettelkasten/
cp templates/daily-journal-with-zettels.md /path/to/logseq/templates/
```

### Step 2: Create Quick Access Page
Create page `templates/zettelkasten` with:
```markdown
# 📱 Zettelkasten Quick Access

## Quick Capture
- [[fleeting]] - Spontaneous thoughts

## Reading Notes  
- [[literature]] - Books, articles, learning

## Developed Ideas
- [[permanent]] - Synthesized concepts

## Daily Journal
- [[daily-journal-with-zettels]] - Auto-lists today's zettels
```

### Step 3: Start Capturing
1. **Mobile**: Create page → Select template → Enter thought → Save
2. **Desktop**: Same process, with more options available

## 🎯 Core Workflow

### Mobile Capture (30 seconds)
```
1. Open Logseq
2. Create new page
3. Select "fleeting" template
4. Choose context (dropdown)
5. Enter thought
6. Save (auto-ID: 2026-01-27-143022)
```

### Desktop Processing (2 minutes)
```
1. Filter #mobile-capture notes
2. Review and enhance
3. Add connections/references
4. Update status/tags
5. Remove #mobile-capture when done
```

## 🔑 Key Features

### Colon-Free IDs
- `2026-01-27-143022` not `2026-01-27-14:30:22`
- Works everywhere (mobile, desktop, sync)

### Context Dropdowns
- 8 predefined contexts
- Quick selection on mobile
- Consistent categorization

### Auto Journal Listing
```markdown
{{query (property type [[fleeting/literature/permanent]])}}
```
- Notes automatically appear in daily journal
- No manual linking needed

### Mobile ↔ Desktop Sync
1. **Mobile**: Capture with minimal fields
2. **Sync**: Via Syncthing/cloud
3. **Desktop**: Process and organize
4. **Sync**: Updated notes back to mobile

## 📱 Mobile Optimization

### Minimal Properties (Mobile)
```markdown
id:: {{today}}-{{time}}
type:: fleeting
# That's it - fast capture!
```

### Full Properties (Desktop)
```markdown
id:: {{today}}-{{time}}
type:: fleeting
status:: draft
tags:: #zettel #fleeting #mobile-capture
created:: {{today}}T{{time}}:00.000Z
# All properties available
```

### Conditional Sections
```markdown
<!-- Mobile sees this -->
## Thought
[Content]

<!-- Desktop also sees this -->
## Connections
- [[ ]]
```

## 🚀 Pro Tips

### Quick Capture Shortcuts
- **Bookmark** `templates/zettelkasten` page
- **Use** `/date` and `/time` commands
- **Voice-to-text** on mobile for speed

### Organization Queries
```markdown
# Today's zettels
{{query (page-property created {{today}})}}

# Unprocessed mobile captures  
{{query (property tags [[mobile-capture]])}}

# All fleeting notes this week
{{query (and (property type fleeting) (between -7d today))}}
```

### Syncthing Setup
```yaml
# sync.yaml (example)
folders:
  logseq-graph:
    path: /path/to/logseq
    devices: [mobile, desktop]
    ignore:
      - logseq/
      - bak/
      - .sync-conflict-*
```

## 🆘 Troubleshooting

### Templates Not Showing?
- Check `templates/` directory exists
- Files must be `.md` format
- Restart Logseq after adding templates

### Date/Time Wrong?
- System time correct?
- Logseq date format: `YYYY-MM-DD`
- Use `/date` command to test

### Query Not Working?
- Properties must be at page level
- Format: `property:: value` not `- property:: value`
- Date must match exactly: `2026-01-27`

## 📚 Next Steps

1. **Capture** 5 test notes (mobile if possible)
2. **Process** them on desktop
3. **Customize** templates for your workflow
4. **Set up** Syncthing for automatic sync
5. **Join** community for support

---

**Need Help?**
- Check `TEMPLATE-INSTALLATION.md` for detailed guide
- Look at `examples/` for sample notes
- Report issues on GitHub

**Ready to go?** Start capturing! 🚀