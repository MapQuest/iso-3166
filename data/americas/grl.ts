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
  subdivisions: new Map([
    ['AV', ['Avannaata Kommunia', Subdivisions.MUNICIPALITY]],
    ['KU', ['Kommune Kujalleq', Subdivisions.MUNICIPALITY]],
    ['QT', ['Kommune Qeqertalik', Subdivisions.MUNICIPALITY]],
    ['SM', ['Kommuneqarfik Sermersooq', Subdivisions.MUNICIPALITY]],
    ['QE', ['Qeqqata Kommunia', Subdivisions.MUNICIPALITY]],
  ]),
}
