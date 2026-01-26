# Quick Start Guide - Logseq Zettelkasten Plugin

## ⚡ 5-Minute Setup

### Step 1: Install the Plugin
1. Open Logseq → Settings → Plugins
2. Install "Zettelkasten" plugin
3. Restart Logseq if prompted

### Step 2: Create Your First Zettel
1. Open today's journal (click date in sidebar)
2. Type `/zettel fleeting` and press Enter
3. Fill in the "Quick Thought" section
4. Save the note

### Step 3: Verify It Works
1. Look at the top of your journal
2. You should see "Zettelkasten Notes" section (collapsed)
3. Click the arrow to expand
4. See your note listed as `[[2026-01-27-143022]] - Fleeting: [your topic]`

## 📱 Mobile Setup

### Installation
1. Install Logseq from App Store/Play Store
2. Install Zettelkasten plugin through Logseq
3. Enable plugin in settings

### First Mobile Capture
1. Open Logseq on mobile
2. Tap today's journal
3. Type `/z fle` (mobile shortcut)
4. Use simplified mobile template
5. Note appears in journal section

### Syncthing Setup (Recommended)
1. Install Syncthing on mobile and desktop
2. Configure sync for Logseq folder
3. Enable auto-sync
4. Test by creating note on mobile, check desktop

## 🔧 Essential Commands

### Desktop Commands
```
/zettel fleeting     # Quick capture
/zettel literature   # Reading notes  
/zettel permanent    # Developed ideas
/zettel             # Show all commands
```

### Mobile Shortcuts
```
/z fle              # Fleeting note
/z lit              # Literature note
/z per              # Permanent note
/z                  # Show commands
```

## 🎯 Workflow Examples

### Morning Capture
1. Coffee thought → `/zettel fleeting`
2. Fill "Quick Thought"
3. Appears in today's journal
4. Process later when at desktop

### Reading Session
1. Read book/article
2. `/zettel literature`
3. Add quotes in "Key Quotes"
4. Add thoughts in "My Thoughts"
5. Link to related notes

### Idea Development
1. Multiple related notes
2. `/zettel permanent`
3. Synthesize in "Claim" section
4. Add evidence
5. Create connections

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

### Plugin Not Working
- Check it's enabled in Settings → Plugins
- Restart Logseq
- Try in new graph first

### No Journal Section
- Create first Zettel note
- Check today's journal exists
- Restart plugin

### Mobile Issues
- Use `/z` shortcuts
- Floating button may need refresh
- Check Syncthing sync status

### Export Problems
- Ensure `.md` file extension
- Check `[[wikilinks]]` format
- Verify Obsidian can read files

## 📞 Getting Help

1. **Check Examples**: `examples/` directory
2. **Read Full Guide**: `README.md`
3. **Test First**: Try in new graph
4. **Backup**: Always backup your data

## ✅ Success Checklist

- [ ] Plugin installed and enabled
- [ ] Can create fleeting note with `/zettel fleeting`
- [ ] Note appears in journal Zettelkasten section
- [ ] Mobile shortcuts work (`/z fle`)
- [ ] Syncthing syncs between devices
- [ ] Can export notes to Obsidian
- [ ] Links work in Obsidian

---

**Next Steps**: Read the full `README.md` for advanced features, template customization, and workflow optimization.