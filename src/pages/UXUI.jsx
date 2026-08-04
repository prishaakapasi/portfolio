import { useNavigate } from 'react-router-dom'
import frame4 from '../assets/uxdesignimages/Frame 4.png'
import frame5 from '../assets/uxdesignimages/Frame 5.png'
import frame6 from '../assets/uxdesignimages/Frame 6.png'
import frame7 from '../assets/uxdesignimages/Frame 7.png'

// ─── EDIT CASE STUDY CARD TITLES HERE ────────────────────────────────────────
const CASE_STUDIES = [
  { image: frame4, title: 'AI Learning Assistant for Pediatric Patients ', subtitle: 'NSF AI Institute of Student-AI Teaming', route: '/ux-ui/4' },
  { image: frame5, title: 'Princeton Application Forum', subtitle: 'Princeton Tiger Apps', route: '/ux-ui/5' },
  { image: frame6, title: 'Tiger Swipe Application', subtitle: 'Pitch Competition', route: '/ux-ui/6' },
  { image: frame7, title: 'Wildscape', subtitle: 'Personal Project', route: '/ux-ui/7' },
]
// ─────────────────────────────────────────────────────────────────────────────

export default function UXUI() {
  const navigate = useNavigate()

  return (
    <div>
      {/* ── PAGE HERO ── */}
      <section className="gd-hero">
        <div className="gd-hero-text">
          <h1 className="gd-hero-title fade-in fade-in-delay-1">UX/UI</h1>
          <p className="gd-hero-subtitle fade-in fade-in-delay-2">Human-centered design experiences</p>
        </div>
        <div className="gd-hero-dots fade-in fade-in-delay-3">
          {[...Array(5)].map((_, i) => <div key={i} className="skills-dot" />)}
        </div>
      </section>

      {/* ── WAVE ── */}
      <div className="wave-section">
        <svg viewBox="0 0 800 80" xmlns="http://www.w3.org/2000/svg" className="wave-svg" preserveAspectRatio="none">
          <path d="M0,52 C80,52 150,25 220,25 C295,25 345,58 400,58 C458,58 520,25 595,25 C665,25 735,52 800,52 L800,80 L0,80 Z" />
        </svg>
      </div>

      {/* ── CASE STUDY GRID ── */}
      <div className="gd-gallery-section">
        <div className="cs-card-grid">
          {CASE_STUDIES.map((cs, i) => (
            <div key={i} className="cs-card" onClick={() => navigate(cs.route)}>
              <div className="cs-card-img-wrap">
                <img src={cs.image} alt={cs.title} className="cs-card-img" />
                <div className="cs-card-overlay">
                  <span className="cs-card-cta">View Case Study →</span>
                </div>
              </div>
              <div className="cs-card-body">
                <h3 className="cs-card-title">{cs.title}</h3>
                <p className="cs-card-sub">{cs.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
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
