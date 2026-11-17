import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const COM: Country = {
  name: 'Comoros',
  e164: 269,
  fips: 'CN',
  alpha2: 'KM',
  alpha3: 'COM',
  ioc: 'COM',
  numeric: 174,
  subdivisions: new Map([
    ['A', ['Anjouan', Subdivisions.ISLAND, { ar: 'Andjouân' }]],
    ['G', ['Grande Comore', Subdivisions.ISLAND, { ar: 'Andjazîdja' }]],
    ['M', ['Mohéli', Subdivisions.ISLAND]],
  ]),
}
