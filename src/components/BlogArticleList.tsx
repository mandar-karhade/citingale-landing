'use client';

import { useEffect, useMemo, useState } from 'react';

type MediumPost = {
  date: string;
  title: string;
  subtitle: string;
  url: string;
  imageUrl?: string;
  publishedAt: string;
};

type BlogArticleListProps = {
  posts: readonly MediumPost[];
};

const latestPostStorageKey = 'citingale:latest-medium-post';

function FlipTitle({ title, active }: { title: string; active: boolean }) {
  if (!active) {
    return <>{title}</>;
  }

  return (
    <span className="flip-title" aria-label={title}>
      {Array.from(title).map((character, index) => (
        <span
          aria-hidden="true"
          className={character === ' ' ? 'flip-space' : undefined}
          key={`${character}-${index}`}
          style={{ animationDelay: `${Math.min(index * 18, 720)}ms` }}
        >
          {character}
        </span>
      ))}
    </span>
  );
}

export default function BlogArticleList({ posts }: BlogArticleListProps) {
  const latestPostKey = useMemo(() => posts[0]?.url ?? '', [posts]);
  const [newPostUrl, setNewPostUrl] = useState('');

  useEffect(() => {
    if (!latestPostKey) {
      return;
    }

    try {
      const previousLatestPost = window.localStorage.getItem(latestPostStorageKey) ?? '';

      if (previousLatestPost && previousLatestPost !== latestPostKey) {
        setNewPostUrl(latestPostKey);
      }

      window.localStorage.setItem(latestPostStorageKey, latestPostKey);
    } catch {
      return;
    }
  }, [latestPostKey]);

  return (
    <div className="article-list">
      {posts.map((post) => {
        const isNew = post.url === newPostUrl;

        return (
          <a
            className={`article-row${isNew ? ' article-row-new' : ''}`}
            href={post.url}
            key={post.url}
            target="_blank"
            rel="noreferrer"
          >
            <span
              className="article-thumbnail"
              style={post.imageUrl ? { backgroundImage: `url("${post.imageUrl}")` } : undefined}
              aria-hidden="true"
            />
            <span className="article-body">
              <span className="article-meta">
                <time>{post.date}</time>
                {isNew ? <span>New</span> : null}
              </span>
              <strong>
                <FlipTitle title={post.title} active={isNew} />
              </strong>
              <span>{post.subtitle}</span>
            </span>
            <span className="article-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        );
      })}
    </div>
  );
}
