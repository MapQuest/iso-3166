import type { Country } from '../../types.js'
import { Subdivisions } from '../../subdivisions.js'

export const KIR: Country = {
  country: 'Kiribati',
  e164: 686,
  fips: 'KR',
  alpha2: 'KI',
  alpha3: 'KIR',
  ioc: 'KIR',
  numeric: 296,
  undp: 'KIR',
  localities: new Map([
    ['G', ['Gilbert Islands', Subdivisions.ISLAND_GROUP]],
    ['L', ['Line Islands', Subdivisions.ISLAND_GROUP]],
    ['P', ['Phoenix Islands', Subdivisions.ISLAND_GROUP]]
  ])
}
