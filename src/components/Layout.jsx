import { useEffect, useState } from 'react'
import { Link, Outlet, NavLink, useLocation } from 'react-router-dom'
import { soundManager } from '../services/spacexSound'
import { assetUrl } from '../services/assets'
import { BookOpen, Rocket, Flame, Compass, Layers, Cpu, Radio, HelpCircle, Menu, X, Volume2, VolumeX, Globe, Wifi, Zap, Box } from 'lucide-react'
import { labs } from '../data/trainingData'
import { TrainingProvider, useTraining } from './TrainingContext'
import LabTraining, { LabBriefing } from './LabTraining'

const navItems = [
  { path: '/', label: 'Overview', icon: Rocket },
  { path: '/blueprint', label: 'CAD Blueprint', icon: Box },
  { path: '/arena', label: 'Algorithm Arena', icon: Zap },
  { path: '/propulsion', label: 'Raptor Test', icon: Flame },
  { path: '/landing', label: 'Booster Catch', icon: Compass },
  { path: '/structures', label: 'Materials & Cryo', icon: Layers },
  { path: '/avionics', label: 'Avionics Code', icon: Cpu },
  { path: '/mars', label: 'Mars Planner', icon: Globe },
  { path: '/starlink', label: 'Starlink Mesh', icon: Wifi },
  { path: '/mission', label: 'Mission Control', icon: Radio },
  { path: '/interview', label: 'Interview Lab', icon: HelpCircle },
  { path: '/guide', label: 'Field Guide', icon: BookOpen },
]

function WorkstationLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isMuted, setIsMuted] = useState(soundManager.muted)
  const { pathname, hash } = useLocation()
  const { progress } = useTraining()
  const id = pathname.slice(1)
  const completed = Object.keys(labs).filter(key => progress.labs[key]?.complete).length
  useEffect(() => {
    if (hash) {
      const frame = requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView())
      return () => cancelAnimationFrame(frame)
    }
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname, hash])
  const toggleAudio = () => { const muted = soundManager.toggleMute(); setIsMuted(muted); if (!muted) soundManager.playBeep(880, 0.05) }
  const navigationLink = item => {
    const Icon = item.icon
    return <NavLink key={item.path} to={item.path} end={item.path === '/'} onClick={() => setMobileOpen(false)} className={({ isActive }) => `navigation-link ${isActive ? 'is-current' : ''}`}><Icon size={15} /><span>{item.label}</span>{progress.labs[item.path.slice(1)]?.complete && <span className="nav-complete" aria-label="Completed">✓</span>}</NavLink>
  }
  return <div className="site-shell" style={{ '--scene-ground': `url("${assetUrl('images/starbase-reflections.png')}")`, '--scene-orbit': `url("${assetUrl('images/dragon-orbit.png')}")` }}>
    <Link className="skip-link" to={{ pathname, hash: '#main-content' }}>Skip to main content</Link>
    <div className="environment-bar"><span><span className="live-dot" /> ENGINEERING TRAINING / SIMULATED TELEMETRY</span><span>EXPLORE · TEST · UNDERSTAND</span></div>
    <header className="site-header">
      <div className="brand-row"><Link to="/" className="site-brand" aria-label="SpaceX Engineering overview"><span className="brand-emblem"><Rocket size={21} /></span><span><strong>SPACEX <b>// ENG</b></strong><small>THE ENGINEERING EXPERIENCE</small></span></Link><div className="header-actions"><Link to="/#training-rotation" className="header-progress">{String(completed).padStart(2, '0')}<span> / 10 LABS</span></Link><Link to="/guide" className="guide-shortcut"><BookOpen size={17} /><span>Field guide</span></Link><button className="audio-toggle" onClick={toggleAudio} aria-label={isMuted ? 'Unmute simulation audio' : 'Mute simulation audio'} aria-pressed={!isMuted}>{isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}</button><button className="menu-toggle" aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X size={23} /> : <Menu size={23} />}</button></div></div>
      <nav aria-label="Workstations" className="desktop-nav">{navItems.filter(item => item.path !== '/guide').map(navigationLink)}</nav>
      <nav aria-label="Mobile workstations" id="mobile-navigation" className="mobile-nav" hidden={!mobileOpen}>{navItems.map(navigationLink)}</nav>
    </header>
    <main id="main-content" tabIndex={-1} className={`site-main ${pathname === '/' ? 'is-home' : 'is-workstation'}`}>
      {labs[id] && <LabBriefing id={id} />}
      <div className="workstation-content"><Outlet /></div>
      {labs[id] && <LabTraining key={id} id={id} />}
    </main>
    <footer className="site-footer"><div><Link to="/" className="footer-brand"><Rocket size={18} /> SPACEX // ENG</Link><p>An independent SpaceX-inspired learning project.<br />Illustrative simulations and concept artwork. Not affiliated with SpaceX.</p></div><div><Link to="/guide">Equations, glossary & primary references <BookOpen size={16} /></Link><p>Make a prediction. Run a test. Leave good notes.</p></div></footer>
  </div>
}

export default function Layout() { return <TrainingProvider><WorkstationLayout /></TrainingProvider> }
