import { updates } from '@/data/site-content';
import Link from 'next/link';

export default function UpdatesPage() {
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
              Updates
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Product notes, design changes, automation work, and company progress from the Citingale ecosystem.
            </p>
          </section>

          <section className="border-t border-slate-200">
            {updates.map((update) => (
              <article
                key={update.title}
                className="grid gap-4 border-b border-slate-200 py-7 md:grid-cols-[9rem_minmax(0,1fr)_8rem]"
              >
                <time className="text-sm text-slate-500">{update.date}</time>
                <div>
                  <h2 className="text-2xl font-medium tracking-normal">{update.title}</h2>
                  <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">{update.subtitle}</p>
                </div>
                <span className="h-fit justify-self-start rounded-full border border-slate-200 px-3 py-2 text-xs text-slate-600">
                  {update.category}
                </span>
              </article>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}
