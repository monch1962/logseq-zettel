# Sequence-Enhanced Zettelkasten Templates Installation Guide

## Overview

This guide explains how to set up the **Sequence-enhanced Zettelkasten templates** for Logseq. These templates provide enhanced usability with Sequence's advanced template features while maintaining full compatibility with the original mobile-first design.

### Key Enhancements with Sequence

**UI/UX Improvements:**
- **Labeled inputs**: `{{input: title: Quick Thought}}` instead of just `{{input: title}}`
- **Enhanced dropdowns**: `{{select: context: quick-capture | reading | ...}}` with descriptive labels
- **Custom variables**: `{{zettel-id}}` (auto-generated), `{{device}}` (mobile/desktop detection)
- **Conditional logic**: `{{if: {{select: include-advanced: yes | no}} == "yes"}}`
- **Workflow sequences**: Multi-step capture process with conditional branching

**Maintained Features:**
- ✅ **Colon-free IDs**: `YYYY-MM-DD-HHMMSS` format (no colons in filenames)
- ✅ **Mobile-first design**: Optimized for quick capture on mobile devices
- ✅ **Query-based integration**: Auto-lists notes in daily journals
- ✅ **Three template types**: Fleeting, Literature, Permanent notes
- ✅ **Context dropdowns**: Mobile-friendly selection with 8 predefined contexts
- ✅ **Conditional sections**: Desktop-only content hidden on mobile

## Prerequisites

### Required Software
1. **Logseq v0.9.0 or higher** 
2. **Sequence plugin** installed in Logseq **Desktop Only**
   - Desktop: Install from Logseq Marketplace
   - Mobile: **No plugin support** - Sequence templates work via file sync only

### Optional (Recommended)
- **Syncthing**: For mobile-desktop sync
- **Obsidian**: For final note repository

## Installation Methods

### Method 1: Complete Sequence Setup (Recommended)

#### Step 1: Install Sequence Plugin (Desktop Only)

**Desktop Installation:**
1. Open Logseq on desktop
2. Go to **Settings → Plugins**
3. Search for "Sequence" in Marketplace
4. Click "Install"
5. Enable the plugin

**Mobile Limitation:**
- **No plugin support** on mobile Logseq
- Sequence templates work via **file sync only** on mobile
- Mobile users see static templates without Sequence features
- Desktop processing required for full Sequence functionality

#### Step 2: Copy Sequence Template Files

1. **Create template directory**:
   ```bash
   # Navigate to your Logseq graph
   cd /path/to/your/logseq-graph/
   
   # Create Sequence template directory
   mkdir -p templates-sequence
   ```

2. **Copy consolidated template file**:
   ```bash
   # Copy the consolidated template file
   cp templates-sequence/zettelkasten-consolidated.md /path/to/your/logseq-graph/templates-sequence/
   
   # Copy workflow files (optional)
   cp -r templates-sequence/workflows/* /path/to/your/logseq-graph/templates-sequence/workflows/ 2>/dev/null || true
   
   # Copy variable file (optional)
   cp templates-sequence/variables/zettel-variables.json /path/to/your/logseq-graph/templates-sequence/variables/ 2>/dev/null || true
   ```

#### Step 3: Configure Sequence Variables

1. **Open Sequence settings** in Logseq:
   - Settings → Plugins → Sequence → Configure

2. **Import custom variables**:
   - Click "Import Variables"
   - Select `templates-sequence/variables/zettel-variables.json`
   - Confirm import

3. **Verify variables are loaded**:
   - `{{zettel-id}}`: Auto-generates colon-free ID (`2026-01-27-143022`)
   - `{{device}}`: Detects mobile vs desktop
   - `{{context-presets}}`: 8 context options

#### Step 4: Import Workflow Sequences

1. **Open Sequence workflows**:
   - Click Sequence icon in toolbar
   - Go to "Workflows" tab

2. **Import quick capture workflow**:
   - Click "Import Workflow"
   - Select `templates-sequence/workflows/quick-capture.json`
   - Name: "Zettel Quick Capture"
   - Description: "Mobile-optimized zettel capture workflow"

#### Step 5: Create Template Shortcuts

1. **Create page**: `templates-sequence`
2. **Add template link**:
   ```markdown
   # Sequence-Enhanced Zettelkasten Templates
   
   Consolidated template with all note types:
   
   ## Single Template File
   - [[zettelkasten-consolidated]] - All templates in one file
     - 🚀 Fleeting notes
     - 📚 Literature notes  
     - 🏛️ Permanent notes
     - 📅 Enhanced daily journal
     - 📱 Mobile daily journal
   
   ## Quick Access
   Use this command for quick access:
   ```
   /sequence zettelkasten-consolidated
   ```

### Method 2: Hybrid Setup (Sequence + Native Templates)

For users who want to use both native and Sequence templates:

1. **Keep native templates** in `templates/zettelkasten/`
2. **Add Sequence templates** to `templates-sequence/zettelkasten/`
3. **Use Sequence workflows** for enhanced capture
4. **Fall back to native templates** when Sequence is unavailable

## Template Features

### Enhanced UI Elements

**Labeled Inputs:**
```markdown
{{input: title: Quick Thought}}
{{input: source: Book/Article Title}}
{{input: author: Author Name}}
```

**Enhanced Dropdowns:**
```markdown
{{select: context: quick-capture | reading | meeting | walking | research | idea | project | personal}}
{{select: priority: low | medium | high}}
{{select: include-advanced: yes | no}}
```

**Custom Variables:**
```markdown
{{zettel-id}}  # Generates: 2026-01-27-143022
{{device}}     # Returns: mobile or desktop
```

### Conditional Logic

**Show/Hide Sections:**
```markdown
{{if: {{select: include-advanced: yes | no}} == "yes"}}
## Advanced Fields
[Advanced content here]
{{endif}}
```

**Device-Specific Content:**
```markdown
{{if: {{device}} == "desktop"}}
## Desktop-Only Sections
[Desktop content here]
{{endif}}
```

### Workflow Sequences

**Quick Capture Workflow:**
1. **Step 1**: Select note type (fleeting/literature/permanent)
2. **Step 2**: Enter title and context
3. **Step 3**: Add main content
4. **Step 4**: Choose to include advanced fields
5. **Step 5**: Review and create note
6. **Step 6**: Show success with generated ID

**Estimated Time**: 30 seconds for mobile capture

## Usage Guide

### Quick Start with Sequence

**Option 1: Consolidated Template**
1. Create new page in Logseq
2. Select `zettelkasten-consolidated` template
3. Choose note type from dropdown (fleeting/literature/permanent/journal)
4. Fill template fields for selected type
5. Save (auto-generates ID)

**Option 2: Workflow Sequence**
1. Click Sequence icon in toolbar
2. Select "Zettel Quick Capture" (or other workflow)
3. Follow step-by-step prompts
4. Review and create note

**Option 3: Slash Command**
```
/sequence zettelkasten-consolidated     # All templates in one
```

### Mobile Capture Workflow (Limited)

**Mobile Limitations:**
- **No Sequence plugin** on mobile Logseq
- **Static templates only** - variables don't populate
- **Manual ID entry** required (no `{{zettel-id}}` auto-generation)
- **Basic functionality** without Sequence features

**Mobile Workaround:**
1. **Use native templates** on mobile for capture
2. **Sync to desktop** via Syncthing
3. **Process on desktop** with Sequence features
4. **Manual cleanup** of IDs and properties

**Alternative Mobile Strategy:**
1. **Capture with native templates** on mobile
2. **Add `#sequence-process` tag** to notes needing enhancement
3. **Filter on desktop** for `#sequence-process` notes
4. **Use Sequence workflows** to enhance captured notes

### Desktop Processing Workflow

**Enhanced Desktop Features:**
1. **Review Queue**: Filter `#mobile-capture` notes
2. **Enhanced Editing**: Use Sequence's advanced fields
3. **Conditional Sections**: Show desktop-only content
4. **Workflow Sequences**: Multi-step note development

**Desktop-Specific Sections:**
- Advanced metadata (priority, rating, confidence)
- Connection mapping
- Development history
- Implications and questions

## Compatibility

### With Native Templates

**Full Compatibility:**
- ✅ **Same ID format**: `YYYY-MM-DD-HHMMSS`
- ✅ **Same properties**: `id::`, `type::`, `context::`
- ✅ **Same query system**: Works with existing journal queries
- ✅ **Same file structure**: Notes stored in `pages/` directory

**Migration Path:**
1. Start with native templates
2. Add Sequence templates alongside
3. Use Sequence for new notes
4. Convert old notes as needed

### With Journal Query System

**Query Compatibility:**
```markdown
# Works with both native and Sequence templates
{{query (and (property type [[fleeting/literature/permanent]]) (page-property created {{today}}))}}
```

**Enhanced Queries (Sequence-specific):**
```markdown
# Filter by Sequence variables
{{query (and (property priority high) (property device mobile))}}
```

## Customization

### Modify Sequence Templates

1. **Edit template files** in `templates-sequence/zettelkasten/`
2. **Add custom variables** to `templates-sequence/variables/zettel-variables.json`
3. **Create new workflows** in `templates-sequence/workflows/`

### Create Custom Variables

**Add to `zettel-variables.json`:**
```json
{
  "variables": {
    "my-custom-var": {
      "type": "computed",
      "value": "computed-value-here"
    }
  }
}
```

### Create Custom Workflows

**Workflow Structure:**
```json
{
  "name": "Custom Workflow",
  "steps": [
    {
      "type": "input",
      "label": "Step 1",
      "variable": "step1"
    }
  ]
}
```

## Troubleshooting

### Common Issues

**Sequence Not Working on Mobile:**
1. **Expected behavior**: Sequence plugin doesn't work on mobile Logseq
2. **Workaround**: Use native templates on mobile, process on desktop
3. **Alternative**: Capture basic notes on mobile, enhance later on desktop

**Templates Not Showing:**
1. **Check directory**: `templates-sequence/` must exist
2. **Check file**: `zettelkasten-consolidated.md` must be present
3. **Check file format**: File must be `.md` format
4. **Check Sequence settings**: Templates must be in configured template directory

**Variables Not Populating:**
1. **Check variable import**: Variables must be imported in Sequence settings
2. **Check variable names**: Must match exactly (`{{zettel-id}}`, not `{{zettel_id}}`)
3. **Check computed variables**: Some variables are computed at runtime

**Workflow Not Available:**
1. **Check workflow import**: Workflow must be imported in Sequence
2. **Check workflow file**: JSON must be valid format
3. **Check Sequence version**: Update to latest Sequence version

### Debugging Tips

1. **Test variables**: Create test page with `{{zettel-id}}` and `{{device}}`
2. **Check Sequence logs**: Settings → Plugins → Sequence → View Logs
3. **Test workflows**: Run workflow step-by-step to identify issues
4. **Check mobile compatibility**: Test on actual mobile device

## Migration from Native Templates

### Step-by-Step Migration

**Phase 1: Coexistence**
1. Keep native templates in `templates/zettelkasten/`
2. Add Sequence templates to `templates-sequence/zettelkasten/`
3. Use both template sets for 1-2 weeks

**Phase 2: Transition**
1. Use Sequence templates for new notes
2. Convert frequently used native templates to Sequence
3. Update daily journal to reference Sequence templates

**Phase 3: Full Migration**
1. Archive native templates (optional)
2. Use Sequence templates exclusively
3. Update documentation and shortcuts

### Data Migration

**Notes are compatible** - no migration needed:
- Same ID format
- Same properties
- Same file location
- Same query system

**Only templates need migration** from native to Sequence format.

## Performance Considerations

### Mobile Performance

**Optimized for Mobile:**
- **Fast capture**: Estimated 30-second workflow
- **Minimal typing**: Enhanced dropdowns reduce typing
- **Conditional loading**: Desktop sections hidden on mobile
- **Voice input**: Supports voice-to-text

**Battery Optimization:**
- Disable auto-sync when battery low
- Use offline mode when needed
- Batch process on desktop

### Storage Considerations

**Template Storage:**
- Sequence templates: ~5KB each
- Variables file: ~2KB
- Workflow file: ~3KB

**Note Storage:**
- Same as native templates
- No additional storage overhead
- Compatible with Syncthing sync

## Support & Resources

### Documentation
- `README.md` - Project overview
- `TEMPLATE-INSTALLATION.md` - Native template guide
- `SEQUENCE-INSTALLATION.md` - This guide
- `examples/` - Sample notes and workflows

### Community Support
- **Logseq Discord**: #plugins channel for Sequence support
- **Sequence Documentation**: Official Sequence plugin docs
- **GitHub Issues**: Bug reports and feature requests

### Updates
- **Check for updates**: Regular template improvements
- **Backup first**: Always backup before updating
- **Test changes**: Test in separate graph first

## Next Steps

1. **Install Sequence plugin** in Logseq
2. **Copy template files** to your graph
3. **Import variables and workflows** in Sequence settings
4. **Test with sample notes**
5. **Customize for your workflow**
6. **Join community** for support and ideas

---

**Ready to enhance your Zettelkasten?** Start with the Quick Capture workflow for mobile-optimized note capture with Sequence's enhanced features!