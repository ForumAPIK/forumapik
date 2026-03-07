import React from 'react';
import Link from '@docusaurus/Link';
import {usePluginData} from '@docusaurus/useGlobalData';
import styles from './styles.module.css';

interface BlogPost {
  id: string;
  metadata: {
    permalink: string;
    title: string;
    date: string;
    formattedDate: string;
    description?: string;
    frontMatter: {
      image?: string;
      [key: string]: any;
    };
  };
}

interface BlogPluginData {
  blogPosts: BlogPost[];
  [key: string]: any;
}

export default function LatestBlogPosts() {
  const blogData = usePluginData('docusaurus-plugin-content-blog', 'default') as BlogPluginData;
  
  if (!blogData || !blogData.blogPosts) {
    return null;
  }

  // Get the 6 latest posts
  const latestPosts = blogData.blogPosts.slice(0, 6);

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
          {latestPosts.map((post, index) => {
            const {metadata} = post;
            const {permalink, title, date, formattedDate, description, frontMatter} = metadata;
            
            // Extract image from frontMatter or use default
            const image = frontMatter.image || '/img/default-blog.jpg';
            
            return (
              <article key={index} className={styles.blogCard}>
                <Link to={permalink} className={styles.blogLink}>
                  <div className={styles.imageWrapper}>
                    <img 
                      src={image} 
                      alt={title}
                      className={styles.blogImage}
                      loading="lazy"
                    />
                    <div className={styles.imageOverlay}>
                      <span className={styles.readMore}>Baca Selengkapnya →</span>
                    </div>
                    <div className={styles.dateBadge}>
                      <span className={styles.dateDay}>{new Date(date).getDate()}</span>
                      <span className={styles.dateMonth}>
                        {new Date(date).toLocaleDateString('id-ID', { month: 'short' })}
                      </span>
                    </div>
                  </div>
                  
                  <div className={styles.blogContent}>
                    <h3 className={styles.blogTitle}>{title}</h3>
                    {description && (
                      <p className={styles.blogDescription}>{description}</p>
                    )}
                    <div className={styles.blogMeta}>
                      <span className={styles.metaDate}>
                        <svg 
                          width="14" 
                          height="14" 
                          viewBox="0 0 16 16" 
                          fill="currentColor"
                          className={styles.metaIcon}
                        >
                          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                        </svg>
                        {formattedDate}
                      </span>
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
