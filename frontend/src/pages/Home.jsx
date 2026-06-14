import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import ProjectsList from '../components/ProjectsList'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Seo from '../components/Seo'
import { Achievements, BlogNotes, ExperienceTimeline, LiveSignals, Testimonials } from '../components/FeatureSections'

export default function Home(){
  return (
    <div className="min-h-screen">
      <Seo />
      <Navbar />
      <Hero />
      <main>
        <About />
        <Skills />
        <ProjectsList />
        <ExperienceTimeline />
        <Achievements />
        <Testimonials />
        <LiveSignals />
        <BlogNotes />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
