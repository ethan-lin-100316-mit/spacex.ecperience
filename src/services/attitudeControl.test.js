import { test } from 'node:test'
import assert from 'node:assert/strict'
import { clampTrim, stepAttitude } from './attitudeControl.js'
const initial = () => ({ angle: 0, angularVelocity: 0, rcsGas: 100 })
test('fine assist converges to a quarter-degree target without main-engine fuel', () => {
  let state = initial()
  for (let i = 0; i < 400; i++) state = stepAttitude(state, { targetDegrees: .25, dt: .025 })
  assert.ok(Math.abs(state.angle * 180 / Math.PI - .25) < .015)
  assert.ok(Math.abs(state.angularVelocity) < .001)
  assert.ok(state.rcsGas < 100 && state.rcsGas > 99)
})
test('coarse commands have opposite signs and trim remains within bounds', () => {
  const left = stepAttitude(initial(), { direction: -1, dt: .1 })
  const right = stepAttitude(initial(), { direction: 1, dt: .1 })
  assert.ok(left.angle < 0 && right.angle > 0)
  assert.equal(clampTrim(90), 15)
  assert.equal(clampTrim(-90), -15)
})
test('empty gas reserve produces no commanded torque and cannot become negative', () => {
  const state = stepAttitude({ ...initial(), rcsGas: 0 }, { direction: 1, dt: .1 })
  assert.equal(state.rcsFiring, 0)
  assert.equal(state.angle, 0)
  assert.equal(state.rcsGas, 0)
})
test('centering damps rotation; a large frame gap is capped', () => {
  let state = { ...initial(), angle: .1, angularVelocity: .04 }
  for (let i = 0; i < 400; i++) state = stepAttitude(state, { targetDegrees: 0, dt: .025 })
  assert.ok(Math.abs(state.angle) < .001)
  assert.deepEqual(stepAttitude(initial(), { direction: 1, dt: 5 }), stepAttitude(initial(), { direction: 1, dt: .15 }))
})
