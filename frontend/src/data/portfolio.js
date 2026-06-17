export const profile = {
  name: 'Rahul Pal',
  role: 'Full Stack Developer',
  email: 'rahul@example.com',
  location: 'India',
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',
  resumeUrl: '/resume.pdf',
  summary:
    'Full stack developer with strong DSA fundamentals, 800+ coding problems solved, and a focus on reliable MERN applications.',
}

export const projects = [
  {
    _id: 'krishisetu',
    title: 'KrishiSetu - Direct Farm Trading Platform',
    category: 'Full Stack',
    description:
      'A full-stack marketplace that enables farmers to sell products directly to nearby customers, reducing dependency on middlemen.',
    problem:
      'Farmers often depend on middlemen to reach buyers, which can reduce profit margins and make local discovery harder for customers.',
    role: 'Developed the full-stack marketplace, including frontend flows, secure authentication, REST APIs, and MongoDB-backed product discovery.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
    features: [
      'Direct farmer-to-customer marketplace',
      'Location-based product discovery with MongoDB GeoJSON',
      'JWT authentication with role-based access control',
      'Product management, cart handling, and order processing APIs',
      'Responsive React and Tailwind CSS frontend',
    ],
    challenge:
      'The platform needed efficient hyperlocal search and filtering while supporting separate farmer and customer workflows.',
    learned: 'Improved practical full-stack skills in geospatial querying, role-based auth, scalable REST API design, and responsive marketplace UX.',
    githubLink: 'https://github.com/',
    liveLink: 'https://example.com',
  },
  {
    _id: 'complaint-management-system',
    title: 'Complaint Management System',
    category: 'Backend',
    description:
      'A secure backend system that helps users submit and track complaints while administrators manage complaint status and users.',
    problem:
      'Many organizations rely on manual complaint handling, which makes status tracking unclear for users and issue resolution difficult for administrators.',
    role: 'Built the Node.js and MongoDB backend, authentication flow, role-based permissions, admin complaint workflows, logging, and production security setup.',
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'Google OAuth', 'JWT', 'Docker'],
    features: [
      'Secure complaint submission and tracking',
      'Google OAuth and JWT authentication',
      'Role-based access control for users and admins',
      'Admin dashboard for complaint status updates',
      'Helmet, rate limiting, CORS, Winston logging, and Docker deployment',
    ],
    challenge:
      'The backend needed secure access control, transparent complaint tracking, and admin workflows that could scale beyond manual processes.',
    learned: 'Learned secure authentication, RBAC, scalable REST API design, backend security with Helmet, rate limiting and CORS, Docker deployment, and Winston-based logging.',
    githubLink: 'https://github.com/',
    liveLink: 'https://example.com',
  },
  {
    _id: 'responsive-ui-kit',
    title: 'Responsive UI System',
    category: 'Frontend',
    description:
      'Reusable sections, cards, forms, filters, timelines, and navigation patterns designed for portfolio storytelling.',
    problem: 'Recruiters scan quickly, so the interface needs strong hierarchy and fast proof points.',
    role: 'Built the visual system, responsive sections, and recruiter-focused content flow.',
    techStack: ['React', 'Tailwind', 'Vite', 'CSS'],
    features: ['Responsive sections', 'Project filters', 'Contact states', 'SEO-ready structure'],
    challenge:
      'The design had to feel polished without becoming a heavy marketing landing page.',
    learned: 'Strong spacing, restraint, and real content make a portfolio feel trustworthy.',
    githubLink: 'https://github.com/',
    liveLink: 'https://example.com',
  },
]

export const skillGroups = [
  {
    title: 'Frontend',
    level: 'Advanced',
    items: ['React', 'Routing', 'Responsive UI', 'Stateful forms'],
  },
  {
    title: 'Backend',
    level: 'Intermediate',
    items: ['Node.js', 'Express', 'JWT Auth', 'REST APIs'],
  },
  {
    title: 'Database',
    level: 'Intermediate',
    items: ['MongoDB', 'Mongoose', 'CRUD flows', 'Schema design'],
  },
  {
    title: 'DSA',
    level: 'Strong',
    items: ['Arrays', 'Linked Lists', 'Stacks', 'Queues', 'Hash Maps', 'Trees', 'Graphs'],
  },
]

export const achievements = [
  { title: '800+ Coding Problems Solved', detail: 'Practiced problem solving across LeetCode, GeeksforGeeks, HackerRank, and similar coding platforms.' },
  { title: 'Strong DSA Foundation', detail: 'Covered arrays, linked lists, stacks, queues, hash maps, trees, graphs, and core algorithmic patterns.' },
  { title: 'MERN Portfolio System', detail: 'Built a complete full-stack portfolio with auth-ready APIs and polished UI.' },
  { title: 'API Reliability Upgrade', detail: 'Added mock fallback and health checks so the project remains demo-ready.' },
]

export const timeline = [
  { year: '2026', title: 'Full-stack portfolio upgrade', detail: 'Refined the project into a recruiter-ready MERN showcase.' },
  { year: '2025', title: 'DSA and MERN stack practice', detail: 'Solved 800+ coding problems while building React interfaces, Express APIs, MongoDB models, and JWT auth.' },
  { year: '2024', title: 'Computer Science foundation', detail: 'Built core programming, database, and web development fundamentals.' },
]

export const testimonials = [
  {
    quote: 'Rahul communicates clearly, learns quickly, and focuses on practical implementation.',
    name: 'Project Mentor',
    role: 'Academic guide',
  },
  {
    quote: 'His work shows attention to both backend logic and user-facing polish.',
    name: 'Team Collaborator',
    role: 'Developer peer',
  },
]

export const blogNotes = [
  { title: 'How solving 800+ DSA problems improved my coding approach', tag: 'DSA', readTime: '5 min' },
  { title: 'How I made the portfolio reliable without MongoDB', tag: 'Backend', readTime: '4 min' },
  { title: 'Designing project pages recruiters can scan', tag: 'Frontend', readTime: '3 min' },
]

export const deploymentChecks = [
  { label: 'Frontend build', value: 'Passing' },
  { label: 'Backend health', value: 'Online' },
  { label: 'Audit status', value: '0 vulnerabilities' },
  { label: 'Database mode', value: 'Mongo or mock fallback' },
]
