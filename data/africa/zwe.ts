import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const ZWE: Country = {
  name: 'Zimbabwe',
  e164: 263,
  fips: 'ZI',
  alpha2: 'ZW',
  alpha3: 'ZWE',
  ioc: 'ZIM',
  numeric: 716,
  subdivisions: new Map([
    ['BU', ['Bulawayo', Subdivisions.PROVINCE]],
    ['HA', ['Harare', Subdivisions.PROVINCE]],
    ['MA', ['Manicaland', Subdivisions.PROVINCE]],
    ['MC', ['Mashonaland Central', Subdivisions.PROVINCE]],
    ['ME', ['Mashonaland East', Subdivisions.PROVINCE]],
    ['MI', ['Midlands', Subdivisions.PROVINCE]],
    ['MN', ['Matabeleland North', Subdivisions.PROVINCE]],
    ['MS', ['Matabeleland South', Subdivisions.PROVINCE]],
    ['MV', ['Masvingo', Subdivisions.PROVINCE]],
    ['MW', ['Mashonaland West', Subdivisions.PROVINCE]],
  ]),
}
