import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiAward, FiBriefcase, FiCode, FiDownload, FiGithub, FiLinkedin, FiMail, FiMapPin, FiServer } from 'react-icons/fi'
import { SiExpress, SiJavascript, SiMongodb, SiNodedotjs, SiReact, SiTailwindcss } from 'react-icons/si'
import { profile } from '../data/portfolio'

const heroStats = [
  { value: '3+', label: 'Projects Completed', icon: FiBriefcase },
  { value: '800+', label: 'DSA Problems Solved', icon: FiCode },
  { value: 'MERN', label: 'Primary Stack', icon: FiServer },
  { value: '2026', label: 'Current Focus', icon: FiAward },
]

const techStack = [
  { name: 'React', icon: SiReact },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express.js', icon: SiExpress },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
]

export default function Hero(){
  return (
    <section id="home" className="hero-shell">
      <div className="hero-image" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="content-wrap hero-content">
        <div className="hero-main-grid">
          <motion.div
            initial={{opacity:0, y:16}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.5}}
            className="hero-copy"
          >
            <div className="availability">
              <span className="status-dot" />
              Available for full-stack opportunities
            </div>
            <h1>
              <span>Hi, I'm</span>
              <strong>{profile.name}</strong>
            </h1>
            <p className="hero-kicker">{profile.role}</p>
            <p className="hero-summary">
              I build scalable, high-performance web applications with modern
              technologies, clean code, and strong DSA fundamentals.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn-primary">
                View My Work <FiArrowRight aria-hidden="true" />
              </a>
              <a href={profile.resumeUrl} className="btn-secondary" download>
                <FiDownload aria-hidden="true" /> Download Resume
              </a>
            </div>

            <div className="hero-meta">
              <span>Connect with me</span>
              <a href={profile.github} aria-label="GitHub profile"><FiGithub /></a>
              <a href={profile.linkedin} aria-label="LinkedIn profile"><FiLinkedin /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email Rahul"><FiMail /></a>
              <span className="hero-location"><FiMapPin aria-hidden="true" /> {profile.location}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{opacity:0, scale:0.96}}
            animate={{opacity:1, scale:1}}
            transition={{duration:0.6, delay:0.1}}
            className="hero-visual"
            aria-hidden="true"
          >
            <div className="orbit-ring ring-one" />
            <div className="orbit-ring ring-two" />
            <div className="portrait-glow">
              <div className="portrait-card">
                <span>RP</span>
                <small>Full Stack</small>
              </div>
            </div>
            <div className="floating-tech react"><SiReact /></div>
            <div className="floating-tech node"><SiNodedotjs /></div>
            <div className="floating-tech mongo"><SiMongodb /></div>
          </motion.div>

          <motion.div
            initial={{opacity:0, x:24}}
            animate={{opacity:1, x:0}}
            transition={{duration:0.6, delay:0.15}}
            className="hero-stat-stack"
          >
            {heroStats.map(({ value, label, icon: Icon }) => (
              <div className="hero-stat-card" key={label}>
                <span><Icon aria-hidden="true" /></span>
                <div>
                  <strong>{value}</strong>
                  <small>{label}</small>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="hero-tech-panel">
          <div className="tech-panel-head">
            <strong>Tech Stack</strong>
            <span>and more... <FiArrowRight aria-hidden="true" /></span>
          </div>
          <div className="tech-stack-row">
            {techStack.map(({ name, icon: Icon }) => (
              <div className="tech-pill" key={name}>
                <Icon aria-hidden="true" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
