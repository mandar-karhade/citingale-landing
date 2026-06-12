import Image from 'next/image';
import Link from 'next/link';
import IntelligenceTubes from '@/components/IntelligenceTubes';
import mediumPosts from '@/data/medium-posts.json';
import { products, updates } from '@/data/site-content';

const latestPosts = mediumPosts.slice(0, 3);
const latestUpdates = updates.slice(0, 3);

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-950">
      <div className="site-grid relative">
        <div className="relative mx-auto w-full max-w-7xl min-w-0 px-5 py-7 sm:px-8 lg:px-10">
          <section className="video-hero">
            <IntelligenceTubes />

            <header className="video-hero-nav">
              <Link href="/" className="video-hero-brand" aria-label="Citingale home">
                <Image
                  src="/citingale-logo.png"
                  alt="Citingale logo"
                  width={48}
                  height={48}
                  priority
                  className="h-9 w-9 object-contain"
                />
                <span>Citingale</span>
              </Link>

              <nav className="video-hero-links">
                <a href="#products">Products</a>
                <a href="#blog">Blog</a>
                <Link href="/updates">Updates</Link>
                <a href="mailto:contact@citingale.com">Contact</a>
              </nav>
            </header>

            <div className="video-hero-copy">
              <h1>AI-Enhanced Intelligence You can Inspect</h1>
              <p>
                Citingale builds inspectable AI products for domain intelligence, regulated workflows, clinical operations,
                privacy-first applications, and research automation. The common layer is traceable reasoning: sources, decisions,
                and outputs stay connected.
              </p>

              <div className="video-hero-actions">
                <a href="#products">Explore products</a>
                <Link href="/blog">Read the blog</Link>
              </div>
            </div>
          </section>

          <section id="products" className="mt-16 scroll-mt-8">
            <div className="section-heading">
              <h2>Product line</h2>
              <p>A linked product and research ecosystem spanning inspectable AI, regulated workflows, clinical operations, and privacy-first tools.</p>
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
                <Link href="/blog">View all</Link>
              </div>
              <div className="feed-list">
                {latestPosts.map((post) => (
                  <a href={post.url} className="feed-row" key={post.url} target="_blank" rel="noreferrer">
                    {post.imageUrl ? (
                      <span
                        className="feed-thumbnail"
                        style={{ backgroundImage: `url("${post.imageUrl}")` }}
                        aria-hidden="true"
                      />
                    ) : (
                      <time>{post.date}</time>
                    )}
                    <span>
                      {post.imageUrl ? <time>{post.date}</time> : null}
                      <strong>{post.title}</strong>
                      <span>{post.subtitle}</span>
                    </span>
                  </a>
                ))}
              </div>
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
