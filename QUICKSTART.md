# Quick Start Guide - Logseq Zettelkasten Templates

## ⚡ 5-Minute Setup

### Step 1: Copy Templates
1. Copy template files to your Logseq graph:
   ```bash
   cp -r templates/ /path/to/your/logseq-graph/
   ```

2. Create quick access page `templates/zettelkasten` in Logseq

### Step 2: Create Your First Zettel
1. Open Logseq and create new page
2. Select template from `templates/zettelkasten/` directory
3. Fill in the template fields
4. Save the note (auto-ID: `2026-01-27-143022`)

### Step 3: Verify It Works
1. Open today's journal
2. Look for "Auto-Listed Zettels" section
3. Click the arrow to expand
4. See your note listed via query

## 📱 Mobile Setup

### Installation
1. Install Logseq from App Store/Play Store
2. Copy template files to mobile Logseq graph
3. Create quick access page `templates/zettelkasten`

### First Mobile Capture
1. Open Logseq on mobile
2. Create new page
3. Select "fleeting" template
4. Choose context from dropdown
5. Enter thought and save

### Syncthing Setup (Recommended)
1. Install Syncthing on mobile and desktop
2. Configure sync for Logseq folder
3. Enable auto-sync
4. Test by creating note on mobile, check desktop

## 🔧 Template Access Methods

### Quick Access Page
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

### File Navigation
- Navigate to `templates/zettelkasten/` directory
- Select template file when creating new page

### Plugin Commands (Desktop Only)
If using the plugin:
```
/zettel fleeting     # Quick capture
/zettel literature   # Reading notes  
/zettel permanent    # Developed ideas
```

## 🎯 Workflow Examples

### Morning Capture
1. Coffee thought → Select "fleeting" template
2. Choose "quick-capture" context
3. Enter thought
4. Auto-listed in today's journal

### Reading Session
1. Read book/article
2. Select "literature" template
3. Add source and summary
4. Add key points and quotes

### Idea Development
1. Multiple related notes
2. Select "permanent" template
3. Synthesize in "Core Idea" section
4. Add supporting points and connections

## 📤 Export to Obsidian

### Simple Export
1. On desktop, open Logseq folder
2. Go to `pages/` directory
3. Copy files like `2026-01-27-143022.md`
4. Paste into Obsidian vault
5. Verify links work

### Batch Export
1. Sort files by date (already chronological)
2. Select multiple timestamped files
3. Copy to Obsidian
4. Check a few files for formatting

## 🚨 Troubleshooting Quick Fixes

### Templates Not Showing
- Check `templates/zettelkasten/` directory exists
- Files must be `.md` format
- Restart Logseq after adding templates

### No Journal Listing
- Check today's journal exists
- Verify query syntax in journal template
- Properties must be at page level (`property:: value`)

### Mobile Issues
- Use quick access page `templates/zettelkasten`
- Conditional sections may show on mobile
- Manual entry if dropdowns don't work

### Export Problems
- Ensure `.md` file extension
- Check `[[wikilinks]]` format
- Verify Obsidian can read files

## 📞 Getting Help

1. **Check Examples**: `examples/` directory
2. **Read Template Guide**: `TEMPLATES.md`
3. **Read Installation Guide**: `TEMPLATE-INSTALLATION.md`
4. **Test First**: Try in new graph
5. **Backup**: Always backup your data

## ✅ Success Checklist

- [ ] Template files copied to Logseq graph
- [ ] Can create fleeting note using template
- [ ] Note appears in journal via query
- [ ] Mobile capture works with minimal input
- [ ] Syncthing syncs between devices
- [ ] Can export notes to Obsidian
- [ ] Links work in Obsidian

---

**Next Steps**: Read `TEMPLATE-INSTALLATION.md` for detailed setup and `TEMPLATES.md` for template customization.