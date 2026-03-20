import { Subdivisions } from '../../subdivisions.js'
import type { Country } from '../../types.js'

export const BRN: Country = {
  name: 'Brunei Darussalam',
  names: { en: 'Brunei' },
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
    ['TU', ['Tutong', Subdivisions.DISTRICT]],
  ]),
}
