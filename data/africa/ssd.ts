import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const SSD: Country = {
  name: 'South Sudan',
  e164: 211,
  fips: 'OD',
  alpha2: 'SS',
  alpha3: 'SSD',
  numeric: 728,
  subdivisions: new Map([
    ['BN', ['Northern Bahr el Ghazal', Subdivisions.STATE]],
    ['BW', ['Western Bahr el Ghazal', Subdivisions.STATE]],
    ['EC', ['Central Equatoria', Subdivisions.STATE]],
    ['EE', ['Eastern Equatoria', Subdivisions.STATE]],
    ['EW', ['Western Equatoria', Subdivisions.STATE]],
    ['JG', ['Jonglei', Subdivisions.STATE]],
    ['LK', ['Lakes', Subdivisions.STATE]],
    ['NU', ['Upper Nile', Subdivisions.STATE]],
    ['UY', ['Unity', Subdivisions.STATE]],
    ['WR', ['Warrap', Subdivisions.STATE]],
  ]),
}
