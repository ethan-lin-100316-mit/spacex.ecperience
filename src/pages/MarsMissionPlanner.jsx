import React, { useState, useEffect, useRef } from 'react'
import { marsMissionArchitecture } from '../data/spacexData'
import { soundManager } from '../services/spacexSound'
import { 
  Globe, Fuel
} from 'lucide-react'

export default function MarsMissionPlanner() {
  const [tankerCount, setTankerCount] = useState(8) // 6 to 12 tankers
  const [cargoMassTons, setCargoMassTons] = useState(100) // 50 to 150 tons
  const [transitDays] = useState(150) // 110 to 180 days
  const [activeStep, setActiveStep] = useState(0)

  const canvasRef = useRef(null)

  // Calculations
  const propellantCapacityTons = 1200
  const tankerCapacityTons = 150
  const totalPropellantLoaded = Math.min(propellantCapacityTons, tankerCount * tankerCapacityTons)
  const fullnessPercent = Math.round((totalPropellantLoaded / propellantCapacityTons) * 100)
  const canReachMars = fullnessPercent >= 85

  // Delta V available with this fuel and cargo
  const dryMass = 100 + cargoMassTons // Ship (100t) + Cargo
  const wetMass = dryMass + totalPropellantLoaded
  const isp = 380 // Vacuum Raptor 3
  const g0 = 9.80665
  const totalDeltaV = Math.round(isp * g0 * Math.log(wetMass / dryMass))

  // Solar System Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let frame = 0
    let animId = null

    const render = () => {
      frame++
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const cx = canvas.width / 2
      const cy = canvas.height / 2
      const earthRadius = 90
      const marsRadius = 160

      // Sun at center
      ctx.fillStyle = '#f59e0b'
      ctx.beginPath()
      ctx.arc(cx, cy, 14, 0, Math.PI * 2)
      ctx.fill()
      ctx.shadowColor = '#f59e0b'
      ctx.shadowBlur = 15

      // Orbits
      ctx.strokeStyle = '#334155'
      ctx.lineWidth = 1
      ctx.setLineDash([3, 3])
      // Earth orbit
      ctx.beginPath()
      ctx.arc(cx, cy, earthRadius, 0, Math.PI * 2)
      ctx.stroke()
      // Mars orbit
      ctx.beginPath()
      ctx.arc(cx, cy, marsRadius, 0, Math.PI * 2)
      ctx.stroke()
      ctx.setLineDash([])
      ctx.shadowBlur = 0

      // Planetary positions
      const earthAngle = frame * 0.008
      const marsAngle = frame * 0.0042 + 0.6 // Mars orbits slower (Kepler's 3rd Law)

      const ex = cx + Math.cos(earthAngle) * earthRadius
      const ey = cy + Math.sin(earthAngle) * earthRadius

      const mx = cx + Math.cos(marsAngle) * marsRadius
      const my = cy + Math.sin(marsAngle) * marsRadius

      // Earth planet
      ctx.fillStyle = '#38bdf8'
      ctx.beginPath()
      ctx.arc(ex, ey, 6, 0, Math.PI * 2)
      ctx.fill()

      // Mars planet
      ctx.fillStyle = '#ef4444'
      ctx.beginPath()
      ctx.arc(mx, my, 5, 0, Math.PI * 2)
      ctx.fill()

      // Hohmann Transfer Ellipse Path
      if (canReachMars) {
        ctx.strokeStyle = 'rgba(249, 115, 22, 0.7)'
        ctx.lineWidth = 2
        ctx.setLineDash([5, 4])
        ctx.beginPath()
        ctx.ellipse(cx, cy + (marsRadius - earthRadius) / 2, (earthRadius + marsRadius) / 2, marsRadius * 0.82, 0, 0, Math.PI)
        ctx.stroke()
        ctx.setLineDash([])

        // Starship position along transfer trajectory
        const progress = (frame * 0.015) % Math.PI
        const sx = cx + Math.cos(progress + Math.PI) * ((earthRadius + marsRadius) / 2)
        const sy = cy + (marsRadius - earthRadius) / 2 + Math.sin(progress) * (marsRadius * 0.82)

        ctx.fillStyle = '#ffffff'
        ctx.beginPath()
        ctx.arc(sx, sy, 3.5, 0, Math.PI * 2)
        ctx.fill()

        // Exhaust spark
        ctx.fillStyle = '#f97316'
        ctx.fillRect(sx - 2, sy + 3, 2, 4)
      }

      animId = requestAnimationFrame(render)
    }

    render()
    return () => cancelAnimationFrame(animId)
  }, [canReachMars])

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-orange-500/20 text-orange-400 border border-orange-500/30">
              INTERPLANETARY MISSION ARCHITECTURE
            </span>
            <span className="text-xs font-mono text-zinc-400">MARS TRANSIT & REFUELING</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight mt-1 text-white flex items-center gap-3">
            <Globe className="text-orange-400" />
            Starship Mars Mission & Orbital Refilling Planner
          </h1>
          <p className="text-zinc-400 text-sm mt-0.5">
            SpaceX's foundational vision is multi-planetary life. Earth's gravity well makes direct-to-Mars flight impossible; orbital tanker refilling is the mathematical key.
          </p>
        </div>
      </div>

      {/* Main Grid: Controls & Solar System Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Solar System Heliocentric Orbital Transfer Canvas */}
        <div className="lg:col-span-6 bg-zinc-950 p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-mono font-bold text-zinc-300">
                HELIOCENTRIC HOHMANN TRANSFER ORBIT
              </span>
              <span className={`px-2.5 py-1 rounded text-xs font-mono font-bold ${
                canReachMars ? 'bg-emerald-500/20 text-emerald-300' : 'bg-red-500/20 text-red-300'
              }`}>
                {canReachMars ? 'TRANSIT TRAJECTORY: VIABLE' : 'INSUFFICIENT PROPELLANT'}
              </span>
            </div>

            {/* Orbit Canvas */}
            <div className="relative flex items-center justify-center bg-black/60 rounded-xl border border-white/5 py-4">
              <canvas
                ref={canvasRef}
                width={380}
                height={340}
                className="w-full max-w-[380px] h-[340px]"
              />

              {/* Legend overlay */}
              <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[10px] font-mono text-zinc-400 space-y-0.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-400" /> Earth (1.0 AU)
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500" /> Mars (1.52 AU)
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-400" /> Starship Hyperbolic Arc
                </div>
              </div>
            </div>
          </div>

          {/* Transfer stats footer */}
          <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-white/10 font-mono text-xs text-center">
            <div className="bg-zinc-900/60 p-2.5 rounded-xl">
              <span className="text-zinc-500 text-[10px] block">FLIGHT DURATION:</span>
              <span className="font-bold text-white">{transitDays} days</span>
            </div>
            <div className="bg-zinc-900/60 p-2.5 rounded-xl">
              <span className="text-zinc-500 text-[10px] block">TMI VELOCITY:</span>
              <span className="font-bold text-orange-400">11.2 km/s</span>
            </div>
            <div className="bg-zinc-900/60 p-2.5 rounded-xl">
              <span className="text-zinc-500 text-[10px] block">SYNODIC INTERVAL:</span>
              <span className="font-bold text-cyan-400">26 months</span>
            </div>
          </div>
        </div>

        {/* Right: Orbital Refueling Controls & Delta-V Solver */}
        <div className="lg:col-span-6 space-y-4">
          
          {/* Tanker Refueling Controls */}
          <div className="bg-zinc-900/80 p-5 rounded-2xl border border-white/10 space-y-4">
            <h3 className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-2">
              <Fuel size={14} className="text-orange-400" />
              LOW EARTH ORBIT (LEO) REFUELING SETUP
            </h3>

            {/* Tanker flight slider */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-1.5">
                <span className="text-zinc-300">STARSHIP TANKER FLIGHTS</span>
                <span className="text-orange-400 font-bold">{tankerCount} Tanker Missions</span>
              </div>
              <input
                type="range"
                min="4"
                max="12"
                step="1"
                value={tankerCount}
                onChange={(e) => setTankerCount(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
              <div className="flex justify-between text-[11px] text-zinc-500 mt-1 font-mono">
                <span>4 Tankers (Partial)</span>
                <span>8 Tankers (Nominal)</span>
                <span>12 Tankers (Max)</span>
              </div>
            </div>

            {/* Cargo Mass Slider */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-1.5">
                <span className="text-zinc-300">PAYLOAD / CARGO TO MARS SURFACE</span>
                <span className="text-cyan-400 font-bold">{cargoMassTons} Metric Tons</span>
              </div>
              <input
                type="range"
                min="50"
                max="150"
                step="10"
                value={cargoMassTons}
                onChange={(e) => setCargoMassTons(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
            </div>

            {/* Propellant tank gauge */}
            <div className="pt-2 border-t border-white/5 space-y-1.5 font-mono text-xs">
              <div className="flex justify-between text-zinc-400">
                <span>ORBITAL CRYOGENIC LOAD:</span>
                <span className="font-bold text-white">{totalPropellantLoaded} / {propellantCapacityTons} tons ({fullnessPercent}%)</span>
              </div>
              <div className="w-full bg-zinc-800 h-2.5 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all ${canReachMars ? 'bg-emerald-500' : 'bg-red-500'}`}
                  style={{ width: `${fullnessPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Delta-V Budget Breakdown */}
          <div className="bg-zinc-900/80 p-5 rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
            <h3 className="font-bold text-zinc-300">INTERPLANETARY DELTA-V BUDGET:</h3>

            <div className="space-y-2">
              <div className="flex justify-between py-1 border-b border-zinc-800">
                <span className="text-zinc-400">Trans-Mars Injection (TMI):</span>
                <span className="text-white font-bold">~3,800 m/s</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-800">
                <span className="text-zinc-400">Mid-Course TCM Corrections:</span>
                <span className="text-white font-bold">~100 m/s</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-800">
                <span className="text-zinc-400">Mars Aerocapture (Free):</span>
                <span className="text-emerald-400 font-bold">~4,500 m/s (Atmospheric friction)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-800">
                <span className="text-zinc-400">Mars Supersonic Flip & Landing:</span>
                <span className="text-white font-bold">~650 m/s</span>
              </div>
              <div className="flex justify-between py-2 text-sm">
                <span className="text-cyan-300 font-bold">TOTAL STARSHIP DELTA-V:</span>
                <span className="text-orange-400 font-black text-base">{totalDeltaV.toLocaleString()} m/s</span>
              </div>
            </div>
          </div>

          {/* Flight Phase Steps */}
          <div className="bg-zinc-950 p-4 rounded-xl border border-white/10 space-y-2 font-mono text-xs">
            <div className="text-zinc-400 text-[11px] font-bold">MISSION PHASES:</div>
            <div className="grid grid-cols-5 gap-1 text-center">
              {marsMissionArchitecture.flightSteps.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-1.5 rounded-lg text-[10px] border transition-all ${
                    activeStep === idx
                      ? 'bg-orange-500 text-black font-bold border-orange-400'
                      : 'bg-zinc-900 text-zinc-400 border-white/5 hover:text-white'
                  }`}
                >
                  Step {s.step}
                </button>
              ))}
            </div>
            <p className="text-zinc-300 text-[11px] leading-relaxed pt-2 font-sans">
              <strong>{marsMissionArchitecture.flightSteps[activeStep].title}: </strong>
              {marsMissionArchitecture.flightSteps[activeStep].description}
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}
