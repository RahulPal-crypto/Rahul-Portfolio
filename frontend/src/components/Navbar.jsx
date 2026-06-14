import React from 'react'

const navItems = [
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
        <a href="#home" className="brand-mark">RP</a>
        <div className="nav-links">
          {navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </div>
        <a href="/admin" className="nav-admin">Admin</a>
        <a href="#contact" className="nav-cta">Hire me</a>
      </nav>
    </header>
  )
}
