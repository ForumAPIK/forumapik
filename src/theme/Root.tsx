import React from 'react';
import Head from '@docusaurus/Head';
import ScrollToTop from '@site/src/components/ScrollToTop';
import GlobalShare from '@site/src/components/GlobalShare';

// Default implementation, that you can customize
export default function Root({children}) {
  return (
    <>
      <Head>
        <meta name="author" content="AINTLab" />
        <meta name="creator" content="aintlab.com" />
      </Head>
      {children}
      <GlobalShare />
      <ScrollToTop />
    </>
  );
}
