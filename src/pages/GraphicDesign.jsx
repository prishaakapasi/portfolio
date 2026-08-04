import { useState, useEffect } from 'react'


const CAPTIONS = {
  'IlluminateLeadership1.png': 'Leadership Main Flyer',
  'IlluminateLeadership2.png': 'Leadership Informational Flyer',
  'IlluminateLeadership3.png': 'Leadership Coloring Book Cover',
  'JSOC.png':                  'Jain Samaj of Colorado Flyer',
  'Moonlitpath.png':           'Moonlit Path',
  'boardgamedesign.png':       'Boardgame Design',
  'childguide.png':            'Promotional Guide',
  'coloringpages.png':         '30 Page Coloring Book',
  'desertlandscape.png':       'Desert Landscape',
  'eerie.png':                 'Eerie Landscape',
  'fairytale.png':             'Fairytale Landscape',
  'fantasy.png':               'Futuristic Cityscape',
  'fantasylandscape.png':      'Landscape',
  'fantasymountainscape.png':  'Fairytale Landscape',
  'forestfantasy.png':         'Forest',
  'hourglass.png':             'Hourglass',
  'krispycreme.png':           'Fundraiser Flyer',
  'leadershipprogram.png':     'Atlas Leadership Flyer',
  'nationalconference.png':    'National Conference Post',
  'promodesignfolder.png':     'Stemkins Folder Design',
  'promodesignnatsemis.png':   'Record Shop Flyer',
  'promoflyer.png':            'Stemkins Flyer',
  'scavengerhunt.png':         'Scavenger Hunt Card',
  'stempower.png':             'Stempower Logo',
  'tide.png':                  '',
}
// ─────────────────────────────────────────────────────────────────────────────

const imageModules = import.meta.glob('../assets/graphicdesignimages/*.{png,jpg,jpeg,gif,webp,PNG,JPG,JPEG}', { eager: true })
const images = Object.entries(imageModules).map(([path, m]) => {
  const filename = path.split('/').pop()
  const fallback = filename.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
  return { src: m.default, caption: CAPTIONS[filename] || fallback }
})

function OrnateFrame({ children, caption, onClick }) {
  return (
    <div className="gd-frame" onClick={onClick}>
      <div className="gd-frame-outer">
        <div className="gd-frame-inner">
          <div className="gd-mat">
            {children}
          </div>
        </div>
      </div>
      {caption && <div className="gd-caption">{caption}</div>}
    </div>
  )
}

export default function GraphicDesign() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (selected === null) {
      document.body.style.overflow = ''
      return
    }
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') setSelected(null)
      if (e.key === 'ArrowRight') setSelected(i => (i + 1) % images.length)
      if (e.key === 'ArrowLeft') setSelected(i => (i - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [selected])

  return (
    <div>
      {/* ── PAGE HERO ── */}
      <section className="gd-hero">
        <div className="gd-hero-text">
          <h1 className="gd-hero-title fade-in fade-in-delay-1">GRAPHIC DESIGN</h1>
          <p className="gd-hero-subtitle fade-in fade-in-delay-2"> Branding and Art </p>
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

      {/* ── GALLERY ── */}
      <div className="gd-gallery-section">
        {images.length === 0 ? (
          <p className="gd-empty">Add images to <code>src/assets/graphicdesignimages/</code> to populate the gallery.</p>
        ) : (
          <div className="gd-gallery">
            {images.map((img, i) => (
              <OrnateFrame key={i} caption={img.caption} onClick={() => setSelected(i)}>
                <img src={img.src} alt={img.caption} className="gd-img" />
              </OrnateFrame>
            ))}
          </div>
        )}
      </div>

      {/* ── WAVE BOTTOM ── */}
      <div className="wave-section">
        <svg viewBox="0 0 800 80" xmlns="http://www.w3.org/2000/svg" className="wave-svg" preserveAspectRatio="none">
          <path d="M0,28 C80,28 150,55 220,55 C295,55 345,22 400,22 C458,22 520,55 595,55 C665,55 735,28 800,28 L800,0 L0,0 Z" />
        </svg>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div className="gd-lightbox" onClick={() => setSelected(null)}>
          <button className="gd-lb-close" onClick={() => setSelected(null)}>✕</button>
          <button className="gd-lb-prev" onClick={e => { e.stopPropagation(); setSelected(i => (i - 1 + images.length) % images.length) }}>‹</button>
          <div className="gd-lb-wrap" onClick={e => e.stopPropagation()}>
            <div className="gd-frame-outer">
              <div className="gd-frame-inner">
                <div className="gd-mat">
                  <img src={images[selected].src} alt={images[selected].caption} className="gd-lb-img" />
                </div>
              </div>
            </div>
            <div className="gd-lb-caption">{images[selected].caption}</div>
            <div className="gd-lb-counter">{selected + 1} / {images.length}</div>
          </div>
          <button className="gd-lb-next" onClick={e => { e.stopPropagation(); setSelected(i => (i + 1) % images.length) }}>›</button>
        </div>
      )}
    </div>
  )
}
