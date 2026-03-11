import type { Country } from '../../types.js'
import { Subdivisions } from '../../subdivisions.js'

export const TJK: Country = {
  country: 'Tajikistan',
  e164: 992,
  fips: 'TI',
  alpha2: 'TJ',
  alpha3: 'TJK',
  ioc: 'TJK',
  numeric: 762,
  undp: 'TJK',
  localities: new Map([
    ['DU', ['Dushanbe', Subdivisions.CITY]],
    ['GB', ['Gorno-Badakhshan', Subdivisions.AUTONOMOUS_REGION]],
    ['KT', ['Khatlon', Subdivisions.REGION]],
    ['SU', ['Sughd', Subdivisions.REGION]],
    ['RA', ['Districts of Republican Subordination', Subdivisions.REGION]]
  ])
}
