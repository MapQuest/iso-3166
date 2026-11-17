import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const NAM: Country = {
  name: 'Namibia',
  e164: 264,
  fips: 'WA',
  alpha2: 'NA',
  alpha3: 'NAM',
  ioc: 'NAM',
  numeric: 516,
  subdivisions: new Map([
    ['CA', ['Zambezi', Subdivisions.REGION]],
    ['ER', ['Erongo', Subdivisions.REGION]],
    ['HA', ['Hardap', Subdivisions.REGION]],
    ['KA', ['//Karas', Subdivisions.REGION, { local: 'Karas' }]],
    ['KE', ['Kavango East', Subdivisions.REGION]],
    ['KH', ['Khomas', Subdivisions.REGION]],
    ['KU', ['Kunene', Subdivisions.REGION]],
    ['KW', ['Kavango West', Subdivisions.REGION]],
    ['OD', ['Otjozondjupa', Subdivisions.REGION]],
    ['OH', ['Omaheke', Subdivisions.REGION]],
    ['ON', ['Oshana', Subdivisions.REGION]],
    ['OS', ['Omusati', Subdivisions.REGION]],
    ['OT', ['Oshikoto', Subdivisions.REGION]],
    ['OW', ['Ohangwena', Subdivisions.REGION]],
  ]),
}
