import type { Country } from '../../types.js'
import { Subdivisions } from '../../subdivisions.js'

export const WLF: Country = {
  country: 'Wallis and Futuna',
  e164: 681,
  fips: 'WF',
  alpha2: 'WF',
  alpha3: 'WLF',
  ioc: 'WAF',
  numeric: 876,
  undp: 'WLF',
  localities: new Map([
    ['AL', ['Alo', Subdivisions.KINGDOM]],
    ['SG', ['Sigave', Subdivisions.KINGDOM]],
    ['UV', ['Uvea', Subdivisions.KINGDOM]]
  ])
}
