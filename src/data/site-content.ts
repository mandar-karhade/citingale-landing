export const products = [
  {
    number: '01',
    name: 'Citingale VeroFAIR™',
    description:
      'A complete AI assisted research and writeup platform designed for traceable, source-grounded work that does not hallucinate.',
    tag: 'Research platform',
    href: 'mailto:contact@citingale.com?subject=Citingale%20VeroFAIR',
  },
  {
    number: '02',
    name: 'Citingale SoProLink™',
    description:
      'A domain specific information, alert, network, and social media content generation platform.',
    tag: 'soprolink.com',
    href: 'https://soprolink.com',
  },
  {
    number: '03',
    name: 'Citingale ARMS™',
    description:
      'A complete end to end Active Recall Management System for drug and device manufacturers.',
    tag: 'Life sciences',
    href: 'mailto:contact@citingale.com?subject=Citingale%20ARMS',
  },
  {
    number: '04',
    name: 'Citingale APQR',
    description:
      'An AI-enhanced continuous process validation system for regulated manufacturing workflows.',
    tag: 'Validation system',
    href: 'mailto:contact@citingale.com?subject=Citingale%20APQR',
  },
  {
    number: '05',
    name: "Physician'sFriend™",
    description:
      'A privacy first suite that simplifies day-to-day work for physicians, clinical teams, and hospital systems.',
    tag: 'Clinical workflow',
    href: "mailto:contact@citingale.com?subject=Physician'sFriend",
  },
  {
    number: '06',
    name: 'OnlyOfflineApps™',
    description:
      'A privacy first suite of Android and Apple applications developed to support health and wellness without cloud dependency.',
    tag: 'OnlyOffline.org',
    href: 'https://onlyoffline.org',
  },
  {
    number: '07',
    name: 'Semaphone™',
    description:
      'Software that lets users automate anything on Android by providing natural language instructions.',
    tag: 'Android automation',
    href: 'mailto:contact@citingale.com?subject=Semaphone',
  },
  {
    number: '08',
    name: 'Research Projects',
    description:
      'Memory Decay in Knowledge Graphs, an active research project exploring persistence and degradation in structured knowledge systems.',
    tag: 'arXiv 2604.26970',
    href: 'https://arxiv.org/abs/2604.26970',
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
    title: 'External news tracker planned',
    category: 'Updates',
    subtitle:
      'A separate tracker will publish significant news into an RSS or JSON feed that the Citingale updates page can consume later.',
  },
  {
    date: 'Jun 2026',
    title: 'Daily Medium sync added',
    category: 'Automation',
    subtitle:
      'Citingale refreshes the latest @AiDocTakes articles at build time through a scheduled GitHub Actions workflow.',
  },
  {
    date: 'Jun 2026',
    title: 'Product constellation updated',
    category: 'Product',
    subtitle:
      'The homepage now foregrounds the actual Citingale product and research ecosystem.',
  },
] as const;
