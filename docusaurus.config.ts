import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Asosiasi Peneliti Indonesia Korea (APIK)',
  tagline: 'Salam Kolaborasi ! Mari Memajukan Indonesia Melalui Kolaborasi Riset Terdepan !',
  favicon: 'img/logo.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://forumapik.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'ignore',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'id',
    locales: ['id'],
    localeConfigs: {
      id: {
        label: 'Bahasa Indonesia',
        direction: 'ltr',
        htmlLang: 'id-ID',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          routeBasePath: '/berita',
          showReadingTime: true,
          blogTitle: 'Blog APIK',
          blogDescription: 'Berita, artikel, dan pembaruan terbaru dari Asosiasi Peneliti Indonesia Korea',
          blogSidebarCount: 0,
          postsPerPage: 7,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
            title: 'Blog APIK',
            description: 'Berita dan artikel dari APIK',
            copyright: `Copyright © ${new Date().getFullYear()} Asosiasi Peneliti Indonesia Korea (APIK). Supported by AINTLab. Built with Docusaurus.`,
            language: 'id',
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      require.resolve('docusaurus-lunr-search'),
      {
        indexDocs: false,
        indexBlog: true,
        indexPages: true,
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo-text.png',
    colorMode: {
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'APIK (Asosiasi Peneliti Indonesia Korea) Logo',
        src: 'img/logo-text.png',
      },
      items: [
        {
          label: 'Tentang',
          position: 'left',
          type: 'dropdown',
          items: [
            {
              label: 'Visi & Misi',
              to: '/tentang/visi-misi',
            },
            {
              label: 'Pengurus',
              to: '/tentang/pengurus',
            },
            {
              label: 'Logo',
              to: '/tentang/logo',
            },
            {
              label: 'Sejarah',
              to: '/tentang/sejarah',
            },
          ],
        },
        {
          label: 'Organisasi',
          position: 'left',
          type: 'dropdown',
          items: [
            {
              label: 'Struktur Organisasi',
              to: '/organisasi',
            },
            {
              label: 'Pengurus 2024-2026',
              to: '/tentang/pengurus',
            },
            {
              label: 'Direktorat Pendidikan dan Keahlian',
              to: '/organisasi#direktorat-pendidikan-dan-keahlian',
            },
            {
              label: 'Direktorat Riset dan Inovasi',
              to: '/organisasi#direktorat-riset-dan-inovasi',
            },
            {
              label: 'Direktorat Digital dan Media',
              to: '/organisasi#direktorat-digital-dan-media',
            },
            {
              label: 'Direktorat Kerjasama',
              to: '/organisasi#direktorat-kerjasama',
            },
            {
              label: 'Direktorat Kelembagaan',
              to: '/organisasi#direktorat-kelembagaan',
            },
          ],
        },
        {
          label: 'Keanggotaan',
          position: 'left',
          type: 'dropdown',
          items: [
            {
              label: 'Info Keanggotaan',
              to: '/keanggotaan',
            },
            {
              label: 'Proses Pendaftaran',
              to: '/keanggotaan#proses-pendaftaran',
            },
            {
              label: 'FAQ',
              to: '/keanggotaan#faq',
            },
          ],
        },
        {to: '/berita', label: 'Berita', position: 'left'},
        {to: '/kerjasama', label: 'Kerjasama', position: 'left'},
        {to: '/kontak', label: 'Kontak', position: 'left'},
        {type: 'search', position: 'right'},
        {
          href: 'https://www.youtube.com/@ForumAPIK',
          position: 'right',
          className: 'header-youtube-link',
          'aria-label': 'YouTube channel',
        },
        {
          href: 'https://www.instagram.com/forumapik/',
          position: 'right',
          className: 'header-instagram-link',
          'aria-label': 'Instagram profile',
        },
        {
          href: 'https://www.facebook.com/forumAPIK/',
          position: 'right',
          className: 'header-facebook-link',
          'aria-label': 'Facebook page',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: ' ',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
