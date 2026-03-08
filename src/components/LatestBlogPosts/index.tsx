import React, {useEffect, useState} from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

interface BlogPost {
  id: string;
  permalink: string;
  title: string;
  date: string;
  description: string;
  image: string;
}

const DEFAULT_BLOG_IMAGE = '/img/logo.png';

function formatIndonesianDate(value: string): string {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return value;
  }
  return new Intl.DateTimeFormat('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(parsed);
}

export default function LatestBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadBlogPosts() {
      try {
        const response = await fetch('/berita/rss.xml', {cache: 'no-store'});
        if (!response.ok) {
          throw new Error(`Failed to fetch RSS: ${response.status}`);
        }

        const xmlText = await response.text();
        const xml = new DOMParser().parseFromString(xmlText, 'text/xml');
        const items = Array.from(xml.getElementsByTagName('item'));

        const parsedPosts = items.slice(0, 6).map((item, index) => {
          const getXmlNodeText = (tagName: string): string => {
            const node = item.getElementsByTagName(tagName)[0];
            return node?.textContent?.trim() ?? '';
          };

          const title = getXmlNodeText('title');
          const link = getXmlNodeText('link');
          const pubDate = getXmlNodeText('pubDate');
          const description = getXmlNodeText('description');
          
          // Try to extract image from media:content or other RSS elements
          const mediaContent = item.getElementsByTagName('media:content')[0];
          let image = mediaContent?.getAttribute('url') || null;
          
          // Fallback: try to extract image from encoded content
          if (!image) {
            const namespacedNode = item.getElementsByTagName('content:encoded')[0];
            const encodedContent = namespacedNode?.textContent || '';
            const imgMatch = encodedContent.match(/<img[^>]+src=["']([^"']+)["']/);
            image = imgMatch ? imgMatch[1] : null;
          }

          if (!image) {
            image = DEFAULT_BLOG_IMAGE;
          }

          return {
            id: `${link}-${index}`,
            permalink: link,
            title,
            date: pubDate,
            description,
            image,
          };
        });

        if (isMounted) {
          setPosts(parsedPosts);
        }
      } catch (error) {
        console.error('Failed to load latest blog posts from RSS.', error);
        if (isMounted) {
          setPosts([]);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadBlogPosts();

    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoading) {
    return null;
  }

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className={styles.blogSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Berita & Artikel Terbaru</h2>
          <p className={styles.sectionDescription}>
            Ikuti perkembangan terkini dari kegiatan, riset, dan inovasi APIK
          </p>
        </div>

        <div className={styles.blogGrid}>
          {posts.map((post) => {
            const {permalink, title, date, description, image, id} = post;
            const dateObj = new Date(date);

            return (
              <article key={id} className={styles.blogCard}>
                <Link to={permalink} className={styles.blogLink}>
                  <div className={styles.imageWrapper}>
                    <img
                      src={image}
                      alt={title}
                      className={styles.blogImage}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.src = DEFAULT_BLOG_IMAGE;
                      }}
                    />
                    <div className={styles.imageOverlay}>
                      <span className={styles.readMore}>Baca Selengkapnya →</span>
                    </div>
                    <div className={styles.dateBadge}>
                      <span className={styles.dateDay}>{dateObj.getDate()}</span>
                      <span className={styles.dateMonth}>
                        {dateObj.toLocaleDateString('id-ID', { month: 'short' })}
                      </span>
                    </div>
                  </div>
                  
                  <div className={styles.blogContent}>
                    <h3 className={styles.blogTitle}>{title}</h3>
                    {description && (
                      <p className={styles.blogDescription}>{description}</p>
                    )}
                    <div className={styles.blogMeta}>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>

        <div className={styles.viewAllWrapper}>
          <Link 
            to="/berita" 
            className={styles.viewAllButton}
          >
            Lihat Semua Artikel
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              className={styles.buttonArrow}
            >
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
