import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import laptopImg from '../assets/hero.png'
import profileImg from '../assets/Ellipse 1.png'
import ellipse2 from '../assets/Ellipse 2.png'
import ellipse4 from '../assets/Ellipse 4.png'

const SKILLS = [
  'Figma', 'HTML/CSS', 'Java', 'JavaScript', 'React', 'React Native',
  'Python', 'TypeScript', 'UX Research', 'Prototyping', 'Photoshop', 'Illustrator',
]

const TICKER = [...SKILLS, ...SKILLS]

const TYPEWRITER_TEXT = 'BRINGING VISIONS TO LIFE'

export default function Home() {
  const [typed, setTyped] = useState('')
  const [typingDone, setTypingDone] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [animPhase, setAnimPhase] = useState('wire')
  const [animStep, setAnimStep] = useState(0)

  useEffect(() => {
    if (typed.length >= TYPEWRITER_TEXT.length) return
    const timeout = setTimeout(() => {
      const next = TYPEWRITER_TEXT.slice(0, typed.length + 1)
      setTyped(next)
      if (next.length === TYPEWRITER_TEXT.length) setTypingDone(true)
    }, 80)
    return () => clearTimeout(timeout)
  }, [typed])

  useEffect(() => {
    const onScroll = () => {
      if (window.innerWidth > 640) setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    let timeout
    if (animPhase === 'wire') {
      if (animStep < 7) {
        timeout = setTimeout(() => setAnimStep(s => s + 1), 420)
      } else {
        timeout = setTimeout(() => { setAnimPhase('code'); setAnimStep(0) }, 1200)
      }
    } else {
      if (animStep < 8) {
        timeout = setTimeout(() => setAnimStep(s => s + 1), 310)
      } else {
        timeout = setTimeout(() => { setAnimPhase('wire'); setAnimStep(0) }, 2200)
      }
    }
    return () => clearTimeout(timeout)
  }, [animPhase, animStep])

  return (
    <div>
      {/* ── HERO ── */}
      <section className="hero">
        <div
          className="hero-left"
          style={{ transform: `translateY(${scrollY * 0.18}px)` }}
        >
          <h1 className="hero-name fade-in fade-in-delay-1">PRISHAA</h1>
          <p className={`hero-subtitle fade-in fade-in-delay-2 ${!typingDone ? 'typewriter' : ''}`}>
            {typed}
          </p>
          <Link to="/ux-ui" className="hero-btn fade-in fade-in-delay-3">View My Work</Link>
        </div>

        <div
          className="hero-right fade-in fade-in-delay-2"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        >
          <div
            className="pink-circle"
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          />
          <div className="laptop-wrapper">
            <img src={laptopImg} alt="computer" className="laptop-img" />
            <div className="laptop-screen-overlay">
              {/* ── Wireframe draws in ── */}
              <svg width="100%" height="100%" viewBox="0 0 200 120"
                style={{ position:'absolute', inset:0, opacity: animPhase==='wire' ? 1 : 0, transition:'opacity 0.4s' }}>
                {/* navbar bar */}
                <rect x="8" y="8" width="184" height="22" rx="3"
                  stroke="#9cb0b0" strokeWidth="1.5" fill="rgba(156,176,176,0.15)"
                  style={{ strokeDasharray:412, strokeDashoffset: animStep>0?0:412, transition:'stroke-dashoffset 0.5s ease' }}/>
                {/* logo box */}
                <rect x="8" y="8" width="50" height="22" rx="3"
                  stroke="#9cb0b0" strokeWidth="1.5" fill="rgba(156,176,176,0.3)"
                  style={{ strokeDasharray:144, strokeDashoffset: animStep>1?0:144, transition:'stroke-dashoffset 0.5s ease' }}/>
                {/* left panel */}
                <rect x="8" y="38" width="80" height="70" rx="3"
                  stroke="#9cb0b0" strokeWidth="1.5" fill="rgba(156,176,176,0.1)"
                  style={{ strokeDasharray:300, strokeDashoffset: animStep>2?0:300, transition:'stroke-dashoffset 0.5s ease' }}/>
                {/* right top */}
                <rect x="96" y="38" width="96" height="30" rx="3"
                  stroke="#9cb0b0" strokeWidth="1.5" fill="rgba(156,176,176,0.1)"
                  style={{ strokeDasharray:252, strokeDashoffset: animStep>3?0:252, transition:'stroke-dashoffset 0.5s ease' }}/>
                {/* right bottom left */}
                <rect x="96" y="76" width="44" height="32" rx="3"
                  stroke="#9cb0b0" strokeWidth="1.5" fill="rgba(156,176,176,0.1)"
                  style={{ strokeDasharray:152, strokeDashoffset: animStep>4?0:152, transition:'stroke-dashoffset 0.5s ease' }}/>
                {/* right bottom right */}
                <rect x="148" y="76" width="44" height="32" rx="3"
                  stroke="#9cb0b0" strokeWidth="1.5" fill="rgba(156,176,176,0.1)"
                  style={{ strokeDasharray:152, strokeDashoffset: animStep>5?0:152, transition:'stroke-dashoffset 0.5s ease' }}/>
                {/* content lines */}
                <line x1="16" y1="48" x2="72" y2="48" stroke="#9cb0b0" strokeWidth="1"
                  style={{ opacity: animStep>6?0.6:0, transition:'opacity 0.3s' }}/>
                <line x1="16" y1="56" x2="60" y2="56" stroke="#9cb0b0" strokeWidth="1"
                  style={{ opacity: animStep>6?0.6:0, transition:'opacity 0.3s' }}/>
                <line x1="16" y1="64" x2="68" y2="64" stroke="#9cb0b0" strokeWidth="1"
                  style={{ opacity: animStep>6?0.6:0, transition:'opacity 0.3s' }}/>
              </svg>

              {/* ── Code types in ── */}
              <svg width="100%" height="100%" viewBox="0 0 200 120"
                style={{ position:'absolute', inset:0, opacity: animPhase==='code' ? 1 : 0, transition:'opacity 0.4s' }}>
          
                {[1,2,3,4,5,6,7,8].map((n,i) => (
                  <text key={n} x="3" y={16+i*13} fontFamily="monospace" fontSize="5" fill="#bbb">{n}</text>
                ))}
                <text x="18" y="16" fontFamily="monospace" fontSize="7" fill="#234549"
                  style={{ opacity: animStep>0?1:0, transition:'opacity 0.2s' }}>{'<div className="hero">'}</text>
                <text x="26" y="29" fontFamily="monospace" fontSize="7" fill="#c0392b"
                  style={{ opacity: animStep>1?1:0, transition:'opacity 0.2s' }}>
                  {'<h1>'}<tspan fill="#2d6b60">PRISHAA</tspan>{'</h1>'}
                </text>
                <text x="26" y="42" fontFamily="monospace" fontSize="7" fill="#c0392b"
                  style={{ opacity: animStep>2?1:0, transition:'opacity 0.2s' }}>
                  {'<p '}<tspan fill="#e67e22">className</tspan><tspan fill="#8e44ad">{'="subtitle"'}</tspan>{'>'}
                </text>
                <text x="34" y="55" fontFamily="monospace" fontSize="7" fill="#555"
                  style={{ opacity: animStep>3?1:0, transition:'opacity 0.2s' }}>Bringing visions to life</text>
                <text x="26" y="68" fontFamily="monospace" fontSize="7" fill="#c0392b"
                  style={{ opacity: animStep>4?1:0, transition:'opacity 0.2s' }}>{'</p>'}</text>
                <text x="26" y="81" fontFamily="monospace" fontSize="7" fill="#c0392b"
                  style={{ opacity: animStep>5?1:0, transition:'opacity 0.2s' }}>
                  {'<button>'}<tspan fill="#2980b9">View Work</tspan>{'</button>'}
                </text>
                <text x="18" y="94" fontFamily="monospace" fontSize="7" fill="#234549"
                  style={{ opacity: animStep>6?1:0, transition:'opacity 0.2s' }}>{'</div>'}</text>
               
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── WAVE TOP ── */}
      <div className="wave-section">
        <svg viewBox="0 0 800 80" xmlns="http://www.w3.org/2000/svg" className="wave-svg" preserveAspectRatio="none">
          <path d="M0,52 C80,52 150,25 220,25 C295,25 345,58 400,58 C458,58 520,25 595,25 C665,25 735,52 800,52 L800,80 L0,80 Z" />
        </svg>
        <img src="/Vector 6.png" alt="" className="wave-vector-overlay" style={{ transform: `translateY(${scrollY * -0.04}px)` }} />
      </div>

      {/* ── ABOUT ── */}
      <section className="about-section">
        <div className="about-vertical-text">ABOUT</div>

        <div className="about-content">
          <p className="about-bio">
            Hi! I'm Prishaa, a student at Princeton University interested in human-centered technology.
            I love developing, researching, and designing things that improve people's lives.
          </p>
          <div className="about-socials">
            <a href="https://www.linkedin.com/in/prishaa-kapasi-87b73825b/" target="_blank" rel="noreferrer" className="social-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://github.com/prishaakapasi" target="_blank" rel="noreferrer" className="social-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="mailto:pk5996@princeton.edu" className="social-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="about-photo-container" style={{ transform: `translateY(${scrollY * -0.06}px)` }}>
          <img src={ellipse4} alt="" className="about-ellipse about-ellipse-4" />
          <img src={ellipse2} alt="" className="about-ellipse about-ellipse-2" />
          <div className="about-photo-wrapper">
            <img src={profileImg} alt="Prishaa" className="about-photo" />
          </div>
        </div>
      </section>

      {/* ── WAVE BOTTOM ── */}
      <div className="wave-section">
        <svg viewBox="0 0 800 80" xmlns="http://www.w3.org/2000/svg" className="wave-svg" preserveAspectRatio="none">
          <path d="M0,28 C80,28 150,55 220,55 C295,55 345,22 400,22 C458,22 520,55 595,55 C665,55 735,28 800,28 L800,0 L0,0 Z" />
        </svg>
        <img src="/Vector 7.png" alt="" className="wave-vector-overlay" />
      </div>

      {/* ── SKILLS ── */}
      <section className="skills-section">
        <div className="skills-header">
          <div className="skills-dots">
            {[...Array(5)].map((_, i) => <div key={i} className="skills-dot" />)}
          </div>
          <h2 className="skills-title">SKILLS</h2>
        </div>
        <div className="skills-ticker-wrapper">
          <div className="skills-ticker">
            {TICKER.map((skill, i) => (
              <span key={i} className="skill-item">{skill}</span>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
