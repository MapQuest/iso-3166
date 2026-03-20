import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const BMU: Country = {
  name: 'Bermuda',
  e164: 1,
  fips: 'BD',
  alpha2: 'BM',
  alpha3: 'BMU',
  ioc: 'BER',
  numeric: 60,
  undp: 'BMU',
  localities: new Map([
    ['DE', ['Devonshire', Subdivisions.PARISH]],
    ['HA', ['Hamilton', Subdivisions.PARISH]],
    ['HC', ['Hamilton City', Subdivisions.MUNICIPALITY]],
    ['PA', ['Paget', Subdivisions.PARISH]],
    ['PE', ['Pembroke', Subdivisions.PARISH]],
    ['GC', ['Saint George City', Subdivisions.MUNICIPALITY]],
    ['GE', ["Saint George's", Subdivisions.PARISH]],
    ['SA', ['Sandys', Subdivisions.PARISH]],
    ['SM', ["Smith's", Subdivisions.PARISH]],
    ['SO', ['Southampton', Subdivisions.PARISH]],
    ['WA', ['Warwick', Subdivisions.PARISH]],
  ]),
}
