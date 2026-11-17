import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const VUT: Country = {
  name: 'Vanuatu',
  e164: 678,
  fips: 'NH',
  alpha2: 'VU',
  alpha3: 'VUT',
  ioc: 'VAN',
  numeric: 548,
  undp: 'VUT',
  subdivisions: new Map([
    ['MAP', ['Malampa', Subdivisions.PROVINCE]],
    ['PAM', ['Pénama', Subdivisions.PROVINCE, { en: 'Penama' }]],
    ['SAM', ['Sanma', Subdivisions.PROVINCE]],
    ['SEE', ['Shéfa', Subdivisions.PROVINCE, { en: 'Shefa' }]],
    ['TAE', ['Taféa', Subdivisions.PROVINCE, { en: 'Tafea' }]],
    ['TOB', ['Torba', Subdivisions.PROVINCE]],
  ]),
}
