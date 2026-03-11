import type { Country } from '../../types.js'
import { Subdivisions } from '../../subdivisions.js'

export const KGZ: Country = {
  country: 'Kyrgyzstan',
  e164: 996,
  fips: 'KG',
  alpha2: 'KG',
  alpha3: 'KGZ',
  ioc: 'KGZ',
  numeric: 417,
  undp: 'KGZ',
  localities: new Map([
    ['B', ['Batken', Subdivisions.REGION]],
    ['C', ['Chuy', Subdivisions.REGION]],
    ['GB', ['Bishkek', Subdivisions.CITY]],
    ['GO', ['Osh', Subdivisions.CITY]],
    ['J', ['Jalal-Abad', Subdivisions.REGION]],
    ['N', ['Naryn', Subdivisions.REGION]],
    ['O', ['Osh', Subdivisions.REGION]],
    ['T', ['Talas', Subdivisions.REGION]],
    ['Y', ['Issyk-Kul', Subdivisions.REGION]]
  ])
}
