export const PROFILE = {
  name: 'Pavneet Kour',
  title: 'Software Engineer',
  phone: '+91-7006338870',
  email: 'pavneetkour30@gmail.com',
  summary:
    'Mobile App Developer with a proven track record of creating successful mobile applications. I use agile and scrum practices to ensure business deadlines are met. A leader, self-starter, constant learner, and problem solver.',
};

export const EDUCATION = {
  school: 'Mahant Bachitar Singh College of Engineering & Technology',
  degree: 'B.E. (Electronics and Communication)',
  period: '2012 – 2016',
};

export const SKILLS = [
  'React Native',
  'React.js',
  'JavaScript / TypeScript',
  'GraphQL',
  'Redux',
  'REST APIs',
  'Firebase',
  'RevenueCat',
  'Sendbird',
  'Mixpanel',
  'Firebase Crashlytics',
  'Google Maps',
  'Push Notifications',
  'Social Login',
  'Payment Gateways',
  'App Store & Play Store',
  'Xcode',
  'Android Studio',
];

export const ACHIEVEMENTS = [
  'App Store recognition for positive reviews',
  'Optimized performance bottlenecks across production apps',
  'Reduced crash rates and improved app load time',
  'Responsive design implementation across devices',
  'Mobile SDK integration across multiple product domains',
];

export type Experience = {
  company: string;
  role: string;
  period: string;
};

export const EXPERIENCE: Experience[] = [
  {
    company: 'JubileeMedia',
    role: 'Software Engineer',
    period: 'Aug 2024 – July 2026',
  },
  {
    company: 'Netsmartz',
    role: 'Software Engineer',
    period: 'Sept 2022 – Jan 2024',
  },
  {
    company: 'Netqom Solutions Pvt Ltd.',
    role: 'Software Engineer',
    period: 'Sept 2022 – Jan 2024',
  },
  {
    company: 'iApp Technologies LLP',
    role: 'Software Engineer',
    period: 'Sept 2022 – Jan 2024',
  },
  {
    company: 'Rexweb Technologies',
    role: 'Jr. React Native Developer',
    period: 'Mar 2019 – Aug 2019',
  },
];

export type Project = {
  name: string;
  role?: string;
  stack: string;
  highlights: string[];
};

export const PROJECTS: Project[] = [
  {
    name: 'Nectar Dating',
    role: 'Software Engineer · JubileeMedia',
    stack: 'React Native · Expo · TypeScript · iOS · Android',
    highlights: [
      'Built and shipped production features for a React Native (Expo) dating app on iOS and Android',
      'Developed real-time messaging with Sendbird, including chat UI, media, and channel navigation',
      'Implemented cross-platform push notifications (FCM, Pushwoosh) with deep-linking into chat, likes, and matches',
      'Delivered core mobile flows: onboarding, discovery/matching, likes, profiles, compatibility, and boosts',
      'Integrated GraphQL (Apollo) and Firebase Auth for authenticated, data-driven mobile screens',
      'Built subscription and paywall experiences with RevenueCat for likes, boosts, and premium features',
      'Implemented analytics tracking across key user flows using Mixpanel and Pushwoosh',
    ],
  },
  {
    name: 'SambaCare',
    role: 'Software Engineer',
    stack: 'React Native · iOS · Android',
    highlights: [
      'Healthcare staffing platform connecting caregivers with healthcare facilities',
    ],
  },
  {
    name: 'PayRide Driver',
    stack: 'React Native · iOS · Android',
    highlights: [
      'Driver application with trip management, navigation, payments, and earnings tracking',
    ],
  },
  {
    name: 'LOKBEST',
    stack: 'React Native · iOS · Android',
    highlights: [
      'Self-service shopping app with QR code scanning, in-app payments, and local product discovery',
    ],
  },
  {
    name: 'CrowdCar',
    stack: 'React Native · iOS · Android',
    highlights: [
      'On-demand delivery platform with request management, in-app chat, secure payments, and tipping',
    ],
  },
  {
    name: 'The Pros411',
    stack: 'React Native · iOS · Android',
    highlights: [
      'Contractor review platform helping homeowners find trusted professionals through verified reviews',
    ],
  },
];
