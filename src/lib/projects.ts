export interface Project {
  category: string;
  title: string;
  description: string;
  platform: string;
  imageUrl: string;
  caseStudyUrl: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: 'Payment Automation Dashboard',
    description:
      'A streamlined dashboard for automating payment processes, tracking transactions, and ensuring smooth financial management.',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'Figma'],
    category: 'FinTech',
    platform: 'Web & Mobile',
    imageUrl: '/projects/spark.png',
    caseStudyUrl: 'https://www.sparkpayhq.com/',
  },
  {
    title: 'Service Plus Connect',
    description:
      'A service marketplace connecting users with verified professionals for easy booking across multiple service categories, featuring provider profiles, a smooth booking flow, and a fully responsive UI.',
    tags: ['Next.js', 'TypeScript', 'Python', 'TensorFlow'],
    category: 'Web App',
    platform: 'Web Platform',
    imageUrl: '/projects/spc.png',
    caseStudyUrl: 'https://serviceplusconnect.com/',
  },
  {
    title: 'Cliq Up',
    description:
      'A social-hangout platform that helps people discover nearby friends, join or create small-group activities, and organize hangouts. Users can build interest-based friend-groups (CLIQs), browse local events/activities, and easily connect with like-minded people.',
    tags: ['Next.js', 'TypeScript', 'Python'],
    category: 'Web App',
    platform: 'Social Platform',
    imageUrl: '/projects/cliq.png',
    caseStudyUrl: 'https://www.cliqup.co/',
  },
  {
    title: 'Members Learning & Training Dashboard',
    description:
      'A streamlined dashboard for delivering lessons, tracking progress, and supporting member learning and training.',
    tags: ['Next.js', 'TypeScript', 'PHP', 'MySQL', 'Figma'],
    category: 'Web App',
    platform: 'Learning Platform',
    imageUrl: '/projects/fojo.png',
    caseStudyUrl: 'https://fojoglobal.co.uk/',
  },
  {
    title: 'Attendance Management System',
    description:
      'A smart dashboard for tracking attendance, monitoring member activity, and providing insights for better church engagement.',
    tags: ['React Native', 'Firebase'],
    category: 'Mobile App',
    platform: 'Mobile Application',
    imageUrl: '/projects/gcc.png',
    caseStudyUrl: 'https://gcccibadan.org/',
  },
  {
    title: 'Viridis Green',
    description:
      'Empowering businesses to convert obstacles into competitive advantages with innovative, data-driven solutions.',
    tags: ['Next.js', 'TypeScript'],
    category: 'Web App',
    platform: 'Business Platform',
    imageUrl: '/projects/vir.png',
    caseStudyUrl: 'https://www.viridisgreen.co.uk/',
  },
  {
    title: 'Lush Corporate Service Limited',
    description:
      'Turn compliance into confidence with Lush Corporate Services—expert training, consulting, and coaching to help your organization thrive.',
    tags: ['Python', 'TensorFlow'],
    category: 'Web App',
    platform: 'Corporate Platform',
    imageUrl: '/projects/lush.png',
    caseStudyUrl: 'https://www.lushcorporate.co.uk/',
  },
];
