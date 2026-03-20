import { Subdivisions } from '../../subdivisions.js'
import type { Country } from '../../types.js'

export const PRK: Country = {
  name: 'Korea (Democratic People\'s Republic of)',
  names: { native: '조선민주주의인민공화국', en: 'North Korea' },
  e164: 850,
  fips: 'KN',
  alpha2: 'KP',
  alpha3: 'PRK',
  ioc: 'PRK',
  numeric: 408,
  undp: 'PRK',
  localities: new Map([
    ['01', ['Pyongyang', Subdivisions.CAPITAL]],
    ['02', ['South Pyongan', Subdivisions.PROVINCE]],
    ['03', ['North Pyongan', Subdivisions.PROVINCE]],
    ['04', ['Chagang', Subdivisions.PROVINCE]],
    ['05', ['South Hwanghae', Subdivisions.PROVINCE]],
    ['06', ['North Hwanghae', Subdivisions.PROVINCE]],
    ['07', ['Kangwon', Subdivisions.PROVINCE]],
    ['08', ['South Hamgyong', Subdivisions.PROVINCE]],
    ['09', ['North Hamgyong', Subdivisions.PROVINCE]],
    ['10', ['Ryanggang', Subdivisions.PROVINCE]],
    ['13', ['Rason', Subdivisions.SPECIAL_CITY]],
    ['14', ['Nampo', Subdivisions.SPECIAL_CITY]],
    ['15', ['Kaesong', Subdivisions.SPECIAL_CITY]],
  ]),
}
