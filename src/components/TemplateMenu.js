import { isMobile } from '../utils.js';
import { getTemplateDisplayName } from '../templates.js';

export function createTemplateMenu() {
  if (!isMobile()) return null;
  
  const menu = document.createElement('div');
  menu.className = 'zettel-mobile-menu';
  menu.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    gap: 8px;
  `;
  
  const templateTypes = ['fleeting', 'literature', 'permanent'];
  
  templateTypes.forEach(noteType => {
    const button = document.createElement('button');
    button.className = 'zettel-template-button';
    button.textContent = getTemplateDisplayName(noteType);
    button.style.cssText = `
      padding: 12px 16px;
      background: #4CAF50;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
      transition: transform 0.2s, background 0.2s;
    `;
    
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-2px)';
      button.style.background = '#45a049';
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateY(0)';
      button.style.background = '#4CAF50';
    });
    
    button.addEventListener('touchstart', () => {
      button.style.transform = 'scale(0.95)';
      button.style.background = '#3d8b40';
    });
    
    button.addEventListener('touchend', () => {
      button.style.transform = 'scale(1)';
      button.style.background = '#4CAF50';
    });
    
    button.addEventListener('click', async () => {
      // Import and call createZettelNote function
      const { createZettelNote } = await import('../main.js');
      await createZettelNote(noteType);
    });
    
    menu.appendChild(button);
  });
  
  // Add close button
  const closeButton = document.createElement('button');
  closeButton.textContent = '×';
  closeButton.style.cssText = `
    position: absolute;
    top: -10px;
    right: -10px;
    width: 24px;
    height: 24px;
    background: #f44336;
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  
  closeButton.addEventListener('click', () => {
    menu.remove();
  });
  
  menu.appendChild(closeButton);
  
  // Add toggle button to show/hide menu
  const toggleButton = document.createElement('button');
  toggleButton.textContent = 'Z';
  toggleButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 56px;
    height: 56px;
    background: #2196F3;
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  
  let menuVisible = false;
  
  toggleButton.addEventListener('click', () => {
    if (menuVisible) {
      menu.remove();
    } else {
      document.body.appendChild(menu);
    }
    menuVisible = !menuVisible;
  });
  
  document.body.appendChild(toggleButton);
  
  return { menu, toggleButton };
}

export function registerMobileTemplateMenu() {
  if (!isMobile()) return;
  
  // Add styles for mobile menu
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 768px) {
      .zettel-template-button {
        min-width: 140px;
      }
      
      .zettel-template-button:active {
        transform: scale(0.95) !important;
      }
    }
  `;
  document.head.appendChild(style);
  
  // Create and register the menu
  createTemplateMenu();
}