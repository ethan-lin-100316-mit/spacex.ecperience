import { useId } from 'react'
import { flightStages } from '../services/missionSequence'

function Vehicle({ booster = true, firing = false }) {
  return <g><path d="M0 -68Q-13 -51 -13 -34V12H13V-34Q13 -51 0 -68Z" fill="#e4e9ee" /><path d="M-13 -15L-23 4V17L-13 10M13 -15L23 4V17L13 10" fill="#8b9aa8" /><path d="M-13 -29H13M-13 9H13" stroke="#566471" /><path d="M-5 -42H5V-34H-5Z" fill="#091421" />{booster && <><path d="M-13 15H13V85H-13Z" fill="#b0bbc5" /><path d="M-13 25H13M-13 71H13" stroke="#566471" /><path d="M-13 36L-22 30V40L-13 44M13 36L22 30V40L13 44" fill="#8999a8" /></>}{firing && <g className="vehicle-flame" transform={`translate(0 ${booster ? 85 : 13})`}><path d="M-11 0H11L8 25L0 61L-8 25Z" fill="#ffba72" opacity=".8" /><path d="M-6 0H6L0 39Z" fill="#fff5d8" /></g>}</g>
}

export default function MissionScene({ mission, view }) {
  const uid = useId().replace(/:/g, '')
  const { phase, stage, stageSeconds, flightSeconds, recovered, payloadDeployed, antennaAligned, fault } = mission
  const prelaunch = ['standby', 'hold', 'running'].includes(phase)
  const progress = Math.min(1, stageSeconds / flightStages.find(item => item.id === stage).duration)
  const space = !prelaunch && stage !== 'ascent'
  const outbound = ['cruise'].includes(stage)
  const angle = (flightSeconds * .022 - Math.PI / 2)
  const point = stage === 'ascent' ? { x: 260 + progress * 80, y: 145 - progress * 20 } : stage === 'stage2' ? { x: 340 - progress * 80, y: 125 - progress * 5 } : outbound ? { x: 350 + progress * 100, y: 120 - progress * 48 } : { x: 260 + 176 * Math.cos(angle), y: 220 + 100 * Math.sin(angle) }
  const title = prelaunch ? 'Vehicle at the launch pad' : stage === 'ascent' ? 'Powered ascent through the atmosphere' : stage === 'stage2' ? 'Stage separation and booster recovery' : stage === 'orbit' ? 'Spacecraft in Earth orbit' : stage === 'transfer' ? 'Coasting before the departure burn' : 'Outbound spacecraft and Earth communications'
  return <div className={`mission-visual ${space ? 'is-space' : ''}`}>
    <svg viewBox="0 0 520 360" role="img" aria-label={`${view === 'trajectory' ? 'Trajectory schematic: ' : ''}${title}. Illustration not to scale.`}>
      <defs><linearGradient id={`${uid}-sky`} x1="0" y1="0" x2="0" y2="1"><stop stopColor="#03070f" /><stop offset="1" stopColor={space ? '#07182a' : '#1f3b55'} /></linearGradient><radialGradient id={`${uid}-earth`} cx="30%" cy="25%"><stop stopColor="#58849b" /><stop offset=".6" stopColor="#17394c" /><stop offset="1" stopColor="#07111d" /></radialGradient><linearGradient id={`${uid}-horizon`}><stop stopColor="#405a66" /><stop offset=".5" stopColor="#a4cbdd" /><stop offset="1" stopColor="#1b3349" /></linearGradient></defs>
      <rect width="520" height="360" fill={`url(#${uid}-sky)`} />
      {Array.from({ length: 44 }, (_, i) => <circle key={i} cx={(i * 137 + 17) % 520} cy={(i * 73 + 11) % 300} r={i % 7 === 0 ? 1.25 : .65} fill="#d8e7f5" opacity={space ? .35 + i % 4 * .15 : .18} />)}
      <g stroke="#adceda" strokeOpacity=".055"><path d="M0 90H520M0 180H520M0 270H520M130 0V360M260 0V360M390 0V360" /></g>
      {view === 'trajectory' ? <>
        <circle cx="260" cy="220" r="73" fill={`url(#${uid}-earth)`} stroke="#75a6bd" strokeOpacity=".7" />
        <path d="M215 177L240 167L252 184L245 203L263 223L249 246L240 273M278 176L298 190L305 217L285 234L279 213L270 205Z" fill="#7a9c9c" opacity=".25" />
        <ellipse cx="260" cy="220" rx="176" ry="100" fill="none" stroke="#bcd9ec" strokeOpacity=".5" strokeDasharray="3 7" />
        <path d="M260 145L340 125L260 120" fill="none" stroke="#c7e1f2" strokeOpacity=".5" />
        {mission.missionType === 'deep-space' && <path d="M260 120Q365 130 470 60" fill="none" stroke="#e0c4a0" strokeOpacity={outbound ? '.9' : '.3'} strokeDasharray="5 6" />}
        <text x="260" y="224" textAnchor="middle" fill="#dcecf6" fontSize="10" letterSpacing="3">EARTH</text>
        <circle cx={prelaunch ? 260 : point.x} cy={prelaunch ? 145 : point.y} r="5" fill="#fff" /><circle cx={prelaunch ? 260 : point.x} cy={prelaunch ? 145 : point.y} r="12" fill="none" stroke="#c1dcee" strokeOpacity=".5" />
        {payloadDeployed && <g transform="translate(100 190)"><rect x="-8" y="-4" width="16" height="8" fill="#d9dfe4" /><path d="M-20 -9H-10V9H-20ZM10 -9H20V9H10Z" fill="#53768c" /><text x="0" y="25" textAnchor="middle" fill="#a4bdce" fontSize="8">PAYLOAD</text></g>}
        <text x="32" y="43" fill="#a9becf" fontSize="9" letterSpacing="2">MISSION GEOMETRY / SCHEMATIC</text>
      </> : prelaunch ? <>
        <path d="M0 308Q170 292 300 308T520 305V360H0Z" fill="#04090e" /><path d="M310 311V105H340V311M310 125H340M310 155H340M310 185H340M310 215H340M310 245H340M310 275H340" fill="none" stroke="#657889" strokeWidth="3" /><path d="M310 105L340 155L310 205L340 255L310 305" fill="none" stroke="#3c5264" strokeWidth="2" />
        <g transform="translate(275 224)"><Vehicle /></g><path d="M242 312H305" stroke="#a7b3bc" strokeWidth="5" />
        {phase === 'running' && <g fill="#a4b6c6" opacity=".18"><ellipse cx="250" cy="310" rx="60" ry="14" /><ellipse cx="315" cy="315" rx="65" ry="14" /></g>}
        <text x="30" y="45" fill="#a9becf" fontSize="9" letterSpacing="2">PAD A / GROUND CAMERA</text>
      </> : stage === 'ascent' ? <>
        <path d={`M-60 ${340 + progress * 160}Q260 ${265 + progress * 160} 580 ${340 + progress * 160}`} fill="none" stroke={`url(#${uid}-horizon)`} strokeWidth="45" />
        <g className="scene-moving-vehicle" transform={`translate(${260 + progress * 35} ${200 - progress * 25}) rotate(${progress * 24})`}><Vehicle firing={progress < 1} /></g><path d="M190 330Q220 260 245 225" fill="none" stroke="#def0fa" strokeOpacity=".16" strokeWidth="12" />
        <text x="30" y="45" fill="#a9becf" fontSize="9" letterSpacing="2">ASCENT / VEHICLE TRACKING</text>
      </> : <>
        <circle cx={outbound ? 86 : 210} cy={outbound ? 280 : 670} r={outbound ? 56 : 390} fill={`url(#${uid}-earth)`} stroke="#9dc8dc" strokeWidth="2" />
        {!outbound && <path d="M-20 342Q200 249 500 354" fill="none" stroke="#b1d5e5" strokeOpacity=".3" strokeWidth="7" />}
        <g className="scene-moving-vehicle" transform={`translate(${outbound ? 335 + progress * 35 : 300} ${outbound ? 140 : 158}) rotate(${stage === 'stage2' ? 55 : 65})`}><Vehicle booster={false} firing={stage === 'stage2' && progress < 1} />
          {antennaAligned && <g transform="translate(12 -18) rotate(40)"><path d="M0 0L22 0M22 -12Q9 0 22 12" fill="none" stroke="#dce5ef" strokeWidth="2" /></g>}
        </g>
        {stage === 'stage2' && !recovered && <g transform={`translate(${202 - progress * 65} ${220 + progress * 100}) rotate(-25)`}><rect x="-9" y="-35" width="18" height="60" fill="#8e9fae" /><path d="M-6 27L0 48L6 27Z" fill="#ffb66e" opacity=".7" /></g>}
        {payloadDeployed && <g transform="translate(180 145) rotate(-14)"><rect x="-9" y="-8" width="18" height="16" fill="#dbe4eb" /><path d="M-34 -13H-12V13H-34ZM12 -13H34V13H12Z" fill="#50738c" stroke="#9fb6c8" strokeWidth=".5" /></g>}
        {outbound && antennaAligned && <path d="M325 174L125 253" stroke={fault ? '#ef927a' : '#b0dfcb'} strokeWidth="1.5" strokeDasharray="5 6" className={!fault ? 'downlink-beam' : ''} />}
        <text x="30" y="45" fill="#a9becf" fontSize="9" letterSpacing="2">{outbound ? 'OUTBOUND / DEEP-SPACE CAMERA' : 'ONBOARD / EARTH HORIZON'}</text>
      </>}
      <text x="30" y="339" fill="#8ca5b9" fontSize="8" letterSpacing="1.2">{fault ? 'FLIGHT PROGRESSION SUSPENDED / FAULT RESPONSE' : mission.paused ? 'TRAINING SIMULATION PAUSED' : 'ILLUSTRATIVE FLIGHT / NOT TO SCALE'}</text>
      <path d="M15 20V12H23M497 12H505V20M15 340V348H23M497 348H505V340" fill="none" stroke="#c3d9e8" strokeOpacity=".35" />
    </svg>
  </div>
}
