export const NAV_LINKS = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

export const HERO_STATS = [
  { num: '2+', label: 'Years Exp.' },
  { num: '10+', label: 'Projects Shipped' },
  // { num: '3', label: 'Live Platforms' },
]

export const ABOUT_CARDS = [
  { icon: '🚀', bg: 'rgba(79,110,247,0.12)', title: 'End-to-end delivery', sub: 'Planning → Development → Deployment' },
  { icon: '🤖', bg: 'rgba(124,58,237,0.12)', title: 'AI integrations', sub: 'Image enhancement, contract extraction, chatbots' },
  { icon: '⚡', bg: 'rgba(6,182,212,0.12)', title: 'Real-time systems', sub: 'Live dashboards, notifications, workflows' },
  { icon: '👥', bg: 'rgba(16,185,129,0.12)', title: 'Team collaboration', sub: 'Cross-functional teams, code reviews, mentoring' },
]

export const SKILLS = [
  { cat: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'] },
  { cat: 'Backend', items: ['Node.js', 'Express.js', 'Python', 'Firebase', 'REST APIs'] },
  { cat: 'Databases', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'] },
  { cat: 'DevOps & Tools', items: ['Docker', 'Git', 'GitHub', 'Linux'] },
  { cat: 'Specializations', items: ['AI Integrations', 'Real-time Systems', 'Multi-role Platforms', 'Subscription Billing'] },
  { cat: 'Currently Learning', items: ['AWS', 'GraphQL', 'System Design'] },
]

export const PROJECTS = [
  {
    num: '01',
    title: 'MyListIQ',
    tags: ['MERN Stack', 'AI Integration', 'Real Estate'],
    tagColors: [
      { bg: 'rgba(79,110,247,.15)', color: '#818CF8', border: 'rgba(79,110,247,.25)' },
      { bg: 'rgba(6,182,212,.15)', color: '#22D3EE', border: 'rgba(6,182,212,.25)' },
      { bg: 'rgba(124,58,237,.15)', color: '#A78BFA', border: 'rgba(124,58,237,.25)' },
    ],
    desc: 'A full-stack real estate platform featuring auto-import of property details by county address, AI-powered image enhancement that sharpens blurry images with a single click, and a dynamic 6-template selection system with live preview populated by actual property data.',
    features: ['AI Image Enhancement', 'Auto-import by address', '6 dynamic templates', 'Email scheduling', 'Subscription billing'],
    glowColor: '#4F6EF7',
  },
  {
    num: '02',
    title: 'Logic Close',
    tags: ['Multi-role', 'AI Contract', 'Real Estate'],
    tagColors: [
      { bg: 'rgba(6,182,212,.15)', color: '#22D3EE', border: 'rgba(6,182,212,.25)' },
      { bg: 'rgba(16,185,129,.15)', color: '#34D399', border: 'rgba(16,185,129,.25)' },
      { bg: 'rgba(79,110,247,.15)', color: '#818CF8', border: 'rgba(79,110,247,.25)' },
    ],
    desc: 'A multi-role real estate transaction platform for Agents, Buyers, and Sellers. AI automatically extracts and displays key contract details, generates step-by-step task timelines based on contract dates, and powers a 5-event, 3-channel notification system across 4 user roles.',
    features: ['AI contract extraction', 'Auto task timelines', 'Real-time dashboard', 'Professional hiring flow', 'Multi-channel alerts'],
    glowColor: '#06B6D4',
  },
  {
    num: '03',
    title: 'Goalmogul',
    tags: ['MERN Stack', 'AI Chatbot', 'Goal Tracking'],
    tagColors: [
      { bg: 'rgba(124,58,237,.15)', color: '#A78BFA', border: 'rgba(124,58,237,.25)' },
      { bg: 'rgba(79,110,247,.15)', color: '#818CF8', border: 'rgba(79,110,247,.25)' },
      { bg: 'rgba(6,182,212,.15)', color: '#22D3EE', border: 'rgba(6,182,212,.25)' },
    ],
    desc: "Full-stack reminder workflows enabling 'For Me' and 'For Other' goal contexts with AI-powered interactions. Built smart action buttons integrated with Node.js/Express APIs to trigger AI-generated steps and chatbot messages with tone-adaptive personalized follow-ups.",
    features: ['AI chatbot workflows', 'Tone-adaptive responses', 'Smart action buttons', 'Personalized follow-ups'],
    glowColor: '#7C3AED',
  },
]

export const EXPERIENCE = [
  {
    period: 'Nov 2025 – Present',
    role: 'Full-Stack Developer',
    company: 'Exotica IT Solutions Pvt. Ltd.',
    location: 'Mohali, Punjab',
    desc: 'Taking ownership of complete project lifecycles across multiple client projects — from requirement gathering and planning to development, testing, and production deployment. Collaborating with designers, project managers, and backend teams to deliver robust solutions while maintaining clean code standards.',
  },
  {
    period: 'Nov 2024 – Oct 2025',
    role: 'MERN Stack Developer',
    company: 'ArthTech Supports Pvt. Ltd.',
    location: 'Mohali, Punjab',
    desc: 'Led end-to-end development and deployment of scalable web applications and APIs, ensuring high performance and on-time delivery. Integrated real-time features, automated workflows, and enhanced system efficiency through optimized processes across multiple projects.',
  },
  {
    period: 'Jan 2024 – Jun 2024',
    role: 'MERN Stack Training',
    company: 'E-Karma Training',
    location: 'Hisar, Haryana',
    desc: 'Completed Full-Stack Web Development Training organized by the Directorate of Higher Education, Government of Haryana. Gained hands-on experience in real-world web development and developed entrepreneurial and project management skills.',
  },
]

export const EDUCATION = [
  { degree: 'MCA', institution: 'Guru Jambheshwar University', location: 'Hisar', period: 'Aug 2025 – Jul 2027' },
  { degree: 'BCA', institution: 'D.N. College', location: 'Hisar', period: 'Aug 2021 – Jul 2024' },
]

export const CONTACT_LINKS = [
  { icon: '📞', label: 'Call or WhatsApp', text: '+91 97282 01214', href: 'tel:+919728201214' },
  { icon: '✉️', label: 'Email me', text: 'chetanchughh@gmail.com', href: 'mailto:chetanchughh@gmail.com' },
  { icon: '💼', label: 'LinkedIn', text: 'linkedin.com/in/chetan-chugh', href: 'https://www.linkedin.com/in/chetan-chugh', external: true },
]
