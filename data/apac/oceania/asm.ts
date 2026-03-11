import type { Country } from '../../types.js'
import { Subdivisions } from '../../subdivisions.js'

export const ASM: Country = {
  country: 'American Samoa',
  e164: 1684,
  fips: 'AQ',
  alpha2: 'AS',
  alpha3: 'ASM',
  ioc: 'ASA',
  numeric: 16,
  undp: 'ASM',
  localities: new Map([
    ['010', ['Eastern District', Subdivisions.DISTRICT]],
    ['020', ['Manu\'a District', Subdivisions.DISTRICT]],
    ['030', ['Rose Island', Subdivisions.ISLAND]],
    ['040', ['Swains Island', Subdivisions.ISLAND]],
    ['050', ['Western District', Subdivisions.DISTRICT]]
  ])
}
