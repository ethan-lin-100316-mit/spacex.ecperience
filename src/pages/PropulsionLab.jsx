import React, { useState, useEffect, useRef } from 'react'
import { soundManager } from '../services/spacexSound'
import { 
  Flame, Gauge, Play, Square, AlertTriangle, CheckCircle, 
  RotateCcw, Info
} from 'lucide-react'

export default function PropulsionLab() {
  const [engineType, setEngineType] = useState('raptor3') // raptor3, merlin1d, draco
  const [isFiring, setIsFiring] = useState(false)
  const [throttle, setThrottle] = useState(85) // 40 - 100%
  const [ofRatio, setOfRatio] = useState(3.6) // Oxidizer to fuel ratio
  const [testTime, setTestTime] = useState(0)
  const [status, setStatus] = useState('IDLE - READY FOR PREBURNER CHILLDOWN')
  const [telemetryHistory, setTelemetryHistory] = useState([])
  const [isAnomalous, setIsAnomalous] = useState(false)

  const canvasRef = useRef(null)
  const animationFrameRef = useRef(null)

  // Engine specifications
  const specs = {
    raptor3: {
      name: "Raptor 3 (Full-Flow Staged Combustion)",
      propellant: "Sub-cooled Liquid CH4 + LOX",
      basePc: 350, // bar
      nominalOf: 3.6,
      maxThrust: 280, // tf (tons force)
      vacIsp: 380, // s
      chamberTemp: 3450, // K
      description: "SpaceX's engineering masterpiece: deleted all external bolted plumbing, integrated 3D printed regenerative channels, and achieved a world record 350 bar chamber pressure."
    },
    merlin1d: {
      name: "Merlin 1D (Gas Generator Cycle)",
      propellant: "RP-1 Kerosene + LOX",
      basePc: 108, // bar
      nominalOf: 2.36,
      maxThrust: 86, // tf
      vacIsp: 311, // s
      chamberTemp: 3100, // K
      description: "The workhorse of Falcon 9 with the highest thrust-to-weight ratio in rocketry history (~180:1). Uses a turbopump exhaust gas generator."
    },
    draco: {
      name: "Draco RCS Thruster",
      propellant: "N2O4 + MMH (Hypergolic)",
      basePc: 12, // bar
      nominalOf: 1.65,
      maxThrust: 0.04, // tf (400 N)
      vacIsp: 300, // s
      chamberTemp: 2200, // K
      description: "Hypergolic attitude control thrusters for Dragon capsule and Falcon 9 second stage. Instantaneous ignition without spark plugs."
    }
  }

  const currentSpec = specs[engineType]

  // Calculated telemetry based on throttle and O/F
  const effectiveChamberPressure = (currentSpec.basePc * (throttle / 100) * (1 - Math.abs(ofRatio - currentSpec.nominalOf) * 0.15)).toFixed(1)
  const effectiveThrust = (currentSpec.maxThrust * (throttle / 100) * (effectiveChamberPressure / currentSpec.basePc)).toFixed(1)
  
  // Specific impulse penalty if O/F deviates from stoichiometric
  const effectiveIsp = Math.round(currentSpec.vacIsp - Math.abs(ofRatio - currentSpec.nominalOf) * 28)
  const turbineRpm = Math.round(55000 * (throttle / 100))

  // Detect dangerous conditions
  useEffect(() => {
    if (isFiring) {
      if (engineType === 'raptor3' && ofRatio > 4.1) {
        setIsAnomalous(true)
        setStatus('CRITICAL ALERT: OXYGEN-RICH BURNOUT! Turbine blade erosion imminent!')
        soundManager.playAlarm()
      } else if (effectiveChamberPressure > 360) {
        setIsAnomalous(true)
        setStatus('WARNING: Chamber pressure exceeding burst threshold (360 bar)!')
        soundManager.playAlarm()
      } else {
        setIsAnomalous(false)
        setStatus('HOT FIRE NOMINAL // Full-flow staged combustion stable')
      }
    }
  }, [throttle, ofRatio, isFiring, effectiveChamberPressure, engineType])

  // Static Fire Toggle
  const startStaticFire = () => {
    soundManager.init()
    setIsFiring(true)
    setTestTime(0)
    setStatus('PRE-CHILL COMPLETE -> IGNITION COMMENCED')
    soundManager.playIgnitionRoar(15)
  }

  const stopStaticFire = (reason = 'TEST COMPLETE // SHUTDOWN NOMINAL') => {
    setIsFiring(false)
    setStatus(reason)
    soundManager.playBeep(440, 0.3, 'sawtooth')
  }

  // Timer and telemetry recording
  useEffect(() => {
    let interval = null
    if (isFiring) {
      interval = setInterval(() => {
        setTestTime(prev => {
          const next = +(prev + 0.1).toFixed(1)
          if (next >= 15) {
            stopStaticFire('MAX TEST DURATION REACHED (15.0s) - ENGINES CUT OFF')
            soundManager.playSuccess()
            return 15
          }
          return next
        })

        setTelemetryHistory(prev => [
          ...prev.slice(-15),
          { time: testTime, pc: parseFloat(effectiveChamberPressure), thrust: parseFloat(effectiveThrust) }
        ])
      }, 100)
    }
    return () => clearInterval(interval)
  }, [isFiring, testTime, effectiveChamberPressure, effectiveThrust])

  // Canvas Rocket Flame & Shock Diamond Particle Animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let frame = 0
    const render = () => {
      frame++
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const w = canvas.width
      const h = canvas.height
      const centerX = w / 2
      const nozzleY = 90

      // Draw Engine Bell (Nozzle)
      ctx.save()
      ctx.fillStyle = '#27272a'
      ctx.strokeStyle = '#71717a'
      ctx.lineWidth = 3

      // Engine combustion chamber & throat
      ctx.beginPath()
      ctx.moveTo(centerX - 35, 20)
      ctx.lineTo(centerX + 35, 20)
      ctx.lineTo(centerX + 22, 55) // throat
      ctx.lineTo(centerX + 65, nozzleY) // bell exit
      ctx.lineTo(centerX - 65, nozzleY)
      ctx.lineTo(centerX - 22, 55)
      ctx.closePath()
      ctx.fill()
      ctx.stroke()

      // Regenerative cooling tube texture
      ctx.strokeStyle = '#3f3f46'
      ctx.lineWidth = 1
      for (let i = -55; i <= 55; i += 10) {
        ctx.beginPath()
        ctx.moveTo(centerX + i * 0.4, 55)
        ctx.lineTo(centerX + i, nozzleY)
        ctx.stroke()
      }

      // Nozzle rim glow if firing
      if (isFiring) {
        ctx.strokeStyle = isAnomalous ? '#ef4444' : '#f59e0b'
        ctx.lineWidth = 3
        ctx.beginPath()
        ctx.ellipse(centerX, nozzleY, 65, 8, 0, 0, Math.PI * 2)
        ctx.stroke()
      }
      ctx.restore()

      // If firing, render supersonic exhaust jet with shock diamonds!
      if (isFiring) {
        const pFrac = throttle / 100
        const flameLength = 220 + pFrac * 100 + Math.sin(frame * 0.5) * 10
        const flameWidth = 65 * (0.8 + pFrac * 0.4)

        // Color based on engine propellant & O/F ratio
        let outerColor = 'rgba(56, 189, 248, 0.4)' // Raptor methalox cyan
        let coreColor = 'rgba(255, 255, 255, 0.95)'
        let diamondColor = 'rgba(125, 211, 252, 0.9)'

        if (engineType === 'raptor3') {
          if (ofRatio > 4.0) {
            // Dangerous Ox-rich copper green!
            outerColor = 'rgba(34, 197, 94, 0.7)'
            diamondColor = 'rgba(74, 222, 128, 0.95)'
          } else if (ofRatio < 3.2) {
            // Fuel-rich methane orange
            outerColor = 'rgba(249, 115, 22, 0.6)'
            diamondColor = 'rgba(251, 191, 36, 0.9)'
          }
        } else if (engineType === 'merlin1d') {
          // Kerosene orange/golden flame
          outerColor = 'rgba(249, 115, 22, 0.7)'
          coreColor = 'rgba(254, 240, 138, 0.95)'
          diamondColor = 'rgba(253, 224, 71, 0.9)'
        } else {
          // Hypergolic reddish purple
          outerColor = 'rgba(217, 70, 239, 0.6)'
          coreColor = 'rgba(253, 186, 116, 0.9)'
          diamondColor = 'rgba(244, 114, 182, 0.9)'
        }

        // Exhaust plume gradient
        const grad = ctx.createLinearGradient(centerX, nozzleY, centerX, nozzleY + flameLength)
        grad.addColorStop(0, coreColor)
        grad.addColorStop(0.3, outerColor)
        grad.addColorStop(0.8, outerColor.replace('0.6', '0.2').replace('0.7', '0.2'))
        grad.addColorStop(1, 'transparent')

        ctx.save()
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.moveTo(centerX - flameWidth, nozzleY)
        ctx.quadraticCurveTo(
          centerX - flameWidth * 1.3,
          nozzleY + flameLength * 0.5,
          centerX,
          nozzleY + flameLength
        )
        ctx.quadraticCurveTo(
          centerX + flameWidth * 1.3,
          nozzleY + flameLength * 0.5,
          centerX + flameWidth,
          nozzleY
        )
        ctx.closePath()
        ctx.fill()

        // Render Shock Diamonds (Mach Discs)
        // High chamber pressure produces visible regular supersonic standing wave diamonds
        const numDiamonds = 6
        const spacing = (flameLength * 0.65) / numDiamonds
        for (let d = 1; d <= numDiamonds; d++) {
          const dy = nozzleY + d * spacing + Math.sin(frame * 0.3 + d) * 2
          const dWidth = Math.max(6, (14 - d * 1.8) * pFrac)
          const dHeight = Math.max(8, (18 - d * 2) * pFrac)

          ctx.fillStyle = diamondColor
          ctx.beginPath()
          ctx.moveTo(centerX, dy - dHeight)
          ctx.lineTo(centerX + dWidth, dy)
          ctx.lineTo(centerX, dy + dHeight)
          ctx.lineTo(centerX - dWidth, dy)
          ctx.closePath()
          ctx.fill()
        }

        // High frequency exhaust turbulence sparks
        for (let s = 0; s < 12; s++) {
          const sparkY = nozzleY + Math.random() * flameLength
          const sparkX = centerX + (Math.random() - 0.5) * flameWidth * 1.2
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
          ctx.fillRect(sparkX, sparkY, 2, 4)
        }

        ctx.restore()
      } else {
        // Idle purge vapor
        ctx.fillStyle = 'rgba(255, 255, 255, 0.08)'
        ctx.beginPath()
        ctx.arc(centerX + Math.sin(frame * 0.05) * 6, nozzleY + 20, 18, 0, Math.PI * 2)
        ctx.fill()
      }

      animationFrameRef.current = requestAnimationFrame(render)
    }

    render()
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isFiring, throttle, ofRatio, engineType, isAnomalous])

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-orange-500/20 text-orange-400 border border-orange-500/30">
              MCGREGOR TEST BAY #3
            </span>
            <span className="text-xs font-mono text-zinc-400">TELEMETRY LINK: ACTIVE [50 kHz]</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight mt-1 text-white flex items-center gap-3">
            <Flame className="text-orange-500" />
            Propulsion & Raptor Hot-Fire Console
          </h1>
          <p className="text-zinc-400 text-sm mt-0.5">
            Real-time full-flow staged combustion test stand. Experience how SpaceX propulsion engineers tune fuel ratios, monitor turbopumps, and push chamber pressures to the edge of physics.
          </p>
        </div>

        {/* Engine switcher buttons */}
        <div className="flex items-center gap-2 bg-zinc-900/80 p-1.5 rounded-xl border border-white/10">
          {[
            { id: 'raptor3', label: 'Raptor 3 (Starship)' },
            { id: 'merlin1d', label: 'Merlin 1D (Falcon 9)' },
            { id: 'draco', label: 'Draco (Dragon)' }
          ].map(eng => (
            <button
              key={eng.id}
              onClick={() => {
                if (!isFiring) {
                  setEngineType(eng.id)
                  setOfRatio(specs[eng.id].nominalOf)
                }
              }}
              disabled={isFiring}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all ${
                engineType === eng.id
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                  : 'text-zinc-400 hover:text-white disabled:opacity-40'
              }`}
            >
              {eng.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Console Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Visual Hot-Fire Stand Canvas */}
        <div className="lg:col-span-5 bg-zinc-950/90 rounded-2xl border border-white/10 p-5 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${isFiring ? 'bg-red-500 animate-ping' : 'bg-emerald-500'}`} />
              <span className="text-xs font-mono font-bold tracking-wider text-zinc-300">
                {isFiring ? 'HOT-FIRE TEST IN PROGRESS' : 'STAND STATIC // CHILLDOWN READY'}
              </span>
            </div>
            <span className="font-mono text-sm text-zinc-400">
              T+{testTime.toFixed(1)}s / 15.0s
            </span>
          </div>

          {/* Canvas visualization */}
          <div className="relative my-4 flex items-center justify-center">
            <canvas
              ref={canvasRef}
              width={340}
              height={440}
              className="w-full max-w-[340px] h-[420px] rounded-xl bg-gradient-to-b from-zinc-900/60 to-black/80"
            />
            {isFiring && (
              <div className="absolute bottom-6 left-4 right-4 bg-black/70 backdrop-blur-md px-3 py-2 rounded-lg border border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400">SHOCK DIAMONDS:</span>
                <span className="text-cyan-400 font-bold">NOMINAL SUPERSONIC DISCS</span>
              </div>
            )}
          </div>

          {/* Test Control Buttons */}
          <div className="flex items-center gap-3 z-10 pt-2 border-t border-white/10">
            {!isFiring ? (
              <button
                onClick={startStaticFire}
                className="flex-1 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-red-500/25 transition-all font-mono"
              >
                <Play size={18} fill="white" />
                COMMENCE STATIC FIRE
              </button>
            ) : (
              <button
                onClick={() => stopStaticFire('MANUAL ABORT INITIATED BY OPERATOR')}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 transition-all font-mono animate-pulse"
              >
                <Square size={18} fill="white" />
                ABORT / CUT ENGINE (SHUTDOWN)
              </button>
            )}

            <button
              onClick={() => {
                setThrottle(85)
                setOfRatio(currentSpec.nominalOf)
                setTestTime(0)
                setTelemetryHistory([])
              }}
              disabled={isFiring}
              className="p-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl transition-all disabled:opacity-40"
              title="Reset Parameters"
            >
              <RotateCcw size={18} />
            </button>
          </div>
        </div>

        {/* Right Column: Live Telemetry Gauges & Controls */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Status banner */}
          <div className={`p-4 rounded-xl border font-mono text-sm flex items-center gap-3 transition-colors ${
            isAnomalous
              ? 'bg-red-950/60 border-red-500/50 text-red-200'
              : isFiring
              ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300'
              : 'bg-zinc-900/60 border-white/10 text-zinc-300'
          }`}>
            {isAnomalous ? <AlertTriangle className="text-red-400 shrink-0" size={20} /> : <CheckCircle className="text-emerald-400 shrink-0" size={20} />}
            <div className="flex-1 overflow-hidden">
              <div className="font-semibold">{status}</div>
              <div className="text-xs opacity-75 mt-0.5">Propellant: {currentSpec.propellant}</div>
            </div>
          </div>

          {/* Telemetry Dashboard Readouts */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-zinc-900/70 p-3.5 rounded-xl border border-white/10">
              <div className="text-zinc-400 text-xs font-mono">CHAMBER PRESSURE (Pc)</div>
              <div className="text-2xl font-extrabold font-mono text-white mt-1">
                {isFiring ? effectiveChamberPressure : '0.0'} <span className="text-xs text-zinc-400">bar</span>
              </div>
              <div className="text-[11px] text-zinc-500 mt-1">Rated limit: 350 bar</div>
            </div>

            <div className="bg-zinc-900/70 p-3.5 rounded-xl border border-white/10">
              <div className="text-zinc-400 text-xs font-mono">SEA-LEVEL THRUST</div>
              <div className="text-2xl font-extrabold font-mono text-orange-400 mt-1">
                {isFiring ? effectiveThrust : '0.0'} <span className="text-xs text-zinc-400">tf</span>
              </div>
              <div className="text-[11px] text-zinc-500 mt-1">{isFiring ? `${(effectiveThrust * 9.81).toFixed(0)} kN` : '0 kN'}</div>
            </div>

            <div className="bg-zinc-900/70 p-3.5 rounded-xl border border-white/10">
              <div className="text-zinc-400 text-xs font-mono">SPECIFIC IMPULSE (Isp)</div>
              <div className="text-2xl font-extrabold font-mono text-cyan-400 mt-1">
                {isFiring ? effectiveIsp : '---'} <span className="text-xs text-zinc-400">sec</span>
              </div>
              <div className="text-[11px] text-zinc-500 mt-1">Vacuum rated: {currentSpec.vacIsp}s</div>
            </div>

            <div className="bg-zinc-900/70 p-3.5 rounded-xl border border-white/10">
              <div className="text-zinc-400 text-xs font-mono">TURBOPUMP SHAFT</div>
              <div className="text-2xl font-extrabold font-mono text-emerald-400 mt-1">
                {isFiring ? (turbineRpm / 1000).toFixed(1) : '0.0'} <span className="text-xs text-zinc-400">k RPM</span>
              </div>
              <div className="text-[11px] text-zinc-500 mt-1">Cryogenic Bearings: OK</div>
            </div>
          </div>

          {/* Interactive Sliders: Throttle & O/F Ratio */}
          <div className="bg-zinc-900/70 p-5 rounded-2xl border border-white/10 space-y-5">
            <h3 className="text-sm font-bold font-mono tracking-wide text-zinc-200 flex items-center gap-2">
              <Gauge size={16} className="text-orange-400" />
              ENGINE TEST PARAMETER GIMBAL & VALVES
            </h3>

            {/* Throttle slider */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-1.5">
                <span className="text-zinc-300">THROTTLE SETPOINT</span>
                <span className="font-bold text-orange-400">{throttle}%</span>
              </div>
              <input
                type="range"
                min="40"
                max="100"
                value={throttle}
                onChange={(e) => setThrottle(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
              <div className="flex justify-between text-[11px] text-zinc-500 mt-1 font-mono">
                <span>Deep Throttle (40%)</span>
                <span>Nominal (85%)</span>
                <span>Max Power (100%)</span>
              </div>
            </div>

            {/* Oxidizer to Fuel Ratio slider */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-1.5">
                <span className="text-zinc-300">O/F MASS RATIO (OXYGEN / METHANE)</span>
                <span className={`font-bold ${ofRatio > 4.0 ? 'text-red-400' : 'text-cyan-400'}`}>
                  {ofRatio.toFixed(2)} : 1.00 {ofRatio > 4.0 && '(OX-RICH HAZARD!)'}
                </span>
              </div>
              <input
                type="range"
                min="2.8"
                max="4.3"
                step="0.05"
                value={ofRatio}
                onChange={(e) => setOfRatio(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
              <div className="flex justify-between text-[11px] text-zinc-500 mt-1 font-mono">
                <span>Fuel-Rich (Sooty, cooler)</span>
                <span className="text-emerald-400 font-bold">Nominal {currentSpec.nominalOf}</span>
                <span className="text-red-400 font-bold">Ox-Rich (Turbine torch)</span>
              </div>
            </div>
          </div>

          {/* First Principles Insight Box */}
          <div className="bg-gradient-to-r from-blue-950/40 to-indigo-950/40 p-4 rounded-xl border border-blue-500/20 text-xs text-zinc-300 space-y-2">
            <div className="flex items-center gap-2 font-bold font-mono text-blue-300">
              <Info size={16} />
              THE FIRST PRINCIPLES BEHIND RAPTOR 3:
            </div>
            <p className="leading-relaxed">
              Traditional rocket engines dump 2-4% of unburnt propellant out the side gas generator exhaust. Raptor’s <strong>Full-Flow Staged Combustion</strong> directs 100% of both fuel and oxidizer through separate high-pressure preburners and turbine drives before injecting them into the main combustion chamber. This yields the theoretical thermodynamic maximum specific impulse.
            </p>
            <p className="leading-relaxed text-zinc-400">
              Notice the shock diamonds: when exhaust gas leaves the nozzle under-expanded or over-expanded relative to atmospheric pressure, oblique shock waves bounce off the plume boundary, compressing and re-igniting fuel gas at repeating diamond focal points.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
