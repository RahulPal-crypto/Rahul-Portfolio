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
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-20">
      <Seo title="Admin Login - Rahul Pal" />
      <form onSubmit={submit} className="w-full max-w-md space-y-6 rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.3)]">
        <span className="text-sm font-semibold uppercase tracking-[0.32em] text-amber-300">Admin</span>
        <h1 className="text-3xl font-bold text-white">Manage portfolio content.</h1>
        <label className="space-y-2 text-sm text-slate-100">
          <span>Email</span>
          <input value={form.email} onChange={e => setForm({...form, email: e.target.value})} type="email" required className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20" />
        </label>
        <label className="space-y-2 text-sm text-slate-100">
          <span>Password</span>
          <input value={form.password} onChange={e => setForm({...form, password: e.target.value})} type="password" required className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20" />
        </label>
        <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-3xl bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200">
          Sign in
        </button>
        {status && <p className="rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-slate-200">{status}</p>}
      </form>
    </main>
  )
}
