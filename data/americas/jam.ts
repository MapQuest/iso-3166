import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const JAM: Country = {
  name: 'Jamaica',
  e164: 1,
  fips: 'JM',
  alpha2: 'JM',
  alpha3: 'JAM',
  ioc: 'JAM',
  numeric: 388,
  undp: 'JAM',
  localities: new Map([
    ['01', ['Kingston', Subdivisions.PARISH]],
    ['02', ['Saint Andrew', Subdivisions.PARISH]],
    ['03', ['Saint Thomas', Subdivisions.PARISH]],
    ['04', ['Portland', Subdivisions.PARISH]],
    ['05', ['Saint Mary', Subdivisions.PARISH]],
    ['06', ['Saint Ann', Subdivisions.PARISH]],
    ['07', ['Trelawny', Subdivisions.PARISH]],
    ['08', ['Saint James', Subdivisions.PARISH]],
    ['09', ['Hanover', Subdivisions.PARISH]],
    ['10', ['Westmoreland', Subdivisions.PARISH]],
    ['11', ['Saint Elizabeth', Subdivisions.PARISH]],
    ['12', ['Manchester', Subdivisions.PARISH]],
    ['13', ['Clarendon', Subdivisions.PARISH]],
    ['14', ['Saint Catherine', Subdivisions.PARISH]],
  ]),
}
