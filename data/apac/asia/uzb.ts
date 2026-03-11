import { Subdivisions } from '../../subdivisions.js'
import type { Country } from '../../types.js'

export const UZB: Country = {
  country: 'Uzbekistan',
  e164: 998,
  fips: 'UZ',
  alpha2: 'UZ',
  alpha3: 'UZB',
  ioc: 'UZB',
  numeric: 860,
  undp: 'UZB',
  localities: new Map([
    ['AN', ['Andijan', Subdivisions.REGION]],
    ['BU', ['Bukhara', Subdivisions.REGION]],
    ['FA', ['Fergana', Subdivisions.REGION]],
    ['JI', ['Jizzakh', Subdivisions.REGION]],
    ['KH', ['Karakalpakstan', Subdivisions.AUTONOMOUS_REGION]],
    ['NG', ['Namangan', Subdivisions.REGION]],
    ['NW', ['Navoiy', Subdivisions.REGION]],
    ['QA', ['Kashkadarya', Subdivisions.REGION]],
    ['SA', ['Samarkand', Subdivisions.REGION]],
    ['SI', ['Sirdaryo', Subdivisions.REGION]],
    ['SU', ['Surkhandarya', Subdivisions.REGION]],
    ['TK', ['Tashkent', Subdivisions.REGION]],
    ['TO', ['Tashkent', Subdivisions.CITY]],
    ['XO', ['Khorezm', Subdivisions.REGION]],
  ]),
}
