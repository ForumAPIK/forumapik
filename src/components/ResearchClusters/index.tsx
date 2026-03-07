import React from 'react';
import styles from './styles.module.css';

const researchClusters = [
  {
    id: 1,
    title: 'Teknologi Pangan, Pertanian, dan Bioteknologi',
    description: 'Inovasi teknologi pangan, pertanian modern, dan bioteknologi terapan',
    image: '/img/clusters/agriculture.jpg',
    link: '#',
    color: '#27AE60',
    icon: '🌾'
  },
  {
    id: 2,
    title: 'Baterai, Elektrokimia, Sel Surya',
    description: 'Penelitian baterai, elektrokimia, dan teknologi sel surya',
    image: '/img/clusters/battery.jpg',
    link: '#',
    color: '#F39C12',
    icon: '🔋'
  },
  {
    id: 3,
    title: 'Energi dan Sumber Daya Mineral',
    description: 'Energi terbarukan, eksplorasi SDA, dan keberlanjutan energi',
    image: '/img/clusters/energy.jpg',
    link: '#',
    color: '#E67E22',
    icon: '⚡'
  },
  {
    id: 4,
    title: 'Kesehatan',
    description: 'Inovasi kesehatan, biomedis, dan teknologi medis',
    image: '/img/clusters/health.jpg',
    link: '#',
    color: '#E74C3C',
    icon: '🏥'
  },
  {
    id: 5,
    title: 'Teknologi Informasi dan Komunikasi',
    description: 'ICT, AI, big data, dan transformasi digital',
    image: '/img/clusters/ict.jpg',
    link: '#',
    color: '#3498DB',
    icon: '💻'
  },
  {
    id: 6,
    title: 'Elektronika dan Instrumentasi',
    description: 'Sistem elektronika, sensor, dan instrumentasi canggih',
    image: '/img/clusters/electronics.jpg',
    link: '#',
    color: '#9B59B6',
    icon: '🔌'
  },
  {
    id: 7,
    title: 'Metalurgi, Material, Nanoteknologi, dan Radiasi',
    description: 'Material maju, nanoteknologi, dan aplikasi radiasi',
    image: '/img/clusters/materials.jpg',
    link: '#',
    color: '#95A5A6',
    icon: '⚗️'
  },
  {
    id: 8,
    title: 'Kebencanaan, Infrastruktur Sipil, Arsitektur, dan Tata Kota',
    description: 'Mitigasi bencana, infrastruktur, dan perencanaan kota',
    image: '/img/clusters/infrastructure.jpg',
    link: '#',
    color: '#7F8C8D',
    icon: '🏗️'
  },
  {
    id: 9,
    title: 'Kelautan',
    description: 'Sumber daya laut, oseanografi, dan teknologi maritim',
    image: '/img/clusters/marine.jpg',
    link: '#',
    color: '#1ABC9C',
    icon: '🌊'
  },
  {
    id: 10,
    title: 'Sosial Budaya dan Bahasa',
    description: 'Kajian sosial, budaya, linguistik, dan humaniora',
    image: '/img/clusters/social.jpg',
    link: '#',
    color: '#E91E63',
    icon: '🎭'
  },
  {
    id: 11,
    title: 'Ekonomi dan Bisnis',
    description: 'Ekonomi, manajemen bisnis, dan kebijakan publik',
    image: '/img/clusters/business.jpg',
    link: '#',
    color: '#16A085',
    icon: '💼'
  },
  {
    id: 12,
    title: 'Teknologi Industri dan Manufaktur',
    description: 'Otomasi industri, manufaktur cerdas, dan Industry 4.0',
    image: '/img/clusters/industry.jpg',
    link: '#',
    color: '#34495E',
    icon: '🏭'
  },
  {
    id: 13,
    title: 'Sumber Daya Hayati, Lingkungan, dan Kehutanan',
    description: 'Konservasi biodiversitas, lingkungan, dan kehutanan',
    image: '/img/clusters/environment.jpg',
    link: '#',
    color: '#27AE60',
    icon: '🌳'
  },
  {
    id: 14,
    title: 'Transportasi',
    description: 'Sistem transportasi cerdas, mobilitas, dan logistik',
    image: '/img/clusters/transportation.jpg',
    link: '#',
    color: '#2C3E50',
    icon: '🚗'
  }
];

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
              href={cluster.link}
              target={cluster.link === '#' ? undefined : '_blank'}
              rel={cluster.link === '#' ? undefined : 'noopener noreferrer'}
              className={styles.clusterCard}
              style={{ '--cluster-color': cluster.color } as React.CSSProperties}
            >
              <div className={styles.clusterImageWrapper}>
                <div 
                  className={styles.clusterImage}
                  style={{ 
                    background: `linear-gradient(135deg, ${cluster.color}33 0%, ${cluster.color}66 100%)`
                  }}
                >
                  <span className={styles.clusterIcon}>{cluster.icon}</span>
                </div>
                <div className={styles.clusterOverlay}></div>
              </div>
              
              <div className={styles.clusterContent}>
                <h3 className={styles.clusterTitle}>{cluster.title}</h3>
                <p className={styles.clusterDescription}>{cluster.description}</p>
                <div className={styles.clusterAction}>
                  <span className={styles.actionText}>Kunjungi Klaster</span>
                  <svg 
                    className={styles.actionArrow}
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"/>
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
