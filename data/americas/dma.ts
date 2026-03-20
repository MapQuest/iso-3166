import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const DMA: Country = {
  name: 'Dominica',
  e164: 1,
  fips: 'DO',
  alpha2: 'DM',
  alpha3: 'DMA',
  ioc: 'DMA',
  numeric: 212,
  undp: 'DMA',
  localities: new Map([
    ['02', ['Saint Andrew', Subdivisions.PARISH]],
    ['03', ['Saint David', Subdivisions.PARISH]],
    ['04', ['Saint George', Subdivisions.PARISH]],
    ['05', ['Saint John', Subdivisions.PARISH]],
    ['06', ['Saint Joseph', Subdivisions.PARISH]],
    ['07', ['Saint Luke', Subdivisions.PARISH]],
    ['08', ['Saint Mark', Subdivisions.PARISH]],
    ['09', ['Saint Patrick', Subdivisions.PARISH]],
    ['10', ['Saint Paul', Subdivisions.PARISH]],
    ['11', ['Saint Peter', Subdivisions.PARISH]],
  ]),
}
