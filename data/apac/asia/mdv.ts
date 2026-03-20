import { Subdivisions } from '../../subdivisions.js'
import type { Country } from '../../types.js'

export const MDV: Country = {
  name: 'Maldives',
  names: { native: 'ދިވެހިރާއްޖެ' },
  e164: 960,
  fips: 'MV',
  alpha2: 'MV',
  alpha3: 'MDV',
  ioc: 'MDV',
  numeric: 462,
  undp: 'MDV',
  localities: new Map([
    ['MLE', ['Male', Subdivisions.CITY]],
    ['UN', ['North', Subdivisions.PROVINCE]],
    ['US', ['South', Subdivisions.PROVINCE]],
    ['CE', ['Central', Subdivisions.PROVINCE]],
    ['NC', ['North Central', Subdivisions.PROVINCE]],
    ['SC', ['South Central', Subdivisions.PROVINCE]],
    ['UP', ['Upper North', Subdivisions.PROVINCE]],
    ['SU', ['Upper South', Subdivisions.PROVINCE]],
  ]),
}
