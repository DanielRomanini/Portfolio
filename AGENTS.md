<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->


# dromanini.dev — Personal Website

Personal portfolio site for Daniel Romanini de Barros, a CS student at UCF who is building toward software engineering internships. The site should show who I am, what I've built, and how to reach me, and it should be something I'm proud to put on a resume.

## Stack

- Next.js (App Router, no `src/` directory), React, TypeScript
- Tailwind CSS for all styling (no separate CSS files unless there's a real reason)
- ESLint (Next.js defaults)
- Hosted on Vercel; custom domain `dromanini.dev` (registered on GoDaddy, not connected yet)

## Environment

- Windows, VS Code, PowerShell terminal
- Project lives at `C:\Users\Daniel\dev\my-site` (kept out of OneDrive on purpose)

## Commands

- `npm run dev` starts the dev server at http://localhost:3000
- `npm run build` creates a production build (run before pushing to catch errors Vercel would hit)
- `npm run lint` runs ESLint

## Conventions

- Use Server Components by default; add `"use client"` only when a component needs state, effects, or browser APIs.
- Use `next/link` for internal links and `next/image` for images.
- Set page titles and descriptions with the Metadata API in `layout.tsx` / `page.tsx`.
- Keep components small and in `app/components/`; give each one a single job.
- Mobile-first responsive layouts. Check every change at phone width.
- Accessible by default: semantic HTML, alt text on images, visible focus states, good color contrast.
- Keep dependencies minimal. Ask before adding a new package.
- Never commit secrets or `.env` files.
- Don't run `npm audit fix --force`.

## How to work with me

- I'm learning this stack as I build. When you write or change code, briefly explain what it does and why, especially anything Next.js-specific (routing, server vs. client components, etc.).
- Make focused changes. Don't rewrite files or restructure the project unless I ask.
- If there are a few reasonable ways to do something, give me the options and a recommendation instead of silently picking one.
- When I'm debugging, help me understand the cause, not just the fix.
- Update `notes.txt` and `connections.txt` only for important information: what was built, why, and how it works (new files, components and concepts, and how files connect). Skip content and status details, like which clubs are listed or what is still a placeholder. Both files are gitignored, for my own reference.

## Site plan

<!-- Fill this in as it takes shape -->
- Sections: Home (About) / ExtraCurriculars / Resume / Experience
