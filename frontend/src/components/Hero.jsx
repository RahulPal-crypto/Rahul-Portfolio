import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiCheckCircle, FiDownload, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi'
import { profile } from '../data/portfolio'

const heroStats = [
  ['3', 'case studies'],
  ['MERN', 'primary stack'],
  ['0', 'audit issues'],
]

export default function Hero(){
  return (
    <section id="home" className="hero-shell">
      <div className="hero-image" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="content-wrap hero-content">
        <motion.div
          initial={{opacity:0, y:16}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.5}}
          className="hero-copy"
        >
          <div className="availability">
            <span className="status-dot" />
            Available for full-stack roles
          </div>
          <div className="hero-stack-line">
            <FiCheckCircle aria-hidden="true" />
            React / Node.js / Express / MongoDB / JWT
          </div>
          <h1>{profile.name}</h1>
          <p className="hero-kicker">{profile.role}</p>
          <p className="hero-summary">
            {profile.summary}
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View work <FiArrowRight aria-hidden="true" />
            </a>
            <a href={profile.resumeUrl} className="btn-secondary" download>
              <FiDownload aria-hidden="true" /> Resume
            </a>
          </div>

          <div className="hero-meta">
            <span><FiMapPin aria-hidden="true" /> {profile.location}</span>
            <a href={profile.github} aria-label="GitHub profile"><FiGithub /></a>
            <a href={profile.linkedin} aria-label="LinkedIn profile"><FiLinkedin /></a>
          </div>

          <div className="hero-stat-row">
            {heroStats.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{opacity:0, x:24}}
          animate={{opacity:1, x:0}}
          transition={{duration:0.6, delay:0.15}}
          className="hero-panel"
        >
          <div className="panel-topline">
            <span>Current Focus</span>
            <strong>2026</strong>
          </div>
          <div className="focus-stack">
            <div>
              <span>MERN apps</span>
              <strong>React + Node</strong>
            </div>
            <div>
              <span>Database</span>
              <strong>MongoDB</strong>
            </div>
            <div>
              <span>Delivery</span>
              <strong>APIs + UI polish</strong>
            </div>
          </div>
          <div className="panel-proof">
            <span>Recruiter view</span>
            <strong>Projects, proof, resume, contact, admin demo</strong>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
