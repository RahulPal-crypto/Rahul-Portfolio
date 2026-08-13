import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiAward, FiBriefcase, FiCode, FiDownload, FiGithub, FiLinkedin, FiMail, FiMapPin, FiServer } from 'react-icons/fi'
import { SiExpress, SiJavascript, SiMongodb, SiNodedotjs, SiReact, SiTailwindcss } from 'react-icons/si'
import { profile } from '../data/portfolio'

// const heroStats = [
//   { value: '3+', label: 'Projects Completed', icon: FiBriefcase },
//   { value: '800+', label: 'DSA Problems Solved', icon: FiCode },
//   { value: 'MERN', label: 'Primary Stack', icon: FiServer },
//   { value: '2026', label: 'Current Focus', icon: FiAward },
// ]

const techStack = [
  { name: 'React', icon: SiReact },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express.js', icon: SiExpress },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
]

export default function Hero(){
  const phrases = [profile.name, 'Problem Solver', 'Tech Enthusiast', 'MERN Developer']
  const maxLen = Math.max(...phrases.map(p => p.length))
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
const badgeTexts = [
  "800+ DSA Problems Solved",
  "3+ Projects Built",
  "Actively Seeking Software Roles",
]

const [badgeIndex, setBadgeIndex] = useState(0)

useEffect(() => {
  const interval = setInterval(() => {
    setBadgeIndex((prev) => (prev + 1) % badgeTexts.length)
  }, 2800)

  return () => clearInterval(interval)
}, [])

  useEffect(() => {
    const typingSpeed = 140
    const deletingSpeed = 70
    const pauseDuration = 1200

    let timeout
    const current = loopNum % phrases.length
    const fullText = phrases[current]

    if (!isDeleting && displayText === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setLoopNum(prev => prev + 1)
    } else {
      timeout = setTimeout(() => {
        setDisplayText(prev => {
          return isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
        })
      }, isDeleting ? deletingSpeed : typingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, loopNum])

  return (
    <section id="home" className="relative min-h-[96svh] overflow-hidden bg-[#0b0f14] text-white">
      <div className="hero-image" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content-layer mx-auto grid max-w-6xl gap-12 px-4 py-27 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end lg:px-6 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-3 rounded-xl border border-slate-700 bg-[#121826]/80 px-4 py-3 text-sm text-slate-200 blink-hide">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(52,211,153,0.12)]" />
            Available for full-stack opportunities
          </div>

          <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight text-white md:text-6xl xl:text-7xl">
            <span className="block text-sm uppercase tracking-[0.3em] text-blue-400">Hi, I'm Rahul Pal</span>
            <span className="block mt-5">
              <span style={{ display: 'inline-block', minWidth: `${maxLen}ch`, whiteSpace: 'nowrap' }}>{displayText}</span>
            </span>
          </h1>

          <p className="mt-6 text-2xl font-semibold text-blue-400">{profile.role}</p>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
            I build scalable, high-performance web applications with modern technologies, clean code, and strong DSA fundamentals.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#projects" className="inline-flex items-center gap-3 rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-400">
              View My Work <FiArrowRight aria-hidden="true" />
            </a>
            <a href={profile.resumeUrl} className="inline-flex items-center gap-3 rounded-xl border border-slate-700 bg-[#121826]/80 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500" download>
              <FiDownload aria-hidden="true" /> Download Resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-300">
            <span>Connect with me</span>
            <div className="flex items-center gap-3 text-xl text-white">
              <a href={profile.github} aria-label="GitHub profile"><FiGithub /></a>
              <a href={profile.linkedin} aria-label="LinkedIn profile"><FiLinkedin /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email Rahul"><FiMail /></a>
            </div>
            <span className="inline-flex items-center gap-2 text-slate-300">
              <FiMapPin aria-hidden="true" /> {profile.location}
            </span>
          </div>
        </motion.div>

        <motion.div
  initial={{ opacity: 0, scale: 0.96 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  className="hero-visual relative hidden lg:block"
  aria-hidden="true"
>
  {/* Dynamic Badge */}
  <motion.div
    key={badgeIndex}
    initial={{ opacity: 0, y: -8, scale: 0.94 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.45 }}
    className="
      absolute
      right-0
      top-[-58px]
      z-20
      rounded-xl
      border
      border-blue-500/30
      bg-[#111827]/95
      px-4
      py-3
      shadow-[0_10px_35px_rgba(37,99,235,0.18)]
      backdrop-blur-md
    "
  >
    <div className="flex items-center gap-2.5 whitespace-nowrap">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />

        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-400" />
      </span>

      <span className="text-sm font-semibold text-slate-100">
        {badgeTexts[badgeIndex]}
      </span>
    </div>
  </motion.div>

  {/* Existing Hero Visual */}
  <div className="orbit-ring ring-one" />

  <div className="orbit-ring ring-two" />

  <div className="portrait-glow">
    <div className="portrait-card">
      <span>RP</span>
      <small>Full Stack</small>
    </div>
  </div>

  <div className="floating-tech react">
    <SiReact />
  </div>

  <div className="floating-tech node">
    <SiNodedotjs />
  </div>

  <div className="floating-tech mongo">
    <SiMongodb />
  </div>
</motion.div>
          

          
        

        {/* <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid gap-4 lg:col-span-2 sm:grid-cols-2"
        >
          {heroStats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_28px_80px_rgba(15,23,42,0.2)]">
              <span className="text-2xl text-amber-300"><Icon aria-hidden="true" /></span>
              <div className="mt-4">
                <strong className="block text-2xl font-semibold text-white">{value}</strong>
                <small className="text-sm text-slate-400">{label}</small>
              </div>
            </div>
          ))}
        </motion.div> */}
      </div>

      {/* <div className="hero-content-layer mx-auto max-w-6xl px-4 pb-20 lg:px-6 xl:px-0">
        <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-[0_30px_110px_rgba(15,23,42,0.2)]">
          <div className="mb-6 flex items-center justify-between text-sm font-semibold text-slate-100">
            <strong>Tech Stack</strong>
            <span className="inline-flex items-center gap-2 text-amber-200">and more... <FiArrowRight aria-hidden="true" /></span>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {techStack.map(({ name, icon: Icon }) => (
              <div key={name} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-100">
                <Icon aria-hidden="true" className="text-xl text-amber-300" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </section>
  )
}
