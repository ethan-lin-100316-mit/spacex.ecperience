// Web Audio API synthesized sound generator for SpaceX Mission Control & Engine Testing
// Requires no external files or network assets

class SpaceXSoundManager {
  constructor() {
    this.ctx = null
    this.muted = false
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext
      if (AudioCtx) {
        this.ctx = new AudioCtx()
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume()
    }
  }

  toggleMute() {
    this.muted = !this.muted
    return this.muted
  }

  playBeep(freq = 880, duration = 0.08, type = 'sine') {
    if (this.muted) return
    this.init()
    if (!this.ctx) return

    try {
      const osc = this.ctx.createOscillator()
      const gain = this.ctx.createGain()
      osc.type = type
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime)
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration)
      osc.connect(gain)
      gain.connect(this.ctx.destination)
      osc.start()
      osc.stop(this.ctx.currentTime + duration)
    } catch {
      // Audio not permitted yet
    }
  }

  playCountdownTick(isFinal = false) {
    if (isFinal) {
      this.playBeep(1760, 0.2, 'triangle') // High pitched T-0 tone
    } else {
      this.playBeep(880, 0.06, 'sine')
    }
  }

  playIgnitionRoar(duration = 2.5) {
    if (this.muted) return
    this.init()
    if (!this.ctx) return

    try {
      // White noise buffer for rocket exhaust
      const bufferSize = this.ctx.sampleRate * duration
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate)
      const data = buffer.getChannelData(0)
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1
      }

      const noise = this.ctx.createBufferSource()
      noise.buffer = buffer

      // Low pass filter for deep rumble
      const filter = this.ctx.createBiquadFilter()
      filter.type = 'lowpass'
      filter.frequency.setValueAtTime(140, this.ctx.currentTime)
      filter.frequency.linearRampToValueAtTime(450, this.ctx.currentTime + 0.5)
      filter.frequency.exponentialRampToValueAtTime(180, this.ctx.currentTime + duration)

      const gain = this.ctx.createGain()
      gain.gain.setValueAtTime(0.01, this.ctx.currentTime)
      gain.gain.linearRampToValueAtTime(0.25, this.ctx.currentTime + 0.3)
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration)

      noise.connect(filter)
      filter.connect(gain)
      gain.connect(this.ctx.destination)

      noise.start()
      noise.stop(this.ctx.currentTime + duration)
    } catch {
      // Audio context catch
    }
  }

  playThrusterPulse() {
    if (this.muted) return
    this.init()
    if (!this.ctx) return

    try {
      const bufferSize = this.ctx.sampleRate * 0.12
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate)
      const data = buffer.getChannelData(0)
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.5
      }

      const noise = this.ctx.createBufferSource()
      noise.buffer = buffer

      const filter = this.ctx.createBiquadFilter()
      filter.type = 'bandpass'
      filter.frequency.setValueAtTime(1200, this.ctx.currentTime)

      const gain = this.ctx.createGain()
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12)

      noise.connect(filter)
      filter.connect(gain)
      gain.connect(this.ctx.destination)

      noise.start()
    } catch {}
  }

  playAlarm() {
    if (this.muted) return
    this.init()
    if (!this.ctx) return

    try {
      const osc = this.ctx.createOscillator()
      const gain = this.ctx.createGain()
      osc.type = 'sawtooth'
      osc.frequency.setValueAtTime(440, this.ctx.currentTime)
      osc.frequency.linearRampToValueAtTime(880, this.ctx.currentTime + 0.15)
      osc.frequency.linearRampToValueAtTime(440, this.ctx.currentTime + 0.3)

      gain.gain.setValueAtTime(0.12, this.ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.35)

      osc.connect(gain)
      gain.connect(this.ctx.destination)
      osc.start()
      osc.stop(this.ctx.currentTime + 0.35)
    } catch {}
  }

  playSuccess() {
    if (this.muted) return
    this.init()
    if (!this.ctx) return

    const notes = [523.25, 659.25, 783.99, 1046.50] // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playBeep(freq, 0.18, 'sine')
      }, idx * 75)
    })
  }
}

export const soundManager = new SpaceXSoundManager()
