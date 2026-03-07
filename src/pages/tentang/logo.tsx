import React from 'react';
import Layout from '@theme/Layout';
import Breadcrumb from '@site/src/components/Breadcrumb';
import styles from './styles.module.css';

export default function Logo() {
  return (
    <Layout
      title="Logo"
      description="Logo dan Identitas Visual Asosiasi Peneliti Indonesia Korea">
      <main className={styles.aboutPage}>
        <div className="container">
          <Breadcrumb items={[
            { label: 'Tentang', path: '/tentang/visi-misi' },
            { label: 'Logo' }
          ]} />
          <div className={styles.aboutContent}>
            <h1>Logo APIK</h1>
            
            <section className={styles.section}>
              <h2>Identitas Visual</h2>
              <div className={styles.logoContainer}>
                <img 
                  src="/img/about-logo.png" 
                  alt="Logo APIK" 
                  className={styles.logoImage}
                />
              </div>
            </section>

            <section className={styles.section}>
              <h2>Deskripsi Logo</h2>
              <p>
                Dasar geometri persegi dengan <em>value</em> warna merah + <em>shading</em> putih 
                dan warna biru + <em>shading</em> abu dalam kombinasi warna gelap dan terang yang 
                menggambarkan pertalian gagasan antara peneliti dalam asosiasi ini, baik antara 
                peneliti-peneliti Indonesia yang masih berdomisili di Korea Selatan maupun di luar 
                Korea Selatan.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Elemen Tipografi</h2>
              
              <h3>Tema Font: Basic – Sans Serif</h3>
              
              <div className={styles.typographyBox}>
                <h4>Abreviasi: <strong>A P I K</strong></h4>
                <ul>
                  <li><strong>Jenis font:</strong> Quantify</li>
                  <li><strong>Warna merah pada huruf "I":</strong> Menekankan bahwa peneliti berkebangsaan Indonesia</li>
                </ul>
              </div>

              <div className={styles.typographyBox}>
                <h4>"Asosiasi Peneliti Indonesia di Korea"</h4>
                <ul>
                  <li><strong>Jenis font:</strong> Acherus Grotesque Light</li>
                  <li><strong>Keterangan:</strong> Kepanjangan dari "<strong>A P I K</strong>"</li>
                </ul>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Filosofi Logo</h2>
              <ul>
                <li>
                  <strong>Geometri Persegi:</strong> Melambangkan fondasi yang kokoh dan struktur 
                  organisasi yang solid
                </li>
                <li>
                  <strong>Warna Merah dan Biru:</strong> Kombinasi warna Indonesia (merah-putih) 
                  dan Korea (biru), menggambarkan jembatan kolaborasi antara dua negara
                </li>
                <li>
                  <strong>Shading:</strong> Gradasi warna menunjukkan keragaman dan dinamika 
                  peneliti dari berbagai latar belakang
                </li>
                <li>
                  <strong>Huruf "I" Merah:</strong> Penekanan pada identitas Indonesia sebagai 
                  inti dari asosiasi
                </li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>Panduan Penggunaan</h2>
              <ul>
                <li>Logo harus digunakan dengan proporsi yang tepat tanpa distorsi</li>
                <li>Jaga ruang kosong minimal di sekitar logo</li>
                <li>Gunakan versi logo yang sesuai dengan latar belakang (terang/gelap)</li>
                <li>Hindari mengubah warna logo tanpa izin</li>
                <li>Jangan mengubah tipografi atau susunan elemen logo</li>
                <li>Pastikan ukuran logo cukup besar untuk terbaca dengan jelas</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>Download Logo</h2>
              <p>
                Untuk keperluan resmi, silakan hubungi Direktorat Digital dan Media APIK 
                untuk mendapatkan file logo dalam format yang sesuai (PNG, SVG, atau vector).
              </p>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
