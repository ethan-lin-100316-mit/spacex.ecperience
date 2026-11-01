import { useState, useMemo, useRef, useEffect } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import {
  ChevronRight, Clock, CheckCircle2, Lightbulb,
  ArrowRight, MapPin, Sparkles
} from 'lucide-react'
import { companies, roles, workflowStages } from '../data/workflowData'

// ─── Connector line between pipeline nodes ──────────────────────────────────
function Connector({ isActive }) {
  return (
    <div className="hidden md:flex items-center shrink-0 -mx-1">
      <motion.div
        className="h-[2px] w-10 relative overflow-hidden rounded-full"
        style={{ background: 'rgba(99,102,241,0.2)' }}
      >
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))' }}
          initial={{ width: '0%' }}
          animate={{ width: isActive ? '100%' : '0%' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </motion.div>
      <ArrowRight size={14} className={isActive ? 'text-primary-light' : 'text-text-muted/40'} />
    </div>
  )
}

// ─── Vertical connector for mobile ──────────────────────────────────────────
function VerticalConnector({ isActive }) {
  return (
    <div className="flex md:hidden justify-center py-1">
      <motion.div
        className="w-[2px] h-8 relative overflow-hidden rounded-full"
        style={{ background: 'rgba(99,102,241,0.2)' }}
      >
        <motion.div
          className="absolute inset-x-0 top-0 rounded-full"
          style={{ background: 'linear-gradient(180deg, var(--color-primary), var(--color-secondary))' }}
          initial={{ height: '0%' }}
          animate={{ height: isActive ? '100%' : '0%' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </motion.div>
    </div>
  )
}

export default function WorkflowExplorer() {
  const [selectedCompany, setSelectedCompany] = useState('google')
  const [selectedRole, setSelectedRole] = useState('swe')
  const [activeStage, setActiveStage] = useState(null)
  const pipelineRef = useRef(null)

  // Current stages for the chosen company + role
  const stages = useMemo(
    () => workflowStages[selectedCompany]?.[selectedRole] ?? [],
    [selectedCompany, selectedRole]
  )

  // Reset active stage whenever company/role changes
  useEffect(() => {
    setActiveStage(null)
  }, [selectedCompany, selectedRole])

  // Progress fraction (0–1)
  const progress = activeStage !== null
    ? (stages.findIndex(s => s.id === activeStage) + 1) / stages.length
    : 0

  // Lookup helpers
  const company = companies.find(c => c.id === selectedCompany)
  const activeStageData = stages.find(s => s.id === activeStage)

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* ── Page header ─────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-3"
      >
        <h1 className="text-3xl sm:text-4xl font-bold">
          <span className="gradient-text">Workflow Explorer</span>
        </h1>
        <p className="text-text-secondary max-w-xl mx-auto">
          Visualise the complete hiring pipeline — from application to offer — for
          top tech companies and roles.
        </p>
      </motion.div>

      {/* ── Stage Progress Bar ──────────────────────────────────────────── */}
      <div className="w-full h-1.5 rounded-full bg-surface-lighter overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))' }}
          animate={{ width: `${progress * 100}%` }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        />
      </div>

      {/* ── Company Selector ────────────────────────────────────────────── */}
      <LayoutGroup id="company-selector">
        <div className="flex flex-wrap justify-center gap-3">
          {companies.map((c) => {
            const isSelected = c.id === selectedCompany
            return (
              <motion.button
                key={c.id}
                layoutId={`company-pill-${c.id}`}
                onClick={() => setSelectedCompany(c.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className={`relative flex items-center gap-2.5 px-5 py-2.5 rounded-2xl text-sm font-semibold transition-colors duration-200 cursor-pointer
                  ${isSelected
                    ? 'bg-surface-light text-text-primary'
                    : 'bg-surface/60 text-text-secondary hover:text-text-primary hover:bg-surface-light/60'
                  }`}
                style={isSelected ? {
                  boxShadow: `0 0 22px ${c.color}44, 0 0 4px ${c.color}66`,
                  border: `1.5px solid ${c.color}88`,
                } : {
                  border: '1.5px solid transparent',
                }}
              >
                <span className="text-xl leading-none">{c.logo}</span>
                <span>{c.name}</span>
                {isSelected && (
                  <motion.div
                    layoutId="company-indicator"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-1 rounded-full"
                    style={{ background: c.color }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.button>
            )
          })}
        </div>
      </LayoutGroup>

      {/* ── Role Selector ───────────────────────────────────────────────── */}
      <div className="flex flex-wrap justify-center gap-2">
        {roles.map((r) => {
          const isActive = r.id === selectedRole
          return (
            <motion.button
              key={r.id}
              onClick={() => setSelectedRole(r.id)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer
                ${isActive
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20'
                  : 'bg-surface-light text-text-secondary hover:text-text-primary hover:bg-surface-lighter'
                }`}
            >
              <span>{r.icon}</span>
              <span className="hidden sm:inline">{r.name}</span>
              <span className="sm:hidden">{r.shortName}</span>
            </motion.button>
          )
        })}
      </div>

      {/* ── Pipeline Visual ─────────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${selectedCompany}-${selectedRole}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3 }}
        >
          {/* Desktop: horizontal scroll ─ Mobile: vertical stack */}
          <div
            ref={pipelineRef}
            className="md:overflow-x-auto md:pb-4 scrollbar-thin"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-0 md:gap-0 py-4 md:px-2 md:min-w-max">
              {stages.map((stage, idx) => {
                const isNodeActive = stage.id === activeStage
                const isPast = activeStage !== null && stages.findIndex(s => s.id === activeStage) >= idx
                return (
                  <div key={stage.id} className="flex flex-col md:flex-row md:items-center">
                    {/* Vertical connector (mobile only) */}
                    {idx > 0 && <VerticalConnector isActive={isPast} />}
                    {/* Horizontal connector (desktop only) */}
                    {idx > 0 && <Connector isActive={isPast} />}

                    {/* Pipeline node */}
                    <motion.button
                      initial={{ opacity: 0, y: 20, scale: 0.92 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: idx * 0.08, type: 'spring', stiffness: 260, damping: 22 }}
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setActiveStage(isNodeActive ? null : stage.id)}
                      className={`pipeline-node flex flex-col items-center gap-2 w-full md:w-auto ${isNodeActive ? 'active' : ''}`}
                      style={isNodeActive ? { borderColor: company.color, boxShadow: `0 0 24px ${company.color}33` } : {}}
                    >
                      {/* Step badge */}
                      <span
                        className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                        style={isPast
                          ? { background: `${company.color}22`, color: company.color, border: `1.5px solid ${company.color}88` }
                          : { background: 'rgba(99,102,241,0.1)', color: 'var(--color-text-muted)', border: '1.5px solid rgba(99,102,241,0.2)' }
                        }
                      >
                        {isPast && !isNodeActive ? <CheckCircle2 size={16} /> : idx + 1}
                      </span>

                      <span className="text-sm font-semibold text-text-primary leading-tight text-center">
                        {stage.title}
                      </span>

                      {/* Duration badge */}
                      <span className="inline-flex items-center gap-1 text-xs text-text-muted bg-surface-lighter/60 px-2.5 py-0.5 rounded-full">
                        <Clock size={11} />
                        {stage.duration}
                      </span>
                    </motion.button>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ── Stage Detail Panel ──────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        {activeStageData && (
          <motion.div
            key={activeStageData.id}
            initial={{ opacity: 0, height: 0, y: 20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: 10 }}
            transition={{ type: 'spring', stiffness: 200, damping: 24 }}
            className="overflow-hidden"
          >
            <div className="glass-card p-6 sm:p-8 space-y-6">
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold shrink-0"
                    style={{ background: `${company.color}22`, color: company.color }}
                  >
                    {stages.findIndex(s => s.id === activeStageData.id) + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">{activeStageData.title}</h3>
                    <p className="text-text-muted text-sm flex items-center gap-1 mt-0.5">
                      <MapPin size={13} /> {company.name}
                      <ChevronRight size={12} />
                      {roles.find(r => r.id === selectedRole)?.name}
                    </p>
                  </div>
                </div>

                <span
                  className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-1.5 rounded-full shrink-0"
                  style={{ background: `${company.color}18`, color: company.color, border: `1px solid ${company.color}44` }}
                >
                  <Clock size={14} /> {activeStageData.duration}
                </span>
              </div>

              {/* Description */}
              <p className="text-text-secondary leading-relaxed">{activeStageData.description}</p>

              {/* Step progress indicator */}
              <div className="flex items-center gap-1.5">
                {stages.map((s, i) => (
                  <motion.div
                    key={s.id}
                    className="h-1.5 rounded-full flex-1"
                    animate={{
                      background: i <= stages.findIndex(st => st.id === activeStageData.id)
                        ? company.color
                        : 'rgba(100,116,139,0.25)',
                    }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                  />
                ))}
              </div>
              <p className="text-xs text-text-muted">
                Step {stages.findIndex(s => s.id === activeStageData.id) + 1} of {stages.length}
              </p>

              {/* Tips */}
              {activeStageData.tips?.length > 0 && (
                <div className="space-y-3">
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-text-primary">
                    <Lightbulb size={16} className="text-accent" /> Pro Tips
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2.5">
                    {activeStageData.tips.map((tip, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07 }}
                        className="flex items-start gap-2 text-sm text-text-secondary bg-surface-light/50 rounded-xl px-4 py-3"
                      >
                        <CheckCircle2 size={15} className="text-success mt-0.5 shrink-0" />
                        <span>{tip}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => {
                    const idx = stages.findIndex(s => s.id === activeStageData.id)
                    if (idx > 0) setActiveStage(stages[idx - 1].id)
                  }}
                  disabled={stages.findIndex(s => s.id === activeStageData.id) === 0}
                  className="glow-button text-sm !px-5 !py-2.5 disabled:opacity-30 disabled:pointer-events-none"
                >
                  ← Previous
                </button>
                <button
                  onClick={() => {
                    const idx = stages.findIndex(s => s.id === activeStageData.id)
                    if (idx < stages.length - 1) setActiveStage(stages[idx + 1].id)
                  }}
                  disabled={stages.findIndex(s => s.id === activeStageData.id) === stages.length - 1}
                  className="glow-button text-sm !px-5 !py-2.5 disabled:opacity-30 disabled:pointer-events-none"
                >
                  Next →
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Empty-state nudge when nothing is selected */}
      {!activeStageData && stages.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-6 text-text-muted text-sm flex items-center justify-center gap-2"
        >
          <Sparkles size={15} className="text-primary-light" />
          Click a stage above to see details and tips
        </motion.div>
      )}
    </section>
  )
}
