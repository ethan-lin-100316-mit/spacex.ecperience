import React, { useState } from 'react'
import { realInterviewQuestions } from '../data/spacexData'
import { 
  HelpCircle, ChevronRight, Calculator, CheckCircle2, 
  Sparkles, Lightbulb
} from 'lucide-react'

export default function InterviewLab() {
  const [selectedIdx, setSelectedIdx] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  // Interactive Calculator for Rocket Equation (Tsiolkovsky)
  const [calcM0, setCalcM0] = useState(500000)
  const [calcMf, setCalcMf] = useState(50000)
  const [calcIsp, setCalcIsp] = useState(320)

  const g0 = 9.80665
  const massRatio = calcM0 / Math.max(1, calcMf)
  const validMasses = calcM0 >= calcMf
  const calculatedDeltaV = validMasses ? Math.round(calcIsp * g0 * Math.log(massRatio)) : null

  const currentQ = realInterviewQuestions[selectedIdx]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="pb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/30">
            TECHNICAL SCREENING
          </span>
          <span className="text-xs font-mono text-zinc-400">HAWTHORNE & STARBASE CANDIDATE LAB</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight mt-1 text-white flex items-center gap-3">
          <HelpCircle className="text-blue-400" />
          SpaceX Engineering Interview & First Principles Challenges
        </h1>
        <p className="text-zinc-400 text-sm mt-0.5">
          SpaceX interviews focus on fundamentals: can you derive rocket physics from scratch on a whiteboard without consulting a handbook?
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Questions selector */}
        <div className="lg:col-span-4 space-y-3">
          <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
            SELECT INTERVIEW CHALLENGE:
          </div>
          {realInterviewQuestions.map((q, idx) => (
            <button
              key={q.id}
              onClick={() => {
                setSelectedIdx(idx)
                setShowAnswer(false)
              }}
              className={`w-full p-4 rounded-xl text-left border transition-all ${
                selectedIdx === idx
                  ? 'bg-blue-950/50 border-blue-500 shadow-lg shadow-blue-500/20'
                  : 'bg-zinc-900/60 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="text-[11px] font-mono text-blue-400 font-semibold">{q.category}</div>
              <div className="text-sm font-bold text-white mt-1 line-clamp-2">{q.question}</div>
              <div className="flex items-center gap-1 text-xs text-zinc-400 font-mono mt-2">
                <span>View Solution</span>
                <ChevronRight size={14} />
              </div>
            </button>
          ))}

          {/* Interactive Live Tsiolkovsky Calculator */}
          <div className="bg-zinc-900/90 p-4 rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
            <div className="flex items-center gap-2 text-zinc-200 font-bold">
              <Calculator size={16} className="text-blue-400" />
              TSIOLKOVSKY DELTA-V SOLVER
            </div>

            <div>
              <div className="flex justify-between text-zinc-400 mb-1">
                <span>Wet Mass (m0):</span>
                <span className="text-white font-bold">{calcM0.toLocaleString()} kg</span>
              </div>
              <input
                type="range"
                min="100000"
                aria-label="Initial mass in kilograms"
                max="5000000"
                step="50000"
                value={calcM0}
                onChange={(e) => setCalcM0(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-800 rounded appearance-none accent-blue-500"
              />
            </div>

            <div>
              <div className="flex justify-between text-zinc-400 mb-1">
                <span>Dry Mass (mf):</span>
                <span className="text-white font-bold">{calcMf.toLocaleString()} kg</span>
              </div>
              <input
                type="range"
                min="10000"
                aria-label="Final mass in kilograms"
                max="500000"
                step="5000"
                value={calcMf}
                onChange={(e) => setCalcMf(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-800 rounded appearance-none accent-blue-500"
              />
            </div>

            <div>
              <div className="flex justify-between text-zinc-400 mb-1">
                <span>Specific Impulse (Isp):</span>
                <span className="text-white font-bold">{calcIsp} sec</span>
              </div>
              <input
                type="range"
                min="250"
                aria-label="Specific impulse in seconds"
                max="450"
                step="5"
                value={calcIsp}
                onChange={(e) => setCalcIsp(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-800 rounded appearance-none accent-blue-500"
              />
            </div>

            <div className="p-3 bg-black/50 rounded-xl border border-blue-500/30 text-center">
              <div className="text-[10px] text-zinc-400">TOTAL THEORETICAL DELTA-V:</div>
              <div className="text-2xl font-black text-blue-400 mt-0.5">
                {validMasses ? calculatedDeltaV.toLocaleString() : '—'} <span className="text-xs text-zinc-400">m/s</span>
              </div>
              <div className="text-[10px] text-zinc-500 mt-1">
                {validMasses ? `Mass ratio: ${massRatio.toFixed(1)}:1 (${(calculatedDeltaV / 1000).toFixed(2)} km/s)` : 'Initial mass must be at least as large as final mass.'}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Detailed Problem & Solution Card */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-zinc-950 p-6 rounded-2xl border border-white/10 space-y-4">
            
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/20 text-blue-300">
                {currentQ.category}
              </span>
              <span className="text-xs font-mono text-zinc-500">PRACTICE WHITEBOARD PROBLEM</span>
            </div>

            <h2 className="text-xl font-bold text-white leading-snug">
              {currentQ.question}
            </h2>

            {/* Hint */}
            <div className="p-3.5 bg-zinc-900/80 rounded-xl border border-white/5 text-xs text-zinc-300 flex items-start gap-2.5">
              <Lightbulb size={18} className="text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-amber-300 font-mono">FIRST PRINCIPLES HINT: </span>
                {currentQ.hint}
              </div>
            </div>

            {/* Reveal Answer Button */}
            {!showAnswer ? (
              <button
                onClick={() => setShowAnswer(true)}
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold font-mono rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 transition-all text-sm"
              >
                <Sparkles size={16} />
                REVEAL FIRST-PRINCIPLES DERIVATION & SOLUTION
              </button>
            ) : (
              <div className="space-y-4 pt-2">
                <div className="p-4 bg-blue-950/30 rounded-xl border border-blue-500/30 space-y-2">
                  <div className="text-xs font-mono font-bold text-blue-300 uppercase tracking-wider">
                    STEP-BY-STEP DERIVATION:
                  </div>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    {currentQ.steps.map((st, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-blue-400 shrink-0 mt-0.5" />
                        <span>{st}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-zinc-900/90 rounded-xl border border-white/10 text-xs space-y-1">
                  <span className="font-bold font-mono text-zinc-200">ENGINEERING TAKEAWAY:</span>
                  <p className="text-zinc-400 leading-relaxed">{currentQ.whySpaceXAsks}</p>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  )
}
