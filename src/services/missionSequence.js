// Authored training sequence: compressed durations, illustrative telemetry, no real launch procedure.
export const stationDefinitions = [
  ['prop', 'PROP', 'Propulsion', 'Propellant configuration verified'],
  ['gnc', 'GNC', 'Guidance', 'Trajectory and navigation checks complete'],
  ['avionics', 'AVN', 'Avionics', 'Three-channel voting check complete'],
  ['chopsticks', 'TWR', 'Recovery', 'Booster recovery corridor configured'],
  ['deluge', 'WTR', 'Water deluge', 'Suppression system available'],
  ['range', 'RNG', 'Range safety', 'Simulated flight corridor clear'],
  ['ld', 'LD', 'Launch director', 'Training sequence authorized'],
]
export const checkDefinitions = [
  { id: 'flight-plan', title: 'Review the flight plan', detail: 'Confirm the destination, staging sequence, and the decision gates you will own.' },
  { id: 'vehicle', title: 'Verify vehicle health', detail: 'Review the illustrative power, flight-computer, and navigation readiness checks.' },
  { id: 'propellant', title: 'Verify propellant readiness', detail: 'Confirm the training propellant configuration and engine-start prerequisites.' },
  { id: 'range', title: 'Clear the launch corridor', detail: 'Confirm the exercise weather, launch corridor, and range-safety readiness.' },
  { id: 'recovery', title: 'Review booster recovery', detail: 'Confirm the notional return corridor and recovery reserve before releasing the booster.' },
  { id: 'communications', title: 'Establish the flight net', detail: 'Confirm telemetry reception and identify the backup link for an in-flight communications fault.' },
]
export const milestones = [[60, 'INTERNAL POWER'], [40, 'QD PURGE'], [30, 'WATER DELUGE'], [15, 'IGNITERS ARMED'], [10, 'TERMINAL COUNT'], [0, 'LIFTOFF']]
export const flightStages = [
  { id: 'ascent', title: 'Atmospheric ascent', duration: 70, command: 'SEPARATE', commandLabel: 'Authorize stage separation',
    description: 'Climb through the atmosphere, pass maximum dynamic pressure, and reach the first-stage cutoff gate.',
    learn: 'Max Q describes the peak of dynamic pressure, not maximum speed. As air thins, a faster vehicle can experience a lower aerodynamic load.' },
  { id: 'stage2', title: 'Upper-stage flight', duration: 110, command: 'INSERT_ORBIT', commandLabel: 'Confirm orbit insertion',
    description: 'Build horizontal velocity while the booster returns along a separate recovery branch. Review the insertion state before accepting the orbit.',
    learn: 'Orbit requires sufficient sideways velocity. Reaching a high altitude alone does not keep a spacecraft from falling back to Earth.' },
  { id: 'orbit', title: 'Orbital operations', duration: 40, command: 'DEPLOY_PAYLOAD', commandLabel: 'Deploy the payload',
    description: 'Coast in the parking orbit, verify the spacecraft state, and authorize the training payload deployment.',
    learn: 'Payload deployment has its own readiness checks. Confirm the orbital state and communications before release.' },
  { id: 'transfer', title: 'Transfer preparation', duration: 60, command: 'COMMIT_TRANSFER', commandLabel: 'Commit the departure burn',
    description: 'The deep-space demonstrator remains attached after payload deployment. Coast, review the departure plan, and authorize the burn.',
    learn: 'Departure changes the trajectory and consumes delta-v. A real transfer depends on geometry, timing, reserves, and navigation uncertainty.' },
  { id: 'cruise', title: 'Outbound cruise', duration: 45, command: 'ALIGN_ANTENNA', commandLabel: 'Align the communications antenna',
    description: 'Track the outbound demonstrator, point its antenna, and return the mission report to complete the flight.',
    learn: 'A spacecraft keeps moving during a communications interruption. Antenna pointing, link margin, and propagation delay are part of mission operations.' },
]
export function initialMission() {
  return { phase: 'standby', countdown: 60, countdownElapsed: 0, flightSeconds: 0, stage: 'ascent', stageSeconds: 0,
    paused: false, missionType: 'deep-space', checks: Object.fromEntries(checkDefinitions.map(({ id }) => [id, false])),
    stations: Object.fromEntries(stationDefinitions.map(([id]) => [id, true])), armed: false, polled: false, reason: '', fault: null,
    payloadDeployed: false, antennaAligned: false, recovered: false, completedCommands: [], milestones: [], holds: 0, faultsResolved: 0,
    log: ['T−60 / TRAINING FLIGHT. Review six preflight checks, then poll seven readiness stations.'] }
}
const beforeLaunch = state => ['standby', 'hold'].includes(state.phase)
const log = (state, message) => [...state.log.slice(-99), message]
const flightLog = (state, message) => log(state, `T+${state.flightSeconds} / ${message}`)
const stageDefinition = state => flightStages.find(stage => stage.id === state.stage)
const event = (state, id, title) => state.milestones.some(item => item.id === id) ? state.milestones : [...state.milestones, { id, title, time: state.flightSeconds }]
export const allStationsGo = state => stationDefinitions.every(([id]) => state.stations[id] === true)
export const allChecksComplete = state => checkDefinitions.every(({ id }) => state.checks[id] === true)
export const canStart = state => beforeLaunch(state) && allChecksComplete(state) && allStationsGo(state) && state.polled && state.armed
export const canCommand = state => state.phase === 'flight' && !state.paused && !state.fault && state.stageSeconds >= stageDefinition(state).duration
function transition(state, stage, command, title) {
  return { ...state, stage, stageSeconds: 0, completedCommands: [...state.completedCommands, command], milestones: event(state, command, title), log: flightLog(state, title) }
}
function finish(state, command, title) {
  return { ...state, phase: 'complete', paused: false, completedCommands: [...state.completedCommands, command], milestones: event(state, command, title), log: flightLog(state, title) }
}
const stageEvents = {
  ascent: { 12: ['roll', 'ROLL PROGRAM. Vehicle pitches toward the illustrative downrange corridor.'],
    35: ['max-q', 'MAX Q PASSED. The authored dynamic-pressure peak is behind the vehicle.'],
    70: ['cutoff', 'FIRST-STAGE CUTOFF. Separation gate ready; awaiting authorization.'] },
  stage2: { 1: ['upper-ignition', 'UPPER-STAGE IGNITION. Booster recovery branch active.'],
    25: ['boostback', 'BOOSTER RETURN. Illustrative boostback and descent sequence underway.'],
    50: ['recovery', 'BOOSTER RECOVERED. Training recovery sequence complete.'],
    110: ['insertion-ready', 'UPPER-STAGE CUTOFF. Review the parking-orbit insertion state.'] },
  orbit: { 40: ['deployment-ready', 'PAYLOAD READY. Parking orbit and deployment configuration checked.'] },
  transfer: { 60: ['departure-ready', 'DEPARTURE GATE READY. Review navigation and authorize the notional departure burn.'] },
  cruise: { 45: ['downlink-ready', 'OUTBOUND CHECKPOINT. Align the antenna, then transmit the mission report.'] },
}
export function missionReducer(state, action) {
  switch (action.type) {
    case 'RESET': return initialMission()
    case 'CONFIGURE':
      if (state.phase !== 'standby' || !['orbit', 'deep-space'].includes(action.missionType) || action.missionType === state.missionType) return state
      return { ...state, missionType: action.missionType, checks: { ...state.checks, 'flight-plan': false }, polled: false, armed: false,
        log: log(state, `T−${state.countdown} / Flight plan changed to ${action.missionType === 'orbit' ? 'ORBITAL DELIVERY' : 'DEEP-SPACE DEMONSTRATOR'}. Review the flight plan again.`) }
    case 'CHECK': {
      if (!beforeLaunch(state) || !checkDefinitions.some(({ id }) => id === action.id)) return state
      const checks = { ...state.checks, [action.id]: !state.checks[action.id] }
      return { ...state, checks, polled: false, armed: false, log: log(state, `T−${state.countdown} / PREFLIGHT ${action.id.toUpperCase()} ${checks[action.id] ? 'REVIEWED' : 'REOPENED'}.`) }
    }
    case 'TERMINAL_PRESET':
      if (!beforeLaunch(state)) return state
      return { ...state, phase: 'standby', countdown: 10, polled: false, armed: false, reason: '', log: log(state, 'T−10 / Short countdown loaded. Checks and station faults retained. Fresh poll and arm required.') }
    case 'POLL': {
      if (!beforeLaunch(state)) return state
      const ready = allChecksComplete(state) && allStationsGo(state)
      return { ...state, polled: ready, armed: false, log: log(state, ready ? `T−${state.countdown} / POLL COMPLETE. Six reviews complete; seven stations report GO.` : `T−${state.countdown} / POLL REJECTED. Complete every review and restore all stations to GO.`) }
    }
    case 'ARM':
      if (!beforeLaunch(state)) return state
      return { ...state, armed: Boolean(action.value && state.polled && allChecksComplete(state) && allStationsGo(state)) }
    case 'START':
      if (!canStart(state)) return state
      return { ...state, phase: 'running', reason: '', log: log(state, `T−${state.countdown} / TERMINAL SEQUENCE ${state.phase === 'hold' ? 'RESUMED' : 'STARTED'}.`) }
    case 'HOLD':
      if (state.phase !== 'running') return state
      return { ...state, phase: 'hold', armed: false, polled: false, holds: state.holds + 1, reason: action.reason || 'Launch director manual hold', log: log(state, `T−${state.countdown} / HOLD. ${action.reason || 'Launch director manual hold'}. Re-poll required.`) }
    case 'STATION': {
      if (!['standby', 'hold', 'running'].includes(state.phase) || !stationDefinitions.some(([id]) => id === action.id)) return state
      const stations = { ...state.stations, [action.id]: !state.stations[action.id] }
      const name = stationDefinitions.find(([id]) => id === action.id)[1]
      const holding = !stations[action.id] && state.phase === 'running'
      return { ...state, stations, armed: false, polled: false, phase: holding ? 'hold' : state.phase, holds: state.holds + Number(holding), reason: holding ? `${name} reported NO-GO` : state.reason,
        log: log(state, `T−${state.countdown} / ${holding ? 'AUTOMATIC HOLD. ' : ''}${name} ${stations[action.id] ? 'restored to GO. Re-poll required.' : 'reported NO-GO.'}`) }
    }
    case 'TICK': {
      if (state.phase !== 'running') return state
      if (!allChecksComplete(state) || !allStationsGo(state)) return missionReducer(state, { type: 'HOLD', reason: 'Readiness prerequisite lost' })
      const countdown = Math.max(0, state.countdown - 1)
      const next = { ...state, countdown, countdownElapsed: state.countdownElapsed + 1 }
      if (countdown === 0) return { ...next, phase: 'flight', armed: false, milestones: event(state, 'liftoff', 'Liftoff — vehicle clears the tower'), log: log(state, 'T+0 / IGNITION. LIFTOFF. Vehicle clears the tower; atmospheric ascent begins.') }
      const milestone = milestones.find(([time]) => time === countdown)
      return { ...next, log: milestone ? log(state, `T−${countdown} / ${milestone[1]}.`) : state.log }
    }
    case 'PAUSE':
      if (state.phase !== 'flight') return state
      return { ...state, paused: !state.paused, log: flightLog(state, state.paused ? 'TRAINING CLOCK RESUMED.' : 'TRAINING CLOCK PAUSED. This pauses the exercise, not a real vehicle.') }
    case 'INJECT_FAULT': {
      if (state.phase !== 'flight' || state.fault) return state
      const valid = action.fault === 'navigation' ? ['ascent', 'stage2'].includes(state.stage) : action.fault === 'communications' && ['orbit', 'transfer', 'cruise'].includes(state.stage)
      if (!valid) return state
      return { ...state, fault: action.fault, log: flightLog(state, `${action.fault === 'navigation' ? 'NAVIGATION SENSOR DISAGREEMENT' : 'PRIMARY COMMUNICATIONS LINK LOST'}. Training clock suspended for fault response.`) }
    }
    case 'RESOLVE_FAULT': {
      const matching = state.fault === 'navigation' && action.resolution === 'backup-navigation' || state.fault === 'communications' && action.resolution === 'backup-link'
      if (state.phase !== 'flight' || !matching) return state
      return { ...state, fault: null, faultsResolved: state.faultsResolved + 1, log: flightLog(state, state.fault === 'navigation' ? 'NAVIGATION RESTORED. Independent backup selected and agreement checked.' : 'COMMUNICATIONS RESTORED. Backup link selected and telemetry verified.') }
    }
    case 'FLIGHT_TICK': {
      if (state.phase !== 'flight' || state.paused || state.fault || state.stageSeconds >= stageDefinition(state).duration) return state
      let next = { ...state, stageSeconds: state.stageSeconds + 1, flightSeconds: state.flightSeconds + 1 }
      const currentEvent = stageEvents[state.stage]?.[next.stageSeconds]
      if (currentEvent) next = { ...next, milestones: event(next, currentEvent[0], currentEvent[1]), log: flightLog(next, currentEvent[1]) }
      if (state.stage === 'stage2' && next.stageSeconds >= 50) next.recovered = true
      return next
    }
    case 'FLIGHT_COMMAND': {
      if (!canCommand(state)) return state
      const command = action.command
      if (state.stage === 'ascent' && command === 'SEPARATE') return transition(state, 'stage2', command, 'STAGE SEPARATION CONFIRMED. Upper stage released; booster recovery begins.')
      if (state.stage === 'stage2' && command === 'INSERT_ORBIT') return transition(state, 'orbit', command, 'PARKING ORBIT CONFIRMED. Illustrative 200 km circular orbit accepted.')
      if (state.stage === 'orbit' && command === 'DEPLOY_PAYLOAD') {
        const deployed = { ...state, payloadDeployed: true }
        return state.missionType === 'orbit' ? finish(deployed, command, 'ORBITAL DELIVERY COMPLETE. Payload deployed, link acquired, booster recovered.') : transition(deployed, 'transfer', command, 'PAYLOAD DEPLOYED. Deep-space demonstrator remains attached for departure preparation.')
      }
      if (state.stage === 'transfer' && command === 'COMMIT_TRANSFER') return transition(state, 'cruise', command, 'DEPARTURE BURN COMPLETE. Demonstrator on its illustrative outbound trajectory.')
      if (state.stage === 'cruise' && command === 'ALIGN_ANTENNA' && !state.antennaAligned) return { ...state, antennaAligned: true, completedCommands: [...state.completedCommands, command], milestones: event(state, command, 'Antenna aligned — downlink available'), log: flightLog(state, 'ANTENNA ALIGNED. Ground link acquired; mission report ready to transmit.') }
      if (state.stage === 'cruise' && command === 'TRANSMIT_REPORT' && state.antennaAligned) return finish(state, command, 'DEEP-SPACE DEMONSTRATION COMPLETE. Mission report received on the ground.')
      return state
    }
    default: return state
  }
}
const interpolate = (start, end, fraction) => start + (end - start) * fraction
const rounded = value => Math.round(value * 100) / 100
/** Values use km, km/s and percent. Authored interpolation, not numerical trajectory predictions. */
export function getTelemetry(state) {
  if (!['flight', 'complete'].includes(state.phase)) return { altitude: 0, velocity: 0, propellant: 100, downrange: 0, signal: 100, apoapsis: null, periapsis: null }
  const fraction = Math.min(1, Math.max(0, state.stageSeconds / stageDefinition(state).duration))
  const profiles = {
    ascent: { altitude: [0, 80], velocity: [0, 2.4], propellant: [100, 8], downrange: [0, 150] },
    stage2: { altitude: [80, 200], velocity: [2.4, 7.8], propellant: [100, 25], downrange: [150, 1600] },
    orbit: { altitude: [200, 200], velocity: [7.8, 7.8], propellant: [25, 25], downrange: [1600, 2200] },
    transfer: { altitude: [200, 200], velocity: [7.8, 7.8], propellant: [25, 25], downrange: [2200, 3100] },
    cruise: { altitude: [350, 12000], velocity: [10.9, 10.1], propellant: [14, 12], downrange: [3300, 15000] },
  }
  const telemetry = Object.fromEntries(Object.entries(profiles[state.stage]).map(([key, values]) => [key, rounded(interpolate(...values, fraction))]))
  return { ...telemetry, signal: state.fault === 'communications' ? 0 : state.stage === 'cruise' ? state.antennaAligned ? 94 : 42 : 98,
    apoapsis: ['orbit', 'transfer'].includes(state.stage) ? 200 : null, periapsis: ['orbit', 'transfer', 'cruise'].includes(state.stage) ? 200 : null }
}
export function getMissionReport(state) {
  return { title: 'Engineering flight-deck training report', outcome: state.phase === 'complete' ? 'Mission complete' : state.phase === 'flight' ? 'Flight in progress' : 'Prelaunch exercise',
    missionType: state.missionType, simulatedElapsedSeconds: state.countdownElapsed + state.flightSeconds,
    recovery: state.recovered ? 'Booster recovered in the authored scenario' : 'Recovery not completed', payloadDeployed: state.payloadDeployed,
    completedChecks: checkDefinitions.filter(({ id }) => state.checks[id]).map(({ title }) => title), completedCommands: [...state.completedCommands],
    milestones: state.milestones.map(item => ({ ...item })), holds: state.holds, faultsResolved: state.faultsResolved, events: [...state.log],
    model: 'Independent, fictional educational scenario. Timings, telemetry, recovery, and departure are authored illustrations, not SpaceX procedures or numerical trajectory predictions.' }
}
