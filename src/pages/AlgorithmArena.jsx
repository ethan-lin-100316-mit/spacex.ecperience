import React, { useState } from 'react'
import { algorithmArenaDilemmas } from '../data/spacexData'
import { soundManager } from '../services/spacexSound'
import { 
  Zap, CheckCircle2, XCircle, ArrowRight, 
  RotateCcw, Sparkles, Scale
} from 'lucide-react'

export default function AlgorithmArena() {
  const [currentDilemmaIdx, setCurrentDilemmaIdx] = useState(0)
  const [userDecisions, setUserDecisions] = useState({}) // { dilemmaId: optionId }
  const [showOutcome, setShowOutcome] = useState(false)

  const dilemma = algorithmArenaDilemmas[currentDilemmaIdx]
  const chosenOptionId = userDecisions[dilemma.id]
  const chosenOption = dilemma.options.find(o => o.id === chosenOptionId)

  const handleSelectOption = (optionId) => {
    soundManager.init()
    setUserDecisions(prev => ({ ...prev, [dilemma.id]: optionId }))
    setShowOutcome(true)

    const opt = dilemma.options.find(o => o.id === optionId)
    if (opt.isMuskChoice) {
      soundManager.playSuccess()
    } else {
      soundManager.playAlarm()
    }
  }

  const resetDilemma = () => {
    setUserDecisions(prev => {
      const next = { ...prev }
      delete next[dilemma.id]
      return next
    })
    setShowOutcome(false)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-amber-500/20 text-amber-400 border border-amber-500/30">
              FIRST PRINCIPLES DECISION SIMULATOR
            </span>
            <span className="text-xs font-mono text-zinc-400">THE ALGORITHM ARENA</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight mt-1 text-white flex items-center gap-3">
            <Zap className="text-amber-400" />
            The 5-Step Algorithm Decision Sandbox
          </h1>
          <p className="text-zinc-400 text-sm mt-0.5">
            Test your engineering instincts. Faced with real dilemmas that stumped traditional aerospace, will you follow textbook industry precedent or apply First Principles?
          </p>
        </div>

        {/* Progress pills */}
        <div className="flex items-center gap-2 font-mono text-xs">
          {algorithmArenaDilemmas.map((d, i) => (
            <button
              key={d.id}
              onClick={() => {
                setCurrentDilemmaIdx(i)
                setShowOutcome(!!userDecisions[d.id])
              }}
              className={`px-3 py-1.5 rounded-lg border transition-all ${
                currentDilemmaIdx === i
                  ? 'bg-amber-500 text-black font-bold border-amber-400 shadow-md shadow-amber-500/20'
                  : userDecisions[d.id]
                  ? 'bg-emerald-950/40 text-emerald-400 border-emerald-500/40'
                  : 'bg-zinc-900 text-zinc-400 border-white/10 hover:text-white'
              }`}
            >
              CHALLENGE 0{i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Main Dilemma Box */}
      <div className="bg-zinc-950 p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
        
        {/* Scenario Banner */}
        <div className="space-y-2 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold">
            <Scale size={16} />
            DILEMMA {currentDilemmaIdx + 1} OF {algorithmArenaDilemmas.length}: {dilemma.title.toUpperCase()}
          </div>
          <p className="text-sm sm:text-base text-zinc-200 leading-relaxed max-w-4xl font-sans">
            {dilemma.context}
          </p>
        </div>

        {/* Option Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dilemma.options.map((opt) => {
            const isSelected = chosenOptionId === opt.id
            return (
              <div
                key={opt.id}
                onClick={() => !showOutcome && handleSelectOption(opt.id)}
                className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${
                  !showOutcome ? 'cursor-pointer hover:border-amber-400/60 hover:bg-zinc-900/60' : ''
                } ${
                  isSelected && opt.isMuskChoice
                    ? 'bg-emerald-950/30 border-emerald-500 shadow-xl shadow-emerald-500/20 ring-1 ring-emerald-500'
                    : isSelected && !opt.isMuskChoice
                    ? 'bg-red-950/30 border-red-500 shadow-xl shadow-red-500/20 ring-1 ring-red-500'
                    : 'bg-zinc-900/70 border-white/10'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-base sm:text-lg font-bold text-white">{opt.name}</h3>
                    {showOutcome && (
                      opt.isMuskChoice ? (
                        <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
                          <CheckCircle2 size={13} /> FIRST PRINCIPLES
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-red-500/20 text-red-300 border border-red-500/40 flex items-center gap-1">
                          <XCircle size={13} /> OLDSPACE CONVENTIONAL
                        </span>
                      )
                    )}
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                    {opt.summary}
                  </p>

                  {/* Quantitative Metrics Matrix */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5 font-mono text-xs">
                    <div className="bg-black/40 p-2.5 rounded-lg border border-white/5">
                      <span className="text-zinc-500 text-[10px] block">DRY MASS PENALTY:</span>
                      <span className={`font-bold ${opt.metrics.massPenaltyKg <= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                        {opt.metrics.massPenaltyKg > 0 ? `+${opt.metrics.massPenaltyKg.toLocaleString()} kg` : `${opt.metrics.massPenaltyKg.toLocaleString()} kg`}
                      </span>
                    </div>

                    <div className="bg-black/40 p-2.5 rounded-lg border border-white/5">
                      <span className="text-zinc-500 text-[10px] block">TURNAROUND CYCLE:</span>
                      <span className="font-bold text-amber-400">{opt.metrics.cycleDays} days</span>
                    </div>
                  </div>
                </div>

                {!showOutcome ? (
                  <button
                    onClick={() => handleSelectOption(opt.id)}
                    className="w-full mt-6 py-2.5 bg-zinc-800 hover:bg-amber-500 hover:text-black text-white font-mono font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    SELECT THIS ARCHITECTURE <ArrowRight size={14} />
                  </button>
                ) : null}
              </div>
            )
          })}
        </div>

        {/* Outcome & First Principles Verdict */}
        {showOutcome && chosenOption && (
          <div className={`p-6 rounded-2xl border font-mono space-y-4 animate-in fade-in ${
            chosenOption.isMuskChoice
              ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
              : 'bg-red-950/40 border-red-500/40 text-red-200'
          }`}>
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                <Sparkles size={16} />
                ARCHITECTURAL DEBRIEF & VERDICT:
              </span>
              <button
                onClick={resetDilemma}
                className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
              >
                <RotateCcw size={12} /> Try Alternative Option
              </button>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed font-sans text-zinc-100">
              {chosenOption.outcome}
            </p>

            <div className="pt-2 flex justify-end">
              {currentDilemmaIdx < algorithmArenaDilemmas.length - 1 ? (
                <button
                  onClick={() => {
                    setCurrentDilemmaIdx(prev => prev + 1)
                    setShowOutcome(false)
                  }}
                  className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs rounded-xl flex items-center gap-2 shadow-lg shadow-amber-500/25 transition-all"
                >
                  NEXT CHALLENGE <ArrowRight size={14} />
                </button>
              ) : (
                <div className="text-xs text-emerald-400 font-bold">
                  ALL DILEMMAS COMPLETED // FIRST PRINCIPLES SYSTEM LOADED
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
