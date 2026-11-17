import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const SLE: Country = {
  name: 'Sierra Leone',
  e164: 232,
  fips: 'SL',
  alpha2: 'SL',
  alpha3: 'SLE',
  ioc: 'SLE',
  numeric: 694,
  subdivisions: new Map([
    ['E', ['Eastern', Subdivisions.PROVINCE]],
    ['N', ['Northern', Subdivisions.PROVINCE]],
    ['NW', ['North Western', Subdivisions.PROVINCE]],
    ['S', ['Southern', Subdivisions.PROVINCE]],
    ['W', ['Western Area (Freetown)', Subdivisions.AREA, { aliases: ['Western Area'] }]],
  ]),
}
