import { Subdivisions } from '../../subdivisions.js'
import type { Country } from '../../types.js'

export const VUT: Country = {
  name: 'Vanuatu',
  e164: 678,
  fips: 'NH',
  alpha2: 'VU',
  alpha3: 'VUT',
  ioc: 'VAN',
  numeric: 548,
  undp: 'VUT',
  localities: new Map([
    ['MAP', ['Malampa', Subdivisions.PROVINCE]],
    ['PAM', ['Penama', Subdivisions.PROVINCE]],
    ['SAM', ['Sanma', Subdivisions.PROVINCE]],
    ['SEE', ['Shefa', Subdivisions.PROVINCE]],
    ['TAE', ['Tafea', Subdivisions.PROVINCE]],
    ['TOB', ['Torba', Subdivisions.PROVINCE]],
  ]),
}
