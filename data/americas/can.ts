import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const CAN: Country = {
  name: 'Canada',
  names: { fr: 'Le Canada' },
  e164: 1,
  fips: 'CA',
  alpha2: 'CA',
  alpha3: 'CAN',
  ioc: 'CAN',
  numeric: 124,
  undp: 'CAN',
  localities: new Map([
    ['AB', ['Alberta', Subdivisions.PROVINCE]],
    ['BC', ['British Columbia', Subdivisions.PROVINCE, { fr: 'Colombie-Britannique' }]],
    ['MB', ['Manitoba', Subdivisions.PROVINCE]],
    ['NB', ['New Brunswick', Subdivisions.PROVINCE, { fr: 'Nouveau-Brunswick' }]],
    ['NL', ['Newfoundland and Labrador', Subdivisions.PROVINCE, { fr: 'Terre-Neuve-et-Labrador' }]],
    ['NS', ['Nova Scotia', Subdivisions.PROVINCE, { fr: 'Nouvelle-Écosse' }]],
    ['NT', ['Northwest Territories', Subdivisions.TERRITORY, { fr: 'Territoires du Nord-Ouest' }]],
    ['NU', ['Nunavut', Subdivisions.TERRITORY]],
    ['ON', ['Ontario', Subdivisions.PROVINCE]],
    ['PE', ['Prince Edward Island', Subdivisions.PROVINCE, { fr: 'Île-du-Prince-Édouard' }]],
    ['QC', ['Quebec', Subdivisions.PROVINCE, { fr: 'Québec' }]],
    ['SK', ['Saskatchewan', Subdivisions.PROVINCE]],
    ['YT', ['Yukon', Subdivisions.TERRITORY]],
  ]),
}
