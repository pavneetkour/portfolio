export const PROFILE = {
  name: 'Pavneet Kour',
  headline: 'React Native Developer',
  title: 'Software Engineer',
  phone: '+91-7006338870',
  email: 'pavneetkour30@gmail.com',
  tagline: '6+ years of experience building scalable mobile applications for iOS & Android.',
  summary:
    'Mobile App Developer with a proven track record of creating successful mobile applications. I use agile and scrum practices to ensure business deadlines are met. A leader, self-starter, constant learner, and problem solver.',
  github: 'https://github.com/pavneetkour',
  linkedin: 'https://linkedin.com/in/pavneetkour',
};

export const QUICK_SKILLS = ['React Native', 'TypeScript', 'GraphQL'];

export const WHAT_I_BRING = [
  '6+ years of React Native development',
  'React.js & TypeScript expertise',
  'Experience across multiple domains (dating, healthcare, ride-sharing, grocery, delivery, e-commerce)',
  'Strong problem-solving and clean, maintainable code',
  'Agile & scrum practices for on-time delivery',
];

export const EDUCATION = {
  school: 'Mahant Bachitar Singh College of Engineering & Technology',
  degree: 'B.E. (Electronics and Communication)',
  period: '2012 – 2016',
};

export const ACHIEVEMENTS = [
  'App Store recognition for positive reviews',
  'Optimized performance bottlenecks across production apps',
  'Reduced crash rates and improved app load time',
  'Responsive design implementation across devices',
  'Mobile SDK integration across multiple product domains',
];

export const ENGINEERING_HIGHLIGHTS = [
  'React Native performance optimization',
  'Real-time messaging architecture with Sendbird',
  'Push notification deep-linking (FCM, Pushwoosh)',
  'Subscription monetization with RevenueCat',
  'GraphQL + Apollo Client integration patterns',
  'App Store & Google Play deployment workflows',
];

export type TechCategory = {
  title: string;
  icon: string;
  items: string[];
};

export const TECH_CATEGORIES: TechCategory[] = [
  {
    title: 'Mobile',
    icon: 'phone-portrait-outline',
    items: ['React Native', 'Expo', 'TypeScript'],
  },
  {
    title: 'State & Data',
    icon: 'server-outline',
    items: ['Redux', 'Apollo Client', 'GraphQL', 'Firebase'],
  },
  {
    title: 'Payments',
    icon: 'card-outline',
    items: ['RevenueCat', 'Stripe', 'In-App Purchases', 'Paywalls'],
  },
  {
    title: 'Communication',
    icon: 'chatbubbles-outline',
    items: ['Sendbird', 'FCM', 'Pushwoosh', 'Deep Linking'],
  },
  {
    title: 'Maps & Analytics',
    icon: 'map-outline',
    items: ['Google Maps', 'Mixpanel', 'Sentry',],
  },
  {
    title: 'DevOps & Tools',
    icon: 'build-outline',
    items: ['EAS Build', 'GitHub Actions', 'Xcode', 'Android Studio'],
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    company: 'JubileeMedia',
    role: 'Software Engineer',
    period: 'Aug 2024 – July 2026',
    highlights: [
      'Led feature development for Nectar dating app on iOS & Android',
      'Built real-time chat, push notifications, and subscription flows',
    ],
  },
  {
    company: 'Netsmartz',
    role: 'Software Engineer',
    period: 'Sept 2022 – Jan 2024',
    highlights: ['Delivered cross-platform mobile solutions for enterprise clients'],
  },
  {
    company: 'Netqom Solutions Pvt Ltd.',
    role: 'Software Engineer',
    period: 'Sept 2022 – Jan 2024',
    highlights: ['Built and maintained React Native applications end-to-end'],
  },
  {
    company: 'iApp Technologies LLP',
    role: 'Software Engineer',
    period: 'Sept 2022 – Jan 2024',
    highlights: ['Shipped mobile features across multiple product verticals'],
  },
  {
    company: 'Rexweb Technologies',
    role: 'Jr. React Native Developer',
    period: 'Mar 2019 – Aug 2019',
    highlights: ['Started React Native career building consumer mobile apps'],
  },
];

export type Project = {
  id: string;
  name: string;
  subtitle: string;
  role?: string;
  stack: string[];
  tags: string[];
  color: string;
  emoji: string;
  description: string;
  highlights: string[];
  caseStudy?: {
    title: string;
    problem: string;
    solution: string;
    tech: string[];
  };
};

export const PROJECTS: Project[] = [
  {
    id: 'nectar',
    name: 'Nectar',
    subtitle: 'Dating App',
    role: 'Software Engineer · JubileeMedia',
    stack: ['React Native', 'Expo', 'TypeScript', 'GraphQL', 'Sendbird'],
    tags: ['Dating', 'Real-time Chat', 'Subscriptions'],
    color: '#FF6B9D',
    emoji: '💜',
    description:
      'Production dating app with matching, real-time messaging, push notifications, and premium subscriptions on iOS & Android.',
    highlights: [
      'Real-time messaging with Sendbird including media and channel navigation',
      'Cross-platform push notifications with deep-linking into chat, likes, and matches',
      'Core flows: onboarding, discovery, likes, profiles, compatibility, and boosts',
      'GraphQL (Apollo) + Firebase Auth for authenticated screens',
      'RevenueCat paywalls for likes, boosts, and premium features',
      'Analytics with Mixpanel and Pushwoosh across key user flows',
    ],
    caseStudy: {
      title: 'Real-time Messaging in a Dating App',
      problem: 'Users needed reliable, low-latency chat with media support and push-driven re-engagement.',
      solution:
        'Architected Sendbird integration with custom UI, optimistic updates, and FCM/Pushwoosh deep links into active channels.',
      tech: ['Sendbird', 'FCM', 'Pushwoosh', 'GraphQL', 'Expo'],
    },
  },
  {
    id: 'sambacare',
    name: 'SambaCare',
    subtitle: 'Healthcare Staffing',
    role: 'Software Engineer',
    stack: ['React Native', 'REST APIs', 'Firebase'],
    tags: ['Healthcare', 'Staffing'],
    color: '#4ECDC4',
    emoji: '🏥',
    description: 'Healthcare staffing platform connecting caregivers with healthcare facilities.',
    highlights: [
      'Caregiver onboarding and profile management',
      'Facility matching and shift scheduling flows',
      'Secure authentication and role-based access',
    ],
  },
  {
    id: 'payride',
    name: 'PayRide Driver',
    subtitle: 'Ride-sharing',
    stack: ['React Native', 'Google Maps', 'Payments'],
    tags: ['Transport', 'Navigation', 'Payments'],
    color: '#FFD93D',
    emoji: '🚗',
    description: 'Driver app with trip management, navigation, payments, and earnings tracking.',
    highlights: [
      'Live trip management and route navigation',
      'In-app payments and earnings dashboard',
      'Driver availability and trip history',
    ],
    caseStudy: {
      title: 'Location & Ride Management',
      problem: 'Drivers needed reliable trip tracking, navigation, and payment reconciliation.',
      solution: 'Integrated Google Maps with background location updates and a unified earnings module.',
      tech: ['Google Maps', 'React Native', 'REST APIs'],
    },
  },
  {
    id: 'lokbest',
    name: 'LOKBEST',
    subtitle: 'Self-service Shopping',
    stack: ['React Native', 'QR Scanner', 'Payments'],
    tags: ['Retail', 'QR', 'Payments'],
    color: '#A78BFA',
    emoji: '🛒',
    description: 'Self-service shopping with QR scanning, in-app payments, and local product discovery.',
    highlights: [
      'QR code product scanning and cart management',
      'In-app payment integration',
      'Local store and product discovery',
    ],
  },
  {
    id: 'crowdcar',
    name: 'CrowdCar',
    subtitle: 'On-demand Delivery',
    stack: ['React Native', 'Chat', 'Payments'],
    tags: ['Delivery', 'Chat', 'Tipping'],
    color: '#F97316',
    emoji: '📦',
    description: 'On-demand delivery with request management, in-app chat, secure payments, and tipping.',
    highlights: [
      'Request lifecycle management for deliveries',
      'In-app chat between users and drivers',
      'Secure payments with tipping support',
    ],
  },
  {
    id: 'pros411',
    name: 'The Pros411',
    subtitle: 'Contractor Reviews',
    stack: ['React Native', 'REST APIs'],
    tags: ['Marketplace', 'Reviews'],
    color: '#38BDF8',
    emoji: '⭐',
    description: 'Contractor review platform helping homeowners find trusted professionals.',
    highlights: [
      'Verified contractor profiles and reviews',
      'Search and filter by service category',
      'Homeowner-to-contractor communication flows',
    ],
  },
];

export function getProject(id: string) {
  return PROJECTS.find((p) => p.id === id);
}
