# Portfolio Website Template

![Portfolio Website Template screenshot](https://myimgs.org/storage/images/22571/Screenshot%202026-07-23%20at%204.png)

A clean, config-driven developer portfolio built with Next.js 16, React 19, and Tailwind CSS 4.

The goal is simple: edit one portfolio config file, ship a polished personal site, and avoid rewriting components every time your work history, projects, or links change.

## Features

- Config-first content in `config/portfolio.ts`
- Responsive single-page portfolio layout
- Light and dark theme toggle with local preference persistence
- Rich bio formatting with inline emphasis
- Social links that hide automatically when left blank
- GitHub contribution calendar with theme-aware colors
- Expandable tech stack categories with icon chips
- Grouped experience timeline with expandable role details
- Project list with live and GitHub links
- Metadata generated from your portfolio content

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- lucide-react for UI icons
- simple-icons for technology badges
- react-github-calendar for GitHub activity
- pnpm for package management

## Requirements

- Node.js 20.9 or newer
- pnpm

## Quick Start

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open the local URL printed in your terminal. Next usually starts on `http://localhost:3000`, but it may choose another port if 3000 is already in use.

Build for production:

```bash
pnpm build
```

Start the production server:

```bash
pnpm start
```

## Customization

Most edits happen in [config/portfolio.ts](config/portfolio.ts).

### Identity

Update your name:

```ts
name: "Your Name",
```

This is used in the header, footer, and page metadata.

### Bio

Write your bio as an array of paragraphs:

```ts
bio: [
  "I'm a **software engineer** who builds products with **purpose**.",
  "Outside work, I like [[music]], design, and learning new tools.",
],
```

Formatting supported in bio text:

- `**text**` renders as bold emphasis.
- `[[text]]` renders with wider letter spacing.

### Social Links

Set any social URL to an empty string to hide that button:

```ts
social: {
  twitter: "https://twitter.com/yourusername",
  github: "https://github.com/yourusername",
  resume: "",
  discord: "",
  linkedin: "https://linkedin.com/in/yourusername",
},
```

### GitHub Graph

Set your GitHub username to show the contribution calendar:

```ts
githubUsername: "yourusername",
```

Leave it blank, or keep the placeholder, to show the setup prompt instead.

### Tech Stack

Use double braces in `techStackProse` to turn tool names into inline chips:

```ts
techStackProse:
  "I build with {{Next.js}}, {{TypeScript}}, {{Tailwind CSS}}, and {{Postgres}}.",
```

Expanded tech sections are controlled by `techStackCategories`.

Icons are matched from [lib/tech-icons.ts](lib/tech-icons.ts). Add aliases there if a tool does not render with the icon you expect.

### Experience

Experience is grouped by company. Each company can contain multiple roles:

```ts
experience: [
  {
    company: "Company Name",
    photo: "/companies/company.png",
    isCurrent: true,
    roles: [
      {
        title: "Software Engineer",
        type: "Full-Time",
        location: "Remote",
        startDate: "Mar 2025",
        endDate: "Present",
        bullets: ["Built and shipped production features."],
        tech: ["Next.js", "TypeScript", "Postgres"],
      },
    ],
  },
],
```

Set `photo` to an image path in `public/`, or leave it blank to use the company initial.

### Projects

Projects support title, tagline, tech chips, and optional links:

```ts
projects: [
  {
    title: "Project Name",
    tagline: "A short, specific line about what it does",
    tech: ["Next.js", "TypeScript", "NeonDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
  },
],
```

Leave `liveUrl` or `githubUrl` blank to hide that button.

## Project Structure

```txt
app/
  layout.tsx        Root layout, font setup, metadata, theme boot script
  page.tsx          Home page composition
  globals.css       Global Tailwind styles
components/
  Bio.tsx           Bio, social links, and GitHub graph slot
  Experience.tsx    Timeline and expand/collapse controls
  Footer.tsx        Footer links and copyright
  GitHubGraph.tsx   GitHub contribution calendar
  PageHeader.tsx    Name and theme toggle
  Projects.tsx      Project list
  TechStack.tsx     Tech prose and expanded tool categories
  ThemeToggle.tsx   Light/dark mode control
config/
  portfolio.ts      Main content configuration
lib/
  tech-icons.ts     Tool icon registry and aliases
```

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the local development server with Turbopack |
| `pnpm build` | Build the site for production |
| `pnpm start` | Run the production server |
| `pnpm lint` | Run ESLint |

## Deployment

The easiest deployment target is Vercel:

1. Push the repository to GitHub.
2. Import it into Vercel.
3. Keep the default Next.js settings.
4. Deploy.

Other platforms that support Next.js can work too, as long as they use Node.js 20.9 or newer and run `pnpm build`.

## Notes For Agent-Assisted Edits

This project includes [AGENTS.md](AGENTS.md). It asks coding agents to read the local Next.js documentation in `node_modules/next/dist/docs/` before making framework-related changes, because this project uses a newer Next.js version with breaking changes.
