import React from 'react'
import { FiAward, FiBookOpen, FiCheckCircle, FiClock, FiGithub, FiServer, FiStar } from 'react-icons/fi'
import { achievements, blogNotes, deploymentChecks, testimonials, timeline } from '../data/portfolio'

export function ExperienceTimeline(){
  return (
    <section id="experience" className="section-band">
      <div className="content-wrap two-column-section">
        <div className="section-heading compact">
          <span className="eyebrow">Experience</span>
          <h2>Progress timeline hirers can scan quickly.</h2>
        </div>
        <div className="timeline-list">
          {timeline.map(item => (
            <article className="timeline-item" key={item.title}>
              <span>{item.year}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Achievements(){
  return (
    <section id="achievements" className="section-band muted">
      <div className="content-wrap">
        <div className="section-heading split">
          <div>
            <span className="eyebrow">Proof</span>
            <h2>Achievements, certificates, and credibility signals.</h2>
          </div>
          <div className="section-icon"><FiAward aria-hidden="true" /></div>
        </div>
        <div className="proof-grid">
          {achievements.map(item => (
            <article className="proof-card" key={item.title}>
              <FiCheckCircle aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Testimonials(){
  return (
    <section id="testimonials" className="section-band proof-band">
      <div className="content-wrap">
        <div className="section-heading compact">
          <span className="eyebrow">Recommendations</span>
          <h2>Real feedback placeholders ready for mentors or clients.</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map(item => (
            <article className="testimonial-card" key={item.name}>
              <FiStar aria-hidden="true" />
              <p>"{item.quote}"</p>
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function BlogNotes(){
  return (
    <section id="notes" className="section-band muted">
      <div className="content-wrap">
        <div className="section-heading split">
          <div>
            <span className="eyebrow">Notes</span>
            <h2>Learning notes that can become a blog.</h2>
          </div>
          <div className="section-icon"><FiBookOpen aria-hidden="true" /></div>
        </div>
        <div className="notes-grid">
          {blogNotes.map(note => (
            <article className="note-card" key={note.title}>
              <span>{note.tag}</span>
              <h3>{note.title}</h3>
              <p><FiClock aria-hidden="true" /> {note.readTime}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function LiveSignals(){
  return (
    <section id="github" className="section-band">
      <div className="content-wrap signal-grid">
        <article className="signal-panel">
          <FiGithub aria-hidden="true" />
          <span className="eyebrow">GitHub</span>
          <h2>Live integration ready.</h2>
          <p>Connect the GitHub API later to show pinned repositories, contribution activity, and recent project updates.</p>
        </article>
        <article className="signal-panel featured">
          <span className="eyebrow">Full-stack proof</span>
          <h2>Not just a portfolio page.</h2>
          <p>This project demonstrates frontend design, backend APIs, auth, contact storage, admin workflow, SEO, audits, and deployment readiness.</p>
          <div className="proof-meter">
            <span style={{ '--meter': '92%' }} />
          </div>
        </article>
        <article className="signal-panel">
          <FiServer aria-hidden="true" />
          <span className="eyebrow">Deployment</span>
          <h2>Health snapshot.</h2>
          <div className="deployment-list">
            {deploymentChecks.map(item => (
              <div key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
