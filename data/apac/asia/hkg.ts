import { Subdivisions } from '../../subdivisions.js'
import type { Country } from '../../types.js'

export const HKG: Country = {
  country: 'Hong Kong',
  e164: 852,
  fips: 'HK',
  alpha2: 'HK',
  alpha3: 'HKG',
  ioc: 'HKG',
  numeric: 344,
  undp: 'HKG',
  localities: new Map([
    ['HCW', ['Central and Western', Subdivisions.DISTRICT]],
    ['HEA', ['Eastern', Subdivisions.DISTRICT]],
    ['HSO', ['Southern', Subdivisions.DISTRICT]],
    ['HWC', ['Wan Chai', Subdivisions.DISTRICT]],
    ['KKC', ['Kowloon City', Subdivisions.DISTRICT]],
    ['KKT', ['Kwun Tong', Subdivisions.DISTRICT]],
    ['KSS', ['Sham Shui Po', Subdivisions.DISTRICT]],
    ['KWT', ['Wong Tai Sin', Subdivisions.DISTRICT]],
    ['KYT', ['Yau Tsim Mong', Subdivisions.DISTRICT]],
    ['NIS', ['Islands', Subdivisions.DISTRICT]],
    ['NKT', ['Kwai Tsing', Subdivisions.DISTRICT]],
    ['NNO', ['North', Subdivisions.DISTRICT]],
    ['NSK', ['Sai Kung', Subdivisions.DISTRICT]],
    ['NST', ['Sha Tin', Subdivisions.DISTRICT]],
    ['NTP', ['Tai Po', Subdivisions.DISTRICT]],
    ['NTW', ['Tsuen Wan', Subdivisions.DISTRICT]],
    ['NTM', ['Tuen Mun', Subdivisions.DISTRICT]],
    ['NYL', ['Yuen Long', Subdivisions.DISTRICT]],
  ]),
}
