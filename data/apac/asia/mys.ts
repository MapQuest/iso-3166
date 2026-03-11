import type { Country } from '../../types.js'
import { Subdivisions } from '../../subdivisions.js'

export const MYS: Country = {
  country: 'Malaysia',
  e164: 60,
  fips: 'MY',
  alpha2: 'MY',
  alpha3: 'MYS',
  ioc: 'MAS',
  numeric: 458,
  undp: 'MYS',
  localities: new Map([
    ['01', ['Johor', Subdivisions.STATE]],
    ['02', ['Kedah', Subdivisions.STATE]],
    ['03', ['Kelantan', Subdivisions.STATE]],
    ['04', ['Melaka', Subdivisions.STATE]],
    ['05', ['Negeri Sembilan', Subdivisions.STATE]],
    ['06', ['Pahang', Subdivisions.STATE]],
    ['07', ['Pulau Pinang', Subdivisions.STATE]],
    ['08', ['Perak', Subdivisions.STATE]],
    ['09', ['Perlis', Subdivisions.STATE]],
    ['10', ['Selangor', Subdivisions.STATE]],
    ['11', ['Terengganu', Subdivisions.STATE]],
    ['12', ['Sabah', Subdivisions.STATE]],
    ['13', ['Sarawak', Subdivisions.STATE]],
    ['14', ['Wilayah Persekutuan Kuala Lumpur', Subdivisions.TERRITORY]],
    ['15', ['Wilayah Persekutuan Labuan', Subdivisions.TERRITORY]],
    ['16', ['Wilayah Persekutuan Putrajaya', Subdivisions.TERRITORY]]
  ])
}
