import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi'
import Seo from '../components/Seo'
import { projects } from '../data/portfolio'

const fallbackProjects = Object.fromEntries(projects.map(project => [project._id, project]))

export default function ProjectDetails(){
  const { id } = useParams()
  const [project, setProject] = useState(null)
  const [status, setStatus] = useState('Loading project...')

  useEffect(()=>{
    if (fallbackProjects[id]) {
      setProject(fallbackProjects[id])
      setStatus('')
      return
    }

    axios.get(`/api/projects/${id}`)
      .then(r=> {
        setProject(r.data)
        setStatus('')
      })
      .catch(()=>setStatus('Project could not be loaded.'))
  },[id])

  return (
    <main className="subpage">
      <Seo title={project ? `${project.title} - Rahul Pal` : 'Project Details - Rahul Pal'} />
      <div className="content-wrap detail-wrap">
        <Link to="/projects" className="back-link"><FiArrowLeft aria-hidden="true" /> Projects</Link>
        {project ? (
          <>
            <div className="section-heading compact">
              <span className="eyebrow">Case Study</span>
              <h1>{project.title}</h1>
              <p>{project.description}</p>
            </div>

            <div className="detail-grid">
              <section className="detail-panel">
                <h2>Highlights</h2>
                <ul>
                  {(project.features || ['Clean frontend flow', 'Backend API integration', 'Responsive layout']).map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
              <section className="detail-panel">
                <h2>Case study</h2>
                <dl className="case-study-list">
                  <dt>Problem</dt>
                  <dd>{project.problem || 'A practical full-stack problem with user-facing impact.'}</dd>
                  <dt>My role</dt>
                  <dd>{project.role || 'Built frontend and backend pieces for the project.'}</dd>
                  <dt>Challenge</dt>
                  <dd>{project.challenge || 'Balanced visual polish with reliable implementation.'}</dd>
                  <dt>Learning</dt>
                  <dd>{project.learned || 'Improved product thinking and full-stack delivery.'}</dd>
                </dl>
              </section>
              <section className="detail-panel">
                <h2>Stack</h2>
                <div className="tag-row">
                  {(project.techStack || ['React', 'Node.js']).map(tag => <span key={tag}>{tag}</span>)}
                </div>
                <div className="detail-actions">
                  {project.githubLink && <a href={project.githubLink}><FiGithub aria-hidden="true" /> GitHub</a>}
                  {project.liveLink && <a href={project.liveLink}><FiExternalLink aria-hidden="true" /> Live</a>}
                </div>
              </section>
            </div>
          </>
        ) : (
          <p className="notice">{status}</p>
        )}
      </div>
    </main>
  )
}
