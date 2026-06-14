import React, { useState } from 'react'
import axios from 'axios'
import { FiMail, FiSend } from 'react-icons/fi'

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function Contact(){
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const updateField = (event) => {
    setForm(current => ({ ...current, [event.target.name]: event.target.value }))
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
      setStatus('Message could not be sent right now. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section-band contact-band">
      <div className="content-wrap contact-grid">
        <div className="section-heading">
          <span className="eyebrow">Contact</span>
          <h2>Have a project or role in mind?</h2>
          <p>Send a quick note and I will respond with next steps.</p>
          <a href="mailto:rahul@example.com" className="mail-link"><FiMail aria-hidden="true" /> rahul@example.com</a>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <div className="field-row">
            <label>
              Name
              <input name="name" value={form.name} onChange={updateField} required />
            </label>
            <label>
              Email
              <input name="email" type="email" value={form.email} onChange={updateField} required />
            </label>
          </div>
          <label>
            Subject
            <input name="subject" value={form.subject} onChange={updateField} required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" value={form.message} onChange={updateField} required />
          </label>
          <button type="submit" className="btn-primary" disabled={loading}>
            <FiSend aria-hidden="true" /> {loading ? 'Sending...' : 'Send message'}
          </button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  )
}
