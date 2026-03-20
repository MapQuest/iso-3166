import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const TTO: Country = {
  name: 'Trinidad and Tobago',
  e164: 1,
  fips: 'TD',
  alpha2: 'TT',
  alpha3: 'TTO',
  ioc: 'TRI',
  numeric: 780,
  undp: 'TTO',
  localities: new Map([
    ['ARI', ['Arima', Subdivisions.MUNICIPALITY]],
    ['CHA', ['Chaguanas', Subdivisions.MUNICIPALITY]],
    ['CTT', ['Couva-Tabaquite-Talparo', Subdivisions.REGION]],
    ['DMN', ['Diego Martin', Subdivisions.REGION]],
    ['MRC', ['Mayaro-Rio Claro', Subdivisions.REGION]],
    ['PED', ['Penal-Debe', Subdivisions.REGION]],
    ['POS', ['Port of Spain', Subdivisions.MUNICIPALITY]],
    ['PRT', ['Princes Town', Subdivisions.REGION]],
    ['PTF', ['Point Fortin', Subdivisions.MUNICIPALITY]],
    ['SFO', ['San Fernando', Subdivisions.MUNICIPALITY]],
    ['SGE', ['Sangre Grande', Subdivisions.REGION]],
    ['SIP', ['Siparia', Subdivisions.REGION]],
    ['SJL', ['San Juan-Laventille', Subdivisions.REGION]],
    ['TOB', ['Tobago', Subdivisions.REGION]],
    ['TUP', ['Tunapuna-Piarco', Subdivisions.REGION]],
  ]),
}
