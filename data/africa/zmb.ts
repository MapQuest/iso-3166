import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const ZMB: Country = {
  name: 'Zambia',
  e164: 260,
  fips: 'ZA',
  alpha2: 'ZM',
  alpha3: 'ZMB',
  ioc: 'ZAM',
  numeric: 894,
  subdivisions: new Map([
    ['01', ['Western', Subdivisions.PROVINCE]],
    ['02', ['Central', Subdivisions.PROVINCE]],
    ['03', ['Eastern', Subdivisions.PROVINCE]],
    ['04', ['Luapula', Subdivisions.PROVINCE]],
    ['05', ['Northern', Subdivisions.PROVINCE]],
    ['06', ['North-Western', Subdivisions.PROVINCE]],
    ['07', ['Southern', Subdivisions.PROVINCE]],
    ['08', ['Copperbelt', Subdivisions.PROVINCE]],
    ['09', ['Lusaka', Subdivisions.PROVINCE]],
    ['10', ['Muchinga', Subdivisions.PROVINCE]],
  ]),
}
