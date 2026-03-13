import { useState } from 'react'

export default function Experience({ experience, education }) {
  const [tab, setTab] = useState('experience')

  return (
    <section className="section" id="experience">
      <div className="container">
        <h2 className="section-title">My <span>Journey</span></h2>
        <p className="section-subtitle">Work experience and educational background</p>

        <div className="skills-tabs">
          <button
            className={`tab-btn ${tab === 'experience' ? 'active' : ''}`}
            onClick={() => setTab('experience')}
          >
            Work Experience
          </button>
          <button
            className={`tab-btn ${tab === 'education' ? 'active' : ''}`}
            onClick={() => setTab('education')}
          >
            Education
          </button>
        </div>

        <div className="timeline">
          {tab === 'experience' && experience.map((item, i) => (
            <div className="timeline-item reveal" style={{ '--i': i }} key={i}>
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{item.role}</h3>
                    <p className="timeline-company">{item.company}</p>
                  </div>
                  <div className="timeline-meta">
                    <span className="timeline-period">{item.period}</span>
                    <span className="timeline-location">{item.location}</span>
                  </div>
                </div>
                <ul className="timeline-points">
                  {item.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {tab === 'education' && education.map((item, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{item.degree}</h3>
                    <p className="timeline-company">{item.school}</p>
                  </div>
                  <div className="timeline-meta">
                    <span className="timeline-period">{item.period}</span>
                  </div>
                </div>
                {item.detail && <p className="timeline-detail">{item.detail}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
