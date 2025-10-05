# Import Statement Order Convention
1. Built-in Imports
   - Node.js Built-ins: (fs, path, os, etc.)
2. Core Imports
   - Framework/Library Core: The most essential package for your environment (e.g., react must come first in a React file)
3. External (Third-Party) Imports
4. Internal Imports
   - Absolute Paths/Aliases: Imports referencing custom modules via configured aliases (@/, ~/, etc.).
5. Relative Imports
   - Parent/Up-Level Imports: (../, ../../)
   - Sibling/Current-Level Imports: (./, ./components/, etc.)
6. Style Imports
   - Global Styles/CSS: Files with no bindings (no default or named exports).
   - Stylesheets for the current file.
7. Asset Imports
   - Images / Data

Base Libraries:
- https://www.shadcn.io/ui/ (more preferably styling)
- https://ui.shadcn.com/docs/components (this is the base of shadcn.io)
- https://motion.dev/ (animations)

Themeing
- Guide: https://ui.shadcn.com/docs/dark-mode/vite
- https://navnote.github.io/rangeen/ (generate basics) 
- https://tweakcn.com/editor/theme?tab=ai (tweak to look better)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## ESLint
npx eslint .

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

Tailwind css notes
You can determine if a colon (:) is part of a class name or a state (a variant) by looking at its position and context.
.hover\:bg-accent:hover
hover:bg-accent is the classname as the colon is escaped
The second hover is the "state" because the colon is not escaped