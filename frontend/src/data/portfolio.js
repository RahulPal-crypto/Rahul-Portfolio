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

    image: '/assets/Krishetu.png',

    description:
      'A full-stack farmer-to-customer marketplace that enables farmers to sell products directly to customers, reducing dependency on middlemen and improving local product discovery.',

    problem:
      'Farmers often depend on middlemen to reach buyers, which can reduce profit margins, while customers may struggle to discover fresh products available from nearby farmers.',

    role:
      'Developed the full-stack marketplace, including responsive frontend flows, secure authentication, RESTful APIs, MongoDB-backed product discovery, order management, and payment integration.',

    techStack: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'Tailwind CSS',
      'Razorpay'
    ],

    features: [
      'Developed a full-stack farmer-to-customer marketplace using the MERN stack, allowing farmers to list products and customers to browse, purchase, and track orders.',

      'Designed and integrated RESTful APIs for user authentication, products, orders, reviews, notifications, and communication workflows.',

      'Implemented GeoJSON-based geospatial filtering to enable location-aware product discovery and improve search accuracy based on customer proximity.',

      'Built secure JWT-based authentication with role-based access control for Farmers, Customers, and Admins, protecting application resources and user data.',

      'Integrated Razorpay for secure online payments and implemented order management with status tracking for a smooth purchasing experience.',

      'Optimized MongoDB queries and database schemas to improve data retrieval efficiency, scalability, and overall application performance.',

      'Developed responsive and user-friendly interfaces using React.js and Tailwind CSS for seamless interaction across different screen sizes.'
    ],

    challenge:
      'The platform required efficient location-based product discovery while supporting separate workflows for farmers, customers, and administrators with secure access control.',

    learned:
      'Strengthened practical full-stack development skills by working with geospatial queries, JWT authentication, RESTful API design, MongoDB optimization, payment integration, and responsive marketplace UX.',

    githubLink: 'https://github.com/yourusername/krishisetu',

    liveLink: 'https://your-live-link.com'
  },

  {
    _id: 'complaint-management-system',

    title: 'Complaint Management System',

    category: 'Backend',

    image: '/assets/complain.png',

    description:
      'A secure backend system that enables users to submit, track, and manage complaints while providing administrators with efficient tools for complaint resolution.',

    problem:
      'Many organizations rely on manual complaint handling, making status tracking unclear for users and making it difficult for administrators to efficiently manage and resolve issues.',

    role:
      'Built the Node.js and MongoDB backend, authentication flow, role-based permissions, admin complaint workflows, logging, security middleware, and production deployment setup.',

    techStack: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Google OAuth',
      'JWT',
      'Docker'
    ],

    features: [
      'Developed secure RESTful APIs for complaint submission, tracking, updating, and management.',

      'Implemented Google OAuth and JWT-based authentication to provide secure and flexible user login.',

      'Implemented role-based access control to separate permissions between regular users and administrators.',

      'Built admin workflows for reviewing complaints, updating complaint status, and managing issue resolution.',

      'Added Helmet, rate limiting, CORS configuration, and other security practices to protect backend APIs.',

      'Implemented Winston-based logging for monitoring application activity and simplifying backend debugging.',

      'Containerized the backend using Docker to simplify deployment and maintain a consistent production environment.'
    ],

    challenge:
      'The backend needed secure authentication and authorization, transparent complaint tracking, and reliable admin workflows while maintaining production-level security and logging.',

    learned:
      'Gained practical experience in secure authentication, RBAC, RESTful API design, backend security, Docker deployment, API protection, and Winston-based application logging.',

    githubLink: 'https://github.com/yourusername/complaint-management-system',

    liveLink: 'https://your-live-link.com'
  },

  {
    _id: 'responsive-ui-kit',

    title: 'Responsive UI System',

    category: 'Frontend',

    image: '/assets/foodCart.png',

    description:
      'A responsive frontend system featuring reusable sections, cards, forms, filters, timelines, and navigation patterns designed for modern portfolio and application interfaces.',

    problem:
      'Recruiters and users often scan websites quickly, so the interface needs a clear visual hierarchy, responsive design, and easily accessible information.',

    role:
      'Built the visual system, reusable UI components, responsive layouts, project filtering, contact states, and recruiter-focused content flow.',

    techStack: [
      'React.js',
      'Tailwind CSS',
      'Vite',
      'CSS'
    ],

    features: [
      'Developed responsive sections and reusable UI components for consistent design across the application.',

      'Implemented project filtering to allow users to quickly explore projects based on categories.',

      'Created reusable cards, forms, timelines, navigation components, and content sections.',

      'Designed responsive layouts optimized for desktop, tablet, and mobile screen sizes.',

      'Implemented structured content sections with a focus on readability, visual hierarchy, and recruiter-friendly navigation.',

      'Created SEO-ready page structure and optimized the interface for a clean and professional portfolio experience.'
    ],

    challenge:
      'The design had to feel polished and professional while maintaining simplicity, fast navigation, responsive behavior, and a strong focus on real project content.',

    learned:
      'Improved practical frontend development skills including responsive design, component reusability, spacing, visual hierarchy, Tailwind CSS, and building clean recruiter-focused interfaces.',

    githubLink: 'https://github.com/yourusername/responsive-ui-kit',

    liveLink: 'https://your-live-link.com'
  }
];

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
