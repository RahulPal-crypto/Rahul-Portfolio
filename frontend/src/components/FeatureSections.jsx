import React from 'react'
import { FiAward, FiBookOpen, FiCheckCircle, FiClock, FiGithub, FiServer, FiStar } from 'react-icons/fi'
import { achievements, blogNotes, deploymentChecks, testimonials, timeline } from '../data/portfolio'

export function ExperienceTimeline(){
  return (
    <section id="experience" className="bg-[#0d121a] py-24">
      <div className="mx-auto max-w-6xl space-y-10 px-4 xl:px-0">
        <div className="space-y-4">
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-400">Journey</span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-50 md:text-4xl">Progress through practice, projects, and problem solving.</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {timeline.map(item => (
            <article key={item.title} className="rounded-2xl border border-slate-800 bg-[#121826] p-6">
              <span className="mb-5 block text-sm font-semibold text-blue-400">{item.year}</span>
              <h3 className="text-xl font-semibold text-slate-50">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Achievements(){
  return (
    <section id="achievements" className="bg-slate-950/70 py-20">
      <div className="mx-auto max-w-6xl space-y-10 px-4 xl:px-0">
        <div className="flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.25)] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.32em] text-amber-300">Proof</span>
            <h2 className="mt-4 text-3xl font-bold text-white">Signals that show consistency beyond the interface.</h2>
          </div>
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-amber-300 text-2xl text-slate-950">
            <FiAward aria-hidden="true" />
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {achievements.map(item => (
            <article key={item.title} className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 text-slate-300 shadow-[0_24px_80px_rgba(15,23,42,0.25)]">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-emerald-400/10 text-emerald-300">
                <FiCheckCircle aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Testimonials(){
  return (
    <section id="testimonials" className="bg-slate-950/70 py-20">
      <div className="mx-auto max-w-6xl space-y-10 px-4 xl:px-0">
        <div className="space-y-4">
          <span className="text-sm font-semibold uppercase tracking-[0.32em] text-amber-300">Recommendations</span>
          <h2 className="text-3xl font-bold text-white">Working style that values clarity, ownership, and useful delivery.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map(item => (
            <article key={item.name} className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.25)]">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-amber-300 text-slate-950">
                <FiStar aria-hidden="true" />
              </div>
              <p className="text-sm leading-7 text-slate-300">"{item.quote}"</p>
              <strong className="mt-6 block text-base font-semibold text-white">{item.name}</strong>
              <span className="text-sm text-slate-400">{item.role}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function BlogNotes(){
  return (
    <section id="notes" className="bg-slate-950/70 py-20">
      <div className="mx-auto max-w-6xl space-y-10 px-4 xl:px-0">
        <div className="flex items-center justify-between gap-4 rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.25)]">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.32em] text-amber-300">Notes</span>
            <h2 className="mt-4 text-3xl font-bold text-white">Learning notes from building and solving consistently.</h2>
          </div>
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-950/90 text-amber-200">
            <FiBookOpen aria-hidden="true" />
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogNotes.map(note => (
            <article key={note.title} className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.25)]">
              <span className="inline-flex rounded-full bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">{note.tag}</span>
              <h3 className="mt-4 text-xl font-semibold text-white">{note.title}</h3>
              <p className="mt-4 flex items-center gap-2 text-sm text-slate-400"><FiClock aria-hidden="true" /> {note.readTime}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function LiveSignals(){
  return (
    <section id="github" className="bg-slate-950/70 py-20">
      <div className="mx-auto max-w-6xl space-y-10 px-4 xl:px-0">
        <div className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.25)]">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-white/10 text-white">
              <FiGithub aria-hidden="true" />
            </div>
            <span className="text-sm font-semibold uppercase tracking-[0.32em] text-amber-300">GitHub</span>
            <h2 className="mt-4 text-2xl font-bold text-white">Code-first proof.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">Projects are shaped around real flows, clean APIs, and implementation details that can be explained clearly.</p>
          </article>

          <article className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 text-white shadow-[0_24px_80px_rgba(15,23,42,0.25)]">
            <span className="text-sm font-semibold uppercase tracking-[0.32em] text-amber-300">Full-stack proof</span>
            <h2 className="mt-4 text-2xl font-bold">More than a static portfolio.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">This site connects polished UI, backend APIs, auth-ready workflows, contact storage, SEO, and deployment-minded structure.</p>
            <div className="mt-6 rounded-full bg-white/10 p-1">
              <div className="h-3 rounded-full bg-amber-300" style={{ width: '92%' }} />
            </div>
          </article>

          <article className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.25)]">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-900 text-amber-300">
              <FiServer aria-hidden="true" />
            </div>
            <span className="text-sm font-semibold uppercase tracking-[0.32em] text-amber-300">Deployment</span>
            <h2 className="mt-4 text-2xl font-bold text-white">Health snapshot.</h2>
            <div className="mt-6 space-y-3 text-sm text-slate-300">
              {deploymentChecks.map(item => (
                <div key={item.label} className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-4 py-3">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
