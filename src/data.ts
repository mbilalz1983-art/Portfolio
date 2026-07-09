import { Project, Initiative, SkillCategory, ImpactStat, TimelineItem } from './types';

export const personalInfo = {
  name: 'Qaisar Roonjha',
  title: 'AI Educator & Community Innovator',
  subtitle: 'Bridging frontier technology and grassroots communities to empower the next generation of digital creators.',
  avatarUrl: '/src/assets/images/founder_avatar_1783583261822.jpg',
  bannerUrl: '/src/assets/images/hero_tech_banner_1783583243377.jpg',
  email: 'qaisar@waseela.pk',
  location: 'Balochistan, Pakistan',
  tagline: 'Empowering Urdu speakers and rural youth with Generative AI skills, localized digital products, and community-led social impact.',
  bio: 'Qaisar Roonjha is a visionary social entrepreneur, AI educator, and community innovator dedicated to digital inclusion. As the founder of Waseela, he leads efforts to bring digital literacy, tech education, and artificial intelligence skills to rural and marginalized communities. Recognizing the language barrier in advanced tech, Qaisar has pioneered the localization of Generative AI concepts into Urdu, training thousands of young minds, and building digital tools that bridge local needs with frontier technology.',
  socials: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    twitter: 'https://twitter.com',
    youtube: 'https://youtube.com',
    medium: 'https://medium.com'
  }
};

export const impactStats: ImpactStat[] = [
  {
    id: 'stat-1',
    value: '15,000+',
    label: 'Youth Trained',
    description: 'Empowered with Generative AI, prompt engineering, and digital creation skills.',
    icon: 'GraduationCap'
  },
  {
    id: 'stat-2',
    value: '50+',
    label: 'Rural Villages Connected',
    description: 'Reached through Waseela Digital Caravans and localized community hubs.',
    icon: 'MapPin'
  },
  {
    id: 'stat-3',
    value: '5+',
    label: 'Urdu AI Products Built',
    description: 'Custom platforms making advanced LLMs accessible to Urdu speakers.',
    icon: 'Cpu'
  },
  {
    id: 'stat-4',
    value: '$150k+',
    label: 'Economic Value Generated',
    description: 'Created by trained rural freelancers and digital entrepreneurs.',
    icon: 'TrendingUp'
  }
];

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'UrduGPT Companion',
    description: 'The first localized, high-context AI chatbot interface specifically fine-tuned and engineered for cultural nuances in the Urdu language, bypassing English proficiency requirements.',
    category: 'Urdu AI',
    technologies: ['React', 'TypeScript', 'Gemini Pro', 'Tailwind CSS', 'Node.js'],
    imageUrl: 'https://picsum.photos/seed/urdugpt/800/500',
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 'proj-2',
    title: 'Shaur AI Workflow Builder',
    description: 'A visual, no-code AI workflow automation assistant designed for rural and small-scale entrepreneurs to automate marketing, copywriting, and inventory management in local scripts.',
    category: 'Digital Products',
    technologies: ['React Flow', 'OpenAI API', 'Vite', 'PostgreSQL'],
    imageUrl: 'https://picsum.photos/seed/shaur/800/500',
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 'proj-3',
    title: 'EdTech Urdu AI Academy',
    description: 'An interactive, gamified portal offering comprehensive bite-sized course modules on Prompt Engineering, Midjourney artistry, and ChatGPT workflows in video and text format in Urdu.',
    category: 'Education',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'YouTube API'],
    imageUrl: 'https://picsum.photos/seed/academy/800/500',
    demoUrl: '#',
    featured: false
  },
  {
    id: 'proj-4',
    title: 'Deh-Smart Agricultural Insights',
    description: 'An AI-powered voice assistant tool deployed on low-cost tablets in rural community centers that answers agricultural and market queries in local languages using RAG architectures.',
    category: 'Tools',
    technologies: ['Python', 'FastAPI', 'Whisper API', 'Google Cloud Text-to-Speech'],
    imageUrl: 'https://picsum.photos/seed/dehsmart/800/500',
    demoUrl: '#',
    githubUrl: '#',
    featured: false
  }
];

export const initiatives: Initiative[] = [
  {
    id: 'init-1',
    title: 'Waseela Digital Caravan',
    role: 'Founder & Program Director',
    organization: 'Waseela Foundation',
    period: '2023 - Present',
    category: 'Rural Innovation',
    description: 'A mobile solar-powered computer classroom equipped with high-speed satellite internet and laptops, touring remote villages in Balochistan to conduct intensive 3-day bootcamps on digital tools and AI.',
    highlights: [
      'Successfully toured 28 underserved communities and remote rural settlements.',
      'Provided hands-on digital exposure to over 4,500 children and youth who never saw a laptop before.',
      'Built a community support network of local digital mentors to sustain post-caravan learning.'
    ],
    imageUrl: 'https://picsum.photos/seed/caravan/800/500'
  },
  {
    id: 'init-2',
    title: 'Urdu AI Localization Guild',
    role: 'Co-Initiator',
    organization: 'Grassroots Tech Collaborative',
    period: '2024 - Present',
    category: 'Community',
    description: 'An open-source collective of local developers, linguists, and community workers curated to gather high-quality regional Urdu conversational datasets to improve the performance of global LLMs in local contexts.',
    highlights: [
      'Crowdsourced and cleaned 50,000+ unique, high-context Urdu instruction pairs.',
      'Organized monthly online and offline localization hackathons.',
      'Collaborated with global researchers to benchmark models on Urdu comprehension.'
    ],
    imageUrl: 'https://picsum.photos/seed/guild/800/500'
  },
  {
    id: 'init-3',
    title: 'Rural Creator Lab',
    role: 'Chief Mentor',
    organization: 'Waseela Hub',
    period: '2022 - Present',
    category: 'Social Impact',
    description: 'A tech incubator and co-working micro-space designed to support young content creators and freelance micro-entrepreneurs from remote regions, assisting them in leveraging AI for economic self-reliance.',
    highlights: [
      'Incubated over 120+ active freelance creators generating micro-incomes.',
      'Delivered structured coaching on YouTube optimization, visual asset design, and transcription.',
      'Forged partnerships with international payment proxies to ease cross-border earnings.'
    ],
    imageUrl: 'https://picsum.photos/seed/creatorlab/800/500'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'AI & Frontier Technology',
    icon: 'Brain',
    skills: [
      { name: 'Generative AI Workflows', level: 95 },
      { name: 'Prompt Engineering & Tuning', level: 98 },
      { name: 'Urdu AI & NLP Localization', level: 90 },
      { name: 'RAG & Custom Vector Databases', level: 82 },
      { name: 'No-Code AI App Builders', level: 92 }
    ]
  },
  {
    title: 'Community & Social Innovation',
    icon: 'Users',
    skills: [
      { name: 'Rural Community Mobilization', level: 95 },
      { name: 'Tech Program Curriculum Design', level: 90 },
      { name: 'Ecosystem & Partnerships Development', level: 88 },
      { name: 'Youth Mentorship & Instruction', level: 94 },
      { name: 'Grassroots Project Management', level: 92 }
    ]
  },
  {
    title: 'Digital Creation & Products',
    icon: 'Sparkles',
    skills: [
      { name: 'Educational Content Production', level: 92 },
      { name: 'UI/UX Design (Web/Mobile)', level: 85 },
      { name: 'Digital Asset Development', level: 88 },
      { name: 'Technical Writing (English & Urdu)', level: 94 },
      { name: 'No-Code Product Prototyping', level: 90 }
    ]
  }
];

export const timelineItems: TimelineItem[] = [
  {
    year: '2025 - 2026',
    title: 'Founder & Executive Director',
    organization: 'Waseela AI Hubs & Caravans',
    description: 'Launched localized, solar-powered educational caravans and AI centers in rural Balochistan, creating a template for accessible tech hubs in hard-to-reach geographical terrains.',
    type: 'career'
  },
  {
    year: '2024',
    title: 'Launched UrduGPT Portal & AI Guild',
    organization: 'Community Tech Initiative',
    description: 'Developed and open-sourced the UrduGPT Companion, establishing an open collaborative guild to collect localized language data and fine-tune models to bypass language barriers.',
    type: 'milestone'
  },
  {
    year: '2023',
    title: 'Pioneered Local AI Literacy Bootcamps',
    organization: 'EdTech Urdu / Self-employed',
    description: 'Created Urdu-based prompt engineering and creator curriculums, reaching over 10,000 active learners online and organizing dozens of physical hands-on workshops.',
    type: 'career'
  },
  {
    year: '2022',
    title: 'Established Waseela Foundation',
    organization: 'Waseela Org',
    description: 'Incorporated Waseela to tackle digital inequity, focusing on mobile learning, internet expansion, and basic computing tools for young girls and boys in rural areas.',
    type: 'milestone'
  },
  {
    year: '2020 - 2021',
    title: 'Consultant on Digital Empowerment',
    organization: 'International & National NGOs',
    description: 'Advised key development partners on designing and executing computer training curriculums, mobile app launches, and digital inclusion strategies for regional remote youth.',
    type: 'career'
  }
];
