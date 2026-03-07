import React from 'react';
import Layout from '@theme/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import styles from '../tentang/styles.module.css';

export default function Organisasi() {
  return (
    <Layout
      title="Organisasi"
      description="Struktur organisasi APIK">
      <main className={styles.aboutPage}>
        <div className="container">
          <Breadcrumb items={[
            { label: 'Organisasi' }
          ]} />
          <div className={styles.aboutContent}>
          <h1>Struktur Organisasi APIK</h1>
          
          <section id="struktur-organisasi" className={styles.section}>
            <h2>Dewan Pengurus Harian</h2>
            <p>
              Asosiasi Peneliti Indonesia di Korea (APIK) dipimpin oleh Dewan Pengurus Harian 
              yang bertanggung jawab atas operasional dan strategi organisasi.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Struktur Kepengurusan</h2>
            <div className={styles.orgStructure}>
              <div className={styles.orgBox}>
                <h3>Ketua Umum</h3>
                <p>Memimpin organisasi secara keseluruhan</p>
              </div>
              
              <div className={styles.orgBox}>
                <h3>Wakil Ketua I & II</h3>
                <p>Mendukung Ketua dalam menjalankan program</p>
              </div>
              
              <div className={styles.orgBox}>
                <h3>Sekretaris Jenderal</h3>
                <p>Mengelola administrasi dan dokumentasi</p>
              </div>
              
              <div className={styles.orgBox}>
                <h3>Bendahara</h3>
                <p>Mengelola keuangan organisasi</p>
              </div>
            </div>
          </section>

          <section id="direktorat" className={styles.section}>
            <h2>Direktorat</h2>
            <div className={styles.directorateList}>
              <div id="direktorat-pendidikan-dan-keahlian" className={styles.directorateCard}>
                <h3>📚 Direktorat Pendidikan dan Keahlian</h3>
                <p>Fokus pada pengembangan kapasitas anggota melalui workshop, pelatihan, dan program mentoring.</p>
              </div>
              
              <div id="direktorat-riset-dan-inovasi" className={styles.directorateCard}>
                <h3>🔬 Direktorat Riset dan Inovasi</h3>
                <p>Mendorong kolaborasi riset dan inovasi dengan fasilitasi research collaboration dan publikasi.</p>
              </div>
              
              <div id="direktorat-digital-dan-media" className={styles.directorateCard}>
                <h3>💻 Direktorat Digital dan Media</h3>
                <p>Mengelola komunikasi dan branding APIK melalui website, social media, dan publikasi digital.</p>
              </div>
              
              <div id="direktorat-kerjasama" className={styles.directorateCard}>
                <h3>🤝 Direktorat Kerjasama</h3>
                <p>Membangun partnership dengan institusi pendidikan, industri, pemerintah, dan organisasi peneliti.</p>
              </div>
              
              <div id="direktorat-kelembagaan" className={styles.directorateCard}>
                <h3>🏢 Direktorat Kelembagaan</h3>
                <p>Mengelola organisasi internal, membership management, dan organizational development.</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Periode Kepengurusan 2024-2026</h2>
            <p>
              Tim pengurus periode 2024-2026 terdiri dari para peneliti Indonesia di Korea 
              dengan latar belakang akademis yang kuat dari berbagai universitas ternama di Korea Selatan.
            </p>
            <p>
              Untuk informasi lengkap tentang pengurus, silakan kunjungi halaman 
              <a href="/tentang/pengurus"> Pengurus APIK</a>.
            </p>
          </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
