import type { Country } from '../../types.js'
import { Subdivisions } from '../../subdivisions.js'

export const BRN: Country = {
  country: 'Brunei',
  e164: 673,
  fips: 'BX',
  alpha2: 'BN',
  alpha3: 'BRN',
  ioc: 'BRU',
  numeric: 96,
  undp: 'BRN',
  localities: new Map([
    ['BE', ['Belait', Subdivisions.DISTRICT]],
    ['BM', ['Brunei-Muara', Subdivisions.DISTRICT]],
    ['TE', ['Temburong', Subdivisions.DISTRICT]],
    ['TU', ['Tutong', Subdivisions.DISTRICT]]
  ])
}
