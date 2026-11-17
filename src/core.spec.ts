import { describe, expect, it } from '@jest/globals'

import { country, register, subdivision } from './core.js'
import { CAN } from '../data/americas/index.js'
import * as americas from '../data/americas/index.js'
import * as packs from '../data/index.js'

describe('@mapquest/iso-3166/core', () => {
  it('supports registering individual countries', () => {
    register(CAN)
    expect(country('CA')).toBeDefined()
    expect(country('CAN')?.name).toBe('Canada')
    expect(country('CAN')?.subdivisions?.get('ON')?.[0]).toBe('Ontario')
    expect(country('US')).not.toBeDefined()
    expect(subdivision('CA-ON')?.name).toBe('Ontario')
    expect(subdivision('US-IN')).toBeUndefined()
  })

  it('supports registering country packs', () => {
    register(americas)
    expect(country('US')).toBeDefined()
    expect(country('BRA')).toBeDefined()
    expect(country('AUS')).not.toBeDefined()
    expect(subdivision('US-IN')?.name).toBe('Indiana')
    expect(subdivision('AU-NSW')).toBeUndefined()

    const indiana = subdivision('US-IN')
    register(americas)
    expect(country('CAN')).toBe(CAN)
    expect(subdivision('US-IN')).toEqual(indiana)
  })

  it('organizes countries into the five geographic packs', () => {
    expect(Object.keys(packs).sort()).toEqual(['africa', 'americas', 'asia', 'europe', 'oceania'])
    expect(Object.keys(packs.asia)).toEqual(expect.arrayContaining([
      'AFG', 'KAZ', 'TUR',
    ]))
    expect(packs.europe).not.toHaveProperty('TUR')
    expect(packs.africa).toHaveProperty('IOT')
    expect(packs.oceania).not.toHaveProperty('IOT')

    const countries = Object.values(packs).flatMap(pack => Object.values(pack))
    expect(new Set(countries.map(c => c.alpha2)).size).toBe(countries.length)
  })

  it('returns the same cached subdivision across code and name lookups', () => {
    const result = subdivision('CA-ON')
    expect(result?.name).toBe('Ontario')
    expect(result?.country).toBe(CAN)
    expect(subdivision('CA-ON')).toBe(result)
    expect(subdivision('CAN', 'ON')).toBe(result)
    expect(subdivision('Le Canada', 'Ontario')).toBe(result)
  })
})
