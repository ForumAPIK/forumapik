export type ResearchCluster = {
  id: number;
  slug: string;
  title: string;
  description: string;
  focus: string[];
  collaboration: string[];
  icon: string;
  color: string;
  image: string;
  shortDescription: string;
};

export const researchClusters: ResearchCluster[] = [
  {
    id: 1,
    slug: 'teknologi-pangan-pertanian-dan-bioteknologi',
    title: 'Teknologi Pangan, Pertanian, dan Bioteknologi',
    shortDescription: 'Inovasi teknologi pangan, pertanian modern, dan bioteknologi terapan',
    description:
      'Inovasi teknologi pangan, pertanian modern, dan bioteknologi terapan untuk ketahanan pangan berkelanjutan.',
    focus: [
      'Pangan fungsional dan keamanan pangan',
      'Pertanian presisi dan smart farming',
      'Bioteknologi terapan untuk pangan dan agroindustri',
    ],
    collaboration: [
      'Riset bersama kampus dan industri agro',
      'Pendampingan hilirisasi hasil riset',
      'Program seminar dan workshop tematik',
    ],
    icon: '🌾',
    color: '#27AE60',
    image: '/img/clusters/agriculture.jpg',
  },
  {
    id: 2,
    slug: 'baterai-elektrokimia-sel-surya',
    title: 'Baterai, Elektrokimia, Sel Surya',
    shortDescription: 'Penelitian baterai, elektrokimia, dan teknologi sel surya',
    description:
      'Pengembangan teknologi energi masa depan melalui baterai, material elektrokimia, dan sel surya berdaya saing tinggi.',
    focus: [
      'Material elektroda dan elektrolit canggih',
      'Sistem penyimpanan energi',
      'Teknologi photovoltaic dan integrasi sistem',
    ],
    collaboration: [
      'Joint lab antar universitas',
      'Kolaborasi prototipe dengan mitra industri',
      'Klinik proposal pendanaan riset energi',
    ],
    icon: '🔋',
    color: '#F39C12',
    image: '/img/clusters/battery.jpg',
  },
  {
    id: 3,
    slug: 'energi-dan-sumber-daya-mineral',
    title: 'Energi dan Sumber Daya Mineral',
    shortDescription: 'Energi terbarukan, eksplorasi SDA, dan keberlanjutan energi',
    description:
      'Penelitian energi terbarukan, efisiensi energi, dan eksplorasi sumber daya mineral yang berwawasan lingkungan.',
    focus: [
      'Energi terbarukan skala komunitas',
      'Transisi energi dan dekarbonisasi',
      'Eksplorasi dan pengelolaan mineral kritis',
    ],
    collaboration: [
      'Kemitraan dengan regulator dan industri',
      'Pemetaan kebutuhan riset nasional',
      'Diseminasi hasil kajian kebijakan energi',
    ],
    icon: '⚡',
    color: '#E67E22',
    image: '/img/clusters/energy.jpg',
  },
  {
    id: 4,
    slug: 'kesehatan',
    title: 'Kesehatan',
    shortDescription: 'Inovasi kesehatan, biomedis, dan teknologi medis',
    description:
      'Riset kesehatan dan biomedis untuk mendukung inovasi diagnostik, terapi, serta sistem layanan kesehatan modern.',
    focus: [
      'Teknologi diagnostik dan biosensor',
      'Kesehatan masyarakat berbasis data',
      'Inovasi alat kesehatan dan digital health',
    ],
    collaboration: [
      'Kolaborasi rumah sakit dan universitas',
      'Studi multicenter lintas institusi',
      'Penguatan kapasitas peneliti muda kesehatan',
    ],
    icon: '🏥',
    color: '#E74C3C',
    image: '/img/clusters/health.jpg',
  },
  {
    id: 5,
    slug: 'teknologi-informasi-dan-komunikasi',
    title: 'Teknologi Informasi dan Komunikasi',
    shortDescription: 'ICT, AI, big data, dan transformasi digital',
    description:
      'Pengembangan ICT, AI, data science, dan transformasi digital untuk mendukung ekosistem riset dan industri.',
    focus: [
      'Kecerdasan buatan dan machine learning',
      'Big data analytics dan data engineering',
      'Keamanan siber dan sistem terdistribusi',
    ],
    collaboration: [
      'Open collaboration lintas kampus',
      'Riset terapan bersama startup',
      'Program mentoring teknis dan publikasi',
    ],
    icon: '💻',
    color: '#3498DB',
    image: '/img/clusters/ict.jpg',
  },
  {
    id: 6,
    slug: 'elektronika-dan-instrumentasi',
    title: 'Elektronika dan Instrumentasi',
    shortDescription: 'Sistem elektronika, sensor, dan instrumentasi canggih',
    description:
      'Riset perangkat elektronika, sensor, dan sistem instrumentasi untuk aplikasi industri, kesehatan, dan lingkungan.',
    focus: [
      'Embedded systems dan IoT instrumentation',
      'Sensor cerdas dan akuisisi data',
      'Kontrol sistem dan otomasi',
    ],
    collaboration: [
      'Pengembangan prototipe bersama industri',
      'Uji coba lapangan lintas sektor',
      'Pelatihan desain hardware dan firmware',
    ],
    icon: '🔌',
    color: '#9B59B6',
    image: '/img/clusters/electronics.jpg',
  },
  {
    id: 7,
    slug: 'metalurgi-material-nanoteknologi-dan-radiasi',
    title: 'Metalurgi, Material, Nanoteknologi, dan Radiasi',
    shortDescription: 'Material maju, nanoteknologi, dan aplikasi radiasi',
    description:
      'Inovasi material maju, nanoteknologi, dan pemanfaatan radiasi untuk aplikasi industri dan kesehatan.',
    focus: [
      'Rekayasa material dan karakterisasi',
      'Nanomaterial untuk aplikasi fungsional',
      'Pemanfaatan radiasi untuk riset terapan',
    ],
    collaboration: [
      'Pemanfaatan fasilitas riset bersama',
      'Kolaborasi sintesis dan uji material',
      'Pertukaran peneliti dan knowledge sharing',
    ],
    icon: '⚗️',
    color: '#95A5A6',
    image: '/img/clusters/materials.jpg',
  },
  {
    id: 8,
    slug: 'kebencanaan-infrastruktur-sipil-arsitektur-dan-tata-kota',
    title: 'Kebencanaan, Infrastruktur Sipil, Arsitektur, dan Tata Kota',
    shortDescription: 'Mitigasi bencana, infrastruktur, dan perencanaan kota',
    description:
      'Riset mitigasi bencana dan pengembangan infrastruktur serta tata kota yang tangguh dan berkelanjutan.',
    focus: [
      'Mitigasi bencana berbasis sains',
      'Infrastruktur tahan bencana',
      'Arsitektur dan perencanaan kota berkelanjutan',
    ],
    collaboration: [
      'Kajian risiko wilayah bersama pemerintah daerah',
      'Riset desain urban resilien',
      'Forum kebijakan dan praktik infrastruktur',
    ],
    icon: '🏗️',
    color: '#7F8C8D',
    image: '/img/clusters/infrastructure.jpg',
  },
  {
    id: 9,
    slug: 'kelautan',
    title: 'Kelautan',
    shortDescription: 'Sumber daya laut, oseanografi, dan teknologi maritim',
    description:
      'Kajian kelautan, oseanografi, dan teknologi maritim untuk mendukung pemanfaatan sumber daya laut berkelanjutan.',
    focus: [
      'Oseanografi fisik dan biogeokimia',
      'Teknologi perikanan dan maritim',
      'Konservasi ekosistem pesisir dan laut',
    ],
    collaboration: [
      'Riset kolaboratif kawasan pesisir',
      'Pertukaran data dan metodologi lapangan',
      'Advokasi kebijakan kelautan berbasis bukti',
    ],
    icon: '🌊',
    color: '#1ABC9C',
    image: '/img/clusters/marine.jpg',
  },
  {
    id: 10,
    slug: 'sosial-budaya-dan-bahasa',
    title: 'Sosial Budaya dan Bahasa',
    shortDescription: 'Kajian sosial, budaya, linguistik, dan humaniora',
    description:
      'Penguatan riset sosial, budaya, bahasa, dan humaniora untuk menjawab isu-isu masyarakat kontemporer.',
    focus: [
      'Studi masyarakat dan perubahan sosial',
      'Linguistik terapan dan kebahasaan',
      'Budaya, media, dan identitas',
    ],
    collaboration: [
      'Kolaborasi riset lintas disiplin',
      'Forum diskusi kebijakan sosial budaya',
      'Program publikasi dan diseminasi publik',
    ],
    icon: '🎭',
    color: '#E91E63',
    image: '/img/clusters/social.jpg',
  },
  {
    id: 11,
    slug: 'ekonomi-dan-bisnis',
    title: 'Ekonomi dan Bisnis',
    shortDescription: 'Ekonomi, manajemen bisnis, dan kebijakan publik',
    description:
      'Kajian ekonomi, bisnis, dan kebijakan untuk mendorong inovasi, daya saing, serta pembangunan berkelanjutan.',
    focus: [
      'Ekonomi digital dan UMKM',
      'Strategi bisnis dan kewirausahaan',
      'Kebijakan publik dan ekonomi pembangunan',
    ],
    collaboration: [
      'Riset pasar dan policy brief',
      'Kolaborasi dengan pelaku industri',
      'Mentoring bisnis berbasis riset',
    ],
    icon: '💼',
    color: '#16A085',
    image: '/img/clusters/business.jpg',
  },
  {
    id: 12,
    slug: 'teknologi-industri-dan-manufaktur',
    title: 'Teknologi Industri dan Manufaktur',
    shortDescription: 'Otomasi industri, manufaktur cerdas, dan Industry 4.0',
    description:
      'Riset otomasi, sistem manufaktur cerdas, dan optimasi proses industri untuk era Industry 4.0.',
    focus: [
      'Smart manufacturing dan digital twin',
      'Optimasi proses dan kualitas produksi',
      'Robotika industri dan otomatisasi',
    ],
    collaboration: [
      'Proyek percontohan bersama manufaktur',
      'Integrasi riset dan kebutuhan industri',
      'Program peningkatan kompetensi teknis',
    ],
    icon: '🏭',
    color: '#34495E',
    image: '/img/clusters/industry.jpg',
  },
  {
    id: 13,
    slug: 'sumber-daya-hayati-lingkungan-dan-kehutanan',
    title: 'Sumber Daya Hayati, Lingkungan, dan Kehutanan',
    shortDescription: 'Konservasi biodiversitas, lingkungan, dan kehutanan',
    description:
      'Riset biodiversitas, lingkungan, dan kehutanan untuk mendukung konservasi dan pengelolaan sumber daya alam.',
    focus: [
      'Konservasi keanekaragaman hayati',
      'Pemantauan kualitas lingkungan',
      'Pengelolaan hutan berkelanjutan',
    ],
    collaboration: [
      'Riset kolaboratif konservasi',
      'Pendampingan program lingkungan daerah',
      'Penyusunan rekomendasi tata kelola SDA',
    ],
    icon: '🌳',
    color: '#2E7D32',
    image: '/img/clusters/environment.jpg',
  },
  {
    id: 14,
    slug: 'transportasi',
    title: 'Transportasi',
    shortDescription: 'Sistem transportasi cerdas, mobilitas, dan logistik',
    description:
      'Pengembangan sistem transportasi cerdas, logistik, dan mobilitas berkelanjutan di wilayah urban maupun regional.',
    focus: [
      'Intelligent transportation systems',
      'Mobilitas perkotaan berkelanjutan',
      'Logistik dan rantai pasok',
    ],
    collaboration: [
      'Kajian kebijakan transportasi publik',
      'Pemodelan data mobilitas',
      'Kolaborasi implementasi solusi transportasi',
    ],
    icon: '🚗',
    color: '#2C3E50',
    image: '/img/clusters/transportation.jpg',
  },
];

export const getResearchClusterBySlug = (slug: string): ResearchCluster | undefined =>
  researchClusters.find((cluster) => cluster.slug === slug);
