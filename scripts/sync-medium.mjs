import { existsSync } from 'node:fs';
import { mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const MEDIUM_FEED_URL = 'https://medium.com/feed/@AiDocTakes';
const DEFAULT_OUTPUT_PATH = 'src/data/medium-posts.json';

function decodeXml(value) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'");
}

function stripHtml(value) {
  return decodeXml(value)
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function tagValue(xml, tagName) {
  const pattern = new RegExp(`<${escapeRegExp(tagName)}\\b[^>]*>([\\s\\S]*?)<\\/${escapeRegExp(tagName)}>`, 'i');
  const match = xml.match(pattern);
  return match ? decodeXml(match[1]).trim() : '';
}

function formatDate(pubDate) {
  const date = new Date(pubDate);
  if (Number.isNaN(date.getTime())) {
    return '';
  }

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

function cleanUrl(value) {
  try {
    const url = new URL(value.trim());
    url.search = '';
    url.hash = '';
    return url.toString();
  } catch {
    return value.trim();
  }
}

function summarize(value) {
  const text = stripHtml(value);
  if (text.length <= 180) {
    return text;
  }

  const truncated = text.slice(0, 180);
  const sentenceEnd = Math.max(truncated.lastIndexOf('.'), truncated.lastIndexOf('!'), truncated.lastIndexOf('?'));
  if (sentenceEnd > 80) {
    return truncated.slice(0, sentenceEnd + 1);
  }

  return `${truncated.replace(/\s+\S*$/, '')}...`;
}

export function parseMediumFeed(xml, options = {}) {
  const limit = options.limit ?? 6;
  const itemMatches = xml.match(/<item\b[\s\S]*?<\/item>/gi) ?? [];

  return itemMatches
    .map((item) => {
      const title = stripHtml(tagValue(item, 'title'));
      const link = cleanUrl(stripHtml(tagValue(item, 'link')));
      const pubDate = stripHtml(tagValue(item, 'pubDate'));
      const content = tagValue(item, 'content:encoded') || tagValue(item, 'description');
      const subtitle = summarize(content);
      const publishedAt = new Date(pubDate);

      return {
        date: formatDate(pubDate),
        title,
        subtitle,
        url: link,
        publishedAt: Number.isNaN(publishedAt.getTime()) ? '' : publishedAt.toISOString(),
      };
    })
    .filter((post) => post.title && post.url)
    .slice(0, limit);
}

export async function writePostsCache(posts, outputPath = DEFAULT_OUTPUT_PATH) {
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(`${outputPath}.tmp`, `${JSON.stringify(posts, null, 2)}\n`, 'utf8');
  await rename(`${outputPath}.tmp`, outputPath);
}

async function readExistingCache(outputPath) {
  if (!existsSync(outputPath)) {
    return null;
  }

  const value = await readFile(outputPath, 'utf8');
  return JSON.parse(value);
}

export async function syncMediumPosts(options = {}) {
  const feedUrl = options.feedUrl ?? MEDIUM_FEED_URL;
  const outputPath = options.outputPath ?? DEFAULT_OUTPUT_PATH;
  const limit = options.limit ?? 6;
  const fetchImpl = options.fetchImpl ?? fetch;
  const timeoutMs = options.timeoutMs ?? 15000;
  const signal = AbortSignal.timeout(timeoutMs);

  try {
    const response = await fetchImpl(feedUrl, {
      signal,
      headers: {
        'user-agent': 'citingale.com blog sync',
        accept: 'application/rss+xml, application/xml, text/xml',
      },
    });

    if (!response.ok) {
      throw new Error(`Medium feed returned ${response.status}`);
    }

    const xml = await response.text();
    const posts = parseMediumFeed(xml, { limit });

    if (posts.length === 0) {
      throw new Error('Medium feed did not contain posts');
    }

    await writePostsCache(posts, outputPath);
    return { status: 'updated', posts };
  } catch (error) {
    const fallback = await readExistingCache(outputPath);
    if (fallback) {
      console.warn(`Medium sync failed; using existing cache: ${error.message}`);
      return { status: 'cached', posts: fallback };
    }

    throw error;
  }
}

const isCli = process.argv[1] === fileURLToPath(import.meta.url);

if (isCli) {
  syncMediumPosts()
    .then((result) => {
      console.log(`Medium blog sync ${result.status}: ${result.posts.length} posts`);
    })
    .catch((error) => {
      console.error(`Medium blog sync failed: ${error.message}`);
      process.exitCode = 1;
    });
}
