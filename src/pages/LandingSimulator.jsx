import React, { useState, useEffect, useRef } from 'react'
import { soundManager } from '../services/spacexSound'
import { clampTrim, stepAttitude } from '../services/attitudeControl'
import '../landing-controls.css'
import { 
  Rocket, Compass, RotateCcw, Flame, Crosshair, Sparkles
} from 'lucide-react'

export default function LandingSimulator() {
  const [vehicle, setVehicle] = useState('falcon9') // falcon9, superheavy
  const [targetType, setTargetType] = useState('droneship') // droneship, mechazilla
  const [gameStatus, setGameStatus] = useState('READY') // READY, FLYING, LANDED, CRASHED
  const [autopilot, setAutopilot] = useState(false)
  const [trimTarget, setTrimTarget] = useState(0)
  const [trimStep, setTrimStep] = useState(.25)
  const [attitudeAssist, setAttitudeAssist] = useState(true)
  const trimRef = useRef({ target: 0, step: .25, assist: true })
  const pilotRef = useRef(false)
  pilotRef.current = autopilot
  const flightStatusRef = useRef(gameStatus)
  flightStatusRef.current = gameStatus

  // Physics state
  const stateRef = useRef({
    x: 250, // horizontal pos (px)
    y: 40,  // vertical pos (px) from top
    vx: (Math.random() - 0.5) * 8,
    vy: 12,
    angle: 0, // radians
    angularVelocity: 0,
    rcsGas: 100,
    rcsFiring: 0,
    fuel: 100, // percentage
    throttle: 0, // 0 to 1
    tvcAngle: 0, // engine gimbal
    altitude: 1200, // meters simulated
    dryMass: 25000, // kg
    fuelMass: 15000, // kg
  })

  // Display telemetry for React UI
  const [telemetry, setTelemetry] = useState({
    altitude: 1200,
    descentRate: 48,
    horizontalSpeed: 0,
    tiltAngleDeg: 0,
    angularRate: 0,
    rcsGas: 100,
    fuel: 100,
    throttle: 0,
    gForce: 1.0,
    suicideBurnDistance: 320
  })

  const [message, setMessage] = useState('ENGAGE ENGINES FOR SUICIDE BURN HOVERSLAM')

  const canvasRef = useRef(null)
  const keysRef = useRef({ left: false, right: false, up: false, space: false })

  // Target coordinates in canvas
  const canvasWidth = 600
  const canvasHeight = 520
  const groundY = 480
  const targetX = canvasWidth / 2

  // Reset / Init Simulation
  const resetSimulation = (nextVehicle = vehicle) => {
    stateRef.current = {
      x: canvasWidth / 2 + (Math.random() - 0.5) * 200,
      y: 40,
      vx: (Math.random() - 0.5) * 12,
      vy: 14 + Math.random() * 5,
      angle: (Math.random() - 0.5) * 0.2,
      angularVelocity: 0,
      rcsGas: 100,
      rcsFiring: 0,
      fuel: 100,
      throttle: 0,
      tvcAngle: 0,
      altitude: 1200,
      dryMass: nextVehicle === 'falcon9' ? 25000 : 90000,
      fuelMass: nextVehicle === 'falcon9' ? 14000 : 45000,
    }
    setGameStatus('READY')
    setMessage('BOOSTER PASSING ENTRY BURN // READY FOR HOVERSLAM')
    setAutopilot(false)
    trimRef.current.target = 0
    trimRef.current.assist = true
    setTrimTarget(0)
    setAttitudeAssist(true)
    keysRef.current = { left: false, right: false, up: false, space: false }
    setTelemetry({ altitude: 1200, descentRate: 50.4, horizontalSpeed: 0, tiltAngleDeg: (stateRef.current.angle * 180 / Math.PI).toFixed(2), angularRate: 0, rcsGas: 100, fuel: 100, throttle: 0, gForce: 1.0, suicideBurnDistance: 320 })
  }

  const adjustTrim = degrees => {
    if (pilotRef.current || ['LANDED', 'CRASHED'].includes(flightStatusRef.current)) return
    trimRef.current.target = clampTrim(degrees)
    trimRef.current.assist = true
    setAttitudeAssist(true)
    setTrimTarget(trimRef.current.target)
  }

  const beginDescent = () => {
    if (gameStatus !== 'READY' && gameStatus !== 'FLYING') return
    soundManager.init()
    setGameStatus(status => status === 'READY' ? 'FLYING' : status)
    setMessage('DESCENT ACTIVE // MANAGE VELOCITY, DRIFT & PROPELLANT')
  }

  const holdControl = (direction, event) => {
    event.preventDefault()
    if (gameStatus !== 'READY' && gameStatus !== 'FLYING') return
    event.currentTarget.setPointerCapture(event.pointerId)
    keysRef.current[direction] = true
    beginDescent()
  }

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.closest?.('input, textarea, select, a, [contenteditable="true"]')) return
      if (e.target.closest?.('button') && ['Space', 'Enter'].includes(e.code)) return
      if (['KeyQ', 'KeyE', 'KeyZ'].includes(e.code)) {
        e.preventDefault()
        if (!e.repeat && !pilotRef.current) adjustTrim(e.code === 'KeyZ' ? 0 : trimRef.current.target + (e.code === 'KeyQ' ? -1 : 1) * trimRef.current.step)
        return
      }
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'KeyA', 'KeyD', 'KeyW', 'Space'].includes(e.code)) e.preventDefault()
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'KeyA', 'KeyD', 'KeyW', 'Space'].includes(e.code)) setGameStatus(status => status === 'READY' ? 'FLYING' : status)
      if (['ArrowLeft', 'KeyA'].includes(e.code)) keysRef.current.left = true
      if (['ArrowRight', 'KeyD'].includes(e.code)) keysRef.current.right = true
      if (['ArrowUp', 'KeyW', 'Space'].includes(e.code)) {
        keysRef.current.up = true
        soundManager.init()
      }
    }

    const handleKeyUp = (e) => {
      if (['ArrowLeft', 'KeyA'].includes(e.code)) keysRef.current.left = false
      if (['ArrowRight', 'KeyD'].includes(e.code)) keysRef.current.right = false
      if (['ArrowUp', 'KeyW', 'Space'].includes(e.code)) keysRef.current.up = false
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    const releaseControls = () => { keysRef.current = { left: false, right: false, up: false, space: false } }
    window.addEventListener('blur', releaseControls)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
      window.removeEventListener('blur', releaseControls)
    }
  }, [])

  // Physics & Animation Loop
  useEffect(() => {
    let animationId = null
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let lastFrame = null
    const loop = (timestamp) => {
      // Elapsed-time model scaling keeps the exercise usable across display refresh rates.
      const step = lastFrame === null ? 0 : Math.min((timestamp - lastFrame) / 1000, 0.05) * 3
      lastFrame = timestamp
      const s = stateRef.current

      if (gameStatus === 'FLYING') {
        // Illustrative demonstration controller, not flight-certified guidance.
        if (autopilot && s.fuel > 0) {
          // Calculate distance needed for hoverslam
          const g = 9.81
          const maxThrustAcc = 28 // m/s^2
          const burnDist = (s.vy * s.vy) / (2 * (maxThrustAcc - g))

          // Correct horizontal drift
          const targetOffset = targetX - s.x
          s.angle = Math.max(-0.25, Math.min(0.25, -targetOffset * 0.002 - s.vx * 0.03))
          s.angularVelocity = 0
          s.rcsFiring = 0

          // Trigger burn at suicide burn point
          const remainingDist = groundY - s.y
          if (remainingDist <= burnDist * 1.08 || remainingDist < 120) {
            // Modulate throttle to touch down at ~2 m/s
            const desiredDecel = (s.vy * s.vy) / (2 * Math.max(10, remainingDist))
            s.throttle = Math.min(1.0, Math.max(0.4, (desiredDecel + g) / maxThrustAcc))
          } else {
            s.throttle = 0
          }
        } else {
          // Manual controls
          if (keysRef.current.up && s.fuel > 0) {
            s.throttle = Math.min(1.0, s.throttle + 0.48 * step)
          } else {
            s.throttle = Math.max(0.0, s.throttle - 0.64 * step)
          }

          const direction = Number(keysRef.current.right) - Number(keysRef.current.left)
          Object.assign(s, stepAttitude(s, { targetDegrees: trimRef.current.target, direction, assist: trimRef.current.assist, dt: step }))
          // On release, stabilize the attitude reached by the coarse controls.
          if (direction) {
            trimRef.current.target = clampTrim(s.angle * 180 / Math.PI)
            setTrimTarget(trimRef.current.target)
          }
        }

        // Fuel consumption
        if (s.throttle > 0 && s.fuel > 0) {
          s.fuel = Math.max(0, s.fuel - s.throttle * 0.18 * step)
          if (Math.random() < 0.2) soundManager.playThrusterPulse()
        }
        if (s.fuel <= 0) s.throttle = 0

        // Forces: Gravity, Thrust, Aerodynamic Drag
        const g = 0.18 // scaled gravity
        const totalMass = s.dryMass + (s.fuel / 100) * s.fuelMass
        const maxThrust = vehicle === 'falcon9' ? 0.65 : 0.95
        const currentThrust = s.throttle * maxThrust * (s.dryMass / totalMass)

        // Drag opposes velocity vector
        const dragCoeff = 0.0012
        const dragX = -s.vx * Math.abs(s.vx) * dragCoeff
        const dragY = -s.vy * Math.abs(s.vy) * dragCoeff

        // Thrust vector aligned with rocket angle
        const thrustX = currentThrust * Math.sin(s.angle)
        const thrustY = -currentThrust * Math.cos(s.angle)

        s.vx += (thrustX + dragX) * step
        s.vy += (g + thrustY + dragY) * step

        s.x += s.vx * step
        s.y += s.vy * step

        // Convert canvas scale to simulated real-world telemetry
        const simulatedAlt = Math.max(0, Math.round((groundY - s.y) * 2.8))
        const simulatedDescent = (s.vy * 3.6).toFixed(1)
        const tiltDeg = (s.angle * (180 / Math.PI)).toFixed(2)
        const suicideDist = Math.round((s.vy * s.vy) / 0.5)

        setTelemetry({
          altitude: simulatedAlt,
          descentRate: simulatedDescent,
          horizontalSpeed: (s.vx * 3.6).toFixed(1),
          tiltAngleDeg: tiltDeg,
          angularRate: (s.angularVelocity * 180 / Math.PI * 3).toFixed(2),
          rcsGas: s.rcsGas.toFixed(1),
          fuel: Math.round(s.fuel),
          throttle: Math.round(s.throttle * 100),
          gForce: (1 + currentThrust / g).toFixed(1),
          suicideBurnDistance: suicideDist
        })

        // Check Touchdown / Catch condition
        if (s.y >= groundY - 35) {
          s.y = groundY - 35
          const speedOk = Math.abs(s.vy) < 4.2
          const angleOk = Math.abs(s.angle) < 0.12 // < ~7 degrees
          const targetDist = Math.abs(s.x - targetX)

          if (targetType === 'droneship') {
            const onDeck = targetDist < 65
            if (speedOk && angleOk && onDeck) {
              setGameStatus('LANDED')
              setMessage('TOUCHDOWN CONFIRMED // FALCON 9 SECURED ON DRONESHIP OCISLY!')
              soundManager.playSuccess()
            } else {
              setGameStatus('CRASHED')
              soundManager.playAlarm()
              if (!onDeck) setMessage('RUD: MISSED DRONESHIP DECK! (Splashed in ocean)')
              else if (!speedOk) setMessage(`RUD: HARD IMPACT! Landing velocity ${simulatedDescent} m/s exceeded leg threshold`)
              else setMessage('RUD: TILT COLLAPSE! Rocket tipped over upon touchdown')
            }
          } else {
            // Mechazilla catch
            const catchWindowOk = targetDist < 45
            if (speedOk && angleOk && catchWindowOk) {
              setGameStatus('LANDED')
              setMessage('MECHAZILLA CATCH SUCCESSFUL // SUPER HEAVY PINNED BY CHOPSTICKS!')
              soundManager.playSuccess()
            } else {
              setGameStatus('CRASHED')
              soundManager.playAlarm()
              if (!catchWindowOk) setMessage('RUD: MISSED CATCH PINS! Booster clipped the orbital launch mount')
              else setMessage('RUD: CATCH VELOCITY EXCEEDED CHOPSTICK DAMPENING LOAD')
            }
          }
        }
      }

      // ──────────────── Canvas Rendering ────────────────
      ctx.clearRect(0, 0, canvasWidth, canvasHeight)

      // Sky background gradient with Starbase Gulf of Mexico or Ocean
      const skyGrad = ctx.createLinearGradient(0, 0, 0, canvasHeight)
      skyGrad.addColorStop(0, '#020617') // deep space edge
      skyGrad.addColorStop(0.6, '#0f172a')
      skyGrad.addColorStop(1, '#1e293b')
      ctx.fillStyle = skyGrad
      ctx.fillRect(0, 0, canvasWidth, canvasHeight)

      // Stars
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'
      for (let i = 0; i < 20; i++) {
        ctx.fillRect((i * 47) % canvasWidth, (i * 29) % 200, 1.5, 1.5)
      }

      // Ocean Water
      ctx.fillStyle = '#0369a1'
      ctx.fillRect(0, groundY, canvasWidth, canvasHeight - groundY)
      // Water wave reflection
      ctx.fillStyle = '#0284c7'
      ctx.fillRect(0, groundY + 4, canvasWidth, 3)

      // Render Landing Platform
      if (targetType === 'droneship') {
        // Droneship barge
        const bargeWidth = 140
        const bargeLeft = targetX - bargeWidth / 2
        ctx.fillStyle = '#1e293b'
        ctx.strokeStyle = '#e2e8f0'
        ctx.lineWidth = 2
        ctx.fillRect(bargeLeft, groundY - 8, bargeWidth, 14)
        ctx.strokeRect(bargeLeft, groundY - 8, bargeWidth, 14)

        // Yellow Landing Bullseye
        ctx.strokeStyle = '#facc15'
        ctx.lineWidth = 3
        ctx.beginPath()
        ctx.arc(targetX, groundY - 1, 30, 0, Math.PI * 2)
        ctx.stroke()

        // SpaceX X logo on deck
        ctx.fillStyle = '#ffffff'
        ctx.font = 'bold 12px monospace'
        ctx.fillText('X', targetX - 5, groundY + 3)
      } else {
        // Mechazilla Launch Tower & Chopsticks
        const towerX = targetX + 50
        ctx.fillStyle = '#27272a'
        ctx.fillRect(towerX, groundY - 260, 24, 260) // Tower

        // Lattice trusses
        ctx.strokeStyle = '#52525b'
        ctx.lineWidth = 1.5
        for (let ty = groundY - 250; ty < groundY; ty += 25) {
          ctx.beginPath()
          ctx.moveTo(towerX, ty)
          ctx.lineTo(towerX + 24, ty + 20)
          ctx.stroke()
        }

        // Chopstick arms
        ctx.fillStyle = '#f59e0b'
        ctx.fillRect(targetX - 45, groundY - 60, 95, 10)
        ctx.fillStyle = '#b45309'
        ctx.fillRect(targetX - 45, groundY - 50, 8, 25)
      }

      // Draw Rocket Booster
      ctx.save()
      ctx.translate(s.x, s.y)
      ctx.rotate(s.angle)

      const rocketW = vehicle === 'falcon9' ? 14 : 22
      const rocketH = vehicle === 'falcon9' ? 70 : 85

      // Booster Body (Stainless Steel or Falcon 9 White/Sooty)
      if (vehicle === 'falcon9') {
        ctx.fillStyle = '#e2e8f0' // white rocket body
      } else {
        // Stainless steel gradient
        const metal = ctx.createLinearGradient(-rocketW / 2, 0, rocketW / 2, 0)
        metal.addColorStop(0, '#94a3b8')
        metal.addColorStop(0.5, '#f8fafc')
        metal.addColorStop(1, '#64748b')
        ctx.fillStyle = metal
      }
      ctx.fillRect(-rocketW / 2, -rocketH, rocketW, rocketH)

      // Soot weathering from re-entry
      ctx.fillStyle = 'rgba(0, 0, 0, 0.25)'
      ctx.fillRect(-rocketW / 2, -rocketH + 30, rocketW, rocketH - 40)

      // Grid Fins (deploy at top of stage)
      ctx.fillStyle = '#1e293b'
      ctx.fillRect(-rocketW / 2 - 10, -rocketH + 6, 10, 5)
      ctx.fillRect(rocketW / 2, -rocketH + 6, 10, 5)

      // Engine Nozzle at base
      ctx.fillStyle = '#3f3f46'
      ctx.beginPath()
      ctx.moveTo(-6, 0)
      ctx.lineTo(6, 0)
      ctx.lineTo(10, 10)
      ctx.lineTo(-10, 10)
      ctx.closePath()
      ctx.fill()

      // Landing Legs (Falcon 9)
      if (vehicle === 'falcon9') {
        const legDeployed = s.y > groundY - 140
        ctx.strokeStyle = '#0f172a'
        ctx.lineWidth = 3
        ctx.beginPath()
        if (legDeployed) {
          ctx.moveTo(-rocketW / 2, -5)
          ctx.lineTo(-rocketW / 2 - 18, 12)
          ctx.moveTo(rocketW / 2, -5)
          ctx.lineTo(rocketW / 2 + 18, 12)
        } else {
          ctx.moveTo(-rocketW / 2, -5)
          ctx.lineTo(-rocketW / 2, -28)
          ctx.moveTo(rocketW / 2, -5)
          ctx.lineTo(rocketW / 2, -28)
        }
        ctx.stroke()
      }

      // Engine Plume / Exhaust when burning
      if (s.throttle > 0 && s.fuel > 0) {
        const flameLength = 30 + s.throttle * 55 + Math.random() * 8
        const flameGrad = ctx.createLinearGradient(0, 10, 0, 10 + flameLength)
        flameGrad.addColorStop(0, '#ffffff')
        flameGrad.addColorStop(0.3, '#38bdf8')
        flameGrad.addColorStop(0.7, '#f97316')
        flameGrad.addColorStop(1, 'transparent')

        ctx.fillStyle = flameGrad
        ctx.beginPath()
        ctx.moveTo(-8, 10)
        ctx.lineTo(8, 10)
        ctx.lineTo(0, 10 + flameLength)
        ctx.closePath()
        ctx.fill()
      }

      // RCS cold-gas thruster puffs
      if (s.rcsFiring < 0 && gameStatus === 'FLYING') {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)'
        ctx.fillRect(rocketW / 2, -rocketH + 12, 14, 3)
      }
      if (s.rcsFiring > 0 && gameStatus === 'FLYING') {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)'
        ctx.fillRect(-rocketW / 2 - 14, -rocketH + 12, 14, 3)
      }

      ctx.restore()

      // Target Crosshair Indicator
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.5)'
      ctx.lineWidth = 1
      ctx.setLineDash([4, 4])
      ctx.beginPath()
      ctx.moveTo(targetX, 0)
      ctx.lineTo(targetX, groundY)
      ctx.stroke()
      ctx.setLineDash([])

      animationId = requestAnimationFrame(loop)
    }

    animationId = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(animationId)
  }, [gameStatus, autopilot, vehicle, targetType])

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              GNC SIMULATOR // LANDING ENERGY
            </span>
            <span className="text-xs font-mono text-zinc-400">GUIDANCE COMPUTER: ACTIVE</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight mt-1 text-white flex items-center gap-3">
            <Compass className="text-cyan-400" />
            Booster Hoverslam & Mechazilla Catch Simulator
          </h1>
          <p className="text-zinc-400 text-sm mt-0.5">
            Manage descent speed, lateral drift, and a limited propellant reserve. Compare manual control with the demonstration autopilot, then explain how your braking point affected the touchdown.
          </p>
        </div>

        {/* Vehicle & Target Switchers */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex bg-zinc-900 p-1 rounded-xl border border-white/10 text-xs font-mono">
            <button
              onClick={() => { setVehicle('falcon9'); resetSimulation('falcon9'); }}
              className={`px-3 py-1.5 rounded-lg transition-all ${vehicle === 'falcon9' ? 'bg-cyan-500 text-black font-bold' : 'text-zinc-400'}`}
            >
              Falcon 9
            </button>
            <button
              onClick={() => { setVehicle('superheavy'); resetSimulation('superheavy'); }}
              className={`px-3 py-1.5 rounded-lg transition-all ${vehicle === 'superheavy' ? 'bg-cyan-500 text-black font-bold' : 'text-zinc-400'}`}
            >
              Starship Super Heavy
            </button>
          </div>

          <div className="flex bg-zinc-900 p-1 rounded-xl border border-white/10 text-xs font-mono">
            <button
              onClick={() => { setTargetType('droneship'); resetSimulation(); }}
              className={`px-3 py-1.5 rounded-lg transition-all ${targetType === 'droneship' ? 'bg-blue-600 text-white font-bold' : 'text-zinc-400'}`}
            >
              Droneship (OCISLY)
            </button>
            <button
              onClick={() => { setTargetType('mechazilla'); resetSimulation(); }}
              className={`px-3 py-1.5 rounded-lg transition-all ${targetType === 'mechazilla' ? 'bg-orange-500 text-white font-bold' : 'text-zinc-400'}`}
            >
              Mechazilla Chopsticks
            </button>
          </div>
        </div>
      </div>

      {/* Main Simulator Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Canvas Display Viewport */}
        <div className="lg:col-span-8 bg-zinc-950 rounded-2xl border border-white/10 p-4 relative overflow-hidden flex flex-col items-center">
          
          {/* Status Overlay HUD */}
          <div className="landing-hud w-full flex items-center justify-between z-10 mb-2">
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${
                gameStatus === 'LANDED' ? 'bg-emerald-400' :
                gameStatus === 'CRASHED' ? 'bg-red-500 animate-ping' :
                'bg-cyan-400 animate-pulse'
              }`} />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-300">
                {gameStatus} — {message}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {gameStatus === 'READY' && <button className="begin-descent" onClick={beginDescent}>BEGIN DESCENT</button>}
              <button
                onClick={() => { keysRef.current = { left: false, right: false, up: false, space: false }; trimRef.current.target = clampTrim(stateRef.current.angle * 180 / Math.PI); setTrimTarget(trimRef.current.target); setAutopilot(!autopilot) }}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                  autopilot
                    ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/30'
                    : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                }`}
              >
                <Sparkles size={14} />
                {autopilot ? 'DEMO AUTOPILOT ACTIVE' : 'ENGAGE AUTOPILOT'}
              </button>

              <button
                onClick={() => resetSimulation()}
                className="p-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg"
                title="Restart Flight"
              >
                <RotateCcw size={16} />
              </button>
            </div>
          </div>

          {/* Interactive Canvas */}
          <div className="relative w-full max-w-[600px]">
            <canvas
              ref={canvasRef}
              width={canvasWidth}
              height={canvasHeight}
              className="w-full h-[480px] rounded-xl border border-zinc-800"
            />

            {/* Flight keyboard guide overlay */}
            <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-md px-3 py-2 rounded-lg border border-white/10 text-[11px] font-mono text-zinc-300 space-y-0.5">
              <div><span className="text-cyan-400 font-bold">W / SPACE / UP:</span> Throttle Engine</div>
              <div><span className="text-cyan-400 font-bold">A / D:</span> Coarse attitude · <span className="text-cyan-400">Q / E:</span> Fine trim</div>
              <div><span className="text-cyan-400 font-bold">Z:</span> Return attitude target to upright</div>
            </div>
          </div>

          {/* Touchscreen Manual Controls for Mobile / Click */}
          <div className="landing-controls w-full mt-3 pt-3 border-t border-white/10">
            <button
              onPointerDown={event => holdControl('left', event)}
              onPointerUp={() => { keysRef.current.left = false }}
              onPointerCancel={() => { keysRef.current.left = false }}
              onLostPointerCapture={() => { keysRef.current.left = false }}
              onKeyDown={event => { if ([' ', 'Enter'].includes(event.key)) { keysRef.current.left = true; beginDescent() } }}
              onKeyUp={() => { keysRef.current.left = false }}
              onBlur={() => { keysRef.current.left = false }}
              aria-label="Hold RCS left thruster"
              className="px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 active:bg-cyan-600 rounded-xl font-mono text-xs font-bold text-white transition-colors"
            >
              ← RCS LEFT <kbd>A</kbd>
            </button>

            <button
              onPointerDown={event => holdControl('up', event)}
              onPointerUp={() => { keysRef.current.up = false }}
              onPointerCancel={() => { keysRef.current.up = false }}
              onLostPointerCapture={() => { keysRef.current.up = false }}
              onKeyDown={event => { if ([' ', 'Enter'].includes(event.key)) { keysRef.current.up = true; beginDescent() } }}
              onKeyUp={() => { keysRef.current.up = false }}
              onBlur={() => { keysRef.current.up = false }}
              aria-label="Hold to fire center engine"
              className="flex-1 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 active:from-cyan-400 active:to-blue-400 rounded-xl font-mono text-xs font-bold text-white shadow-lg shadow-cyan-600/25 flex items-center justify-center gap-2"
            >
              <Flame size={16} />
              HOLD TO FIRE <kbd>SPACE</kbd>
            </button>

            <button
              onPointerDown={event => holdControl('right', event)}
              onPointerUp={() => { keysRef.current.right = false }}
              onPointerCancel={() => { keysRef.current.right = false }}
              onLostPointerCapture={() => { keysRef.current.right = false }}
              onKeyDown={event => { if ([' ', 'Enter'].includes(event.key)) { keysRef.current.right = true; beginDescent() } }}
              onKeyUp={() => { keysRef.current.right = false }}
              onBlur={() => { keysRef.current.right = false }}
              aria-label="Hold RCS right thruster"
              className="px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 active:bg-cyan-600 rounded-xl font-mono text-xs font-bold text-white transition-colors"
            >
              RCS RIGHT → <kbd>D</kbd>
            </button>
          </div>

          <section className="landing-attitude" aria-labelledby="attitude-title">
            <div className="attitude-title-row"><div><p className="eyebrow">PNEUMATIC ASSIST / TRAINING RCS</p><h2 id="attitude-title">Fine attitude control</h2></div><label><input type="checkbox" checked={attitudeAssist} disabled={autopilot} onChange={event => { trimRef.current.assist = event.target.checked; setAttitudeAssist(event.target.checked) }} /> Hold target angle</label></div>
            <p>Use small cold-gas-style corrections independently of engine throttle. The assist damps rotation toward your target; this is an illustrative controller, not a vehicle hardware model.</p>
            <div className="attitude-readouts"><div><small>ACTUAL ANGLE</small><strong>{Number(telemetry.tiltAngleDeg).toFixed(2)}°</strong></div><div><small>TARGET ANGLE</small><strong>{trimTarget.toFixed(2)}°</strong></div><div><small>ANGULAR RATE</small><strong>{Number(telemetry.angularRate).toFixed(2)}<em> °/s</em></strong></div><div><small>RCS GAS RESERVE</small><strong>{Number(telemetry.rcsGas).toFixed(1)}<em> %</em></strong></div></div>
            <div className="attitude-trim-controls"><label>NUDGE SIZE<select aria-label="Attitude nudge size" value={trimStep} onChange={event => { const value = Number(event.target.value); trimRef.current.step = value; setTrimStep(value) }}><option value={.25}>0.25° / FINE</option><option value={1}>1° / MEDIUM</option><option value={2}>2° / COARSE</option></select></label><button disabled={autopilot || ['LANDED', 'CRASHED'].includes(gameStatus)} onClick={() => adjustTrim(trimRef.current.target - trimRef.current.step)} aria-label={`Nudge attitude left ${trimStep} degrees`}>← −{trimStep}° <kbd>Q</kbd></button><button disabled={autopilot || ['LANDED', 'CRASHED'].includes(gameStatus)} onClick={() => adjustTrim(0)}>CENTER 0° <kbd>Z</kbd></button><button disabled={autopilot || ['LANDED', 'CRASHED'].includes(gameStatus)} onClick={() => adjustTrim(trimRef.current.target + trimRef.current.step)} aria-label={`Nudge attitude right ${trimStep} degrees`}>+{trimStep}° → <kbd>E</kbd></button></div>
            <label className="attitude-slider-label" htmlFor="attitude-target">TARGET TILT / −15° TO +15°</label><input id="attitude-target" className="attitude-slider" type="range" min="-15" max="15" step=".25" value={trimTarget} disabled={autopilot || ['LANDED', 'CRASHED'].includes(gameStatus)} aria-valuetext={`${trimTarget.toFixed(2)} degrees`} onChange={event => adjustTrim(Number(event.target.value))} />
            <p className="attitude-help" role="status">{autopilot ? 'Demo autopilot owns attitude. Disengage it to use manual trim.' : Number(telemetry.rcsGas) <= 0 ? 'RCS gas depleted. Reset the flight to replenish the reserve.' : 'Positive angle tips the nose right; negative tips it left. A/D overrides trim while held. Use Q/E for single nudges and Z to center.'}</p>
          </section>
        </div>

        {/* Telemetry Panel */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-zinc-900/80 p-5 rounded-2xl border border-white/10 space-y-4 font-mono">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
              <Rocket size={14} className="text-cyan-400" />
              FLIGHT TELEMETRY & INERTIAL GNC
            </h3>

            {/* Readouts */}
            <div className="space-y-3">
              <div className="flex justify-between items-center py-1.5 border-b border-zinc-800">
                <span className="text-zinc-400 text-xs">SIMULATED ALTITUDE:</span>
                <span className="text-lg font-bold text-white">{telemetry.altitude} m</span>
              </div>

              <div className="flex justify-between items-center py-1.5 border-b border-zinc-800">
                <span className="text-zinc-400 text-xs">DESCENT VELOCITY (Vy):</span>
                <span className={`text-lg font-bold ${telemetry.descentRate > 15 ? 'text-red-400' : 'text-emerald-400'}`}>
                  {telemetry.descentRate} m/s
                </span>
              </div>

              <div className="flex justify-between items-center py-1.5 border-b border-zinc-800">
                <span className="text-zinc-400 text-xs">HORIZONTAL DRIFT (Vx):</span>
                <span className="text-lg font-bold text-zinc-200">{telemetry.horizontalSpeed} m/s</span>
              </div>

              <div className="flex justify-between items-center py-1.5 border-b border-zinc-800">
                <span className="text-zinc-400 text-xs">TILT ANGLE (θ):</span>
                <span className={`text-lg font-bold ${Math.abs(telemetry.tiltAngleDeg) > 8 ? 'text-red-400' : 'text-cyan-400'}`}>
                  {telemetry.tiltAngleDeg}°
                </span>
              </div>

              <div className="flex justify-between items-center py-1.5 border-b border-zinc-800">
                <span className="text-zinc-400 text-xs">THROTTLE SETPOINT:</span>
                <span className="text-lg font-bold text-orange-400">{telemetry.throttle}%</span>
              </div>

              <div className="flex justify-between items-center py-1.5">
                <span className="text-zinc-400 text-xs">LANDING PROPELLANT:</span>
                <span className={`text-lg font-bold ${telemetry.fuel < 20 ? 'text-red-400' : 'text-emerald-400'}`}>
                  {telemetry.fuel}%
                </span>
              </div>

              {/* Fuel progress bar */}
              <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all ${telemetry.fuel < 20 ? 'bg-red-500' : 'bg-emerald-500'}`}
                  style={{ width: `${telemetry.fuel}%` }}
                />
              </div>
            </div>
          </div>

          {/* G-FOLD & Suicide Burn Physics Explanation */}
          <div className="bg-gradient-to-br from-cyan-950/40 to-blue-950/40 p-5 rounded-2xl border border-cyan-500/20 text-xs space-y-2.5">
            <div className="font-bold font-mono text-cyan-300 flex items-center gap-2">
              <Crosshair size={16} />
              WHY DO SPACEX ENGINEERS CALL IT A "HOVERSLAM"?
            </div>
            <p className="text-zinc-300 leading-relaxed">
              Airplanes and helicopters can hover. But an empty Falcon 9 booster weighs ~25 metric tons, while even a single Merlin 1D throttled to its lowest setting (39%) produces over 33 tons of thrust!
            </p>
            <p className="text-zinc-400 leading-relaxed">
              This means the rocket's minimum <strong>Thrust-to-Weight ratio (TWR) is {'>'} 1.3</strong>. If it stops descending 10 meters above the deck, it will immediately accelerate back up into the sky! Thus, the burn must reach 0 m/s at the exact fraction of a second the legs contact the ship.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
