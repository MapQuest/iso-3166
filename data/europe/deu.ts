import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const DEU: Country = {
  country: 'Germany',
  names: { native: 'Deutschland' },
  e164: 49,
  fips: 'GM',
  alpha2: 'DE',
  alpha3: 'DEU',
  ioc: 'GER',
  numeric: 276,
  undp: 'DEU',
  localities: new Map([
    ['BB', ['Brandenburg', Subdivisions.LAND]],
    ['BE', ['Berlin', Subdivisions.LAND]],
    ['BW', ['Baden-Württemberg', Subdivisions.LAND]],
    ['BY', ['Bayern', Subdivisions.LAND, { en: 'Bavaria' }]],
    ['HB', ['Bremen', Subdivisions.LAND]],
    ['HE', ['Hessen', Subdivisions.LAND, { en: 'Hesse' }]],
    ['HH', ['Hamburg', Subdivisions.LAND]],
    ['MV', ['Mecklenburg-Vorpommern', Subdivisions.LAND]],
    ['NI', ['Niedersachsen', Subdivisions.LAND, { en: 'Lower Saxony' }]],
    ['NW', ['Nordrhein-Westfalen', Subdivisions.LAND, { en: 'North Rhine-Westphalia' }]],
    ['RP', ['Rheinland-Pfalz', Subdivisions.LAND, { en: 'Rhineland-Palatinate' }]],
    ['SH', ['Schleswig-Holstein', Subdivisions.LAND]],
    ['SL', ['Saarland', Subdivisions.LAND]],
    ['SN', ['Sachsen', Subdivisions.LAND, { en: 'Saxony' }]],
    ['ST', ['Sachsen-Anhalt', Subdivisions.LAND, { en: 'Saxony-Anhalt' }]],
    ['TH', ['Thüringen', Subdivisions.LAND, { en: 'Thuringia' }]],
  ]),
}
