import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const SHN: Country = {
  name: 'Saint Helena, Ascension and Tristan da Cunha',
  e164: 290,
  fips: 'SH',
  alpha2: 'SH',
  alpha3: 'SHN',
  ioc: 'HEL',
  numeric: 654,
  subdivisions: new Map([
    ['AC', ['Ascension', Subdivisions.GEOGRAPHICAL_ENTITY]],
    ['HL', ['Saint Helena', Subdivisions.GEOGRAPHICAL_ENTITY]],
    ['TA', ['Tristan da Cunha', Subdivisions.GEOGRAPHICAL_ENTITY]],
  ]),
}
