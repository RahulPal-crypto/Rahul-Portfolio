import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import { projects as fallbackProjects } from '../data/portfolio'
import ProjectPreview from './ProjectPreview'

export default function ProjectsList(){
  const [projects,setProjects]=useState([])
  const [error, setError] = useState('')

  useEffect(()=>{
    axios.get('/api/projects')
      .then(r=> {
        setProjects(Array.isArray(r.data) && r.data.length ? r.data : fallbackProjects)
      })
      .catch(()=> {
        setProjects(fallbackProjects)
        setError('Showing featured work while the live API is unavailable.')
      })
  },[])

  return (
    <section id="projects" className="section-band">
      <div className="content-wrap">
        <div className="section-heading split">
          <div>
            <span className="eyebrow">Projects</span>
            <h2>Selected work with full-stack thinking.</h2>
          </div>
          <Link to="/projects" className="text-link">All projects <FiArrowUpRight aria-hidden="true" /></Link>
        </div>
        {error && <p className="notice">{error}</p>}
        <div className="projects-grid">
          {projects.slice(0,4).map(p=> (
            <div key={p._id} className="project-card">
              <ProjectPreview project={p} compact />
              <div className="project-card-head">
                <span>{p.category || 'Full Stack'}</span>
                <FiArrowUpRight aria-hidden="true" />
              </div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="tag-row">
                {(p.techStack || ['React', 'Node']).slice(0,3).map(tag => <span key={tag}>{tag}</span>)}
              </div>
              <Link to={`/projects/${p._id}`} className="card-link">View details <FiArrowUpRight aria-hidden="true" /></Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
