import type { Country } from '../../types.js'
import { Subdivisions } from '../../subdivisions.js'

export const UMI: Country = {
  country: 'United States Minor Outlying Islands',
  e164: 1,
  alpha2: 'UM',
  alpha3: 'UMI',
  numeric: 581,
  undp: 'UMI',
  localities: new Map([
    ['67', ['Johnston Atoll', Subdivisions.ISLAND_GROUP]],
    ['71', ['Midway Islands', Subdivisions.ISLAND_GROUP]],
    ['76', ['Navassa Island', Subdivisions.ISLAND]],
    ['79', ['Wake Island', Subdivisions.ISLAND]],
    ['81', ['Baker Island', Subdivisions.ISLAND]],
    ['84', ['Howland Island', Subdivisions.ISLAND]],
    ['86', ['Jarvis Island', Subdivisions.ISLAND]],
    ['89', ['Kingman Reef', Subdivisions.ISLAND]],
    ['95', ['Palmyra Atoll', Subdivisions.ISLAND_GROUP]]
  ])
}
