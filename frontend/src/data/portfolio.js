export const profile = {
  name: 'Rahul Pal',
  role: 'Full Stack Developer',
  email: 'rahul@example.com',
  location: 'India',
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',
  resumeUrl: '/resume.pdf',
  summary:
    'Full stack developer focused on reliable MERN applications, clean user experiences, and production-minded API design.',
}

export const projects = [
  {
    _id: 'portfolio-platform',
    title: 'Portfolio CMS Platform',
    category: 'Full Stack',
    description:
      'A polished MERN portfolio foundation with protected content APIs, contact capture, mock fallback mode, and responsive pages.',
    problem:
      'A developer portfolio should be easy to update, recruiter-friendly, and stable even when external services are unavailable.',
    role: 'Designed the frontend experience, backend routes, auth flow, and mock-mode API fallback.',
    techStack: ['React', 'Express', 'MongoDB', 'JWT'],
    features: ['Protected admin routes', 'Project and skill APIs', 'Responsive portfolio UI', 'Contact message capture'],
    challenge:
      'The backend needed to remain usable even if MongoDB is offline, so the API now serves a professional mock dataset.',
    learned: 'Reliable developer experience matters as much as visual polish when presenting full-stack work.',
    githubLink: 'https://github.com/',
    liveLink: 'https://example.com',
  },
  {
    _id: 'api-dashboard',
    title: 'Developer API Dashboard',
    category: 'Backend',
    description:
      'A clean admin-ready data model for managing projects, skills, profile content, visitor messages, and deployment status.',
    problem: 'Portfolio owners need one place to review data, messages, and system health.',
    role: 'Structured dashboard cards, message workflows, health checks, and admin content areas.',
    techStack: ['Node.js', 'Express', 'Mongoose', 'JWT'],
    features: ['API health status', 'Message inbox', 'Editable content model', 'Token-based auth'],
    challenge:
      'The dashboard needed to communicate backend capability without overwhelming the public portfolio.',
    learned: 'Good admin tools should be dense, quiet, and action-oriented.',
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
    title: 'Tools',
    level: 'Intermediate',
    items: ['Vite', 'GitHub', 'Deployment', 'API testing'],
  },
]

export const achievements = [
  { title: 'MERN Portfolio System', detail: 'Built a complete full-stack portfolio with auth-ready APIs and polished UI.' },
  { title: 'API Reliability Upgrade', detail: 'Added mock fallback and health checks so the project remains demo-ready.' },
  { title: 'Responsive Design Pass', detail: 'Verified desktop and mobile layouts with browser automation.' },
]

export const timeline = [
  { year: '2026', title: 'Full-stack portfolio upgrade', detail: 'Refined the project into a recruiter-ready MERN showcase.' },
  { year: '2025', title: 'MERN stack practice', detail: 'Focused on React interfaces, Express APIs, MongoDB models, and JWT auth.' },
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
  { title: 'How I made the portfolio reliable without MongoDB', tag: 'Backend', readTime: '4 min' },
  { title: 'Designing project pages recruiters can scan', tag: 'Frontend', readTime: '3 min' },
  { title: 'What I learned while polishing a MERN app', tag: 'Learning', readTime: '5 min' },
]

export const deploymentChecks = [
  { label: 'Frontend build', value: 'Passing' },
  { label: 'Backend health', value: 'Online' },
  { label: 'Audit status', value: '0 vulnerabilities' },
  { label: 'Database mode', value: 'Mongo or mock fallback' },
]
