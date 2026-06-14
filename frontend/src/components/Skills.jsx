import React from 'react'
import { FiCode, FiDatabase, FiLayout, FiServer, FiTool } from 'react-icons/fi'
import { skillGroups } from '../data/portfolio'

const skills = [
  { name: 'React', category: 'Frontend', icon: FiLayout, detail: 'Component architecture, routing, responsive UI' },
  { name: 'Node.js', category: 'Backend', icon: FiServer, detail: 'Express APIs, auth, validation, middleware' },
  { name: 'MongoDB', category: 'Database', icon: FiDatabase, detail: 'Mongoose models, CRUD flows, data design' },
  { name: 'JavaScript', category: 'Programming', icon: FiCode, detail: 'Modern ES modules, async flows, clean logic' },
  { name: 'Tailwind CSS', category: 'Design system', icon: FiTool, detail: 'Utility-first layouts and polished interfaces' },
  { name: 'REST APIs', category: 'Integration', icon: FiServer, detail: 'Client-server contracts and error handling' },
]

export default function Skills(){
  return (
    <section id="skills" className="section-band muted">
      <div className="content-wrap">
        <div className="section-heading compact">
          <span className="eyebrow">Skills</span>
          <h2>Stack built for practical product work.</h2>
        </div>
        <div className="skills-grid">
          {skills.map(s=> {
            const Icon = s.icon
            return (
              <div key={s.name} className="skill-card">
                <div className="skill-icon"><Icon aria-hidden="true" /></div>
                <p>{s.category}</p>
                <h3>{s.name}</h3>
                <span>{s.detail}</span>
              </div>
            )
          })}
        </div>
        <div className="level-grid">
          {skillGroups.map(group => (
            <article className="level-card" key={group.title}>
              <div>
                <h3>{group.title}</h3>
                <span>{group.level}</span>
              </div>
              <p>{group.items.join(' / ')}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
