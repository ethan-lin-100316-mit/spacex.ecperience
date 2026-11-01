import { createContext, useContext, useEffect, useState } from 'react'

const TrainingContext = createContext(null)
const storageKey = 'spacex-training-v1'
const initial = { track: 'systems', labs: {} }

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey))
    return saved && typeof saved.labs === 'object' && saved.labs !== null ? saved : initial
  } catch { return initial }
}

export function TrainingProvider({ children }) {
  const [progress, setProgress] = useState(loadProgress)
  const [storageAvailable, setStorageAvailable] = useState(true)
  useEffect(() => {
    try { localStorage.setItem(storageKey, JSON.stringify(progress)); setStorageAvailable(true) }
    catch { setStorageAvailable(false) }
  }, [progress])
  const updateLab = (id, patch) => setProgress(previous => ({
    ...previous,
    labs: { ...previous.labs, [id]: { ...previous.labs[id], ...patch } },
  }))
  const selectTrack = track => setProgress(previous => ({ ...previous, track }))
  return <TrainingContext.Provider value={{ progress, updateLab, selectTrack, storageAvailable }}>{children}</TrainingContext.Provider>
}

export function useTraining() { return useContext(TrainingContext) }
