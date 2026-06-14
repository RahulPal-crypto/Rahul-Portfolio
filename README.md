# Rahul Pal - Full Stack Developer Portfolio

A professional full-stack developer portfolio built with the MERN stack. The project includes a polished recruiter-facing frontend, project case studies, contact form, resume download, SEO files, admin dashboard foundation, MongoDB-backed APIs, authentication, file uploads, and a mock API fallback so the app remains demo-ready even when MongoDB is unavailable.

## Overview

This portfolio is designed to show both frontend presentation skills and backend engineering ability. Visitors can review Rahul's skills, projects, experience timeline, achievements, recommendations, blog-style learning notes, deployment signals, and contact form. The backend supports real data storage through MongoDB Atlas and protected admin routes for managing portfolio content.

## Features

- Responsive portfolio homepage
- Premium hero section with resume download
- Project cards with visual preview panels
- Project detail/case-study pages
- Project filtering by category
- Skills and proficiency groups
- Experience timeline
- Achievements and credibility section
- Testimonials/recommendations section
- GitHub integration-ready panel
- Blog/learning notes section
- Contact form with backend message storage
- Admin login and dashboard foundation
- Contact inbox with read/unread support
- API health endpoint
- MongoDB Atlas support
- Mock API fallback when MongoDB is unavailable
- JWT authentication middleware
- File upload support for project images
- SEO metadata helper, `robots.txt`, `sitemap.xml`, and web manifest

## Tech Stack

### Frontend

- React 18
- Vite
- React Router
- Axios
- Framer Motion
- React Icons
- Tailwind CSS/PostCSS
- Custom responsive CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT authentication
- bcryptjs
- Multer for uploads
- CORS
- dotenv

## Project Structure

```txt
Rahul-Portfolio/
├── backend/
│   ├── config/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── utils/
│   ├── .env.example
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   │   ├── assets/
│   │   ├── resume.pdf
│   │   ├── robots.txt
│   │   ├── sitemap.xml
│   │   └── site.webmanifest
│   ├── src/
│   │   ├── components/
│   │   ├── data/
│   │   ├── pages/
│   │   ├── api.js
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 20 or newer recommended
- npm
- MongoDB Atlas account, for real database mode

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

Install backend dependencies:

```bash
cd backend
npm install
```

Install frontend dependencies:

```bash
cd ../frontend
npm install
```

## Environment Variables

Create a backend environment file:

```bash
cd backend
cp .env.example .env
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Update `backend/.env`:

```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.example.mongodb.net/portfolio?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_here
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=change_this_password
CLIENT_URL=http://localhost:5173
```

Optional:

```env
ADMIN_PASSWORD_HASH=your_pre_hashed_password
```

Important: never commit real `.env` files or secrets to GitHub.

## Running Locally

Start the backend:

```bash
cd backend
npm run dev
```

Backend runs at:

```txt
http://localhost:5000
```

Start the frontend in another terminal:

```bash
cd frontend
npm run dev
```

Frontend runs at:

```txt
http://localhost:5173
```

If your browser opens `127.0.0.1:5173`, that also works because the backend CORS config allows both local addresses.

## Available Scripts

### Frontend

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Builds the frontend for production.

```bash
npm run preview
```

Previews the production build locally.

### Backend

```bash
npm start
```

Starts the backend with Node.

```bash
npm run dev
```

Starts the backend with Nodemon.

## Admin Setup

The admin dashboard is available at:

```txt
http://localhost:5173/admin
```

The admin login page is available at:

```txt
http://localhost:5173/admin/login
```

To create an admin user in MongoDB, configure `backend/.env`, then run:

```bash
cd backend
node utils/seed.js
```

Login using:

- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`

If you use `ADMIN_PASSWORD_HASH`, make sure it is a valid bcrypt hash.

## MongoDB Atlas Setup

1. Create a MongoDB Atlas cluster.
2. Create a database user under Database Access.
3. Add your current IP address under Network Access.
4. Copy your connection string.
5. Paste it into `backend/.env` as `MONGO_URI`.

Example:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/rahul-portfolio?retryWrites=true&w=majority
```

If MongoDB connection fails, the app automatically switches to mock API routes so the portfolio can still run for demos.

## API Endpoints

Base URL:

```txt
http://localhost:5000/api
```

### Health

```txt
GET /api/health
```

Returns backend status and database mode.

### Auth

```txt
POST /api/auth/login
```

Logs in an admin user and returns a JWT.

### Projects

```txt
GET    /api/projects
GET    /api/projects/:id
POST   /api/projects
PUT    /api/projects/:id
DELETE /api/projects/:id
```

Create, update, and delete project routes require authentication.

### Skills

```txt
GET    /api/skills
POST   /api/skills
PUT    /api/skills/:id
DELETE /api/skills/:id
```

Write routes require authentication.

### Achievements

```txt
GET    /api/achievements
POST   /api/achievements
PUT    /api/achievements/:id
DELETE /api/achievements/:id
```

Write routes require authentication.

### Profile

```txt
GET /api/profile
PUT /api/profile
```

Profile update requires authentication.

### Contact

```txt
POST   /api/contact
GET    /api/contact
PATCH  /api/contact/:id/status
DELETE /api/contact/:id
```

Public users can submit messages. Reading, marking, and deleting messages require authentication.

## Updating Portfolio Content

Static frontend content lives in:

```txt
frontend/src/data/portfolio.js
```

Update this file to change:

- Name and role
- Email
- GitHub and LinkedIn links
- Resume path
- Projects
- Skills
- Achievements
- Timeline
- Testimonials
- Blog notes
- Deployment status labels

Replace the resume file here:

```txt
frontend/public/resume.pdf
```

Replace the hero image here:

```txt
frontend/public/assets/hero-workspace.png
```

## Build Verification

Frontend production build:

```bash
cd frontend
npm run build
```

Backend syntax check:

```bash
cd backend
node --check server.js
```

Security audit:

```bash
cd frontend
npm audit --audit-level=moderate
```

```bash
cd backend
npm audit --audit-level=moderate
```

## Deployment

### Frontend

Recommended platforms:

- Vercel
- Netlify

Build settings:

```txt
Root directory: frontend
Build command: npm run build
Output directory: dist
```

Set frontend environment variable if needed:

```env
VITE_API_URL=https://your-backend-url.com
```

### Backend

Recommended platforms:

- Render
- Railway
- Cyclic
- Fly.io

Backend settings:

```txt
Root directory: backend
Start command: npm start
```

Set backend environment variables on the hosting platform:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_secure_secret
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
CLIENT_URL=https://your-frontend-domain.com
```

## Security Notes

- Do not commit `.env` files.
- Use a strong `JWT_SECRET`.
- Do not use `0.0.0.0/0` in MongoDB Atlas Network Access for production unless absolutely necessary.
- Replace placeholder links and test content before sharing publicly.
- Keep dependencies updated.
- Rotate credentials if they were ever exposed.

## Known Limitations

- Admin dashboard is a strong foundation, but full edit forms for every content type can still be expanded.
- GitHub statistics panel is integration-ready but not yet connected to the GitHub API.
- Blog notes are currently static content.
- Real production deployment requires hosted frontend, hosted backend, and MongoDB Atlas environment variables.

## Author

Rahul Pal

- Portfolio: update after deployment
- GitHub: update in `frontend/src/data/portfolio.js`
- LinkedIn: update in `frontend/src/data/portfolio.js`
- Email: update in `frontend/src/data/portfolio.js`

## License

This project is for personal portfolio use. Add a license file if you want others to reuse the code.
