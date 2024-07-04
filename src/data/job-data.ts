import { Description } from '@headlessui/react/dist/components/description/description';

export const requisitions = [
  {
    id: '3416',
    date: '2022-11-10T06:22:01.621Z',
    category: 'Fundi',
    subCategory: 'Electrician',
    requestType: 'Emergency',
    description: 'plumbing work',
    location: 'Kome,Homabay',
    status: 'Open',
  },
  {
    id: '3419',
    date: '2022-11-10T06:22:01.621Z',
    category: 'Professional',
    subCategory: 'Engineer',
    requestType: '2.0',
    description: 'repair faulty wires',
    location: 'Kome,Homabay',
    status: 'Under Review',
  },
];

export const jobData = [
  {
    id: '3324',
    date: '2022-11-10T06:22:01.621Z',
    firstName: 'Steve',
    lastName: 'Limo',
    phone: '0712345678',
    email: 'steve@gmail.com',
    gender: 'Male',
    age: '33',
    location: 'Kome,Homabay',
    inProcess: 25,
    hired: 3,
    category: ['UI/UX', 'Design', 'Figma', 'Adobe', 'Sketch'],
    status: 'Approved',
  },
  {
    id: '3443',
    date: '2022-11-10T06:22:01.621Z',
    firstName: 'Sheila',
    lastName: 'Wambua',
    phone: '0712345678',
    email: 'sha@gmail.com',
    gender: 'Female',
    age: '33',
    location: 'Kome,Homabay',
    inProcess: 25,
    hired: 3,
    category: ['UI/UX', 'Design', 'Figma', 'Adobe', 'Sketch'],
    status: 'Unverified',
  },
];

export const completeJobs = [
  {
    id: '3324',
    completionDate: '2022-11-14T06:22:01.621Z',
    requisitionDate: '2022-11-02T06:22:01.621Z',
    description: 'fixing a water pump',
    specification: 'pedrollo pump 3-60',
    fundi: 'Hassan Rajab',
    review: 'Reviewed',
  },
  {
    id: '3325',
    completionDate: '2022-09-04T06:22:01.621Z',
    requisitionDate: '2022-08-02T06:22:01.621Z',
    description: 'fixing a water pump',
    specification: 'pedrollo pump 3-60',
    fundi: 'Hassan Rajab',
    review: 'Unreviewed',
  },
];

export const activeJobs = [
  {
    id: '3324',
    requisitionDate: '2022-11-02T06:22:01.621Z',
    description: 'fixing a water pump',
    specification: 'drill bit ',
    fundi: 'Hassan Rajab',
    status: 'Ongoing',
  },
  {
    id: '3325',
    requisitionDate: '2022-08-02T06:22:01.621Z',
    description: 'fixing a water pump',
    specification: 'pedrollo pump 3-60',
    fundi: 'Francis Oduor',
    status: 'Completed',
  },
];

export const quotationReportData = [
  {
    item: '1',
    name: 'Kennedy Nyongesa',
    phone: '254123345532',
    level: 'Master Fundi',
    rating: '7',
  },
  {
    item: '2',
    name: 'Paul Mwangangi',
    phone: '254733456673',
    level: 'Skilled Fundi',
    rating: '8',
  },
];

export const singleQuotationReportData = [
  {
    item: '1',
    name: 'Owen Oscar',
    phone: '25412334552',
    level: 'Master Fundi',
    rating: '7',
  },
];

export const quotationData = [
  {
    id: '3324',
    date: '2022-11-10T06:22:01.621Z',
    serviceProvider: 'Owen\u00A0Oscar',
    phone: '0712345678',
    email: 'steve@gmail.com',
    location: 'Kome,Homabay',
    amount: 2500,
    rating: 7,
    score: 6,
    status: 'Reviewed',
  },
  {
    id: '3327',
    date: '2022-11-10T06:22:01.621Z',
    serviceProvider: 'Phyllis\u00A0Wanjala',
    phone: '0792345678',
    gender: 'Male',
    location: 'Kome,Homabay',
    amount: 2500,
    rating: 7,
    score: 6,
    status: 'Unreviewed',
  },
];

export const quotedRequisitionsData = [
  {
    id: '3324',
    date: '2022-11-10T06:22:01.621Z',
    rfqType: 'Emergency',
    subCategory: 'Mason',
    location: 'Kome,Homabay',
    description: '2 Masterfundis',
    category: 'Fundi',
    status: 'Open',
  },
  {
    id: '3336',
    date: '2022-11-10T06:22:01.621Z',
    rfqType: 'Standard',
    subCategory: 'Architect',
    location: 'KE,Rift Valley Narok',
    description: 'Designing 3 bedroom bungalow',
    category: 'Fundi',
    status: 'Under Review',
  },
  {
    id: '3337',
    date: '2022-11-10T06:22:01.621Z',
    rfqType: 'Emergency',
    subCategory: 'Electrician',
    location: 'KE,Rift Valley Narok',
    description: 'Fixing electric fault',
    category: 'Fundi',
    status: 'Unreviewed',
  },
];
