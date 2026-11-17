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
  subdivisions: new Map([
    ['DU', ['Dushanbe', Subdivisions.CAPITAL_TERRITORY]],
    ['GB', ['Kŭhistoni Badakhshon', Subdivisions.AUTONOMOUS_REGION, { en: 'Gorno-Badakhshan' }]],
    ['KT', ['Khatlon', Subdivisions.REGION]],
    ['SU', ['Sughd', Subdivisions.REGION]],
    ['RA', ['nohiyahoi tobei jumhurí', Subdivisions.DISTRICTS_UNDER_REPUBLIC_ADMINISTRATION, { en: 'Districts of Republican Subordination' }]],
  ]),
}
