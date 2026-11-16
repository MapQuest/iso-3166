import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const TKM: Country = {
  name: 'Turkmenistan',
  names: { native: 'Türkmenistan' },
  e164: 993,
  fips: 'TX',
  alpha2: 'TM',
  alpha3: 'TKM',
  ioc: 'TKM',
  numeric: 795,
  undp: 'TKM',
  localities: new Map([
    ['A', ['Ahal', Subdivisions.REGION]],
    ['B', ['Balkan', Subdivisions.REGION]],
    ['D', ['Dashoguz', Subdivisions.REGION]],
    ['L', ['Lebap', Subdivisions.REGION]],
    ['M', ['Mary', Subdivisions.REGION]],
    ['S', ['Ashgabat', Subdivisions.CITY]],
  ]),
}
