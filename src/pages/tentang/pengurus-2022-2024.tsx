import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Breadcrumb from '@site/src/components/Breadcrumb';
import styles from './styles.module.css';

export default function Pengurus20222024() {
  return (
    <Layout
      title="Pengurus APIK 2022-2024"
      description="Arsip kepengurusan APIK periode 2022-2024">
      <main className={styles.aboutPage}>
        <div className="container">
          <Breadcrumb
            items={[
              {label: 'Tentang', path: '/tentang/visi-misi'},
              {label: 'Sejarah', path: '/tentang/sejarah'},
              {label: 'Pengurus 2022-2024'},
            ]}
          />
          <div className={styles.aboutContent}>
            <h1>Pengurus APIK 2022-2024</h1>

            <section className={styles.section}>
              <h2>Arsip Kepengurusan Periode Kedua</h2>
              <p>
                Halaman ini merupakan arsip kepengurusan APIK periode 2022-2024.
                Periode ini ditandai dengan perluasan jaringan kolaborasi, peningkatan kualitas 
                kegiatan, dan penguatan hubungan dengan institusi riset di Indonesia dan Korea.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Pencapaian Periode 2022-2024</h2>
              <ul>
                <li>Perluasan jaringan kolaborasi dengan institusi riset strategis di Indonesia dan Korea.</li>
                <li>Peningkatan kualitas dan frekuensi kegiatan ilmiah (webinar, seminar, workshop).</li>
                <li>Penguatan kerjasama dengan KBRI Seoul, Atdikbud, dan mitra strategis lainnya.</li>
                <li>Ekspansi dan pengembangan 14 klaster riset APIK.</li>
                <li>Peningkatan keterlibatan anggota dalam berbagai kegiatan organisasi.</li>
                <li>Perkembangan infrastruktur administratif dan komunikasi organisasi.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>Kontak Arsip</h2>
              <p>
                Untuk informasi lebih lanjut mengenai kepengurusan periode 2022-2024, 
                silakan hubungi kami:
              </p>
              <ul>
                <li>Email: <a href="mailto:info@forumapik.org">info@forumapik.org</a></li>
                <li>Website: <a href="https://forumapik.org" target="_blank" rel="noopener noreferrer">forumapik.org</a></li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>Navigasi Arsip Pengurus</h2>
              <div className={styles.archiveLinks}>
                <Link to="/tentang/pengurus-2020-2022" className={styles.archiveLink}>
                  ← Pengurus 2020-2022
                </Link>
                <Link to="/tentang/pengurus-2024-2026" className={styles.archiveLink}>
                  Pengurus 2024-2026 →
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
