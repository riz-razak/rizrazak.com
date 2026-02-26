import { useTheme } from './hooks/useTheme'
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
