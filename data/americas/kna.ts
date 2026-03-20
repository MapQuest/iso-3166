import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const KNA: Country = {
  name: 'Saint Kitts and Nevis',
  e164: 1,
  fips: 'SC',
  alpha2: 'KN',
  alpha3: 'KNA',
  ioc: 'SKN',
  numeric: 659,
  undp: 'KNA',
  localities: new Map([
    ['01', ['Christ Church Nichola Town', Subdivisions.PARISH]],
    ['02', ['Saint Anne Sandy Point', Subdivisions.PARISH]],
    ['03', ['Saint George Basseterre', Subdivisions.PARISH]],
    ['04', ['Saint George Gingerland', Subdivisions.PARISH]],
    ['05', ['Saint James Windward', Subdivisions.PARISH]],
    ['06', ['Saint John Capisterre', Subdivisions.PARISH]],
    ['07', ['Saint John Figtree', Subdivisions.PARISH]],
    ['08', ['Saint Mary Cayon', Subdivisions.PARISH]],
    ['09', ['Saint Paul Capisterre', Subdivisions.PARISH]],
    ['10', ['Saint Paul Charlestown', Subdivisions.PARISH]],
    ['11', ['Saint Peter Basseterre', Subdivisions.PARISH]],
    ['12', ['Saint Thomas Lowland', Subdivisions.PARISH]],
    ['13', ['Saint Thomas Middle Island', Subdivisions.PARISH]],
    ['15', ['Trinity Palmetto Point', Subdivisions.PARISH]],
  ]),
}
