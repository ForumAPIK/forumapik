import React from 'react';
import Layout from '@theme/Layout';
import Breadcrumb from '@site/src/components/Breadcrumb';
import styles from './styles.module.css';

export default function VisionMission() {
  return (
    <Layout
      title="Visi & Misi"
      description="Visi dan Misi Asosiasi Peneliti Indonesia Korea">
      <main className={styles.aboutPage}>
        <div className="container">
          <Breadcrumb items={[
            { label: 'Tentang', path: '/tentang/visi-misi' },
            { label: 'Visi & Misi' }
          ]} />
          <div className={styles.aboutContent}>
            <h1>Visi & Misi</h1>
            
            <section className={styles.section}>
              <h2>Visi</h2>
              <p>
                Menjadi wadah bagi peneliti Indonesia di Korea untuk berkontribusi dalam pengembangan ilmu pengetahuan 
                dan teknologi serta mempererat hubungan akademik Indonesia-Korea.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Misi</h2>
              <ul>
                <li>Memfasilitasi kolaborasi penelitian antara peneliti Indonesia di Korea</li>
                <li>Meningkatkan kualitas dan kuantitas publikasi ilmiah</li>
                <li>Membangun jaringan akademik Indonesia-Korea yang kuat</li>
                <li>Memberikan dukungan kepada mahasiswa dan peneliti Indonesia di Korea</li>
                <li>Mendorong inovasi dan transfer teknologi antara Indonesia dan Korea</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
