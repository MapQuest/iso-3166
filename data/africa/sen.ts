import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const SEN: Country = {
  name: 'Senegal',
  e164: 221,
  fips: 'SG',
  alpha2: 'SN',
  alpha3: 'SEN',
  ioc: 'SEN',
  numeric: 686,
  subdivisions: new Map([
    ['DB', ['Diourbel', Subdivisions.REGION]],
    ['DK', ['Dakar', Subdivisions.REGION]],
    ['FK', ['Fatick', Subdivisions.REGION]],
    ['KA', ['Kaffrine', Subdivisions.REGION]],
    ['KD', ['Kolda', Subdivisions.REGION]],
    ['KE', ['Kédougou', Subdivisions.REGION]],
    ['KL', ['Kaolack', Subdivisions.REGION]],
    ['LG', ['Louga', Subdivisions.REGION]],
    ['MT', ['Matam', Subdivisions.REGION]],
    ['SE', ['Sédhiou', Subdivisions.REGION]],
    ['SL', ['Saint-Louis', Subdivisions.REGION]],
    ['TC', ['Tambacounda', Subdivisions.REGION]],
    ['TH', ['Thiès', Subdivisions.REGION]],
    ['ZG', ['Ziguinchor', Subdivisions.REGION]],
  ]),
}
