import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const UZB: Country = {
  name: 'Uzbekistan',
  names: { native: 'Oʻzbekiston' },
  e164: 998,
  fips: 'UZ',
  alpha2: 'UZ',
  alpha3: 'UZB',
  ioc: 'UZB',
  numeric: 860,
  undp: 'UZB',
  subdivisions: new Map([
    ['AN', ['Andijon', Subdivisions.REGION, { en: 'Andijan' }]],
    ['BU', ['Buxoro', Subdivisions.REGION, { en: 'Bukhara' }]],
    ['FA', ['Farg‘ona', Subdivisions.REGION, { en: 'Fergana' }]],
    ['JI', ['Jizzax', Subdivisions.REGION, { en: 'Jizzakh' }]],
    ['NG', ['Namangan', Subdivisions.REGION]],
    ['NW', ['Navoiy', Subdivisions.REGION]],
    ['QA', ['Qashqadaryo', Subdivisions.REGION, { en: 'Kashkadarya' }]],
    ['QR', ['Qoraqalpog‘iston Respublikasi', Subdivisions.REPUBLIC]],
    ['SA', ['Samarqand', Subdivisions.REGION]],
    ['SI', ['Sirdaryo', Subdivisions.REGION]],
    ['SU', ['Surxondaryo', Subdivisions.REGION]],
    ['TK', ['Toshkent', Subdivisions.CITY]],
    ['TO', ['Toshkent', Subdivisions.REGION]],
    ['XO', ['Xorazm', Subdivisions.REGION, { en: 'Khorezm' }]],
  ]),
}
