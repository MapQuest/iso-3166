import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const ATG: Country = {
  name: 'Antigua and Barbuda',
  e164: 1,
  fips: 'AC',
  alpha2: 'AG',
  alpha3: 'ATG',
  ioc: 'ANT',
  numeric: 28,
  undp: 'ATG',
  localities: new Map([
    ['03', ['Saint George', Subdivisions.PARISH]],
    ['04', ['Saint John', Subdivisions.PARISH]],
    ['05', ['Saint Mary', Subdivisions.PARISH]],
    ['06', ['Saint Paul', Subdivisions.PARISH]],
    ['07', ['Saint Peter', Subdivisions.PARISH]],
    ['08', ['Saint Philip', Subdivisions.PARISH]],
    ['10', ['Barbuda', Subdivisions.DEPENDENCY]],
    ['11', ['Redonda', Subdivisions.DEPENDENCY]],
  ]),
}
