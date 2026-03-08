import React from 'react';
import Layout from '@theme/Layout';
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
                Informasi pengurus dan dokumentasi kegiatan sedang dilengkapi dan akan
                diperbarui secara berkala.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Fokus Periode</h2>
              <ul>
                <li>Perluasan jaringan kolaborasi riset Indonesia-Korea.</li>
                <li>Peningkatan kualitas webinar, seminar, dan workshop.</li>
                <li>Penguatan kemitraan dengan institusi strategis.</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
