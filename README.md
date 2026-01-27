# Logseq Zettelkasten Templates

A mobile-first template system for Zettelkasten note capture in Logseq, designed for plugin-free usage with Syncthing sync to Obsidian. Works on mobile and desktop without JavaScript plugins.

## Features

- **Three Template Types**: Fleeting, Literature, and Permanent notes
- **Colon-Free ID Generation**: `YYYY-MM-DD-HHMMSS` format (no colons in filenames)
- **Query-Based Journal Integration**: Auto-lists notes in daily journals using Logseq queries
- **Mobile-First Design**: Optimized for quick capture on mobile devices
- **Single Template Set**: Unified templates work on both mobile and desktop
- **Context Dropdowns**: Mobile-friendly selection with 8 predefined contexts
- **Conditional Sections**: Desktop-only content hidden on mobile
- **Obsidian Compatible**: Standard Markdown format for easy export
- **Cross-Platform**: Works on iOS, Android, and desktop Logseq without plugins

## Installation

### Method 1: Template-Only Installation (Recommended for Mobile)
1. **Copy template files** to your Logseq graph:
   ```bash
   cp -r templates/ /path/to/your/logseq-graph/
   ```

2. **Create quick access page** `templates/zettelkasten` in Logseq

3. **Use templates** by creating new pages with template selection

### Method 2: Plugin Installation (Desktop Only)
For desktop users who can use plugins:
1. **Install from Logseq Marketplace** or build from source
2. **Enable plugin** in settings
3. **Use slash commands**: `/zettel fleeting`, `/zettel literature`, `/zettel permanent`

### Method 3: Manual Setup
1. **Download templates** from this repository
2. **Place in Logseq templates directory**: `templates/zettelkasten/`
3. **Configure Logseq** for Markdown format and `YYYY-MM-DD` date format

## System Requirements
- Logseq v0.9.0 or higher
- Mobile Logseq (no plugin support required)
- Syncthing (recommended for mobile-desktop sync)
- Obsidian (optional, for final note repository)

## Quick Start

1. **Copy templates** to your Logseq graph
2. **Open Logseq** and create new page
3. **Select template** from `templates/zettelkasten/` directory
4. **Fill in the template** with your thoughts
5. **Check daily journal** for auto-listed notes (query-based integration)

## Detailed Usage Guide

### Creating Zettelkasten Notes

#### Template-Based Creation (Mobile & Desktop)
1. **Create new page** in Logseq
2. **Select template** from `templates/zettelkasten/` directory
3. **Fill template fields**:
   - Select context from dropdown
   - Enter main content
   - Add any additional information

#### Plugin Commands (Desktop Only)
If using the plugin on desktop:
```
/zettel fleeting     # Quick capture
/zettel literature   # Reading notes  
/zettel permanent    # Developed ideas
/zettel              # Show all commands
```

### Mobile-First Design

#### Mobile Optimization
- **Minimal Properties**: Only `id::` and `type::` on mobile
- **Context Dropdowns**: Quick selection from 8 options
- **Conditional Sections**: Desktop-only content auto-hidden
- **Colon-Free IDs**: `2026-01-27-143022` format (no `:`)

#### Mobile Capture Workflow
```
1. Open Logseq on mobile
2. Create new page
3. Select "fleeting" template
4. Choose context (dropdown)
5. Enter thought
6. Save (auto-ID: 2026-01-27-143022)
```

### Daily Journal Integration

#### Query-Based Auto-Listing
Each daily journal includes a query that automatically lists today's Zettelkasten notes:

```markdown
## 🔍 Auto-Listed Zettels {{renderer :collapse, query-zettels}}
{{query (and (property type [[fleeting/literature/permanent]]) (page-property created {{today}}))}}
```

#### Manual Linking
You can also manually link notes in your journal:
```markdown
- [[2026-01-27-143022]] - Quick thought about Lindy Effect
```

### Note Structure & ID System

#### Colon-Free ID Generation
- **Format**: `YYYY-MM-DD-HHMMSS` (e.g., `2026-01-27-143022`)
- **No Colons**: Uses `HHMMSS` instead of `HH:MM:SS`
- **Uniqueness**: Second-level granularity ensures uniqueness
- **Sorting**: Chronological sorting by filename
- **Page Name**: ID becomes the page name in Logseq

#### Template Structure
All templates include:
- **Essential Properties**: `id::`, `type::` (mobile & desktop)
- **Additional Properties**: `status::`, `tags::`, `created::` (desktop only)
- **Header**: Note title with ID and type
- **Content Sections**: Template-specific fields
- **Connection Fields**: Placeholders for linking to other notes

### Template Types

#### 1. Fleeting Notes
**Purpose**: Quick capture of ideas, thoughts, and observations
**When to use**: 
- Immediate thoughts that need recording
- Inspiration that strikes
- Things to process later
**Key Fields**: Thought, To Process Later

#### 2. Literature Notes
**Purpose**: Capturing insights from external sources
**When to use**:
- Reading books, articles, papers
- Watching educational content
- Listening to podcasts
**Key Fields**: Source, Author, Summary, Key Points

#### 3. Permanent Notes
**Purpose**: Developed ideas and synthesized concepts
**When to use**:
- Connecting multiple fleeting/literature notes
- Developing original ideas
- Creating reference material
**Key Fields**: Concept, Core Idea, Supporting Points

### Workflow Integration

#### Rapid Capture Workflow
```
Quick Thought → Select fleeting template → Fill template → Auto-listed in journal
```

#### Reading Workflow
```
Read Source → Select literature template → Add summary/points → Connect to existing notes
```

#### Development Workflow
```
Multiple notes → Select permanent template → Synthesize ideas → Create connections
```

## Mobile-Desktop Sync Strategy

### Recommended Setup
```
Mobile Logseq → Syncthing → Desktop Logseq → Manual Copy → Obsidian Vault
```

### Advantages
- **Mobile Capture**: Quick notes on the go
- **Desktop Processing**: Better for developing complex notes
- **Central Repository**: Obsidian as final knowledge base
- **No Plugin Conflicts**: Simple file-based sync

### File Locations
- **Logseq (Mobile)**: App-specific storage (synced via Syncthing)
- **Logseq (Desktop)**: User directory (e.g., `~/Logseq/`)
- **Obsidian**: Your chosen vault location

## Template Customization

### Modifying Templates
The three default templates can be modified to suit your workflow:

1. **Locate Template Files**:
   - Templates are stored in `templates/zettelkasten/` directory
   - Files: `fleeting.md`, `literature.md`, `permanent.md`

2. **Edit Template Content**:
   - Open the template file in a text editor
   - Modify the structure as needed
   - Save changes

3. **Template Variables**:
   - `{{today}}` - Current date (YYYY-MM-DD)
   - `{{time}}` - Current time (HH:MM)
   - `{{select: option1 | option2 | option3}}` - Dropdown selection

### Template Modification Guidelines
- **Keep Essential Fields**: Don't remove `id::` and `type::` properties
- **Maintain Structure**: Keep header format for consistency
- **Test Changes**: Create test notes after modifications
- **Backup Templates**: Copy templates before major changes

## Export to Obsidian

### Simple Export Process
1. **On Desktop**:
   - Open your Logseq graph folder
   - Navigate to `pages/` directory
   - Copy files with timestamp IDs (e.g., `2026-01-27-143022.md`)
    
2. **To Obsidian**:
   - Open your Obsidian vault
   - Paste copied files into desired location
   - Obsidian will automatically index the notes

### Export Tips
- **Batch Export**: Copy multiple files at once
- **Organization**: Keep exported files flat (no subfolders) for chronological sorting
- **Verification**: Check that `[[wikilinks]]` work correctly in Obsidian
- **Backup**: Keep original files in Logseq until confirmed in Obsidian

## Troubleshooting

### Common Issues & Solutions

#### Templates Not Showing
- **Check Directory**: Ensure `templates/zettelkasten/` exists in your graph
- **File Format**: Files must be `.md` format
- **Restart Logseq**: Sometimes required after adding templates

#### Date/Time Not Populating
- **System Time**: Ensure device time is correct
- **Logseq Settings**: Date format should be `YYYY-MM-DD`
- **Manual Entry**: Use `/date` and `/time` commands if needed

#### Query Not Working
- **Property Names**: Must match exactly (`type::`, not `- type::`)
- **Date Format**: Must match `YYYY-MM-DD` format
- **Page Properties**: Properties must be at page level, not block level

#### Mobile Issues
- **Template Selection**: Use page `templates/zettelkasten` for quick access
- **Context Dropdowns**: May not work on all mobile Logseq versions
- **Syncthing Sync**: Check sync status if notes aren't appearing on desktop

### Debugging Tips
1. **Check File Structure**: Verify templates are in correct location
2. **Test Queries**: Create simple test queries to verify syntax
3. **Manual Testing**: Create test notes to verify template functionality
4. **Logseq Community**: Check Logseq Discord for mobile-specific issues

## Project Structure

```
logseq-zettel/
├── templates/                    # Standalone template files
│   ├── zettelkasten/
│   │   ├── fleeting.md          # Fleeting note template
│   │   ├── literature.md        # Literature note template
│   │   └── permanent.md         # Permanent note template
│   └── daily-journal-with-zettels.md  # Journal template
├── src/                         # Plugin source code (desktop only)
│   ├── utils.js                 # Utility functions
│   ├── templates.js             # Template definitions
│   ├── main.js                  # Plugin entry point
│   └── journal.js               # Journal integration
├── examples/                    # Sample notes
├── icons/                       # Plugin icons (desktop only)
├── dist/                        # Built plugin (desktop only)
├── README.md                    # This file
├── TEMPLATE-INSTALLATION.md     # Detailed template setup guide
├── QUICKSTART-TEMPLATES.md      # 5-minute quick start
├── QUICKSTART.md                # Plugin quick start (desktop)
├── TEMPLATES.md                 # Template documentation
└── package.json                 # Project configuration
```

## Development

### Building the Plugin (Desktop Only)
```bash
npm install     # Install dependencies
npm run build   # Build plugin
npm run dev     # Development mode with hot reload
```

### Template Development
1. **Edit template files** in `templates/` directory
2. **Test changes** in your Logseq graph
3. **Update documentation** if template structure changes
4. **Commit changes** to repository

## Support & Resources

### Documentation
- `TEMPLATE-INSTALLATION.md` - Detailed template setup guide
- `QUICKSTART-TEMPLATES.md` - 5-minute quick start
- `TEMPLATES.md` - Template reference and examples
- `examples/` - Sample notes and workflows

### Community
- **Logseq Discord**: #templates channel for template discussions
- **GitHub Issues**: Bug reports and feature requests
- **Template Repository**: Updates and examples

### Updates
- **Check Repository**: Regular template updates and improvements
- **Backup First**: Always backup your templates before updating
- **Test Changes**: Test new templates in separate graph first

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by Zettelkasten methodology and Niklas Luhmann's note-taking system
- Built for the Logseq community with mobile-first design
- Thanks to all contributors and testers

---

**Ready to start?** Check out `QUICKSTART-TEMPLATES.md` for a 5-minute setup guide!