export type CooperationType = {
  emoji: string;
  title: string;
  items: string[];
};

export const cooperationTypes: CooperationType[] = [
  {
    emoji: '🏛️',
    title: 'Pemerintah',
    items: [
      'Kedutaan Besar RI di Seoul (KBRI)',
      'Atase Pendidikan dan Kebudayaan (Atdikbud)',
      'Kementerian Riset, Teknologi, dan Pendidikan Tinggi RI',
      'LPDP dan lembaga beasiswa Indonesia',
    ],
  },
  {
    emoji: '🎓',
    title: 'Universitas & Institusi Akademik',
    items: [
      'Universitas-universitas di Indonesia',
      'Universitas-universitas di Korea Selatan',
      'Lembaga riset Indonesia (BRIN, LIPI, dll)',
      'Research institutes di Korea',
    ],
  },
  {
    emoji: '🏭',
    title: 'Industri & Korporasi',
    items: [
      'Perusahaan teknologi Indonesia dan Korea',
      'Start-up ecosystem',
      'Industry partners untuk research collaboration',
      'Corporate social responsibility programs',
    ],
  },
  {
    emoji: '👥',
    title: 'Organisasi & Komunitas',
    items: [
      'Organisasi peneliti Indonesia di negara lain',
      'Komunitas Indonesia di Korea',
      'International research associations',
      'Alumni networks',
    ],
  },
];

export type CollaborationForm = {
  emoji: string;
  title: string;
  description: string;
};

export const collaborationForms: CollaborationForm[] = [
  {
    emoji: '🔬',
    title: 'Research Collaboration',
    description: 'Joint research projects, publikasi bersama, dan sharing resources',
  },
  {
    emoji: '📚',
    title: 'Knowledge Exchange',
    description: 'Seminar, workshop, webinar, dan training programs',
  },
  {
    emoji: '👨‍🎓',
    title: 'Student Exchange',
    description: 'Program pertukaran mahasiswa dan peneliti',
  },
  {
    emoji: '💼',
    title: 'Career Development',
    description: 'Job fairs, internship programs, dan career mentoring',
  },
  {
    emoji: '💰',
    title: 'Funding Support',
    description: 'Grant applications, scholarship information, dan funding opportunities',
  },
  {
    emoji: '🌏',
    title: 'Cultural Exchange',
    description: 'Event budaya, diplomasi ilmiah, dan people-to-people exchange',
  },
];

export type Partnership = {
  title: string;
  description: string;
};

export const currentPartnerships: Partnership[] = [
  {
    title: 'KBRI Seoul & Atdikbud',
    description:
      'Kerjasama berkelanjutan dalam berbagai kegiatan pendidikan, riset, dan budaya. Termasuk dukungan untuk event APIK dan fasilitasi hubungan dengan institusi Korea.',
  },
  {
    title: 'Universitas di Indonesia',
    description:
      'Kolaborasi riset, seminar bersama, dan program mentoring untuk mahasiswa yang berencana melanjutkan studi ke Korea.',
  },
  {
    title: 'Research Institutes Korea',
    description:
      'Partnership untuk joint research, akses ke fasilitas riset, dan technology transfer ke Indonesia.',
  },
];
