# Getting Started

Everything you need to go from zero to a running project. Work through the checklist, then scaffold your app.

---

## Prerequisites Checklist

### On your machine

- [ ] **Node.js 20+** — [nodejs.org](https://nodejs.org). Run `node --version` to check. LTS is fine.
- [ ] **Git** — [git-scm.com](https://git-scm.com). Most Macs have it already (`git --version`).
- [ ] **A code editor** — [VS Code](https://code.visualstudio.com) is the most common. Any editor works.
- [ ] **A package manager** — `npm` ships with Node.js so you already have one. If you prefer `pnpm`, install it with `npm install -g pnpm`. Either works — commands in this guide show both.

### Accounts (all have free tiers)

- [ ] **GitHub** — [github.com](https://github.com) — Version control and collaboration. You'll push your code here.
- [ ] **Vercel** — [vercel.com](https://vercel.com) — Deploys your Next.js site automatically when you push to GitHub. The free Hobby plan is plenty.
- [ ] **Cloudflare** — [cloudflare.com](https://cloudflare.com) — We use Cloudflare R2 to host images at `assets.canidrinkmilk.com`. The free tier includes 10 GB of storage. You could also use any image host or CDN you like (Vercel Blob, AWS S3, even a `/public` folder to start).

### An AI coding tool

This workshop uses an AI coding assistant to build the site. You need at least one:

| Tool | Type | Cost | Notes |
|------|------|------|-------|
| **Claude Code** | CLI / Desktop / Web | Paid (Pro or Max plan) | What we use in this workshop. Terminal-based, works with any editor. |
| **Cursor** | IDE (VS Code fork) | Free tier available | Built-in AI chat and autocomplete. Good starting option. |
| **GitHub Copilot** | IDE extension | Free for students | Autocomplete and chat inside VS Code. |
| **Lovable** | Web app | Free tier available | Generates full apps from prompts in the browser. No local setup needed. |
| **Bolt** | Web app | Free tier available | Similar to Lovable — browser-based app generation. |
| **OpenAI Codex CLI** | CLI | Paid (OpenAI API) | Terminal-based, similar workflow to Claude Code. |

Pick whichever you have access to. The spec documents in `/docs` are written to work with any of these tools — they describe *what* to build, not *how* to prompt a specific tool.

---

## Create the Project

### Option A: Using pnpm (recommended)

```bash
pnpx create-next-app@latest can-i-drink-milk --use-pnpm --no-tailwind
```

### Option B: Using npm

```bash
npx create-next-app@latest can-i-drink-milk --no-tailwind
```

### What the scaffolder asks

The `create-next-app` wizard will prompt you with a few questions. Here's what to pick:

| Question | Answer |
|----------|--------|
| Would you like to use TypeScript? | **Yes** |
| Would you like to use ESLint? | **Yes** |
| Would you like to use Tailwind CSS? | **No** (we use CSS Modules) |
| Would you like your code inside a `src/` directory? | **No** |
| Would you like to use App Router? | **Yes** |
| Would you like to use Turbopack for `next dev`? | **Yes** (faster dev server) |
| Would you like to customize the import alias? | **No** (keep the default `@/*`) |

> **Note on Tailwind:** This project uses CSS Modules (`.module.css` files) instead of Tailwind. This is a workshop choice — CSS Modules teach you more about how CSS actually works, and the scoping is automatic. If you strongly prefer Tailwind and know it well, you can adapt the specs to use it instead.

### After scaffolding

```bash
cd can-i-drink-milk
```

Open it in your editor and check that the dev server starts:

```bash
# pnpm
pnpm dev

# npm
npm run dev
```

Visit `http://localhost:3000`. You should see the default Next.js welcome page.

---

## Install Dependencies

We use two additional packages beyond what `create-next-app` provides:

```bash
# pnpm
pnpm add motion lucide-react

# npm
npm install motion lucide-react
```

| Package | What it does |
|---------|-------------|
| `motion` | Animation library (Framer Motion). Used for the hero image columns and transitions. |
| `lucide-react` | Icon library. We use the `ChevronDown` icon in the hero scroll indicator. |

---

## Configure Remote Images

Our images are hosted on a CDN. Next.js needs to know it's OK to load them. Open `next.config.ts` and add the remote pattern:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.canidrinkmilk.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
```

> If you're hosting images elsewhere (your own CDN, Vercel Blob, etc.), update the `hostname` to match. If you put images in the `/public` folder instead, you don't need this config at all.

---

## Clean Up the Scaffold

The default `create-next-app` template includes boilerplate we don't need. Clean it up:

1. **`app/page.tsx`** — Delete all the default content. Replace with a simple placeholder:

```tsx
export default function Home() {
  return <h1>Can I Drink Milk?</h1>;
}
```

2. **`app/page.module.css`** — Delete all the default styles (we'll write our own).

3. **`app/globals.css`** — Delete the default styles. This is where our design tokens will go (see the project spec for the full set of CSS custom properties).

4. **`app/layout.tsx`** — Keep the structure but we'll update the fonts and metadata later.

5. **`public/`** — You can delete the default SVGs (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`). We don't use them.

---

## Set Up Git and GitHub

If the scaffolder didn't already initialise a repo:

```bash
git init
git add -A
git commit -m "Initial commit from create-next-app"
```

Create a repo on GitHub and push:

```bash
git remote add origin git@github.com:YOUR_USERNAME/can-i-drink-milk.git
git branch -M main
git push -u origin main
```

---

## Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repo
3. Vercel auto-detects Next.js — accept the defaults
4. Click **Deploy**

Every push to `main` will now auto-deploy. You'll get a `.vercel.app` URL immediately, and can add a custom domain later.

---

## Project Documents

Once your project is scaffolded and running, use these docs (in the `/docs` folder) as your blueprint:

| Document | What it covers |
|----------|---------------|
| `project-spec.md` | Full project specification — tech stack, design system, file structure, both pages |
| `landing-page-design.md` | Section-by-section blueprint for the landing page — content, layout, and component names |
| `quiz-spec.md` | Complete quiz specification — all 11 questions, scoring, result bands, UX requirements |
| `image-assets.md` | Image inventory — URLs, descriptions, and suggested usage |

**How to use these with an AI coding tool:**

1. Start with `project-spec.md` — feed it to your AI tool to set up the design system (`globals.css`), layout, and fonts
2. Work through `landing-page-design.md` section by section — build one component at a time
3. Use `quiz-spec.md` to build the quiz data layer (`data/quiz.ts`) and the quiz page
4. Reference `image-assets.md` when you need image URLs

> **Tip:** Don't try to build everything in one prompt. Work section by section. Build the Hero, check it looks right, then move to StatsStrip, and so on. Iterating in small steps gives you much better results than asking for everything at once.

---

## Quick Reference

```bash
# Start dev server
pnpm dev          # or: npm run dev

# Build for production
pnpm build        # or: npm run build

# Run production build locally
pnpm start        # or: npm start

# Lint
pnpm lint         # or: npm run lint
```

Dev server runs at `http://localhost:3000` by default.
