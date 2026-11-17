import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const RWA: Country = {
  name: 'Rwanda',
  e164: 250,
  fips: 'RW',
  alpha2: 'RW',
  alpha3: 'RWA',
  ioc: 'RWA',
  numeric: 646,
  subdivisions: new Map([
    ['01', ['City of Kigali', Subdivisions.CITY, { aliases: ['Ville de Kigal'] }]],
    ['02', ['Eastern', Subdivisions.PROVINCE, { fr: 'Est' }]],
    ['03', ['Northern', Subdivisions.PROVINCE, { fr: 'Nord' }]],
    ['04', ['Western', Subdivisions.PROVINCE, { fr: 'Ouest' }]],
    ['05', ['Southern', Subdivisions.PROVINCE, { fr: 'Sud' }]],
  ]),
}
