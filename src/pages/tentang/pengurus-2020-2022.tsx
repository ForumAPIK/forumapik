import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
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
              <h2>Struktur Kepengurusan APIK Masa Jabatan 2020-2022</h2>

              <h3 style={{marginTop: '2rem'}}>Pimpinan</h3>
              <div className={styles.leadershipTable}>
                <div className={styles.leadershipRow}>
                  <span className={styles.position}>Ketua Umum</span>
                  <span className={styles.name}>Gregorius Rionugroho Harvianto</span>
                </div>
                <div className={styles.leadershipRow}>
                  <span className={styles.position}>Wakil Ketua 1</span>
                  <span className={styles.name}>Zico Alaia Akbar Junior</span>
                </div>
                <div className={styles.leadershipRow}>
                  <span className={styles.position}>Wakil Ketua 2</span>
                  <span className={styles.name}>Aldias Bahatmaka</span>
                </div>
                <div className={styles.leadershipRow}>
                  <span className={styles.position}>Sekretaris</span>
                  <span className={styles.name}>Vina Sari Yosephine</span>
                </div>
                <div className={styles.leadershipRow}>
                  <span className={styles.position}>Bendahara</span>
                  <span className={styles.name}>Teguh Muttaqie</span>
                </div>
              </div>

              <h3 style={{marginTop: '2rem'}}>Komite dan Staf</h3>
              <div className={styles.committeesGrid}>
                <div className={styles.committee}>
                  <h4>Komite Pendidikan dan Keahlian</h4>
                  <p><strong>Ketua:</strong> Ryza Aditya Priatama</p>
                  <p><strong>Staf:</strong></p>
                  <ul>
                    <li>Wahyu Wiratama</li>
                    <li>Margareth Theresia</li>
                    <li>Rizki Insyani</li>
                    <li>Hafizh Prihtiadi</li>
                    <li>Bayu Adhi Tama</li>
                    <li>Yus Donald Chaniago</li>
                    <li>Ayodya Pradhipta Tenggara</li>
                    <li>Johan Sukweenadhi</li>
                    <li>Ade Yamindago</li>
                  </ul>
                </div>

                <div className={styles.committee}>
                  <h4>Komite Media dan Komunikasi</h4>
                  <p><strong>Ketua:</strong> Thomhert Suprapto Siadari</p>
                  <p><strong>Staf:</strong></p>
                  <ul>
                    <li>Gabriel Tirtawijaya</li>
                    <li>Andhika Prawira</li>
                    <li>Handityo Aulia Putra</li>
                    <li>Hani Ramadhan</li>
                    <li>Shafrizal Rasyid Atriardi</li>
                  </ul>
                </div>

                <div className={styles.committee}>
                  <h4>Komite Keanggotaan</h4>
                  <p><strong>Ketua:</strong> Havid Aqoma Khoiruddin</p>
                  <p><strong>Staf:</strong></p>
                  <ul>
                    <li>Nurhadi Sukma Waluyo</li>
                    <li>Rando Tungga Dewa</li>
                    <li>Adji Baskoro Dwi Nugroho</li>
                    <li>Aditya Nurmalita Pervitasari</li>
                  </ul>
                </div>

                <div className={styles.committee}>
                  <h4>Komite Hubungan Luar</h4>
                  <p><strong>Ketua:</strong> Dianta Ginting</p>
                  <p><strong>Staf:</strong></p>
                  <ul>
                    <li>Romel Hidayat</li>
                    <li>Muhammad Sulaiman</li>
                    <li>Achmad Yanuar Maulana</li>
                    <li>Theresia Ratih</li>
                    <li>Shabrina Sri Riswati</li>
                    <li>Endang Hidayat</li>
                    <li>Irhans</li>
                  </ul>
                </div>

                <div className={styles.committee}>
                  <h4>Komite Kajian Strategis</h4>
                  <p><strong>Ketua:</strong> Rohib</p>
                  <p><strong>Staf:</strong></p>
                  <ul>
                    <li>Kurniawan</li>
                    <li>Mohamad Syahadi</li>
                    <li>Rizcky Tamarany</li>
                    <li>Agung Agus Budiman</li>
                  </ul>
                </div>
              </div>

              <h3 style={{marginTop: '2rem'}}>Koordinator Klaster Riset</h3>
              <div className={styles.clusterGrid}>
                <div className={styles.clusterItem}>
                  <p><strong>Teknologi Pangan, Pertanian, dan Bioteknologi</strong></p>
                  <p>Muhammad Cahyadi</p>
                </div>
                <div className={styles.clusterItem}>
                  <p><strong>Energi dan Sumber Daya Mineral</strong></p>
                  <p>Zulfikar Yurnaidi</p>
                </div>
                <div className={styles.clusterItem}>
                  <p><strong>Baterai, Elektrokimia, Sel Surya</strong></p>
                  <p>Adam F. Nugraha</p>
                </div>
                <div className={styles.clusterItem}>
                  <p><strong>Kesehatan</strong></p>
                  <p>Aulia Khamas Heikhmakhtiar</p>
                </div>
                <div className={styles.clusterItem}>
                  <p><strong>Teknologi Informasi dan Komunikasi</strong></p>
                  <p>Arida Ferti Syafiandini</p>
                </div>
                <div className={styles.clusterItem}>
                  <p><strong>Elektronika dan Instrumentasi</strong></p>
                  <p>Hafizh Prihtiadi</p>
                </div>
                <div className={styles.clusterItem}>
                  <p><strong>Metalurgi, Material, Nanoteknologi dan Radiasi</strong></p>
                  <p>Rando Tungga Dewa</p>
                </div>
                <div className={styles.clusterItem}>
                  <p><strong>Kebencanaan, Infrastruktur Sipil, Arsitektur dan Tata Kota</strong></p>
                  <p>Gabriel Tirtawijaya</p>
                </div>
                <div className={styles.clusterItem}>
                  <p><strong>Kelautan dan Perikanan</strong></p>
                  <p>Yohana Noradika Maharani</p>
                </div>
                <div className={styles.clusterItem}>
                  <p><strong>Sosial Budaya dan Bahasa</strong></p>
                  <p>Margareth Theresia</p>
                </div>
                <div className={styles.clusterItem}>
                  <p><strong>Ekonomi dan Bisnis</strong></p>
                  <p>Ancilla Katherina Kustedjo</p>
                </div>
                <div className={styles.clusterItem}>
                  <p><strong>Sumber Daya Hayati, Lingkungan dan Kehutanan</strong></p>
                  <p>Ratih Kusuma Wardani</p>
                </div>
                <div className={styles.clusterItem}>
                  <p><strong>Teknologi Industri dan Manufaktur</strong></p>
                  <p>Restu Sejahtera Sihotang</p>
                </div>
                <div className={styles.clusterItem}>
                  <p><strong>Transportasi</strong></p>
                  <p>Ahmad Sugiana</p>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Pencapaian Periode 2020-2022</h2>
              <ul>
                <li>Pembentukan struktur organisasi inti APIK yang kokoh.</li>
                <li>Inisiasi 14 klaster riset di berbagai bidang keilmuan.</li>
                <li>Penguatan komunitas peneliti Indonesia di Korea.</li>
                <li>Memfasilitasi kolaborasi riset antara peneliti Indonesia dan Korea.</li>
                <li>Penyelenggaraan berbagai kegiatan ilmiah dan networking.</li>
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
                <Link to="/tentang/pengurus-2022-2024" className={styles.archiveLink}>
                  Pengurus 2022-2024 →
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
