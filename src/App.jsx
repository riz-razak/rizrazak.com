import './styles/global.css'

const iconStyle = {
  color: 'var(--text-muted)',
  transition: 'color 0.2s, transform 0.2s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

const TikTokIcon = ({ badge }) => (
  <span style={{ position: 'relative', display: 'inline-flex' }}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.98a8.21 8.21 0 0 0 4.76 1.52V7.05a4.84 4.84 0 0 1-1-.36z"/>
    </svg>
    {badge && (
      <span style={{
        position: 'absolute',
        top: '-4px',
        right: '-8px',
        fontSize: '0.55rem',
        fontFamily: 'var(--font-mono)',
        color: 'var(--text-muted)',
        fontWeight: 600,
      }}>{badge}</span>
    )}
  </span>
)

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      background: 'var(--bg-primary)',
      color: 'var(--text-primary)',
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '480px',
      }}>
        <p style={{
          fontSize: '0.7rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
          marginBottom: '1.5rem',
          fontFamily: 'var(--font-mono)',
        }}>Coming Soon</p>

        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 700,
          marginBottom: '0.5rem',
          lineHeight: 1.2,
        }}>Riz Razak</h1>

        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '1rem',
          fontWeight: 300,
          marginBottom: '2rem',
        }}>Personal site under construction.</p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.8rem',
          alignItems: 'center',
        }}>
          <a href="https://analyst.rizrazak.com/" target="_blank" rel="noopener noreferrer"
            style={{
              fontSize: '0.85rem',
              color: 'var(--accent-orange)',
              textDecoration: 'none',
              padding: '0.6rem 1.4rem',
              borderRadius: '50px',
              border: '1px solid var(--border-color)',
              background: 'var(--overlay-light)',
              transition: 'all 0.2s ease',
              fontWeight: 500,
            }}>
            For now, enjoy the deep analysis &rarr; analyst.rizrazak.com
          </a>
        </div>

        <div style={{
          display: 'flex',
          gap: '1.4rem',
          justifyContent: 'center',
          marginTop: '2rem',
          alignItems: 'center',
        }}>
          <a href="https://www.facebook.com/riz.life.crisis/" target="_blank" rel="noopener noreferrer"
            title="Facebook" style={iconStyle}>
            <FacebookIcon />
          </a>
          <a href="https://www.instagram.com/riz_razak_" target="_blank" rel="noopener noreferrer"
            title="Instagram" style={iconStyle}>
            <InstagramIcon />
          </a>
          <a href="https://www.tiktok.com/@riz.razak" target="_blank" rel="noopener noreferrer"
            title="TikTok" style={iconStyle}>
            <TikTokIcon />
          </a>
          <a href="https://www.tiktok.com/@rizrazak_" target="_blank" rel="noopener noreferrer"
            title="TikTok 2" style={iconStyle}>
            <TikTokIcon badge="2" />
          </a>
        </div>
      </div>
    </div>
  )
}
