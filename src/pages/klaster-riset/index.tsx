import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import {researchClusters} from '@site/src/data/researchClusters';
import styles from './styles.module.css';

export default function KlasterRiset(): React.ReactElement {
  return (
    <Layout
      title="Klaster Riset"
      description="Daftar klaster riset APIK untuk kolaborasi peneliti Indonesia di Korea.">
      <main className={styles.page}>
        <div className="container">
          <Breadcrumb items={[{label: 'Klaster Riset'}]} />

          <header className={styles.header}>
            <h1>Klaster Riset APIK</h1>
            <p>
              APIK menghubungkan peneliti lintas bidang untuk mendorong kolaborasi,
              publikasi, dan hilirisasi inovasi. Pilih klaster untuk membuka halaman
              detail masing-masing bidang riset.
            </p>
          </header>

          <section className={styles.grid} aria-label="Daftar klaster riset APIK">
            {researchClusters.map((cluster) => (
              <article
                key={cluster.id}
                className={styles.card}
                style={{'--cluster-color': cluster.color} as React.CSSProperties}>
                <div className={styles.cardTop}>
                  <span className={styles.badge}>{String(cluster.id).padStart(2, '0')}</span>
                  <h2>
                    <span className={styles.icon} aria-hidden="true">
                      {cluster.icon}
                    </span>
                    {cluster.title}
                  </h2>
                </div>

                <p className={styles.description}>{cluster.shortDescription}</p>

                <div className={styles.columns}>
                  <div>
                    <h3>Fokus Utama</h3>
                    <ul>
                      {cluster.focus.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3>Peluang Kolaborasi</h3>
                    <ul>
                      {cluster.collaboration.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={styles.cardAction}>
                  <Link className="button button--primary" to={`/klaster-riset/${cluster.slug}`}>
                    Buka Halaman Klaster
                  </Link>
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>
    </Layout>
  );
}
