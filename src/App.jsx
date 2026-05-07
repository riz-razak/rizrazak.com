import { useEffect } from 'react'
import './styles/global.css'

const particles = [
  { left: '12%', size: 3, color: 'rgba(232,160,32,0.3)', duration: '18s', delay: '0s' },
  { left: '28%', size: 2, color: 'rgba(212,137,159,0.3)', duration: '22s', delay: '3s' },
  { left: '55%', size: 3, color: 'rgba(91,184,176,0.25)', duration: '20s', delay: '6s' },
  { left: '72%', size: 2, color: 'rgba(232,160,32,0.25)', duration: '24s', delay: '2s' },
  { left: '88%', size: 2.5, color: 'rgba(212,137,159,0.2)', duration: '19s', delay: '8s' },
  { left: '40%', size: 2, color: 'rgba(91,184,176,0.2)', duration: '25s', delay: '5s' },
  { left: '65%', size: 3, color: 'rgba(232,160,32,0.2)', duration: '21s', delay: '10s' },
]

function App() {
  useEffect(() => {
    const layers = [
      { el: document.getElementById('layer1'), speed: 0.01 },
      { el: document.getElementById('layer2'), speed: 0.02 },
      { el: document.getElementById('layer3'), speed: 0.035 },
    ]

    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0
    let frame = 0

    const handleMouseMove = (event) => {
      targetX = event.clientX - window.innerWidth / 2
      targetY = event.clientY - window.innerHeight / 2
    }

    const animate = () => {
      currentX += (targetX - currentX) * 0.03
      currentY += (targetY - currentY) * 0.03
      layers.forEach(({ el, speed }) => {
        if (el) el.style.transform = `translate(${currentX * speed}px, ${currentY * speed}px)`
      })
      frame = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    frame = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <>
      <div className="dream-bg" aria-hidden="true">
        <div className="glow glow-1" />
        <div className="glow glow-2" />
        <div className="glow glow-3" />
      </div>

      <div className="particles" aria-hidden="true">
        {particles.map((particle, index) => (
          <div
            key={index}
            className="particle"
            style={{
              left: particle.left,
              width: particle.size,
              height: particle.size,
              background: particle.color,
              animationDuration: particle.duration,
              animationDelay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="parallax-layer" id="layer1" aria-hidden="true">
        <div className="float-element drift-1 lotus-outline">
          <svg width="55" height="55" viewBox="0 0 55 55">
            <g fill="none" stroke="#D4899F" strokeWidth="0.8">
              <ellipse cx="27" cy="35" rx="9" ry="18" transform="rotate(-20 27 27)" />
              <ellipse cx="27" cy="35" rx="9" ry="18" transform="rotate(20 27 27)" />
              <ellipse cx="27" cy="35" rx="9" ry="18" />
              <circle cx="27" cy="28" r="4" fill="#D4899F" opacity="0.15" />
            </g>
          </svg>
        </div>
        <div className="float-element drift-3 kolam-dots">
          <svg width="60" height="60" viewBox="0 0 60 60">
            <g fill="#E8A020">
              <circle cx="10" cy="10" r="2" /><circle cx="30" cy="10" r="2" /><circle cx="50" cy="10" r="2" />
              <circle cx="20" cy="25" r="2" /><circle cx="40" cy="25" r="2" />
              <circle cx="10" cy="40" r="2" /><circle cx="30" cy="40" r="2" /><circle cx="50" cy="40" r="2" />
              <circle cx="20" cy="55" r="2" /><circle cx="40" cy="55" r="2" />
            </g>
          </svg>
        </div>
      </div>

      <div className="parallax-layer" id="layer2" aria-hidden="true">
        <div className="float-element drift-2 leaf-outline">
          <svg width="40" height="65" viewBox="0 0 40 65">
            <path d="M20 5 Q35 22 28 45 Q20 58 12 45 Q5 22 20 5Z" fill="none" stroke="#5BB8B0" strokeWidth="0.8" />
            <path d="M20 12 Q20 30 20 48" fill="none" stroke="#5BB8B0" strokeWidth="0.5" opacity="0.5" />
          </svg>
        </div>
        <div className="float-element drift-4 tiny-mandala">
          <svg width="30" height="30" viewBox="0 0 30 30">
            <g fill="none" stroke="#E8A020" strokeWidth="0.5">
              <circle cx="15" cy="15" r="12" />
              <circle cx="15" cy="15" r="7" />
              <circle cx="15" cy="15" r="2.5" fill="#E8A020" opacity="0.2" />
              <line x1="15" y1="3" x2="15" y2="27" />
              <line x1="3" y1="15" x2="27" y2="15" />
            </g>
          </svg>
        </div>
      </div>

      <div className="parallax-layer" id="layer3" aria-hidden="true">
        <div className="float-element drift-5 wave-curve">
          <svg width="120" height="25" viewBox="0 0 120 25">
            <path d="M0,15 Q30,0 60,15 Q90,30 120,15" fill="none" stroke="#5BB8B0" strokeWidth="1" />
          </svg>
        </div>
        <div className="float-element drift-1 lotus-petal">
          <svg width="35" height="50" viewBox="0 0 35 50">
            <ellipse cx="17" cy="30" rx="8" ry="18" fill="none" stroke="#D4899F" strokeWidth="0.7" transform="rotate(-10 17 25)" />
          </svg>
        </div>
      </div>

      <main className="container">
        <div className="ornament-top" aria-hidden="true">
          <svg width="32" height="24" viewBox="0 0 32 24">
            <g fill="none" stroke="#E8A020" strokeWidth="0.7">
              <ellipse cx="16" cy="16" rx="5" ry="12" transform="rotate(-15 16 14)" />
              <ellipse cx="16" cy="16" rx="5" ry="12" transform="rotate(15 16 14)" />
              <ellipse cx="16" cy="16" rx="5" ry="12" />
              <circle cx="16" cy="12" r="2.5" fill="#E8A020" opacity="0.15" />
            </g>
          </svg>
        </div>

        <p className="tag">Coming Soon</p>
        <h1>Riz Razak</h1>
        <div className="line" aria-hidden="true" />
        <p className="subtitle">Something interesting is brewing.</p>
        <div className="cta-wrapper">
          <a href="https://analyst.rizrazak.com/" className="cta">
            For now, enjoy the deep analysis <span className="arrow" aria-hidden="true">-&gt;</span>
          </a>
        </div>
        <p className="footer">&copy; 2026 Riz Razak</p>
      </main>
    </>
  )
}

export default App
