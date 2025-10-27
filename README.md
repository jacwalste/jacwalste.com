# jacwalste.com

A retro forest-cabin terminal aesthetic personal developer site for AI engineering projects and build logs.

## Overview

This is my hacker/AI-engineer alias site — a complement to my main portfolio at [jackstepanek.com](https://jackstepanek.com). It focuses on engineering experiments, AI projects, and dev logs in a raw, terminal-like format.

## Tech Stack

- **Next.js 16** with App Router
- **TailwindCSS v4** for styling
- **MDX** for blog/changelog entries
- **TypeScript** for type safety
- Deployed on **Vercel**

## Design Philosophy

This site embraces a **retro 70's forest-cabin terminal** aesthetic:

- Deep forest green color palette
- Muted amber/cream text
- DM Serif Display + JetBrains Mono fonts
- CRT scan-line and flicker effects
- Grainy analog texture
- Terminal-style interactions

## Features

- **Home**: Rotating terminal-style project snippets
- **Projects**: Grid of current and past AI/engineering projects
- **Changelog**: Commit-style blog entries with MDX support
- **About**: Personal bio with ASCII art
- **Contact**: Interactive CLI-style terminal interface

## Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`

## Building

```bash
npm run build
npm start
```

## Adding Changelog Entries

Create a new `.mdx` file in `src/content/changelog/`:

```mdx
export const title = "feat: your commit message here"
export const date = "2025-10-27"

Your markdown content here...
```

## Commit Convention

- `feat:` for new features
- `fix:` for bug fixes
- `style:` for visual/polish tweaks
- `content:` for text/blog updates
- `chore:` for config/infra changes

Commit messages should be at least 15 words and describe the specific improvement.

## License

MIT
