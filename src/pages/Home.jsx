import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown, ArrowRight, BookOpen, Box, Check, CheckCircle2, ChevronRight, Compass, Cpu, Flame, Globe, HelpCircle, Layers, Radio, Wifi, Zap } from 'lucide-react'
import { engineeringMethod, labs, tracks } from '../data/trainingData'
import { useTraining } from '../components/TrainingContext'
import { assetUrl } from '../services/assets'
import { flightAcademy } from '../data/flightAcademy'
import '../academy.css'

const icons = { blueprint: Box, arena: Zap, propulsion: Flame, landing: Compass, structures: Layers, avionics: Cpu, mars: Globe, starlink: Wifi, mission: Radio, interview: HelpCircle }
const day = [
  ['01', 'Review the requirement', 'Define the problem before opening the simulator. What value, condition, or behavior would count as success?'],
  ['02', 'Predict, then test', 'Write down the expected response. Establish a baseline and change one input at a time.'],
  ['03', 'Investigate an anomaly', 'Reproduce a surprising result. Separate a model limitation from an input error or a real trend.'],
  ['04', 'Hand over the evidence', 'Record the configuration, result, remaining uncertainty, and the next test someone should run.'],
]

export default function Home() {
  const [method, setMethod] = useState(0)
  const { progress, selectTrack } = useTraining()
  const track = tracks.find(item => item.id === progress.track) || tracks[0]
  const completed = Object.keys(labs).filter(id => progress.labs[id]?.complete).length
  const next = track.modules.find(id => !progress.labs[id]?.complete) || track.modules[0]
  const trackCompleted = track.modules.filter(id => progress.labs[id]?.complete).length
  return <div className="home-page">
    <section className="home-hero" aria-labelledby="hero-title">
      <img className="hero-image" src={assetUrl('images/starbase-twilight.png')} alt="" fetchPriority="high" width="1672" height="941" />
      <div className="hero-shade" />
      <div className="hero-copy">
        <p className="eyebrow"><span className="live-dot" /> STARBASE / ENGINEERING FLIGHT DECK</p>
        <h1 id="hero-title">Build.<br /><span>Test. Fly.</span></h1>
        <p className="hero-description">Think through the trade. Run the experiment. Learn from the result. Step into a SpaceX-inspired engineering workstation, from the factory floor to flight control.</p>
        <div className="hero-actions"><Link to="/mission" className="action-primary">Enter mission control <ArrowRight size={18} /></Link><Link to="/#training-rotation" className="action-secondary">Start your rotation <ArrowDown size={16} /></Link></div>
        <p className="hero-footnote">Browser-based labs · Learn by doing · Progress saved on this device</p>
      </div>
      <div className="hero-caption"><span>01 / STARBASE</span><span>FROM FIRST PRINCIPLES TO FIRST FLIGHT</span></div>
    </section>
    <div className="training-stats" aria-label="Training overview"><div><strong>10</strong><span>Interactive workstations</span></div><div><strong>30</strong><span>Guided experiment tasks</span></div><div><strong>03</strong><span>Engineering rotations</span></div><div><strong>{String(completed).padStart(2, '0')}<small> / 10</small></strong><span>Labs you’ve completed</span></div></div>
    <section className="rotation-section" id="training-rotation" aria-labelledby="rotation-title">
      <div className="section-heading"><div><p className="eyebrow">01 / FIND YOUR ROLE</p><h2 id="rotation-title">A shift with a purpose.</h2><p>Pick a discipline. Follow four connected labs. Build an engineering notebook as you go.</p></div><span className="status-pill">No account needed</span></div>
      <div className="rotation-tabs" role="group" aria-label="Engineering rotation">{tracks.map(item => <button key={item.id} aria-pressed={track.id === item.id} className={track.id === item.id ? 'is-active' : ''} onClick={() => selectTrack(item.id)}>{item.role}<ChevronRight size={16} /></button>)}</div>
      <div className="rotation-body">
        <div className="rotation-scene"><img src={assetUrl('images/starbase-reflections.png')} loading="lazy" width="1672" height="941" alt="" /><div className="rotation-scene-copy"><p className="eyebrow">YOUR SELECTED ROTATION</p><h3>{track.title}</h3><p>{track.description}</p><Link className="action-primary" to={`/${next}`}>{trackCompleted === 4 ? 'Revisit this rotation' : trackCompleted ? 'Continue your rotation' : 'Enter your first lab'}<ArrowRight size={17} /></Link><span className="rotation-duration">≈ {track.modules.reduce((sum, id) => sum + labs[id].minutes, 0)} min · At your own pace</span></div></div>
        <div className="rotation-itinerary"><div className="itinerary-heading"><span>YOUR FLIGHT PLAN</span><span>{trackCompleted} / 4 complete</span></div><div className="rotation-progress" role="progressbar" aria-label="Rotation progress" aria-valuemin={0} aria-valuemax={4} aria-valuenow={trackCompleted}><span style={{width: `${trackCompleted * 25}%`}} /></div>{track.modules.map((id, index) => <Link to={`/${id}`} key={id} className="itinerary-step"><span className={`step-number ${progress.labs[id]?.complete ? 'done' : ''}`}>{progress.labs[id]?.complete ? <Check size={17} /> : `0${index + 1}`}</span><span><strong>{labs[id].short}</strong><small>{labs[id].discipline} · {labs[id].minutes} min</small></span><ArrowRight size={16} /></Link>)}<p className="itinerary-note">Each lab includes a briefing, three practical tasks, a knowledge check, and space for your findings. Progress stays in this browser.</p></div>
      </div>
    </section>
    <section className="academy-journey" aria-labelledby="academy-journey-title"><div className="section-heading"><div><p className="eyebrow">FEATURED MISSION / FROM THE PAD TO DEEP SPACE</p><h2 id="academy-journey-title">Liftoff is only the beginning.</h2><p>Choose an orbital delivery or a deep-space training flight. Inspect the vehicle, manage a hold, watch the ascent, authorize staging, deploy a payload, and bring the data home.</p></div></div><ol className="academy-journey-steps">{flightAcademy.map((phase, index) => <li key={phase.id}><span>0{index + 1}</span><strong>{phase.title}</strong><p>{phase.summary}</p></li>)}</ol><div className="academy-journey-actions"><Link to="/mission" className="action-primary">Take the flight director’s seat <ArrowRight size={17} /></Link><Link to="/guide" className="text-link">Learn the flight phases <BookOpen size={17} /></Link><p>Two flight plans · Fault recovery · Mission debrief<br />Fictional mission with compressed training time</p></div></section>
    <section id="workstations" aria-labelledby="workstations-title"><div className="section-heading"><div><p className="eyebrow">02 / THE WORKSTATIONS</p><h2 id="workstations-title">Choose your engineering problem.</h2><p>Follow a rotation or explore freely. Every console is an opportunity to test an idea.</p></div><Link to="/guide" className="text-link">Open the field guide <BookOpen size={17} /></Link></div><div className="workstation-grid">{Object.entries(labs).map(([id, lab], index) => { const Icon = icons[id]; return <Link to={`/${id}`} className={`workstation-card station-${id}`} key={id}><div className="workstation-top"><span className="workstation-icon"><Icon size={22} /></span><span className="module-number">{String(index + 1).padStart(2, '0')} / {lab.level}</span></div><p className="station-discipline">{lab.discipline}</p><h3>{lab.short}</h3><p>{lab.brief}</p><div className="workstation-bottom"><span>{progress.labs[id]?.complete ? <><CheckCircle2 size={14} /> Completed</> : `${lab.minutes} min · 3 tasks + self-check`}</span><ArrowRight size={18} /></div></Link> })}</div></section>
    <section className="method-section" aria-labelledby="method-title"><div><p className="eyebrow">03 / FIRST PRINCIPLES IN PRACTICE</p><h2 id="method-title">Good engineering starts<br />with a better question.</h2><p className="section-intro">Use this five-step practice loop to turn a promising idea into a decision you can explain. These are learning exercises, not a company operating procedure.</p><Link to="/arena" className="text-link">Practice a design trade <ArrowRight size={17} /></Link></div><div className="method-steps">{engineeringMethod.map((step, index) => <div className={`method-step ${index === method ? 'is-open' : ''}`} key={step.title}><button aria-expanded={method === index} aria-controls={`method-${index}`} onClick={() => setMethod(index)}><span>0{index + 1}</span><strong>{step.title}</strong><span>{index === method ? '−' : '+'}</span></button>{index === method && <div id={`method-${index}`}><p>{step.action}</p><p className="method-artifact"><b>LEAVE WITH</b>{step.artifact}</p></div>}</div>)}</div></section>
    <section className="shift-section" aria-labelledby="shift-title"><div className="section-heading"><div><p className="eyebrow">04 / A DAY AT THE CONSOLE</p><h2 id="shift-title">Practice the work behind the hardware.</h2><p>A fictional training shift built around the habits of experimental engineering.</p></div></div><div className="shift-grid">{day.map(([number, title, description]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>
    <section className="orbit-feature" aria-labelledby="orbit-title"><img src={assetUrl('images/dragon-orbit.png')} width="1672" height="941" loading="lazy" alt="" /><div><p className="eyebrow">05 / TAKE THE NEXT STEP</p><h2 id="orbit-title">The view is extraordinary.<br />The fundamentals get you there.</h2><p>Build confidence with the rocket equation, structural margins, fault tolerance, and a vocabulary you can use in your next engineering review.</p><Link to="/guide" className="action-secondary">Read the engineering field guide <ArrowRight size={18} /></Link></div><span className="art-caption">CONCEPT ART / ORBITAL PERSPECTIVE</span></section>
  </div>
}

