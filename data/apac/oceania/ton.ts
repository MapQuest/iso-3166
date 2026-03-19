import { Subdivisions } from '../../subdivisions.js'
import type { Country } from '../../types.js'

export const TON: Country = {
  name: 'Tonga',
  e164: 676,
  fips: 'TN',
  alpha2: 'TO',
  alpha3: 'TON',
  ioc: 'TGA',
  numeric: 776,
  undp: 'TON',
  localities: new Map([
    ['01', ['Eua', Subdivisions.DIVISION]],
    ['02', ['Ha\'apai', Subdivisions.DIVISION]],
    ['03', ['Niuas', Subdivisions.DIVISION]],
    ['04', ['Tongatapu', Subdivisions.DIVISION]],
    ['05', ['Vava\'u', Subdivisions.DIVISION]],
  ]),
}
