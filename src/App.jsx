import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { useDossiers } from './hooks/useDossiers'
import HomePage from './pages/HomePage'
import DossierPage from './pages/DossierPage'
import './styles/global.css'

function App() {
  const { dossiers, allTags, loading, error } = useDossiers()

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0a0a0f',
        color: '#a0a0b8',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.85rem',
      }}>
        Loading research database...
      </div>
    )
  }

  if (error) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0a0a0f',
        color: '#ff3a3a',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.85rem',
        gap: '1rem',
      }}>
        <span style={{ fontSize: '2rem' }}>⚠️</span>
        <p>Failed to load dossiers: {error}</p>
      </div>
    )
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage dossiers={dossiers} allTags={allTags} />} />
        <Route path="/dossier/:id" element={<DossierPage dossiers={dossiers} />} />
      </Routes>
    </Router>
  )
}

export default App
