import type { Country } from '../../types.js'
import { Subdivisions } from '../../subdivisions.js'

export const SGP: Country = {
  country: 'Singapore',
  e164: 65,
  fips: 'SN',
  alpha2: 'SG',
  alpha3: 'SGP',
  ioc: 'SGP',
  numeric: 702,
  undp: 'SGP',
  localities: new Map([
    ['01', ['Central Singapore', Subdivisions.DISTRICT]],
    ['02', ['North East', Subdivisions.DISTRICT]],
    ['03', ['North West', Subdivisions.DISTRICT]],
    ['04', ['South East', Subdivisions.DISTRICT]],
    ['05', ['South West', Subdivisions.DISTRICT]]
  ])
}
