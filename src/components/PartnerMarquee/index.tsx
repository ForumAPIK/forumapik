import React from 'react';
import styles from './styles.module.css';
import {type Partner, partnersRowOne, partnersRowTwo} from '@site/src/data/partners';

function PartnerCard({partner}: {partner: Partner}): React.ReactElement {
  const [imgError, setImgError] = React.useState(false);

  const cardContent = (
    <>
      <div className={styles.logoMark}>
        {partner.logo && !imgError ? (
          <img
            src={partner.logo}
            alt={`${partner.name} logo`}
            className={styles.logoImage}
            onError={() => setImgError(true)}
          />
        ) : (
          <span className={styles.logoText} aria-hidden="true">
            {partner.short}
          </span>
        )}
      </div>
      <div className={styles.meta}>
        <span className={styles.partnerName}>{partner.name}</span>
        <span className={styles.partnerKind}>{partner.kind}</span>
      </div>
    </>
  );

  if (partner.href === '#') {
    return <div className={styles.partnerCard}>{cardContent}</div>;
  }

  return (
    <a
      className={styles.partnerCard}
      href={partner.href}
      target="_blank"
      rel="noopener noreferrer"
      title={partner.name}
      aria-label={`Kunjungi ${partner.name}`}>
      {cardContent}
    </a>
  );
}

function MarqueeRow({partners, reverse = false}: {partners: Partner[]; reverse?: boolean}): React.ReactElement {
  const looped = [...partners, ...partners];

  return (
    <div className={styles.marqueeMask}>
      <div className={`${styles.marqueeTrack} ${reverse ? styles.reverse : ''}`}>
        {looped.map((partner, idx) => (
          <PartnerCard key={`${partner.short}-${idx}`} partner={partner} />
        ))}
      </div>
    </div>
  );
}

export default function PartnerMarquee(): React.ReactElement {
  return (
    <section className={styles.section} aria-label="Mitra kolaborasi APIK">
      <div className="container">
        <div className={styles.header}>
          <p className={styles.kicker}>Jejaring APIK</p>
          <h2 className={styles.title}>Mitra Kolaborasi</h2>
          <p className={styles.subtitle}>
            Kolaborasi riset APIK didukung oleh jejaring universitas, institusi, dan mitra industri di Indonesia dan Korea.
          </p>
        </div>
      </div>

      <div className={styles.rows}>
        <MarqueeRow partners={partnersRowOne} />
        <MarqueeRow partners={partnersRowTwo} reverse />
      </div>
    </section>
  );
}
