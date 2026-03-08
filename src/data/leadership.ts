export type LeadershipPosition = {
  title: string;
  name: string;
  subtitle: string;
  category: 'pengurus' | 'direktorat';
  photo?: string;
  link?: string;
};

export const leadershipData: LeadershipPosition[] = [
  // Dewan Pengurus Harian
  {
    title: 'Ketua Umum',
    name: 'Nurhadi Sukma Waluyo',
    subtitle: 'Ph.D.',
    category: 'pengurus',
    link: 'https://scholar.google.com/citations?user=HK-UsSsAAAAJ&hl=en',
  },
  {
    title: 'Wakil Ketua I',
    name: 'Vanna Chrismas Silalahi',
    subtitle: 'Ph.D.',
    category: 'pengurus',
    link: 'https://scholar.google.com/citations?user=RwN4JGgAAAAJ&hl=en',
  },
  {
    title: 'Wakil Ketua II',
    name: 'Romel Hidayat',
    subtitle: 'Ph.D.',
    category: 'pengurus',
    link: 'https://scholar.google.co.kr/citations?user=haXO-1kAAAAJ&hl=en',
  },
  {
    title: 'Wakil Ketua III',
    name: 'Agus Ismail',
    subtitle: 'Ph.D.',
    category: 'pengurus',
    link: 'https://scholar.google.co.id/citations?user=uZ07P78AAAAJ&hl=en',
  },
  {
    title: 'Sekretaris',
    name: 'Heri Akhmadi',
    subtitle: 'Ph.D.',
    category: 'pengurus',
    link: 'https://scholar.google.com/citations?user=pKDoIDcAAAAJ&hl=en',
  },
  {
    title: 'Bendahara',
    name: 'Ancilla Katherina Kustedjo',
    subtitle: 'Researcher',
    category: 'pengurus',
    link: 'https://scholar.google.com/citations?user=6plhl0AAAAAJ&hl=en',
  },
  // Direktorat
  {
    title: 'Direktorat Kelembagaan',
    name: 'Byantara Darsan Purusatama',
    subtitle: 'Director',
    category: 'direktorat',
    link: 'https://scholar.google.com/citations?user=uGHSC4UAAAAJ&hl=en',
  },
  {
    title: 'Direktorat Pendidikan dan Keahlian',
    name: 'Iyan Subiyanto',
    subtitle: 'Director',
    category: 'direktorat',
    link: 'https://scholar.google.com/citations?user=LJOd2SYAAAAJ&hl=en',
  },
  {
    title: 'Direktorat Riset dan Inovasi',
    name: 'Syahril Sulaiman',
    subtitle: 'Director',
    category: 'direktorat',
    link: 'https://scholar.google.com/citations?user=ZUPzUE0AAAAJ&hl=en',
  },
  {
    title: 'Direktorat Digital dan Media',
    name: 'Aji Teguh Prihatno',
    subtitle: 'Director',
    category: 'direktorat',
    link: 'https://scholar.google.com/citations?user=N_-o750AAAAJ&hl=en',
  },
  {
    title: 'Direktorat Kerjasama',
    name: 'Reza Asriandi Ekaputra',
    subtitle: 'Director',
    category: 'direktorat',
    link: 'https://scholar.google.com/citations?hl=en&user=xxVvoJsAAAAJ&',
  },
];

export const pengurusData = leadershipData.filter((item) => item.category === 'pengurus');
export const direktoratData = leadershipData.filter((item) => item.category === 'direktorat');
