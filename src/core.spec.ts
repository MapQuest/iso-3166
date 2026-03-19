import { describe, expect, it } from '@jest/globals'

import { country, register } from './core.js'
import { CAN } from '../data/americas/index.js'
import * as americas from '../data/americas/index.js'

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
})
