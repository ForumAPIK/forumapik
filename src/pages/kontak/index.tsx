import React from 'react';
import Layout from '@theme/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import styles from './styles.module.css';
import aboutStyles from '../tentang/styles.module.css';

export default function Kontak() {
  return (
    <Layout
      title="Kontak APIK"
      description="Hubungi Asosiasi Peneliti Indonesia Korea">
      <main className={styles.kontakPage}>
        <div className="container">
          <Breadcrumb items={[
            { label: 'Kontak' }
          ]} />
          <div className={aboutStyles.aboutContent}>
            <h1>Hubungi Kami</h1>
            
            <section className={styles.section}>
              <p className={styles.intro}>
                Kami senang mendengar dari Anda! Jangan ragu untuk menghubungi kami melalui berbagai saluran komunikasi berikut.
              </p>
            </section>

            <div className={styles.contactGrid}>
              <div className={styles.contactCard}>
                <div className={styles.contactIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <h3>Email</h3>
                <p>Kirim email kepada kami:</p>
                <a href="mailto:info@forumapik.org" className={styles.contactLink}>
                  info@forumapik.org
                </a>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.contactIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <h3>Lokasi</h3>
                <p>Kami berbasis di:</p>
                <p className={styles.contactInfo}>
                  <strong>Indonesia - Korea</strong><br />
                  Asosiasi Peneliti Indonesia Korea
                </p>
              </div>
            </div>

            <section className={styles.socialSection}>
              <h2>Media Sosial</h2>
              <p>Ikuti kami di media sosial untuk mendapatkan update terbaru:</p>
              <div className={styles.socialLinks}>
                <a 
                  href="https://www.facebook.com/forumAPIK/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialButton}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12A10 10 0 1 0 10.4 21.9V14.9H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
                  </svg>
                  <span>Facebook</span>
                </a>
                <a 
                  href="https://www.instagram.com/forumapik/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialButton}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8c1.99 0 3.6-1.61 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Z" />
                  </svg>
                  <span>Instagram</span>
                </a>
                <a 
                  href="https://www.youtube.com/@ForumAPIK" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialButton}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73Z" />
                  </svg>
                  <span>YouTube</span>
                </a>
              </div>
            </section>

            <section className={styles.formSection}>
              <h2>Formulir Kontak</h2>
              <p>Untuk pertanyaan lebih lanjut, silakan hubungi kami melalui email atau media sosial di atas. Kami akan merespons sesegera mungkin.</p>
              <div className={styles.contactCTA}>
                <a href="mailto:info@forumapik.org" className={styles.ctaButton}>
                  Kirim Email
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
