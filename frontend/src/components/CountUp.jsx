import React, { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

export default function CountUp({ value, suffix = '' }){
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.7 })
  const reduceMotion = useReducedMotion()
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    if (reduceMotion) {
      setCount(value)
      return
    }

    const duration = 1000
    const startedAt = performance.now()
    let frame
    const update = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1)
      setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))))
      if (progress < 1) frame = requestAnimationFrame(update)
    }
    frame = requestAnimationFrame(update)
    return () => cancelAnimationFrame(frame)
  }, [isInView, reduceMotion, value])

  return <span ref={ref}>{count}{suffix}</span>
}
