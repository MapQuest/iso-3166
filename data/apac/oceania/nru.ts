import type { Country } from '../../types.js'
import { Subdivisions } from '../../subdivisions.js'

export const NRU: Country = {
  country: 'Nauru',
  e164: 674,
  fips: 'NR',
  alpha2: 'NR',
  alpha3: 'NRU',
  ioc: 'NRU',
  numeric: 520,
  undp: 'NRU',
  localities: new Map([
    ['01', ['Aiwo', Subdivisions.DISTRICT]],
    ['02', ['Anabar', Subdivisions.DISTRICT]],
    ['03', ['Anetan', Subdivisions.DISTRICT]],
    ['04', ['Anibare', Subdivisions.DISTRICT]],
    ['05', ['Baiti', Subdivisions.DISTRICT]],
    ['06', ['Boe', Subdivisions.DISTRICT]],
    ['07', ['Buada', Subdivisions.DISTRICT]],
    ['08', ['Denigomodu', Subdivisions.DISTRICT]],
    ['09', ['Ewa', Subdivisions.DISTRICT]],
    ['10', ['Ijuw', Subdivisions.DISTRICT]],
    ['11', ['Meneng', Subdivisions.DISTRICT]],
    ['12', ['Nibok', Subdivisions.DISTRICT]],
    ['13', ['Uaboe', Subdivisions.DISTRICT]],
    ['14', ['Yaren', Subdivisions.DISTRICT]]
  ])
}
