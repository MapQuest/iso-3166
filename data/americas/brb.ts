import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const BRB: Country = {
  name: 'Barbados',
  e164: 1,
  fips: 'BB',
  alpha2: 'BB',
  alpha3: 'BRB',
  ioc: 'BAR',
  numeric: 52,
  undp: 'BRB',
  localities: new Map([
    ['01', ['Christ Church', Subdivisions.PARISH]],
    ['02', ['Saint Andrew', Subdivisions.PARISH]],
    ['03', ['Saint George', Subdivisions.PARISH]],
    ['04', ['Saint James', Subdivisions.PARISH]],
    ['05', ['Saint John', Subdivisions.PARISH]],
    ['06', ['Saint Joseph', Subdivisions.PARISH]],
    ['07', ['Saint Lucy', Subdivisions.PARISH]],
    ['08', ['Saint Michael', Subdivisions.PARISH]],
    ['09', ['Saint Peter', Subdivisions.PARISH]],
    ['10', ['Saint Philip', Subdivisions.PARISH]],
    ['11', ['Saint Thomas', Subdivisions.PARISH]],
  ]),
}
