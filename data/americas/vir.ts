import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const VIR: Country = {
  name: 'United States Virgin Islands',
  e164: 1,
  fips: 'VQ',
  alpha2: 'VI',
  alpha3: 'VIR',
  ioc: 'ISV',
  numeric: 850,
  undp: 'VIR',
  localities: new Map([
    ['C', ['Saint Croix', Subdivisions.DISTRICT]],
    ['J', ['Saint John', Subdivisions.DISTRICT]],
    ['T', ['Saint Thomas', Subdivisions.DISTRICT]],
  ]),
}
