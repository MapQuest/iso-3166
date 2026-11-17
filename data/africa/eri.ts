import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const ERI: Country = {
  name: 'Eritrea',
  e164: 291,
  fips: 'ER',
  alpha2: 'ER',
  alpha3: 'ERI',
  ioc: 'ERI',
  numeric: 232,
  subdivisions: new Map([
    ['AN', ['Ansabā', Subdivisions.REGION]],
    ['DK', ['Janūbī al Baḩrī al Aḩmar', Subdivisions.REGION, { 'ti-Latn': 'Debubawi K’eyyĭḥ Baḥri' }]],
    ['DU', ['Al Janūbī', Subdivisions.REGION]],
    ['GB', ['Qāsh-Barkah', Subdivisions.REGION, { 'ti-Latn': 'Gash-Barka' }]],
    ['MA', ['Al Awsaţ', Subdivisions.REGION]],
    ['SK', ['Shimālī al Baḩrī al Aḩmar', Subdivisions.REGION, { 'ti-Latn': 'Semienawi K’eyyĭḥ Baḥri' }]],
  ]),
}
