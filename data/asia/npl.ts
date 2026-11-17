import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const NPL: Country = {
  name: 'Nepal',
  names: { native: 'नेपाल' },
  e164: 977,
  fips: 'NP',
  alpha2: 'NP',
  alpha3: 'NPL',
  ioc: 'NEP',
  numeric: 524,
  undp: 'NPL',
  subdivisions: new Map([
    ['P1', ['Koshi', Subdivisions.PROVINCE, { local: 'Province 1' }]],
    ['P2', ['Madhesh', Subdivisions.PROVINCE, { local: 'Province 2' }]],
    ['P3', ['Bagmati', Subdivisions.PROVINCE, { local: 'Province 3' }]],
    ['P4', ['Gandaki', Subdivisions.PROVINCE, { local: 'Province 4' }]],
    ['P5', ['Lumbini', Subdivisions.PROVINCE, { local: 'Province 5' }]],
    ['P6', ['Karnali', Subdivisions.PROVINCE, { local: 'Province 6' }]],
    ['P7', ['Sudurpashchim', Subdivisions.PROVINCE, { local: 'Province 7' }]],
  ]),
}
