import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const GMB: Country = {
  name: 'Gambia',
  e164: 220,
  fips: 'GA',
  alpha2: 'GM',
  alpha3: 'GMB',
  ioc: 'GAM',
  numeric: 270,
  subdivisions: new Map([
    ['B', ['Banjul', Subdivisions.CITY]],
    ['L', ['Lower River', Subdivisions.DIVISION]],
    ['M', ['Central River', Subdivisions.DIVISION]],
    ['N', ['North Bank', Subdivisions.DIVISION]],
    ['U', ['Upper River', Subdivisions.DIVISION]],
    ['W', ['Western', Subdivisions.DIVISION]],
  ]),
}
