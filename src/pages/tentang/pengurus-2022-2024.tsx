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
               <h3>Dewan Pengarah</h3>
              <div className={styles.advisoryBoard}>
                <div className={styles.advisorCard}>
                  <h4>Duta Besar RI untuk Korea 2017-2021</h4>
                  <p className={styles.advisorName}>H.E. Mr. Umar Hadi</p>
                </div>
                <div className={styles.advisorCard}>
                  <h4>Menristek RI 2019-2021</h4>
                  <p className={styles.advisorName}>Prof. Bambang Brodjonegoro</p>
                </div>
                <div className={styles.advisorCard}>
                  <h4>Menko Perekonomian RI</h4>
                  <p className={styles.advisorName}>Dr. (H.C.) Ir. Airlangga Hartarto, M.B.A., M.M.T., IPU</p>
                </div>
              </div>

              <h3 style={{marginTop: '2rem'}}>Pengurus Harian APIK 2022-2024</h3>
              <div className={styles.leadershipTable}>
                <div className={styles.leadershipRow}>
                  <span className={styles.position}>Ketua Umum</span>
                  <span className={styles.name}>Thomhert Suprapto Siadari (Principal AI Researcher, DDH Inc.)</span>
                </div>
                <div className={styles.leadershipRow}>
                  <span className={styles.position}>Wakil Ketua I</span>
                  <span className={styles.name}>Bernardo Nugroho Yahya (Full Professor, Hankuk University of Foreign Studies)</span>
                </div>
                <div className={styles.leadershipRow}>
                  <span className={styles.position}>Wakil Ketua II</span>
                  <span className={styles.name}>Adam Febrianto Nugraha (Dosen, Universitas Indonesia)</span>
                </div>
                <div className={styles.leadershipRow}>
                  <span className={styles.position}>Sekretaris Bendahara</span>
                  <span className={styles.name}>Vanna Chrismas Silalahi (S3, Chungnam National University)</span>
                </div>
              </div>

              <h3 style={{marginTop: '2rem'}}>Direktorat</h3>
              <div className={styles.directorateList}>
                <div className={styles.directorateCard}>
                  <h4>Direktorat Kelembagaan</h4>
                  <p><strong>Direktur:</strong> Dr. Ryza Aditya Priatama (Postdoctoral, Korea Institute of Fusion Energy (KFE))</p>
                  <p><strong>Anggota:</strong></p>
                  <ul>
                    <li>Nurhadi Sukma Waluyo</li>
                    <li>Mohammad Rifqi Ghiffary</li>
                    <li>Anto Purwanto</li>
                    <li>Luthfiyyah Mutsnaini</li>
                  </ul>
                </div>

                <div className={styles.directorateCard}>
                  <h4>Direktorat Pendidikan dan Keahlian</h4>
                  <p><strong>Direktur:</strong> Ivan Kristianto Singgih, PhD. (Postdoctoral, Korea University)</p>
                  <p><strong>Anggota:</strong></p>
                  <ul>
                    <li>Ahmad Yusuf Ismail</li>
                    <li>Arya Bagus Boedi Iswanto</li>
                    <li>Veterina Nosadila Riaventin</li>
                    <li>Pranda Mulya Putra</li>
                    <li>Hartono Bancong</li>
                    <li>Irfan Zidni</li>
                  </ul>
                </div>

                <div className={styles.directorateCard}>
                  <h4>Direktorat Riset dan Inovasi</h4>
                  <p><strong>Direktur:</strong> Dr. Muhammad Hilmy Alfaruqi (Postdoctoral, Cheonnam National University)</p>
                  <p><strong>Anggota:</strong></p>
                  <ul>
                    <li>Ahmad Sugiana</li>
                    <li>Rannissa Puspita Jayanti</li>
                    <li>Tirta Rona Mayangsari</li>
                    <li>Ikhwan Nur Rahman</li>
                    <li>Ratih Kusuma Wardani</li>
                    <li>Andi Febrisiantosa</li>
                    <li>Jeki Radius</li>
                    <li>Hendrik Santosa</li>
                    <li>Indra Hartarto Tambunan</li>
                    <li>Kelvian Tirtakusuma Mularso</li>
                    <li>Fuad Azminuddin</li>
                    <li>Ardie Septian</li>
                    <li>Rohib</li>
                  </ul>
                </div>

                <div className={styles.directorateCard}>
                  <h4>Direktorat Digital dan Media</h4>
                  <p><strong>Direktur:</strong> Handityo Aulia Putra, PhD (Assistant Professor, Keimyung University)</p>
                  <p><strong>Anggota:</strong></p>
                  <ul>
                    <li>Heri Akhmadi</li>
                    <li>Ahmad Zulfikri Taning</li>
                    <li>Reza Asriandi Ekaputra</li>
                    <li>Akhmad Irhas Robby</li>
                    <li>Bangun Indrakusumo Radityo Harsritanto</li>
                    <li>Ismail Marzuki</li>
                    <li>Widyanto Nugroho</li>
                  </ul>
                </div>

                <div className={styles.directorateCard}>
                  <h4>Direktorat Kerjasama</h4>
                  <p><strong>Direktur:</strong> Romel Hidayat, PhD. (Assistant Professor, Sejong University)</p>
                  <p><strong>Anggota:</strong></p>
                  <ul>
                    <li>Muhamad Erza Aminanto</li>
                    <li>Hendrik</li>
                    <li>Achmad Yanuar Maulana</li>
                    <li>Aji Teguh Prihatno</li>
                  </ul>
                </div>
              </div>

              
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
