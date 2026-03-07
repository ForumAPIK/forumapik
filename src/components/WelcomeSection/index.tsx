import React from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function WelcomeSection(): React.ReactElement {
  return (
    <section id="sambutan" className={styles.welcomeSection}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <Heading as="h2" className={styles.sectionTitle}>
            Selamat Datang di APIK
          </Heading>
          
          <div className={styles.textWrapper}>
            <p className={styles.introText}>
              Asosiasi Peneliti Indonesia Korea (APIK) adalah jembatan kolaborasi yang menghubungkan talenta terbaik dari Indonesia dan Korea untuk menciptakan inovasi penelitian yang mengubah dunia.
            </p>

            <p className={styles.mainText}>
              Kami percaya bahwa kolaborasi lintas negara membuka peluang tak terbatas untuk kemajuan ilmu pengetahuan. Dengan menggabungkan keahlian peneliti Indonesia yang inovatif dan teknologi terdepan dari Korea, kami menghadirkan solusi konkret untuk tantangan global—dari energi terbarukan hingga teknologi hijau, dari kesehatan hingga pertanian pintar.
            </p>

            <div className={styles.highlightBox}>
              <p className={styles.highlight}>
                💡 <strong>Visi kami:</strong> Memajukan Indonesia melalui kolaborasi riset terdepan yang berkelanjutan, inovatif, dan berdampak bagi masyarakat global.
              </p>
            </div>

            <p className={styles.closingText}>
              Bergabunglah dengan ratusan peneliti yang telah mempercayai APIK sebagai platform untuk mengembangkan penelitian mereka. Bersama, kita ciptakan masa depan yang lebih cerah untuk generasi mendatang.
              Kunjungi{' '}
              <a href="https://forumapik.org" target="_blank" rel="noopener noreferrer">
                website resmi APIK
              </a>{' '}
              untuk melihat program dan pembaruan terbaru.
            </p>
          </div>
        </div>

        <div className={styles.imageContent}>
          <div className={styles.imageWrapper}>
            <img 
              src="/img/Nurhadi-APIK.jpg" 
              alt="APIK" 
              className={styles.image}
            />
            <div className={styles.imageBadge}>
              <span className={styles.badgeText}>Ketua APIK 2024-2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
