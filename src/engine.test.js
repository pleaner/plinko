// engine.test.js
import { expect, test } from 'vitest'
import { Engine } from './engine.ts'

// Create a Round
test('Create a round', () => {

  const engine = new Engine();
  const round = engine.run()

  expect(round.path).toHaveLength(8)
  expect(round.path).toContain(0)
  expect(round.path).toContain(1)
  expect(round.timestamp).toBeLessThanOrEqual(Date.now())
  expect(round.bucket).toBeGreaterThan(-5)
  expect(round.bucket).toBeLessThan(5)

  console.log(round)

})


// Monte Carlo Simulation of Paths
test('Path bucket probabilities', () => {

  // helper
  const percent = (tally) => (tally / trials * 100).toFixed(2)

  const engine = new Engine();

  let tallies = {}
  let trials = 10_000_000

  for (let i = 0; i < trials; i++) {
    const round = engine.run();
    let bucket = round.bucket
    tallies[bucket] = tallies[bucket] == null ? 0 : tallies[bucket] + 1
  }

  for (const [bucket, count] of Object.entries(tallies)) {
    console.log(`${bucket} -> ${count} -> ${percent(count)}% `)
  }

  expect(percent(tallies[-4])).toBeCloseTo(0.4, 1)
  expect(percent(tallies[-3])).toBeCloseTo(3.1, 1)
  expect(percent(tallies[-2])).toBeCloseTo(10.94, 1)
  expect(percent(tallies[-1])).toBeCloseTo(21.9, 1)
  expect(percent(tallies[0])).toBeCloseTo(27.35, 1)
  expect(percent(tallies[1])).toBeCloseTo(21.9, 1)
  expect(percent(tallies[2])).toBeCloseTo(10.9, 1)
  expect(percent(tallies[3])).toBeCloseTo(3.1, 1)
  expect(percent(tallies[4])).toBeCloseTo(0.4, 1)
})