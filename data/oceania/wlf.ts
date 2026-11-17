import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const WLF: Country = {
  name: 'Wallis and Futuna',
  names: { native: 'Wallis-et-Futuna' },
  e164: 681,
  fips: 'WF',
  alpha2: 'WF',
  alpha3: 'WLF',
  ioc: 'WAF',
  numeric: 876,
  undp: 'WLF',
  localities: new Map([
    ['AL', ['Alo', Subdivisions.ADMINISTRATIVE_PRECINCT]],
    ['SG', ['Sigave', Subdivisions.ADMINISTRATIVE_PRECINCT]],
    ['UV', ['Uvea', Subdivisions.ADMINISTRATIVE_PRECINCT]],
  ]),
}
