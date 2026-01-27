import { 
  generateZettelId, 
  getTemplateVariables, 
  populateTemplateVariables,
  simplifyForMobile,
  isMobile,
  getContextDropdown,
  getContextOptions
} from './utils.js';
import { getTemplate, getTemplateDisplayName } from './templates.js';
import { 
  addZettelToJournal, 
  getTodayJournalPage,
  getJournalSectionConfig 
} from './journal.js';

let pluginInitialized = false;

async function createZettelNote(noteType, context = null) {
  try {
    // Generate unique ID with colon-free format
    const zettelId = generateZettelId('second');
    
    // Get context from user if not provided
    let selectedContext = context;
    if (!selectedContext && isMobile()) {
      // On mobile, use dropdown for context selection
      selectedContext = await promptForContext();
    }
    if (!selectedContext) {
      selectedContext = 'quick-capture';
    }
    
    // Get template and populate variables
    const template = getTemplate(noteType);
    const variables = getTemplateVariables(zettelId, noteType, selectedContext);
    let populatedTemplate = populateTemplateVariables(template, variables);
    
    // Simplify for mobile if needed
    if (isMobile()) {
      populatedTemplate = simplifyForMobile(populatedTemplate);
    }
    
    // Create the page with the ID as page name
    await logseq.Editor.createPage(zettelId, {
      content: populatedTemplate,
      format: 'markdown',
      journal: false
    });
    
    // Add to today's journal
    const todayJournal = await getTodayJournalPage();
    if (todayJournal) {
      const briefDescription = getBriefDescriptionFromContext(selectedContext);
      await addZettelToJournal(todayJournal, zettelId, noteType, briefDescription);
    }
    
    // Open the newly created page
    await logseq.Editor.openInRightSidebar(zettelId);
    
    // Show success message
    const displayName = getTemplateDisplayName(noteType);
    logseq.UI.showMsg(`Created ${displayName}: ${zettelId}`, 'success');
    
    return zettelId;
  } catch (error) {
    console.error('Error creating zettel note:', error);
    logseq.UI.showMsg(`Failed to create note: ${error.message}`, 'error');
    return null;
  }
}

async function promptForContext() {
  try {
    const contextOptions = getContextOptions();
    
    // Use Logseq's prompt for context selection
    const selected = await logseq.UI.showPrompt({
      title: 'Select Context',
      message: 'Choose the context for this note:',
      input: {
        type: 'dropdown',
        items: contextOptions,
        default: 'quick-capture'
      }
    });
    
    return selected || 'quick-capture';
  } catch (error) {
    console.warn('Could not show context prompt:', error);
    return 'quick-capture';
  }
}

function getBriefDescriptionFromContext(context) {
  // Extract a brief description from context if possible
  if (context && context !== 'quick-capture') {
    return context.length > 50 ? context.substring(0, 47) + '...' : context;
  }
  return '';
}

async function registerSlashCommands() {
  // Register slash command for each template type
  const templateTypes = ['fleeting', 'literature', 'permanent'];
  
  for (const noteType of templateTypes) {
    const displayName = getTemplateDisplayName(noteType);
    
    await logseq.Editor.registerSlashCommand(
      `zettel ${noteType}`,
      async () => {
        await createZettelNote(noteType);
      },
      { key: `zettel-${noteType}` }
    );
    
    // Also register shorter alias for mobile
    if (isMobile()) {
      await logseq.Editor.registerSlashCommand(
        `z ${noteType.substring(0, 3)}`, // z fle, z lit, z per
        async () => {
          await createZettelNote(noteType);
        },
        { key: `z-${noteType.substring(0, 3)}` }
      );
    }
  }
  
  // Register a generic zettel command that shows options
  await logseq.Editor.registerSlashCommand(
    'zettel',
    async () => {
      // Show quick picker for template type
      logseq.UI.showMsg('Use: /zettel fleeting, /zettel literature, or /zettel permanent', 'info');
    },
    { key: 'zettel' }
  );
}

async function initializePlugin() {
  if (pluginInitialized) return;
  
  try {
    console.log('Initializing Logseq Zettelkasten Plugin...');
    
    // Register slash commands
    await registerSlashCommands();
    
    // Register UI items if needed
    if (isMobile()) {
      // Add mobile-optimized UI items
      await registerMobileUI();
    }
    
    pluginInitialized = true;
    console.log('Logseq Zettelkasten Plugin initialized successfully');
    
    // Show welcome message
    logseq.UI.showMsg('Zettelkasten plugin loaded. Use /zettel to create notes.', 'success');
    
  } catch (error) {
    console.error('Failed to initialize plugin:', error);
    logseq.UI.showMsg('Failed to initialize Zettelkasten plugin', 'error');
  }
}

async function registerMobileUI() {
  try {
    // Import and register mobile template menu
    const { registerMobileTemplateMenu } = await import('./components/TemplateMenu.js');
    registerMobileTemplateMenu();
    console.log('Mobile UI optimizations enabled');
  } catch (error) {
    console.warn('Could not load mobile UI components:', error);
    // Fall back to slash commands only
  }
}

// Plugin entry point
logseq.ready(initializePlugin).catch(console.error);

// Export for testing if needed
export {
  createZettelNote,
  generateZettelId,
  getTemplateVariables,
  populateTemplateVariables,
  isMobile
};