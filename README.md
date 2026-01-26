# Logseq Zettelkasten Plugin

A Logseq plugin for rapid Zettelkasten note capture with templates and daily journal integration. Designed for mobile and desktop use with Syncthing sync to Obsidian.

## Features

- **Three Template Types**: Fleeting, Literature, and Permanent notes
- **Automatic ID Generation**: `YYYY-MM-DD-HHMMSS` format for unique note identification
- **Daily Journal Integration**: Collapsible Zettelkasten section in daily journals
- **Mobile Optimized**: Touch-friendly interface with simplified templates for mobile
- **Obsidian Compatible**: Notes formatted in standard Markdown for easy export to Obsidian
- **Cross-Platform**: Works identically on iOS, Android, and desktop Logseq

## Installation

### Method 1: From Logseq Plugin Marketplace (Recommended)
1. Open Logseq
2. Go to Settings → Plugins
3. Search for "Zettelkasten"
4. Click "Install"
5. Restart Logseq if prompted

### Method 2: Manual Installation from Source
1. Download or clone the repository:
   ```bash
   git clone https://github.com/yourusername/logseq-zettel.git
   cd logseq-zettel
   ```

2. Install dependencies and build:
   ```bash
   npm install
   npm run build
   ```

3. In Logseq:
   - Go to Settings → Plugins
   - Click "Load unpacked plugin"
   - Select the `dist` folder from the project
   - Enable the plugin

### Method 3: Using Pre-built Release
1. Download the latest release from GitHub
2. Extract the zip file
3. In Logseq:
   - Go to Settings → Plugins
   - Click "Load unpacked plugin"
   - Select the extracted folder
   - Enable the plugin

## System Requirements
- Logseq v0.9.0 or higher
- Node.js 16+ (for development/build only)
- Syncthing (recommended for mobile-desktop sync)
- Obsidian (for final note repository)

## Quick Start

1. **Install the plugin** using one of the methods above
2. **Open today's journal** in Logseq
3. **Type `/zettel fleeting`** to create your first Zettelkasten note
4. **Fill in the template** with your thoughts
5. **Check the Zettelkasten section** at the top of your journal to see the note link

## Detailed Usage Guide

### Creating Zettelkasten Notes

#### Slash Commands (Desktop & Mobile)
Use these commands anywhere in Logseq:

| Command | Description | Mobile Shortcut |
|---------|-------------|-----------------|
| `/zettel fleeting` | Create a fleeting note (quick capture) | `/z fle` |
| `/zettel literature` | Create a literature note (for reading/learning) | `/z lit` |
| `/zettel permanent` | Create a permanent note (developed ideas) | `/z per` |
| `/zettel` | Show available commands | `/z` |

#### Mobile-Specific Features
- **Floating Action Button**: On mobile, a blue "Z" button appears in the bottom-right corner for quick template selection
- **Simplified Templates**: Mobile templates have fewer optional fields for faster entry
- **Touch Optimization**: Larger buttons and optimized UI for touch screens

### Daily Journal Integration

#### Automatic Section Creation
Each day's journal automatically includes:
- A collapsible "Zettelkasten Notes" section at the top
- Default state: Collapsed (click to expand)
- Automatic links to all Zettelkasten notes created that day

#### Journal Section Features
- **Collapsible**: Click the arrow to expand/collapse
- **Auto-updating**: New notes automatically appear in the section
- **Persistent**: Section remains even after closing/reopening Logseq
- **Styled**: Distinct visual appearance for easy identification

### Note Structure & ID System

#### Automatic ID Generation
Each note receives a unique timestamp ID:
- **Format**: `YYYY-MM-DD-HHMMSS` (e.g., `2026-01-27-143022`)
- **Uniqueness**: Second-level granularity ensures uniqueness
- **Sorting**: Chronological sorting by filename
- **Page Name**: ID becomes the page name in Logseq

#### Template Structure
All templates include:
- **Properties**: `id`, `type`, `created`, `context`, `status`, `tags`
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
**Key Fields**: Quick Thought, To Develop, Raw Capture

#### 2. Literature Notes
**Purpose**: Capturing insights from external sources
**When to use**:
- Reading books, articles, papers
- Watching educational content
- Listening to podcasts
**Key Fields**: Source, Author, Summary, Key Quotes, My Thoughts

#### 3. Permanent Notes
**Purpose**: Developed ideas and synthesized concepts
**When to use**:
- Connecting multiple fleeting/literature notes
- Developing original ideas
- Creating reference material
**Key Fields**: Concept, Claim, Evidence, Implications, Connections

### Workflow Integration

#### Rapid Capture Workflow
```
Quick Thought → /zettel fleeting → Fill template → Appears in journal
```

#### Reading Workflow
```
Read Source → /zettel literature → Add quotes/thoughts → Connect to existing notes
```

#### Idea Development Workflow
```
Multiple notes → /zettel permanent → Synthesize ideas → Create connections
```

### Export to Obsidian

#### Syncthing Setup
1. **Install Syncthing** on mobile and desktop devices
2. **Configure folder sync** for your Logseq graph directory
3. **Enable continuous sync** for real-time updates

#### Manual Export Process
1. **On Desktop**:
   - Open your Logseq graph folder
   - Navigate to `pages/` directory
   - Copy files with timestamp IDs (e.g., `2026-01-27-143022.md`)
   
2. **To Obsidian**:
   - Open your Obsidian vault
   - Paste copied files into desired location
   - Obsidian will automatically index the notes

#### Export Tips
- **Batch Export**: Copy multiple files at once
- **Organization**: Keep exported files flat (no subfolders) for chronological sorting
- **Verification**: Check that `[[wikilinks]]` work correctly in Obsidian
- **Backup**: Keep original files in Logseq until confirmed in Obsidian

### Mobile-Desktop Sync Strategy

#### Recommended Setup
```
Mobile Logseq → Syncthing → Desktop Logseq → Manual Copy → Obsidian Vault
```

#### Advantages
- **Mobile Capture**: Quick notes on the go
- **Desktop Processing**: Better for developing complex notes
- **Central Repository**: Obsidian as final knowledge base
- **No Plugin Conflicts**: Simple file-based sync

#### File Locations
- **Logseq (Mobile)**: App-specific storage (synced via Syncthing)
- **Logseq (Desktop)**: User directory (e.g., `~/Logseq/`)
- **Obsidian**: Your chosen vault location

## Template Customization

### Modifying Default Templates
The three default templates can be modified to suit your workflow:

1. **Locate Template Pages**:
   - Templates are stored as pages in your Logseq graph
   - Look for pages: `templates/zettel-fleeting`, `templates/zettel-literature`, `templates/zettel-permanent`

2. **Edit Template Content**:
   - Open the template page
   - Modify the structure as needed
   - Save changes

3. **Template Variables**:
   - `{{id}}` - Auto-generated timestamp ID
   - `{{date}}` - Current date (YYYY-MM-DD)
   - `{{time}}` - Current time (HH:MM)
   - `{{timestamp}}` - Full ISO timestamp
   - `{{context}}` - Capture context
   - `{{note-type}}` - Note type (fleeting/literature/permanent)
   - `{{status}}` - Default status (draft)
   - `{{capture-device}}` - mobile/desktop
   - `{{year}}`, `{{month}}`, `{{day}}`, `{{weekday}}` - Date components

### Template Modification Guidelines
- **Keep Essential Fields**: Don't remove `id`, `type`, `created` properties
- **Maintain Structure**: Keep header format for consistency
- **Test Changes**: Create test notes after modifications
- **Backup Templates**: Copy templates before major changes

## Configuration Options

### Journal Section Settings
The Zettelkasten section in daily journals can be configured:

- **Position**: Always at the top of the journal
- **Default State**: Collapsed (configurable via template)
- **Title**: "Zettelkasten Notes" (customizable in template)

### Mobile Optimization Settings
- **Simplified Templates**: Automatic on mobile
- **Floating Button**: Enabled by default on mobile
- **Short Commands**: `/z` prefix for faster typing

## Troubleshooting

### Common Issues & Solutions

#### Plugin Not Loading
- **Check Logseq Version**: Ensure v0.9.0+
- **Verify Installation**: Plugin should appear in Settings → Plugins
- **Restart Logseq**: Sometimes required after installation

#### Slash Commands Not Working
- **Check Plugin Status**: Ensure plugin is enabled
- **Typo Check**: Commands are case-sensitive
- **Restart Plugin**: Disable and re-enable the plugin

#### Journal Section Missing
- **Create New Journal**: Open today's journal page
- **Check Template**: Ensure `templates/zettel-*` pages exist
- **Plugin Initialization**: May need to create first Zettel note

#### Mobile Issues
- **Performance**: Large graphs may slow mobile performance
- **UI Elements**: Floating button may need page refresh
- **Sync Delays**: Syncthing may take time to sync changes

#### Export Problems
- **File Format**: Ensure notes are `.md` files
- **Link Format**: `[[wikilinks]]` should work in Obsidian
- **Sync Status**: Verify Syncthing is actively syncing

### Debugging Tips
1. **Check Browser Console**: Desktop Logseq → F12 → Console
2. **Plugin Logs**: Look for "Zettelkasten" messages
3. **Test Minimal**: Create new graph for testing
4. **Clear Cache**: Sometimes fixes UI issues

## Advanced Usage

### Batch Processing
- **Morning Review**: Process yesterday's fleeting notes
- **Weekly Synthesis**: Create permanent notes from weekly captures
- **Monthly Archive**: Review and tag older notes

### Integration with Other Systems
- **Task Management**: Use `[ ]` checkboxes in templates
- **Calendar Integration**: Date-based note retrieval
- **Reference Management**: Link to Zotero or other reference managers

### Performance Optimization
- **Large Graphs**: Consider separate graphs for different projects
- **Mobile Storage**: Regularly sync to desktop to free mobile space
- **Backup Strategy**: Regular backups of Logseq graph

## Examples

See the `examples/` directory for:
- Sample Zettelkasten notes with 2026 timestamps
- Daily journal with Zettelkasten section
- Template structure examples

## Support

### Getting Help
1. **Check Documentation**: This README and example files
2. **Test First**: Try in a new graph before main graph
3. **Backup Data**: Always backup before troubleshooting

### Reporting Issues
Include:
- Logseq version
- Platform (iOS/Android/Desktop)
- Steps to reproduce
- Error messages
- Screenshots if helpful

## Development

See `AGENTS.md` for development guidelines and build instructions.

## Mobile Optimization

On mobile devices:
- Templates are simplified with fewer optional fields
- Shorter slash commands for faster entry
- Touch-optimized interface
- Performance optimized for mobile processors

## Development

### Project Structure
```
logseq-zettel/
├── src/
│   ├── main.js          # Plugin entry point
│   ├── templates.js     # Template definitions
│   ├── journal.js       # Daily journal integration
│   └── utils.js         # Utilities (ID generation, etc.)
├── icons/               # Plugin icons
└── dist/                # Built plugin
```

### Build Commands
```bash
npm install      # Install dependencies
npm run dev      # Development mode with hot reload
npm run build    # Build for production
npm run preview  # Preview built plugin
```

## License

MIT

## Support

For issues and feature requests, please open an issue on GitHub.