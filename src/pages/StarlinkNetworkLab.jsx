import React, { useState, useEffect, useRef } from 'react'
import { soundManager } from '../services/spacexSound'
import { 
  Wifi, Send, Sparkles
} from 'lucide-react'

export default function StarlinkNetworkLab() {
  const [selectedRoute, setSelectedRoute] = useState('lon_tokyo')
  const [packetTransmitting, setPacketTransmitting] = useState(false)

  const canvasRef = useRef(null)

  const routes = {
    lon_tokyo: {
      name: "London to Tokyo",
      distanceKm: 9600,
      laserHops: 5,
      fiberLatencyMs: 138,
      starlinkLaserLatencyMs: 82,
      savedMs: 56
    },
    ny_sydney: {
      name: "New York to Sydney",
      distanceKm: 16000,
      laserHops: 8,
      fiberLatencyMs: 195,
      starlinkLaserLatencyMs: 124,
      savedMs: 71
    },
    frankfurt_singapore: {
      name: "Frankfurt to Singapore",
      distanceKm: 10300,
      laserHops: 6,
      fiberLatencyMs: 145,
      starlinkLaserLatencyMs: 89,
      savedMs: 56
    }
  }

  const currentRoute = routes[selectedRoute]

  const sendPacketTest = () => {
    soundManager.init()
    setPacketTransmitting(true)
    soundManager.playBeep(1200, 0.05)

    setTimeout(() => {
      soundManager.playBeep(1600, 0.08)
      setPacketTransmitting(false)
      soundManager.playSuccess()
    }, currentRoute.starlinkLaserLatencyMs * 8)
  }

  // Canvas visualizer for satellite constellation & laser links
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let frame = 0
    let animId = null

    const render = () => {
      frame++
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const w = canvas.width
      const h = canvas.height
      const cx = w / 2
      const cy = h / 2
      const earthR = 85
      const orbitR = 135

      // Render Earth Globe
      ctx.fillStyle = '#0f172a'
      ctx.beginPath()
      ctx.arc(cx, cy, earthR, 0, Math.PI * 2)
      ctx.fill()
      ctx.strokeStyle = '#38bdf8'
      ctx.lineWidth = 2
      ctx.stroke()

      // Continents representation
      ctx.fillStyle = '#1e293b'
      ctx.beginPath()
      ctx.arc(cx - 20, cy - 10, 25, 0, Math.PI * 2)
      ctx.fill()
      ctx.beginPath()
      ctx.arc(cx + 25, cy + 15, 30, 0, Math.PI * 2)
      ctx.fill()

      // Starlink Satellite Constellation Ring
      const numSats = 18
      const satCoords = []
      for (let i = 0; i < numSats; i++) {
        const angle = (frame * 0.005) + (i * (Math.PI * 2 / numSats))
        const sx = cx + Math.cos(angle) * orbitR
        const sy = cy + Math.sin(angle) * (orbitR * 0.5) // tilted orbital plane
        satCoords.push({ x: sx, y: sy })

        // Satellite point
        ctx.fillStyle = '#38bdf8'
        ctx.beginPath()
        ctx.arc(sx, sy, 3, 0, Math.PI * 2)
        ctx.fill()
      }

      // Inter-satellite Optical Laser Links (OISL)
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)'
      ctx.lineWidth = 1
      for (let i = 0; i < numSats; i++) {
        const next = (i + 1) % numSats
        ctx.beginPath()
        ctx.moveTo(satCoords[i].x, satCoords[i].y)
        ctx.lineTo(satCoords[next].x, satCoords[next].y)
        ctx.stroke()
      }

      // If packet transmitting, show high-energy laser pulse along the mesh
      if (packetTransmitting) {
        const activeIdx = Math.floor((frame * 0.2) % numSats)
        const nextIdx = (activeIdx + 1) % numSats

        ctx.strokeStyle = '#22c55e'
        ctx.lineWidth = 3
        ctx.beginPath()
        ctx.moveTo(satCoords[activeIdx].x, satCoords[activeIdx].y)
        ctx.lineTo(satCoords[nextIdx].x, satCoords[nextIdx].y)
        ctx.stroke()

        // Downlink beam to user terminal
        ctx.strokeStyle = 'rgba(34, 197, 94, 0.6)'
        ctx.lineWidth = 2
        ctx.setLineDash([4, 4])
        ctx.beginPath()
        ctx.moveTo(satCoords[activeIdx].x, satCoords[activeIdx].y)
        ctx.lineTo(cx, cy)
        ctx.stroke()
        ctx.setLineDash([])
      }

      animId = requestAnimationFrame(render)
    }

    render()
    return () => cancelAnimationFrame(animId)
  }, [packetTransmitting])

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-sky-500/20 text-sky-400 border border-sky-500/30">
              SPACE LASER MESH NETWORK
            </span>
            <span className="text-xs font-mono text-zinc-400">STARLINK AUTONOMOUS CONSTELLATION</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight mt-1 text-white flex items-center gap-3">
            <Wifi className="text-sky-400" />
            Starlink Global Laser Mesh & Constellation Lab
          </h1>
          <p className="text-zinc-400 text-sm mt-0.5">
            Explore how signal speed, path length, and routing shape latency. These preset orbital and fiber examples are training scenarios, not live network measurements.
          </p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Interactive Constellation Visualizer */}
        <div className="lg:col-span-6 bg-zinc-950 p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-mono font-bold text-zinc-300">
                550 KM ORBITAL SHELL & OPTICAL LASER LINKS (OISL)
              </span>
              <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-sky-500/20 text-sky-300">
                SIMULATED LASER LINKS
              </span>
            </div>

            <div className="relative flex items-center justify-center bg-black/60 rounded-xl border border-white/5 py-4">
              <canvas
                ref={canvasRef}
                width={380}
                height={320}
                className="w-full max-w-[380px] h-[320px]"
              />

              {/* Status overlay */}
              <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[10px] font-mono text-zinc-400 space-y-0.5">
                <div>Argon Ion Thrusters: Automated Avoidance [ON]</div>
                <div>Phased Array Beamforming: Dual Polarization</div>
              </div>
            </div>
          </div>

          {/* Test Packet Action */}
          <div className="flex gap-3 mt-4 pt-3 border-t border-white/10">
            <button
              onClick={sendPacketTest}
              disabled={packetTransmitting}
              className="flex-1 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-mono font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-sky-600/30 transition-all text-xs"
            >
              <Send size={15} />
              {packetTransmitting ? 'ROUTING LASER BEAMS...' : 'SEND HIGH-SPEED PACKET OVER SPACE LASER MESH'}
            </button>
          </div>
        </div>

        {/* Right: Route Comparison & Physics Proof */}
        <div className="lg:col-span-6 space-y-4">
          
          {/* Route selector buttons */}
          <div className="bg-zinc-900/80 p-5 rounded-2xl border border-white/10 space-y-4">
            <h3 className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider">
              SELECT INTERCONTINENTAL PACKET ROUTE:
            </h3>

            <div className="grid grid-cols-1 gap-2 font-mono text-xs">
              {Object.entries(routes).map(([key, r]) => (
                <button
                  key={key}
                  onClick={() => setSelectedRoute(key)}
                  className={`p-3 rounded-xl text-left border transition-all flex justify-between items-center ${
                    selectedRoute === key
                      ? 'bg-sky-950/50 border-sky-500 text-white shadow-md shadow-sky-500/20'
                      : 'bg-zinc-900/60 border-white/10 text-zinc-400 hover:border-white/20'
                  }`}
                >
                  <span className="font-bold">{r.name}</span>
                  <span className="text-emerald-400 font-bold">{r.savedMs} ms FASTER</span>
                </button>
              ))}
            </div>

            {/* Latency head-to-head comparison */}
            <div className="pt-3 border-t border-white/5 space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Starlink Space Laser Mesh:</span>
                <span className="text-emerald-400 font-black text-base">{currentRoute.starlinkLaserLatencyMs} ms</span>
              </div>
              <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full" style={{ width: `${(currentRoute.starlinkLaserLatencyMs / currentRoute.fiberLatencyMs) * 100}%` }} />
              </div>

              <div className="flex justify-between items-center pt-1">
                <span className="text-zinc-400">Undersea Terrestrial Glass Fiber:</span>
                <span className="text-red-400 font-bold">{currentRoute.fiberLatencyMs} ms</span>
              </div>
              <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                <div className="bg-red-500 h-full w-full" />
              </div>
            </div>
          </div>

          {/* First Principles Physics Insight */}
          <div className="bg-gradient-to-r from-sky-950/40 to-indigo-950/40 p-5 rounded-2xl border border-sky-500/20 text-xs space-y-2.5">
            <div className="font-bold font-mono text-sky-300 flex items-center gap-2">
              <Sparkles size={16} />
              THE PHYSICS OF LIGHT IN VACUUM VS GLASS:
            </div>
            <p className="text-zinc-300 leading-relaxed font-sans">
              Glass fiber optics have a refractive index of n ≈ 1.47. This means light inside glass slows down from 300,000 km/s to approximately 204,000 km/s.
            </p>
            <p className="text-zinc-400 leading-relaxed font-sans">
              In low Earth orbit vacuum, n = 1.000. Starlink satellites bounce optical laser beams directly through the void of space at the ultimate cosmic speed limit (c), allowing financial trading algorithms and critical global communication to leapfrog terrestrial fiber cables.
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}
