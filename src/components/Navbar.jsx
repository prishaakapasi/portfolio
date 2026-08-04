import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import computerIcon from '../assets/computer-outline.png'
import developmentIcon from '../assets/development.png'
import graphicDesignIcon from '../assets/graphicdesign.png'
import aboutIcon from '../assets/about.png'
import logoImg from '../assets/Group 10.png'

const LINKS = [
  { to: '/', end: true, icon: aboutIcon, label: 'ABOUT ME', isAbout: true },
  { to: '/graphic-design', icon: graphicDesignIcon, label: 'GRAPHIC DESIGN' },
  { to: '/ux-ui', icon: computerIcon, label: 'UX/UI' },
  { to: '/development', icon: developmentIcon, label: 'DEVELOPMENT' },
]

export default function Navbar() {
  const [spinning, setSpinning] = useState(false)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogo = () => {
    setSpinning(true)
    setOpen(false)
    navigate('/')
    setTimeout(() => setSpinning(false), 600)
  }

  const handleAbout = (e) => {
    e.preventDefault()
    setOpen(false)
    navigate('/')
    setTimeout(() => {
      const el = document.querySelector('.about-section')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  const handleNavClick = () => setOpen(false)

  return (
    <nav className="navbar">
      <img
        src={logoImg}
        alt="PH"
        className={`navbar-logo${spinning ? ' navbar-logo-spin' : ''}`}
        onClick={handleLogo}
        style={{ cursor: 'pointer' }}
      />

      {/* Desktop links */}
      <ul className="navbar-links">
        {LINKS.map(({ to, end, icon, label, isAbout }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={isAbout ? handleAbout : undefined}
            >
              <img src={icon} alt="" className="nav-icon" /> {label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Hamburger button — mobile only */}
      <button
        className={`hamburger${open ? ' hamburger--open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {/* Mobile drawer */}
      {open && (
        <div className="mobile-menu">
          {LINKS.map(({ to, end, icon, label, isAbout }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => `mobile-link${isActive ? ' active' : ''}`}
              onClick={isAbout ? handleAbout : handleNavClick}
            >
              <img src={icon} alt="" className="nav-icon" /> {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}
