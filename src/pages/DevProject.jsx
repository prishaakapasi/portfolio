// ─── DEV PROJECT TEMPLATE ────────────────────────────────────────────────────
// Duplicate a DevProjectN.jsx file and edit the PROJECT object to add a project.
// ─────────────────────────────────────────────────────────────────────────────

export default function DevProject({ project }) {
  if (!project) return null

  return (
    <div>
      {/* ── HERO ── */}
      <section className="cs-hero" style={{ background: project.accentColor || 'var(--dark-teal)' }}>
        <div className="cs-hero-text">
          <p className="cs-tag fade-in fade-in-delay-1">{project.tag}</p>
          <h1 className="cs-title fade-in fade-in-delay-2">{project.title}</h1>
          <p className="cs-subtitle fade-in fade-in-delay-3">{project.subtitle}</p>
          <div className="cs-meta fade-in fade-in-delay-4">
            {project.role && <span><strong>Role:</strong> {project.role}</span>}
            {project.timeline && <span><strong>Timeline:</strong> {project.timeline}</span>}
            {project.techStack && <span><strong>Tech Stack:</strong> {project.techStack}</span>}
          </div>
          <div className="cs-links fade-in fade-in-delay-4">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="cs-link-btn">
                <span>GitHub →</span>
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="cs-link-btn">
                <span>Live Site →</span>
              </a>
            )}
          </div>
        </div>
        <div className="cs-hero-img-wrap fade-in fade-in-delay-3">
          <img src={project.coverImage} alt={project.title} className="cs-hero-img" />
        </div>
      </section>

      {/* ── WAVE ── */}
      <div className="wave-section">
        <svg viewBox="0 0 800 80" xmlns="http://www.w3.org/2000/svg" className="wave-svg" preserveAspectRatio="none">
          <path d="M0,52 C80,52 150,25 220,25 C295,25 345,58 400,58 C458,58 520,25 595,25 C665,25 735,52 800,52 L800,80 L0,80 Z" />
        </svg>
      </div>

      {/* ── CONTENT ── */}
      <div className="cs-body">

        {/* Overview */}
        <section className="cs-section">
          <h2 className="cs-section-title">Overview</h2>
          <p className="cs-text">{project.overview}</p>
          {project.overviewImages && project.overviewImages.length > 0 && (
            <div className="cs-img-grid">
              {project.overviewImages.map((img, i) => (
                <div key={i} className="cs-img-wrap">
                  <img src={img.src} alt={img.caption || `Overview ${i + 1}`} className="cs-img" />
                  {img.caption && <p className="cs-img-caption">{img.caption}</p>}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Tech Stack */}
        <section className="cs-section cs-section--accent">
          <h2 className="cs-section-title">Tech Stack</h2>
          <p className="cs-text">{project.techStackDetail}</p>
          {project.techStackImages && project.techStackImages.length > 0 && (
            <div className="cs-img-grid">
              {project.techStackImages.map((img, i) => (
                <div key={i} className="cs-img-wrap">
                  <img src={img.src} alt={img.caption || `Tech ${i + 1}`} className="cs-img" />
                  {img.caption && <p className="cs-img-caption">{img.caption}</p>}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Features */}
        <section className="cs-section">
          <h2 className="cs-section-title">Features</h2>
          <p className="cs-text">{project.features}</p>
          {project.featuresList && (
            <ul className="cs-outcomes">
              {project.featuresList.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          )}
          {project.featuresImages && project.featuresImages.length > 0 && (
            <div className="cs-img-grid">
              {project.featuresImages.map((img, i) => (
                <div key={i} className="cs-img-wrap">
                  <img src={img.src} alt={img.caption || `Feature ${i + 1}`} className="cs-img" />
                  {img.caption && <p className="cs-img-caption">{img.caption}</p>}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Challenges */}
        <section className="cs-section cs-section--accent">
          <h2 className="cs-section-title">Challenges</h2>
          <p className="cs-text">{project.challenges}</p>
          {project.challengesImages && project.challengesImages.length > 0 && (
            <div className="cs-img-grid">
              {project.challengesImages.map((img, i) => (
                <div key={i} className="cs-img-wrap">
                  <img src={img.src} alt={img.caption || `Challenge ${i + 1}`} className="cs-img" />
                  {img.caption && <p className="cs-img-caption">{img.caption}</p>}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Outcome */}
        <section className="cs-section">
          <h2 className="cs-section-title">Outcome</h2>
          <p className="cs-text">{project.outcome}</p>
          {project.outcomes && (
            <ul className="cs-outcomes">
              {project.outcomes.map((o, i) => <li key={i}>{o}</li>)}
            </ul>
          )}
        </section>

      </div>

      {/* ── WAVE BOTTOM ── */}
      <div className="wave-section">
        <svg viewBox="0 0 800 80" xmlns="http://www.w3.org/2000/svg" className="wave-svg" preserveAspectRatio="none">
          <path d="M0,28 C80,28 150,55 220,55 C295,55 345,22 400,22 C458,22 520,55 595,55 C665,55 735,28 800,28 L800,0 L0,0 Z" />
        </svg>
      </div>
    </div>
  )
}
