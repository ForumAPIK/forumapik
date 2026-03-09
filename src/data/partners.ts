export type Partner = {
  name: string;
  short: string;
  kind: 'Universitas' | 'Perusahaan' | 'Institusi' | 'Organisasi' | 'Lab';
  href: string;
  logo?: string;
};

export const partnersRowOne: Partner[] = [
  {name: 'KBRI Seoul', short: 'KBRI', kind: 'Institusi', href: '#', logo: '/img/partners/kbri.png'},
  {name: 'BRIN', short: 'BRIN', kind: 'Institusi', href: '#', logo: '/img/partners/brin.png'},
  {name: 'ITS', short: 'ITS', kind: 'Universitas', href: '#', logo: '/img/partners/its.png'},
  {name: 'UBAYA', short: 'UBAYA', kind: 'Universitas', href: '#', logo: '/img/partners/ubaya.png'},
  {name: 'UNDIP', short: 'UNDIP', kind: 'Universitas', href: '#', logo: '/img/partners/undip.png'},
  {name: 'UI', short: 'UI', kind: 'Universitas', href: '#', logo: '/img/partners/ui.png'},
  {name: 'UNEJ', short: 'UNEJ', kind: 'Universitas', href: '#', logo: '/img/partners/unej.png'},
];

export const partnersRowTwo: Partner[] = [
  {name: 'PERPIKA', short: 'PERPIKA', kind: 'Organisasi', href: '#', logo: '/img/partners/perpika.png'},
  {name: 'IMUSKA', short: 'IMUSKA', kind: 'Organisasi', href: '#', logo: '/img/partners/imuska.png'},
  {name: 'IPAKR', short: 'IPAKR', kind: 'Organisasi', href: '#', logo: '/img/partners/ipakr.png'},
  {name: 'Tel-U', short: 'Tel-U', kind: 'Universitas', href: '#', logo: '/img/partners/tel-u.png'},
  {name: 'UNNES', short: 'UNNES', kind: 'Universitas', href: '#', logo: '/img/partners/unnes.jpg'},
  {name: 'BNI', short: 'BNI', kind: 'Perusahaan', href: '#', logo: '/img/partners/bni.png'},
  {name: 'ITI', short: 'ITI', kind: 'Universitas', href: '#', logo: '/img/partners/iti.png'},
];

export const allPartners: Partner[] = [...partnersRowOne, ...partnersRowTwo];
