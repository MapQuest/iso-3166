import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const BEN: Country = {
  name: 'Benin',
  e164: 229,
  fips: 'BN',
  alpha2: 'BJ',
  alpha3: 'BEN',
  ioc: 'BEN',
  numeric: 204,
  subdivisions: new Map([
    ['AK', ['Atacora', Subdivisions.DEPARTMENT, { fr: 'Atakora' }]],
    ['AL', ['Alibori', Subdivisions.DEPARTMENT]],
    ['AQ', ['Atlantique', Subdivisions.DEPARTMENT]],
    ['BO', ['Borgou', Subdivisions.DEPARTMENT]],
    ['CO', ['Collines', Subdivisions.DEPARTMENT]],
    ['DO', ['Donga', Subdivisions.DEPARTMENT]],
    ['KO', ['Couffo', Subdivisions.DEPARTMENT, { fr: 'Kouffo' }]],
    ['LI', ['Littoral', Subdivisions.DEPARTMENT]],
    ['MO', ['Mono', Subdivisions.DEPARTMENT]],
    ['OU', ['Ouémé', Subdivisions.DEPARTMENT]],
    ['PL', ['Plateau', Subdivisions.DEPARTMENT]],
    ['ZO', ['Zou', Subdivisions.DEPARTMENT]],
  ]),
}
