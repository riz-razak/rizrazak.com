import './styles/global.css'

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
          gap: '1.2rem',
          justifyContent: 'center',
          marginTop: '2rem',
          flexWrap: 'wrap',
        }}>
          <a href="https://www.facebook.com/riz.life.crisis/" target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textDecoration: 'none', fontFamily: 'var(--font-mono)', transition: 'color 0.2s' }}>
            FB
          </a>
          <a href="https://www.instagram.com/riz_razak_" target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textDecoration: 'none', fontFamily: 'var(--font-mono)', transition: 'color 0.2s' }}>
            IG
          </a>
          <a href="https://www.tiktok.com/@riz.razak" target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textDecoration: 'none', fontFamily: 'var(--font-mono)', transition: 'color 0.2s' }}>
            TikTok
          </a>
          <a href="https://www.tiktok.com/@rizrazak_" target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textDecoration: 'none', fontFamily: 'var(--font-mono)', transition: 'color 0.2s' }}>
            TikTok 2
          </a>
        </div>
      </div>
    </div>
  )
}
