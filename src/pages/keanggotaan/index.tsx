import React from 'react';
import Layout from '@theme/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import styles from '../tentang/styles.module.css';

export default function Keanggotaan() {
  return (
    <Layout
      title="Keanggotaan APIK"
      description="Informasi keanggotaan APIK">
      <main className={styles.aboutPage}>
        <div className="container">
          <Breadcrumb items={[
            { label: 'Keanggotaan' }
          ]} />
          <div className={styles.aboutContent}>
          <h1>Keanggotaan APIK</h1>
          
          <section id="siapa-yang-bisa-bergabung" className={styles.section}>
            <h2>Siapa yang Bisa Bergabung?</h2>
            <p>
              Keanggotaan APIK terbuka untuk seluruh peneliti Indonesia di Korea, termasuk:
            </p>
            <ul>
              <li>Mahasiswa S2 (Master) di universitas Korea</li>
              <li>Mahasiswa S3 (Doktor) di universitas Korea</li>
              <li>Post-doctoral researchers</li>
              <li>Peneliti di institusi riset Korea</li>
              <li>Alumni program studi di Korea yang masih aktif dalam riset</li>
            </ul>
          </section>

          <section id="manfaat-menjadi-anggota" className={styles.section}>
            <h2>Manfaat Menjadi Anggota</h2>
            <div className={styles.benefitsList}>
              <div className={styles.benefitCard}>
                <h3>🌐 Network</h3>
                <p>Akses ke network peneliti Indonesia di Korea dari berbagai bidang keilmuan</p>
              </div>
              
              <div className={styles.benefitCard}>
                <h3>📚 Informasi</h3>
                <p>Update informasi beasiswa, funding opportunities, dan program riset</p>
              </div>
              
              <div className={styles.benefitCard}>
                <h3>🎓 Pelatihan</h3>
                <p>Akses gratis ke workshops, seminar, dan training yang diselenggarakan APIK</p>
              </div>
              
              <div className={styles.benefitCard}>
                <h3>🔬 Kolaborasi</h3>
                <p>Platform untuk showcase riset dan membangun kolaborasi</p>
              </div>
              
              <div className={styles.benefitCard}>
                <h3>💼 Karir</h3>
                <p>Career guidance, mentoring dari senior researchers, dan job opportunities</p>
              </div>
              
              <div className={styles.benefitCard}>
                <h3>👥 Komunitas</h3>
                <p>Community support dan gathering dengan sesama peneliti Indonesia</p>
              </div>
            </div>
          </section>

          <section className={styles.section} id="proses-pendaftaran">
            <h2>Proses Pendaftaran</h2>
            <div className={styles.processList}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <h3>Kunjungi Website</h3>
                  <p>Buka website resmi APIK di forumapik.org</p>
                </div>
              </div>
              
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h3>Isi Formulir</h3>
                  <p>Lengkapi formulir pendaftaran online dengan data diri dan informasi akademik</p>
                </div>
              </div>
              
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h3>Submit Dokumen</h3>
                  <p>Upload dokumen yang diperlukan (KTP, bukti studi/riset di Korea)</p>
                </div>
              </div>
              
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>4</div>
                <div className={styles.stepContent}>
                  <h3>Verifikasi</h3>
                  <p>Tim APIK akan memverifikasi data Anda (1-3 hari kerja)</p>
                </div>
              </div>
              
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>5</div>
                <div className={styles.stepContent}>
                  <h3>Konfirmasi</h3>
                  <p>Terima email konfirmasi dan akses ke platform anggota APIK</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section} id="faq">
            <h2>Pertanyaan yang Sering Diajukan (FAQ)</h2>
            
            <div className={styles.faqItem}>
              <h3>Apakah ada biaya keanggotaan?</h3>
              <p>
                Saat ini keanggotaan APIK bersifat gratis. Namun, untuk event atau program tertentu 
                mungkin ada kontribusi biaya operasional.
              </p>
            </div>
            
            <div className={styles.faqItem}>
              <h3>Berapa lama proses verifikasi?</h3>
              <p>
                Proses verifikasi biasanya memakan waktu 1-3 hari kerja setelah Anda mengirimkan 
                semua dokumen yang diperlukan.
              </p>
            </div>
            
            <div className={styles.faqItem}>
              <h3>Apakah harus berada di Korea untuk menjadi anggota?</h3>
              <p>
                Ya, anggota aktif adalah mereka yang sedang menempuh studi atau melakukan riset di Korea. 
                Namun, alumni dapat tetap terhubung sebagai anggota alumni.
              </p>
            </div>
            
            <div className={styles.faqItem}>
              <h3>Bagaimana cara berkontribusi di APIK?</h3>
              <p>
                Anggota dapat berkontribusi dengan berbagai cara: menjadi panitia event, 
                menjadi pembicara di seminar, menulis artikel, atau aktif di research clusters.
              </p>
            </div>
            
            <div className={styles.faqItem}>
              <h3>Apakah bisa bergabung dari universitas mana saja?</h3>
              <p>
                Ya! APIK menerima anggota dari seluruh universitas dan institusi riset di Korea Selatan.
              </p>
            </div>
          </section>

          <section id="hubungi-kami" className={styles.section}>
            <h2>Hubungi Kami</h2>
            <p>
              Untuk pertanyaan lebih lanjut tentang keanggotaan, silakan hubungi kami melalui:
            </p>
            <ul>
              <li>Email: info@forumapik.org</li>
              <li>Instagram: @forumapik</li>
              <li>Facebook: Forum APIK</li>
            </ul>
          </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
