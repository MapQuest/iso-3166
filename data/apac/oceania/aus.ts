import { Subdivisions } from '../../subdivisions.js'
import type { Country } from '../../types.js'

export const AUS: Country = {
  name: 'Australia',
  e164: 61,
  fips: 'AS',
  alpha2: 'AU',
  alpha3: 'AUS',
  ioc: 'AUS',
  numeric: 36,
  undp: 'AUS',
  localities: new Map([
    ['ACT', ['Australian Capital Territory', Subdivisions.TERRITORY]],
    ['NSW', ['New South Wales', Subdivisions.STATE]],
    ['NT', ['Northern Territory', Subdivisions.TERRITORY]],
    ['QLD', ['Queensland', Subdivisions.STATE]],
    ['SA', ['South Australia', Subdivisions.STATE]],
    ['TAS', ['Tasmania', Subdivisions.STATE]],
    ['VIC', ['Victoria', Subdivisions.STATE]],
    ['WA', ['Western Australia', Subdivisions.STATE]],
  ]),
}
