import Image from 'next/image';
import Link from 'next/link';
import mediumPosts from '@/data/medium-posts.json';
import { products, proofPoints, updates } from '@/data/site-content';

const latestPosts = mediumPosts.slice(0, 3);
const latestUpdates = updates.slice(0, 3);

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-950">
      <div className="site-grid relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(20,90,255,0.07),transparent_24%),radial-gradient(circle_at_12%_74%,rgba(220,20,60,0.04),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.74),rgba(255,255,255,0.96)_46%,#fff)]" />

        <div className="relative mx-auto w-full max-w-7xl min-w-0 px-5 py-7 sm:px-8 lg:px-10">
          <header className="flex flex-col gap-6 border-b border-slate-200 pb-7 md:flex-row md:items-center md:justify-between">
            <Link href="/" className="flex items-center gap-3" aria-label="Citingale home">
              <Image
                src="/citingale-logo.png"
                alt="Citingale logo"
                width={48}
                height={48}
                priority
                className="h-12 w-12 object-contain drop-shadow-sm"
              />
              <span className="grid gap-0.5">
                <span className="text-sm font-semibold uppercase tracking-normal">Citingale</span>
                <span className="text-[10px] uppercase tracking-normal text-slate-500">Research simplified</span>
              </span>
            </Link>

            <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs uppercase tracking-normal text-slate-600">
              <a className="transition hover:text-slate-950" href="#products">
                Products
              </a>
              <a className="transition hover:text-slate-950" href="#blog">
                Blog
              </a>
              <Link className="transition hover:text-slate-950" href="/updates">
                Updates
              </Link>
              <a className="transition hover:text-slate-950" href="#about">
                About
              </a>
              <a
                className="rounded-full border border-slate-950 bg-slate-950 px-4 py-2 text-white transition hover:bg-white hover:text-slate-950"
                href="mailto:contact@citingale.com"
              >
                Contact
              </a>
            </nav>
          </header>

          <section className="grid min-w-0 gap-14 py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:py-20">
            <div className="min-w-0">
              <h1 className="w-full max-w-4xl min-w-0 text-4xl font-medium leading-[0.96] tracking-normal text-slate-950 [overflow-wrap:anywhere] sm:text-6xl lg:text-7xl">
                AI-Enhanced Intelligence You can Inspect
              </h1>
              <p className="mt-7 w-full max-w-2xl min-w-0 text-base leading-8 text-slate-600 [overflow-wrap:anywhere] sm:text-lg">
                Citingale turns literature review, meta-analysis, and evidence synthesis into a transparent research workflow.
                Every product is built around one promise: faster intelligence without losing the source, the method, or the
                trail of reasoning.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#products"
                  className="inline-flex h-11 items-center rounded-full border border-slate-950 bg-slate-950 px-5 text-sm text-white transition hover:bg-white hover:text-slate-950"
                >
                  Explore products
                </a>
                <a
                  href="#blog"
                  className="inline-flex h-11 items-center rounded-full border border-slate-300 bg-white/80 px-5 text-sm text-slate-950 transition hover:border-slate-950"
                >
                  Read the blog
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
                {proofPoints.map((point) => (
                  <div key={point.label} className="border-t border-slate-200 pt-4 text-sm leading-6 text-slate-500">
                    <strong className="mb-1 block text-2xl font-medium tracking-normal text-slate-950">{point.label}</strong>
                    {point.description}
                  </div>
                ))}
              </div>
            </div>

            <aside className="relative min-h-[390px] min-w-0 border-slate-200 lg:border-l lg:pl-8" aria-label="Animated evidence signal">
              <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-normal text-slate-500">
                <span>Live evidence signal</span>
                <span className="pulse-dot" aria-hidden="true" />
              </div>

              <div className="evidence-graph relative h-[330px] overflow-hidden rounded-lg border border-slate-200 bg-white/80 shadow-[0_18px_44px_rgba(15,23,42,0.05)]">
                <div className="scan-line" aria-hidden="true" />
                <div className="orbit orbit-one" aria-hidden="true" />
                <div className="orbit orbit-two" aria-hidden="true" />
                <span className="graph-node graph-node-blue left-[34%] top-[17%]" aria-hidden="true" />
                <span className="graph-node left-[72%] top-[38%]" aria-hidden="true" />
                <span className="graph-node graph-node-red left-[34%] top-[72%]" aria-hidden="true" />
                <span className="graph-node left-[12%] top-[47%]" aria-hidden="true" />

                <div className="signal-card left-5 top-5">
                  <strong>Question</strong>
                  <span>Define the research question, protocol, criteria, and review scope.</span>
                </div>
                <div className="signal-card right-5 top-24">
                  <strong>Evidence</strong>
                  <span>Screen studies, extract data, and preserve source-level context.</span>
                </div>
                <div className="signal-card bottom-5 left-12">
                  <strong>Synthesis</strong>
                  <span>Build reproducible summaries, evidence maps, and meta-analytic outputs.</span>
                </div>
              </div>

              <div className="ticker mt-4 overflow-hidden rounded-lg border border-slate-200 bg-white text-sm text-slate-600">
                <span>
                  <strong>Systematic review</strong> - study screening - extraction - risk of bias - meta-analysis - evidence map -
                  update log - <strong>Systematic review</strong> - study screening - extraction - risk of bias - meta-analysis -
                  evidence map - update log -
                </span>
              </div>
            </aside>
          </section>

          <section id="products" className="scroll-mt-8">
            <div className="section-heading">
              <h2>Product line</h2>
              <p>Each row becomes a linked product or website. The homepage stays minimal while still making the ecosystem obvious.</p>
            </div>

            <div className="mt-5 border-t border-slate-200">
              {products.map((product) => (
                <a
                  key={product.name}
                  href={product.href}
                  className="product-row group grid min-h-28 grid-cols-[2.5rem_minmax(0,1fr)_2rem] items-center gap-5 border-b border-slate-200 py-6 transition hover:bg-slate-50 md:grid-cols-[3.5rem_minmax(0,1fr)_11rem_2.25rem]"
                >
                  <span className="text-sm text-slate-400">{product.number}</span>
                  <span>
                    <span className="block text-2xl font-medium tracking-normal text-slate-950">{product.name}</span>
                    <span className="mt-2 block max-w-3xl text-sm leading-6 text-slate-600">{product.description}</span>
                  </span>
                  <span className="hidden justify-self-start rounded-full border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 md:inline-flex">
                    {product.tag}
                  </span>
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-slate-200 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-slate-950 group-hover:bg-slate-950 group-hover:text-white">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </section>

          <section className="mt-16 grid gap-12 lg:grid-cols-2">
            <div>
              <div className="feed-heading">
                <h2>Updates</h2>
                <Link href="/updates">View all</Link>
              </div>
              <div className="feed-list">
                {latestUpdates.map((update) => (
                  <Link href="/updates" className="feed-row" key={update.title}>
                    <time>{update.date}</time>
                    <span>
                      <strong>{update.title}</strong>
                      <span>{update.subtitle}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div id="blog" className="scroll-mt-8">
              <div className="feed-heading">
                <h2>Blog</h2>
                <a href="https://medium.com/@AiDocTakes" target="_blank" rel="noreferrer">
                  Medium
                </a>
              </div>
              <div className="feed-list">
                {latestPosts.map((post) => (
                  <a href={post.url} className="feed-row" key={post.url} target="_blank" rel="noreferrer">
                    <time>{post.date}</time>
                    <span>
                      <strong>{post.title}</strong>
                      <span>{post.subtitle}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section id="about" className="mt-16 border-t border-slate-200 pt-10">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium tracking-normal text-slate-950">
                Research simplified, without hiding the reasoning.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Citingale is built for systematic literature review, meta-analysis, and evidence synthesis. It does not replace
                human intelligence; it augments researchers with standardized, reproducible, and inspectable evidence workflows.
              </p>
            </div>
          </section>

          <footer className="mt-16 flex flex-col gap-4 border-t border-slate-200 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <div>
              Contact:{' '}
              <a href="mailto:contact@citingale.com" className="text-slate-950 hover:underline">
                contact@citingale.com
              </a>{' '}
              · Knowledge City, USA
            </div>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/citingale/" target="_blank" rel="noreferrer" className="hover:text-slate-950">
                LinkedIn
              </a>
              <a href="https://github.com/citingale" target="_blank" rel="noreferrer" className="hover:text-slate-950">
                GitHub
              </a>
              <a href="https://medium.com/@AiDocTakes" target="_blank" rel="noreferrer" className="hover:text-slate-950">
                Blog
              </a>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
