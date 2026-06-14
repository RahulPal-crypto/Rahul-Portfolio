import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../api'
import Seo from '../components/Seo'

export default function AdminLogin(){
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [status, setStatus] = useState('')

  const submit = async (event) => {
    event.preventDefault()
    setStatus('Signing in...')
    try {
      const response = await axios.post('/api/auth/login', form)
      localStorage.setItem('adminToken', response.data.token)
      navigate('/admin')
    } catch (error) {
      setStatus('Login failed. Use your seeded admin credentials.')
    }
  }

  return (
    <main className="admin-auth">
      <Seo title="Admin Login - Rahul Pal" />
      <form className="admin-login-card" onSubmit={submit}>
        <span className="eyebrow">Admin</span>
        <h1>Manage portfolio content.</h1>
        <label>Email<input value={form.email} onChange={e => setForm({...form, email: e.target.value})} type="email" required /></label>
        <label>Password<input value={form.password} onChange={e => setForm({...form, password: e.target.value})} type="password" required /></label>
        <button className="btn-primary" type="submit">Sign in</button>
        {status && <p className="form-status">{status}</p>}
      </form>
    </main>
  )
}
