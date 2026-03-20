import { Subdivisions } from '../../subdivisions.js'
import type { Country } from '../../types.js'

export const NCL: Country = {
  name: 'New Caledonia',
  names: { native: 'Nouvelle-Calédonie' },
  e164: 687,
  fips: 'NC',
  alpha2: 'NC',
  alpha3: 'NCL',
  ioc: 'NCL',
  numeric: 540,
  undp: 'NCL',
  localities: new Map([
    ['01', ['North Province', Subdivisions.PROVINCE]],
    ['02', ['South Province', Subdivisions.PROVINCE]],
    ['03', ['Loyalty Islands Province', Subdivisions.PROVINCE]],
  ]),
}
