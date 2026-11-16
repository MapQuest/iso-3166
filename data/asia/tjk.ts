import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const TJK: Country = {
  name: 'Tajikistan',
  names: { native: 'Тоҷикистон' },
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
    ['RA', ['Districts of Republican Subordination', Subdivisions.REGION]],
  ]),
}
