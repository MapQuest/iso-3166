import type { Country } from '../../types.js'
import { Subdivisions } from '../../subdivisions.js'

export const TUV: Country = {
  country: 'Tuvalu',
  e164: 688,
  fips: 'TV',
  alpha2: 'TV',
  alpha3: 'TUV',
  ioc: 'TUV',
  numeric: 798,
  undp: 'TUV',
  localities: new Map([
    ['FUN', ['Funafuti', Subdivisions.TOWN_COUNCIL]],
    ['NIT', ['Niutao', Subdivisions.ISLAND_COUNCIL]],
    ['NKF', ['Nukufetau', Subdivisions.ISLAND_COUNCIL]],
    ['NKL', ['Nukulaelae', Subdivisions.ISLAND_COUNCIL]],
    ['NMA', ['Nanumea', Subdivisions.ISLAND_COUNCIL]],
    ['NMG', ['Nanumaga', Subdivisions.ISLAND_COUNCIL]],
    ['NUI', ['Nui', Subdivisions.ISLAND_COUNCIL]],
    ['VAI', ['Vaitupu', Subdivisions.ISLAND_COUNCIL]]
  ])
}
