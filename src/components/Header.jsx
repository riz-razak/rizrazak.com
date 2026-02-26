import { useNavigate, useLocation } from 'react-router-dom'

const styles = {
  header: {
    padding: '3rem 0 2rem',
    textAlign: 'center',
    position: 'relative',
  },
  badge: {
    display: 'inline-block',
    padding: '4px 14px',
    background: 'rgba(255,140,0,0.12)',
    border: '1px solid rgba(255,140,0,0.25)',
    borderRadius: '20px',
    fontSize: '0.7rem',
    fontFamily: 'var(--font-mono)',
    color: 'var(--accent-orange)',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    marginBottom: '1rem',
    cursor: 'pointer',
  },
  title: {
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(2rem, 5vw, 3.2rem)',
    fontWeight: 700,
    background: 'linear-gradient(135deg, #fff 0%, #ff8c00 50%, #ff3a3a 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    lineHeight: 1.2,
    marginBottom: '0.5rem',
  },
  subtitle: {
    color: 'var(--text-secondary)',
    fontSize: '1rem',
    fontWeight: 300,
    letterSpacing: '0.5px',
  },
  author: {
    color: 'var(--text-muted)',
    fontSize: '0.8rem',
    marginTop: '0.5rem',
    fontFamily: 'var(--font-mono)',
  },
}

export default function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <header style={styles.header}>
      <div
        style={styles.badge}
        onClick={() => navigate('/')}
        role="button"
        tabIndex={0}
      >
        Political Research Dossier
      </div>
      <h1
        style={{ ...styles.title, cursor: isHome ? 'default' : 'pointer' }}
        onClick={() => !isHome && navigate('/')}
      >
        Political Research
      </h1>
      <p style={styles.subtitle}>Deep analysis beyond the headlines</p>
      <p style={styles.author}>Riz Razak</p>
    </header>
  )
}
