import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const GRL: Country = {
  name: 'Greenland',
  names: { kl: 'Kalaallit Nunaat', da: 'Grønland' },
  e164: 299,
  fips: 'GL',
  alpha2: 'GL',
  alpha3: 'GRL',
  numeric: 304,
  undp: 'GRL',
  localities: new Map([
    ['AV', ['Avannaata', Subdivisions.MUNICIPALITY]],
    ['KU', ['Kujalleq', Subdivisions.MUNICIPALITY]],
    ['QT', ['Qeqertalik', Subdivisions.MUNICIPALITY]],
    ['SM', ['Sermersooq', Subdivisions.MUNICIPALITY]],
    ['QE', ['Qeqqata', Subdivisions.MUNICIPALITY]],
  ]),
}
