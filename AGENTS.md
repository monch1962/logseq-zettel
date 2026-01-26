# AGENTS.md - Development Guidelines for Logseq Zettel

## Project Overview
This is a Logseq plugin project for Zettelkasten functionality. The codebase follows modern JavaScript/TypeScript practices with a focus on Logseq plugin development.

## Build System

### Development Commands
```bash
# Install dependencies
npm install

# Development mode with hot reload
npm run dev

# Build for production
npm run build

# Watch mode for development
npm run watch
```

### Testing Commands
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run a specific test file
npm test -- --testPathPattern=filename.test.js

# Run tests with coverage
npm run test:coverage

# Run a single test by name
npm test -- -t "test name"
```

### Linting & Formatting
```bash
# Run linter
npm run lint

# Fix linting issues automatically
npm run lint:fix

# Format code
npm run format

# Type checking (if TypeScript)
npm run typecheck
```

## Code Style Guidelines

### File Structure
- Source code in `src/` directory
- Tests in `__tests__/` or `test/` directories adjacent to source files
- Configuration files in root directory
- Public assets in `public/` or `assets/` directories

### Imports
```javascript
// External dependencies first
import React from 'react';
import { useEffect, useState } from 'react';

// Internal modules grouped
import { helperFunction } from './utils';
import { CONSTANTS } from './constants';
import styles from './styles.module.css';

// Type imports (if TypeScript)
import type { PluginSettings } from './types';
```

### Naming Conventions
- **Variables & Functions**: `camelCase`
- **Classes & Types**: `PascalCase`
- **Constants**: `UPPER_SNAKE_CASE`
- **Files**: `kebab-case` for component files, `camelCase` for utilities
- **Components**: `PascalCase` matching file name

### TypeScript Guidelines
```typescript
// Explicit types for function parameters and return values
function processNote(note: Note): ProcessedNote {
  // Implementation
}

// Use interfaces for object shapes
interface PluginSettings {
  enabled: boolean;
  theme: 'light' | 'dark';
}

// Prefer type aliases for unions and complex types
type NoteStatus = 'draft' | 'published' | 'archived';

// Use generics for reusable utilities
function createRegistry<T extends { id: string }>(): Registry<T> {
  // Implementation
}
```

### Error Handling
```javascript
// Use try-catch for async operations
try {
  const data = await fetchData();
  return process(data);
} catch (error) {
  console.error('Failed to fetch data:', error);
  throw new Error('Data fetch failed', { cause: error });
}

// Validate inputs early
function validateInput(input) {
  if (!input || typeof input !== 'string') {
    throw new TypeError('Input must be a non-empty string');
  }
}

// Use error boundaries in React components
class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    logErrorToService(error, errorInfo);
  }
}
```

### Logseq Plugin Specifics

#### API Usage
```javascript
// Access Logseq API
const { api } = window.logseq;

// Use settings API
const settings = await api.get_settings();

// Register commands
api.register_command('zettel-create', 'Create Zettel', createZettel);

// Subscribe to events
api.on('page:created', handlePageCreated);
```

#### UI Components
- Use Logseq's UI components when available
- Follow Logseq's design patterns
- Ensure dark/light theme compatibility
- Keep UI responsive and accessible

### Testing Patterns

#### Unit Tests
```javascript
describe('Zettel utilities', () => {
  test('creates zettel ID correctly', () => {
    const id = createZettelId('Test Note');
    expect(id).toMatch(/^\d{14}-[a-z0-9]+$/);
  });

  test('handles empty title', () => {
    expect(() => createZettelId('')).toThrow();
  });
});
```

#### Integration Tests
```javascript
describe('Plugin integration', () => {
  beforeEach(() => {
    // Mock Logseq API
    window.logseq = mockLogseqAPI();
  });

  test('registers commands on load', async () => {
    await loadPlugin();
    expect(window.logseq.api.register_command).toHaveBeenCalled();
  });
});
```

### Git & Commit Guidelines
- Commit messages follow conventional commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`
- Keep commits focused and atomic
- Update documentation when changing APIs
- Include tests for new features

### Performance Considerations
- Minimize DOM manipulations
- Use memoization for expensive computations
- Implement lazy loading for large datasets
- Optimize bundle size for plugin distribution

### Security Best Practices
- Sanitize user input before processing
- Validate data from external sources
- Use secure storage for sensitive data
- Follow Logseq's security guidelines for plugins

## Development Workflow

1. **Setup**: Run `npm install` to install dependencies
2. **Development**: Use `npm run dev` for hot-reload development
3. **Testing**: Run tests before committing changes
4. **Linting**: Ensure code passes linting rules
5. **Building**: Use `npm run build` for production builds
6. **Documentation**: Update README.md for user-facing changes

## Troubleshooting

### Common Issues
- **Plugin not loading**: Check browser console for errors
- **API not available**: Ensure Logseq is fully loaded before accessing API
- **Build failures**: Clear node_modules and reinstall dependencies
- **Type errors**: Run `npm run typecheck` to identify issues

### Debugging
- Use `console.log` strategically (remove before committing)
- Enable Logseq developer tools
- Check network requests in browser dev tools
- Review plugin logs in Logseq settings