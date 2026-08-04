import { useNavigate } from 'react-router-dom'
import paintpalz from '../assets/uxdesignimages/paintpalz.png'
import gaias from '../assets/uxdesignimages/gaias.png'
import recipemaker from '../assets/Frame 6 (1).png'
import tsasite from '../assets/uxdesignimages/tsasite.png'
import synora from '../assets/Frame 8.png'
import robotarm from '../assets/roboticsimages/so101arm.png'

// ─── EDIT PROJECT CARD TITLES HERE ───────────────────────────────────────────
const PROJECTS = [
  { image: robotarm,    title: 'Autonomous Robot Arm', subtitle: '6-DoF robotic arm taught to pick and place autonomously through imitation learning', route: '/engineering/6' },
  { image: synora,      title: 'Synora',     subtitle: 'Adaptive application supporting speech and motor function for individuals with Parkinson\'s disease', route: '/engineering/5' },
  { image: recipemaker, title: 'Community Governance Card Maker', subtitle: 'Web application for social media platforms to develop governance schema', route: '/engineering/3' },
  { image: gaias,       title: 'Gaias Libertas',        subtitle: 'Website for animal rights nonprofit', route: '/engineering/2' },
  { image: paintpalz,   title: 'PaintPalz',    subtitle: 'Therapeutic Application for Pediatric Patients', route: '/engineering/1' },
  { image: tsasite,     title: 'Colorado TSA Website',     subtitle: 'Website for Technology Student Association of Colorado', route: '/engineering/4' },
]
// ─────────────────────────────────────────────────────────────────────────────

export default function Development() {
  const navigate = useNavigate()

  return (
    <div>
      {/* ── PAGE HERO ── */}
      <section className="gd-hero">
        <div className="gd-hero-text">
          <h1 className="gd-hero-title fade-in fade-in-delay-1">ENGINEERING</h1>
          <p className="gd-hero-subtitle fade-in fade-in-delay-2">Software, robotics, and things that work</p>
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

      {/* ── PROJECT GRID ── */}
      <div className="gd-gallery-section">
        <div className="cs-card-grid">
          {PROJECTS.map((proj, i) => (
            <div key={i} className="cs-card" onClick={() => navigate(proj.route)}>
              <div className="cs-card-img-wrap">
                <img src={proj.image} alt={proj.title} className="cs-card-img" />
                <div className="cs-card-overlay">
                  <span className="cs-card-cta">View Project →</span>
                </div>
              </div>
              <div className="cs-card-body">
                <h3 className="cs-card-title">{proj.title}</h3>
                <p className="cs-card-sub">{proj.subtitle}</p>
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
