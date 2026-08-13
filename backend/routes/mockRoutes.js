const express = require('express')
const router = express.Router()
const mockToken = 'mock-token'

const requireMockAuth = (req, res, next) => {
  if (req.header('Authorization') === `Bearer ${mockToken}`) return next()
  return res.status(401).json({ message: 'No token, authorization denied' })
}

const projects = [
  {
    _id: 'portfolio-platform',
    title: 'Portfolio CMS Platform',
    category: 'Full Stack',
    description: 'A polished MERN portfolio foundation with protected content APIs, contact capture, and responsive pages.',
    problem: 'A developer portfolio should be easy to update, recruiter-friendly, and stable even when external services are unavailable.',
    role: 'Designed the frontend experience, backend routes, auth flow, and mock-mode API fallback.',
    techStack: ['React', 'Express', 'MongoDB', 'JWT'],
    features: ['Protected admin routes', 'Project and skill APIs', 'Responsive portfolio UI', 'Contact message capture'],
    challenge: 'The backend needed to remain usable even if MongoDB is offline, so the API now serves a professional mock dataset.',
    learned: 'Reliable developer experience matters as much as visual polish when presenting full-stack work.',
    githubLink: 'https://github.com/',
    liveLink: 'https://example.com',
  },
  {
    _id: 'api-dashboard',
    title: 'Developer API Dashboard',
    category: 'Backend',
    description: 'A clean admin-ready data model for managing projects, skills, profile content, and visitor messages.',
    problem: 'Portfolio owners need one place to review data, messages, and system health.',
    role: 'Structured dashboard cards, message workflows, health checks, and admin content areas.',
    techStack: ['JWT', 'Node.js', 'Mongoose', 'Express'],
    features: ['API health status', 'Message inbox', 'Editable content model', 'Token-based auth'],
    challenge: 'The dashboard needed to communicate backend capability without overwhelming the public portfolio.',
    learned: 'Good admin tools should be dense, quiet, and action-oriented.',
    githubLink: 'https://github.com/',
    liveLink: 'https://example.com',
  },
  {
    _id: 'responsive-ui-kit',
    title: 'Responsive UI System',
    category: 'Frontend',
    description: 'Reusable sections, cards, and navigation patterns designed for fast portfolio iteration.',
    problem: 'Recruiters scan quickly, so the interface needs strong hierarchy and fast proof points.',
    role: 'Built the visual system, responsive sections, and recruiter-focused content flow.',
    techStack: ['Tailwind', 'React', 'Vite', 'CSS'],
    features: ['Responsive sections', 'Project filters', 'Contact states', 'SEO-ready structure'],
    challenge: 'The design had to feel polished without becoming a heavy marketing landing page.',
    learned: 'Strong spacing, restraint, and real content make a portfolio feel trustworthy.',
    githubLink: 'https://github.com/',
    liveLink: 'https://example.com',
  },
]

const skills = [
  { name: 'React', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Tailwind CSS', category: 'Design' },
]

const achievements = [
  { title: 'Full-stack portfolio system', description: 'Built with React, Express, and Mongo-ready APIs.' },
]

const profile = {
  name: 'Rahul Pal',
  bio: 'Full Stack Developer focused on reliable MERN applications.',
}

const messages = [
  {
    _id: 'msg-1',
    name: 'Hiring Manager',
    email: 'hiring@example.com',
    subject: 'Full-stack developer opportunity',
    message: 'Your portfolio looks strong. Can we schedule a quick conversation?',
    status: 'unread',
    createdAt: new Date().toISOString(),
  },
]

router.post('/auth/login', (req, res) => {
  const { email, password } = req.body
  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) return res.json({ token: mockToken })
  return res.status(400).json({ message: 'Invalid credentials (mock)' })
})

router.get('/projects', (req, res) => res.json(projects))
router.get('/projects/:id', (req, res) => {
  const project = projects.find((item) => item._id === req.params.id)
  if (!project) return res.status(404).json({ message: 'Project not found' })
  res.json(project)
})
router.post('/projects', requireMockAuth, (req, res) => {
  const project = { ...req.body, _id: String(projects.length + 1) }
  projects.unshift(project)
  res.status(201).json(project)
})
router.put('/projects/:id', requireMockAuth, (req, res) => {
  const index = projects.findIndex((item) => item._id === req.params.id)
  if (index > -1) {
    projects[index] = { ...projects[index], ...req.body }
    return res.json(projects[index])
  }
  return res.status(404).json({ message: 'Project not found' })
})
router.delete('/projects/:id', requireMockAuth, (req, res) => {
  const index = projects.findIndex((item) => item._id === req.params.id)
  if (index > -1) {
    projects.splice(index, 1)
    return res.json({ message: 'Deleted' })
  }
  return res.status(404).json({ message: 'Project not found' })
})

router.get('/skills', (req, res) => res.json(skills))
router.get('/achievements', (req, res) => res.json(achievements))
router.get('/profile', (req, res) => res.json(profile))
router.post('/contact', (req, res) => res.status(201).json({ message: 'Message received (mock)' }))
router.get('/contact', requireMockAuth, (req, res) => res.json(messages))
router.patch('/contact/:id/status', requireMockAuth, (req, res) => {
  const message = messages.find((item) => item._id === req.params.id)
  if (!message) return res.status(404).json({ message: 'Message not found' })
  message.status = req.body.status === 'read' ? 'read' : 'unread'
  res.json(message)
})
router.delete('/contact/:id', requireMockAuth, (req, res) => {
  const index = messages.findIndex((item) => item._id === req.params.id)
  if (index === -1) return res.status(404).json({ message: 'Message not found' })
  messages.splice(index, 1)
  res.json({ message: 'Deleted' })
})

module.exports = router
