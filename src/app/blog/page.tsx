import BlogArticleList from '@/components/BlogArticleList';
import mediumPosts from '@/data/medium-posts.json';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <div className="site-grid min-h-screen">
        <div className="mx-auto w-full max-w-5xl px-5 py-8 sm:px-8 lg:px-10">
          <header className="flex items-center justify-between border-b border-slate-200 pb-6">
            <Link href="/" className="text-sm font-semibold uppercase tracking-normal">
              Citingale
            </Link>
            <Link href="/" className="text-sm text-slate-600 hover:text-slate-950">
              Home
            </Link>
          </header>

          <section className="py-16">
            <h1 className="max-w-3xl text-5xl font-medium leading-[0.94] tracking-normal sm:text-6xl lg:text-7xl">
              AI field notes
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Essays from @AiDocTakes on agents, AI infrastructure, model behavior, governance, automation, and the operational
              reality behind the headlines.
            </p>
          </section>

          <BlogArticleList posts={mediumPosts} />
        </div>
      </div>
    </main>
  );
}
