import assert from 'node:assert/strict';
import { mkdtemp, readFile, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { parseMediumFeed, syncMediumPosts } from './sync-medium.mjs';

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

test('parseMediumFeed strips tracking query params from links', () => {
  const xml = `<?xml version="1.0"?>
    <rss><channel>
      <item>
        <title>Tracked Link</title>
        <link>https://medium.com/@AiDocTakes/tracked?source=rss-feed</link>
        <pubDate>Wed, 10 Jun 2026 12:30:00 GMT</pubDate>
        <description>Clean subtitle.</description>
      </item>
    </channel></rss>`;

  const posts = parseMediumFeed(xml, { limit: 1 });

  assert.equal(posts[0].url, 'https://medium.com/@AiDocTakes/tracked');
});

test('syncMediumPosts uses injected fetch with timeout signal and falls back to cache on failure', async () => {
  const dir = await mkdtemp(path.join(os.tmpdir(), 'medium-sync-'));
  const outputPath = path.join(dir, 'medium-posts.json');
  const cachedPosts = [
    {
      date: 'Jun 1, 2026',
      title: 'Cached Article',
      subtitle: 'Cached subtitle.',
      url: 'https://medium.com/@AiDocTakes/cached',
      publishedAt: '2026-06-01T12:00:00.000Z',
    },
  ];
  await writeFile(outputPath, JSON.stringify(cachedPosts), 'utf8');

  let receivedSignal = null;
  const result = await syncMediumPosts({
    feedUrl: 'not-a-url',
    outputPath,
    fetchImpl: async (_url, init) => {
      receivedSignal = init.signal;
      return { ok: false, status: 504, text: async () => '' };
    },
  });

  const written = JSON.parse(await readFile(outputPath, 'utf8'));

  assert.equal(result.status, 'cached');
  assert.deepEqual(result.posts, cachedPosts);
  assert.deepEqual(written, cachedPosts);
  assert.ok(receivedSignal instanceof AbortSignal);
});
