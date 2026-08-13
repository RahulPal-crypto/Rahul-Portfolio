import React, { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const lines = ['ERROR 404:', 'Conventional', 'developer not found.']

export default function PortfolioIntro({ onComplete }){
  const reduceMotion = useReducedMotion()
  const [isLeaving, setIsLeaving] = useState(false)

  useEffect(() => {
    const displayTimer = window.setTimeout(() => setIsLeaving(true), reduceMotion ? 150 : 3000)
    const exitTimer = window.setTimeout(onComplete, reduceMotion ? 250 : 3350)
    return () => {
      window.clearTimeout(displayTimer)
      window.clearTimeout(exitTimer)
    }
  }, [onComplete, reduceMotion])

  return (
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 1 }}
        animate={{ opacity: isLeaving ? 0 : 1 }}
        transition={{ duration: reduceMotion ? 0 : 0.35 }}
        className="fixed inset-0 z-50 grid place-items-center overflow-hidden bg-[#070a0f] px-6 text-slate-50"
      >
        <div className="intro-grid" />
        <div className="relative w-full max-w-5xl space-y-5 font-mono text-[clamp(2.5rem,6.2vw,5.5rem)] font-semibold leading-[1.08] tracking-[-0.06em]">
          {lines.map((line, index) => (
            <motion.p
              key={line}
              initial={reduceMotion ? false : { opacity: 0, y: 24, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : index * 0.72, ease: [0.16, 1, 0.3, 1] }}
              className={index === 0 ? 'text-blue-400' : index === 2 ? 'text-slate-300' : 'text-slate-50'}
            >
              {line}
            </motion.p>
          ))}
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.65 }}
          transition={{ delay: reduceMotion ? 0 : 2.25 }}
          className="absolute bottom-9 font-mono text-xs uppercase tracking-[0.24em] text-slate-500"
        >
          Initializing portfolio
        </motion.span>
      </motion.div>
  )
}
