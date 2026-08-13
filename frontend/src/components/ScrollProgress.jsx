import React, { useEffect, useState } from 'react'

const sectionLabels = [
  ['home', 'home'],
  ['about', 'about me'],
  ['skills', 'skills'],
  ['projects', 'projects'],
  ['experience', 'journey'],
  ['contact', 'contact'],
]

export default function ScrollProgress(){
  const [progress, setProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('home')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const updateProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0)
      setVisible(window.scrollY > 0)

      const current = sectionLabels.reduce((active, [id, label]) => {
        const section = document.getElementById(id)
        return section && section.getBoundingClientRect().top <= window.innerHeight * 0.42 ? label : active
      }, 'home')
      setActiveSection(current)
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  const roundedProgress = Math.round(progress)
  if (!visible) return null

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-40 hidden px-4 pt-2 md:block">
      <div className="mx-auto flex max-w-6xl items-center gap-3 rounded-md border border-slate-700/90 bg-[#121826]/95 px-3 py-1.5 font-mono text-xs shadow-lg shadow-black/20 backdrop-blur">
        <span className="shrink-0 font-semibold text-emerald-400">→ {roundedProgress}%</span>
        <div className="relative h-5 min-w-0 flex-1 overflow-hidden rounded-sm border border-slate-600 bg-slate-800">
          <div className="absolute inset-y-0 left-0 bg-blue-500 transition-[width] duration-150" style={{ width: `${progress}%` }} />
          <span className="relative z-10 flex h-full items-center px-2 font-semibold text-slate-50">{'{'}intro{'}'}{activeSection}_</span>
          <span className="absolute inset-y-0 right-2 z-10 flex items-center text-[0.68rem] font-semibold text-slate-100">{100 - roundedProgress}% remaining</span>
        </div>
        <span className="grid h-6 w-6 place-items-center rounded border border-slate-700 text-slate-400">⌄</span>
      </div>
    </div>
  )
}
