import React, {useState} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Breadcrumb from '@site/src/components/Breadcrumb';
import {pengurusData, direktoratData, LeadershipPosition} from '@site/src/data/leadership';
import styles from './styles.module.css';

// Helper to extract Google Scholar photo from profile URL
function getGoogleScholarPhoto(scholarUrl: string): string | null {
  try {
    const url = new URL(scholarUrl);
    const userId = url.searchParams.get('user');
    if (userId) {
      return `https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=${userId}`;
    }
  } catch (e) {
    // Invalid URL
  }
  return null;
}

// Leadership Card Component with photo loading logic
function LeadershipCard({position}: {position: LeadershipPosition}) {
  const [imgError, setImgError] = useState(false);
  const [imgLoading, setImgLoading] = useState(true);
  
  // Determine photo source: local file, Google Scholar, or fallback
  const photoSrc = position.photo || 
    (position.link && position.link.includes('scholar.google') 
      ? getGoogleScholarPhoto(position.link) 
      : null);
  
  const isExternalPhoto = photoSrc && (photoSrc.startsWith('http://') || photoSrc.startsWith('https://'));
  
  return (
    <div className={styles.leaderCard}>
      <div className={styles.photoWrapper}>
        {photoSrc && !imgError ? (
          <>
            {imgLoading && (
              <div className={styles.photoPlaceholder}>
                <div className={styles.loadingSpinner}></div>
              </div>
            )}
            <img
              src={photoSrc}
              alt={position.name}
              className={`${styles.leaderPhoto} ${imgLoading ? styles.hidden : ''}`}
              onLoad={() => setImgLoading(false)}
              onError={() => {
                setImgError(true);
                setImgLoading(false);
              }}
            />
          </>
        ) : (
          <div className={styles.photoPlaceholder}>
            <svg 
              className={styles.placeholderIcon} 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
              />
            </svg>
          </div>
        )}
        {isExternalPhoto && !imgError && (
          <span className={styles.externalBadge} title="From Google Scholar">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
              <path d="M14 2v6h6"/>
            </svg>
          </span>
        )}
      </div>
      <h3>{position.title}</h3>
      <p className={styles.name}>{position.name}</p>
      <p className={styles.role}>
        {position.subtitle}
        {position.link && position.link.includes('scholar.google') && (
          <Link 
            to={position.link}
            className={styles.scholarIconLink}
            target="_blank"
            rel="noopener noreferrer"
            title="View Google Scholar Profile"
          >
            <span className={styles.scholarIcon}>🎓</span>
          </Link>
        )}
      </p>
    </div>
  );
}

export default function Pengurus() {
  return (
    <Layout
      title="Pengurus"
      description="Struktur Kepengurusan Asosiasi Peneliti Indonesia Korea">
      <main className={styles.aboutPage}>
        <div className="container">
          <Breadcrumb items={[
            { label: 'Tentang', path: '/tentang/visi-misi' },
            { label: 'Pengurus' }
          ]} />
          <div className={styles.aboutContent}>
            <h1>Pengurus APIK 2024-2026</h1>
            
            <section className={styles.section}>
              <h2>Dewan Pengurus Harian</h2>
              <p>
                Kepengurusan APIK periode 2024-2026 terdiri dari para peneliti Indonesia 
                di Korea yang memiliki dedikasi tinggi untuk memajukan riset dan inovasi Indonesia.
              </p>
              
              <div className={styles.leadershipGrid}>
                {pengurusData.map((position) => (
                  <LeadershipCard key={position.title} position={position} />
                ))}
              </div>
            </section>

            <section className={styles.section}>
              <h2>Direktorat</h2>
              <p>
                APIK memiliki lima direktorat yang bertugas mengelola berbagai aspek 
                kegiatan dan program organisasi.
              </p>
              
              <div className={styles.leadershipGrid}>
                {direktoratData.map((position) => (
                  <LeadershipCard key={position.title} position={position} />
                ))}
              </div>
            </section>

            <section className={styles.section}>
              <h2>Visi Kepengurusan</h2>
              <p>
                Menjadi organisasi peneliti Indonesia terdepan di Korea yang mendorong 
                kolaborasi riset berkelas dunia dan berkontribusi nyata untuk pembangunan Indonesia.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Program Kerja</h2>
              <ul>
                <li>Memfasilitasi kolaborasi riset antara peneliti Indonesia di Korea</li>
                <li>Menyelenggarakan seminar, workshop, dan webinar berkualitas</li>
                <li>Membangun network dengan institusi di Indonesia dan Korea</li>
                <li>Memberikan platform untuk pengembangan kapasitas anggota</li>
                <li>Memperkuat hubungan Indonesia-Korea melalui diplomasi ilmiah</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>Kontak</h2>
              <p>
                Untuk informasi lebih lanjut atau pertanyaan mengenai kepengurusan APIK, 
                silakan hubungi kami melalui:
              </p>
              <ul>
                <li>Email: info@forumapik.org</li>
                <li>Website: <a href="https://forumapik.org" target="_blank" rel="noopener noreferrer">forumapik.org</a></li>
                <li>Instagram: <a href="https://www.instagram.com/forumapik/" target="_blank" rel="noopener noreferrer">@forumapik</a></li>
                <li>Facebook: <a href="https://www.facebook.com/forumAPIK/" target="_blank" rel="noopener noreferrer">Forum APIK</a></li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
