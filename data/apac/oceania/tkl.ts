import { Subdivisions } from '../../subdivisions.js'
import type { Country } from '../../types.js'

export const TKL: Country = {
  name: 'Tokelau',
  e164: 690,
  fips: 'TL',
  alpha2: 'TK',
  alpha3: 'TKL',
  numeric: 772,
  undp: 'TKL',
  localities: new Map([
    ['AT', ['Atafu', Subdivisions.ISLAND]],
    ['FA', ['Fakaofo', Subdivisions.ISLAND]],
    ['NU', ['Nukunonu', Subdivisions.ISLAND]],
  ]),
}
