import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

function Footer(): React.ReactElement {
  const {siteConfig} = useDocusaurusContext();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Brand Section */}
        <div className={styles.footerBrand}>
          <Link to="/" className={styles.footerLogo}>
            <img
              src="/img/logo-text.png"
              alt="APIK Logo"
              className={styles.footerLogoImage}
            />
          </Link>
          <p className={styles.footerTagline}>
            Salam Kolaborasi! Mari memajukan Indonesia melalui kolaborasi riset terdepan.
          </p>
          <div className={styles.footerSocial}>
            <a
              href="https://www.facebook.com/forumAPIK/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Facebook">
              <svg viewBox="0 0 24 24" className={styles.socialIcon}>
                <path d="M22 12A10 10 0 1 0 10.4 21.9V14.9H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/forumapik/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram">
              <svg viewBox="0 0 24 24" className={styles.socialIcon}>
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8c1.99 0 3.6-1.61 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@ForumAPIK"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="YouTube">
              <svg viewBox="0 0 24 24" className={styles.socialIcon}>
                <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73Z" />
              </svg>
            </a>
            <a
              href="mailto:info@forumapik.org"
              className={styles.socialLink}
              aria-label="Email">
              <svg viewBox="0 0 24 24" className={styles.socialIcon}>
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Tentang Section */}
        <div className={styles.footerColumn}>
          <h3 className={styles.footerHeading}>Tentang</h3>
          <ul className={styles.footerLinks}>
            <li>
              <Link to="/tentang/visi-misi">Visi & Misi</Link>
            </li>
            <li>
              <Link to="/tentang/pengurus">Pengurus</Link>
            </li>
            <li>
              <Link to="/tentang/sejarah">Sejarah</Link>
            </li>
            <li>
              <Link to="/tentang/logo">Logo</Link>
            </li>
          </ul>
        </div>

        {/* Organisasi Section */}
        <div className={styles.footerColumn}>
          <h3 className={styles.footerHeading}>Organisasi</h3>
          <ul className={styles.footerLinks}>
            <li>
              <Link to="/organisasi">Struktur Organisasi</Link>
            </li>
            <li>
              <Link to="/organisasi#direktorat-pendidikan-dan-keahlian">
                Pendidikan & Keahlian
              </Link>
            </li>
            <li>
              <Link to="/organisasi#direktorat-riset-dan-inovasi">
                Riset & Inovasi
              </Link>
            </li>
            <li>
              <Link to="/organisasi#direktorat-digital-dan-media">
                Digital & Media
              </Link>
            </li>
            <li>
              <Link to="/organisasi#direktorat-kerjasama">Kerjasama</Link>
            </li>
            <li>
              <Link to="/organisasi#direktorat-kelembagaan">Kelembagaan</Link>
            </li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className={styles.footerColumn}>
          <h3 className={styles.footerHeading}>Informasi</h3>
          <ul className={styles.footerLinks}>
            <li>
              <Link to="/keanggotaan">Keanggotaan</Link>
            </li>
            <li>
              <Link to="/keanggotaan#proses-pendaftaran">
                Proses Pendaftaran
              </Link>
            </li>
            <li>
              <Link to="/berita">Berita</Link>
            </li>
            <li>
              <Link to="/kerjasama">Kerjasama</Link>
            </li>
            <li>
              <Link to="/kontak">Kontak</Link>
            </li>
            <li>
              <Link to="/keanggotaan#faq">FAQ</Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className={styles.footerColumn}>
          <h3 className={styles.footerHeading}>Kontak</h3>
          <ul className={styles.footerLinks}>
            <li>
              <a href="mailto:info@forumapik.org">info@forumapik.org</a>
            </li>
            <li>
              <a
                href="https://www.forumapik.org"
                target="_blank"
                rel="noopener noreferrer">
                www.forumapik.org
              </a>
            </li>
            <li className={styles.footerAddress}>
              Indonesia - Korea<br />
              Asosiasi Peneliti Indonesia Korea
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomContainer}>
          <p className={styles.copyright}>
            © {currentYear} Asosiasi Peneliti Indonesia Korea (APIK). All rights reserved.
          </p>
          <p className={styles.poweredBy}>
            Supported by KBRI Seoul · Built with Docusaurus
          </p>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
