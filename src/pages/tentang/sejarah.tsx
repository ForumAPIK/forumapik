import React from 'react';
import Layout from '@theme/Layout';
import Breadcrumb from '@site/src/components/Breadcrumb';
import styles from './styles.module.css';

export default function History() {
  return (
    <Layout
      title="Sejarah"
      description="Sejarah Asosiasi Peneliti Indonesia Korea">
      <main className={styles.aboutPage}>
        <div className="container">
          <Breadcrumb items={[
            { label: 'Tentang', path: '/tentang/visi-misi' },
            { label: 'Sejarah' }
          ]} />
          <div className={styles.aboutContent}>
            <h1>Sejarah APIK</h1>
            
            <section className={styles.section}>
              <h2>Latar Belakang Pendirian</h2>
              <p>
                Sejarah terbentuknya APIK dimulai pada <strong>27 Oktober 2019</strong> dengan 
                pertemuan awal yang diinisiasi oleh KBRI Seoul bersama beberapa perintis APIK. 
                Pertemuan ini menjadi tonggak awal bagi para peneliti Indonesia di Korea untuk 
                membangun sebuah wadah kolaborasi yang kuat dan berkelanjutan.
              </p>
              <p>
                Inisiasi ini diteruskan dengan pertemuan para perintis APIK dengan Presiden RI, 
                Bapak Joko Widodo, di Busan pada <strong>24-25 November 2019</strong>. Pertemuan 
                bersejarah ini menunjukkan dukungan tinggi dari pemerintah Indonesia terhadap 
                komunitas peneliti Indonesia di luar negeri.
              </p>
              <p>
                Akhirnya, pada <strong>21 Desember 2019</strong>, APIK resmi didirikan di KBRI Seoul. 
                Pendirian ini menandai era baru bagi peneliti Indonesia di Korea untuk berkontribusi 
                lebih besar bagi kemajuan ilmu pengetahuan dan teknologi Indonesia.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Timeline Perkembangan APIK</h2>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineYear}>27 Oktober 2019</div>
                  <div className={styles.timelineContent}>
                    <h3>Pertemuan Awal</h3>
                    <p>
                      Pertemuan pertama diinisiasi oleh KBRI Seoul bersama beberapa perintis APIK. 
                      Para peneliti Indonesia di Korea berkumpul untuk mendiskusikan pembentukan 
                      organisasi yang akan menjadi wadah kolaborasi riset dan inovasi.
                    </p>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineYear}>24-25 November 2019</div>
                  <div className={styles.timelineContent}>
                    <h3>Pertemuan dengan Presiden RI</h3>
                    <p>
                      Para perintis APIK bertemu dengan Presiden Republik Indonesia, Bapak Joko Widodo, 
                      di Busan, Korea Selatan. Pertemuan ini mengokohkan komitmen pemerintah Indonesia 
                      untuk mendukung peneliti Indonesia di luar negeri.
                    </p>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineYear}>21 Desember 2019</div>
                  <div className={styles.timelineContent}>
                    <h3>Pendirian Resmi APIK</h3>
                    <p>
                      Asosiasi Peneliti Indonesia Korea (APIK) resmi didirikan di KBRI Seoul. 
                      Pendirian ini menjadi tonggak bersejarah bagi komunitas peneliti Indonesia 
                      di Korea Selatan.
                    </p>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineYear}>2020-2022</div>
                  <div className={styles.timelineContent}>
                    <h3>Periode Kepengurusan Pertama</h3>
                    <p>
                      APIK menjalani periode kepengurusan pertama dengan fokus membangun struktur 
                      organisasi yang solid, membentuk klaster-klaster riset, dan menyelenggarakan 
                      berbagai kegiatan ilmiah dan networking.
                    </p>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineYear}>2022-2024</div>
                  <div className={styles.timelineContent}>
                    <h3>Periode Kepengurusan Kedua</h3>
                    <p>
                      Periode ini ditandai dengan perluasan jaringan kolaborasi, peningkatan kualitas 
                      kegiatan, dan penguatan hubungan dengan institusi riset di Indonesia dan Korea. 
                      APIK juga aktif menyelenggarakan webinar, seminar, dan workshop.
                    </p>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineYear}>2024-2026</div>
                  <div className={styles.timelineContent}>
                    <h3>Periode Kepengurusan Ketiga (Saat Ini)</h3>
                    <p>
                      Periode kepengurusan saat ini dipimpin oleh Nurhadi Sukma Waluyo, Ph.D. sebagai 
                      Ketua Umum. APIK terus berkomitmen untuk menjadi organisasi terdepan yang mendukung 
                      kemajuan ilmu pengetahuan dan riset di Indonesia melalui kolaborasi berkelas dunia.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Pencapaian dan Kontribusi</h2>
              <ul>
                <li>Menghubungkan ratusan peneliti Indonesia di Korea dari berbagai disiplin ilmu</li>
                <li>Membentuk 14 klaster riset yang mencakup berbagai bidang keilmuan strategis</li>
                <li>Menyelenggarakan puluhan seminar, webinar, dan workshop berkualitas tinggi</li>
                <li>Membangun kerjasama dengan KBRI Seoul, Atdikbud, dan berbagai institusi</li>
                <li>Memfasilitasi kolaborasi riset antara peneliti Indonesia dan Korea</li>
                <li>Memberikan platform bagi anggota untuk berbagi pengetahuan dan pengalaman</li>
                <li>Berkontribusi dalam diplomasi ilmiah Indonesia-Korea</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>Visi ke Depan</h2>
              <p>
                APIK terus berkembang dan beradaptasi dengan dinamika riset global. Dengan fondasi 
                yang kuat sejak 2019, APIK berkomitmen untuk terus menjadi jembatan kolaborasi 
                riset Indonesia-Korea, mendukung pengembangan SDM peneliti Indonesia, dan berkontribusi 
                nyata bagi kemajuan ilmu pengetahuan dan teknologi Indonesia.
              </p>
              <p>
                Melalui berbagai program dan kegiatan yang berkelanjutan, APIK bertekad untuk 
                memperkuat posisi Indonesia di kancah riset internasional dan membangun ekosistem 
                riset yang kolaboratif dan inovatif.
              </p>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
