import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const SDN: Country = {
  name: 'Sudan',
  e164: 249,
  fips: 'SU',
  alpha2: 'SD',
  alpha3: 'SDN',
  ioc: 'SUD',
  numeric: 729,
  subdivisions: new Map([
    ['DC', ['Central Darfur', Subdivisions.STATE, { local: 'Zālinjay' }]],
    ['DE', ['East Darfur', Subdivisions.STATE]],
    ['DN', ['North Darfur', Subdivisions.STATE]],
    ['DS', ['South Darfur', Subdivisions.STATE, { ar: 'Janūb Dārfūr' }]],
    ['DW', ['West Darfur', Subdivisions.STATE, { ar: 'Gharb Dārfūr' }]],
    ['GD', ['Gedaref', Subdivisions.STATE, { ar: 'Al Qaḑārif' }]],
    ['GK', ['West Kordofan', Subdivisions.STATE]],
    ['GZ', ['Gezira', Subdivisions.STATE, { ar: 'Al Jazīrah' }]],
    ['KA', ['Kassala', Subdivisions.STATE]],
    ['KH', ['Khartoum', Subdivisions.STATE, { ar: 'Al Kharţūm' }]],
    ['KN', ['North Kordofan', Subdivisions.STATE]],
    ['KS', ['South Kordofan', Subdivisions.STATE, { ar: 'Janūb Kurdufān' }]],
    ['NB', ['Blue Nile', Subdivisions.STATE, { ar: 'An Nīl al Azraq' }]],
    ['NO', ['Northern', Subdivisions.STATE, { ar: 'Ash Shamālīyah' }]],
    ['NR', ['River Nile', Subdivisions.STATE, { aliases: ['An Nīl'] }]],
    ['NW', ['White Nile', Subdivisions.STATE, { ar: 'An Nīl al Abyaḑ' }]],
    ['RS', ['Red Sea', Subdivisions.STATE, { ar: 'Al Baḩr al Aḩmar' }]],
    ['SI', ['Sennar', Subdivisions.STATE]],
  ]),
}
