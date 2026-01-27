# Tu-paso-a-paso

A Jekyll-based Spanish learning website with dark/light theme support.

## Features

- 📚 **Basics**: Spanish alphabet, verbs, adjectives, greetings, and directions
- 📖 **Grammar**: All major Spanish tenses with consistent structure (usos, ejemplos, verbos irregulares), plus comparatives, pronouns, and direct/indirect objects
- 💬 **Vocabulary**: School words, human body, animals, nationalities, colors, calendar, time expressions, and directions
- 🌓 Dark/Light theme toggle
- 📱 Responsive design
- 🎨 Clean, simple interface with blue accent colors

## Prerequisites

- Ruby 3.2.9 (or compatible version)
- Jekyll ~> 4.4
- Bundler

## Installation

1. Install dependencies:
```bash
bundle install
```

2. Build the site:
```bash
bundle exec jekyll build
```

3. Serve locally:
```bash
bundle exec jekyll serve
```

4. Visit `http://localhost:4000` in your browser

## Project Structure

```
.
├── _config.yml           # Jekyll configuration
├── _includes/            # Reusable components (header, footer)
├── _layouts/             # Page layouts (default, post)
├── _posts/               # Blog posts organized by category
├── assets/
│   ├── css/
│   │   └── style.css    # Styles with CSS variables for theming
│   └── js/
│       └── theme.js     # Dark/light theme toggle
├── basics/              # Basics category page
├── grammar/             # Grammar category page
├── vocabulary/          # Vocabulary category page
└── index.html           # Homepage
```

## Categories

### Basics
- Spanish Alphabet
- Verbs - Plural Changes
- Adjectives in Spanish
- Greetings and Saying Your Name
- Asking for Directions

### Grammar
- Presente Simple (Present Simple)
- Pretérito Indefinido (Preterite)
- Pretérito Imperfecto (Imperfect)
- Futuro Simple (Simple Future)
- Condicional Simple (Conditional)
- Presente Perfecto (Present Perfect)
- Comparatives
- Direct and Indirect Objects
- Pronouns

### Vocabulary
- School Vocabulary
- Human Body Vocabulary
- Animals Vocabulary
- Nationalities
- Colors
- Calendar (Days, Months, Seasons)
- Time (Clock and Time Expressions)
- Directions Vocabulary

## Theme Toggle

The site supports both dark and light themes. Users can toggle between themes using the button in the navigation bar. The preference is saved in localStorage.

## Customization

### Colors
Edit the CSS variables in `assets/css/style.css`:
- Light theme: `:root { ... }`
- Dark theme: `[data-theme="dark"] { ... }`

### Adding Posts
Create a new markdown file in `_posts/` with the format:
```
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD
categories: basics|grammar|vocabulary
---

Your content here...
```

## License

This project is for educational purposes.
