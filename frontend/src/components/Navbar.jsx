import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'

const navItems = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['Contact', '#contact'],
]

export default function Navbar(){
  return (
    <header className="pointer-events-none relative z-20">
      <nav className="pointer-events-auto mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-[#0b0f14]/90 px-3 py-2 text-white backdrop-blur-2xl">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-500 text-sm font-extrabold text-white">
            RP
          </span>
          <span className="flex flex-col leading-tight">
            <strong className="text-sm font-semibold">Rahul <em className="not-italic">Pal</em></strong>
            <small className="text-[0.66rem] text-slate-300">Full Stack Developer</small>
          </span>
        </a>

        <div className="flex items-center gap-2">
          <div className="hidden gap-1 md:flex">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-300 transition hover:bg-slate-800 hover:text-white">
                {label}
              </a>
            ))}
          </div>

          <Link to="/admin" className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-300 transition hover:bg-slate-800 hover:text-white">
            Admin
          </Link>

          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-400">
            Hire Me <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  )
}
