import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const CMR: Country = {
  name: 'Cameroon',
  e164: 237,
  fips: 'CM',
  alpha2: 'CM',
  alpha3: 'CMR',
  ioc: 'CMR',
  numeric: 120,
  subdivisions: new Map([
    ['AD', ['Adamaoua', Subdivisions.REGION]],
    ['CE', ['Centre', Subdivisions.REGION]],
    ['EN', ['Far North', Subdivisions.REGION, { fr: 'Extrême-Nord' }]],
    ['ES', ['East', Subdivisions.REGION]],
    ['LT', ['Littoral', Subdivisions.REGION]],
    ['NO', ['North', Subdivisions.REGION, { fr: 'Nord' }]],
    ['NW', ['North-West', Subdivisions.REGION, { fr: 'Nord-Ouest' }]],
    ['OU', ['West', Subdivisions.REGION, { fr: 'Ouest' }]],
    ['SU', ['South', Subdivisions.REGION]],
    ['SW', ['South-West', Subdivisions.REGION]],
  ]),
}
