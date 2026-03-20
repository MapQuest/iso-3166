import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const LCA: Country = {
  name: 'Saint Lucia',
  e164: 1,
  fips: 'ST',
  alpha2: 'LC',
  alpha3: 'LCA',
  ioc: 'LCA',
  numeric: 662,
  undp: 'LCA',
  localities: new Map([
    ['01', ['Anse la Raye', Subdivisions.DISTRICT]],
    ['02', ['Castries', Subdivisions.DISTRICT]],
    ['03', ['Choiseul', Subdivisions.DISTRICT]],
    ['05', ['Dennery', Subdivisions.DISTRICT]],
    ['06', ['Gros Islet', Subdivisions.DISTRICT]],
    ['07', ['Laborie', Subdivisions.DISTRICT]],
    ['08', ['Micoud', Subdivisions.DISTRICT]],
    ['10', ['Soufrière', Subdivisions.DISTRICT]],
    ['11', ['Vieux Fort', Subdivisions.DISTRICT]],
    ['12', ['Canaries', Subdivisions.DISTRICT]],
  ]),
}
