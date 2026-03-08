import React from 'react';
import Layout from '@theme/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import {cooperationTypes, collaborationForms, currentPartnerships} from '@site/src/data/cooperation';
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
              {cooperationTypes.map((type) => (
                <div key={type.title} className={styles.cooperationType}>
                  <h3>{type.emoji} {type.title}</h3>
                  <ul>
                    {type.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2>Bentuk Kolaborasi</h2>
            
            <div className={styles.collaborationForms}>
              {collaborationForms.map((form) => (
                <div key={form.title} className={styles.collabCard}>
                  <h3>{form.emoji} {form.title}</h3>
                  <p>{form.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2>Kerjasama Terkini</h2>
            
            <div className={styles.partnershipList}>
              {currentPartnerships.map((partnership) => (
                <div key={partnership.title} className={styles.partnershipItem}>
                  <h3>{partnership.title}</h3>
                  <p>{partnership.description}</p>
                </div>
              ))}
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
