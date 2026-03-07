import React from 'react';
import ScrollToTop from '@site/src/components/ScrollToTop';
import GlobalShare from '@site/src/components/GlobalShare';

// Default implementation, that you can customize
export default function Root({children}) {
  return (
    <>
      {children}
      <GlobalShare />
      <ScrollToTop />
    </>
  );
}
