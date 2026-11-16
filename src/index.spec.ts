import { describe, expect, it } from '@jest/globals'

import { country, subdivision } from './index.js'
import * as packs from '../data/index.js'

describe('.country()', () => {
  it('supports lookup by alpha-2 and alpha-3 code', () => {
    expect(country('CA'))
      .toStrictEqual(expect.objectContaining({ alpha3: 'CAN', name: 'Canada' }))
    expect(country('CAN'))
      .toStrictEqual(expect.objectContaining({ alpha3: 'CAN', name: 'Canada' }))
  })

  it('registers every country from the geographic packs', () => {
    const countries = Object.values(packs).flatMap(pack => Object.values(pack))
    for (const c of countries) {
      expect(country(c.alpha2)).toBe(c)
      expect(country(c.alpha3)).toBe(c)
    }
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
    expect(country('Vietnam'))
      .toStrictEqual(expect.objectContaining({ alpha3: 'VNM', name: 'Viet Nam' }))
    expect(country('Turkiye'))
      .toStrictEqual(expect.objectContaining({ alpha3: 'TUR', name: 'Turkey' }))
    expect(country('The Netherlands'))
      .toStrictEqual(expect.objectContaining({ alpha3: 'NLD', name: 'Netherlands' }))
    expect(country('St. Lucia'))
      .toStrictEqual(expect.objectContaining({ alpha3: 'LCA', name: 'Saint Lucia' }))
  })

  it('gracefully handles non-existent keys', () => {
    expect(country('UN')).toBe(undefined)
    expect(country('United Nations')).toBe(undefined)
  })
})

describe('.subdivision()', () => {
  it('returns a named result for a full subdivision code', () => {
    expect(subdivision('JP-27')).toStrictEqual({
      name: 'Osaka',
      type: 'Prefecture',
      country: packs.asia.JPN,
      regionCode: '27',
      code: 'JP-27',
    })
    expect(subdivision('JP-27')?.country).toBe(country('JP'))
    expect(subdivision(' jpn-27 ')).toEqual(subdivision('JP-27'))
    expect(subdivision('JP-01')?.regionCode).toBe('01')
  })

  it('accepts a country and subdivision code or name', () => {
    const indiana = subdivision('US-IN')
    expect(indiana?.name).toBe('Indiana')
    expect(subdivision(' us ', ' in ')).toEqual(indiana)
    expect(subdivision('USA', 'Indiana')).toEqual(indiana)
    expect(subdivision('United States', 'indiana')).toEqual(indiana)
  })

  it('normalizes subdivision names and searches localized names', () => {
    expect(subdivision('Le Canada', 'nouvelle ecosse')?.code).toBe('CA-NS')
    expect(subdivision('Deutschland', 'Bavaria')?.code).toBe('DE-BY')
    expect(subdivision('DE', 'Baden Wurttemberg')?.code).toBe('DE-BW')
  })

  it('returns undefined for missing or malformed lookups', () => {
    expect(subdivision('UN-1')).toBeUndefined()
    expect(subdivision('JP-99')).toBeUndefined()
    expect(subdivision('JP', 'unknown')).toBeUndefined()
    expect(subdivision('IO-01')).toBeUndefined()
    expect(subdivision('AW-01')).toBeUndefined()
    expect(subdivision('')).toBeUndefined()
    expect(subdivision('JP')).toBeUndefined()
    expect(subdivision('JP-27-extra')).toBeUndefined()
    expect(subdivision('JP', '')).toBeUndefined()
  })
})
