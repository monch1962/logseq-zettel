export function generateZettelId() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
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
  
  return {
    'id': zettelId,
    'date': getCurrentDate(),
    'time': getCurrentTime(),
    'timestamp': getISOTimestamp(),
    'context': context,
    'note-type': noteType,
    'status': 'draft',
    'capture-method': 'quick-capture',
    'capture-device': isMobile() ? 'mobile' : 'desktop',
    'year': now.getFullYear().toString(),
    'month': String(now.getMonth() + 1).padStart(2, '0'),
    'day': String(now.getDate()).padStart(2, '0'),
    'weekday': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][now.getDay()]
  };
}

export function simplifyForMobile(content) {
  if (!isMobile()) return content;
  
  // Remove some optional sections for mobile to reduce typing
  return content
    .replace(/## To Develop\s*- \[ \].*\n*/g, '')
    .replace(/## Raw Capture\s*{{raw-thought}}/g, '')
    .replace(/## References\s*{{references}}/g, '')
    .replace(/## Questions\s*{{questions}}/g, '');
}