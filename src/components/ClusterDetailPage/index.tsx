import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Breadcrumb from '@site/src/components/Breadcrumb';
import {
  getResearchClusterBySlug,
  researchClusters,
  type ResearchCluster,
} from '@site/src/data/researchClusters';
import styles from './styles.module.css';

type ClusterDetailPageProps = {
  slug: string;
};

function ClusterNotFound(): React.ReactElement {
  return (
    <Layout title="Klaster Tidak Ditemukan" description="Halaman klaster riset tidak ditemukan.">
      <main className={styles.page}>
        <div className="container">
          <Breadcrumb
            items={[
              {label: 'Klaster Riset', path: '/klaster-riset'},
              {label: 'Tidak Ditemukan'},
            ]}
          />
          <section className={styles.notFound}>
            <h1>Klaster tidak ditemukan</h1>
            <p>Halaman yang Anda cari tidak tersedia.</p>
            <Link className="button button--primary" to="/klaster-riset">
              Kembali ke daftar klaster
            </Link>
          </section>
        </div>
      </main>
    </Layout>
  );
}

function ClusterSidebar({currentId}: {currentId: number}): React.ReactElement {
  return (
    <aside className={styles.sidebar} aria-label="Klaster lainnya">
      <h2>Klaster Lainnya</h2>
      <ul>
        {researchClusters
          .filter((cluster) => cluster.id !== currentId)
          .map((cluster) => (
            <li key={cluster.slug}>
              <Link to={`/klaster-riset/${cluster.slug}`}>
                <span aria-hidden="true">{cluster.icon}</span>
                {cluster.title}
              </Link>
            </li>
          ))}
      </ul>
    </aside>
  );
}

function ClusterContent({cluster}: {cluster: ResearchCluster}): React.ReactElement {
  return (
    <article className={styles.content} style={{'--cluster-color': cluster.color} as React.CSSProperties}>
      <header className={styles.header}>
        <span className={styles.badge}>{String(cluster.id).padStart(2, '0')}</span>
        <h1>
          <span aria-hidden="true">{cluster.icon}</span>
          {cluster.title}
        </h1>
      </header>

      <p className={styles.description}>{cluster.description}</p>

      <section className={styles.sectionBlock}>
        <h2>Fokus Utama</h2>
        <ul>
          {cluster.focus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={styles.sectionBlock}>
        <h2>Peluang Kolaborasi</h2>
        <ul>
          {cluster.collaboration.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <div className={styles.actions}>
        <Link className="button button--primary" to="/kerjasama">
          Jajaki Kerjasama
        </Link>
        <Link className="button button--secondary" to="/kontak">
          Hubungi APIK
        </Link>
      </div>
    </article>
  );
}

export default function ClusterDetailPage({slug}: ClusterDetailPageProps): React.ReactElement {
  const cluster = getResearchClusterBySlug(slug);

  if (!cluster) {
    return <ClusterNotFound />;
  }

  return (
    <Layout title={cluster.title} description={cluster.shortDescription}>
      <main className={styles.page}>
        <div className="container">
          <Breadcrumb
            items={[
              {label: 'Klaster Riset', path: '/klaster-riset'},
              {label: cluster.title},
            ]}
          />

          <div className={styles.layout}>
            <ClusterContent cluster={cluster} />
            <ClusterSidebar currentId={cluster.id} />
          </div>
        </div>
      </main>
    </Layout>
  );
}
