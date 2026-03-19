import { describe, expect, it } from '@jest/globals'

import { country } from './index.js'

describe('.country()', () => {
  it('supports lookup by alpha-2 and alpha-3 code', () => {
    expect(country('CA'))
      .toStrictEqual(expect.objectContaining({ alpha3: 'CAN', name: 'Canada' }))
    expect(country('CAN'))
      .toStrictEqual(expect.objectContaining({ alpha3: 'CAN', name: 'Canada' }))
  })

  it('supports lookup by country name', () => {
    expect(country('Canada'))
      .toStrictEqual(expect.objectContaining({ alpha3: 'CAN', name: 'Canada' }))
  })

  it('supports lookup by localized name', () => {
    expect(country('Deutschland'))
      .toStrictEqual(expect.objectContaining({ alpha3: 'DEU', name: 'Germany' }))
  })

  it('normalizes input before lookup', () => {
    expect(country('Viet Nam'))
      .toStrictEqual(expect.objectContaining({ alpha3: 'VNM', name: 'Vietnam' }))
    expect(country('Turkiye'))
      .toStrictEqual(expect.objectContaining({ alpha3: 'TUR', name: 'Turkey' }))
  })

  it('gracefully handles non-existent keys', () => {
    expect(country('UN')).toBe(undefined)
    expect(country('United Nations')).toBe(undefined)
  })
})
