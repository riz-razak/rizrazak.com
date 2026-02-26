export const TAG_COLORS = {
  'Cricket':    { bg: 'rgba(255,58,58,0.12)',  text: '#ff3a3a', border: 'rgba(255,58,58,0.25)' },
  'Politics':   { bg: 'rgba(255,140,0,0.12)',  text: '#ff8c00', border: 'rgba(255,140,0,0.25)' },
  'Corruption': { bg: 'rgba(255,215,0,0.12)',  text: '#ffd700', border: 'rgba(255,215,0,0.25)' },
  'Sri Lanka':  { bg: 'rgba(0,212,255,0.12)',  text: '#00d4ff', border: 'rgba(0,212,255,0.25)' },
  'Sports':     { bg: 'rgba(0,204,136,0.12)',  text: '#00cc88', border: 'rgba(0,204,136,0.25)' },
  'Security':   { bg: 'rgba(139,92,246,0.12)', text: '#8b5cf6', border: 'rgba(139,92,246,0.25)' },
  'Government': { bg: 'rgba(74,158,255,0.12)', text: '#4a9eff', border: 'rgba(74,158,255,0.25)' },
  'Economy':    { bg: 'rgba(255,107,107,0.12)',text: '#ff6b6b', border: 'rgba(255,107,107,0.25)' },
  'Military':   { bg: 'rgba(148,163,184,0.12)',text: '#94a3b8', border: 'rgba(148,163,184,0.25)' },
  'Religion':   { bg: 'rgba(251,191,36,0.12)', text: '#fbbf24', border: 'rgba(251,191,36,0.25)' },
}

const FALLBACK_COLORS = [
  { bg: 'rgba(168,85,247,0.12)',  text: '#a855f7', border: 'rgba(168,85,247,0.25)' },
  { bg: 'rgba(236,72,153,0.12)',  text: '#ec4899', border: 'rgba(236,72,153,0.25)' },
  { bg: 'rgba(34,211,238,0.12)',  text: '#22d3ee', border: 'rgba(34,211,238,0.25)' },
  { bg: 'rgba(132,204,22,0.12)',  text: '#84cc16', border: 'rgba(132,204,22,0.25)' },
]

export function getTagColor(tag) {
  if (TAG_COLORS[tag]) return TAG_COLORS[tag]
  // Deterministic fallback based on tag string hash
  let hash = 0
  for (let i = 0; i < tag.length; i++) {
    hash = tag.charCodeAt(i) + ((hash << 5) - hash)
  }
  return FALLBACK_COLORS[Math.abs(hash) % FALLBACK_COLORS.length]
}
