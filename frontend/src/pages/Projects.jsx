import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiArrowUpRight } from 'react-icons/fi'
import Seo from '../components/Seo'
import { projects as fallbackProjects } from '../data/portfolio'
import ProjectPreview from '../components/ProjectPreview'

export default function Projects(){
  const [projects, setProjects] = useState([])
  const [notice, setNotice] = useState('')
  const [filter, setFilter] = useState('All')
  const filters = ['All', ...new Set(projects.map(project => project.category || 'Full Stack'))]
  const visibleProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter)

  useEffect(()=>{
    axios.get('/api/projects')
      .then(r=>setProjects(Array.isArray(r.data) && r.data.length ? r.data : fallbackProjects))
      .catch(()=>{
        setProjects(fallbackProjects)
        setNotice('Showing curated projects while the live API is unavailable.')
      })
  },[])

  return (
    <main className="subpage">
      <Seo title="Projects - Rahul Pal" description="Full-stack project case studies, filters, tech stacks, GitHub links, and live demo details." />
      <div className="content-wrap">
        <Link to="/" className="back-link"><FiArrowLeft aria-hidden="true" /> Home</Link>
        <div className="section-heading compact">
          <span className="eyebrow">Projects</span>
          <h1>Work built around reliable product foundations.</h1>
        </div>
        <div className="filter-row">
          {filters.map(item => (
            <button className={item === filter ? 'active' : ''} key={item} onClick={() => setFilter(item)}>{item}</button>
          ))}
        </div>
        {notice && <p className="notice">{notice}</p>}
        <div className="projects-grid full">
          {visibleProjects.map(p=> (
            <article key={p._id} className="project-card">
              <ProjectPreview project={p} />
              <div className="project-card-head">
                <span>{p.category || 'Full Stack'}</span>
                <FiArrowUpRight aria-hidden="true" />
              </div>
              <h2>{p.title}</h2>
              <p>{p.description}</p>
              <div className="tag-row">
                {(p.techStack || ['React', 'Node']).map(tag => <span key={tag}>{tag}</span>)}
              </div>
              <Link to={`/projects/${p._id}`} className="card-link">Open project <FiArrowUpRight aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
