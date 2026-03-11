import { Subdivisions } from '../../subdivisions.js'
import type { Country } from '../../types.js'

export const NZL: Country = {
  country: 'New Zealand',
  e164: 64,
  fips: 'NZ',
  alpha2: 'NZ',
  alpha3: 'NZL',
  ioc: 'NZL',
  numeric: 554,
  undp: 'NZL',
  localities: new Map([
    ['AUK', ['Auckland', Subdivisions.REGION]],
    ['BOP', ['Bay of Plenty', Subdivisions.REGION]],
    ['CAN', ['Canterbury', Subdivisions.REGION]],
    ['GIS', ['Gisborne', Subdivisions.REGION]],
    ['HKB', ['Hawke\'s Bay', Subdivisions.REGION]],
    ['MBH', ['Marlborough', Subdivisions.REGION]],
    ['MWT', ['Manawatu-Wanganui', Subdivisions.REGION]],
    ['NSN', ['Nelson', Subdivisions.REGION]],
    ['NTL', ['Northland', Subdivisions.REGION]],
    ['OTA', ['Otago', Subdivisions.REGION]],
    ['STL', ['Southland', Subdivisions.REGION]],
    ['TAS', ['Tasman', Subdivisions.REGION]],
    ['TKI', ['Taranaki', Subdivisions.REGION]],
    ['WGN', ['Wellington', Subdivisions.REGION]],
    ['WKO', ['Waikato', Subdivisions.REGION]],
    ['WTC', ['West Coast', Subdivisions.REGION]],
    ['CIT', ['Chatham Islands', Subdivisions.TERRITORY]],
  ]),
}
