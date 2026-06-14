import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="section-band">
      <div className="content-wrap about-grid">
        <motion.div initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="section-heading">
          <span className="eyebrow">About</span>
          <h2>Developer with a product-minded approach.</h2>
        </motion.div>

        <div className="about-copy">
          <p>
            I am a Computer Science student and full stack developer focused on building
            useful web products, from responsive React interfaces to secure Express APIs.
            My work style is simple: understand the problem, design the flow, and ship
            something users can trust.
          </p>
          <div className="metric-row">
            <div><strong>10+</strong><span>Core technologies</span></div>
            <div><strong>4</strong><span>Portfolio modules</span></div>
            <div><strong>MERN</strong><span>Primary stack</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
