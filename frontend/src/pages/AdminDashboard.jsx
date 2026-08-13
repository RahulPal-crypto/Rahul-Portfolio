import React, { useEffect, useMemo, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from '../api'
import Seo from '../components/Seo'
import { achievements, deploymentChecks, profile, projects, skillGroups } from '../data/portfolio'
import { FiInbox, FiLayers, FiLogOut, FiSettings, FiUser } from 'react-icons/fi'

export default function AdminDashboard(){
  const [messages, setMessages] = useState([])
  const [apiStatus, setApiStatus] = useState('Checking')
  const token = localStorage.getItem('adminToken')
  const headers = useMemo(() => token ? { Authorization: `Bearer ${token}` } : {}, [token])

  useEffect(() => {
    axios.get('/api/health').then(res => setApiStatus(res.data.database || 'online')).catch(() => setApiStatus('offline'))
    if (token) {
      axios.get('/api/contact', { headers }).then(res => setMessages(res.data)).catch(() => setMessages([]))
    }
  }, [headers, token])

  if (!token) return <Navigate to="/admin/login" replace />

  const markRead = async (id) => {
    try {
      const response = await axios.patch(`/api/contact/${id}/status`, { status: 'read' }, { headers })
      setMessages(current => current.map(item => item._id === id ? response.data : item))
    } catch (error) {
      setMessages(current => current.map(item => item._id === id ? { ...item, status: 'read' } : item))
    }
  }

  const logout = () => {
    localStorage.removeItem('adminToken')
    window.location.href = '/admin/login'
  }

  return (
    <main className="min-h-screen bg-slate-950/70 text-slate-200">
      <Seo title="Admin Dashboard - Rahul Pal" />
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-8 px-4 py-10 xl:grid-cols-[280px_minmax(0,1fr)] xl:px-0">
        <aside className="space-y-8 rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.25)]">
          <Link to="/" className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-amber-300 text-lg font-bold text-slate-950">RP</Link>
          <nav className="space-y-3 text-sm text-slate-300">
            <a href="#overview" className="inline-flex items-center gap-2 rounded-3xl px-4 py-3 transition hover:bg-slate-800/80 hover:text-white"><FiLayers /> Overview</a>
            <a href="#messages" className="inline-flex items-center gap-2 rounded-3xl px-4 py-3 transition hover:bg-slate-800/80 hover:text-white"><FiInbox /> Inbox</a>
            <a href="#content" className="inline-flex items-center gap-2 rounded-3xl px-4 py-3 transition hover:bg-slate-800/80 hover:text-white"><FiSettings /> Content</a>
            <a href="#profile" className="inline-flex items-center gap-2 rounded-3xl px-4 py-3 transition hover:bg-slate-800/80 hover:text-white"><FiUser /> Profile</a>
          </nav>
          <button onClick={logout} className="w-full rounded-3xl bg-amber-300 px-4 py-3 font-semibold text-slate-950 transition hover:bg-amber-200">
            <FiLogOut className="inline-block mr-2" /> Logout
          </button>
        </aside>

        <section className="space-y-8">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.25)]">
            <span className="text-sm font-semibold uppercase tracking-[0.32em] text-amber-300">Dashboard</span>
            <h1 className="mt-4 text-3xl font-bold text-white">Portfolio command center.</h1>
            <p className="mt-3 text-slate-300 leading-7">Manage proof points, messages, profile content, deployment status, and recruiter-facing data.</p>
          </div>

          <div id="overview" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 text-slate-300 shadow-[0_24px_70px_rgba(15,23,42,0.25)]">
              <span className="text-sm">Projects</span>
              <strong className="mt-3 block text-3xl text-white">{projects.length}</strong>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 text-slate-300 shadow-[0_24px_70px_rgba(15,23,42,0.25)]">
              <span className="text-sm">Skill groups</span>
              <strong className="mt-3 block text-3xl text-white">{skillGroups.length}</strong>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 text-slate-300 shadow-[0_24px_70px_rgba(15,23,42,0.25)]">
              <span className="text-sm">Achievements</span>
              <strong className="mt-3 block text-3xl text-white">{achievements.length}</strong>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 text-slate-300 shadow-[0_24px_70px_rgba(15,23,42,0.25)]">
              <span className="text-sm">API mode</span>
              <strong className="mt-3 block text-3xl text-white">{apiStatus}</strong>
            </div>
          </div>

          <div id="messages" className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.25)]">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-white">Contact inbox</h2>
                <p className="text-sm text-slate-400">{messages.filter(item => item.status !== 'read').length} unread</p>
              </div>
            </div>

            {messages.length ? (
              <div className="space-y-4">
                {messages.map(message => (
                  <article key={message._id} className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 text-slate-300 shadow-[0_24px_70px_rgba(15,23,42,0.25)]">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <strong className="text-base text-white">{message.subject}</strong>
                        <p className="mt-2 text-sm text-slate-400">{message.name} - {message.email}</p>
                        <p className="mt-4 text-sm leading-7">{message.message}</p>
                      </div>
                      <button onClick={() => markRead(message._id)} className="mt-4 rounded-3xl bg-amber-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200 sm:mt-0">
                        {message.status === 'read' ? 'Read' : 'Mark read'}
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <p className="rounded-3xl border border-white/10 bg-slate-950/80 px-5 py-4 text-sm text-slate-200">No messages loaded. Log in with seeded admin credentials to view saved messages.</p>
            )}
          </div>

          <div id="content" className="grid gap-6 xl:grid-cols-2">
            <section className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.25)]">
              <h2 className="text-xl font-semibold text-white">Editable content model</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">Projects, skills, profile, achievements, resume, testimonials, and notes now have clear data structures ready for forms.</p>
            </section>
            <section className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.25)]">
              <h2 className="text-xl font-semibold text-white">Deployment checklist</h2>
              <div className="mt-5 space-y-3 text-sm text-slate-300">
                {deploymentChecks.map(item => (
                  <div key={item.label} className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-4 py-3">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div id="profile" className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.25)]">
            <h2 className="text-xl font-semibold text-white">Profile preview</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">{profile.name} - {profile.role}</p>
            <span className="text-sm text-slate-400">{profile.summary}</span>
          </div>
        </section>
      </div>
    </main>
  )
}
