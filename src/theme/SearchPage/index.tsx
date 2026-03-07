import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function SearchPage(): JSX.Element {
  // The actual search is handled by the search plugin
  // This page just provides the layout container
  return (
    <Layout title="Search" description="Search APIK website">
      <main className={styles.searchPageMain}>
        <div className={styles.searchContainer}>
          <h1>Search</h1>
          <p>
            Use the search box above to search through all content on the APIK website, including berita and pages.
          </p>
          <p>
            <Link to="/">Back to home</Link>
          </p>
        </div>
      </main>
    </Layout>
  );
}
