import { Subdivisions } from '../../subdivisions.js'
import type { Country } from '../../types.js'

export const FJI: Country = {
  name: 'Fiji',
  e164: 679,
  fips: 'FJ',
  alpha2: 'FJ',
  alpha3: 'FJI',
  ioc: 'FIJ',
  numeric: 242,
  undp: 'FJI',
  localities: new Map([
    ['C', ['Central', Subdivisions.DIVISION]],
    ['E', ['Eastern', Subdivisions.DIVISION]],
    ['N', ['Northern', Subdivisions.DIVISION]],
    ['W', ['Western', Subdivisions.DIVISION]],
    ['R', ['Rotuma', Subdivisions.DEPENDENCY]],
  ]),
}
