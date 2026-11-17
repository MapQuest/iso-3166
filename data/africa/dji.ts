import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const DJI: Country = {
  name: 'Djibouti',
  e164: 253,
  fips: 'DJ',
  alpha2: 'DJ',
  alpha3: 'DJI',
  ioc: 'DJI',
  numeric: 262,
  subdivisions: new Map([
    ['AR', ['Arta', Subdivisions.REGION]],
    ['AS', ['Ali Sabieh', Subdivisions.REGION]],
    ['DI', ['Dikhil', Subdivisions.REGION]],
    ['DJ', ['Djibouti', Subdivisions.CITY]],
    ['OB', ['Obock', Subdivisions.REGION]],
    ['TA', ['Tadjourah', Subdivisions.REGION]],
  ]),
}
