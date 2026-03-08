import React from 'react';
import styles from './styles.module.css';
import {researchClusters} from '@site/src/data/researchClusters';

export default function ResearchClusters() {
  return (
    <section className={styles.clustersSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Klaster Riset</h2>
          <p className={styles.sectionDescription}>
            Jelajahi berbagai bidang penelitian yang menjadi fokus kolaborasi peneliti Indonesia di Korea
          </p>
        </div>

        <div className={styles.clustersGrid}>
          {researchClusters.map((cluster) => (
            <a
              key={cluster.id}
              href={`/klaster-riset/${cluster.slug}`}
              className={styles.clusterCard}
              style={{'--cluster-color': cluster.color} as React.CSSProperties}>
              <div className={styles.clusterImageWrapper}>
                <div
                  className={styles.clusterImage}
                  style={{
                    background: `linear-gradient(135deg, ${cluster.color}33 0%, ${cluster.color}66 100%)`,
                  }}>
                  <span className={styles.clusterIcon}>{cluster.icon}</span>
                </div>
                <div className={styles.clusterOverlay}></div>
              </div>

              <div className={styles.clusterContent}>
                <h3 className={styles.clusterTitle}>{cluster.title}</h3>
                <p className={styles.clusterDescription}>{cluster.shortDescription}</p>
                <div className={styles.clusterAction}>
                  <span className={styles.actionText}>Kunjungi Klaster</span>
                  <svg
                    className={styles.actionArrow}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div className={styles.clusterNumber}>{String(cluster.id).padStart(2, '0')}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
