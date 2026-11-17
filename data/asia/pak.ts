import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const PAK: Country = {
  name: 'Pakistan',
  names: { native: 'پاکستان' },
  e164: 92,
  fips: 'PK',
  alpha2: 'PK',
  alpha3: 'PAK',
  ioc: 'PAK',
  numeric: 586,
  undp: 'PAK',
  subdivisions: new Map([
    ['BA', ['Balochistan', Subdivisions.PROVINCE]],
    ['GB', ['Gilgit-Baltistan', Subdivisions.PAKISTAN_ADMINISTERED_AREA]],
    ['IS', ['Islamabad', Subdivisions.FEDERAL_CAPITAL_TERRITORY, { en: 'Islamabad Capital Territory' }]],
    ['JK', ['Azad Jammu and Kashmir', Subdivisions.PAKISTAN_ADMINISTERED_AREA]],
    ['KP', ['Khyber Pakhtunkhwa', Subdivisions.PROVINCE]],
    ['PB', ['Punjab', Subdivisions.PROVINCE]],
    ['SD', ['Sindh', Subdivisions.PROVINCE]],
  ]),
}
