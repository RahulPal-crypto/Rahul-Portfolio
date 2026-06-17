import React from 'react'
import { FiArrowUpRight, FiMoon } from 'react-icons/fi'

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
    <header className="site-header">
      <nav className="content-wrap nav-bar" aria-label="Main navigation">
        <a href="#home" className="nav-brand">
          <span className="brand-mark">RP</span>
          <span>
            <strong>Rahul <em>Pal</em></strong>
            <small>Full Stack Developer</small>
          </span>
        </a>
        <div className="nav-links">
          {navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </div>
        <div className="nav-actions">
          <a href="/admin" className="nav-admin">Admin</a>
          <button className="theme-toggle" type="button" aria-label="Theme preview">
            <FiMoon aria-hidden="true" />
          </button>
          <a href="#contact" className="nav-cta">Hire Me <FiArrowUpRight aria-hidden="true" /></a>
        </div>
      </nav>
    </header>
  )
}
