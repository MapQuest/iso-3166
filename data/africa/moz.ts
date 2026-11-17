import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const MOZ: Country = {
  name: 'Mozambique',
  e164: 258,
  fips: 'MZ',
  alpha2: 'MZ',
  alpha3: 'MOZ',
  ioc: 'MOZ',
  numeric: 508,
  subdivisions: new Map([
    ['A', ['Niassa', Subdivisions.PROVINCE]],
    ['B', ['Manica', Subdivisions.PROVINCE]],
    ['G', ['Gaza', Subdivisions.PROVINCE]],
    ['I', ['Inhambane', Subdivisions.PROVINCE]],
    ['L', ['Maputo', Subdivisions.PROVINCE]],
    ['MPM', ['Maputo', Subdivisions.CITY]],
    ['N', ['Nampula', Subdivisions.PROVINCE]],
    ['P', ['Cabo Delgado', Subdivisions.PROVINCE]],
    ['Q', ['Zambézia', Subdivisions.PROVINCE]],
    ['S', ['Sofala', Subdivisions.PROVINCE]],
    ['T', ['Tete', Subdivisions.PROVINCE]],
  ]),
}
