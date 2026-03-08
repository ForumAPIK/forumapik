import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import WelcomeSection from '@site/src/components/WelcomeSection';
import PartnerMarquee from '@site/src/components/PartnerMarquee';
import ResearchClusters from '@site/src/components/ResearchClusters';
import LatestBlogPosts from '@site/src/components/LatestBlogPosts';
import HeroSlider from '@site/src/components/HeroSlider';
import Heading from '@theme/Heading';
import {heroSlides} from '@site/src/data/heroSlides';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <HeroSlider slides={heroSlides} autoPlayInterval={5000} />
      <div className={styles.heroContent}>
        <div className="container">
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="#sambutan">
              Sambutan Ketua APIK
            </Link>
            <Link
              className="button button--primary button--lg"
              to="#">
              Peneliti@APIK-Segera Hadir
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Asosiasi Peneliti Indonesia Korea (APIK) adalah komunitas yang menghubungkan peneliti Indonesia dan Korea untuk kolaborasi riset terdepan. Bergabunglah untuk memperluas jaringan dan memajukan penelitian bersama!">
      <HomepageHeader />
      <main>
        <WelcomeSection />
        <PartnerMarquee />
        <ResearchClusters />
        <LatestBlogPosts />
      </main>
    </Layout>
  );
}
