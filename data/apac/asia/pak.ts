import { Subdivisions } from '../../subdivisions.js'
import type { Country } from '../../types.js'

export const PAK: Country = {
  country: 'Pakistan',
  e164: 92,
  fips: 'PK',
  alpha2: 'PK',
  alpha3: 'PAK',
  ioc: 'PAK',
  numeric: 586,
  undp: 'PAK',
  localities: new Map([
    ['BA', ['Balochistan', Subdivisions.PROVINCE]],
    ['GB', ['Gilgit-Baltistan', Subdivisions.TERRITORY]],
    ['IS', ['Islamabad Capital Territory', Subdivisions.TERRITORY]],
    ['JK', ['Azad Jammu and Kashmir', Subdivisions.TERRITORY]],
    ['KP', ['Khyber Pakhtunkhwa', Subdivisions.PROVINCE]],
    ['PB', ['Punjab', Subdivisions.PROVINCE]],
    ['SD', ['Sindh', Subdivisions.PROVINCE]],
  ]),
}
