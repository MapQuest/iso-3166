import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const UMI: Country = {
  name: 'United States Minor Outlying Islands',
  e164: 1,
  alpha2: 'UM',
  alpha3: 'UMI',
  numeric: 581,
  undp: 'UMI',
  localities: new Map([
    ['67', ['Johnston Atoll', Subdivisions.ISLANDS_GROUPS_OF_ISLANDS]],
    ['71', ['Midway Islands', Subdivisions.ISLANDS_GROUPS_OF_ISLANDS]],
    ['76', ['Navassa Island', Subdivisions.ISLANDS_GROUPS_OF_ISLANDS]],
    ['79', ['Wake Island', Subdivisions.ISLANDS_GROUPS_OF_ISLANDS]],
    ['81', ['Baker Island', Subdivisions.ISLANDS_GROUPS_OF_ISLANDS]],
    ['84', ['Howland Island', Subdivisions.ISLANDS_GROUPS_OF_ISLANDS]],
    ['86', ['Jarvis Island', Subdivisions.ISLANDS_GROUPS_OF_ISLANDS]],
    ['89', ['Kingman Reef', Subdivisions.ISLANDS_GROUPS_OF_ISLANDS]],
    ['95', ['Palmyra Atoll', Subdivisions.ISLANDS_GROUPS_OF_ISLANDS]],
  ]),
}
