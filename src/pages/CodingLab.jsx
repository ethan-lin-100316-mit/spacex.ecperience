import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Editor from '@monaco-editor/react'
import {
  Code2, Play, Send, RotateCcw, Pause, Timer, Settings, ChevronLeft, ChevronRight,
  Search, Filter, Eye, EyeOff, CheckCircle2, AlertTriangle, XCircle, Award,
  Camera, Maximize, Shield, Lightbulb, ChevronDown, ChevronUp, X, Loader2,
  Clock, Zap, BookOpen, Tag, Building2, BarChart3, Trophy, Lock
} from 'lucide-react'
import { codingProblems, companies } from '../data/workflowData.js'
import { evaluateCode, isGeminiReady, initGemini } from '../services/geminiService.js'

// ─── Helpers ──────────────────────────────────────────────────────────────────

const DIFFICULTY_COLORS = {
  Easy: { bg: 'bg-success/20', text: 'text-success', border: 'border-success/30' },
  Medium: { bg: 'bg-warning/20', text: 'text-warning', border: 'border-warning/30' },
  Hard: { bg: 'bg-danger/20', text: 'text-danger', border: 'border-danger/30' },
}

const TIMER_PRESETS = [
  { label: '30 min', seconds: 30 * 60 },
  { label: '45 min', seconds: 45 * 60 },
  { label: '60 min', seconds: 60 * 60 },
  { label: '90 min', seconds: 90 * 60 },
]

const LANGUAGES = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
]

function formatTime(totalSeconds) {
  const mins = Math.floor(totalSeconds / 60)
  const secs = totalSeconds % 60
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

function getCategories(problems) {
  return [...new Set(problems.map(p => p.category))]
}

// ─── Settings Modal ─────────────────────────────────────────────────────────

function SettingsModal({ isOpen, onClose }) {
  const [apiKey, setApiKey] = useState('')
  const [connecting, setConnecting] = useState(false)
  const [status, setStatus] = useState(isGeminiReady() ? 'connected' : 'disconnected')

  const handleConnect = async () => {
    if (!apiKey.trim()) return
    setConnecting(true)
    const success = initGemini(apiKey.trim())
    setStatus(success ? 'connected' : 'error')
    setConnecting(false)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="glass-card w-full max-w-md p-6"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-text-primary flex items-center gap-2">
              <Settings className="w-5 h-5 text-primary" />
              Settings
            </h2>
            <button onClick={onClose} className="text-text-muted hover:text-text-primary transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Gemini API Key
              </label>
              <input
                type="password"
                value={apiKey}
                onChange={e => setApiKey(e.target.value)}
                placeholder="Enter your Gemini API key..."
                className="w-full px-4 py-2.5 bg-surface border border-surface-lighter rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
              />
            </div>

            <button
              onClick={handleConnect}
              disabled={connecting || !apiKey.trim()}
              className="glow-button w-full flex items-center justify-center gap-2 py-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {connecting ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Connecting...</>
              ) : (
                <><Zap className="w-4 h-4" /> Connect</>
              )}
            </button>

            <div className="flex items-center gap-2 text-sm">
              <div className={`w-2 h-2 rounded-full ${
                status === 'connected' ? 'bg-success' :
                status === 'error' ? 'bg-danger' : 'bg-text-muted'
              }`} />
              <span className={
                status === 'connected' ? 'text-success' :
                status === 'error' ? 'text-danger' : 'text-text-muted'
              }>
                {status === 'connected' ? 'Connected to Gemini' :
                 status === 'error' ? 'Connection failed' : 'Not connected'}
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// ─── Timer Ring ──────────────────────────────────────────────────────────────

function TimerRing({ remaining, total }) {
  const progress = total > 0 ? remaining / total : 1
  const isLow = remaining > 0 && remaining < 300
  const circumference = 2 * Math.PI * 18
  const offset = circumference * (1 - progress)

  return (
    <svg className="w-12 h-12 -rotate-90" viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor"
        className="text-surface-lighter" strokeWidth="3" />
      <circle cx="20" cy="20" r="18" fill="none"
        stroke={isLow ? 'var(--color-danger)' : 'var(--color-primary)'}
        strokeWidth="3" strokeDasharray={circumference} strokeDashoffset={offset}
        strokeLinecap="round" className="transition-all duration-1000" />
    </svg>
  )
}

// ─── Difficulty Badge ───────────────────────────────────────────────────────

function DifficultyBadge({ difficulty, small = false }) {
  const colors = DIFFICULTY_COLORS[difficulty] || DIFFICULTY_COLORS.Easy
  return (
    <span className={`inline-flex items-center rounded-full font-medium border ${colors.bg} ${colors.text} ${colors.border} ${
      small ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-xs'
    }`}>
      {difficulty}
    </span>
  )
}

// ─── Problem List Panel ─────────────────────────────────────────────────────

function ProblemListPanel({ problems, selectedId, onSelect, collapsed, onToggle }) {
  const [search, setSearch] = useState('')
  const [difficultyFilter, setDifficultyFilter] = useState('All')
  const [companyFilter, setCompanyFilter] = useState('All')
  const [expandedCategory, setExpandedCategory] = useState(null)

  const categories = useMemo(() => getCategories(problems), [problems])

  const filtered = useMemo(() => {
    return problems.filter(p => {
      if (search && !p.title.toLowerCase().includes(search.toLowerCase())) return false
      if (difficultyFilter !== 'All' && p.difficulty !== difficultyFilter) return false
      if (companyFilter !== 'All' && !p.company.includes(companyFilter)) return false
      return true
    })
  }, [problems, search, difficultyFilter, companyFilter])

  const grouped = useMemo(() => {
    const map = {}
    filtered.forEach(p => {
      if (!map[p.category]) map[p.category] = []
      map[p.category].push(p)
    })
    return map
  }, [filtered])

  if (collapsed) {
    return (
      <div className="flex flex-col items-center py-4 w-12 border-r border-surface-lighter bg-surface/50 shrink-0">
        <button onClick={onToggle} className="text-text-muted hover:text-primary transition-colors mb-4" title="Expand problem list">
          <ChevronRight className="w-5 h-5" />
        </button>
        <div className="flex flex-col items-center gap-3 mt-2">
          {problems.map(p => (
            <button key={p.id} onClick={() => onSelect(p)}
              className={`w-2 h-2 rounded-full transition-all ${
                p.id === selectedId ? 'bg-primary scale-150' :
                p.difficulty === 'Easy' ? 'bg-success/60' :
                p.difficulty === 'Medium' ? 'bg-warning/60' : 'bg-danger/60'
              }`}
              title={p.title}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="w-72 shrink-0 border-r border-surface-lighter bg-surface/30 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-surface-lighter">
        <h3 className="text-sm font-semibold text-text-primary flex items-center gap-1.5">
          <BookOpen className="w-4 h-4 text-primary" />
          Problems ({filtered.length})
        </h3>
        <button onClick={onToggle} className="text-text-muted hover:text-primary transition-colors">
          <ChevronLeft className="w-4 h-4" />
        </button>
      </div>

      {/* Search */}
      <div className="p-3 space-y-2 border-b border-surface-lighter">
        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search problems..."
            className="w-full pl-8 pr-3 py-1.5 text-sm bg-surface border border-surface-lighter rounded-md text-text-primary placeholder-text-muted focus:outline-none focus:border-primary/50"
          />
        </div>
        <div className="flex gap-1.5">
          <select value={difficultyFilter} onChange={e => setDifficultyFilter(e.target.value)}
            className="flex-1 text-xs px-2 py-1 bg-surface border border-surface-lighter rounded text-text-secondary focus:outline-none focus:border-primary/50">
            <option value="All">All Levels</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <select value={companyFilter} onChange={e => setCompanyFilter(e.target.value)}
            className="flex-1 text-xs px-2 py-1 bg-surface border border-surface-lighter rounded text-text-secondary focus:outline-none focus:border-primary/50">
            <option value="All">All Companies</option>
            {companies.map(c => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Problem List */}
      <div className="flex-1 overflow-y-auto">
        {Object.entries(grouped).map(([category, probs]) => (
          <div key={category}>
            <button
              onClick={() => setExpandedCategory(expandedCategory === category ? null : category)}
              className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-text-muted uppercase tracking-wider hover:bg-surface-light/30 transition-colors"
            >
              <span className="flex items-center gap-1.5">
                <Tag className="w-3 h-3" />
                {category}
                <span className="text-text-muted/60">({probs.length})</span>
              </span>
              {expandedCategory === category ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
            <AnimatePresence>
              {(expandedCategory === category || expandedCategory === null) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  {probs.map(p => (
                    <button
                      key={p.id}
                      onClick={() => onSelect(p)}
                      className={`w-full text-left px-3 py-2.5 border-l-2 transition-all hover:bg-surface-light/30 ${
                        p.id === selectedId
                          ? 'border-l-primary bg-primary/5'
                          : 'border-l-transparent'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className={`text-sm leading-tight ${
                          p.id === selectedId ? 'text-primary font-medium' : 'text-text-primary'
                        }`}>
                          {p.title}
                        </span>
                        <DifficultyBadge difficulty={p.difficulty} small />
                      </div>
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {p.company.slice(0, 3).map(cId => {
                          const comp = companies.find(c => c.id === cId)
                          return comp ? (
                            <span key={cId} className="text-[10px] text-text-muted bg-surface-lighter/50 px-1.5 py-0.5 rounded">
                              {comp.logo} {comp.name}
                            </span>
                          ) : null
                        })}
                      </div>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
        {Object.keys(grouped).length === 0 && (
          <div className="p-6 text-center text-text-muted text-sm">
            No problems match your filters.
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Problem Description Panel ──────────────────────────────────────────────

function ProblemDescription({ problem, examMode }) {
  const [showHints, setShowHints] = useState(false)

  if (!problem) {
    return (
      <div className="flex-1 flex items-center justify-center text-text-muted p-8">
        <div className="text-center">
          <Code2 className="w-12 h-12 mx-auto mb-3 opacity-40" />
          <p className="text-lg font-medium">Select a Problem</p>
          <p className="text-sm mt-1">Choose a problem from the list to begin coding.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 overflow-y-auto p-5 space-y-5">
      {/* Title & Meta */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-xl font-bold text-text-primary">{problem.title}</h2>
          <DifficultyBadge difficulty={problem.difficulty} />
        </div>
        <div className="flex flex-wrap gap-2">
          {problem.company.map(cId => {
            const comp = companies.find(c => c.id === cId)
            return comp ? (
              <span key={cId} className="inline-flex items-center gap-1 text-xs text-text-secondary bg-surface-lighter/40 px-2 py-1 rounded-full">
                <Building2 className="w-3 h-3" /> {comp.name}
              </span>
            ) : null
          })}
          <span className="inline-flex items-center gap-1 text-xs text-text-secondary bg-surface-lighter/40 px-2 py-1 rounded-full">
            <Tag className="w-3 h-3" /> {problem.category}
          </span>
        </div>
      </div>

      {/* Description */}
      <div className="prose prose-sm prose-invert max-w-none">
        <div className="text-text-secondary leading-relaxed whitespace-pre-wrap">
          {problem.description.split('`').map((part, i) =>
            i % 2 === 0 ? part : (
              <code key={i} className="text-primary bg-primary/10 px-1.5 py-0.5 rounded text-sm font-mono">{part}</code>
            )
          )}
        </div>
      </div>

      {/* Examples */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-text-primary flex items-center gap-1.5">
          <BookOpen className="w-4 h-4 text-info" />
          Examples
        </h3>
        {problem.examples.map((ex, i) => (
          <div key={i} className="bg-surface/60 border border-surface-lighter rounded-lg p-4 space-y-2">
            <div className="text-xs text-text-muted font-medium mb-2">Example {i + 1}</div>
            <div>
              <span className="text-xs font-semibold text-text-secondary">Input: </span>
              <code className="text-sm text-primary font-mono">{ex.input}</code>
            </div>
            <div>
              <span className="text-xs font-semibold text-text-secondary">Output: </span>
              <code className="text-sm text-success font-mono">{ex.output}</code>
            </div>
            {ex.explanation && (
              <div className="text-xs text-text-muted mt-1">
                <span className="font-semibold">Explanation: </span>{ex.explanation}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Constraints */}
      <div>
        <h3 className="text-sm font-semibold text-text-primary flex items-center gap-1.5 mb-2">
          <AlertTriangle className="w-4 h-4 text-warning" />
          Constraints
        </h3>
        <ul className="space-y-1">
          {problem.constraints.map((c, i) => (
            <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
              <span className="text-text-muted mt-1">•</span>
              <code className="font-mono text-xs bg-surface-lighter/30 px-1.5 py-0.5 rounded">{c}</code>
            </li>
          ))}
        </ul>
      </div>

      {/* Complexity Info */}
      <div className="flex gap-3">
        <div className="flex items-center gap-1.5 text-xs text-text-muted bg-surface/60 border border-surface-lighter rounded-lg px-3 py-1.5">
          <Clock className="w-3 h-3" /> Expected: {problem.timeComplexity}
        </div>
        <div className="flex items-center gap-1.5 text-xs text-text-muted bg-surface/60 border border-surface-lighter rounded-lg px-3 py-1.5">
          <BarChart3 className="w-3 h-3" /> Space: {problem.spaceComplexity}
        </div>
      </div>

      {/* Hints */}
      {!examMode && (
        <div className="border border-surface-lighter rounded-lg overflow-hidden">
          <button
            onClick={() => setShowHints(!showHints)}
            className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-text-secondary hover:bg-surface-light/20 transition-colors"
          >
            <span className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-warning" />
              {showHints ? 'Hide Hints' : 'Show Hints'}
            </span>
            {showHints ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
          <AnimatePresence>
            {showHints && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-4 text-sm text-text-secondary border-t border-surface-lighter pt-3">
                  <p className="flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 text-warning shrink-0 mt-0.5" />
                    {problem.solution}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  )
}

// ─── Test Results Panel ─────────────────────────────────────────────────────

function TestResultsInline({ results }) {
  if (!results || results.length === 0) return null
  const passed = results.filter(r => r.passed).length
  const total = results.length
  const allPassed = passed === total

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      className="border-t border-surface-lighter bg-surface/40"
    >
      <div className="p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-text-primary flex items-center gap-1.5">
            {allPassed ? <CheckCircle2 className="w-4 h-4 text-success" /> : <XCircle className="w-4 h-4 text-danger" />}
            Test Results: {passed}/{total} Passed
          </span>
        </div>
        <div className="space-y-1.5 max-h-40 overflow-y-auto">
          {results.map((r, i) => (
            <div key={i} className={`flex items-start gap-2 text-xs p-2 rounded ${
              r.passed ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'
            }`}>
              {r.passed ? <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" /> : <XCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />}
              <div>
                <span className="font-medium">Case {i + 1}:</span> {r.message}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// ─── AI Evaluation Results ──────────────────────────────────────────────────

function EvaluationResults({ result, onClose }) {
  if (!result) return null

  const scoreColor = result.score >= 70 ? 'text-success' :
                     result.score >= 40 ? 'text-warning' : 'text-danger'
  const scoreBg = result.score >= 70 ? 'bg-success/10 border-success/30' :
                  result.score >= 40 ? 'bg-warning/10 border-warning/30' : 'bg-danger/10 border-danger/30'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-t border-surface-lighter bg-surface/50 overflow-y-auto"
      style={{ maxHeight: '50vh' }}
    >
      <div className="p-5 space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" />
            AI Evaluation
          </h3>
          <button onClick={onClose} className="text-text-muted hover:text-text-primary transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Score + Verdict */}
        <div className="flex items-center gap-5">
          <div className={`flex flex-col items-center justify-center w-24 h-24 rounded-2xl border ${scoreBg}`}>
            <span className={`text-3xl font-bold ${scoreColor}`}>{result.score}</span>
            <span className="text-xs text-text-muted">/ 100</span>
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              {result.wouldPass ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold bg-success/15 text-success border border-success/30">
                  <CheckCircle2 className="w-4 h-4" /> Would Pass
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold bg-danger/15 text-danger border border-danger/30">
                  <XCircle className="w-4 h-4" /> Would Not Pass
                </span>
              )}
            </div>
            <p className="text-sm text-text-secondary">{result.correctness}</p>
          </div>
        </div>

        {/* Complexity & Quality */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-surface/60 border border-surface-lighter rounded-lg p-3">
            <div className="text-xs text-text-muted mb-1 flex items-center gap-1"><Clock className="w-3 h-3" /> Time</div>
            <div className="text-sm font-medium text-text-primary">{result.timeComplexity}</div>
          </div>
          <div className="bg-surface/60 border border-surface-lighter rounded-lg p-3">
            <div className="text-xs text-text-muted mb-1 flex items-center gap-1"><BarChart3 className="w-3 h-3" /> Space</div>
            <div className="text-sm font-medium text-text-primary">{result.spaceComplexity}</div>
          </div>
          <div className="bg-surface/60 border border-surface-lighter rounded-lg p-3">
            <div className="text-xs text-text-muted mb-1 flex items-center gap-1"><Code2 className="w-3 h-3" /> Quality</div>
            <div className="text-sm font-medium text-text-primary">{result.codeQuality}</div>
          </div>
        </div>

        {/* Strengths & Improvements */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-success" /> Strengths
            </h4>
            <ul className="space-y-1.5">
              {result.strengths?.map((s, i) => (
                <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-success shrink-0 mt-0.5" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-2 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-warning" /> Improvements
            </h4>
            <ul className="space-y-1.5">
              {result.improvements?.map((s, i) => (
                <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                  <AlertTriangle className="w-3.5 h-3.5 text-warning shrink-0 mt-0.5" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Overall Feedback */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-primary mb-1">Overall Feedback</h4>
          <p className="text-sm text-text-secondary leading-relaxed">{result.overallFeedback}</p>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Exam Mode Banner ───────────────────────────────────────────────────────

function ExamModeBanner({ onExit }) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="bg-warning/10 border-b border-warning/30 px-4 py-2 flex items-center justify-between"
    >
      <div className="flex items-center gap-4 text-sm text-warning">
        <span className="flex items-center gap-1.5 font-semibold">
          <Shield className="w-4 h-4" /> Exam Mode Active
        </span>
        <span className="flex items-center gap-1.5 text-text-muted">
          <Camera className="w-3.5 h-3.5" /> Proctoring
        </span>
        <span className="flex items-center gap-1.5 text-text-muted">
          <Lock className="w-3.5 h-3.5" /> Paste Restricted
        </span>
        <span className="flex items-center gap-1.5 text-text-muted">
          <Maximize className="w-3.5 h-3.5" /> Fullscreen Recommended
        </span>
      </div>
      <button onClick={onExit} className="text-xs text-warning hover:text-text-primary transition-colors font-medium">
        Exit Exam Mode
      </button>
    </motion.div>
  )
}

// ─── Main Component ─────────────────────────────────────────────────────────

export default function CodingLab() {
  // State
  const [selectedProblem, setSelectedProblem] = useState(null)
  const [language, setLanguage] = useState('javascript')
  const [code, setCode] = useState('')
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [editorFullWidth, setEditorFullWidth] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)

  // Timer
  const [timerPreset, setTimerPreset] = useState(TIMER_PRESETS[2]) // 60 min default
  const [timerRemaining, setTimerRemaining] = useState(TIMER_PRESETS[2].seconds)
  const [timerRunning, setTimerRunning] = useState(false)
  const [timerStarted, setTimerStarted] = useState(false)
  const timerRef = useRef(null)

  // Exam mode
  const [examMode, setExamMode] = useState(false)

  // Evaluation
  const [evaluating, setEvaluating] = useState(false)
  const [evalResult, setEvalResult] = useState(null)
  const [testResults, setTestResults] = useState(null)

  // Paste warning
  const [showPasteWarning, setShowPasteWarning] = useState(false)

  // Load starter code when problem or language changes
  useEffect(() => {
    if (selectedProblem) {
      setCode(selectedProblem.starterCode[language] || '// No starter code available')
      setEvalResult(null)
      setTestResults(null)
    }
  }, [selectedProblem, language])

  // Timer logic
  useEffect(() => {
    if (timerRunning && timerRemaining > 0) {
      timerRef.current = setInterval(() => {
        setTimerRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current)
            setTimerRunning(false)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => clearInterval(timerRef.current)
  }, [timerRunning])

  const startTimer = useCallback(() => {
    setTimerRunning(true)
    setTimerStarted(true)
  }, [])

  const pauseTimer = useCallback(() => {
    setTimerRunning(false)
  }, [])

  const resetTimer = useCallback(() => {
    setTimerRunning(false)
    setTimerStarted(false)
    setTimerRemaining(timerPreset.seconds)
  }, [timerPreset])

  const handlePresetChange = useCallback((preset) => {
    setTimerPreset(preset)
    if (!timerStarted) {
      setTimerRemaining(preset.seconds)
    }
  }, [timerStarted])

  // Exam mode toggle
  const toggleExamMode = useCallback(() => {
    if (!examMode) {
      setExamMode(true)
      resetTimer()
      setTimerRemaining(timerPreset.seconds)
    } else {
      setExamMode(false)
      resetTimer()
    }
  }, [examMode, resetTimer, timerPreset])

  // Run basic test cases
  const runTests = useCallback(() => {
    if (!selectedProblem || !selectedProblem.testCases || selectedProblem.testCases.length === 0) {
      setTestResults([{ passed: false, message: 'No test cases available for this problem.' }])
      return
    }

    // Basic evaluation: we can only truly run JavaScript
    if (language !== 'javascript') {
      setTestResults([{
        passed: false,
        message: `Local test execution is only available for JavaScript. Use "Submit" for AI evaluation of ${language} code.`
      }])
      return
    }

    const results = selectedProblem.testCases.map((tc, i) => {
      try {
        // Create a sandboxed function execution
        const fn = new Function(`
          ${code}
          const __input = ${JSON.stringify(tc.input)};
          const __keys = Object.keys(__input);
          const __args = __keys.map(k => __input[k]);
          // Try to find the function name from the code
          const __match = \`${code}\`.match(/function\\s+(\\w+)/);
          if (__match) {
            return eval(__match[1] + '(...__args)');
          }
          return undefined;
        `)
        const result = fn()
        const expected = tc.expected
        const passed = JSON.stringify(result) === JSON.stringify(expected)
        return {
          passed,
          message: passed
            ? `Input: ${JSON.stringify(tc.input)} → ${JSON.stringify(result)}`
            : `Expected ${JSON.stringify(expected)}, got ${JSON.stringify(result)}`
        }
      } catch (err) {
        return { passed: false, message: `Runtime Error: ${err.message}` }
      }
    })

    setTestResults(results)
  }, [selectedProblem, code, language])

  // Submit for AI evaluation
  const handleSubmit = useCallback(async () => {
    if (!selectedProblem || !code.trim()) return
    setEvaluating(true)
    setEvalResult(null)
    setTestResults(null)
    try {
      const result = await evaluateCode(selectedProblem, code, language)
      setEvalResult(result)
    } catch (err) {
      setEvalResult({
        score: 0,
        correctness: 'Evaluation failed',
        timeComplexity: 'N/A',
        spaceComplexity: 'N/A',
        codeQuality: 'N/A',
        strengths: [],
        improvements: ['Evaluation encountered an error. Please try again.'],
        overallFeedback: err.message,
        wouldPass: false,
      })
    }
    setEvaluating(false)
  }, [selectedProblem, code, language])

  // Paste warning in exam mode
  const handleEditorPaste = useCallback(() => {
    if (examMode) {
      setShowPasteWarning(true)
      setTimeout(() => setShowPasteWarning(false), 3000)
    }
  }, [examMode])

  const timerIsLow = timerRemaining > 0 && timerRemaining < 300

  return (
    <div className="min-h-screen bg-[var(--color-surface)] flex flex-col">
      {/* Top Bar */}
      <div className="h-14 bg-surface/80 backdrop-blur-xl border-b border-surface-lighter flex items-center justify-between px-4 shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <h1 className="text-lg font-bold gradient-text">Coding Lab</h1>
          </div>

          {/* Language Selector */}
          <div className="ml-4 flex items-center gap-2">
            <select
              value={language}
              onChange={e => setLanguage(e.target.value)}
              className="text-sm px-3 py-1.5 bg-surface border border-surface-lighter rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              {LANGUAGES.map(l => (
                <option key={l.value} value={l.value}>{l.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Center: Timer */}
        <div className="flex items-center gap-3">
          {!timerStarted && (
            <div className="flex gap-1">
              {TIMER_PRESETS.map(p => (
                <button
                  key={p.seconds}
                  onClick={() => handlePresetChange(p)}
                  className={`text-xs px-2.5 py-1 rounded-md transition-colors ${
                    timerPreset.seconds === p.seconds
                      ? 'bg-primary text-white'
                      : 'text-text-muted hover:text-text-primary hover:bg-surface-lighter'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          )}

          <div className="flex items-center gap-2">
            <TimerRing remaining={timerRemaining} total={timerPreset.seconds} />
            <span className={`font-mono text-lg font-bold ${
              timerIsLow ? 'text-danger animate-pulse' : 'text-text-primary'
            }`}>
              {formatTime(timerRemaining)}
            </span>
          </div>

          <div className="flex gap-1">
            {!timerRunning ? (
              <button onClick={startTimer} className="p-1.5 rounded-md text-text-muted hover:text-success hover:bg-success/10 transition-colors" title="Start">
                <Play className="w-4 h-4" />
              </button>
            ) : (
              <button onClick={pauseTimer} className="p-1.5 rounded-md text-text-muted hover:text-warning hover:bg-warning/10 transition-colors" title="Pause">
                <Pause className="w-4 h-4" />
              </button>
            )}
            <button onClick={resetTimer} className="p-1.5 rounded-md text-text-muted hover:text-text-primary hover:bg-surface-lighter transition-colors" title="Reset">
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {/* Exam Mode Toggle */}
          <button
            onClick={toggleExamMode}
            className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
              examMode
                ? 'bg-warning/15 text-warning border border-warning/30'
                : 'text-text-muted hover:text-text-primary hover:bg-surface-lighter'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            {examMode ? 'Exam Mode' : 'Exam Mode'}
          </button>

          {/* Editor Toggle */}
          <button
            onClick={() => setEditorFullWidth(!editorFullWidth)}
            className="p-1.5 rounded-md text-text-muted hover:text-text-primary hover:bg-surface-lighter transition-colors"
            title={editorFullWidth ? 'Show description' : 'Full-width editor'}
          >
            <Maximize className="w-4 h-4" />
          </button>

          {/* Gemini status dot */}
          <div className="flex items-center gap-1.5 text-xs text-text-muted px-2">
            <div className={`w-2 h-2 rounded-full ${isGeminiReady() ? 'bg-success' : 'bg-text-muted'}`} />
            <span className="hidden sm:inline">{isGeminiReady() ? 'AI' : 'No AI'}</span>
          </div>

          {/* Settings */}
          <button
            onClick={() => setSettingsOpen(true)}
            className="p-1.5 rounded-md text-text-muted hover:text-text-primary hover:bg-surface-lighter transition-colors"
            title="Settings"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Exam Mode Banner */}
      <AnimatePresence>
        {examMode && <ExamModeBanner onExit={toggleExamMode} />}
      </AnimatePresence>

      {/* Paste Warning */}
      <AnimatePresence>
        {showPasteWarning && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-danger/15 border-b border-danger/30 px-4 py-2 text-sm text-danger text-center font-medium"
          >
            ⚠️ External paste detected — this would be flagged in a real assessment.
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left: Problem List */}
        <ProblemListPanel
          problems={codingProblems}
          selectedId={selectedProblem?.id}
          onSelect={p => {
            setSelectedProblem(p)
            setEvalResult(null)
            setTestResults(null)
          }}
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />

        {/* Left: Problem Description */}
        {!editorFullWidth && (
          <div className="w-[380px] shrink-0 border-r border-surface-lighter flex flex-col overflow-hidden bg-surface/20">
            <ProblemDescription problem={selectedProblem} examMode={examMode} />
          </div>
        )}

        {/* Right: Editor + Results */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Editor */}
          <div className="flex-1 relative" onPaste={handleEditorPaste}>
            <Editor
              height="100%"
              language={language}
              value={code}
              onChange={val => setCode(val || '')}
              theme="vs-dark"
              options={{
                fontSize: 14,
                fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
                minimap: { enabled: false },
                lineNumbers: 'on',
                roundedSelection: true,
                scrollBeyondLastLine: false,
                padding: { top: 16, bottom: 16 },
                renderLineHighlight: 'all',
                cursorBlinking: 'smooth',
                cursorSmoothCaretAnimation: 'on',
                smoothScrolling: true,
                bracketPairColorization: { enabled: true },
                guides: { bracketPairs: true },
                wordWrap: 'on',
              }}
            />

            {/* Floating action bar at bottom of editor */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2">
              <button
                onClick={runTests}
                disabled={!selectedProblem}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium bg-surface border border-surface-lighter text-text-primary hover:bg-surface-light transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg"
              >
                <Play className="w-4 h-4" />
                Run Tests
              </button>
              <button
                onClick={handleSubmit}
                disabled={!selectedProblem || evaluating}
                className="glow-button flex items-center gap-1.5 px-5 py-2 rounded-lg text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed shadow-lg"
              >
                {evaluating ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Evaluating...</>
                ) : (
                  <><Send className="w-4 h-4" /> Submit</>
                )}
              </button>
            </div>
          </div>

          {/* Test Results */}
          <AnimatePresence>
            {testResults && <TestResultsInline results={testResults} />}
          </AnimatePresence>

          {/* AI Evaluation Results */}
          <AnimatePresence>
            {evalResult && (
              <EvaluationResults result={evalResult} onClose={() => setEvalResult(null)} />
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Settings Modal */}
      <SettingsModal isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </div>
  )
}
