// Independent teaching scenarios; not an operational checklist or vehicle specification.
export const flightAcademy = [
  {
    id: 'preflight', title: 'Preflight', role: 'Launch director',
    summary: 'Turn readiness into evidence.',
    detail: 'A GO is a statement about a known configuration. Confirm the vehicle, ground system, flight corridor, and recovery plan before polling the team.',
    evidence: 'Completed inspections, a clear station poll, and an explicit authorization to arm.',
    decision: 'If a prerequisite changes, hold the count. Resolve the cause, then repeat the poll and arm again.',
    handover: 'Record the configuration, held count, responsible station, and the evidence needed to resume.',
    route: 'mission', link: 'Practice the readiness poll',
  },
  {
    id: 'ascent', title: 'Ascent', role: 'Flight dynamics & propulsion',
    summary: 'Watch the trajectory, not just the altitude.',
    detail: 'The vehicle gains height and speed while atmospheric density changes. Max Q is the peak dynamic pressure during the flight; it does not simply mean maximum speed.',
    evidence: 'A coherent altitude and velocity trend, expected engine behavior, and valid navigation data.',
    decision: 'Investigate disagreement between navigation channels before accepting the next command in the training scenario.',
    handover: 'Describe the trend before and after the anomaly. State whether the selected sensor source is trustworthy.',
    route: 'avionics', link: 'Investigate a sensor fault',
  },
  {
    id: 'staging', title: 'Staging', role: 'Vehicle systems & recovery',
    summary: 'One stack becomes two flight plans.',
    detail: 'Staging removes hardware that is no longer needed by the ascending vehicle. The upper stage continues the mission while a recoverable booster follows its own return sequence.',
    evidence: 'The expected cutoff condition, separation confirmation, and upper-stage propulsion status.',
    decision: 'A separation command is not proof of separation. Verify the resulting state before assuming the next stage is ready.',
    handover: 'Keep upper-stage mission status and booster recovery status separate in your report.',
    route: 'landing', link: 'Manage the recovery energy',
  },
  {
    id: 'insertion', title: 'Orbit insertion', role: 'Guidance & mission analysis',
    summary: 'Altitude alone does not make an orbit.',
    detail: 'An orbit depends on position and velocity. A vehicle can reach space and still follow a trajectory back into the atmosphere if it lacks the required sideways velocity.',
    evidence: 'Estimated orbit shape, velocity, engine cutoff confirmation, and the remaining maneuver budget.',
    decision: 'Review the achieved orbit against the intended mission before authorizing deployment.',
    handover: 'Record the reference body and whether apoapsis and periapsis values are radii or altitudes.',
    route: 'mars', link: 'Review the maneuver budget',
  },
  {
    id: 'payload', title: 'Payload', role: 'Spacecraft operations',
    summary: 'Confirm the delivery, then establish the link.',
    detail: 'Payload deployment is a transition between vehicle operations and spacecraft operations. A successful command still needs confirmation of separation and the spacecraft’s resulting condition.',
    evidence: 'Deployment confirmation, a usable communications link, and the spacecraft’s power and attitude status.',
    decision: 'Treat an unconfirmed command as an open item. Do not substitute an animation for telemetry evidence.',
    handover: 'Identify the last confirmed state and the next check the spacecraft team owns.',
    route: 'starlink', link: 'Trace a communications path',
  },
  {
    id: 'transfer', title: 'Transfer', role: 'Flight navigation',
    summary: 'Budget the next destination.',
    detail: 'A transfer changes the trajectory using a planned velocity increment. During an unpowered coast, gravity continues to change the motion even though the main engine is off.',
    evidence: 'A target trajectory, maneuver direction, remaining propellant, and a plan to measure the achieved change.',
    decision: 'Confirm the navigation solution and maneuver budget before committing the training burn.',
    handover: 'Compare planned and achieved outcomes and identify what a later correction would need to resolve.',
    route: 'mars', link: 'Explore the rocket equation',
  },
  {
    id: 'cruise', title: 'Deep-space cruise', role: 'Navigation & communications',
    summary: 'Stay oriented. Stay in contact.',
    detail: 'Cruise operations include navigation updates, spacecraft health checks, and data return. Signal travel time increases with distance, so the ground view is delayed rather than instantaneous.',
    evidence: 'A valid attitude, antenna alignment, confirmed link acquisition, and a received downlink.',
    decision: 'Restore a lost link before declaring the report received. Distinguish a transmission from its acknowledgment.',
    handover: 'Summarize achieved objectives, resolved anomalies, remaining uncertainty, and the next scheduled contact.',
    route: 'mission', link: 'Fly the deep-space scenario',
  },
]

export function circularOrbit(altitudeKm) {
  if (typeof altitudeKm !== 'number' || !Number.isFinite(altitudeKm) || altitudeKm < 0) {
    throw new RangeError('Orbit altitude must be a finite, non-negative number in kilometers.')
  }
  const radiusKm = 6371 + altitudeKm
  const gravitationalParameter = 398600.4418 // km³/s²; Earth model
  return {
    radiusKm,
    speedKmS: Math.sqrt(gravitationalParameter / radiusKm),
    periodMinutes: 2 * Math.PI * Math.sqrt(radiusKm ** 3 / gravitationalParameter) / 60,
  }
}
