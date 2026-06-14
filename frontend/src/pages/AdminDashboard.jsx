import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
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
    <main className="admin-page">
      <Seo title="Admin Dashboard - Rahul Pal" />
      <aside className="admin-sidebar">
        <Link to="/" className="brand-mark">RP</Link>
        <nav>
          <a href="#overview"><FiLayers /> Overview</a>
          <a href="#messages"><FiInbox /> Inbox</a>
          <a href="#content"><FiSettings /> Content</a>
          <a href="#profile"><FiUser /> Profile</a>
        </nav>
        <button onClick={logout}><FiLogOut /> Logout</button>
      </aside>

      <section className="admin-main">
        <div className="admin-heading">
          <span className="eyebrow">Dashboard</span>
          <h1>Portfolio command center.</h1>
          <p>Manage proof points, messages, profile content, deployment status, and recruiter-facing data.</p>
        </div>

        <div id="overview" className="admin-stat-grid">
          <div><span>Projects</span><strong>{projects.length}</strong></div>
          <div><span>Skill groups</span><strong>{skillGroups.length}</strong></div>
          <div><span>Achievements</span><strong>{achievements.length}</strong></div>
          <div><span>API mode</span><strong>{apiStatus}</strong></div>
        </div>

        <div id="messages" className="admin-panel">
          <div className="admin-panel-head">
            <h2>Contact inbox</h2>
            <span>{messages.filter(item => item.status !== 'read').length} unread</span>
          </div>
          {messages.length ? messages.map(message => (
            <article className="message-row" key={message._id}>
              <div>
                <strong>{message.subject}</strong>
                <p>{message.name} - {message.email}</p>
                <span>{message.message}</span>
              </div>
              <button onClick={() => markRead(message._id)}>{message.status === 'read' ? 'Read' : 'Mark read'}</button>
            </article>
          )) : <p className="empty-state">No messages loaded. Log in with seeded admin credentials to view saved messages.</p>}
        </div>

        <div id="content" className="admin-grid">
          <section className="admin-panel">
            <h2>Editable content model</h2>
            <p>Projects, skills, profile, achievements, resume, testimonials, and notes now have clear data structures ready for forms.</p>
          </section>
          <section className="admin-panel">
            <h2>Deployment checklist</h2>
            {deploymentChecks.map(item => <div className="check-row" key={item.label}><span>{item.label}</span><strong>{item.value}</strong></div>)}
          </section>
        </div>

        <div id="profile" className="admin-panel">
          <h2>Profile preview</h2>
          <p>{profile.name} - {profile.role}</p>
          <span>{profile.summary}</span>
        </div>
      </section>
    </main>
  )
}
