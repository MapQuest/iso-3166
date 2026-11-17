import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const MLI: Country = {
  name: 'Mali',
  e164: 223,
  fips: 'ML',
  alpha2: 'ML',
  alpha3: 'MLI',
  ioc: 'MLI',
  numeric: 466,
  subdivisions: new Map([
    ['1', ['Kayes', Subdivisions.REGION]],
    ['2', ['Koulikoro', Subdivisions.REGION]],
    ['3', ['Sikasso', Subdivisions.REGION]],
    ['4', ['Ségou', Subdivisions.REGION]],
    ['5', ['Mopti', Subdivisions.REGION]],
    ['6', ['Tombouctou', Subdivisions.REGION]],
    ['7', ['Gao', Subdivisions.REGION]],
    ['8', ['Kidal', Subdivisions.REGION]],
    ['9', ['Ménaka', Subdivisions.REGION]],
    ['10', ['Taoudénit', Subdivisions.REGION]],
    ['BKO', ['Bamako', Subdivisions.DISTRICT]],
  ]),
}
