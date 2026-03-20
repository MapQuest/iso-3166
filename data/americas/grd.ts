import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const GRD: Country = {
  name: 'Grenada',
  e164: 1,
  alpha2: 'GD',
  alpha3: 'GRD',
  ioc: 'GRN',
  numeric: 308,
  undp: 'GRD',
  localities: new Map([
    ['01', ['Saint Andrew', Subdivisions.PARISH]],
    ['02', ['Saint David', Subdivisions.PARISH]],
    ['03', ['Saint George', Subdivisions.PARISH]],
    ['04', ['Saint John', Subdivisions.PARISH]],
    ['05', ['Saint Mark', Subdivisions.PARISH]],
    ['06', ['Saint Patrick', Subdivisions.PARISH]],
    ['10', ['Southern Grenadine Islands', Subdivisions.DEPENDENCY]],
  ]),
}
