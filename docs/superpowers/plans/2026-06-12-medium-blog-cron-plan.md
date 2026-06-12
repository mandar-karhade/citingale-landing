# Medium Blog Cron Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a daily GitHub Actions cron job that syncs latest Medium posts from `@AiDocTakes` and renders blog items as date, title, and subtitle.

**Architecture:** A Node script fetches Medium RSS, parses the latest posts, writes a stable JSON cache, and preserves the previous cache on network failure. The Next static site imports the JSON at build time and renders the homepage blog section from it. A GitHub Actions workflow runs the sync daily before building and deploying to Cloudflare Pages.

**Tech Stack:** Next.js app router, static export, Node `fetch`, Node test runner, GitHub Actions, Cloudflare Pages via Wrangler.

---

### Task 1: Medium RSS Parser And Cache

**Files:**
- Create: `scripts/sync-medium.mjs`
- Create: `scripts/sync-medium.test.mjs`
- Create: `src/data/medium-posts.json`

- [ ] **Step 1: Write failing parser tests**

```js
import assert from 'node:assert/strict';
import test from 'node:test';
import { parseMediumFeed, writePostsCache } from './sync-medium.mjs';

test('parseMediumFeed returns posts with date title subtitle and url', () => {
  const xml = `<?xml version="1.0"?>
    <rss><channel>
      <item>
        <title><![CDATA[First Article]]></title>
        <link>https://medium.com/@AiDocTakes/first-article</link>
        <pubDate>Wed, 10 Jun 2026 12:30:00 GMT</pubDate>
        <content:encoded><![CDATA[<p>First subtitle sentence. Second sentence.</p>]]></content:encoded>
      </item>
      <item>
        <title>Second Article</title>
        <link>https://medium.com/@AiDocTakes/second-article</link>
        <pubDate>Tue, 09 Jun 2026 10:00:00 GMT</pubDate>
        <description><![CDATA[Second subtitle from description.]]></description>
      </item>
    </channel></rss>`;

  const posts = parseMediumFeed(xml, { limit: 2 });

  assert.deepEqual(posts, [
    {
      date: 'Jun 10, 2026',
      title: 'First Article',
      subtitle: 'First subtitle sentence. Second sentence.',
      url: 'https://medium.com/@AiDocTakes/first-article',
      publishedAt: '2026-06-10T12:30:00.000Z',
    },
    {
      date: 'Jun 9, 2026',
      title: 'Second Article',
      subtitle: 'Second subtitle from description.',
      url: 'https://medium.com/@AiDocTakes/second-article',
      publishedAt: '2026-06-09T10:00:00.000Z',
    },
  ]);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test scripts/sync-medium.test.mjs`
Expected: FAIL because `scripts/sync-medium.mjs` does not exist yet.

- [ ] **Step 3: Implement parser and cache writer**

Create `scripts/sync-medium.mjs` with exported `parseMediumFeed`, `writePostsCache`, and CLI `syncMediumPosts` functions. Use native Node APIs only.

- [ ] **Step 4: Run parser tests**

Run: `node --test scripts/sync-medium.test.mjs`
Expected: PASS.

### Task 2: Homepage Blog Rendering

**Files:**
- Modify: `src/app/page.tsx`
- Create: `src/data/site-content.ts`

- [ ] **Step 1: Render blog data from JSON**

Import `src/data/medium-posts.json` and render blog rows with `date`, `title`, and `subtitle`. The left label must be the date, not the word `Medium`.

- [ ] **Step 2: Keep homepage static-compatible**

Use static imports and local data arrays only. Do not add client-side fetching.

### Task 3: GitHub Actions Cron

**Files:**
- Create: `.github/workflows/refresh-medium-blog.yml`

- [ ] **Step 1: Add scheduled workflow**

Create a workflow that runs daily and manually via `workflow_dispatch`.

- [ ] **Step 2: Sync, build, and deploy**

Workflow runs `npm ci`, `node scripts/sync-medium.mjs`, `npm run build`, and `npx wrangler pages deploy ./out --project-name=citingale-landing --branch=main`.

### Task 4: Verification

**Files:**
- No new files.

- [ ] **Step 1: Run unit tests**

Run: `node --test scripts/sync-medium.test.mjs`
Expected: PASS.

- [ ] **Step 2: Run production build**

Run: `npm run build`
Expected: PASS.

- [ ] **Step 3: Visual check**

Run local dev server, open the site in the in-app browser, and confirm the blog rows render as date/title/subtitle.
