import React from 'react';
import Layout from '@theme/Layout';
import Breadcrumb from '@site/src/components/Breadcrumb';
import styles from './development.module.css';
import stylesTentang from './tentang/styles.module.css';


type ChangelogItem = {
  date: string;
  title: string;
  details: string[];
  status?: 'done' | 'ongoing' | 'next';
};

const ARCHIVE_URL = 'https://web.archive.org/web/*/https://forumapik.org*';

const changelog: ChangelogItem[] = [
  {
    date: '2026-03-01',
    title: 'Rebuild started',
    details: [
      'Kickoff phase for the APIK website rebuild started.',
      'Defined scope, feature priorities, and the new content structure.',
    ],
    status: 'done',
  },
  {
    date: '2026-03-09',
    title: 'Announcement bar and navigation improvements',
    details: [
      'Added rebuild announcement on top of navbar.',
      'Reorganized navbar menus and social links dropdown.',
      'Improved navbar compact spacing and readability settings.',
    ],
    status: 'done',
  },
  {
    date: '2026-03-08',
    title: 'Research clusters structure finalized',
    details: [
      'Created individual pages for all research clusters.',
      'Centralized cluster data for easier maintenance.',
      'Updated links from homepage and cluster listing page.',
    ],
    status: 'done',
  },
  {
    date: '2026-03-07',
    title: 'Leadership page enhancements',
    details: [
      'Enabled optional profile links and dynamic scholar photo handling.',
      'Improved leadership card layout for readability and consistency.',
      'Added robust fallback for missing photos.',
    ],
    status: 'done',
  },
  {
    date: 'In Progress',
    title: 'Visual and content polish',
    details: [
      'Refining typography and contrast in light and dark mode.',
      'Reviewing section spacing and mobile navigation experience.',
    ],
    status: 'ongoing',
  },
  {
    date: 'Next',
    title: 'Upcoming release scope',
    details: [
      'Add final content QA and cross-device testing.',
      'Publish release notes for the rebuilt site.',
      'Launch improved homepage messaging and updated visuals.',
    ],
    status: 'next',
  },
  {
    date: 'TODO',
    title: 'Product roadmap initiatives',
    details: [
      'Build peneliti@APIK development track and onboarding flow.',
      'Launch research outputs site for publications, datasets, and impact highlights.',
      'Develop researcher match-making features for collaboration and mentorship.',
      'Define integration plan with klaster riset and member profiles.',
    ],
    status: 'next',
  },
];

function statusLabel(status?: ChangelogItem['status']): string {
  if (status === 'ongoing') {
    return 'Ongoing';
  }
  if (status === 'next') {
    return 'Planned';
  }
  return 'Done';
}

function isIsoDate(value: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

const sortedChangelog = [
  ...changelog
    .filter((item) => isIsoDate(item.date))
    .sort((a, b) => b.date.localeCompare(a.date)),
  ...changelog.filter((item) => !isIsoDate(item.date)),
];

export default function DevelopmentPage(): React.ReactElement {
  return (
    <Layout
      title="Development Timeline"
      description="Changelog and development timeline for the APIK website rebuild.">
      <main className={styles.page}>
        <div className="container">
          <Breadcrumb items={[{label: 'Development'}]} />
          <div className={stylesTentang.aboutContent}>
          <header className={styles.header}>
            <h1>Development Timeline</h1>
            <p>
              This page tracks the APIK website rebuild progress. New updates will be added
              regularly.
            </p>
            <div className={styles.quickLinks}>
              <a href={ARCHIVE_URL} target="_blank" rel="noopener noreferrer" className={styles.linkPill}>
                View previous version (Archive)
              </a>
            </div>
          </header>

          <section className={styles.timeline} aria-label="Development timeline">
            {sortedChangelog.map((item) => (
              <article className={styles.card} key={`${item.date}-${item.title}`}>
                <div className={styles.metaRow}>
                  <time className={styles.date}>{item.date}</time>
                  <span className={`${styles.status} ${styles[item.status ?? 'done']}`}>
                    {statusLabel(item.status)}
                  </span>
                </div>
                <h2>{item.title}</h2>
                <ul>
                  {item.details.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>
        </div>
        </div>
      </main>
    </Layout>
  );
}
