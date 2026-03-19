import { Subdivisions } from '../../subdivisions.js'
import type { Country } from '../../types.js'

export const NIU: Country = {
  name: 'Niue',
  e164: 683,
  fips: 'NE',
  alpha2: 'NU',
  alpha3: 'NIU',
  ioc: 'NIU',
  numeric: 570,
  undp: 'NIU',
  localities: new Map([
    ['01', ['Alofi', Subdivisions.VILLAGE]],
    ['02', ['Avatele', Subdivisions.VILLAGE]],
    ['03', ['Hakupu', Subdivisions.VILLAGE]],
    ['04', ['Hikutavake', Subdivisions.VILLAGE]],
    ['05', ['Lakepa', Subdivisions.VILLAGE]],
    ['06', ['Liku', Subdivisions.VILLAGE]],
    ['07', ['Makefu', Subdivisions.VILLAGE]],
    ['08', ['Mutalau', Subdivisions.VILLAGE]],
    ['09', ['Namukulu', Subdivisions.VILLAGE]],
    ['10', ['Tamakautoga', Subdivisions.VILLAGE]],
    ['11', ['Toi', Subdivisions.VILLAGE]],
    ['12', ['Tuapa', Subdivisions.VILLAGE]],
    ['13', ['Vaiea', Subdivisions.VILLAGE]],
    ['14', ['Niue', Subdivisions.ISLAND]],
  ]),
}
