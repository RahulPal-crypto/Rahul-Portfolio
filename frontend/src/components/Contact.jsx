import React, { useState } from 'react'
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from 'react-icons/fi'
import { motion } from 'framer-motion'
import axios from '../api'

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const updateField = (event) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }))
  }

  const submit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setStatus('')

    try {
      await axios.post('/api/contact', form)

      setForm(initialForm)
      setStatus('Message sent. I will get back to you soon.')
    } catch (error) {
      setStatus(
        'Message could not be sent right now. Please try again later.'
      )
    } finally {
      setLoading(false)
    }
  }

  const contactItems = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'rpal52410@gmail.com',
      href: 'mailto:rpal5410@gmail.com',
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: '+91 8382840256',
      href: 'tel:+91 8382840256',
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'India',
    },
  ]

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0b0f14] py-15 text-white"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 xl:px-0">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mb-12 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-400">
            Contact
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-50 md:text-4xl">
            Say Hi, Don't Be Shy
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400 md:text-base">
            Have a project, opportunity, or just want to connect?
            Feel free to send me a message.
          </p>
        </motion.div>

        {/* Main Contact Layout */}
        <div className="grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="space-y-4"
          >
            {contactItems.map(
              ({ icon: Icon, title, value, href }) => (
                <div
                  key={title}
                  className="group rounded-xl border border-slate-700/80 bg-[#121826]/90 p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-[#151e2d]"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 transition group-hover:bg-blue-500/20">
                      <Icon className="text-lg" />
                    </span>

                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        {title}
                      </p>

                      {href ? (
                        <a
                          href={href}
                          className="mt-1 block truncate text-sm font-medium text-slate-200 transition hover:text-blue-400"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm font-medium text-slate-200">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )
            )}

            {/* Social */}
            <div className="pt-3">
              <h3 className="text-lg font-semibold text-white">
                Connect With Me
              </h3>

              <div className="mt-4 flex items-center gap-3">
                <a
                  href="#"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-[#121826] text-slate-300 transition hover:-translate-y-1 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  <FiGithub />
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-[#121826] text-slate-300 transition hover:-translate-y-1 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  <FiLinkedin />
                </a>

                <a
                  href="mailto:rahul@example.com"
                  aria-label="Email"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-[#121826] text-slate-300 transition hover:-translate-y-1 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  <FiMail />
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            onSubmit={submit}
            className="rounded-2xl border border-slate-700/80 bg-[#111827]/90 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.25)] md:p-7"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Name */}
              <label className="space-y-2">
                <span className="text-xs font-semibold text-slate-200">
                  Your Name
                </span>

                <input
                  name="name"
                  value={form.name}
                  onChange={updateField}
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-slate-600 bg-[#151e2d] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </label>

              {/* Email */}
              <label className="space-y-2">
                <span className="text-xs font-semibold text-slate-200">
                  Your Email
                </span>

                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={updateField}
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-slate-600 bg-[#151e2d] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </label>
            </div>

            {/* Subject */}
            <label className="mt-5 block space-y-2">
              <span className="text-xs font-semibold text-slate-200">
                Subject
              </span>

              <input
                name="subject"
                value={form.subject}
                onChange={updateField}
                required
                placeholder="How can I help you?"
                className="w-full rounded-lg border border-slate-600 bg-[#151e2d] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </label>

            {/* Message */}
            <label className="mt-5 block space-y-2">
              <span className="text-xs font-semibold text-slate-200">
                Message
              </span>

              <textarea
                name="message"
                rows="6"
                value={form.message}
                onChange={updateField}
                required
                placeholder="Your message here..."
                className="min-h-[150px] w-full resize-none rounded-lg border border-slate-600 bg-[#151e2d] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <FiSend aria-hidden="true" />

              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {/* Status */}
            {status && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-300"
              >
                {status}
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}