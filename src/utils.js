export function generateZettelId(precision = 'second') {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  if (precision === 'minute') {
    return `${year}-${month}-${day}-${hours}${minutes}`;
  }
  
  return `${year}-${month}-${day}-${hours}${minutes}${seconds}`;
}

export function getCurrentDate() {
  const now = new Date();
  return now.toISOString().split('T')[0]; // YYYY-MM-DD
}

export function getCurrentTime() {
  const now = new Date();
  return now.toTimeString().split(' ')[0].slice(0, 5); // HH:MM
}

export function getCurrentTimeNoColon(precision = 'second') {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  if (precision === 'minute') {
    return `${hours}${minutes}`;
  }
  
  return `${hours}${minutes}${seconds}`;
}

export function getISOTimestamp() {
  return new Date().toISOString();
}

export function getCaptureContext() {
  // Default context - can be enhanced based on current page or other factors
  return 'quick-capture';
}

export function isMobile() {
  return typeof logseq !== 'undefined' && logseq.App.isMobile?.() || false;
}

export function populateTemplateVariables(template, variables) {
  let result = template;
  
  for (const [key, value] of Object.entries(variables)) {
    const regex = new RegExp(`{{${key}}}`, 'g');
    result = result.replace(regex, value);
  }
  
  return result;
}

export function getTemplateVariables(zettelId, noteType, context = 'quick-capture') {
  const now = new Date();
  const isMobileDevice = isMobile();
  
  return {
    'id': zettelId,
    'date': getCurrentDate(),
    'time': getCurrentTime(),
    'time-no-colon': getCurrentTimeNoColon('second'),
    'timestamp': getISOTimestamp(),
    'context': context,
    'note-type': noteType,
    'note-type-display': getTemplateDisplayName(noteType),
    'status': 'draft',
    'capture-method': 'quick-capture',
    'capture-device': isMobileDevice ? '📱 Mobile' : '💻 Desktop',
    'year': now.getFullYear().toString(),
    'month': String(now.getMonth() + 1).padStart(2, '0'),
    'day': String(now.getDate()).padStart(2, '0'),
    'weekday': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][now.getDay()],
    'if-desktop': isMobileDevice ? '' : '<!-- Desktop sections below -->',
    'endif': isMobileDevice ? '' : '<!-- End desktop sections -->'
  };
}

export function simplifyForMobile(content) {
  if (!isMobile()) return content;
  
  // Remove desktop-only sections marked with {{if-desktop}}
  let simplified = content.replace(/\{\{if-desktop\}\}[\s\S]*?\{\{endif\}\}/g, '');
  
  // Keep only essential properties for mobile
  simplified = simplified.replace(/(id:: {{id}})\s*(type:: {{note-type}}).*/s, '$1\n$2');
  
  // Remove optional sections for mobile to reduce typing
  simplified = simplified
    .replace(/## To Develop\s*- \[ \].*\n*/g, '')
    .replace(/## Raw Capture\s*{{raw-thought}}/g, '')
    .replace(/## References\s*{{references}}/g, '')
    .replace(/## Questions\s*{{questions}}/g, '')
    .replace(/## Connections\s*- \[\[ \]\].*\n*/g, '');
  
  return simplified;
}

export function getContextOptions() {
  return [
    'quick-capture',
    'reading',
    'meeting',
    'walking',
    'research',
    'idea',
    'project',
    'personal'
  ];
}

export function getContextDropdown() {
  const options = getContextOptions();
  return `{{select: ${options.join(' | ')}}}`;
}