import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const VCT: Country = {
  name: 'Saint Vincent and the Grenadines',
  e164: 1,
  fips: 'VC',
  alpha2: 'VC',
  alpha3: 'VCT',
  ioc: 'VIN',
  numeric: 670,
  undp: 'VCT',
  localities: new Map([
    ['01', ['Charlotte', Subdivisions.PARISH]],
    ['02', ['Saint Andrew', Subdivisions.PARISH]],
    ['03', ['Saint David', Subdivisions.PARISH]],
    ['04', ['Saint George', Subdivisions.PARISH]],
    ['05', ['Saint Patrick', Subdivisions.PARISH]],
    ['06', ['Grenadines', Subdivisions.PARISH]],
  ]),
}
