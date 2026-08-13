import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi'
import Seo from '../components/Seo'
import api from '../api'
import { projects } from '../data/portfolio'

const fallbackProjects = Object.fromEntries(projects.map(project => [project._id, project]))

export default function ProjectDetails(){
  const { id } = useParams()
  const [project, setProject] = useState(null)
  const [status, setStatus] = useState('Loading project...')

  useEffect(() => {
    if (fallbackProjects[id]) {
      setProject(fallbackProjects[id])
      setStatus('')
      return
    }

    api.get(`/api/projects/${id}`)
      .then(r => {
        setProject(r.data)
        setStatus('')
      })
      .catch(() => setStatus('Project could not be loaded.'))
  }, [id])

  return (
    <main className="bg-slate-950/70 py-20">
      <Seo title={project ? `${project.title} - Rahul Pal` : 'Project Details - Rahul Pal'} />
      <div className="mx-auto max-w-6xl space-y-8 px-4 xl:px-0">
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-amber-200 transition hover:text-white">
          <FiArrowLeft aria-hidden="true" /> Projects
        </Link>

        {project ? (
          <>
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-[0_30px_100px_rgba(15,23,42,0.3)]">
              <span className="text-sm font-semibold uppercase tracking-[0.32em] text-amber-300">Case Study</span>
              <h1 className="mt-4 text-4xl font-bold text-white">{project.title}</h1>
              <p className="mt-4 max-w-3xl text-slate-300 leading-7">{project.description}</p>
            </div>

            <div className="grid gap-6 xl:grid-cols-3">
              <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.25)] xl:col-span-2">
                <h2 className="text-2xl font-semibold text-white">Highlights</h2>
                <ul className="mt-5 space-y-3 text-sm text-slate-300">
                  {(project.features || ['Clean frontend flow', 'Backend API integration', 'Responsive layout']).map(item => (
                    <li key={item} className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3">{item}</li>
                  ))}
                </ul>
              </section>

              <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.25)]">
                <h2 className="text-2xl font-semibold text-white">Case study</h2>
                <dl className="mt-5 space-y-4 text-sm text-slate-300">
                  <div>
                    <dt className="font-semibold text-white">Problem</dt>
                    <dd className="mt-2">{project.problem || 'A practical full-stack problem with user-facing impact.'}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-white">My role</dt>
                    <dd className="mt-2">{project.role || 'Built frontend and backend pieces for the project.'}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-white">Challenge</dt>
                    <dd className="mt-2">{project.challenge || 'Balanced visual polish with reliable implementation.'}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-white">Learning</dt>
                    <dd className="mt-2">{project.learned || 'Improved product thinking and full-stack delivery.'}</dd>
                  </div>
                </dl>
              </section>

              <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.25)]">
                <h2 className="text-2xl font-semibold text-white">Stack</h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {(project.techStack || ['React', 'Node.js']).map(tag => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">{tag}</span>
                  ))}
                </div>
                <div className="mt-8 space-y-3">
                  {project.githubLink && (
                    <a href={project.githubLink} className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-amber-200 transition hover:bg-white/10">
                      <FiGithub aria-hidden="true" /> GitHub
                    </a>
                  )}
                  {project.liveLink && (
                    <a href={project.liveLink} className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-amber-200 transition hover:bg-white/10">
                      <FiExternalLink aria-hidden="true" /> Live
                    </a>
                  )}
                </div>
              </section>
            </div>
          </>
        ) : (
          <p className="rounded-3xl border border-white/10 bg-slate-950/80 px-5 py-4 text-sm text-slate-200">{status}</p>
        )}
      </div>
    </main>
  )
}
