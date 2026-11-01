import React, { useState } from 'react'
import { soundManager } from '../services/spacexSound'
import { 
  Cpu, Terminal, Play, Shield, Zap
} from 'lucide-react'

export default function FlightSoftwareLab() {
  const [selectedScenario, setSelectedScenario] = useState('voting')
  const [isRunning, setIsRunning] = useState(false)
  const [testResults, setTestResults] = useState(null)
  const [computerStates, setComputerStates] = useState([
    { id: 1, name: "Core A (x86_64)", status: "NOMINAL", value: 350.2, bitFlipped: false },
    { id: 2, name: "Core B (x86_64)", status: "NOMINAL", value: 350.1, bitFlipped: false },
    { id: 3, name: "Core C (x86_64)", status: "NOMINAL", value: 350.3, bitFlipped: false },
  ])
  const [terminalLogs, setTerminalLogs] = useState([
    "[SYS] SpaceX Flight Software (FSW) Linux 6.8-rt initialized",
    "[TMR] Triple Modular Redundancy voter armed on bus CAN-0",
    "[GNC] Guidance loop locked at 1000 Hz",
    "[READY] Awaiting operator execution command..."
  ])

  const scenarios = {
    voting: {
      title: "Triple Modular Redundancy (TMR) Voter",
      description: "When cosmic rays flip a bit in Computer 2's memory during orbit, the software voter must detect the outlier and enforce 2-out-of-3 quorum without dropping a single 1kHz control cycle.",
      code: `// SpaceX C++20 Flight Executive: Triple Modular Redundancy (TMR)
#include <algorithm>
#include <vector>
#include <cmath>

struct SensorReading {
    double pressure_bar;
    uint32_t timestamp_us;
    bool parity_valid;
};

// 2-out-of-3 Fault Tolerant Majority Voting Logic
double VoteOnSensorStream(double c1, double c2, double c3, double max_tolerance = 5.0) {
    std::vector<double> readings = {c1, c2, c3};
    std::sort(readings.begin(), readings.end());
    
    double median = readings[1]; // Middle value is inherently safe from single outlier
    
    // Check if any computer drifted beyond tolerance (Single Event Upset / SEU)
    if (std::abs(c1 - median) > max_tolerance) FlagComputerFault(1);
    if (std::abs(c2 - median) > max_tolerance) FlagComputerFault(2);
    if (std::abs(c3 - median) > max_tolerance) FlagComputerFault(3);
    
    return median; // Broadcast to Thrust Vector Control (TVC)
}`,
      simulate: (flipBit) => {
        const c1 = 350.2
        const c2 = flipBit ? 1892.4 : 350.1 // Cosmic ray bit flip!
        const c3 = 350.3
        const sorted = [c1, c2, c3].sort((a, b) => a - b)
        const voted = sorted[1]
        const hasFault = flipBit
        return {
          c1, c2, c3, voted, hasFault,
          faultyCore: flipBit ? 2 : null,
          log: flipBit
            ? "SEU DETECTED! Core B memory bit-flip (1892.4 bar). Voter isolated Core B and used Median: 350.2 bar. Zero vehicle perturbation."
            : "All 3 Flight Computers agree within 0.1 bar tolerance. Quorum verified."
        }
      }
    },
    hoverslam: {
      title: "Suicide Burn Ignition Distance Trigger",
      description: "Falcon 9 must compute the exact altitude at which to light the Merlin engine for the landing burn. Lighting 100ms early wastes fuel; lighting 100ms late causes a crater.",
      code: `// Real-Time Hoverslam Trigger
double CalculateIgnitionAltitude(double vy_ms, double empty_mass_kg, double thrust_kN) {
    const double g0 = 9.80665;
    double max_decel = (thrust_kN * 1000.0 / empty_mass_kg) - g0;
    
    // Kinematic stopping distance formula: d = v^2 / (2 * a)
    // Add 8% safety cushion for aerodynamic drag transition
    double stopping_distance = (vy_ms * vy_ms) / (2.0 * max_decel) * 1.08;
    return stopping_distance;
}`,
      simulate: () => {
        const vy = 55 // m/s
        const mass = 26000 // kg
        const thrust = 845 // kN
        const maxDecel = (thrust * 1000 / mass) - 9.81
        const dist = ((vy * vy) / (2 * maxDecel) * 1.08).toFixed(1)
        return {
          voted: dist,
          hasFault: false,
          log: `Descent velocity: 55 m/s. Max deceleration: ${maxDecel.toFixed(1)} m/s^2. Ignition point calculated: ${dist} meters AGL.`
        }
      }
    },
    quickDisconnect: {
      title: "Pad Umbilical Auto-Retract Interlock",
      description: "At T-0, the giant quick-disconnect (QD) plates that fuel Starship must slam shut and swing back in less than 400 milliseconds only if all Raptor engines hit {'>'} 280 bar chamber pressure.",
      code: `// T-0 QD Arm Retract Safety Interlock
bool VerifyChopstickQDRelease(const EngineTelemetry& telem) {
    // Require unanimous confirmation across all 33 booster engines
    for (int i = 0; i < 33; ++i) {
        if (telem.chamber_pressure[i] < 280.0) {
            TriggerPadAbort("Raptor " + std::to_string(i) + " under-pressure!");
            return false;
        }
    }
    // High-speed pneumatic release command
    FirePyrotechnicPistons();
    ActuateHydraulicRetractArms();
    return true;
}`,
      simulate: () => {
        return {
          voted: "33/33 ENGINES NOMINAL",
          hasFault: false,
          log: "All 33 Raptor 3 engines verified at 350 bar. Pneumatic quick-disconnect retracted in 280ms. Pad clear for liftoff!"
        }
      }
    }
  }

  const currentScen = scenarios[selectedScenario]

  // Simulate cosmic ray bit flip
  const triggerBitFlip = () => {
    soundManager.init()
    soundManager.playAlarm()
    setComputerStates([
      { id: 1, name: "Core A (x86_64)", status: "NOMINAL", value: 350.2, bitFlipped: false },
      { id: 2, name: "Core B (x86_64)", status: "BIT-FLIP SEU", value: 1892.4, bitFlipped: true },
      { id: 3, name: "Core C (x86_64)", status: "NOMINAL", value: 350.3, bitFlipped: false },
    ])
    setTerminalLogs(prev => [
      ...prev,
      "[ALERT] Solar radiation event detected on Core B register RAX!",
      "[CAN-0] Raw reading Core B = 1892.4 bar (DIVERGENCE > 1500 bar)"
    ])
  }

  const runCode = () => {
    soundManager.init()
    setIsRunning(true)
    soundManager.playBeep(980, 0.08)

    setTimeout(() => {
      const isBitFlipped = computerStates.some(c => c.bitFlipped)
      const res = currentScen.simulate(isBitFlipped)
      setIsRunning(false)
      setTestResults(res)
      soundManager.playSuccess()

      setTerminalLogs(prev => [
        ...prev,
        `[EXEC] JavaScript scenario simulation complete (illustrative C++ shown above)`,
        `[VOTER] Result: ${res.log}`
      ])

      if (isBitFlipped) {
        // Reset after voter cleans it
        setTimeout(() => {
          setComputerStates([
            { id: 1, name: "Core A (x86_64)", status: "NOMINAL", value: 350.2, bitFlipped: false },
            { id: 2, name: "Core B (x86_64)", status: "REBOOTED & SYNCED", value: 350.2, bitFlipped: false },
            { id: 3, name: "Core C (x86_64)", status: "NOMINAL", value: 350.3, bitFlipped: false },
          ])
          setTerminalLogs(p => [...p, "[SYS] Core B state re-synced via shared flight memory bus. 3/3 Nominal."])
        }, 1500)
      }
    }, 400)
  }

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              HAWTHORNE AVIONICS BENCH // HITL
            </span>
            <span className="text-xs font-mono text-zinc-400">HARDWARE-IN-THE-LOOP ACTIVE</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight mt-1 text-white flex items-center gap-3">
            <Cpu className="text-emerald-400" />
            Avionics & Flight Software Workstation
          </h1>
          <p className="text-zinc-400 text-sm mt-0.5">
            SpaceX does not use sluggish 30-year-old radiation-hardened chips. They run cutting-edge commercial multi-core processors with custom real-time Linux and Triple Modular Redundancy (TMR) voting algorithms.
          </p>
        </div>

        {/* Scenario Switcher */}
        <div className="flex bg-zinc-900 p-1 rounded-xl border border-white/10 text-xs font-mono">
          {Object.entries(scenarios).map(([key, item]) => (
            <button
              key={key}
              onClick={() => {
                setSelectedScenario(key)
                setTestResults(null)
              }}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedScenario === key
                  ? 'bg-emerald-500 text-black font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {item.title.split(' ')[0]} {item.title.split(' ')[1]}
            </button>
          ))}
        </div>
      </div>

      {/* Triple Computer Hardware Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {computerStates.map((core) => (
          <div
            key={core.id}
            className={`p-4 rounded-xl border font-mono transition-all ${
              core.bitFlipped
                ? 'bg-red-950/50 border-red-500 shadow-lg shadow-red-500/20 animate-pulse'
                : 'bg-zinc-900/70 border-white/10'
            }`}
          >
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span>{core.name}</span>
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                core.bitFlipped ? 'bg-red-500 text-white' : 'bg-emerald-500/20 text-emerald-300'
              }`}>
                {core.status}
              </span>
            </div>
            <div className="text-2xl font-bold text-white mt-2">
              {core.value} <span className="text-xs text-zinc-400">bar</span>
            </div>
            <div className="text-[11px] text-zinc-500 mt-1 flex items-center justify-between">
              <span>Kernel: RT-Linux 6.8</span>
              <span>Bus: CAN-0</span>
            </div>
          </div>
        ))}
      </div>

      {/* Code Editor & Execution Workbench */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Code Viewer */}
        <div className="lg:col-span-8 bg-zinc-950 rounded-2xl border border-white/10 overflow-hidden flex flex-col">
          <div className="avionics-toolbar bg-zinc-900/90 px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
              <Terminal size={14} className="text-emerald-400" />
              <span>fsw_executive_{selectedScenario}.cpp</span>
            </div>

            <div className="flex items-center gap-2">
              {selectedScenario === 'voting' && (
                <button
                  onClick={triggerBitFlip}
                  className="px-2.5 py-1 bg-red-900/50 hover:bg-red-800 text-red-300 border border-red-500/40 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all"
                >
                  <Zap size={12} />
                  INJECT COSMIC RAY BIT-FLIP
                </button>
              )}

              <button
                onClick={runCode}
                disabled={isRunning}
                className="px-4 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-black rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all shadow-md shadow-emerald-500/20 disabled:opacity-50"
              >
                <Play size={14} fill="black" />
                {isRunning ? 'EXECUTING...' : 'RUN ON FLIGHT CORES'}
              </button>
            </div>
          </div>

          {/* Syntax highlighted code display */}
          <div className="p-4 bg-zinc-950 text-emerald-300/90 font-mono text-xs overflow-x-auto leading-relaxed h-80 select-text">
            <pre>{currentScen.code}</pre>
          </div>

          {/* Real-time terminal output stream */}
          {testResults && (
            <div className="bg-emerald-950/40 p-3 border-t border-emerald-500/30 font-mono text-xs text-emerald-300 flex items-center justify-between">
              <span>FSW EXECUTION RESULT: {testResults.log}</span>
              <span className="font-bold">STATUS: OK</span>
            </div>
          )}
          <div className="bg-black/90 p-3 border-t border-white/10 font-mono text-[11px] text-zinc-400 h-36 overflow-y-auto space-y-1">
            <div className="text-zinc-500 font-bold mb-1">// REAL-TIME FLIGHT COMPUTER TELEMETRY LOG:</div>
            {terminalLogs.slice(-6).map((log, idx) => (
              <div key={idx} className={log.includes('[ALERT]') ? 'text-red-400 font-bold' : log.includes('[VOTER]') ? 'text-emerald-300 font-bold' : 'text-zinc-300'}>
                {log}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Architectural Explanation Card */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-zinc-900/80 p-5 rounded-2xl border border-white/10 space-y-4">
            <h3 className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-2">
              <Shield size={16} className="text-emerald-400" />
              THE SPACEX SOFTWARE ARCHITECTURE
            </h3>

            <p className="text-xs text-zinc-300 leading-relaxed">
              Traditional aerospace (NASA Space Shuttle / Orion) uses ultra-expensive, radiation-hardened microprocessors that lag 20 years behind modern consumer computers in computational power.
            </p>

            <p className="text-xs text-zinc-400 leading-relaxed">
              SpaceX revolutionized this: they put <strong>off-the-shelf multi-core x86 and ARM processors</strong> directly in the rocket, running a custom-patched preemptive Real-Time Linux kernel. They solve cosmic radiation not with lead shielding, but through <strong>mathematical Triple Modular Redundancy</strong>.
            </p>

            <div className="p-3 bg-black/40 rounded-xl border border-emerald-500/20 text-xs font-mono space-y-1.5 text-zinc-300">
              <div className="text-emerald-400 font-bold">KEY METRICS:</div>
              <div>• Control loop rate: 1,000 Hz (1 ms)</div>
              <div>• Hardware in loop: 24/7 continuous tests</div>
              <div>• Language: C++20 for flight, Python for ground tools</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
