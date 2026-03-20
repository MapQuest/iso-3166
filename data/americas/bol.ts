import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const BOL: Country = {
  name: 'Bolivia',
  e164: 591,
  fips: 'BL',
  alpha2: 'BO',
  alpha3: 'BOL',
  ioc: 'BOL',
  numeric: 68,
  undp: 'BOL',
  localities: new Map([
    ['B', ['El Beni', Subdivisions.DEPARTMENT]],
    ['C', ['Cochabamba', Subdivisions.DEPARTMENT]],
    ['H', ['Chuquisaca', Subdivisions.DEPARTMENT]],
    ['L', ['La Paz', Subdivisions.DEPARTMENT]],
    ['N', ['Pando', Subdivisions.DEPARTMENT]],
    ['O', ['Oruro', Subdivisions.DEPARTMENT]],
    ['P', ['Potosí', Subdivisions.DEPARTMENT]],
    ['S', ['Santa Cruz', Subdivisions.DEPARTMENT]],
    ['T', ['Tarija', Subdivisions.DEPARTMENT]],
  ]),
}
