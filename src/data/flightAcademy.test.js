import { test } from 'node:test'
import assert from 'node:assert/strict'
import { circularOrbit } from './flightAcademy.js'

test('400 km circular Earth orbit matches the reference speed and period', () => {
  const orbit = circularOrbit(400)
  assert.ok(Math.abs(orbit.speedKmS - 7.6726) < 0.0001)
  assert.ok(Math.abs(orbit.periodMinutes - 92.4143) < 0.0001)
  assert.equal(orbit.radiusKm, 6771)
})

test('the supported altitude range gives slower speed and longer period as altitude rises', () => {
  const low = circularOrbit(200)
  const high = circularOrbit(2000)
  assert.ok(low.speedKmS > high.speedKmS)
  assert.ok(low.periodMinutes < high.periodMinutes)
  assert.ok(low.speedKmS > 7.7 && low.speedKmS < 7.9)
  assert.ok(high.periodMinutes > 127 && high.periodMinutes < 128)
})

test('distance traveled in one computed period equals the circular circumference', () => {
  for (const altitude of [200, 400, 1000, 2000]) {
    const orbit = circularOrbit(altitude)
    const traveledKm = orbit.speedKmS * orbit.periodMinutes * 60
    assert.ok(Math.abs(traveledKm - 2 * Math.PI * orbit.radiusKm) < 1e-8)
    assert.ok(Object.values(orbit).every(value => Number.isFinite(value) && value > 0))
  }
})

test('non-finite, negative, and non-numeric altitude inputs are rejected', () => {
  for (const altitude of [-1, NaN, Infinity, -Infinity, '400', null, undefined]) {
    assert.throws(() => circularOrbit(altitude), RangeError)
  }
})
