import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend
} from 'recharts'
import {
  Briefcase, Sparkles, Sliders, CheckCircle2, AlertTriangle,
  ArrowRight, ExternalLink, Bookmark, Building, DollarSign,
  MapPin, BookOpen, Clock, Target, Award, Key, Settings, TrendingUp
} from 'lucide-react'
import {
  companies,
  roles,
  skillCategories,
  jobListings
} from '../data/workflowData'
import {
  getPersonalizedRecommendation,
  isGeminiReady,
  initGemini
} from '../services/geminiService'

export default function JobRecommendation() {
  // Candidate Profile State
  const [skills, setSkills] = useState({
    algorithms: 80,
    systemDesign: 70,
    coding: 85,
    behavioral: 75,
    domainKnowledge: 65,
    communication: 70,
  })
  const [experience, setExperience] = useState(3)
  const [preferredRole, setPreferredRole] = useState('swe')
  const [selectedCompanies, setSelectedCompanies] = useState(['google', 'meta', 'amazon'])
  const [selectedJobId, setSelectedJobId] = useState(jobListings[0].id)
  const [savedJobs, setSavedJobs] = useState(new Set([1]))
  
  // Settings & Gemini AI State
  const [showSettings, setShowSettings] = useState(false)
  const [apiKey, setApiKey] = useState('')
  const [geminiConnected, setGeminiConnected] = useState(isGeminiReady())
  const [isAiLoading, setIsAiLoading] = useState(false)
  const [aiAnalysis, setAiAnalysis] = useState(null)

  // Calculate Match Score for each job
  const rankedJobs = useMemo(() => {
    return jobListings.map(job => {
      let totalMatch = 0
      skillCategories.forEach(cat => {
        const userVal = skills[cat.key] || 0
        const jobReq = job.skills[cat.key] || 0
        const catMatch = jobReq > 0 ? Math.min((userVal / jobReq) * 100, 100) : 100
        totalMatch += catMatch
      })
      const averageMatch = Math.round(totalMatch / skillCategories.length)
      
      // Bonus for company preference
      const prefBonus = selectedCompanies.includes(job.company) ? 5 : 0
      const finalScore = Math.min(100, averageMatch + prefBonus)

      return {
        ...job,
        matchScore: finalScore,
      }
    }).sort((a, b) => b.matchScore - a.matchScore)
  }, [skills, selectedCompanies])

  // Selected job for detailed analysis
  const selectedJob = jobListings.find(j => j.id === selectedJobId) || rankedJobs[0]

  // Radar chart data preparation
  const radarData = useMemo(() => {
    return skillCategories.map(cat => ({
      subject: cat.label,
      candidate: skills[cat.key] || 0,
      requirement: selectedJob.skills[cat.key] || 0,
      fullMark: 100,
    }))
  }, [skills, selectedJob])

  // Company benchmark data
  const companyBenchmarkData = useMemo(() => {
    return companies.map(comp => {
      const companyJobs = jobListings.filter(j => j.company === comp.id)
      if (companyJobs.length === 0) return null

      const avgAlgorithms = Math.round(companyJobs.reduce((acc, j) => acc + j.skills.algorithms, 0) / companyJobs.length)
      const avgSysDesign = Math.round(companyJobs.reduce((acc, j) => acc + j.skills.systemDesign, 0) / companyJobs.length)
      const avgCoding = Math.round(companyJobs.reduce((acc, j) => acc + j.skills.coding, 0) / companyJobs.length)

      return {
        name: comp.name,
        Algorithms: avgAlgorithms,
        SystemDesign: avgSysDesign,
        Coding: avgCoding,
      }
    }).filter(Boolean)
  }, [])

  const handleSliderChange = (key, value) => {
    setSkills(prev => ({ ...prev, [key]: Number(value) }))
  }

  const toggleCompanyFilter = (companyId) => {
    setSelectedCompanies(prev =>
      prev.includes(companyId)
        ? prev.filter(c => c !== companyId)
        : [...prev, companyId]
    )
  }

  const toggleSaveJob = (id) => {
    setSavedJobs(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const handleRunAiRecommendation = async () => {
    setIsAiLoading(true)
    try {
      const userProfile = {
        skills,
        experience,
        preferredRole,
        preferredCompanies: selectedCompanies,
      }
      const res = await getPersonalizedRecommendation(userProfile, jobListings)
      setAiAnalysis(res)
    } catch (e) {
      console.error(e)
    } finally {
      setIsAiLoading(false)
    }
  }

  const handleConnectApiKey = (e) => {
    e.preventDefault()
    if (apiKey.trim()) {
      const ok = initGemini(apiKey.trim())
      setGeminiConnected(ok)
      setShowSettings(false)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/5 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary-light border border-primary/30 flex items-center gap-1.5">
              <Sparkles size={12} /> AI Career Matching Engine
            </span>
            <span className="text-text-muted text-xs">Radar Benchmark & Gap Analysis</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight mt-2 text-white">
            Job Recommendations & <span className="gradient-text">Skill Gap Matcher</span>
          </h1>
          <p className="text-text-secondary text-sm mt-1">
            Map your personal technical radar against real Big Tech hiring bars and discover your optimal role matches.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleRunAiRecommendation}
            disabled={isAiLoading}
            className="glow-button !py-2.5 !px-5 text-xs font-bold flex items-center gap-2"
          >
            <Sparkles size={14} />
            {isAiLoading ? 'Synthesizing Path...' : 'AI Career Diagnosis'}
          </button>

          <button
            onClick={() => setShowSettings(true)}
            className={`p-2.5 rounded-xl border transition-all ${
              geminiConnected
                ? 'border-success/40 bg-success/10 text-success'
                : 'border-white/10 bg-surface text-text-secondary hover:text-white'
            }`}
            title="Configure Gemini API Key"
          >
            <Settings size={18} />
          </button>
        </div>
      </div>

      {/* STEP 1: Skill Matrix Assessment */}
      <section className="glass-card p-6 space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary-light">
              <Sliders size={18} />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">Step 1: Your Technical Skill Matrix</h2>
              <p className="text-xs text-text-muted">Adjust sliders to reflect your current proficiency level (0 - 100)</p>
            </div>
          </div>
          <span className="text-xs text-secondary font-semibold font-mono">
            Avg Score: {Math.round(Object.values(skills).reduce((a, b) => a + b, 0) / 6)}%
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(cat => (
            <div key={cat.key} className="p-4 rounded-xl bg-surface border border-white/5 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-white">{cat.label}</span>
                <span className="font-mono text-primary-light font-bold">{skills[cat.key]}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={skills[cat.key]}
                onChange={(e) => handleSliderChange(cat.key, e.target.value)}
                className="w-full accent-primary h-2 bg-surface-lighter rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-text-muted">
                <span>Foundational</span>
                <span>Proficient</span>
                <span>Mastery</span>
              </div>
            </div>
          ))}
        </div>

        {/* Profile Filters: Experience, Role, Companies */}
        <div className="pt-4 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-text-muted uppercase mb-1.5">
              Experience Level
            </label>
            <select
              value={experience}
              onChange={(e) => setExperience(Number(e.target.value))}
              className="w-full p-2.5 rounded-xl bg-surface border border-white/10 text-white text-xs focus:outline-none"
            >
              <option value={1}>0 - 1 Years (Junior / New Grad)</option>
              <option value={3}>2 - 4 Years (Mid-level SDE II / L4)</option>
              <option value={6}>5 - 8 Years (Senior / Staff / E5+)</option>
              <option value={10}>9+ Years (Principal / Architect)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-text-muted uppercase mb-1.5">
              Target Track
            </label>
            <select
              value={preferredRole}
              onChange={(e) => setPreferredRole(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-surface border border-white/10 text-white text-xs focus:outline-none"
            >
              {roles.map(r => (
                <option key={r.id} value={r.id}>{r.icon} {r.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-text-muted uppercase mb-1.5">
              Preferred Target Ecosystems
            </label>
            <div className="flex flex-wrap gap-1.5">
              {companies.map(c => (
                <button
                  key={c.id}
                  onClick={() => toggleCompanyFilter(c.id)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                    selectedCompanies.includes(c.id)
                      ? 'bg-primary/25 border border-primary text-white'
                      : 'bg-surface border border-white/5 text-text-muted hover:text-white'
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STEP 2 & 3: Radar Chart vs Selected Job + Gap Analysis */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Radar Chart (5 cols) */}
        <div className="lg:col-span-5 glass-card p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Target size={18} className="text-secondary" />
                Benchmark Radar
              </h3>
              <p className="text-xs text-text-muted">
                Comparing your skills vs <strong>{selectedJob.title}</strong>
              </p>
            </div>
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30">
              {selectedJob.matchScore}% Match
            </span>
          </div>

          <div className="w-full h-72 sm:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarData}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis dataKey="subject" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 11 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="rgba(255,255,255,0.2)" tick={{ fill: '#64748b', fontSize: 9 }} />
                <Radar name="Your Skills" dataKey="candidate" stroke="#6366f1" fill="#6366f1" fillOpacity={0.5} />
                <Radar name="Job Target" dataKey="requirement" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.25} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', fontSize: '11px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Side-by-side Skill Breakdown */}
          <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
            <span className="font-semibold text-white text-[11px] uppercase tracking-wider block">
              Skill Delta for {selectedJob.title}:
            </span>
            {skillCategories.map(cat => {
              const userVal = skills[cat.key] || 0
              const reqVal = selectedJob.skills[cat.key] || 0
              const diff = userVal - reqVal
              return (
                <div key={cat.key} className="flex items-center justify-between p-2 rounded-lg bg-surface border border-white/5">
                  <span className="text-text-secondary">{cat.label}</span>
                  <div className="flex items-center gap-2 font-mono">
                    <span className="text-text-muted">{userVal}% / {reqVal}%</span>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                      diff >= 0 ? 'bg-success/20 text-success' : 'bg-danger/20 text-danger'
                    }`}>
                      {diff >= 0 ? `+${diff}%` : `${diff}%`}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Recommended Jobs List (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Award size={18} className="text-primary-light" />
              Tailored Job Recommendations ({rankedJobs.length})
            </h3>
            <span className="text-xs text-text-muted">Ranked by algorithm match %</span>
          </div>

          <div className="space-y-3 max-h-[640px] overflow-y-auto pr-1">
            {rankedJobs.map((job) => {
              const compObj = companies.find(c => c.id === job.company)
              const isSelected = job.id === selectedJobId
              const isSaved = savedJobs.has(job.id)

              return (
                <div
                  key={job.id}
                  onClick={() => setSelectedJobId(job.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'glass-card border-primary/50 shadow-lg shadow-primary/15'
                      : 'bg-surface/70 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-surface-lighter flex items-center justify-center text-xl border border-white/10 shrink-0">
                        {compObj?.logo || '🏢'}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-white hover:text-primary-light transition-colors">
                            {job.title}
                          </h4>
                          <span className="text-xs text-text-muted font-medium">@ {compObj?.name}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-text-muted mt-1">
                          <span className="flex items-center gap-1">
                            <MapPin size={12} /> {job.location}
                          </span>
                          <span className="flex items-center gap-1 text-emerald-400 font-medium">
                            <DollarSign size={12} /> {job.salary}
                          </span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5">{job.type}</span>
                        </div>
                      </div>
                    </div>

                    {/* Match Score & Bookmark */}
                    <div className="flex items-center gap-2 shrink-0">
                      <div className={`px-2.5 py-1 rounded-xl text-xs font-bold border ${
                        job.matchScore >= 80
                          ? 'bg-success/20 text-success border-success/30'
                          : job.matchScore >= 65
                          ? 'bg-warning/20 text-warning border-warning/30'
                          : 'bg-white/5 text-text-muted border-white/10'
                      }`}>
                        {job.matchScore}% Match
                      </div>
                      <button
                        onClick={(e) => { e.stopPropagation(); toggleSaveJob(job.id); }}
                        className={`p-1.5 rounded-lg border transition-all ${
                          isSaved ? 'text-accent border-accent/40 bg-accent/10' : 'text-text-muted border-white/10 hover:text-white'
                        }`}
                      >
                        <Bookmark size={14} fill={isSaved ? 'currentColor' : 'none'} />
                      </button>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-3 border-t border-white/5">
                    {job.tags.map((t, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-text-secondary">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* STEP 4: Big Tech Benchmark Comparison (BarChart) */}
      <section className="glass-card p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <TrendingUp size={18} className="text-primary-light" />
              Big Tech Hiring Bar Benchmarks
            </h3>
            <p className="text-xs text-text-muted">Average skill emphasis across top engineering organizations</p>
          </div>
          <span className="text-xs text-text-muted">Cross-company standards</span>
        </div>

        <div className="w-full h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={companyBenchmarkData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="name" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} />
              <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 11 }} domain={[0, 100]} />
              <Tooltip
                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', fontSize: '11px' }}
                itemStyle={{ color: '#fff' }}
              />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              <Bar dataKey="Algorithms" fill="#6366f1" radius={[4, 4, 0, 0]} />
              <Bar dataKey="SystemDesign" fill="#06b6d4" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Coding" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* AI Personalized Roadmap & Study Plan (if generated) */}
      {aiAnalysis && (
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 space-y-4 border-primary/40"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-primary-light" />
              <h3 className="text-base font-bold text-white">Gemini AI Career Roadmap & Study Plan</h3>
            </div>
            <span className="text-xs px-2.5 py-1 rounded bg-primary/20 text-primary-light font-mono">
              Estimated Prep: {aiAnalysis.timelineWeeks || 6} Weeks
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="space-y-2">
              <h4 className="font-bold text-warning flex items-center gap-1.5">
                <AlertTriangle size={14} /> Critical Skill Gaps to Bridge
              </h4>
              <ul className="space-y-1.5">
                {aiAnalysis.skillGaps?.map((gap, i) => (
                  <li key={i} className="p-2.5 rounded-lg bg-surface border border-white/5 text-text-secondary leading-snug">
                    • {gap}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-success flex items-center gap-1.5">
                <CheckCircle2 size={14} /> Weekly Recommended Action Plan
              </h4>
              <ul className="space-y-1.5">
                {aiAnalysis.studyPlan?.map((step, i) => (
                  <li key={i} className="p-2.5 rounded-lg bg-surface border border-white/5 text-text-secondary leading-snug">
                    <strong className="text-white">Week {i + 1}:</strong> {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>
      )}

      {/* Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="glass-card max-w-md w-full p-6 space-y-4 border border-primary/30"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2 text-white font-bold text-lg">
                  <Key size={18} className="text-primary-light" />
                  Gemini AI Configuration
                </div>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-text-muted hover:text-white text-sm"
                >
                  ✕
                </button>
              </div>

              <p className="text-text-secondary text-xs leading-relaxed">
                Provide your Gemini API key to activate tailored AI career roadmaps, real-time job-to-resume matching, and personalized timeline suggestions.
              </p>

              <form onSubmit={handleConnectApiKey} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-text-muted uppercase mb-1">
                    Gemini API Key
                  </label>
                  <input
                    type="password"
                    placeholder="AIzaSy..."
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-surface border border-white/10 text-white placeholder-text-muted text-sm focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-text-muted">
                    Status:{' '}
                    {geminiConnected ? (
                      <span className="text-success font-medium">● Connected</span>
                    ) : (
                      <span className="text-warning font-medium">○ Simulation Mode</span>
                    )}
                  </span>
                  <button
                    type="submit"
                    className="glow-button !py-2 !px-4 text-xs font-semibold"
                  >
                    Save & Activate
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
