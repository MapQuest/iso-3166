import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const KIR: Country = {
  name: 'Kiribati',
  e164: 686,
  fips: 'KR',
  alpha2: 'KI',
  alpha3: 'KIR',
  ioc: 'KIR',
  numeric: 296,
  undp: 'KIR',
  localities: new Map([
    ['G', ['Gilbert Islands', Subdivisions.GROUP_OF_ISLANDS]],
    ['L', ['Line Islands', Subdivisions.GROUP_OF_ISLANDS]],
    ['P', ['Phoenix Islands', Subdivisions.GROUP_OF_ISLANDS]],
  ]),
}
