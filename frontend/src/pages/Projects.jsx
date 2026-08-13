import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiArrowUpRight } from 'react-icons/fi'
import Seo from '../components/Seo'
import api from '../api'
import { projects as fallbackProjects } from '../data/portfolio'
import ProjectPreview from '../components/ProjectPreview'

export default function Projects(){
  const [projects, setProjects] = useState([])
  const [notice, setNotice] = useState('')
  const [filter, setFilter] = useState('All')
  const filters = ['All', ...new Set(projects.map(project => project.category || 'Full Stack'))]
  const visibleProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter)

  useEffect(() => {
    api.get('/api/projects')
      .then(r => setProjects(Array.isArray(r.data) && r.data.length ? r.data : fallbackProjects))
      .catch(() => {
        setProjects(fallbackProjects)
        setNotice('Showing curated projects while the live API is unavailable.')
      })
  }, [])

  return (
    <main className="bg-slate-950/70 py-20">
      <Seo title="Projects - Rahul Pal" description="Full-stack project case studies, filters, tech stacks, GitHub links, and live demo details." />
      <div className="mx-auto max-w-6xl space-y-8 px-4 xl:px-0">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-amber-200 transition hover:text-white">
              <FiArrowLeft aria-hidden="true" /> Home
            </Link>
            <span className="text-sm font-semibold uppercase tracking-[0.32em] text-amber-300">Projects</span>
            <h1 className="text-4xl font-bold text-white">Work built around reliable product foundations.</h1>
          </div>

          <div className="flex flex-wrap gap-3">
            {filters.map(item => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${item === filter ? 'bg-amber-300 text-slate-950 shadow-lg shadow-amber-300/20' : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800/90'}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {notice && <p className="rounded-3xl border border-amber-200/20 bg-amber-200/10 px-5 py-4 text-sm text-amber-100">{notice}</p>}

        <div className="grid gap-6 xl:grid-cols-2">
          {visibleProjects.map(p => (
            <article key={p._id} className="space-y-5 rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
              <ProjectPreview project={p} />
              <div className="flex items-center justify-between text-sm font-semibold text-amber-200">
                <span>{p.category || 'Full Stack'}</span>
                <FiArrowUpRight aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-semibold text-white">{p.title}</h2>
              <p className="text-sm leading-7 text-slate-300">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {(p.techStack || ['React', 'Node']).map(tag => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">{tag}</span>
                ))}
              </div>
              <Link to={`/projects/${p._id}`} className="inline-flex items-center gap-2 text-sm font-semibold text-amber-200 transition hover:text-white">
                Open project <FiArrowUpRight aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
