import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {HtmlClassNameProvider, ThemeClassNames} from '@docusaurus/theme-common';
import type {
  BlogSidebar,
  PropBlogPostContent,
} from '@docusaurus/plugin-content-blog';
import {
  BlogPostProvider,
  useBlogPost,
} from '@docusaurus/plugin-content-blog/client';
import BlogLayout from '@theme/BlogLayout';
import BlogPostItem from '@theme/BlogPostItem';
import BlogPostPaginator from '@theme/BlogPostPaginator';
import BlogPostPageMetadata from '@theme/BlogPostPage/Metadata';
import BlogPostPageStructuredData from '@theme/BlogPostPage/StructuredData';
import TOC from '@theme/TOC';
import ContentVisibility from '@theme/ContentVisibility';
import styles from './styles.module.css';

function RelatedPosts({sidebar}: {sidebar?: BlogSidebar}): React.ReactElement | null {
  const {metadata} = useBlogPost();
  const items = (sidebar?.items ?? []).filter(
    (item) => !item.unlisted && item.permalink !== metadata.permalink,
  );

  if (items.length === 0) {
    return null;
  }

  const currentWords = new Set(
    metadata.title
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .filter((word) => word.length >= 4),
  );

  const relatedItems = [...items]
    .sort((a, b) => {
      const aWords = a.title
        .toLowerCase()
        .split(/[^a-z0-9]+/)
        .filter((word) => word.length >= 4);
      const bWords = b.title
        .toLowerCase()
        .split(/[^a-z0-9]+/)
        .filter((word) => word.length >= 4);
      const aScore = aWords.filter((word) => currentWords.has(word)).length;
      const bScore = bWords.filter((word) => currentWords.has(word)).length;

      if (bScore !== aScore) {
        return bScore - aScore;
      }

      return new Date(String(b.date)).getTime() - new Date(String(a.date)).getTime();
    })
    .slice(0, 3);

  return (
    <section className={styles.relatedSection}>
      <h3 className={styles.relatedTitle}>Artikel Terkait</h3>
      <div className={styles.relatedGrid}>
        {relatedItems.map((item) => (
          <Link key={item.permalink} to={item.permalink} className={styles.relatedCard}>
            <h4>{item.title}</h4>
            <p>
              {new Intl.DateTimeFormat('id-ID', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
              }).format(new Date(String(item.date)))}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

function BlogPostPageContent({
  sidebar,
  children,
}: {
  sidebar?: BlogSidebar;
  children: React.ReactNode;
}): React.ReactElement {
  const {metadata, toc} = useBlogPost();
  const {nextItem, prevItem, frontMatter} = metadata;
  const {
    hide_table_of_contents: hideTableOfContents,
    toc_min_heading_level: tocMinHeadingLevel,
    toc_max_heading_level: tocMaxHeadingLevel,
  } = frontMatter;

  return (
    <BlogLayout
      sidebar={sidebar}
      toc={
        !hideTableOfContents && toc.length > 0 ? (
          <TOC
            toc={toc}
            minHeadingLevel={tocMinHeadingLevel}
            maxHeadingLevel={tocMaxHeadingLevel}
          />
        ) : undefined
      }>
      <ContentVisibility metadata={metadata} />

      <BlogPostItem>{children}</BlogPostItem>

      <RelatedPosts sidebar={sidebar} />

      {(nextItem || prevItem) && (
        <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />
      )}
    </BlogLayout>
  );
}

export default function BlogPostPage(props: {
  content: PropBlogPostContent;
  sidebar?: BlogSidebar;
}): React.ReactElement {
  const BlogPostContent = props.content;

  return (
    <BlogPostProvider content={props.content} isBlogPostPage>
      <HtmlClassNameProvider
        className={clsx(
          ThemeClassNames.wrapper.blogPages,
          ThemeClassNames.page.blogPostPage,
        )}>
        <BlogPostPageMetadata />
        <BlogPostPageStructuredData />
        <BlogPostPageContent sidebar={props.sidebar}>
          <BlogPostContent />
        </BlogPostPageContent>
      </HtmlClassNameProvider>
    </BlogPostProvider>
  );
}
