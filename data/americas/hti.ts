import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const HTI: Country = {
  name: 'Haiti',
  names: { ht: 'Ayiti', fr: 'Haïti' },
  e164: 509,
  fips: 'HA',
  alpha2: 'HT',
  alpha3: 'HTI',
  ioc: 'HAI',
  numeric: 332,
  undp: 'HTI',
  localities: new Map([
    ['AR', ['Artibonite', Subdivisions.DEPARTMENT]],
    ['CE', ['Centre', Subdivisions.DEPARTMENT]],
    ['GA', ["Grand'Anse", Subdivisions.DEPARTMENT]],
    ['NI', ['Nippes', Subdivisions.DEPARTMENT]],
    ['ND', ['Nord', Subdivisions.DEPARTMENT, { en: 'North' }]],
    ['NE', ['Nord-Est', Subdivisions.DEPARTMENT, { en: 'Northeast' }]],
    ['NO', ['Nord-Ouest', Subdivisions.DEPARTMENT, { en: 'Northwest' }]],
    ['OU', ['Ouest', Subdivisions.DEPARTMENT, { en: 'West' }]],
    ['SD', ['Sud', Subdivisions.DEPARTMENT, { en: 'South' }]],
    ['SE', ['Sud-Est', Subdivisions.DEPARTMENT, { en: 'Southeast' }]],
  ]),
}
