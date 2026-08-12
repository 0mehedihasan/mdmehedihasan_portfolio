# Md. Mehedi Hasan Portfolio

Academic and research portfolio for Md. Mehedi Hasan, built with TanStack Start, React, TypeScript, and Tailwind CSS.

## Project Overview

The site presents Md. Mehedi Hasan's academic profile, research interests, publications, projects, experience, activities, skills, awards, and CV. It uses a secure server-side GitHub-backed content layer for the admin CMS and a public portfolio focused on research and professional presentation.

## Technology Stack

- TanStack Start
- TanStack Router
- React 19
- TypeScript
- Tailwind CSS 4
- GitHub Contents API
- Vercel-compatible deployment

## Local Development

Install dependencies and start the development server:

```sh
npm install
npm run dev
```

## Environment Variables

Server-side variables used by the CMS and admin session handling:

- `GITHUB_TOKEN`
- `GITHUB_OWNER=0mehedihasan`
- `GITHUB_REPO=mdmehedihasan_portfolio`
- `GITHUB_BRANCH=main`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`
- `SESSION_SECRET`

Create a local `.env.local` file for development. The repository ignores common env files.

## GitHub CMS Architecture

Published content is stored in GitHub and managed through server-side API functions. The browser talks to internal server actions, which call the GitHub Contents API with a server-only token. No published content is stored in localStorage or a database.

## Admin CMS

The admin area supports secure sign-in, protected routes, content editing, previewing, publishing, updating, deleting, and duplicating Markdown-based content.

## Markdown Content Structure

Content is organized by type under `content/`, with Markdown files grouped into folders such as publications, projects, conferences, extracurricular activities, certifications, and awards.

## Vercel Deployment

The public site is deployed from GitHub to Vercel. Admin publishing commits content back to the repository, which triggers a fresh deployment automatically.

## Security Notes

- The GitHub token is only read server-side.
- Env files are ignored locally.
- Admin routes are protected by authenticated sessions.
- Published content does not use browser storage.
