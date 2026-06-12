# Citingale Modernization Design

Date: 2026-06-12
Branch: `codex/upgrade-citingale-com`

## Goal

Modernize `citingale.com` into a minimal, white/gray, product-led website with restrained dynamic elements. The site should showcase the Citingale product line, link to the active Medium blog, expose a lightweight updates page, and keep the existing research credibility and FAIR positioning.

## Selected Direction

Use the refined Product Constellation concept.

The homepage headline is:

> AI-Enhanced Intelligence You can Inspect

The visual language should stay close to the current white/gray Citingale site, with sharper typography, cleaner hierarchy, and dynamic elements inspired by Lucien's kinetic precision and Common Vow's restraint.

## Information Architecture

Primary navigation:

- Products
- Blog
- Updates
- About
- Contact

Primary pages/routes:

- `/`: modern homepage with hero, animated evidence signal, product line, latest Medium posts, latest updates, and footer.
- `/updates`: static or data-driven updates page with recent product/company notes.

External destinations:

- Blog links go to Medium posts from `https://medium.com/@AiDocTakes`.
- Product rows should be data-driven so real product URLs can be added without changing layout code.

## Homepage Content

Hero copy:

> Citingale turns literature review, meta-analysis, and evidence synthesis into a transparent research workflow. Every product is built around one promise: faster intelligence without losing the source, the method, or the trail of reasoning.

Proof points:

- FAIR: Factual, accessible, inclusive, reproducible research workflows.
- Traceable: Outputs stay connected to citations, tables, and source passages.
- Human-led: AI augments reviewers instead of replacing scientific judgment.

Product rows:

- Citingale Review Studio: Plan and execute systematic literature reviews with protocol-aware screening, source tracking, extraction support, and reproducible evidence tables.
- Citingale Synthesis: Move from extracted evidence to narrative synthesis, structured summaries, evidence maps, and meta-analysis-ready outputs.
- Citingale Methods Library: Reusable templates for review protocols, FAIR documentation, gap analysis, situation analysis, and evidence-based recommendations.
- Citingale Intelligence Briefs: Short, inspectable research briefs that connect claims to citations, assumptions, and source-level reasoning for decision makers.

## Dynamic Elements

Use dynamic elements sparingly:

- Animated scanner line inside the evidence graph.
- Rotating evidence orbit lines.
- Pulsing live-signal dot.
- Horizontal workflow ticker.
- Hover movement and arrow state on product rows.
- Smooth reveal or opacity transitions for sections, respecting `prefers-reduced-motion`.

Avoid decorative clutter, gradient blobs, oversized cards, or fake dashboard noise.

## Medium Blog Automation

The blog section should refresh daily from Medium profile `@AiDocTakes`.

Preferred implementation:

- Add a Node script, `scripts/sync-medium.mjs`.
- Fetch `https://medium.com/feed/@AiDocTakes`.
- Parse RSS XML.
- Normalize the latest posts into `src/data/medium-posts.json`.
- Keep the last successful JSON if Medium is unavailable, so builds do not break.
- Render the homepage blog section from `src/data/medium-posts.json`.

Automation:

- Use GitHub Actions cron once daily.
- Workflow steps: checkout, install dependencies, run Medium sync, build static site, deploy to Cloudflare Pages.
- Keep this as build-time data, not client-side scraping, because the repo uses static export.

## Updates Page

Add a lightweight `/updates` route backed by local data. It should include:

- Date
- Title
- Category
- Short summary

The homepage should show the latest two or three updates and link to `/updates`.

## Technical Shape

Current stack:

- Next.js app router
- Static export via `next.config.js`
- Tailwind CSS
- Existing logo assets in `public/`

Implementation should:

- Keep the site static-export compatible.
- Use data arrays or JSON files for products, updates, and Medium posts.
- Preserve the real Citingale logo.
- Avoid adding a database or server runtime for this phase.
- Add only dependencies required for RSS parsing if native parsing is not enough.

## Testing And Verification

Run:

- `npm run build`

Visual verification:

- Use the in-app browser on the local Next dev server.
- Check desktop and mobile viewport.
- Confirm hero, logo, animations, product rows, blog feed, updates preview, `/updates`, and footer render correctly.
- Confirm motion is not required when `prefers-reduced-motion` is enabled.

## Implementation Assumptions

The first implementation can use the draft product names and copy above. Product rows should be represented as data objects with a `href` field. Until real product destinations are provided, product rows should link to `mailto:contact@citingale.com` with a product-specific subject so every visible product action is valid.
