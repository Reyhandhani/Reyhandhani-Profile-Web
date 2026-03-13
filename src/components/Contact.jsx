import { useState } from 'react'

export default function Contact({ data }) {
  const { email, phone, location, social } = data
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
      `From: ${form.name} (${form.email})\n\n${form.message}`
    )}`
    window.location.href = mailtoLink
    setSent(true)
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <h2 className="section-title">Get In <span>Touch</span></h2>
        <p className="section-subtitle">Have a question or want to work together? Let's connect!</p>

        <div className="contact-grid">
          {/* Info */}
          <div className="contact-info reveal reveal-left">
            <h3>Contact Information</h3>

            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <span className="contact-label">Email</span>
                <a href={`mailto:${email}`} className="contact-value">{email}</a>
              </div>
            </div>

            {phone && (
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div>
                  <span className="contact-label">Phone / WhatsApp</span>
                  <a href={`http://wa.me/6281249999573`} target="_blank" rel="noreferrer" className="contact-value">{phone}</a>
                </div>
              </div>
            )}

            {location && (
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <span className="contact-label">Location</span>
                  <span className="contact-value">{location}</span>
                </div>
              </div>
            )}

            <div className="contact-social">
              {social.github && (
                <a href={social.github} target="_blank" rel="noreferrer" className="social-link">
                  GitHub
                </a>
              )}
              {social.linkedin && (
                <a href={social.linkedin} target="_blank" rel="noreferrer" className="social-link">
                  LinkedIn
                </a>
              )}
              {social.twitter && (
                <a href={social.twitter} target="_blank" rel="noreferrer" className="social-link">
                  Twitter
                </a>
              )}
            </div>
          </div>

          {/* Form */}
          <form className="contact-form reveal reveal-right" onSubmit={handleSubmit}>
            {sent && (
              <div className="form-success">
                Thanks! Your email client should open shortly.
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Message subject"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Write your message here..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
