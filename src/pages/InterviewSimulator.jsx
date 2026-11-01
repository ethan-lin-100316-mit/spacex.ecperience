import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MessageSquare, Layers, Video, Mic, MicOff, Camera, CameraOff,
  Clock, Play, Pause, RotateCcw, Send, CheckCircle2, XCircle,
  AlertCircle, Sparkles, Settings, ArrowRight, UserCheck, Shield,
  ChevronDown, ChevronUp, RefreshCw, Trophy, HelpCircle, Server,
  Database, Network, Cpu, HardDrive, Key, Check, Plus, Trash2
} from 'lucide-react'
import {
  systemDesignTopics,
  behavioralQuestions,
  companies
} from '../data/workflowData'
import {
  conductBehavioralInterview,
  evaluateSystemDesign,
  isGeminiReady,
  initGemini
} from '../services/geminiService'

// Available architectural building blocks for canvas
const ARCHITECTURE_BLOCKS = [
  { id: 'client', name: 'Web/Mobile Client', icon: Video, color: 'from-blue-500 to-indigo-600' },
  { id: 'cdn', name: 'CDN (Cloudflare)', icon: Network, color: 'from-amber-500 to-orange-600' },
  { id: 'lb', name: 'Load Balancer (NGINX)', icon: RefreshCw, color: 'from-emerald-500 to-teal-600' },
  { id: 'gateway', name: 'API Gateway', icon: Shield, color: 'from-purple-500 to-indigo-600' },
  { id: 'microservice', name: 'Core Microservices', icon: Cpu, color: 'from-cyan-500 to-blue-600' },
  { id: 'cache', name: 'Redis Cache Cluster', icon: Server, color: 'from-rose-500 to-red-600' },
  { id: 'mq', name: 'Message Queue (Kafka)', icon: Layers, color: 'from-yellow-500 to-amber-600' },
  { id: 'sqldb', name: 'Primary DB (PostgreSQL)', icon: Database, color: 'from-blue-600 to-indigo-800' },
  { id: 'nosqldb', name: 'NoSQL / DynamoDB', icon: Database, color: 'from-teal-500 to-emerald-700' },
  { id: 's3', name: 'Object Store (S3)', icon: HardDrive, color: 'from-pink-500 to-rose-600' },
]

export default function InterviewSimulator() {
  const [mode, setMode] = useState('behavioral') // 'behavioral' | 'system-design'
  const [apiKey, setApiKey] = useState('')
  const [showSettings, setShowSettings] = useState(false)
  const [geminiConnected, setGeminiConnected] = useState(isGeminiReady())

  const handleConnectApiKey = (e) => {
    e.preventDefault()
    if (apiKey.trim()) {
      const ok = initGemini(apiKey.trim())
      setGeminiConnected(ok)
      setShowSettings(false)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header and Mode Selector */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/5 pb-6">
        <div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary-light border border-primary/30 flex items-center gap-1.5">
              <Sparkles size={12} /> Tech Lab Simulator
            </span>
            <span className="text-text-muted text-xs">Simulating Real Big Tech Loops</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight mt-2 text-white">
            Interview <span className="gradient-text">Simulation Lab</span>
          </h1>
          <p className="text-text-secondary text-sm mt-1">
            Experience real written assessment pressure, system design whiteboard interviews, and STAR behavioral loops.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          {/* Mode Switcher */}
          <div className="flex p-1 rounded-xl bg-surface border border-white/10 w-full md:w-auto">
            <button
              onClick={() => setMode('behavioral')}
              className={`flex-1 md:flex-initial flex items-center justify-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                mode === 'behavioral'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25'
                  : 'text-text-secondary hover:text-white'
              }`}
            >
              <MessageSquare size={16} />
              Behavioral & STAR
            </button>
            <button
              onClick={() => setMode('system-design')}
              className={`flex-1 md:flex-initial flex items-center justify-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                mode === 'system-design'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25'
                  : 'text-text-secondary hover:text-white'
              }`}
            >
              <Layers size={16} />
              System Design Canvas
            </button>
          </div>

          {/* Settings button */}
          <button
            onClick={() => setShowSettings(true)}
            className={`p-2.5 rounded-xl border transition-all ${
              geminiConnected
                ? 'border-success/40 bg-success/10 text-success hover:bg-success/20'
                : 'border-white/10 bg-surface text-text-secondary hover:text-white hover:bg-white/5'
            }`}
            title="Configure Gemini AI Key"
          >
            <Settings size={18} />
          </button>
        </div>
      </div>

      {/* Main Content View */}
      {mode === 'behavioral' ? (
        <BehavioralSimulator
          geminiConnected={geminiConnected}
          onOpenSettings={() => setShowSettings(true)}
        />
      ) : (
        <SystemDesignSimulator
          geminiConnected={geminiConnected}
          onOpenSettings={() => setShowSettings(true)}
        />
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
                Provide your Google Gemini API key to activate real-time AI live interviewer feedback, deep architecture evaluations, and personalized hiring committee scores.
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
                      <span className="text-success font-medium">● Connected (Live AI Active)</span>
                    ) : (
                      <span className="text-warning font-medium">○ Simulation / Offline Fallback</span>
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

// ─────────────────────────────────────────────────────────────────────────────
// BEHAVIORAL INTERVIEW SIMULATOR (Video Call Scenery + STAR Feedback)
// ─────────────────────────────────────────────────────────────────────────────
function BehavioralSimulator({ geminiConnected, onOpenSettings }) {
  const [selectedCompany, setSelectedCompany] = useState(companies[0].id)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [isRecording, setIsRecording] = useState(false)
  const [camEnabled, setCamEnabled] = useState(true)
  const [micEnabled, setMicEnabled] = useState(true)
  const [timer, setTimer] = useState(300) // 5 minutes
  const [timerRunning, setTimerRunning] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [feedback, setFeedback] = useState(null)
  const [showTips, setShowTips] = useState(true)

  // Filter questions
  const filteredQuestions = behavioralQuestions.filter(q => {
    const companyMatch = q.companies.includes(selectedCompany)
    const categoryMatch = selectedCategory === 'All' || q.category === selectedCategory
    return companyMatch && categoryMatch
  })

  const currentQ = filteredQuestions[currentIndex] || behavioralQuestions[0]
  const companyObj = companies.find(c => c.id === selectedCompany) || companies[0]

  // Timer tick
  useEffect(() => {
    let interval = null
    if (timerRunning && timer > 0) {
      interval = setInterval(() => setTimer(t => t - 1), 1000)
    } else if (timer === 0) {
      setTimerRunning(false)
    }
    return () => clearInterval(interval)
  }, [timerRunning, timer])

  // Real-time STAR detection heuristic
  const starIndicators = {
    situation: /(situation|when I was|at my previous|during my time|project was|context|problem was)/i.test(userAnswer),
    task: /(my task|responsible for|my goal|objective was|needed to|assigned to|challenge was)/i.test(userAnswer),
    action: /(I designed|I built|I decided|I implemented|I collaborated|I initiated|I scheduled|my approach)/i.test(userAnswer),
    result: /(resulted in|increased by|reduced by|achieved|outcome was|successfully launched|learned that|metric)/i.test(userAnswer),
  }

  const handleStartSimulation = () => {
    setTimer(300)
    setTimerRunning(true)
    setIsRecording(true)
    setUserAnswer('')
    setFeedback(null)
  }

  const handleSubmitAnswer = async () => {
    if (!userAnswer.trim()) return
    setTimerRunning(false)
    setIsRecording(false)
    setIsAnalyzing(true)

    try {
      const result = await conductBehavioralInterview(
        currentQ.question,
        userAnswer,
        companyObj.name
      )
      setFeedback(result)
    } catch (err) {
      console.error(err)
    } finally {
      setIsAnalyzing(false)
    }
  }

  const handleNextQuestion = () => {
    setUserAnswer('')
    setFeedback(null)
    setTimer(300)
    setTimerRunning(false)
    setCurrentIndex(prev => (prev + 1) % Math.max(1, filteredQuestions.length))
  }

  const formatSecs = (sec) => {
    const m = Math.floor(sec / 60)
    const s = sec % 60
    return `${m}:${s < 10 ? '0' : ''}${s}`
  }

  const categories = ['All', 'Collaboration', 'Growth Mindset', 'Leadership', 'Innovation', 'Customer Obsession', 'Decision Making']

  return (
    <div className="space-y-6">
      {/* Target Company & Category Selector Bar */}
      <div className="glass-card p-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
          <span className="text-xs font-semibold text-text-muted uppercase shrink-0 mr-1">Target Company:</span>
          {companies.map(c => (
            <button
              key={c.id}
              onClick={() => { setSelectedCompany(c.id); setCurrentIndex(0); }}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
                selectedCompany === c.id
                  ? 'bg-white/10 text-white border border-primary/40 shadow-sm'
                  : 'text-text-muted hover:text-text-secondary bg-surface/50'
              }`}
            >
              <span>{c.logo}</span>
              <span>{c.name}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-text-muted uppercase">Topic:</span>
          <select
            value={selectedCategory}
            onChange={(e) => { setSelectedCategory(e.target.value); setCurrentIndex(0); }}
            className="px-3 py-1.5 rounded-lg bg-surface border border-white/10 text-xs text-white focus:outline-none"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Video Call Scenery Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side: Video Call Simulation (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="glass-card overflow-hidden border border-white/10 relative bg-surface-dark">
            {/* Call Header Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-surface border-b border-white/10 text-xs text-text-secondary">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                <span className="font-semibold text-white">Live Onsite Behavioral Loop</span>
                <span className="text-text-muted">| {companyObj.name} Senior Engineering Panel</span>
              </div>
              <div className="flex items-center gap-3">
                <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded font-mono font-medium ${
                  timer < 60 ? 'bg-danger/20 text-danger border border-danger/30' : 'bg-white/5 text-text-secondary'
                }`}>
                  <Clock size={12} />
                  <span>{formatSecs(timer)}</span>
                </div>
                <button
                  onClick={() => setTimerRunning(!timerRunning)}
                  className="p-1 hover:text-white"
                >
                  {timerRunning ? <Pause size={14} /> : <Play size={14} />}
                </button>
              </div>
            </div>

            {/* Video Streams Container */}
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Interviewer Stream */}
              <div className="aspect-video rounded-xl bg-surface-light border border-white/10 relative overflow-hidden flex flex-col justify-between p-4 group">
                {/* Background Ambient Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                
                {/* Interviewer Info Header */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-primary/30 flex items-center justify-center text-sm border border-primary/40">
                      {companyObj.logo}
                    </span>
                    <div>
                      <div className="text-xs font-semibold text-white">Alex Morgan</div>
                      <div className="text-[10px] text-text-muted">Principal Bar Raiser ({companyObj.name})</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-primary/20 text-primary-light border border-primary/30">
                    Interviewer
                  </span>
                </div>

                {/* Animated Voice Visualizer / Avatar */}
                <div className="relative z-10 flex flex-col items-center justify-center my-auto py-2">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl shadow-xl shadow-primary/20 border-2 border-white/20">
                      👩‍💼
                    </div>
                    {/* Pulsing Voice Waves */}
                    <div className="absolute -inset-2 rounded-full border border-primary/40 animate-ping opacity-30" />
                  </div>
                  <div className="flex items-center gap-1 mt-3">
                    {[4, 8, 14, 20, 12, 18, 6, 10].map((h, i) => (
                      <span
                        key={i}
                        className="w-1 bg-secondary rounded-full animate-pulse"
                        style={{ height: `${h}px`, animationDelay: `${i * 120}ms` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Question Prompt Overlay */}
                <div className="relative z-10 bg-black/60 backdrop-blur-md p-2.5 rounded-lg border border-white/10">
                  <div className="text-[10px] text-primary-light font-semibold uppercase tracking-wider mb-0.5">
                    Question {currentIndex + 1} of {filteredQuestions.length}:
                  </div>
                  <div className="text-xs text-white font-medium line-clamp-3">
                    "{currentQ.question}"
                  </div>
                </div>
              </div>

              {/* Candidate (User) Stream */}
              <div className="aspect-video rounded-xl bg-surface-light border border-white/10 relative overflow-hidden flex flex-col justify-between p-4">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-secondary/30 flex items-center justify-center text-sm border border-secondary/40">
                      👨‍💻
                    </span>
                    <div>
                      <div className="text-xs font-semibold text-white">You (Candidate)</div>
                      <div className="text-[10px] text-text-muted">Audio: {micEnabled ? 'Active' : 'Muted'}</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-success/20 text-success border border-success/30">
                    Live Video
                  </span>
                </div>

                {/* Candidate Feed Representation */}
                <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                  {camEnabled ? (
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-2xl shadow-lg border-2 border-white/20">
                      🧑‍💻
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-surface-lighter flex items-center justify-center text-text-muted">
                      <CameraOff size={24} />
                    </div>
                  )}

                  {micEnabled && userAnswer.length > 0 && (
                    <div className="flex items-center gap-1 mt-3">
                      {[6, 12, 18, 10, 16, 8].map((h, i) => (
                        <span
                          key={i}
                          className="w-1 bg-emerald-400 rounded-full animate-bounce"
                          style={{ height: `${h}px`, animationDelay: `${i * 150}ms` }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Cam & Mic Controls Bar */}
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <button
                    onClick={() => setMicEnabled(!micEnabled)}
                    className={`p-2 rounded-lg border text-xs transition-all ${
                      micEnabled ? 'bg-white/10 text-white border-white/20' : 'bg-danger/20 text-danger border-danger/30'
                    }`}
                  >
                    {micEnabled ? <Mic size={14} /> : <MicOff size={14} />}
                  </button>
                  <button
                    onClick={() => setCamEnabled(!camEnabled)}
                    className={`p-2 rounded-lg border text-xs transition-all ${
                      camEnabled ? 'bg-white/10 text-white border-white/20' : 'bg-danger/20 text-danger border-danger/30'
                    }`}
                  >
                    {camEnabled ? <Camera size={14} /> : <CameraOff size={14} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Response Typing & Submission Area */}
            <div className="p-4 bg-surface border-t border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-text-muted flex items-center gap-2">
                  <span>Your Live Spoken Response</span>
                  <span className="text-[10px] text-text-muted">(Speak aloud or type your STAR scenario)</span>
                </label>
                <span className="text-[10px] text-text-muted font-mono">
                  {userAnswer.split(/\s+/).filter(Boolean).length} words
                </span>
              </div>

              <textarea
                value={userAnswer}
                onChange={(e) => {
                  setUserAnswer(e.target.value)
                  if (!timerRunning && e.target.value.length > 0) setTimerRunning(true)
                }}
                placeholder="Structure your answer with STAR: Situation (set the stage), Task (your goal), Action (what specific steps YOU took), and Result (quantifiable metrics, lessons learned)..."
                rows={5}
                className="w-full p-3 rounded-xl bg-surface-dark border border-white/10 text-white text-sm focus:outline-none focus:border-primary placeholder-text-muted/60 font-sans leading-relaxed resize-none"
              />

              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleStartSimulation}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-lighter hover:bg-white/10 text-white text-xs font-medium transition-all"
                  >
                    <RotateCcw size={13} /> Reset Timer
                  </button>
                  <button
                    onClick={handleNextQuestion}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-lighter hover:bg-white/10 text-text-secondary hover:text-white text-xs font-medium transition-all"
                  >
                    Skip Question <ArrowRight size={13} />
                  </button>
                </div>

                <button
                  onClick={handleSubmitAnswer}
                  disabled={isAnalyzing || !userAnswer.trim()}
                  className="glow-button !py-2 !px-5 text-xs font-bold flex items-center gap-2 disabled:opacity-50"
                >
                  {isAnalyzing ? (
                    <>
                      <RefreshCw size={14} className="animate-spin" /> Evaluating STAR...
                    </>
                  ) : (
                    <>
                      <Send size={14} /> Submit Response
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Expandable Interview Tips */}
          <div className="glass-card p-4">
            <button
              onClick={() => setShowTips(!showTips)}
              className="w-full flex items-center justify-between text-xs font-semibold text-text-secondary hover:text-white"
            >
              <span className="flex items-center gap-1.5 text-primary-light">
                <HelpCircle size={14} /> Interviewer Coaching & Strategy Tips
              </span>
              {showTips ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
            <AnimatePresence>
              {showTips && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="pt-3 space-y-2 text-xs text-text-muted"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {currentQ.tips.map((tip, i) => (
                      <div key={i} className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-secondary shrink-0 mt-0.5" />
                        <span className="text-text-secondary text-[11px] leading-snug">{tip}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side: STAR Framework Live Radar & Feedback (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Real-time STAR Detection Meter */}
          <div className="glass-card p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Trophy size={16} className="text-amber-400" />
                Live STAR Coverage
              </h3>
              <span className="text-[10px] text-text-muted">Real-time parser</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {[
                { key: 'situation', label: 'S - Situation', desc: 'Context & Challenge', active: starIndicators.situation },
                { key: 'task', label: 'T - Task', desc: 'Your Responsibilities', active: starIndicators.task },
                { key: 'action', label: 'A - Action', desc: 'Specific Steps Taken', active: starIndicators.action },
                { key: 'result', label: 'R - Result', desc: 'Impact & Metrics', active: starIndicators.result },
              ].map((item) => (
                <div
                  key={item.key}
                  className={`p-3 rounded-xl border transition-all ${
                    item.active
                      ? 'bg-success/10 border-success/30 text-white'
                      : 'bg-white/5 border-white/5 text-text-muted'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold">{item.label}</span>
                    {item.active ? (
                      <CheckCircle2 size={14} className="text-success" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-white/20" />
                    )}
                  </div>
                  <p className="text-[10px] text-text-muted mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI Feedback Display Card */}
          {feedback ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-5 space-y-4 border-primary/30"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">Hiring Committee Score</div>
                  <div className="text-2xl font-black gradient-text">{feedback.score} / 100</div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                  feedback.score >= 70 ? 'bg-success/20 text-success border border-success/30' : 'bg-warning/20 text-warning border border-warning/30'
                }`}>
                  {feedback.score >= 70 ? 'Strong Hire Signal' : 'Needs Practice'}
                </div>
              </div>

              {/* STAR Quality Breakdown */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-white">Component Breakdown</div>
                {feedback.starAnalysis && Object.entries(feedback.starAnalysis).map(([k, v]) => (
                  <div key={k} className="text-xs p-2 rounded-lg bg-surface border border-white/5 flex items-start justify-between gap-2">
                    <span className="font-semibold uppercase text-primary-light shrink-0">{k}:</span>
                    <span className="text-text-secondary text-[11px] text-right">{v.quality}</span>
                  </div>
                ))}
              </div>

              {/* Strengths & Improvements */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="text-xs font-semibold text-success flex items-center gap-1.5">
                  <CheckCircle2 size={13} /> Strengths
                </div>
                <ul className="text-[11px] text-text-secondary space-y-1 list-disc pl-4">
                  {feedback.strengths?.map((s, i) => <li key={i}>{s}</li>)}
                </ul>

                <div className="text-xs font-semibold text-warning flex items-center gap-1.5 pt-2">
                  <AlertCircle size={13} /> Recommendations
                </div>
                <ul className="text-[11px] text-text-secondary space-y-1 list-disc pl-4">
                  {feedback.improvements?.map((imp, i) => <li key={i}>{imp}</li>)}
                </ul>
              </div>

              {/* Overall Feedback */}
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-xs text-text-secondary leading-relaxed">
                <span className="font-bold text-white block mb-1">Debrief Note:</span>
                {feedback.overallFeedback}
              </div>

              <button
                onClick={handleNextQuestion}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-xs shadow-lg shadow-primary/20 hover:scale-[1.01] transition-transform"
              >
                Practice Next Question →
              </button>
            </motion.div>
          ) : (
            <div className="glass-card p-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 mx-auto flex items-center justify-center text-primary-light">
                <Sparkles size={22} />
              </div>
              <h4 className="text-sm font-bold text-white">Awaiting Candidate Response</h4>
              <p className="text-xs text-text-muted leading-relaxed">
                Complete your answer and click <strong>Submit Response</strong>. The AI interviewer will assess your STAR structure, metric quantification, and company alignment.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SYSTEM DESIGN SIMULATOR (Architecture Canvas + Trade-off Evaluator)
// ─────────────────────────────────────────────────────────────────────────────
function SystemDesignSimulator({ geminiConnected, onOpenSettings }) {
  const [selectedTopicId, setSelectedTopicId] = useState(systemDesignTopics[0].id)
  const currentTopic = systemDesignTopics.find(t => t.id === selectedTopicId) || systemDesignTopics[0]

  // Architecture Canvas state: components placed on canvas
  const [placedBlocks, setPlacedBlocks] = useState([
    { id: 1, typeId: 'client', name: 'Mobile / Web App', x: 20, y: 150 },
    { id: 2, typeId: 'lb', name: 'AWS ALB', x: 220, y: 150 },
    { id: 3, typeId: 'gateway', name: 'API Gateway', x: 420, y: 150 },
    { id: 4, typeId: 'microservice', name: 'Feed Service', x: 620, y: 100 },
    { id: 5, typeId: 'cache', name: 'Redis Cache', x: 620, y: 220 },
    { id: 6, typeId: 'sqldb', name: 'Postgres DB', x: 820, y: 150 },
  ])

  // Checklist of requirements
  const [checkedComponents, setCheckedComponents] = useState({})
  // Structured Design Notes
  const [designNotes, setDesignNotes] = useState(
    `# System Requirements\n- QPS: ~50k reads / sec, 5k writes / sec\n- Latency: < 100ms p99\n- Availability: 99.99%\n\n# Data Model & Storage\n- Relational DB for user profiles & relational data\n- Redis cluster for hot feed caching with LRU eviction\n\n# Scalability & Bottlenecks\n- Fan-out on write for regular users\n- Fan-out on read for celebrity accounts (> 1M followers)\n- CDN edge caching for static assets`
  )
  const [timer, setTimer] = useState(45 * 60)
  const [timerRunning, setTimerRunning] = useState(false)
  const [isEvaluating, setIsEvaluating] = useState(false)
  const [evaluation, setEvaluation] = useState(null)

  // Timer tick
  useEffect(() => {
    let interval = null
    if (timerRunning && timer > 0) {
      interval = setInterval(() => setTimer(t => t - 1), 1000)
    }
    return () => clearInterval(interval)
  }, [timerRunning, timer])

  const addBlockToCanvas = (type) => {
    const newId = Date.now()
    setPlacedBlocks(prev => [
      ...prev,
      {
        id: newId,
        typeId: type.id,
        name: type.name,
        x: 100 + (prev.length % 5) * 120,
        y: 80 + (prev.length % 3) * 80
      }
    ])
  }

  const removeBlock = (id) => {
    setPlacedBlocks(prev => prev.filter(b => b.id !== id))
  }

  const toggleComponentCheck = (comp) => {
    setCheckedComponents(prev => ({ ...prev, [comp]: !prev[comp] }))
  }

  const handleEvaluateDesign = async () => {
    setIsEvaluating(true)
    try {
      const placedNames = placedBlocks.map(b => b.name).join(', ')
      const fullSubmission = `Architecture Components Used: ${placedNames}\n\nCandidate Design Notes:\n${designNotes}`
      const res = await evaluateSystemDesign(currentTopic, fullSubmission)
      setEvaluation(res)
    } catch (e) {
      console.error(e)
    } finally {
      setIsEvaluating(false)
    }
  }

  const formatTimer = (s) => {
    const mins = Math.floor(s / 60)
    const secs = s % 60
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`
  }

  return (
    <div className="space-y-6">
      {/* Topic Switcher Bar */}
      <div className="glass-card p-4 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-text-muted uppercase">Select System Design Challenge:</span>
          <div className="flex items-center gap-2 font-mono text-xs text-text-secondary bg-surface px-3 py-1 rounded-lg border border-white/5">
            <Clock size={13} className="text-primary-light" />
            <span>Time Left: {formatTimer(timer)}</span>
            <button
              onClick={() => setTimerRunning(!timerRunning)}
              className="text-xs text-text-muted hover:text-white ml-2"
            >
              {timerRunning ? 'Pause' : 'Start'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {systemDesignTopics.map(t => (
            <button
              key={t.id}
              onClick={() => {
                setSelectedTopicId(t.id)
                setEvaluation(null)
              }}
              className={`p-3 rounded-xl text-left border transition-all ${
                selectedTopicId === t.id
                  ? 'bg-primary/20 border-primary text-white shadow-lg shadow-primary/20'
                  : 'bg-surface border-white/5 text-text-secondary hover:bg-white/5 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-semibold mb-1">
                <span className="truncate">{t.title}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-text-muted">
                <span className="px-1.5 py-0.5 rounded bg-white/5 text-primary-light font-mono">{t.difficulty}</span>
                <span>{t.company.slice(0, 2).join(', ')}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Workspace Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Architecture Component Palette & Canvas (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Component Palette */}
          <div className="glass-card p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <Server size={14} className="text-secondary" /> Architectural Component Blocks
              </span>
              <span className="text-[10px] text-text-muted">Click component to add to whiteboard</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {ARCHITECTURE_BLOCKS.map(block => (
                <button
                  key={block.id}
                  onClick={() => addBlockToCanvas(block)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface hover:bg-white/10 border border-white/10 text-xs text-text-secondary hover:text-white transition-all shadow-sm"
                >
                  <block.icon size={12} className="text-primary-light" />
                  <span>{block.name}</span>
                  <Plus size={10} className="text-text-muted" />
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Whiteboard Canvas */}
          <div className="glass-card p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white flex items-center gap-2">
                <Network size={14} className="text-primary-light" />
                Interactive Distributed Topology ({placedBlocks.length} Nodes)
              </span>
              <button
                onClick={() => setPlacedBlocks([])}
                className="text-[10px] text-danger hover:underline"
              >
                Clear Canvas
              </button>
            </div>

            {/* Canvas Surface with Grid */}
            <div className="h-80 rounded-xl bg-surface-dark border border-white/10 relative overflow-hidden p-3 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px]">
              {placedBlocks.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-text-muted text-xs">
                  <Network size={32} className="mb-2 opacity-40" />
                  Click components from the palette above to design your distributed topology
                </div>
              ) : (
                <div className="relative h-full w-full">
                  {placedBlocks.map((block) => (
                    <motion.div
                      key={block.id}
                      drag
                      dragConstraints={{ top: 0, left: 0, right: 600, bottom: 220 }}
                      className="absolute p-2.5 rounded-xl bg-surface/90 border border-primary/30 backdrop-blur-md shadow-lg shadow-black/40 cursor-grab active:cursor-grabbing flex items-center gap-2 group"
                      style={{ top: `${block.y % 200}px`, left: `${block.x % 500}px` }}
                    >
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <span className="text-xs font-semibold text-white">{block.name}</span>
                      <button
                        onClick={() => removeBlock(block.id)}
                        className="text-text-muted hover:text-danger ml-1 p-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Trash2 size={11} />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Topic Requirements & Considerations */}
          <div className="glass-card p-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Target System Checklist & Constraints
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="space-y-1.5">
                <span className="text-text-muted font-semibold text-[11px]">Key Architecture Components:</span>
                {currentTopic.keyComponents.map((comp, i) => (
                  <label
                    key={i}
                    onClick={() => toggleComponentCheck(comp)}
                    className="flex items-center gap-2 p-2 rounded-lg bg-surface border border-white/5 cursor-pointer hover:bg-white/5"
                  >
                    <input
                      type="checkbox"
                      checked={!!checkedComponents[comp]}
                      onChange={() => {}}
                      className="rounded text-primary focus:ring-0"
                    />
                    <span className={checkedComponents[comp] ? 'line-through text-text-muted' : 'text-text-secondary'}>
                      {comp}
                    </span>
                  </label>
                ))}
              </div>

              <div className="space-y-1.5">
                <span className="text-text-muted font-semibold text-[11px]">System Trade-offs to Address:</span>
                <ul className="space-y-1.5">
                  {currentTopic.considerations.map((c, i) => (
                    <li key={i} className="p-2 rounded-lg bg-white/5 text-text-secondary text-[11px] leading-relaxed">
                      💡 {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Design Notes & Evaluation (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="glass-card p-4 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-white flex items-center gap-1.5">
                <Cpu size={14} className="text-secondary" /> System Design Spec & RFC Notes
              </label>
              <span className="text-[10px] text-text-muted font-mono">Markdown formatted</span>
            </div>

            <textarea
              value={designNotes}
              onChange={(e) => setDesignNotes(e.target.value)}
              rows={12}
              className="w-full p-3 rounded-xl bg-surface-dark border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-primary leading-relaxed resize-none"
              placeholder="Outline your database schema, API contracts, sharding strategy, caching policy, and scalability math..."
            />

            <button
              onClick={handleEvaluateDesign}
              disabled={isEvaluating || !designNotes.trim()}
              className="w-full glow-button !py-3 text-xs font-bold flex items-center justify-center gap-2"
            >
              {isEvaluating ? (
                <>
                  <RefreshCw size={14} className="animate-spin" /> Evaluating Architecture...
                </>
              ) : (
                <>
                  <Send size={14} /> Submit System Design for Review
                </>
              )}
            </button>
          </div>

          {/* AI Architecture Evaluation Panel */}
          {evaluation && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-5 space-y-4 border-primary/30"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <div className="text-xs font-bold text-white uppercase">Architecture Score</div>
                  <div className="text-2xl font-black gradient-text">{evaluation.score} / 100</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-text-muted">Scalability Rating</div>
                  <div className="text-sm font-bold text-secondary">{evaluation.scalabilityScore}%</div>
                </div>
              </div>

              {/* Components covered vs missing */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-success/10 border border-success/20">
                  <div className="font-bold text-success text-[11px] mb-1">Covered Elements</div>
                  <ul className="text-[10px] text-text-secondary space-y-0.5">
                    {evaluation.componentsCovered?.map((c, i) => (
                      <li key={i} className="flex items-center gap-1">✓ {c}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-2.5 rounded-lg bg-warning/10 border border-warning/20">
                  <div className="font-bold text-warning text-[11px] mb-1">Missing Elements</div>
                  <ul className="text-[10px] text-text-secondary space-y-0.5">
                    {evaluation.missingComponents?.map((c, i) => (
                      <li key={i} className="flex items-center gap-1">⚠ {c}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Strengths & Improvements */}
              <div className="space-y-2 text-xs">
                <div className="font-bold text-white text-[11px]">Architectural Strengths:</div>
                <ul className="text-[11px] text-text-secondary list-disc pl-4 space-y-0.5">
                  {evaluation.strengths?.map((s, i) => <li key={i}>{s}</li>)}
                </ul>

                <div className="font-bold text-white text-[11px] pt-1">Potential Bottlenecks & Fixes:</div>
                <ul className="text-[11px] text-text-secondary list-disc pl-4 space-y-0.5">
                  {evaluation.improvements?.map((imp, i) => <li key={i}>{imp}</li>)}
                </ul>
              </div>

              {/* Interviewer Deep-Dive Probing */}
              {evaluation.deepDiveQuestions && evaluation.deepDiveQuestions.length > 0 && (
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 space-y-1.5">
                  <div className="text-[11px] font-bold text-primary-light">
                    Interviewer Probing Questions:
                  </div>
                  <ul className="text-[11px] text-text-secondary space-y-1">
                    {evaluation.deepDiveQuestions.map((q, i) => (
                      <li key={i} className="italic">" {q} "</li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
