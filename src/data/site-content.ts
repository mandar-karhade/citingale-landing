export const products = [
  {
    number: '01',
    name: 'Citingale Review Studio',
    description:
      'Plan and execute systematic literature reviews with protocol-aware screening, source tracking, extraction support, and reproducible evidence tables.',
    tag: 'Primary platform',
    href: 'mailto:contact@citingale.com?subject=Citingale%20Review%20Studio',
  },
  {
    number: '02',
    name: 'Citingale Synthesis',
    description:
      'Move from extracted evidence to narrative synthesis, structured summaries, evidence maps, and meta-analysis-ready outputs.',
    tag: 'Evidence engine',
    href: 'mailto:contact@citingale.com?subject=Citingale%20Synthesis',
  },
  {
    number: '03',
    name: 'Citingale Methods Library',
    description:
      'Reusable templates for review protocols, FAIR documentation, gap analysis, situation analysis, and evidence-based recommendations.',
    tag: 'Methods hub',
    href: 'mailto:contact@citingale.com?subject=Citingale%20Methods%20Library',
  },
  {
    number: '04',
    name: 'Citingale Intelligence Briefs',
    description:
      'Short, inspectable research briefs that connect claims to citations, assumptions, and source-level reasoning for decision makers.',
    tag: 'Briefing layer',
    href: 'mailto:contact@citingale.com?subject=Citingale%20Intelligence%20Briefs',
  },
] as const;

export const proofPoints = [
  {
    label: 'FAIR',
    description: 'Factual, accessible, inclusive, reproducible research workflows.',
  },
  {
    label: 'Traceable',
    description: 'Outputs stay connected to citations, tables, and source passages.',
  },
  {
    label: 'Human-led',
    description: 'AI augments reviewers instead of replacing scientific judgment.',
  },
] as const;

export const updates = [
  {
    date: 'Jun 2026',
    title: 'Daily Medium sync added to the roadmap',
    category: 'Automation',
    subtitle:
      'Citingale will refresh the latest @AiDocTakes articles at build time through a scheduled GitHub Actions workflow.',
  },
  {
    date: 'Jun 2026',
    title: 'Product constellation direction selected',
    category: 'Design',
    subtitle:
      'The upgraded homepage will foreground product links, inspectable intelligence, and a restrained white-gray visual system.',
  },
  {
    date: 'May 2026',
    title: 'Inspectable intelligence as a design principle',
    category: 'Product',
    subtitle:
      'The site direction centers traceability, reproducibility, and researcher control instead of opaque AI output.',
  },
] as const;
