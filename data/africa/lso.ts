import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const LSO: Country = {
  name: 'Lesotho',
  e164: 266,
  fips: 'LT',
  alpha2: 'LS',
  alpha3: 'LSO',
  ioc: 'LES',
  numeric: 426,
  subdivisions: new Map([
    ['A', ['Maseru', Subdivisions.DISTRICT]],
    ['B', ['Botha-Bothe', Subdivisions.DISTRICT, { local: 'Butha-Buthe' }]],
    ['C', ['Leribe', Subdivisions.DISTRICT]],
    ['D', ['Berea', Subdivisions.DISTRICT]],
    ['E', ['Mafeteng', Subdivisions.DISTRICT]],
    ['F', ['Mohale\'s Hoek', Subdivisions.DISTRICT]],
    ['G', ['Quthing', Subdivisions.DISTRICT]],
    ['H', ['Qacha\'s Nek', Subdivisions.DISTRICT]],
    ['J', ['Mokhotlong', Subdivisions.DISTRICT]],
    ['K', ['Thaba-Tseka', Subdivisions.DISTRICT]],
  ]),
}
