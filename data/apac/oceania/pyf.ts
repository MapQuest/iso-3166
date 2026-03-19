import { Subdivisions } from '../../subdivisions.js'
import type { Country } from '../../types.js'

export const PYF: Country = {
  name: 'French Polynesia',
  e164: 689,
  fips: 'FP',
  alpha2: 'PF',
  alpha3: 'PYF',
  ioc: 'FPO',
  numeric: 258,
  undp: 'PYF',
  localities: new Map([
    ['I', ['Austral Islands', Subdivisions.ISLAND_GROUP]],
    ['M', ['Marquesas Islands', Subdivisions.ISLAND_GROUP]],
    ['S', ['Society Islands', Subdivisions.ISLAND_GROUP]],
    ['T', ['Tuamotu-Gambier', Subdivisions.ISLAND_GROUP]],
    ['V', ['Windward Islands', Subdivisions.ISLAND_GROUP]],
    ['L', ['Leeward Islands', Subdivisions.ISLAND_GROUP]],
  ]),
}
