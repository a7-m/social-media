# Perspective

A responsive, interactive website about the positives and challenges of social media, built with vanilla JavaScript and Vite.

## Run locally

```sh
npm install
npm run dev
```

## Verify

```sh
npm test
npm run build
```

## Features

- Twelve reflection questions across connection, challenges, and healthy habits
- Category filters, question search, and progressive loading
- Bookmarks and editable personal reflections saved in local browser storage
- Four-question check-in with personalized, non-diagnostic suggestions
- External digital well-being, safety, and media literacy resources
- Responsive layouts, keyboard-accessible dialogs, and reduced-motion support

Reflections stay in the current browser. They do not sync across devices, and clearing site data removes them. No account or backend is required. Google Fonts supplies the typography, with local system-font fallbacks.

Tests use Node’s test runner and JSDOM to check filters, search, persistence, safe rendering, check-in paths, and navigation. They are DOM interaction tests, not visual browser tests.
