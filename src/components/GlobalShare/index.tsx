import React, {useEffect, useMemo, useState} from 'react';
import {useLocation} from '@docusaurus/router';
import styles from './styles.module.css';

type ShareItem = {
  id: string;
  label: string;
  href: string;
  className: string;
};

function ShareIcon({id}: {id: string}): React.ReactElement {
  switch (id) {
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
          <path d="M22 12A10 10 0 1 0 10.4 21.9V14.9H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
          <path d="M6.9 8A1.8 1.8 0 1 1 7 4.4 1.8 1.8 0 0 1 6.9 8ZM5.4 9.5h3V19h-3V9.5Zm4.7 0h2.8v1.3h.1c.4-.7 1.3-1.5 2.8-1.5 3 0 3.5 2 3.5 4.5V19h-3v-4.7c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4V19h-3V9.5Z" />
        </svg>
      );
    case 'whatsapp':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
          <path d="M20.5 3.5A11 11 0 0 0 3.7 17.1L2 22l5.1-1.7A11 11 0 1 0 20.5 3.5Zm-8.6 16a9 9 0 0 1-4.6-1.3l-.3-.2-3 .9 1-2.9-.2-.3A9 9 0 1 1 11.9 19.5Zm5-6.8c-.3-.2-1.8-.9-2-.9s-.5-.1-.7.2-.8 1-.9 1.1-.4.2-.7.1a7.4 7.4 0 0 1-3.6-3.2c-.2-.4 0-.5.2-.7l.5-.5c.1-.2.2-.4.3-.6s0-.4 0-.6L9 6c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.6 0-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.4c.2.2 2.3 3.5 5.5 4.9.8.3 1.4.5 1.9.6.8.2 1.6.2 2.2.1.7-.1 1.8-.8 2-1.6.3-.8.3-1.5.2-1.6-.1-.2-.3-.2-.6-.4Z" />
        </svg>
      );
    case 'x':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
          <path d="M18.9 3h2.9l-6.4 7.3L23 21h-6l-4.7-6.2L6.8 21H3.9l6.8-7.8L3 3h6.2l4.2 5.6L18.9 3Zm-1 16.3h1.6L8.3 4.6H6.6l11.3 14.8Z" />
        </svg>
      );
    case 'telegram':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
          <path d="M21.5 4.3c.4-.2.9.1.8.6L19.4 19c-.1.5-.7.8-1.2.5l-4.3-3.2-2.1 2a.8.8 0 0 1-1.3-.5l.2-4.1 7.5-6.8c.3-.3-.1-.7-.5-.5l-9.2 5.8-4-.9a.7.7 0 0 1-.1-1.3L21.5 4.3Z" />
        </svg>
      );
    case 'email':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
          <path d="M3 6.8A1.8 1.8 0 0 1 4.8 5h14.4A1.8 1.8 0 0 1 21 6.8v10.4a1.8 1.8 0 0 1-1.8 1.8H4.8A1.8 1.8 0 0 1 3 17.2V6.8Zm1.9.1v.3l7.1 4.7 7.1-4.7v-.3H4.9Zm14.2 10.2V9.4l-6.6 4.4a1 1 0 0 1-1.1 0L4.9 9.4v7.7h14.2Z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
          <path d="M16.5 8.5h-2V6a1 1 0 0 0-1-1h-3A4.5 4.5 0 0 0 6 9.5V17a2 2 0 0 0 2 2h7.5a2.5 2.5 0 0 0 0-5H15v-2h1.5a1.8 1.8 0 1 0 0-3.5Zm-6 8.5H8V9.5A2.5 2.5 0 0 1 10.5 7h2v10Zm5 0H12v-2h3.5a.5.5 0 0 1 0 1Zm1-6.5H12V9h4.5a.8.8 0 1 1 0 1.5Z" />
        </svg>
      );
  }
}

export default function GlobalShare(): React.ReactElement {
  const location = useLocation();
  const [shareUrl, setShareUrl] = useState('');
  const [shareTitle, setShareTitle] = useState('APIK');
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    setShareUrl(window.location.href);
    setShareTitle(document.title || 'Asosiasi Peneliti Indonesia Korea (APIK)');
  }, [location.pathname, location.search, location.hash]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleScroll = () => {
      const scrolled = window.scrollY > 150;
      setIsVisible(scrolled);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, {passive: true});

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(shareTitle);

  const shareItems = useMemo<ShareItem[]>(
    () => [
      {
        id: 'facebook',
        label: 'Facebook',
        href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        className: styles.facebook,
      },
      {
        id: 'linkedin',
        label: 'LinkedIn',
        href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
        className: styles.linkedin,
      },
      {
        id: 'whatsapp',
        label: 'WhatsApp',
        href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
        className: styles.whatsapp,
      },
      {
        id: 'x',
        label: 'X',
        href: `https://x.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
        className: styles.x,
      },
      {
        id: 'telegram',
        label: 'Telegram',
        href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
        className: styles.telegram,
      },
      {
        id: 'email',
        label: 'Email',
        href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
        className: styles.email,
      },
    ],
    [encodedTitle, encodedUrl],
  );

  const handleCopy = async () => {
    if (!shareUrl || typeof navigator === 'undefined' || !navigator.clipboard) {
      return;
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  if (!shareUrl) {
    return <></>;
  }

  return (
    <aside className={`${styles.sharePanel} ${isVisible ? styles.visible : styles.hidden}`} aria-label="Share this page">
      <p className={styles.title}>Bagikan</p>
      <div className={styles.actions}>
        {shareItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.shareButton} ${item.className}`}
            aria-label={`Bagikan ke ${item.label}`}
            title={`Bagikan ke ${item.label}`}>
            <ShareIcon id={item.id} />
          </a>
        ))}
        <button
          type="button"
          className={`${styles.shareButton} ${styles.copy} ${copied ? styles.copied : ''}`}
          onClick={handleCopy}
          aria-label="Salin tautan"
          title="Salin tautan">
          {copied ? (
            <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
              <path d="M9.6 16.2 5.4 12l-1.4 1.4 5.6 5.6L20 8.6 18.6 7.2 9.6 16.2Z" />
            </svg>
          ) : (
            <ShareIcon id="copy" />
          )}
        </button>
      </div>
    </aside>
  );
}
