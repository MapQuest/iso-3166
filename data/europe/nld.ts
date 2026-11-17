import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const NLD: Country = {
  name: 'Netherlands',
  names: { native: 'Nederland' },
  e164: 31,
  fips: 'NL',
  alpha2: 'NL',
  alpha3: 'NLD',
  ioc: 'NED',
  numeric: 528,
  undp: 'NLD',
  localities: new Map([
    ['AW', ['Aruba', Subdivisions.COUNTRY]],
    ['BQ1', ['Bonaire', Subdivisions.SPECIAL_MUNICIPALITY]],
    ['BQ2', ['Saba', Subdivisions.SPECIAL_MUNICIPALITY]],
    ['BQ3', ['Sint Eustatius', Subdivisions.SPECIAL_MUNICIPALITY]],
    ['CW', ['Curaçao', Subdivisions.COUNTRY]],
    ['DR', ['Drenthe', Subdivisions.PROVINCE]],
    ['FL', ['Flevoland', Subdivisions.PROVINCE]],
    ['FR', ['Fryslân', Subdivisions.PROVINCE, { en: 'Friesland' }]],
    ['GE', ['Gelderland', Subdivisions.PROVINCE]],
    ['GR', ['Groningen', Subdivisions.PROVINCE]],
    ['LI', ['Limburg', Subdivisions.PROVINCE]],
    ['NB', ['Noord-Brabant', Subdivisions.PROVINCE, { en: 'North Brabant' }]],
    ['NH', ['Noord-Holland', Subdivisions.PROVINCE, { en: 'North Holland' }]],
    ['OV', ['Overijssel', Subdivisions.PROVINCE]],
    ['SX', ['Sint Maarten', Subdivisions.COUNTRY]],
    ['UT', ['Utrecht', Subdivisions.PROVINCE]],
    ['ZE', ['Zeeland', Subdivisions.PROVINCE]],
    ['ZH', ['Zuid-Holland', Subdivisions.PROVINCE, { en: 'South Holland' }]],
  ]),
}
