// Educational cold-gas attitude assist. Torque, damping and reserve are game values.
export const clampTrim = degrees => Math.max(-15, Math.min(15, degrees))
export function stepAttitude(state, { targetDegrees = 0, direction = 0, assist = true, dt }) {
  const step = Math.max(0, Math.min(.15, dt))
  const error = clampTrim(targetDegrees) * Math.PI / 180 - state.angle
  const demand = direction ? direction * .055 : assist ? .8 * error - 1.5 * state.angularVelocity : 0
  const torque = state.rcsGas > 0 ? Math.max(-.055, Math.min(.055, demand)) : 0
  const angularVelocity = Math.max(-.18, Math.min(.18, (state.angularVelocity + torque * step) * Math.pow(.94, step)))
  return { angle: state.angle + angularVelocity * step, angularVelocity,
    rcsGas: Math.max(0, state.rcsGas - Math.abs(torque) / .055 * .75 * step),
    rcsFiring: Math.abs(torque) > .0005 ? Math.sign(torque) : 0 }
}
