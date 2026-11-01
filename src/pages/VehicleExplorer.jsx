import React, { useState } from 'react'
import { vehiclesBlueprintData } from '../data/spacexData'
import { soundManager } from '../services/spacexSound'
import { 
  Rocket, Crosshair, Sparkles, Box
} from 'lucide-react'

export default function VehicleExplorer() {
  const [selectedVehicle, setSelectedVehicle] = useState('starship_fullstack')
  const [selectedSubsystem, setSelectedSubsystem] = useState('hot_staging_ring')

  const vehicle = vehiclesBlueprintData[selectedVehicle]
  const currentSubsystem = vehicle.subsystems.find(s => s.id === selectedSubsystem) || vehicle.subsystems[0]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              CAD & SYSTEM ARCHITECTURE
            </span>
            <span className="text-xs font-mono text-zinc-400">VEHICLE BLUEPRINT EXPLORER</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight mt-1 text-white flex items-center gap-3">
            <Rocket className="text-cyan-400" />
            Interactive Rocket Blueprint & Subsystem Anatomy
          </h1>
          <p className="text-zinc-400 text-sm mt-0.5">
            Explore the radical mechanical and aerodynamic design choices that make Starship and Falcon 9 the most advanced orbital machines on Earth.
          </p>
        </div>

        {/* Vehicle Switcher */}
        <div className="flex bg-zinc-900 p-1 rounded-xl border border-white/10 text-xs font-mono">
          <button
            onClick={() => {
              setSelectedVehicle('starship_fullstack')
              setSelectedSubsystem('hot_staging_ring')
              soundManager.playBeep(950, 0.04)
            }}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              selectedVehicle === 'starship_fullstack' ? 'bg-cyan-500 text-black font-bold' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Starship (121m)
          </button>
          <button
            onClick={() => {
              setSelectedVehicle('falcon9')
              setSelectedSubsystem('grid_fins_ti')
              soundManager.playBeep(950, 0.04)
            }}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              selectedVehicle === 'falcon9' ? 'bg-cyan-500 text-black font-bold' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Falcon 9 (70m)
          </button>
        </div>
      </div>

      {/* Main Blueprint & Subsystem Split View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Interactive Rocket Blueprint Canvas / Diagram */}
        <div className="lg:col-span-7 bg-zinc-950 rounded-2xl border border-white/10 p-6 flex flex-col justify-between relative overflow-hidden">
          
          <div className="flex justify-between items-center z-10 mb-4">
            <span className="text-xs font-mono font-bold text-zinc-300 flex items-center gap-2">
              <Crosshair size={14} className="text-cyan-400" />
              CAD SCHEMATIC — {vehicle.name.toUpperCase()}
            </span>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-zinc-400">Scale: 1:200</span>
            </div>
          </div>

          {/* Interactive Visual Blueprint Diagram */}
          <div className="relative h-[480px] bg-gradient-to-b from-zinc-900/60 to-black/80 rounded-xl border border-cyan-500/20 p-4 flex items-center justify-center overflow-hidden">
            {/* Blueprint Grid Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-10" />

            {/* Vehicle Rendering Container */}
            <div className="relative z-10 flex flex-col items-center">
              {selectedVehicle === 'starship_fullstack' ? (
                /* Starship Full Stack Graphic */
                <div className="relative flex flex-col items-center w-36">
                  {/* Nosecone & Payload Bay */}
                  <div className="w-16 h-20 rounded-t-full bg-gradient-to-r from-slate-500 via-slate-200 to-slate-600 border border-slate-300 flex items-center justify-center relative shadow-lg">
                    {/* Forward Flap */}
                    <button
                      onClick={() => setSelectedSubsystem('flaps_actuators')}
                      className={`absolute -left-6 top-8 w-6 h-5 rounded-l bg-zinc-800 border border-cyan-400/60 hover:bg-cyan-500 transition-colors ${
                        selectedSubsystem === 'flaps_actuators' ? 'ring-2 ring-cyan-400 bg-cyan-600' : ''
                      }`}
                      title="Forward Flap"
                    />
                    <button
                      onClick={() => setSelectedSubsystem('flaps_actuators')}
                      className={`absolute -right-6 top-8 w-6 h-5 rounded-r bg-zinc-800 border border-cyan-400/60 hover:bg-cyan-500 transition-colors ${
                        selectedSubsystem === 'flaps_actuators' ? 'ring-2 ring-cyan-400 bg-cyan-600' : ''
                      }`}
                      title="Forward Flap"
                    />
                    <span className="text-[9px] font-mono text-black font-extrabold rotate-90">CARGO</span>
                  </div>

                  {/* Starship Upper Stage Body */}
                  <div className="relative w-16 h-36 bg-gradient-to-r from-slate-600 via-slate-300 to-slate-700 border-x border-slate-400 flex flex-col items-center justify-center">
                    {/* Heat Shield Tiles Indicator (Left Half) */}
                    <button
                      onClick={() => setSelectedSubsystem('hex_heat_shield')}
                      className={`absolute inset-y-0 left-0 w-8 bg-zinc-950/80 border-r border-zinc-700 hover:bg-zinc-900 transition-colors ${
                        selectedSubsystem === 'hex_heat_shield' ? 'ring-2 ring-orange-500' : ''
                      }`}
                      title="Thermal Protection System (Tiles)"
                    >
                      <span className="text-[8px] font-mono text-zinc-400 rotate-90 block mt-12">TPS TILES</span>
                    </button>

                    {/* Aft Flaps */}
                    <button
                      onClick={() => setSelectedSubsystem('flaps_actuators')}
                      className={`absolute -left-8 bottom-2 w-8 h-10 rounded-l bg-zinc-800 border border-cyan-400/60 hover:bg-cyan-500 transition-colors ${
                        selectedSubsystem === 'flaps_actuators' ? 'ring-2 ring-cyan-400 bg-cyan-600' : ''
                      }`}
                      title="Aft Flap"
                    />
                    <button
                      onClick={() => setSelectedSubsystem('flaps_actuators')}
                      className={`absolute -right-8 bottom-2 w-8 h-10 rounded-r bg-zinc-800 border border-cyan-400/60 hover:bg-cyan-500 transition-colors ${
                        selectedSubsystem === 'flaps_actuators' ? 'ring-2 ring-cyan-400 bg-cyan-600' : ''
                      }`}
                      title="Aft Flap"
                    />
                  </div>

                  {/* Hot Staging Ring (Interstage) */}
                  <button
                    onClick={() => {
                      setSelectedSubsystem('hot_staging_ring')
                      soundManager.playBeep(1200, 0.05)
                    }}
                    className={`relative w-16 h-7 bg-zinc-900 border-2 transition-all flex items-center justify-center ${
                      selectedSubsystem === 'hot_staging_ring'
                        ? 'border-orange-500 bg-orange-950/60 shadow-lg shadow-orange-500/50'
                        : 'border-zinc-500 hover:border-orange-400'
                    }`}
                  >
                    {/* Vent Louvers */}
                    <div className="flex gap-1">
                      <div className="w-1 h-4 bg-orange-400" />
                      <div className="w-1 h-4 bg-orange-400" />
                      <div className="w-1 h-4 bg-orange-400" />
                      <div className="w-1 h-4 bg-orange-400" />
                    </div>
                  </button>

                  {/* Super Heavy Booster Cylinder */}
                  <div className="relative w-16 h-60 bg-gradient-to-r from-slate-600 via-slate-200 to-slate-700 border-x border-slate-400 flex flex-col items-center justify-between py-2">
                    {/* Catch Pins */}
                    <button
                      onClick={() => setSelectedSubsystem('catch_pins')}
                      className={`absolute -top-1 w-20 h-3 flex justify-between px-0.5 ${
                        selectedSubsystem === 'catch_pins' ? 'ring-2 ring-yellow-400' : ''
                      }`}
                    >
                      <span className="w-2.5 h-2.5 bg-yellow-400 rounded-sm" title="Catch Pin Left" />
                      <span className="w-2.5 h-2.5 bg-yellow-400 rounded-sm" title="Catch Pin Right" />
                    </button>

                    {/* Welded Rings representation */}
                    <div className="w-full h-0.5 bg-zinc-400/50" />
                    <div className="w-full h-0.5 bg-zinc-400/50" />
                    <span className="text-[9px] font-mono font-bold text-zinc-600">SUPER HEAVY</span>
                    <div className="w-full h-0.5 bg-zinc-400/50" />
                    <div className="w-full h-0.5 bg-zinc-400/50" />
                  </div>

                  {/* Booster 33-Raptor Octoweb */}
                  <button
                    onClick={() => {
                      setSelectedSubsystem('booster_octoweb')
                      soundManager.playBeep(1200, 0.05)
                    }}
                    className={`w-18 h-6 bg-zinc-950 border-2 rounded-b-lg flex items-center justify-center transition-all ${
                      selectedSubsystem === 'booster_octoweb'
                        ? 'border-orange-500 bg-orange-950/60 shadow-lg shadow-orange-500/50'
                        : 'border-zinc-600 hover:border-orange-400'
                    }`}
                  >
                    <span className="text-[8px] font-mono text-orange-400 font-bold">33 RAPTORS</span>
                  </button>
                </div>
              ) : (
                /* Falcon 9 Blueprint Graphic */
                <div className="relative flex flex-col items-center w-28">
                  {/* Fairing */}
                  <div className="w-12 h-16 rounded-t-full bg-slate-100 border border-slate-300 flex items-center justify-center">
                    <span className="text-[8px] font-mono text-zinc-500 rotate-90">PAYLOAD</span>
                  </div>

                  {/* Second Stage */}
                  <div className="w-10 h-16 bg-slate-200 border-x border-slate-400 flex items-center justify-center">
                    <span className="text-[7px] font-mono text-zinc-500">MVAC</span>
                  </div>

                  {/* Interstage & Titanium Grid Fins */}
                  <button
                    onClick={() => setSelectedSubsystem('grid_fins_ti')}
                    className={`relative w-10 h-6 bg-zinc-800 border transition-all flex items-center justify-between px-1 ${
                      selectedSubsystem === 'grid_fins_ti' ? 'border-cyan-400 bg-cyan-950/60' : 'border-zinc-600'
                    }`}
                  >
                    <span className="w-2 h-4 bg-zinc-400 rounded-sm" />
                    <span className="text-[6px] font-mono text-cyan-300">GRID</span>
                    <span className="w-2 h-4 bg-zinc-400 rounded-sm" />
                  </button>

                  {/* Booster First Stage Cylinder with Landing Legs */}
                  <div className="relative w-10 h-64 bg-slate-100 border-x border-slate-300 flex flex-col justify-between py-2">
                    <span className="text-[8px] font-mono text-zinc-700 font-bold text-center mt-6">SPACEX</span>

                    {/* Carbon Fiber Landing Legs */}
                    <button
                      onClick={() => setSelectedSubsystem('landing_legs_cf')}
                      className={`absolute bottom-0 inset-x-0 h-16 border-t-2 border-dashed flex justify-between px-0.5 ${
                        selectedSubsystem === 'landing_legs_cf' ? 'border-emerald-400 bg-emerald-950/20' : 'border-zinc-400'
                      }`}
                    >
                      <span className="w-1 h-full bg-zinc-900" />
                      <span className="text-[6px] font-mono text-zinc-500 self-center">LEGS</span>
                      <span className="w-1 h-full bg-zinc-900" />
                    </button>
                  </div>

                  {/* Octaweb 9 Merlin Engines */}
                  <button
                    onClick={() => setSelectedSubsystem('merlin_octaweb')}
                    className={`w-12 h-6 bg-zinc-900 border-2 rounded-b-lg flex items-center justify-center ${
                      selectedSubsystem === 'merlin_octaweb' ? 'border-orange-500 bg-orange-950/60' : 'border-zinc-600'
                    }`}
                  >
                    <span className="text-[7px] font-mono text-orange-400">9 MERLINS</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Quick Specifications Strip */}
          <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-white/10 font-mono text-[11px]">
            <div>
              <span className="text-zinc-500 block">HEIGHT:</span>
              <span className="font-bold text-white">{vehicle.height}</span>
            </div>
            <div>
              <span className="text-zinc-500 block">DIAMETER:</span>
              <span className="font-bold text-white">{vehicle.diameter}</span>
            </div>
            <div>
              <span className="text-zinc-500 block">LIFTOFF THRUST:</span>
              <span className="font-bold text-orange-400">{vehicle.liftoffThrust.split(' (')[0]}</span>
            </div>
          </div>
        </div>

        {/* Right: Subsystem Deep-Dive & First Principles Analysis */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Subsystem Selector Buttons */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              SELECT COMPONENT TO INSPECT:
            </div>
            <div className="grid grid-cols-1 gap-2">
              {vehicle.subsystems.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => {
                    setSelectedSubsystem(sub.id)
                    soundManager.playBeep(1100, 0.04)
                  }}
                  className={`p-3 rounded-xl text-left border transition-all ${
                    selectedSubsystem === sub.id
                      ? 'bg-cyan-950/50 border-cyan-500 shadow-md shadow-cyan-500/20'
                      : 'bg-zinc-900/60 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono text-cyan-400 font-bold">{sub.category}</span>
                    <span className="text-[10px] font-mono text-zinc-500">{sub.massEffect}</span>
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">{sub.title}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Active Subsystem Detail Card */}
          <div className="bg-zinc-950 p-5 rounded-2xl border border-white/10 space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-white/10">
              <Box size={16} className="text-cyan-400" />
              <h3 className="text-base font-bold text-white">{currentSubsystem.title}</h3>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed font-sans">
              {currentSubsystem.description}
            </p>

            {/* First Principles Insight */}
            <div className="p-3.5 bg-black/60 rounded-xl border border-cyan-500/20 space-y-1.5 text-xs">
              <div className="font-bold font-mono text-cyan-300 flex items-center gap-1.5">
                <Sparkles size={14} />
                THE FIRST PRINCIPLES REASONING:
              </div>
              <p className="text-zinc-400 leading-relaxed">
                {currentSubsystem.firstPrinciplesWhy}
              </p>
            </div>

            {/* Mass / Performance Impact */}
            <div className="p-3 bg-zinc-900/80 rounded-xl border border-white/5 text-xs font-mono flex items-center justify-between">
              <span className="text-zinc-400">VEHICLE PERFORMANCE DELTA:</span>
              <span className="font-bold text-emerald-400">{currentSubsystem.massEffect}</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
