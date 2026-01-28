# Sequence-Enhanced Templates Compatibility Guide

## Overview

This document explains how Sequence-enhanced Zettelkasten templates maintain full compatibility with the existing native template system, particularly focusing on journal query integration.

## Core Compatibility Principles

### Important Note: Mobile Limitations
- **Sequence plugin doesn't work on mobile Logseq**
- **Mobile users**: See static templates without Sequence features
- **Desktop users**: Full Sequence functionality available
- **Workflow**: Capture on mobile (native/static), enhance on desktop

### 1. Property Format Compatibility
Sequence templates generate **identical property formats** to native templates (on desktop):

**Native Template Properties:**
```markdown
id:: 2026-01-27-143022
type:: fleeting
created:: 2026-01-27T143022.000Z
context:: quick-capture
```

**Sequence Template Properties:**
```markdown
id:: {{zettel-id}}  # Generates: 2026-01-27-143022
type:: fleeting
created:: {{date: YYYY-MM-DD}}T{{time: HHmm}}00.000Z
context:: {{select: context: quick-capture | reading | ...}}
```

**Result**: Both generate the same property format that journal queries can read.

### 2. ID System Compatibility

**Colon-Free ID Format:**
- **Native**: Manual `{{today}}-{{time}}` → `2026-01-27-143022`
- **Sequence**: `{{zettel-id}}` variable → `2026-01-27-143022`
- **Result**: Same `YYYY-MM-DD-HHMMSS` format, no colons

**Page Naming:**
- Both systems use ID as page name
- Both create pages like `2026-01-27-143022.md`
- Both work with Logseq's page reference system

### 3. Journal Query Compatibility

**Existing Journal Query:**
```markdown
{{query (and (property type [[fleeting/literature/permanent]]) (page-property created {{today}}))}}
```

**Works With Both:**
- ✅ **Sequence templates**: Have `type::` property
- ✅ **Sequence templates**: Have `created::` property with date
- ✅ **Sequence templates**: Match query criteria exactly

**Test Query Results:**
```markdown
# Native template note appears:
- [[2026-01-27-143022]] - Quick thought

# Sequence template note appears:
- [[2026-01-27-143125]] - Enhanced quick thought
```

## Property Mapping Table

| Property | Native Template | Sequence Template | Compatible? |
|----------|----------------|-------------------|-------------|
| `id::` | `{{today}}-{{time}}` | `{{zettel-id}}` | ✅ Yes |
| `type::` | `fleeting/literature/permanent` | `fleeting/literature/permanent` | ✅ Yes |
| `created::` | Manual timestamp | `{{date: YYYY-MM-DD}}T{{time: HHmm}}00.000Z` | ✅ Yes |
| `context::` | `{{select: context...}}` | `{{select: context: ...}}` | ✅ Yes |
| `status::` | `draft` (hardcoded) | `draft` (hardcoded) | ✅ Yes |
| `tags::` | `#zettel #type` | `#zettel #type #mobile-capture` | ✅ Yes (extra tags) |
| File name | `YYYY-MM-DD-HHMMSS.md` | `YYYY-MM-DD-HHMMSS.md` | ✅ Yes |

## Enhanced Properties (Sequence-Only)

Sequence templates add **optional enhanced properties** that don't break compatibility:

### Additional Properties (Optional)
```markdown
priority:: {{select: priority: low | medium | high}}
device:: {{device}}
project:: {{input: project: Optional}}
rating:: {{select: rating: 1 | 2 | 3 | 4 | 5}}
importance:: {{select: importance: low | medium | high}}
confidence:: {{select: confidence: low | medium | high}}
```

### Compatibility Impact:
- **Journal queries**: Ignore extra properties (only query `type::` and `created::`)
- **File format**: Standard Markdown, compatible with all tools
- **Performance**: Minimal impact (few extra lines)

## Query Examples That Work With Both

### 1. Daily Auto-Listing (Primary Use Case)
```markdown
{{query (and (property type [[fleeting/literature/permanent]]) (page-property created {{today}}))}}
```
**Works with**: Both native and Sequence templates

### 2. Type-Specific Queries
```markdown
{{query (property type fleeting)}}
{{query (property type literature)}}
{{query (property type permanent)}}
```
**Works with**: Both native and Sequence templates

### 3. Date Range Queries
```markdown
{{query (and (property type fleeting) (between -7d today))}}
```
**Works with**: Both native and Sequence templates (same date format)

### 4. Context-Based Queries
```markdown
{{query (and (property type fleeting) (property context reading))}}
```
**Works with**: Both native and Sequence templates (same context values)

## Enhanced Query Capabilities (Sequence-Only)

Sequence templates enable **additional query possibilities**:

### 1. Device-Based Filtering
```markdown
{{query (and (property type fleeting) (property device mobile))}}
```
**Shows**: Only notes captured on mobile devices

### 2. Priority-Based Filtering
```markdown
{{query (and (property type fleeting) (property priority high))}}
```
**Shows**: Only high-priority fleeting notes

### 3. Rating-Based Filtering
```markdown
{{query (and (property type literature) (property rating 5))}}
```
**Shows**: Only 5-star literature notes

### 4. Combined Enhanced Queries
```markdown
{{query (and 
  (property type literature)
  (property rating [[4/5]])
  (property device mobile)
  (between -30d today)
)}}
```
**Shows**: High-quality literature notes captured on mobile in last 30 days

## Migration Path Compatibility

### Phase 1: Coexistence (Recommended)
```
templates/zettelkasten/           # Native templates
templates-sequence/zettelkasten/  # Sequence templates
```
**Queries work with both**, users can gradually transition.

### Phase 2: Hybrid Usage
- Use Sequence templates for new notes
- Keep existing native template notes
- All notes appear in same journal queries

### Phase 3: Full Transition
- Convert frequently used native templates to Sequence
- Archive unused native templates
- Update template shortcuts

**No note conversion needed** - all notes remain query-compatible.

## Testing Compatibility

### Test 1: Basic Query Compatibility
**Steps:**
1. Create note with native template
2. Create note with Sequence template
3. Check daily journal query
4. Verify both notes appear

**Expected Result:** ✅ Both notes appear in query results

### Test 2: Property Format Verification
**Steps:**
1. Inspect properties of native template note
2. Inspect properties of Sequence template note
3. Compare `id::`, `type::`, `created::` formats

**Expected Result:** ✅ Identical property formats

### Test 3: Enhanced Query Testing
**Steps:**
1. Create Sequence note with enhanced properties
2. Create query using enhanced properties
3. Verify query works

**Expected Result:** ✅ Enhanced queries work with Sequence notes

## Potential Compatibility Issues

### 1. Variable Name Differences
**Issue:** `{{zettel-id}}` vs manual `{{today}}-{{time}}`
**Solution:** Both generate same format, no compatibility issue

### 2. Extra Properties
**Issue:** Sequence adds `device::`, `priority::`, etc.
**Solution:** Extra properties ignored by existing queries, no issue

### 3. Date/Time Format
**Issue:** Different timestamp precision
**Solution:** Both use same date portion (`YYYY-MM-DD`), queries work

### 4. Mobile-Only Tags
**Issue:** Sequence adds `#mobile-capture` tag on mobile
**Solution:** Tag doesn't affect property-based queries

## Workflow Compatibility

### Journal Creation
**Native workflow:**
1. Create daily journal from template
2. Query auto-lists notes
3. Manual linking optional

**Sequence workflow:**
1. Same journal template works
2. Query auto-lists both native and Sequence notes
3. Enhanced manual linking possible

### Note Processing
**Both systems:**
1. Capture notes (mobile/desktop)
2. Notes appear in journal
3. Process notes from journal
4. Develop connections

**Sequence adds:**
- Enhanced capture workflow
- Additional metadata
- Better organization options

## File System Compatibility

### Storage Location
```
pages/
├── 2026-01-27-143022.md    # Native template note
├── 2026-01-27-143125.md    # Sequence template note
└── 2026-01-27-143230.md    # Another Sequence note
```

### File Format
- **Both**: Standard Markdown (.md)
- **Both**: UTF-8 encoding
- **Both**: Compatible with all Markdown tools

### Syncthing Compatibility
- **Both**: Sync without issues
- **Both**: Same file naming convention
- **Both**: No special handling needed

## Obsidian Export Compatibility

### Export Process
1. **Native notes**: Direct export works
2. **Sequence notes**: Direct export works
3. **Mixed notes**: All export together

### Format Preservation
- **Properties**: Preserved as YAML frontmatter or properties
- **Links**: `[[page-name]]` format preserved
- **Tags**: `#tag` format preserved

### Obsidian Query Compatibility
Obsidian can query the same properties:
```yaml
query: "path:pages type:fleeting"
```
**Works with:** Both native and Sequence notes

## Best Practices for Compatibility

### 1. Maintain Property Consistency
- Keep `id::`, `type::`, `created::` format identical
- Use same context values
- Preserve colon-free ID format

### 2. Progressive Enhancement
- Add Sequence features without breaking native compatibility
- Keep enhanced properties optional
- Maintain backward compatibility

### 3. Query Design
- Design queries to work with both systems
- Use common properties (`type::`, `created::`)
- Add enhanced queries as optional

### 4. Documentation
- Document compatibility clearly
- Provide migration guides
- Show query examples for both

## Troubleshooting Compatibility Issues

### Issue: Notes Not Appearing in Queries
**Check:**
1. Property names match exactly (`type::`, not `- type::`)
2. Date format matches (`YYYY-MM-DD`)
3. Page has properties at page level (not block level)

**Solution:** Sequence templates use same format as native, should work.

### Issue: Enhanced Queries Not Working
**Check:**
1. Note has enhanced properties (`device::`, `priority::`, etc.)
2. Property values match query criteria
3. Using Sequence template (native templates don't have enhanced properties)

**Solution:** Enhanced queries only work with Sequence template notes.

### Issue: Mixed Template Usage Confusion
**Check:**
1. Which template directory is being used
2. Template selection in Logseq
3. Template file names and locations

**Solution:** 
- Use `templates-sequence/zettelkasten-consolidated.md` for Sequence templates
- Use `templates/` for native templates
- Consolidated template contains all note types in one file

## Mobile-Specific Considerations

### Important Reality: No Mobile Plugin Support
- **Sequence plugin doesn't work on mobile Logseq**
- **Mobile users see static templates** without Sequence features
- **Desktop processing required** for full functionality

### Recommended Mobile-Desktop Workflow

**Option A: Native Templates on Mobile (Recommended)**
```
Mobile: Use native templates → Capture notes → Sync to desktop
Desktop: Use Sequence to enhance → Add metadata → Update properties
```

**Option B: Static Sequence Templates on Mobile**
```
Mobile: Use Sequence templates as static files → Manual ID entry
Desktop: Process notes → Populate variables → Clean up templates
```

**Option C: Tag-Based Workflow**
```
Mobile: Capture with native templates → Add #sequence-process tag
Desktop: Filter #sequence-process → Enhance with Sequence → Remove tag
```

### Mobile Template Behavior
- **Variables**: Remain as text (e.g., `{{zettel-id}}` appears literally)
- **Dropdowns**: Show options as text
- **Conditionals**: Show all content (no hiding)
- **Workflows**: Not available on mobile

### Desktop Enhancement Process
1. **Sync notes** from mobile to desktop
2. **Open in Sequence** on desktop
3. **Populate variables** automatically
4. **Add enhanced metadata**
5. **Clean up** any static template artifacts

## Conclusion

Sequence-enhanced templates maintain **full backward compatibility** with the existing native template system:

### Guaranteed Compatibility:
- ✅ Journal query auto-listing
- ✅ Property-based filtering
- ✅ File format and storage
- ✅ Syncthing sync
- ✅ Obsidian export
- ✅ Page linking and references

### Added Value (Sequence-Only on Desktop):
- ✅ Enhanced UI/UX with labeled inputs (desktop only)
- ✅ Additional metadata (priority, rating, etc.) (desktop only)
- ✅ Workflow sequences (desktop only)
- ✅ Conditional logic (desktop only)
- ✅ Device detection (desktop only)
- ✅ Enhanced query capabilities (desktop only)

### Mobile Limitations:
- ⚠️ No Sequence plugin support on mobile
- ⚠️ Static templates only on mobile
- ⚠️ Manual work required for mobile capture
- ⚠️ Desktop processing needed for full features

### Migration Strategy:
1. **Start with coexistence** - both template sets work
2. **Gradual transition** - use Sequence for new notes
3. **Full compatibility** - all notes work with existing system
4. **Enhanced capabilities** - optional advanced features

**Result:** Users can adopt Sequence-enhanced templates without breaking their existing workflow or losing access to their existing notes.