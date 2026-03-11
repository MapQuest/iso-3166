import type { Country } from '../types.js'
import { Subdivisions } from '../subdivisions.js'

export const CAN: Country = {
  country: 'Canada',
  e164: 1,
  fips: 'CA',
  alpha2: 'CA',
  alpha3: 'CAN',
  ioc: 'CAN',
  numeric: 124,
  undp: 'CAN',
  localities: new Map([
    ['AB', ['Alberta', Subdivisions.PROVINCE]],
    ['BC', ['British Columbia', Subdivisions.PROVINCE]],
    ['MB', ['Manitoba', Subdivisions.PROVINCE]],
    ['NB', ['New Brunswick', Subdivisions.PROVINCE]],
    ['NL', ['Newfoundland and Labrador', Subdivisions.PROVINCE]],
    ['NS', ['Nova Scotia', Subdivisions.PROVINCE]],
    ['NT', ['Northwest Territories', Subdivisions.TERRITORY]],
    ['NU', ['Nunavut', Subdivisions.TERRITORY]],
    ['ON', ['Ontario', Subdivisions.PROVINCE]],
    ['PE', ['Prince Edward Island', Subdivisions.PROVINCE]],
    ['QC', ['Quebec', Subdivisions.PROVINCE]],
    ['SK', ['Saskatchewan', Subdivisions.PROVINCE]],
    ['YT', ['Yukon', Subdivisions.TERRITORY]]
  ])
}
