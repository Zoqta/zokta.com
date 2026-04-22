'use client'

import { useEffect, useState } from 'react'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function WaitlistSection() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    if (!message) return undefined
    const timeout = setTimeout(() => setMessage(null), 4200)
    return () => clearTimeout(timeout)
  }, [message])

  async function onSubmit(e) {
    e.preventDefault()
    const formEl = e.currentTarget
    setMessage(null)
    const form = new FormData(formEl)
    const payload = {
      firstName: String(form.get('firstName') || '').trim(),
      lastName: String(form.get('lastName') || '').trim(),
      email: String(form.get('email') || '').trim(),
      company: String(form.get('company') || '').trim() || null,
    }

    if (!payload.firstName || !payload.lastName || !payload.email) {
      setMessage({ kind: 'error', text: 'Please fill in first name, last name, and email.' })
      return
    }

    if (!EMAIL_REGEX.test(payload.email)) {
      setMessage({ kind: 'error', text: 'Please enter a valid email address.' })
      return
    }

    setLoading(true)

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await response.json().catch(() => null)
      if (!response.ok) {
        throw new Error(data?.error || 'Failed to join waitlist')
      }
      setMessage({ kind: 'success', text: data?.message || 'Successfully added to waitlist!' })
      formEl.reset()
    } catch (error) {
      setMessage({ kind: 'error', text: error instanceof Error ? error.message : 'Something went wrong' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section section-mesh-bg">
      <div className="container">
        <div
          className="cta-shell-pro"
          style={{
            maxWidth: 760,
            margin: '0 auto',
            padding: '2rem',
            borderRadius: 20,
            background: 'linear-gradient(135deg, rgba(125,233,255,0.92), rgba(193,128,255,0.92))',
            color: '#06121e',
          }}
        >
          <div className="section-eyebrow-dark">Start Building</div>
          <h2 className="section-title-dark" style={{ marginTop: 0, textAlign: 'center' }}>Ready to Transform Your Workflow?</h2>
          <p style={{ textAlign: 'center', marginTop: 0 }}>
            Join thousands of engineers who trust Zoqta for their AI needs.
          </p>
          <form onSubmit={onSubmit} style={{ display: 'grid', gap: 10 }}>
            <div className="name-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <input required name="firstName" placeholder="First Name" style={inputStyle} />
              <input required name="lastName" placeholder="Last Name" style={inputStyle} />
            </div>
            <input required type="email" name="email" placeholder="Email Address" style={inputStyle} />
            <input name="company" placeholder="Company (Optional)" style={inputStyle} />
            <button type="submit" disabled={loading} className="btn btn-submit">
              {loading ? 'Joining...' : 'Join Waitlist'}
            </button>
          </form>
        </div>
      </div>
      {message && (
        <div className={`waitlist-snackbar waitlist-snackbar-${message.kind}`} role="status" aria-live="polite">
          <span>{message.text}</span>
          <button
            type="button"
            className="waitlist-snackbar-close"
            onClick={() => setMessage(null)}
            aria-label="Dismiss notification"
          >
            ×
          </button>
        </div>
      )}
    </section>
  )
}

const inputStyle = {
  width: '100%',
  border: 'none',
  outline: 'none',
  padding: '0.78rem .92rem',
  borderRadius: 10,
  background: 'rgba(255,255,255,0.92)',
  color: '#09131f',
}

