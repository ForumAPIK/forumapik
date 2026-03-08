import React from 'react';
import Layout from '@theme/Layout';
import Breadcrumb from '@site/src/components/Breadcrumb';
import styles from './styles.module.css';

export default function Pengurus20202022() {
  return (
    <Layout
      title="Pengurus APIK 2020-2022"
      description="Arsip kepengurusan APIK periode 2020-2022">
      <main className={styles.aboutPage}>
        <div className="container">
          <Breadcrumb
            items={[
              {label: 'Tentang', path: '/tentang/visi-misi'},
              {label: 'Sejarah', path: '/tentang/sejarah'},
              {label: 'Pengurus 2020-2022'},
            ]}
          />
          <div className={styles.aboutContent}>
            <h1>Pengurus APIK 2020-2022</h1>

            <section className={styles.section}>
              <h2>Arsip Kepengurusan Periode Pertama</h2>
              <p>
                Halaman ini merupakan arsip kepengurusan APIK periode 2020-2022.
                Data rinci pengurus sedang ditata ulang dan akan diperbarui secara bertahap.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Fokus Periode</h2>
              <ul>
                <li>Pembentukan struktur organisasi inti APIK.</li>
                <li>Inisiasi klaster-klaster riset awal.</li>
                <li>Penguatan komunitas peneliti Indonesia di Korea.</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
