import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className={styles.breadcrumb} aria-label="breadcrumb">
      <ol className={styles.breadcrumbList}>
        <li className={styles.breadcrumbItem}>
          <Link to="/" className={styles.breadcrumbLink}>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="currentColor"
              className={styles.homeIcon}
            >
              <path d="M8.707 1.5a1 1 0 00-1.414 0L.646 8.146a.5.5 0 00.708.708L2 8.207V13.5A1.5 1.5 0 003.5 15h9a1.5 1.5 0 001.5-1.5V8.207l.646.647a.5.5 0 00.708-.708L13 5.793V2.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1.293L8.707 1.5zM13 7.207V13.5a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5V7.207l5-5 5 5z"/>
            </svg>
            Beranda
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className={styles.breadcrumbItem}>
            <span className={styles.separator}>/</span>
            {item.path && index < items.length - 1 ? (
              <Link to={item.path} className={styles.breadcrumbLink}>
                {item.label}
              </Link>
            ) : (
              <span className={styles.breadcrumbCurrent}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
