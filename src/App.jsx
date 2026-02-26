import { useEffect, useRef } from 'react'
import './styles/global.css'

/* âââââââââââââââââââââââââââââââââââââââââââ
   ICON COMPONENTS (social links)
âââââââââââââââââââââââââââââââââââââââââââ */

const iconLinkStyle = {
  color: 'rgba(255,255,255,0.6)',
  transition: 'color 0.2s, transform 0.2s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

const TikTokIcon = ({ badge }) => (
  <span style={{ position: 'relative', display: 'inline-flex' }}>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.98a8.21 8.21 0 0 0 4.76 1.52V7.05a4.84 4.84 0 0 1-1-.36z"/>
    </svg>
    {badge && (
      <span style={{
        position: 'absolute', top: '-4px', right: '-8px',
        fontSize: '0.5rem', fontFamily: 'var(--font-mono)',
        color: 'rgba(255,255,255,0.5)', fontWeight: 600,
      }}>{badge}</span>
    )}
  </span>
)


/* âââââââââââââââââââââââââââââââââââââââââââ
   SVG LANDSCAPE PIECES
âââââââââââââââââââââââââââââââââââââââââââ */

const CloudSVG = ({ viewBox, children }) => (
  <svg viewBox={viewBox} style={{ width: '100%', height: '100%' }}>{children}</svg>
)

const MountainsFar = () => (
  <svg viewBox="0 0 1200 400" preserveAspectRatio="none" width="100%" height="100%">
    <defs>
      <linearGradient id="mtnFar" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#a0b8a8" stopOpacity="0.5"/>
        <stop offset="100%" stopColor="#8aaa90" stopOpacity="0.7"/>
      </linearGradient>
    </defs>
    <path d="M0,400 L0,250 Q100,120 200,180 Q300,80 400,150 Q500,50 600,120 Q700,30 800,100 Q900,60 1000,140 Q1100,90 1200,180 L1200,400 Z" fill="url(#mtnFar)"/>
  </svg>
)

const MountainsMid = () => (
  <svg viewBox="0 0 1200 320" preserveAspectRatio="none" width="100%" height="100%">
    <defs>
      <linearGradient id="mtnMid" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#6a9a68"/>
        <stop offset="60%" stopColor="#5a8a58"/>
        <stop offset="100%" stopColor="#4a7a48"/>
      </linearGradient>
    </defs>
    <path d="M0,320 L0,200 Q80,100 180,160 Q280,60 380,120 Q500,40 620,110 Q740,30 850,90 Q960,50 1060,120 Q1140,80 1200,140 L1200,320 Z" fill="url(#mtnMid)"/>
    {/* Tea terrace lines */}
    <path d="M300,130 Q400,95 500,120" stroke="rgba(90,140,80,0.3)" strokeWidth="1" fill="none"/>
    <path d="M310,140 Q410,105 510,130" stroke="rgba(90,140,80,0.25)" strokeWidth="1" fill="none"/>
    <path d="M320,150 Q420,115 520,140" stroke="rgba(90,140,80,0.2)" strokeWidth="1" fill="none"/>
    <path d="M700,100 Q800,70 900,95" stroke="rgba(90,140,80,0.3)" strokeWidth="1" fill="none"/>
    <path d="M710,110 Q810,80 910,105" stroke="rgba(90,140,80,0.25)" strokeWidth="1" fill="none"/>
  </svg>
)

const MountainsNear = () => (
  <svg viewBox="0 0 1200 260" preserveAspectRatio="none" width="100%" height="100%">
    <defs>
      <linearGradient id="mtnNear" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#4a8040"/>
        <stop offset="50%" stopColor="#3a7030"/>
        <stop offset="100%" stopColor="#2d5a28"/>
      </linearGradient>
    </defs>
    <path d="M0,260 L0,140 Q100,60 220,100 Q340,20 460,80 Q580,30 680,70 Q800,10 920,60 Q1020,25 1100,80 Q1160,50 1200,90 L1200,260 Z" fill="url(#mtnNear)"/>
    <path d="M100,110 Q200,75 300,100" stroke="rgba(60,110,50,0.4)" strokeWidth="1.5" fill="none"/>
    <path d="M110,120 Q210,85 310,110" stroke="rgba(60,110,50,0.35)" strokeWidth="1.5" fill="none"/>
    <path d="M120,130 Q220,95 320,120" stroke="rgba(60,110,50,0.3)" strokeWidth="1.5" fill="none"/>
    <path d="M800,70 Q900,40 1000,65" stroke="rgba(60,110,50,0.4)" strokeWidth="1.5" fill="none"/>
    <path d="M810,80 Q910,50 1010,75" stroke="rgba(60,110,50,0.35)" strokeWidth="1.5" fill="none"/>
  </svg>
)


/* âââââââââââââââââââââââââââââââââââââââââââ
   CHARACTER COMPONENTS (placeholder SVGs)
   â Swap these for <img src="...png"> later
âââââââââââââââââââââââââââââââââââââââââââ */

const ForestSpirit = () => (
  <svg width="45" height="55" viewBox="0 0 45 55" fill="none">
    <defs>
      <radialGradient id="spiritGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#e8f5d5" stopOpacity="1"/>
        <stop offset="70%" stopColor="#d0e8b8" stopOpacity="0.8"/>
        <stop offset="100%" stopColor="#b8d8a0" stopOpacity="0"/>
      </radialGradient>
    </defs>
    <ellipse cx="22" cy="32" rx="22" ry="22" fill="url(#spiritGlow)" opacity="0.4"/>
    <ellipse cx="22" cy="35" rx="14" ry="14" fill="#e4f0d0" stroke="#a8c890" strokeWidth="1.2"/>
    <circle cx="22" cy="26" r="2.5" fill="#d4956a"/>
    <circle cx="22" cy="26" r="1" fill="#e8b080"/>
    <ellipse cx="16" cy="33" rx="3.5" ry="3" fill="white"/>
    <circle cx="17" cy="33.5" r="2" fill="#2a3a20"/>
    <circle cx="18" cy="32.8" r="0.8" fill="white"/>
    <ellipse cx="28" cy="33" rx="3.5" ry="3" fill="white"/>
    <circle cx="27" cy="33.5" r="2" fill="#2a3a20"/>
    <circle cx="28" cy="32.8" r="0.8" fill="white"/>
    <path d="M17 39 Q22 43 27 39" stroke="#4a6a38" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
    <ellipse cx="13" cy="37" rx="2.5" ry="1.5" fill="#d4956a" opacity="0.25"/>
    <ellipse cx="31" cy="37" rx="2.5" ry="1.5" fill="#d4956a" opacity="0.25"/>
    <path d="M6 28 Q2 18 12 22" fill="#7ab860" stroke="#5a9840" strokeWidth="0.8"/>
    <path d="M38 28 Q42 18 32 22" fill="#7ab860" stroke="#5a9840" strokeWidth="0.8"/>
    <path d="M22 20 Q22 10 27 7" stroke="#5a9840" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <path d="M27 7 Q30 5 28 9 Q26 12 24 10 Q22 8 27 7 Z" fill="#7ab860"/>
    <ellipse cx="16" cy="48" rx="4" ry="2.5" fill="#d8e8c0" stroke="#b0c898" strokeWidth="0.5"/>
    <ellipse cx="28" cy="48" rx="4" ry="2.5" fill="#d8e8c0" stroke="#b0c898" strokeWidth="0.5"/>
  </svg>
)

const KawaiiElephant = () => (
  <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
    <defs>
      <linearGradient id="elephantBody" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#b8c4d0"/>
        <stop offset="100%" stopColor="#98a8b8"/>
      </linearGradient>
    </defs>
    <ellipse cx="40" cy="56" rx="30" ry="4" fill="rgba(0,0,0,0.08)"/>
    <ellipse cx="38" cy="32" rx="24" ry="18" fill="url(#elephantBody)" stroke="#8898a8" strokeWidth="1"/>
    <circle cx="60" cy="22" r="14" fill="#b0bcc8" stroke="#8898a8" strokeWidth="1"/>
    <ellipse cx="55" cy="16" rx="10" ry="12" fill="#a0b0c0" stroke="#8898a8" strokeWidth="0.8"/>
    <ellipse cx="55" cy="16" rx="6" ry="8" fill="#c0c8d4" opacity="0.5"/>
    <ellipse cx="64" cy="20" rx="3.5" ry="3" fill="white"/>
    <circle cx="65" cy="20.5" r="2" fill="#1a2a30"/>
    <circle cx="66" cy="19.8" r="0.8" fill="white"/>
    <ellipse cx="68" cy="25" rx="3" ry="1.8" fill="#d0909a" opacity="0.25"/>
    <circle cx="62" cy="13" r="2" fill="#d4956a"/>
    <circle cx="62" cy="13" r="0.8" fill="#e8b080"/>
    <path d="M72 26 Q78 34 74 42 Q72 48 66 46" stroke="#8898a8" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
    <path d="M70 28 L73 33" stroke="#f0ece0" strokeWidth="2" strokeLinecap="round"/>
    <rect x="22" y="44" width="7" height="12" rx="3.5" fill="#a0b0c0"/>
    <rect x="34" y="45" width="7" height="12" rx="3.5" fill="#a0b0c0"/>
    <rect x="46" y="44" width="7" height="12" rx="3.5" fill="#a0b0c0"/>
    <path d="M14 30 Q6 36 8 44" stroke="#8898a8" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <ellipse cx="8" cy="45" rx="2.5" ry="2" fill="#a0b0c0"/>
  </svg>
)

const KawaiiPeacock = () => (
  <svg width="55" height="55" viewBox="0 0 55 55" fill="none">
    <defs>
      <radialGradient id="eyespot" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#40c0a0"/>
        <stop offset="50%" stopColor="#2080a0"/>
        <stop offset="100%" stopColor="#1a5a70" stopOpacity="0.6"/>
      </radialGradient>
    </defs>
    <g>
      <path d="M27 28 L5 3" stroke="#2a8a7a" strokeWidth="1.5" opacity="0.5"/>
      <path d="M27 28 L15 0" stroke="#2a8a7a" strokeWidth="1.5" opacity="0.55"/>
      <path d="M27 28 L27 -2" stroke="#3a9a8a" strokeWidth="1.5" opacity="0.6"/>
      <path d="M27 28 L39 0" stroke="#2a8a7a" strokeWidth="1.5" opacity="0.55"/>
      <path d="M27 28 L49 3" stroke="#2a8a7a" strokeWidth="1.5" opacity="0.5"/>
      <circle cx="5" cy="3" r="3.5" fill="url(#eyespot)"/>
      <circle cx="15" cy="0" r="3.5" fill="url(#eyespot)"/>
      <circle cx="27" cy="-2" r="4" fill="url(#eyespot)"/>
      <circle cx="39" cy="0" r="3.5" fill="url(#eyespot)"/>
      <circle cx="49" cy="3" r="3.5" fill="url(#eyespot)"/>
    </g>
    <ellipse cx="27" cy="38" rx="9" ry="12" fill="#1a7a6a" stroke="#0a5a4a" strokeWidth="0.8"/>
    <circle cx="27" cy="24" r="6" fill="#2a9a88"/>
    <ellipse cx="30" cy="23" rx="2" ry="2.2" fill="white"/>
    <circle cx="30.5" cy="23.2" r="1.2" fill="#0a2a20"/>
    <circle cx="31" cy="22.5" r="0.5" fill="white"/>
    <path d="M33 24 L37 23 L33 25.5" fill="#d4a050"/>
    <line x1="25" y1="18" x2="23" y2="13" stroke="#2a9a88" strokeWidth="1"/>
    <line x1="27" y1="18" x2="27" y2="12" stroke="#2a9a88" strokeWidth="1"/>
    <line x1="29" y1="18.5" x2="31" y2="13.5" stroke="#2a9a88" strokeWidth="1"/>
    <circle cx="23" cy="12.5" r="2" fill="#40c0a0"/>
    <circle cx="27" cy="11.5" r="2" fill="#40c0a0"/>
    <circle cx="31" cy="13" r="2" fill="#40c0a0"/>
    <line x1="24" y1="49" x2="21" y2="55" stroke="#c87850" strokeWidth="1.5"/>
    <line x1="30" y1="49" x2="33" y2="55" stroke="#c87850" strokeWidth="1.5"/>
  </svg>
)

const KawaiiLeopard = () => (
  <svg width="65" height="35" viewBox="0 0 65 35" fill="none">
    <defs>
      <linearGradient id="leopardFur" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#e8d8a0"/>
        <stop offset="100%" stopColor="#d8c890"/>
      </linearGradient>
    </defs>
    <ellipse cx="32" cy="33" rx="25" ry="3" fill="rgba(0,0,0,0.06)"/>
    <ellipse cx="30" cy="18" rx="20" ry="10" fill="url(#leopardFur)" stroke="#c0b070" strokeWidth="0.8"/>
    <circle cx="20" cy="15" r="2" fill="#b89850" opacity="0.5"/>
    <circle cx="28" cy="12" r="1.5" fill="#b89850" opacity="0.4"/>
    <circle cx="36" cy="14" r="1.8" fill="#b89850" opacity="0.5"/>
    <circle cx="50" cy="13" r="8" fill="url(#leopardFur)" stroke="#c0b070" strokeWidth="0.8"/>
    <path d="M44 6 L42 1 L46 4.5" fill="#e8d8a0" stroke="#c0b070" strokeWidth="0.6"/>
    <path d="M56 6 L58 1 L54 4.5" fill="#e8d8a0" stroke="#c0b070" strokeWidth="0.6"/>
    <ellipse cx="47" cy="12" rx="2" ry="2.5" fill="#7aaa50"/>
    <ellipse cx="47" cy="12" rx="0.7" ry="2.5" fill="#2a3a20"/>
    <ellipse cx="53" cy="12" rx="2" ry="2.5" fill="#7aaa50"/>
    <ellipse cx="53" cy="12" rx="0.7" ry="2.5" fill="#2a3a20"/>
    <ellipse cx="50" cy="15.5" rx="1.2" ry="0.8" fill="#d4956a"/>
    <circle cx="50" cy="8" r="1.2" fill="#d4956a" opacity="0.5"/>
    <ellipse cx="14" cy="26" rx="5" ry="3" fill="#dcc890"/>
    <path d="M10 16 Q2 12 4 6 Q6 2 10 5" stroke="#c8b878" strokeWidth="3" fill="none" strokeLinecap="round"/>
  </svg>
)

const BabyYaka = () => (
  <svg width="38" height="48" viewBox="0 0 38 48" fill="none">
    <ellipse cx="19" cy="34" rx="11" ry="13" fill="#e0d0e8" stroke="#c0a8d0" strokeWidth="1"/>
    <path d="M7 16 Q3 6 12 11" fill="#7a5a8a" opacity="0.8"/>
    <path d="M12 12 Q8 1 18 7" fill="#8a6a9a" opacity="0.85"/>
    <path d="M18 10 Q18 0 24 5" fill="#7a5a8a" opacity="0.8"/>
    <path d="M24 12 Q28 3 30 12" fill="#8a6a9a" opacity="0.85"/>
    <path d="M29 16 Q34 8 31 16" fill="#7a5a8a" opacity="0.8"/>
    <circle cx="19" cy="21" r="10" fill="#e8daf0"/>
    <ellipse cx="14" cy="20" rx="4" ry="3.5" fill="white" stroke="#8a6a9a" strokeWidth="0.5"/>
    <circle cx="15" cy="20.5" r="2.5" fill="#4a2a5a"/>
    <circle cx="16" cy="19.5" r="1" fill="white"/>
    <ellipse cx="24" cy="20" rx="4" ry="3.5" fill="white" stroke="#8a6a9a" strokeWidth="0.5"/>
    <circle cx="23" cy="20.5" r="2.5" fill="#4a2a5a"/>
    <circle cx="24" cy="19.5" r="1" fill="white"/>
    <path d="M14 26 Q19 30 24 26" stroke="#5a3a6a" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
    <rect x="16" y="26" width="1.8" height="2.5" rx="0.7" fill="white"/>
    <rect x="21" y="26" width="1.8" height="2.5" rx="0.7" fill="white"/>
    <ellipse cx="10" cy="23" rx="2.5" ry="1.5" fill="#d0909a" opacity="0.3"/>
    <ellipse cx="28" cy="23" rx="2.5" ry="1.5" fill="#d0909a" opacity="0.3"/>
    <circle cx="4" cy="28" r="4" fill="#e0d0e8" stroke="#c0a8d0" strokeWidth="0.8"/>
    <circle cx="34" cy="28" r="4" fill="#e0d0e8" stroke="#c0a8d0" strokeWidth="0.8"/>
    <circle cx="19" cy="13" r="1.8" fill="#d4956a"/>
    <circle cx="19" cy="13" r="0.7" fill="#e8b080"/>
  </svg>
)

const RunningYaka = () => (
  <svg width="40" height="45" viewBox="0 0 40 45" fill="none">
    <ellipse cx="20" cy="25" rx="10" ry="11" fill="#f0e0d0" stroke="#d0b8a0" strokeWidth="0.8" transform="rotate(-12 20 25)"/>
    <path d="M10 10 Q2 2 7 7" stroke="#9a7050" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M13 7 Q5 -2 10 4" stroke="#a88060" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M17 5 Q11 -3 15 3" stroke="#9a7050" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <circle cx="22" cy="15" r="9" fill="#f5ead8"/>
    <ellipse cx="19" cy="14" rx="3.2" ry="3" fill="white" stroke="#9a7050" strokeWidth="0.5"/>
    <circle cx="20" cy="14.5" r="2" fill="#5a3020"/>
    <circle cx="21" cy="13.5" r="0.8" fill="white"/>
    <ellipse cx="27" cy="13" rx="3.2" ry="3" fill="white" stroke="#9a7050" strokeWidth="0.5"/>
    <circle cx="26" cy="13.5" r="2" fill="#5a3020"/>
    <circle cx="27" cy="12.5" r="0.8" fill="white"/>
    <ellipse cx="24" cy="19" rx="3" ry="2.5" fill="#5a3020" opacity="0.6"/>
    <path d="M22 18 Q24 16.5 26 18" fill="white" opacity="0.9"/>
    <circle cx="23" cy="8.5" r="1.3" fill="#d4956a"/>
    <line x1="13" y1="22" x2="5" y2="17" stroke="#edd0b8" strokeWidth="3.5" strokeLinecap="round"/>
    <line x1="28" y1="27" x2="36" y2="22" stroke="#edd0b8" strokeWidth="3.5" strokeLinecap="round"/>
    <line x1="15" y1="34" x2="8" y2="42" stroke="#edd0b8" strokeWidth="3.5" strokeLinecap="round"/>
    <line x1="23" y1="34" x2="30" y2="42" stroke="#edd0b8" strokeWidth="3.5" strokeLinecap="round"/>
  </svg>
)

const TinySpirit = () => (
  <svg width="22" height="28" viewBox="0 0 22 28" fill="none">
    <ellipse cx="11" cy="18" rx="8" ry="8" fill="#e4f5d5" stroke="#a8d890" strokeWidth="0.8"/>
    <circle cx="8" cy="17" r="2" fill="#2a3a20"/>
    <circle cx="9" cy="16.5" r="0.7" fill="white"/>
    <circle cx="14" cy="17" r="2" fill="#2a3a20"/>
    <circle cx="15" cy="16.5" r="0.7" fill="white"/>
    <ellipse cx="11" cy="21" rx="2" ry="1.2" fill="#4a6a38" opacity="0.4"/>
    <path d="M11 10 Q11 4 14 2" stroke="#5a9840" strokeWidth="1.2" fill="none"/>
    <circle cx="15" cy="2" r="2.2" fill="#7ab860"/>
    <ellipse cx="7" cy="26" rx="3" ry="1.5" fill="#d8ecc0"/>
    <ellipse cx="15" cy="26" rx="3" ry="1.5" fill="#d8ecc0"/>
  </svg>
)


/* âââââââââââââââââââââââââââââââââââââââââââ
   LEAF SVG
âââââââââââââââââââââââââââââââââââââââââââ */

const LeafSVG = ({ color = '#5a9a40', opacity = 0.6 }) => (
  <svg viewBox="0 0 16 20" style={{ width: '100%', height: '100%' }}>
    <path d={`M8,0 Q14,5 12,12 Q10,18 8,20 Q6,18 4,12 Q2,5 8,0 Z`} fill={color} opacity={opacity}/>
    <line x1="8" y1="2" x2="8" y2="18" stroke={color} strokeWidth="0.5" opacity={opacity * 0.6}/>
  </svg>
)


/* âââââââââââââââââââââââââââââââââââââââââââ
   TREE LAYERS
âââââââââââââââââââââââââââââââââââââââââââ */

const TreesDeep = () => (
  <svg viewBox="0 0 1200 300" preserveAspectRatio="none" width="100%" height="100%">
    <defs>
      <linearGradient id="treeDeep" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3a6a30"/>
        <stop offset="100%" stopColor="#2a5a22"/>
      </linearGradient>
    </defs>
    {[50,150,280,400,530,650,780,900,1030,1150].map((cx, i) => (
      <ellipse key={i} cx={cx} cy={160 + (i % 3) * 10} rx={55 + (i % 2) * 10} ry={120 + (i % 3) * 15} fill="url(#treeDeep)"/>
    ))}
  </svg>
)

const TreesMid = () => (
  <svg viewBox="0 0 1200 350" preserveAspectRatio="none" width="100%" height="100%">
    <defs>
      <linearGradient id="treeMid" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#356530"/>
        <stop offset="100%" stopColor="#254d20"/>
      </linearGradient>
    </defs>
    {[90,240,440,620,790,980,1130].map((cx, i) => (
      <g key={i}>
        <rect x={cx - 6} y={200 + (i % 3) * 15} width={10 + (i % 2) * 3} height={120 + (i % 2) * 20} fill="#3a2a1a" opacity="0.5"/>
        <ellipse cx={cx} cy={155 + (i % 3) * 15} rx={50 + (i % 2) * 8} ry={105 + (i % 2) * 10} fill="url(#treeMid)"/>
      </g>
    ))}
  </svg>
)

const TreesNear = () => (
  <svg viewBox="0 0 1200 400" preserveAspectRatio="none" width="100%" height="100%">
    <defs>
      <linearGradient id="treeNear" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2d5828"/>
        <stop offset="100%" stopColor="#1a3d18"/>
      </linearGradient>
      <linearGradient id="trunk" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#3a2815"/>
        <stop offset="50%" stopColor="#4a3820"/>
        <stop offset="100%" stopColor="#3a2815"/>
      </linearGradient>
    </defs>
    {/* Left framing tree */}
    <rect x="40" y="120" width="20" height="280" fill="url(#trunk)"/>
    <ellipse cx="50" cy="80" rx="70" ry="120" fill="url(#treeNear)"/>
    <line x1="50" y1="160" x2="100" y2="140" stroke="#3a2815" strokeWidth="5"/>
    <line x1="50" y1="200" x2="10" y2="170" stroke="#3a2815" strokeWidth="4"/>
    {/* Right framing tree */}
    <rect x="1110" y="100" width="22" height="300" fill="url(#trunk)"/>
    <ellipse cx="1120" cy="60" rx="75" ry="130" fill="url(#treeNear)"/>
    <line x1="1120" y1="150" x2="1070" y2="130" stroke="#3a2815" strokeWidth="5"/>
    <line x1="1120" y1="190" x2="1160" y2="165" stroke="#3a2815" strokeWidth="4"/>
    {/* Mid-ground trees */}
    <rect x="340" y="180" width="15" height="220" fill="url(#trunk)" opacity="0.7"/>
    <ellipse cx="347" cy="130" rx="55" ry="105" fill="url(#treeNear)" opacity="0.6"/>
    <rect x="830" y="160" width="16" height="240" fill="url(#trunk)" opacity="0.7"/>
    <ellipse cx="838" cy="110" rx="60" ry="115" fill="url(#treeNear)" opacity="0.6"/>
  </svg>
)


/* âââââââââââââââââââââââââââââââââââââââââââ
   CSS-IN-JS KEYFRAMES (injected once)
âââââââââââââââââââââââââââââââââââââââââââ */

const SCENE_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');

  .riz-scene * { margin: 0; padding: 0; box-sizing: border-box; }

  .riz-scene {
    position: fixed; inset: 0; overflow: hidden;
    font-family: 'Inter', sans-serif;
    background: #1a2a1a;
  }

  /* Cloud animation */
  .riz-cloud { position: absolute; filter: blur(2px); opacity: 0; animation: riz-cloud-life linear infinite; }
  .riz-cloud-a { top: 5%; width: 350px; animation-duration: 90s; }
  .riz-cloud-b { top: 10%; width: 250px; animation-duration: 110s; animation-delay: -35s; }
  .riz-cloud-c { top: 2%; width: 300px; animation-duration: 100s; animation-delay: -60s; }
  .riz-cloud-d { top: 15%; width: 180px; animation-duration: 120s; animation-delay: -80s; }

  @keyframes riz-cloud-life {
    0%   { transform: translateX(-400px); opacity: 0; }
    5%   { opacity: 0.25; }
    50%  { opacity: 0.35; }
    95%  { opacity: 0.2; }
    100% { transform: translateX(calc(100vw + 400px)); opacity: 0; }
  }

  /* Haze drift */
  .riz-haze-drift { animation: riz-haze-drift 30s ease-in-out infinite; }
  @keyframes riz-haze-drift {
    0%, 100% { transform: translateX(0); opacity: 0.35; }
    50% { transform: translateX(30px); opacity: 0.5; }
  }

  /* Mist */
  .riz-mist {
    position: absolute; left: -20%; width: 140%; height: 15%; opacity: 0; filter: blur(8px);
    background: linear-gradient(90deg, transparent 0%, rgba(200,215,200,0.3) 20%, rgba(210,225,210,0.5) 40%, rgba(200,215,200,0.4) 60%, rgba(190,210,195,0.3) 80%, transparent 100%);
  }
  .riz-mist-1 { bottom: 28%; animation: riz-mist-roll 25s ease-in-out infinite; }
  .riz-mist-2 { bottom: 22%; animation: riz-mist-roll 35s ease-in-out infinite 10s; }
  .riz-mist-3 { bottom: 35%; height: 10%; animation: riz-mist-roll 40s ease-in-out infinite 5s; }

  @keyframes riz-mist-roll {
    0%   { transform: translateX(-15%); opacity: 0; }
    15%  { opacity: 0.4; }
    50%  { transform: translateX(10%); opacity: 0.6; }
    85%  { opacity: 0.3; }
    100% { transform: translateX(-15%); opacity: 0; }
  }

  /* Light rays */
  .riz-ray {
    position: absolute; top: -10%; width: 3px; height: 70%;
    background: linear-gradient(180deg, rgba(255,250,220,0) 0%, rgba(255,250,220,0.08) 20%, rgba(255,250,220,0.15) 50%, rgba(255,250,220,0.08) 80%, rgba(255,250,220,0) 100%);
    transform-origin: top center;
    animation: riz-ray-shimmer 8s ease-in-out infinite;
  }
  @keyframes riz-ray-shimmer { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }

  /* Fireflies */
  .riz-firefly {
    position: absolute; width: 4px; height: 4px; border-radius: 50%;
    background: rgba(200,230,150,0.7); box-shadow: 0 0 8px 2px rgba(200,230,150,0.4);
    animation: riz-firefly-float linear infinite;
  }
  @keyframes riz-firefly-float {
    0%   { transform: translate(0, 0) scale(1); opacity: 0; }
    10%  { opacity: 0.8; }
    25%  { transform: translate(20px, -30px) scale(1.2); }
    50%  { transform: translate(-10px, -50px) scale(0.8); opacity: 0.5; }
    75%  { transform: translate(30px, -20px) scale(1.1); opacity: 0.9; }
    90%  { opacity: 0.6; }
    100% { transform: translate(0, 0) scale(1); opacity: 0; }
  }

  /* Leaves */
  .riz-leaf { position: absolute; top: -5%; opacity: 0; animation: riz-leaf-fall linear infinite; }
  @keyframes riz-leaf-fall {
    0%   { transform: translate(0, 0) rotate(0deg); opacity: 0; }
    5%   { opacity: 0.6; }
    25%  { transform: translate(40px, 25vh) rotate(90deg); }
    50%  { transform: translate(-20px, 50vh) rotate(200deg); opacity: 0.5; }
    75%  { transform: translate(30px, 75vh) rotate(300deg); opacity: 0.3; }
    100% { transform: translate(10px, 105vh) rotate(400deg); opacity: 0; }
  }

  /* Character animations */
  .riz-spirit-sway { animation: riz-spirit-sway 4s ease-in-out infinite; }
  @keyframes riz-spirit-sway {
    0%, 100% { transform: translateY(0) rotate(-2deg); }
    50% { transform: translateY(-5px) rotate(2deg); }
  }

  .riz-elephant-amble { animation: riz-elephant-amble 24s ease-in-out infinite; }
  @keyframes riz-elephant-amble { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(80px); } }

  .riz-step-bounce { animation: riz-step-bounce 1.2s ease-in-out infinite; }
  @keyframes riz-step-bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }

  .riz-cat-breathe { animation: riz-cat-breathe 3s ease-in-out infinite; }
  @keyframes riz-cat-breathe { 0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(1.03); } }

  .riz-peacock-walk { animation: riz-peacock-walk 18s ease-in-out infinite; }
  @keyframes riz-peacock-walk {
    0%, 100% { transform: translateX(0) scaleX(1); }
    45% { transform: translateX(-60px) scaleX(1); }
    50% { transform: translateX(-60px) scaleX(-1); }
    95% { transform: translateX(0) scaleX(-1); }
  }

  .riz-yaka-peek { animation: riz-yaka-peek 10s ease-in-out infinite; }
  @keyframes riz-yaka-peek {
    0%, 100% { transform: translateX(-30px) rotate(0deg); opacity: 0; }
    20% { transform: translateX(0px) rotate(-5deg); opacity: 1; }
    30% { transform: translateX(5px) rotate(5deg); opacity: 1; }
    40% { transform: translateX(3px) rotate(-8deg); opacity: 1; }
    55% { transform: translateX(0px) rotate(0deg); opacity: 1; }
    65% { transform: translateX(-30px) rotate(0deg); opacity: 0; }
  }

  .riz-yaka-scurry { animation: riz-yaka-scurry 16s ease-in-out infinite 4s; }
  @keyframes riz-yaka-scurry {
    0%   { left: -80px; bottom: 8%; }
    10%  { left: 10%; bottom: 9%; }
    20%  { left: 22%; bottom: 7%; }
    25%  { left: 28%; bottom: 12%; }
    30%  { left: 35%; bottom: 8%; }
    40%  { left: 45%; bottom: 8%; }
    45%  { left: 45%; bottom: 8%; }
    55%  { left: 58%; bottom: 9%; }
    65%  { left: 70%; bottom: 7%; }
    75%  { left: 82%; bottom: 11%; }
    80%  { left: 88%; bottom: 8%; }
    95%  { left: calc(100% + 40px); bottom: 8%; }
    100% { left: calc(100% + 80px); bottom: 8%; }
  }

  .riz-run-bounce { animation: riz-run-bounce 0.3s ease-in-out infinite; }
  @keyframes riz-run-bounce {
    0%, 100% { transform: translateY(0) rotate(-5deg); }
    50% { transform: translateY(-8px) rotate(5deg); }
  }

  .riz-spirit-chase { animation: riz-yaka-scurry 16s ease-in-out infinite 5.5s; }

  .riz-mini-bounce { animation: riz-run-bounce 0.25s ease-in-out infinite; }

  /* Card entrance */
  .riz-card-in { animation: riz-card-in 1.2s ease-out 0.5s both; }
  @keyframes riz-card-in {
    from { opacity: 0; transform: translateY(20px) scale(0.98); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }
`


/* âââââââââââââââââââââââââââââââââââââââââââ
   MAIN COMPONENT
âââââââââââââââââââââââââââââââââââââââââââ */

export default function App() {
  const sceneRef = useRef(null)

  // Inject CSS & parallax
  useEffect(() => {
    // Inject scene CSS
    const style = document.createElement('style')
    style.textContent = SCENE_CSS
    document.head.appendChild(style)

    // Parallax on mouse move
    let mx = 0.5, my = 0.5, cx = 0.5, cy = 0.5
    const handleMove = (e) => {
      mx = e.clientX / window.innerWidth
      my = e.clientY / window.innerHeight
    }
    window.addEventListener('mousemove', handleMove)

    let raf
    const animate = () => {
      cx += (mx - cx) * 0.04
      cy += (my - cy) * 0.04
      const layers = sceneRef.current?.querySelectorAll('[data-speed]')
      layers?.forEach(l => {
        const s = parseFloat(l.dataset.speed) || 0.02
        const x = (cx - 0.5) * s * 1200
        const y = (cy - 0.5) * s * 700
        l.style.transform = `translate(${x}px, ${y}px)`
      })
      raf = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(raf)
      style.remove()
    }
  }, [])

  return (
    <div className="riz-scene" ref={sceneRef}>

      {/* ââ SKY ââ */}
      <div data-speed="0.005" style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '55%',
        background: 'linear-gradient(180deg, #c8d8e4 0%, #d8e2ea 15%, #e4ecf0 30%, #edf2f0 45%, #f0f2ec 60%, #e8ece4 75%, #dae4d8 100%)',
      }} />

      {/* ââ HAZE ââ */}
      <div style={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none',
        background: 'radial-gradient(ellipse 120% 40% at 30% 55%, rgba(200,215,200,0.5) 0%, transparent 70%)' }} />
      <div style={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none',
        background: 'radial-gradient(ellipse 100% 35% at 70% 50%, rgba(190,210,200,0.4) 0%, transparent 65%)' }} />
      <div className="riz-haze-drift" data-speed="0.008" style={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none',
        background: 'radial-gradient(ellipse 80% 25% at 50% 58%, rgba(210,220,210,0.35) 0%, transparent 60%)' }} />

      {/* ââ CLOUDS ââ */}
      <div data-speed="0.01" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '40%' }}>
        <div className="riz-cloud riz-cloud-a">
          <CloudSVG viewBox="0 0 350 100">
            <ellipse cx="175" cy="55" rx="160" ry="35" fill="white" opacity="0.7"/>
            <ellipse cx="120" cy="45" rx="100" ry="40" fill="white" opacity="0.8"/>
            <ellipse cx="240" cy="48" rx="90" ry="32" fill="white" opacity="0.75"/>
          </CloudSVG>
        </div>
        <div className="riz-cloud riz-cloud-b">
          <CloudSVG viewBox="0 0 250 80">
            <ellipse cx="125" cy="45" rx="110" ry="28" fill="white" opacity="0.75"/>
            <ellipse cx="80" cy="38" rx="70" ry="32" fill="white" opacity="0.8"/>
          </CloudSVG>
        </div>
        <div className="riz-cloud riz-cloud-c">
          <CloudSVG viewBox="0 0 300 90">
            <ellipse cx="150" cy="50" rx="140" ry="32" fill="white" opacity="0.7"/>
            <ellipse cx="100" cy="42" rx="90" ry="36" fill="white" opacity="0.8"/>
          </CloudSVG>
        </div>
        <div className="riz-cloud riz-cloud-d">
          <CloudSVG viewBox="0 0 180 60">
            <ellipse cx="90" cy="35" rx="80" ry="22" fill="white" opacity="0.75"/>
            <ellipse cx="60" cy="28" rx="55" ry="26" fill="white" opacity="0.8"/>
          </CloudSVG>
        </div>
      </div>

      {/* ââ MOUNTAINS ââ */}
      <div data-speed="0.015" style={{ position: 'absolute', bottom: '30%', left: '-10%', width: '120%', height: '40%' }}>
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', opacity: 0.4 }}><MountainsFar /></div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '80%', opacity: 0.55 }}><MountainsMid /></div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '65%', opacity: 0.7 }}><MountainsNear /></div>
      </div>

      {/* ââ FOREST ââ */}
      <div data-speed="0.025" style={{ position: 'absolute', bottom: 0, left: '-5%', width: '110%', height: '55%' }}>
        <div style={{ position: 'absolute', bottom: '20%', left: 0, width: '100%', height: '35%', opacity: 0.5 }}><TreesDeep /></div>
        <div style={{ position: 'absolute', bottom: '10%', left: 0, width: '100%', height: '40%', opacity: 0.7 }}><TreesMid /></div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '45%', opacity: 0.85 }}><TreesNear /></div>
      </div>

      {/* ââ FOREST FLOOR ââ */}
      <div data-speed="0.035" style={{
        position: 'absolute', bottom: 0, left: '-5%', width: '110%', height: '22%',
        background: 'linear-gradient(180deg, rgba(45,75,40,0) 0%, rgba(45,75,40,0.6) 15%, #2d5028 30%, #264822 50%, #1f3d1c 70%, #1a3518 100%)',
      }}>
        <div style={{ position: 'absolute', bottom: '2%', left: '10%', width: 180, height: 40, borderRadius: '50%', opacity: 0.3, background: 'radial-gradient(ellipse, #4a8a3a, transparent)' }} />
        <div style={{ position: 'absolute', bottom: '5%', left: '35%', width: 120, height: 30, borderRadius: '50%', opacity: 0.3, background: 'radial-gradient(ellipse, #3a7a2a, transparent)' }} />
        <div style={{ position: 'absolute', bottom: '1%', left: '60%', width: 200, height: 45, borderRadius: '50%', opacity: 0.3, background: 'radial-gradient(ellipse, #4a8a3a, transparent)' }} />
        <div style={{ position: 'absolute', bottom: '4%', left: '80%', width: 140, height: 35, borderRadius: '50%', opacity: 0.3, background: 'radial-gradient(ellipse, #3a7a2a, transparent)' }} />
      </div>

      {/* ââ MIST ââ */}
      <div className="riz-mist riz-mist-1" />
      <div className="riz-mist riz-mist-2" />
      <div className="riz-mist riz-mist-3" />

      {/* ââ LIGHT RAYS ââ */}
      <div data-speed="0.012" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div className="riz-ray" style={{ left: '20%', transform: 'rotate(8deg)', width: 4, animationDelay: '0s' }} />
        <div className="riz-ray" style={{ left: '35%', transform: 'rotate(3deg)', width: 2, animationDelay: '2s' }} />
        <div className="riz-ray" style={{ left: '55%', transform: 'rotate(-5deg)', width: 5, animationDelay: '4s' }} />
        <div className="riz-ray" style={{ left: '72%', transform: 'rotate(-10deg)', width: 3, animationDelay: '1s' }} />
        <div className="riz-ray" style={{ left: '45%', transform: 'rotate(1deg)', width: 2, animationDelay: '6s' }} />
      </div>

      {/* ââ FIREFLIES ââ */}
      {[
        { bottom: '30%', left: '15%', dur: '12s' },
        { bottom: '25%', left: '40%', dur: '15s', delay: '-5s', size: 3 },
        { bottom: '35%', left: '65%', dur: '18s', delay: '-8s' },
        { bottom: '20%', left: '80%', dur: '14s', delay: '-3s', size: 3 },
        { bottom: '32%', left: '50%', dur: '16s', delay: '-11s' },
        { bottom: '28%', left: '25%', dur: '20s', delay: '-7s', size: 2 },
        { bottom: '38%', left: '72%', dur: '13s', delay: '-2s' },
      ].map((ff, i) => (
        <div key={`ff-${i}`} className="riz-firefly" style={{
          bottom: ff.bottom, left: ff.left,
          animationDuration: ff.dur,
          animationDelay: ff.delay || '0s',
          width: ff.size || 4, height: ff.size || 4,
        }} />
      ))}

      {/* ââ FALLING LEAVES ââ */}
      {[
        { left: '20%', w: 16, dur: '18s', color: '#5a9a40', op: 0.6 },
        { left: '45%', w: 12, dur: '22s', delay: '-6s', color: '#8aaa50', op: 0.5 },
        { left: '70%', w: 14, dur: '20s', delay: '-12s', color: '#c8a040', op: 0.5 },
        { left: '35%', w: 10, dur: '25s', delay: '-18s', color: '#5a9a40', op: 0.4 },
        { left: '85%', w: 13, dur: '19s', delay: '-4s', color: '#8aaa50', op: 0.4 },
      ].map((l, i) => (
        <div key={`leaf-${i}`} className="riz-leaf" style={{
          left: l.left, width: l.w, animationDuration: l.dur, animationDelay: l.delay || '0s',
        }}>
          <LeafSVG color={l.color} opacity={l.op} />
        </div>
      ))}

      {/* âââââââââââââââââââââââââââââââââââ
         CHARACTERS
         (swap SVG components for <img> when AI PNGs ready)
      âââââââââââââââââââââââââââââââââââ */}

      {/* Forest spirit on branch */}
      <div className="riz-spirit-sway" data-speed="0.03" style={{ position: 'absolute', bottom: '42%', left: '12%', width: 45, height: 55, zIndex: 15 }}>
        <ForestSpirit />
      </div>

      {/* Elephant ambling */}
      <div className="riz-elephant-amble" data-speed="0.028" style={{ position: 'absolute', bottom: '16%', left: '30%', width: 80, height: 60, zIndex: 14 }}>
        <div className="riz-step-bounce"><KawaiiElephant /></div>
      </div>

      {/* Peacock strutting */}
      <div className="riz-peacock-walk" data-speed="0.03" style={{ position: 'absolute', bottom: '14%', right: '35%', width: 55, height: 55, zIndex: 14 }}>
        <KawaiiPeacock />
      </div>

      {/* Leopard resting */}
      <div className="riz-cat-breathe" data-speed="0.032" style={{ position: 'absolute', bottom: '22%', right: '15%', width: 65, height: 35, zIndex: 14 }}>
        <KawaiiLeopard />
      </div>

      {/* Baby yaka peeking from tree */}
      <div className="riz-yaka-peek" style={{ position: 'absolute', bottom: '30%', left: '5%', width: 38, height: 48, zIndex: 16 }}>
        <BabyYaka />
      </div>

      {/* Baby yaka scurrying across forest floor */}
      <div className="riz-yaka-scurry" style={{ position: 'absolute', bottom: '8%', left: -80, width: 40, height: 45, zIndex: 17 }}>
        <div className="riz-run-bounce"><RunningYaka /></div>
      </div>

      {/* Tiny spirit chasing yaka */}
      <div className="riz-spirit-chase" style={{ position: 'absolute', bottom: '8%', left: -60, width: 22, height: 28, zIndex: 16 }}>
        <div className="riz-mini-bounce"><TinySpirit /></div>
      </div>


      {/* âââââââââââââââââââââââââââââââââââ
         CONTENT CARD
      âââââââââââââââââââââââââââââââââââ */}
      <div style={{
        position: 'relative', zIndex: 30, minHeight: '100vh',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '2rem', pointerEvents: 'none',
      }}>
        <div className="riz-card-in" style={{
          background: 'rgba(240, 245, 238, 0.65)',
          backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
          borderRadius: 20, padding: '3rem 2.5rem', textAlign: 'center',
          maxWidth: 420, width: '100%', pointerEvents: 'auto',
          boxShadow: '0 8px 40px rgba(30,60,20,0.15), 0 1px 3px rgba(0,0,0,0.05)',
          border: '1px solid rgba(255,255,255,0.4)',
        }}>
          <p style={{
            fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase',
            color: '#6a8060', marginBottom: '1rem', fontWeight: 500,
          }}>Coming Soon</p>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 600,
            color: '#1a2a15', lineHeight: 1.2, marginBottom: '0.5rem',
          }}>Riz Razak</h1>

          <p style={{
            fontSize: '0.9rem', color: '#4a6040', fontWeight: 300,
            marginBottom: '2rem', lineHeight: 1.6,
          }}>Personal site under construction.</p>

          <a href="https://analyst.rizrazak.com/" target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-block', fontSize: '0.82rem', color: '#2a5020',
              textDecoration: 'none', padding: '0.65rem 1.5rem', borderRadius: 50,
              border: '1.5px solid rgba(42,80,32,0.25)', background: 'rgba(42,80,32,0.05)',
              fontWeight: 500, letterSpacing: '0.02em',
            }}>
            For now, enjoy the deep analysis &rarr; analyst.rizrazak.com
          </a>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', marginTop: '1.5rem', alignItems: 'center' }}>
            <a href="https://www.facebook.com/riz.life.crisis/" target="_blank" rel="noopener noreferrer" title="Facebook" style={iconLinkStyle}><FacebookIcon /></a>
            <a href="https://www.instagram.com/riz_razak_" target="_blank" rel="noopener noreferrer" title="Instagram" style={iconLinkStyle}><InstagramIcon /></a>
            <a href="https://www.tiktok.com/@riz.razak" target="_blank" rel="noopener noreferrer" title="TikTok" style={iconLinkStyle}><TikTokIcon /></a>
            <a href="https://www.tiktok.com/@rizrazak_" target="_blank" rel="noopener noreferrer" title="TikTok 2" style={iconLinkStyle}><TikTokIcon badge="2" /></a>
          </div>
        </div>
      </div>

    </div>
  )
}
