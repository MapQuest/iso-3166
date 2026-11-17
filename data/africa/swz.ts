import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const SWZ: Country = {
  name: 'Eswatini',
  names: { en: 'Swaziland' },
  e164: 268,
  fips: 'WZ',
  alpha2: 'SZ',
  alpha3: 'SWZ',
  ioc: 'SWZ',
  numeric: 748,
  subdivisions: new Map([
    ['HH', ['Hhohho', Subdivisions.REGION]],
    ['LU', ['Lubombo', Subdivisions.REGION]],
    ['MA', ['Manzini', Subdivisions.REGION]],
    ['SH', ['Shiselweni', Subdivisions.REGION]],
  ]),
}
