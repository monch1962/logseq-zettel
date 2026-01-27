import { isMobile } from './utils.js';

const ZETTELKASTEN_SECTION_TITLE = '## 📝 Zettelkasten Notes';
const ZETTELKASTEN_SECTION_ID = 'zettelkasten-notes-section';
const QUERY_BASED_SECTION_TITLE = '## 🔍 Auto-Listed Zettels';

export async function ensureZettelkastenSectionInJournal(journalPageName) {
  try {
    const page = await logseq.Editor.getPage(journalPageName);
    if (!page) return null;

    const blocks = await logseq.Editor.getPageBlocksTree(journalPageName);
    
    // Check if Zettelkasten section already exists
    const existingSection = blocks.find(block => 
      block.content.includes(ZETTELKASTEN_SECTION_TITLE)
    );
    
    if (existingSection) {
      return existingSection.uuid;
    }
    
    // Create new Zettelkasten section at the top
    const firstBlock = blocks[0];
    const sectionContent = `${ZETTELKASTEN_SECTION_TITLE} {{renderer :collapse, ${ZETTELKASTEN_SECTION_ID}}}`;
    
    let newSectionUuid;
    if (firstBlock) {
      // Insert before first block
      newSectionUuid = await logseq.Editor.insertBlock(firstBlock.uuid, sectionContent, {
        before: true,
        sibling: false
      });
    } else {
      // Page is empty, insert as first block
      newSectionUuid = await logseq.Editor.insertBlock(journalPageName, sectionContent, {
        isPageBlock: true
      });
    }
    
    // Add a placeholder bullet point
    await logseq.Editor.insertBlock(newSectionUuid, '- No Zettelkasten notes yet', {
      sibling: false
    });
    
    return newSectionUuid;
  } catch (error) {
    console.error('Error ensuring Zettelkasten section:', error);
    return null;
  }
}

export async function addZettelToJournal(journalPageName, zettelId, noteType, briefDescription = '') {
  try {
    // For mobile-first approach, use query-based integration when possible
    if (isMobile()) {
      // On mobile, ensure query section exists
      await ensureQueryBasedSectionInJournal(journalPageName);
      return true;
    } else {
      // On desktop, use manual linking
      const sectionUuid = await ensureZettelkastenSectionInJournal(journalPageName);
      if (!sectionUuid) return false;

      const blocks = await logseq.Editor.getPageBlocksTree(journalPageName);
      const sectionBlock = blocks.find(block => block.uuid === sectionUuid);
      
      if (!sectionBlock) return false;
      
      // Get the first child block of the section (the placeholder or existing list)
      const childBlocks = await logseq.Editor.getBlock(sectionBlock.uuid, {
        includeChildren: true
      });
      
      const firstChild = childBlocks?.children?.[0];
      
      // Format the zettel entry
      const displayName = getNoteTypeDisplayName(noteType);
      const zettelEntry = `- [[${zettelId}]] - ${displayName}: ${briefDescription || 'New note'}`;
      
      if (firstChild && firstChild.content === '- No Zettelkasten notes yet') {
        // Replace placeholder
        await logseq.Editor.updateBlock(firstChild.uuid, zettelEntry);
      } else if (firstChild) {
        // Insert at the beginning of existing list
        await logseq.Editor.insertBlock(firstChild.uuid, zettelEntry, {
          before: true,
          sibling: true
        });
      } else {
        // No children, insert as first child
        await logseq.Editor.insertBlock(sectionBlock.uuid, zettelEntry, {
          sibling: false
        });
      }
      
      return true;
    }
  } catch (error) {
    console.error('Error adding zettel to journal:', error);
    return false;
  }
}

function getNoteTypeDisplayName(noteType) {
  const names = {
    fleeting: 'Fleeting',
    literature: 'Literature',
    permanent: 'Permanent'
  };
  return names[noteType] || 'Note';
}

export async function getTodayJournalPage() {
  try {
    const today = new Date().toISOString().split('T')[0];
    return today;
  } catch (error) {
    console.error('Error getting today journal page:', error);
    return null;
  }
}

export function getJournalSectionConfig() {
  return {
    title: ZETTELKASTEN_SECTION_TITLE,
    id: ZETTELKASTEN_SECTION_ID,
    defaultCollapsed: true,
    position: 'top'
  };
}

export async function ensureQueryBasedSectionInJournal(journalPageName) {
  try {
    const page = await logseq.Editor.getPage(journalPageName);
    if (!page) return null;

    const blocks = await logseq.Editor.getPageBlocksTree(journalPageName);
    
    // Check if query section already exists
    const existingSection = blocks.find(block => 
      block.content.includes(QUERY_BASED_SECTION_TITLE)
    );
    
    if (existingSection) {
      return existingSection.uuid;
    }
    
    // Create query-based section
    const queryContent = `${QUERY_BASED_SECTION_TITLE} {{renderer :collapse, query-zettels}}
{{query (and (property type [[fleeting/literature/permanent]]) (page-property created ${journalPageName}))}}`;
    
    // Find a good position (after manual section if it exists)
    const manualSection = blocks.find(block => 
      block.content.includes(ZETTELKASTEN_SECTION_TITLE)
    );
    
    let newSectionUuid;
    if (manualSection) {
      // Insert after manual section
      newSectionUuid = await logseq.Editor.insertBlock(manualSection.uuid, queryContent, {
        before: false,
        sibling: true
      });
    } else {
      // Insert at the top
      const firstBlock = blocks[0];
      if (firstBlock) {
        newSectionUuid = await logseq.Editor.insertBlock(firstBlock.uuid, queryContent, {
          before: true,
          sibling: false
        });
      } else {
        newSectionUuid = await logseq.Editor.insertBlock(journalPageName, queryContent, {
          isPageBlock: true
        });
      }
    }
    
    return newSectionUuid;
  } catch (error) {
    console.error('Error ensuring query-based section:', error);
    return null;
  }
}

export function getQueryBasedJournalTemplate() {
  const today = new Date().toISOString().split('T')[0];
  return `# ${today}

## 📝 Manual Zettel Links
- [[ ]]

## 🔍 Auto-Listed Zettels {{renderer :collapse, query-zettels}}
{{query (and (property type [[fleeting/literature/permanent]]) (page-property created ${today}))}}

## Notes
`;
}