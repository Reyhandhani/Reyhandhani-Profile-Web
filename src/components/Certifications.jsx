import { useState, useEffect } from 'react';

export default function Certifications({ certifications }) {
  const [lightbox, setLightbox] = useState(null); // cert object or null

  // Close on Escape key
  useEffect(() => {
    if (!lightbox) return;
    const handler = (e) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  return (
    <>
      <section className="section" id="certifications">
        <div className="container">
          <h2 className="section-title">
            My <span>Certifications</span>
          </h2>
          <p className="section-subtitle">
            Courses and credentials I've earned
          </p>

          <div className="cert-grid">
            {certifications.map((cert, i) => (
              <div className="cert-card reveal" style={{ '--i': i }} key={i}>
                {/* Thumbnail / preview */}
                {cert.image ? (
                  <button
                    className="cert-thumb"
                    onClick={() => setLightbox(cert)}
                    aria-label={`View ${cert.name} certificate`}
                  >
                    <img src={cert.image} alt={cert.name} />
                    <div className="cert-thumb-overlay">
                      <span>View Certificate</span>
                    </div>
                  </button>
                ) : (
                  <div className="cert-badge">🎓</div>
                )}

                <div className="cert-body">
                  <h3 className="cert-name">{cert.name}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <div className="cert-footer">
                    <span className="cert-year">{cert.year}</span>
                    <div className="cert-actions">
                      {cert.url && (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noreferrer"
                          className="cert-link"
                        >
                          Credential ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX MODAL ── */}
      {lightbox && (
        <div
          className="lb-overlay"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.name}
        >
          <div className="lb-box" onClick={(e) => e.stopPropagation()}>
            <div className="lb-header">
              <div>
                <p className="lb-title">{lightbox.name}</p>
                <p className="lb-issuer">
                  {lightbox.issuer} · {lightbox.year}
                </p>
              </div>
              <div className="lb-header-actions">
                {lightbox.url && (
                  <a
                    href={lightbox.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-outline"
                  >
                    Verify Credential ↗
                  </a>
                )}
                <button
                  className="lb-close"
                  onClick={() => setLightbox(null)}
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="lb-img-wrap">
              <img src={lightbox.image} alt={lightbox.name} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
