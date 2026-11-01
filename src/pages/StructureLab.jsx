import React, { useState } from 'react'
import { soundManager } from '../services/spacexSound'
import { 
  Layers, Activity, Hammer, Flame, Snowflake, RotateCcw
} from 'lucide-react'

export default function StructureLab() {
  const [selectedMaterial, setSelectedMaterial] = useState('stainless')
  const [tankPressure, setTankPressure] = useState(6.0) // bar
  const [wallThickness, setWallThickness] = useState(4.0) // mm
  const [testTemp, setTestTemp] = useState('cryo') // 'cryo' (-196C) or 'reentry' (800C)
  const [isPressurizing, setIsPressurizing] = useState(false)
  const [burstStatus, setBurstStatus] = useState('NOMINAL') // NOMINAL, RUPTURED

  const materials = {
    stainless: {
      name: "304L / 30X Stainless Steel (Starship)",
      costPerKg: 4, // USD
      density: 7930, // kg/m^3
      yield20C: 290, // MPa
      yieldCryo: 580, // MPa (+100% gain at -196C!)
      yield800C: 175, // MPa (retains strength!)
      weldSpeedHours: 4, // hours per 9m ring
      needsLeewardTiles: false,
      story: "Musk's radical First Principles pivot in 2018: steel gets 50% stronger and tougher at liquid oxygen temperatures (-196°C), and its melting point (1450°C) means the wind-shadow side needs ZERO heavy heat shield tiles."
    },
    carbon: {
      name: "Carbon Fiber Composite (Original BFR)",
      costPerKg: 135,
      density: 1550,
      yield20C: 850,
      yieldCryo: 820,
      yield800C: 0, // Epoxy binder degrades and vaporizes at 250C!
      weldSpeedHours: 96,
      needsLeewardTiles: true,
      story: "Initially chosen for high strength-to-weight ratio. But carbon fiber epoxy degrades at 200°C, requiring full-body 360-degree thermal shielding, huge autoclave cleanrooms, and high cost."
    },
    aluminum: {
      name: "Aluminum-Lithium 2195 (Falcon 9 & Shuttle)",
      costPerKg: 45,
      density: 2710,
      yield20C: 550,
      yieldCryo: 620,
      yield800C: 40, // Melts at 600C
      weldSpeedHours: 24,
      needsLeewardTiles: true,
      story: "Extremely light and stiff. Used in Falcon 9 tanks and SLS. Requires friction-stir welding and complex cleanroom tooling. Melts easily during orbital re-entry without extensive tiles."
    },
    titanium: {
      name: "Titanium Gr.5 (Falcon 9 Grid Fins)",
      costPerKg: 110,
      density: 4430,
      yield20C: 880,
      yieldCryo: 920,
      yield800C: 380,
      weldSpeedHours: 48,
      needsLeewardTiles: false,
      story: "Used on Falcon 9 hypersonic grid fins. Can survive glowing orange re-entry heat without burning up, but is extraordinarily expensive and difficult to forge in 9-meter cylinder rings."
    }
  }

  const mat = materials[selectedMaterial]

  // Starship Geometry: 9m diameter -> radius = 4.5m
  const tankRadius = 4.5 // meters
  const pressurePa = tankPressure * 100000 // Convert bar to Pascal
  const thicknessM = wallThickness / 1000 // Convert mm to meters

  // Hoop stress formula: sigma = (P * r) / t
  const hoopStressMPa = (pressurePa * tankRadius) / thicknessM / 1000000

  // Allowable strength based on test condition
  const allowableYieldMPa = testTemp === 'cryo' ? mat.yieldCryo : mat.yield800C
  const safetyFactor = (allowableYieldMPa / hoopStressMPa).toFixed(2)
  const isRuptured = hoopStressMPa > allowableYieldMPa

  // Calculate Dry Mass of 50-meter Starship hull
  const cylinderSurfaceArea = 2 * Math.PI * tankRadius * 50 // m^2
  const hullMassTons = ((cylinderSurfaceArea * thicknessM * mat.density) / 1000).toFixed(1)
  const rawMaterialCostTotal = Math.round((hullMassTons * 1000 * mat.costPerKg))

  // Run Cryo Pressure Test
  const runProofTest = () => {
    soundManager.init()
    setIsPressurizing(true)
    setBurstStatus('PRESSURIZING...')

    let currentP = 2.0
    const interval = setInterval(() => {
      currentP += 0.5
      setTankPressure(+currentP.toFixed(1))
      soundManager.playBeep(600 + currentP * 80, 0.05)

      // Test rupture condition
      const currentHoop = (currentP * 100000 * tankRadius) / thicknessM / 1000000
      if (currentHoop > allowableYieldMPa) {
        clearInterval(interval)
        setIsPressurizing(false)
        setBurstStatus('BURST RUPTURE!')
        soundManager.playAlarm()
      } else if (currentP >= 8.5) {
        clearInterval(interval)
        setIsPressurizing(false)
        setBurstStatus('PROOF TEST PASSED (8.5 bar with 1.4x Flight Margin)')
        soundManager.playSuccess()
      }
    }, 250)
  }

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-purple-500/20 text-purple-400 border border-purple-500/30">
              STARBASE MEGA BAY // STRUCTURES LAB
            </span>
            <span className="text-xs font-mono text-zinc-400">FEA & METALLURGY DESK</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight mt-1 text-white flex items-center gap-3">
            <Layers className="text-purple-400" />
            Materials & Cryogenic Proof Test Studio
          </h1>
          <p className="text-zinc-400 text-sm mt-0.5">
            Test the First Principles physics that made Elon Musk scrap the carbon-fiber Starship tooling in favor of 304L Stainless Steel welded in the Texas wind.
          </p>
        </div>
      </div>

      {/* Material Switcher Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {Object.entries(materials).map(([key, data]) => (
          <button
            key={key}
            onClick={() => {
              setSelectedMaterial(key)
              setBurstStatus('NOMINAL')
            }}
            className={`p-4 rounded-xl text-left border transition-all ${
              selectedMaterial === key
                ? 'bg-purple-950/50 border-purple-500 shadow-lg shadow-purple-500/20'
                : 'bg-zinc-900/60 border-white/10 hover:border-white/20'
            }`}
          >
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">{key}</div>
            <div className="text-sm font-bold text-white mt-1 line-clamp-1">{data.name.split(' (')[0]}</div>
            <div className="text-xs text-purple-300 font-mono mt-2">${data.costPerKg} / kg</div>
          </button>
        ))}
      </div>

      {/* Main Analysis Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Interactive Tank Visualizer & Pressure Rig */}
        <div className="lg:col-span-6 bg-zinc-950 p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-mono font-bold text-zinc-300">
                9-METER DIAMETER TANK PRESSURE CHAMBER
              </span>
              <span className={`px-2.5 py-1 rounded text-xs font-mono font-bold ${
                isRuptured ? 'bg-red-500/20 text-red-400 border border-red-500/40 animate-pulse' :
                'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
              }`}>
                STATUS: {isRuptured ? 'STRUCTURAL RUPTURE (BURST)' : burstStatus}
              </span>
            </div>

            {/* Cylinder Tank Visualization Graphic */}
            <div className="relative h-64 bg-zinc-900/60 rounded-xl border border-zinc-800 flex items-center justify-center overflow-hidden">
              {/* Starship tank silhouette */}
              <div 
                className={`relative w-44 h-52 rounded-2xl border-4 transition-all duration-300 flex flex-col items-center justify-center ${
                  isRuptured
                    ? 'border-red-500 bg-red-950/40 shadow-2xl shadow-red-500/50 scale-105'
                    : selectedMaterial === 'stainless'
                    ? 'border-slate-300 bg-gradient-to-r from-slate-700 via-slate-400 to-slate-800 shadow-xl'
                    : selectedMaterial === 'carbon'
                    ? 'border-zinc-700 bg-gradient-to-r from-black via-zinc-900 to-zinc-950'
                    : 'border-amber-600 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-800'
                }`}
              >
                {/* Internal cryo fluid */}
                <div 
                  className={`w-full absolute bottom-0 rounded-b-xl transition-all ${
                    testTemp === 'cryo' ? 'bg-cyan-500/30' : 'bg-orange-500/40'
                  }`}
                  style={{ height: `${Math.min(95, tankPressure * 12)}%` }}
                />

                {/* Welded weld rings */}
                <div className="w-full h-0.5 bg-black/40 my-3 z-10" />
                <div className="w-full h-0.5 bg-black/40 my-3 z-10" />
                <div className="w-full h-0.5 bg-black/40 my-3 z-10" />

                {/* Readout inside cylinder */}
                <div className="z-10 bg-black/70 px-3 py-1.5 rounded-lg border border-white/20 text-center">
                  <div className="text-[10px] font-mono text-zinc-400">INTERNAL PRESSURE</div>
                  <div className="text-xl font-mono font-extrabold text-white">{tankPressure} bar</div>
                  <div className="text-[10px] font-mono text-cyan-300 mt-0.5">{testTemp === 'cryo' ? 'Subcooled LOX (-196°C)' : 'Re-entry Plasma (800°C)'}</div>
                </div>

                {/* Rupture crack overlay */}
                {isRuptured && (
                  <div className="absolute inset-0 flex items-center justify-center bg-red-600/30 z-20">
                    <span className="text-red-300 font-extrabold font-mono text-xl tracking-widest rotate-12">
                      ⚡ BURST ⚡
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Test buttons */}
          <div className="flex gap-3 mt-4 pt-4 border-t border-white/10">
            <button
              onClick={runProofTest}
              disabled={isPressurizing}
              className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-mono font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30 transition-all disabled:opacity-50"
            >
              <Activity size={16} />
              {isPressurizing ? 'RAMPING PRESSURE...' : 'RUN CRYO PROOF TEST'}
            </button>

            <button
              onClick={() => {
                setTankPressure(6.0)
                setBurstStatus('NOMINAL')
              }}
              className="p-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl"
              title="Reset Pressure"
            >
              <RotateCcw size={16} />
            </button>
          </div>
        </div>

        {/* Right: Calculations, Controls & Elon's First Principles Story */}
        <div className="lg:col-span-6 space-y-4">
          
          {/* Controls: Pressure slider & Wall thickness */}
          <div className="bg-zinc-900/80 p-5 rounded-2xl border border-white/10 space-y-4">
            <h3 className="text-xs font-mono font-bold text-zinc-300 tracking-wider">
              TANK PARAMETER TUNING
            </h3>

            {/* Test Temperature selector */}
            <div className="flex gap-2">
              <button
                onClick={() => setTestTemp('cryo')}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-2 border transition-all ${
                  testTemp === 'cryo'
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50'
                    : 'bg-zinc-800 text-zinc-400 border-transparent'
                }`}
              >
                <Snowflake size={14} /> Cryogenic Tank Test (-196°C)
              </button>

              <button
                onClick={() => setTestTemp('reentry')}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-2 border transition-all ${
                  testTemp === 'reentry'
                    ? 'bg-orange-500/20 text-orange-300 border-orange-500/50'
                    : 'bg-zinc-800 text-zinc-400 border-transparent'
                }`}
              >
                <Flame size={14} /> Re-entry Heat Wall (800°C)
              </button>
            </div>

            {/* Wall thickness slider */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-1 text-zinc-300">
                <span>WALL THICKNESS (t)</span>
                <span className="text-purple-400 font-bold">{wallThickness} mm</span>
              </div>
              <input
                type="range"
                min="2.0"
                max="6.0"
                step="0.5"
                value={wallThickness}
                onChange={(e) => setWallThickness(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />
              <div className="flex justify-between text-[11px] text-zinc-500 mt-1 font-mono">
                <span>2 mm (Ultralight, risk of buckle)</span>
                <span>4 mm (Starship standard)</span>
                <span>6 mm (Heavy)</span>
              </div>
            </div>

            {/* Tank Pressure manual slider */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-1 text-zinc-300">
                <span>CHAMBER PRESSURE (P)</span>
                <span className="text-cyan-400 font-bold">{tankPressure} bar</span>
              </div>
              <input
                type="range"
                min="1.0"
                max="9.5"
                step="0.1"
                value={tankPressure}
                onChange={(e) => setTankPressure(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
              <div className="flex justify-between text-[11px] text-zinc-500 mt-1 font-mono">
                <span>Flight Pressure (6.0 bar)</span>
                <span>NASA Safety Factor (1.4x = 8.4 bar)</span>
              </div>
            </div>
          </div>

          {/* Real Physics Stress Matrix */}
          <div className="grid grid-cols-2 gap-3 font-mono">
            <div className="bg-zinc-900/80 p-3.5 rounded-xl border border-white/10">
              <div className="text-zinc-400 text-xs">CALCULATED HOOP STRESS</div>
              <div className="text-2xl font-extrabold text-white mt-1">
                {Math.round(hoopStressMPa)} <span className="text-xs text-zinc-400">MPa</span>
              </div>
              <div className="text-[10px] text-zinc-500 mt-1">Formula: σ = (P · r) / t</div>
            </div>

            <div className="bg-zinc-900/80 p-3.5 rounded-xl border border-white/10">
              <div className="text-zinc-400 text-xs">SAFETY FACTOR (SF)</div>
              <div className={`text-2xl font-extrabold mt-1 ${isRuptured ? 'text-red-400' : 'text-emerald-400'}`}>
                {safetyFactor}x
              </div>
              <div className="text-[10px] text-zinc-500 mt-1">Flight target: {'>'} 1.25x</div>
            </div>

            <div className="bg-zinc-900/80 p-3.5 rounded-xl border border-white/10">
              <div className="text-zinc-400 text-xs">TOTAL AIRFRAME MASS</div>
              <div className="text-2xl font-extrabold text-purple-400 mt-1">
                {hullMassTons} <span className="text-xs text-zinc-400">tons</span>
              </div>
              <div className="text-[10px] text-zinc-500 mt-1">50m cylinder surface</div>
            </div>

            <div className="bg-zinc-900/80 p-3.5 rounded-xl border border-white/10">
              <div className="text-zinc-400 text-xs">RAW MATERIAL COST</div>
              <div className="text-2xl font-extrabold text-emerald-400 mt-1">
                ${(rawMaterialCostTotal / 1000).toFixed(0)}k
              </div>
              <div className="text-[10px] text-zinc-500 mt-1">At ${mat.costPerKg} per kg</div>
            </div>
          </div>

          {/* Historical First Principles Story Card */}
          <div className="bg-gradient-to-r from-purple-950/40 to-indigo-950/40 p-4 rounded-xl border border-purple-500/20 text-xs text-zinc-300 space-y-2">
            <div className="font-bold font-mono text-purple-300 flex items-center gap-2">
              <Hammer size={16} />
              WHY 304L STAINLESS STEEL WAS A GENIUS FIRST PRINCIPLES DECISION:
            </div>
            <p className="leading-relaxed">
              {mat.story}
            </p>
            <div className="pt-2 border-t border-purple-500/20 flex items-center justify-between text-zinc-400">
              <span>Ring Fabrication Speed:</span>
              <span className="font-bold text-white font-mono">{mat.weldSpeedHours} hours / ring</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
