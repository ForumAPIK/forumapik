import React from 'react';
import Layout from '@theme/Layout';
import Breadcrumb from '@site/src/components/Breadcrumb';
import styles from './styles.module.css';

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
                <div className={styles.leaderCard}>
                  <h3>Ketua Umum</h3>
                  <p className={styles.name}>Nurhadi Sukma Waluyo</p>
                  <p className={styles.role}>Ph.D.</p>
                </div>

                <div className={styles.leaderCard}>
                  <h3>Wakil Ketua I</h3>
                  <p className={styles.name}>Vanna Chrismas Silalahi</p>
                  <p className={styles.role}>Ph.D.</p>
                </div>

                <div className={styles.leaderCard}>
                  <h3>Wakil Ketua II</h3>
                  <p className={styles.name}>Romel Hidayat</p>
                  <p className={styles.role}>Ph.D.</p>
                </div>

                <div className={styles.leaderCard}>
                  <h3>Wakil Ketua III</h3>
                  <p className={styles.name}>Agus Ismail</p>
                  <p className={styles.role}>Ph.D.</p>
                </div>

                <div className={styles.leaderCard}>
                  <h3>Sekretaris</h3>
                  <p className={styles.name}>Heri Akhmadi</p>
                  <p className={styles.role}>Ph.D.</p>
                </div>

                <div className={styles.leaderCard}>
                  <h3>Bendahara</h3>
                  <p className={styles.name}>Ancilla Katherina Kustedjo</p>
                  <p className={styles.role}>Researcher</p>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Direktorat</h2>
              <p>
                APIK memiliki lima direktorat yang bertugas mengelola berbagai aspek 
                kegiatan dan program organisasi.
              </p>
              
              <div className={styles.leadershipGrid}>
                <div className={styles.leaderCard}>
                  <h3>Direktorat Kelembagaan</h3>
                  <p className={styles.name}>Byantara Darsan Purusatama</p>
                  <p className={styles.role}>Director</p>
                </div>

                <div className={styles.leaderCard}>
                  <h3>Direktorat Pendidikan dan Keahlian</h3>
                  <p className={styles.name}>Iyan Subiyanto</p>
                  <p className={styles.role}>Director</p>
                </div>

                <div className={styles.leaderCard}>
                  <h3>Direktorat Riset dan Inovasi</h3>
                  <p className={styles.name}>Syahril Sulaiman</p>
                  <p className={styles.role}>Director</p>
                </div>

                <div className={styles.leaderCard}>
                  <h3>Direktorat Digital dan Media</h3>
                  <p className={styles.name}>Aji Teguh Prihatno</p>
                  <p className={styles.role}>Director</p>
                </div>

                <div className={styles.leaderCard}>
                  <h3>Direktorat Kerjasama</h3>
                  <p className={styles.name}>Reza Asriandi Ekaputra</p>
                  <p className={styles.role}>Director</p>
                </div>
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
