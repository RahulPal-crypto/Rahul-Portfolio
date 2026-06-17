import React, { useMemo, useState } from 'react'
import { FiArrowRight, FiAward, FiBox, FiBriefcase, FiCode, FiCpu, FiDatabase, FiGrid, FiLayers, FiServer, FiTarget, FiZap } from 'react-icons/fi'

const skillCategories = [
  {
    title: 'Frontend',
    tone: 'violet',
    icon: FiCpu,
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS'],
    level: 78,
  },
  {
    title: 'Backend',
    tone: 'blue',
    icon: FiServer,
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Middleware'],
    level: 82,
  },
  {
    title: 'Database',
    tone: 'green',
    icon: FiDatabase,
    items: ['MongoDB', 'Mongoose', 'SQL', 'CRUD Operations', 'Schema Design'],
    level: 86,
  },
  {
    title: 'Programming',
    tone: 'orange',
    icon: FiCode,
    items: ['Java', 'JavaScript', 'SQL', 'OOP Concepts', 'Core Java'],
    level: 84,
  },
  {
    title: 'DSA',
    tone: 'purple',
    icon: FiTarget,
    items: ['Arrays', 'Linked Lists', 'Stacks & Queues', 'Trees', 'Graphs', 'Dynamic Programming'],
    level: 94,
  },
  {
    title: 'Core CS',
    tone: 'yellow',
    icon: FiBox,
    items: ['DBMS', 'Operating Systems', 'Computer Networks', 'Software Engineering', 'System Design'],
    level: 76,
  },
]

const skillStats = [
  { value: '800+', label: 'DSA Problems Solved', icon: FiGrid, tone: 'violet' },
  { value: '20+', label: 'REST APIs Built', icon: FiCode, tone: 'blue' },
  { value: '3+', label: 'Full Stack Projects', icon: FiZap, tone: 'orange' },
  { value: 'MERN', label: 'Primary Stack', icon: FiLayers, tone: 'green' },
]

const filters = ['All Skills', ...skillCategories.map(category => category.title)]
const featuredSkillTitles = ['Frontend', 'Backend', 'DSA']

export default function Skills(){
  const [activeFilter, setActiveFilter] = useState('All Skills')

  const visibleCategories = useMemo(() => {
    if (activeFilter === 'All Skills') {
      return skillCategories.filter(category => featuredSkillTitles.includes(category.title))
    }
    return skillCategories.filter(category => category.title === activeFilter)
  }, [activeFilter])

  return (
    <section id="skills" className="skills-showcase">
      <div className="content-wrap">
        <div className="skills-hero-row">
          <div className="skills-heading">
            <span className="skills-eyebrow">My Skills</span>
            <h2>Tech Stack &amp; Expertise</h2>
            <p>
              A compact overview of the technologies, computer science concepts,
              and problem-solving foundations I use to build efficient solutions.
            </p>
          </div>

          <div className="skills-top-stats">
            {skillStats.map(({ value, label, icon: Icon, tone }) => (
              <article className={`skills-mini-stat ${tone}`} key={label}>
                <span><Icon aria-hidden="true" /></span>
                <strong>{value}</strong>
                <small>{label}</small>
              </article>
            ))}
          </div>
        </div>

        <div className="skills-filter-bar" aria-label="Skill filters">
          <div className="skills-filter-list">
            {filters.map(filter => (
              <button
                type="button"
                key={filter}
                className={filter === activeFilter ? 'active' : ''}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="skills-category-grid">
          {visibleCategories.map(category => {
            const Icon = category.icon
            return (
              <article className={`skills-category-card ${category.tone}`} key={category.title}>
                <div className="skills-card-head">
                  <span><Icon aria-hidden="true" /></span>
                  <h3>{category.title}</h3>
                </div>
                <ul>
                  {category.items.slice(0, 4).map(item => <li key={item}>{item}</li>)}
                  {category.items.length > 4 && <li className="more-item">+ {category.items.length - 4} more</li>}
                </ul>
                <div className="skills-progress" aria-hidden="true">
                  <span style={{ '--level': `${category.level}%` }} />
                </div>
              </article>
            )
          })}
        </div>

        <div className="skills-proof-strip">
          <div>
            <FiAward aria-hidden="true" />
            <strong>Always learning. <span>Always building.</span></strong>
          </div>
          <p>Passionate about solving real-world problems with clean, efficient code.</p>
          <a href="#projects" className="btn-primary">
            View All Projects <FiArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
