// ─── CASE STUDY TEMPLATE ─────────────────────────────────────────────────────
// Duplicate this component (or use the PROJECTS array in UXUI.jsx) to add info.
// Each project is defined in the PROJECTS array in UXUI.jsx — edit there.
// ─────────────────────────────────────────────────────────────────────────────

export default function CaseStudy({ project }) {
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
            {project.tools && <span><strong>Tools:</strong> {project.tools}</span>}
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
          {project.overviewImage && (
            <div className="cs-img-wrap cs-img-wrap--full">
              <img src={project.overviewImage} alt="Overview" className="cs-img" />
            </div>
          )}
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

        {/* Problem */}
        <section className="cs-section cs-section--accent">
          <h2 className="cs-section-title">The Problem</h2>
          <p className="cs-text">{project.problem}</p>
          {project.problemImage && (
            <div className="cs-img-wrap cs-img-wrap--full">
              <img src={project.problemImage} alt="Problem" className="cs-img" />
            </div>
          )}
          {project.problemImages && project.problemImages.length > 0 && (
            <div className="cs-img-grid">
              {project.problemImages.map((img, i) => (
                <div key={i} className="cs-img-wrap">
                  <img src={img.src} alt={img.caption || `Problem ${i + 1}`} className="cs-img" />
                  {img.caption && <p className="cs-img-caption">{img.caption}</p>}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Process */}
        <section className="cs-section">
          <h2 className="cs-section-title">Process</h2>
          <p className="cs-text">{project.process}</p>
          {project.processImages && project.processImages.length > 0 && (
            <div className="cs-img-grid">
              {project.processImages.map((img, i) => (
                <div key={i} className="cs-img-wrap">
                  <img src={img.src} alt={img.caption || `Process ${i + 1}`} className="cs-img" />
                  {img.caption && <p className="cs-img-caption">{img.caption}</p>}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Solution */}
        <section className="cs-section cs-section--accent">
          <h2 className="cs-section-title">Solution</h2>
          <p className="cs-text">{project.solution}</p>
          {project.solutionImage && (
            <div className="cs-img-wrap cs-img-wrap--full">
              <img src={project.solutionImage} alt="Solution" className="cs-img" />
            </div>
          )}
          {project.solutionImages && project.solutionImages.length > 0 && (
            <div className="cs-img-grid">
              {project.solutionImages.map((img, i) => (
                <div key={i} className="cs-img-wrap">
                  <img src={img.src} alt={img.caption || `Solution ${i + 1}`} className="cs-img" />
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
          {project.outcomeImage && (
            <div className="cs-img-wrap cs-img-wrap--full">
              <img src={project.outcomeImage} alt="Outcome" className="cs-img" />
            </div>
          )}
          {project.outcomeImages && project.outcomeImages.length > 0 && (
            <div className="cs-img-grid">
              {project.outcomeImages.map((img, i) => (
                <div key={i} className="cs-img-wrap">
                  <img src={img.src} alt={img.caption || `Outcome ${i + 1}`} className="cs-img" />
                  {img.caption && <p className="cs-img-caption">{img.caption}</p>}
                </div>
              ))}
            </div>
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
