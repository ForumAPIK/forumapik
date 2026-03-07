import React from 'react';
import Layout from '@theme/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import styles from '../tentang/styles.module.css';

export default function Kerjasama() {
  return (
    <Layout
      title="Kerjasama"
      description="Kerjasama dan partnership APIK">
      <main className={styles.aboutPage}>
        <div className="container">
          <Breadcrumb items={[
            { label: 'Kerjasama' }
          ]} />
          <div className={styles.aboutContent}>
          <h1>Kerjasama APIK</h1>
          
          <section className={styles.section}>
            <h2>Mitra Strategis</h2>
            <p>
              APIK menjalin kerjasama dengan berbagai institusi untuk mendukung riset, 
              inovasi, dan pengembangan kapasitas anggota.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Jenis Kerjasama</h2>
            
            <div className={styles.cooperationTypes}>
              <div className={styles.cooperationType}>
                <h3>🏛️ Pemerintah</h3>
                <ul>
                  <li>Kedutaan Besar RI di Seoul (KBRI)</li>
                  <li>Atase Pendidikan dan Kebudayaan (Atdikbud)</li>
                  <li>Kementerian Riset, Teknologi, dan Pendidikan Tinggi RI</li>
                  <li>LPDP dan lembaga beasiswa Indonesia</li>
                </ul>
              </div>
              
              <div className={styles.cooperationType}>
                <h3>🎓 Universitas & Institusi Akademik</h3>
                <ul>
                  <li>Universitas-universitas di Indonesia</li>
                  <li>Universitas-universitas di Korea Selatan</li>
                  <li>Lembaga riset Indonesia (BRIN, LIPI, dll)</li>
                  <li>Research institutes di Korea</li>
                </ul>
              </div>
              
              <div className={styles.cooperationType}>
                <h3>🏭 Industri & Korporasi</h3>
                <ul>
                  <li>Perusahaan teknologi Indonesia dan Korea</li>
                  <li>Start-up ecosystem</li>
                  <li>Industry partners untuk research collaboration</li>
                  <li>Corporate social responsibility programs</li>
                </ul>
              </div>
              
              <div className={styles.cooperationType}>
                <h3>👥 Organisasi & Komunitas</h3>
                <ul>
                  <li>Organisasi peneliti Indonesia di negara lain</li>
                  <li>Komunitas Indonesia di Korea</li>
                  <li>International research associations</li>
                  <li>Alumni networks</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Bentuk Kolaborasi</h2>
            
            <div className={styles.collaborationForms}>
              <div className={styles.collabCard}>
                <h3>🔬 Research Collaboration</h3>
                <p>Joint research projects, publikasi bersama, dan sharing resources</p>
              </div>
              
              <div className={styles.collabCard}>
                <h3>📚 Knowledge Exchange</h3>
                <p>Seminar, workshop, webinar, dan training programs</p>
              </div>
              
              <div className={styles.collabCard}>
                <h3>👨‍🎓 Student Exchange</h3>
                <p>Program pertukaran mahasiswa dan peneliti</p>
              </div>
              
              <div className={styles.collabCard}>
                <h3>💼 Career Development</h3>
                <p>Job fairs, internship programs, dan career mentoring</p>
              </div>
              
              <div className={styles.collabCard}>
                <h3>💰 Funding Support</h3>
                <p>Grant applications, scholarship information, dan funding opportunities</p>
              </div>
              
              <div className={styles.collabCard}>
                <h3>🌏 Cultural Exchange</h3>
                <p>Event budaya, diplomasi ilmiah, dan people-to-people exchange</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Kerjasama Terkini</h2>
            
            <div className={styles.partnershipList}>
              <div className={styles.partnershipItem}>
                <h3>KBRI Seoul & Atdikbud</h3>
                <p>
                  Kerjasama berkelanjutan dalam berbagai kegiatan pendidikan, riset, dan budaya. 
                  Termasuk dukungan untuk event APIK dan fasilitasi hubungan dengan institusi Korea.
                </p>
              </div>
              
              <div className={styles.partnershipItem}>
                <h3>Universitas di Indonesia</h3>
                <p>
                  Kolaborasi riset, seminar bersama, dan program mentoring untuk mahasiswa 
                  yang berencana melanjutkan studi ke Korea.
                </p>
              </div>
              
              <div className={styles.partnershipItem}>
                <h3>Research Institutes Korea</h3>
                <p>
                  Partnership untuk joint research, akses ke fasilitas riset, dan 
                  technology transfer ke Indonesia.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Bermitra dengan APIK</h2>
            <p>
              Kami terbuka untuk kerjasama dengan berbagai pihak yang memiliki visi 
              sejalan dengan APIK dalam memajukan riset dan inovasi Indonesia.
            </p>
            
            <h3>Manfaat Bermitra dengan APIK:</h3>
            <ul>
              <li>Akses ke network peneliti Indonesia di Korea dari berbagai bidang</li>
              <li>Platform untuk recruitment dan talent acquisition</li>
              <li>Kolaborasi riset dengan peneliti berkualitas</li>
              <li>Visibility melalui channel komunikasi APIK</li>
              <li>Corporate social responsibility opportunities</li>
            </ul>
            
            <div className={styles.ctaSection}>
              <h3>Tertarik Bermitra?</h3>
              <p>Hubungi kami untuk mendiskusikan peluang kerjasama:</p>
              <ul>
                <li>Email: partnership@forumapik.org</li>
                <li>Website: forumapik.org</li>
              </ul>
            </div>
          </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
