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
          <a
            href="https://analyst.rizrazak.com/"
            target="_blank"
            rel="noopener noreferrer"
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
            }}
          >
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
}import { useTheme } from './hooks/useTheme'
import './styles/global.css'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg-primary)',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-sans)',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <button
        onClick={toggleTheme}
        style={{
          position: 'absolute',
          top: '1.5rem',
          right: '1.5rem',
          background: 'var(--overlay-light)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-md)',
          padding: '8px 12px',
          cursor: 'pointer',
          fontSize: '1.1rem',
          color: 'var(--text-muted)',
        }}
        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? '\u{1F319}' : '\u{2600}\u{FE0F}'}
      </button>

      <p style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.75rem',
        color: 'var(--accent-orange)',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        marginBottom: '1.5rem',
      }}>
        Coming Soon
      </p>

      <h1 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 'clamp(2.5rem, 6vw, 4rem)',
        fontWeight: 700,
        background: 'var(--header-gradient)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        lineHeight: 1.2,
        marginBottom: '1rem',
      }}>
        Riz Razak
      </h1>

      <p style={{
        color: 'var(--text-secondary)',
        fontSize: '1.1rem',
        fontWeight: 300,
        maxWidth: '500px',
        marginBottom: '2rem',
      }}>
        Personal site under construction.
      </p>

      <a
        href="https://analyst.rizrazak.com/"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.82rem',
          color: 'var(--accent-cyan)',
          textDecoration: 'none',
          padding: '10px 24px',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-sm)',
          transition: 'all 150ms ease',
        }}
      >
        Political Research &rarr; analyst.rizrazak.com
      </a>

      <p style={{
        marginTop: '3rem',
        color: 'var(--text-muted)',
        fontSize: '0.72rem',
        fontFamily: 'var(--font-mono)',
      }}>
        &copy; 2026 Riz Razak
      </p>
    </div>
  )
}

export default App
