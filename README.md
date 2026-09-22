# Perspective

A responsive, interactive website with general-knowledge questions about social media’s positives, negatives, and responsible use. Built with vanilla JavaScript and Vite.

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

- Twelve general-knowledge questions: four multiple-choice, four select-all-that-apply, and four true/false
- Topic filters, question and format search, and progressive loading
- Native radio buttons for single-answer questions and checkboxes for select-all questions
- Explicit answer submission with validation, correct-answer feedback, and explanations
- A full 12-question quiz with progress, back navigation, scoring, answer review, and retakes
- Select-all grading requires exactly the correct set (no missing options or extras); each question is worth one point
- Bookmarks and latest checked answers saved locally in the browser, with review and individual retries
- External digital well-being, safety, and media literacy resources
- Responsive layouts, keyboard-accessible dialogs, and reduced-motion support

No personal questions, free-text reflections, account, or backend are required. Bookmarks and checked answers remain in the current browser. They do not sync across devices; clearing site data removes them. An in-progress full quiz does not resume after a reload, but checked answers remain accessible through the question cards. Retaking the quiz starts a fresh score. Storage failures fall back to the current visit with a notice.

Quiz storage uses versioned keys separate from the former reflection feature. Old reflection data is not read, migrated, or displayed. Google Fonts supplies the typography, with system-font fallbacks.

Tests use Node’s test runner and JSDOM to check question types, grading, validation, feedback, navigation, persistence, storage failure handling, and quiz results. These are DOM interaction tests, not visual browser tests.
