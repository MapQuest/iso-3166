import { describe, expect, it } from '@jest/globals'

import { country, register } from './core.js'
import { CAN } from '../data/americas/index.js'
import * as americas from '../data/americas/index.js'
import * as packs from '../data/index.js'

describe('@mapquest/iso-3166/core', () => {
  it('supports registering individual countries', () => {
    register(CAN)
    expect(country('CA')).toBeDefined()
    expect(country('CAN')?.name).toBe('Canada')
    expect(country('US')).not.toBeDefined()
  })

  it('supports registering country packs', () => {
    register(americas)
    expect(country('US')).toBeDefined()
    expect(country('BRA')).toBeDefined()
    expect(country('AUS')).not.toBeDefined()
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
})
