import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const LBR: Country = {
  name: 'Liberia',
  e164: 231,
  fips: 'LI',
  alpha2: 'LR',
  alpha3: 'LBR',
  ioc: 'LBR',
  numeric: 430,
  subdivisions: new Map([
    ['BG', ['Bong', Subdivisions.COUNTY]],
    ['BM', ['Bomi', Subdivisions.COUNTY]],
    ['CM', ['Grand Cape Mount', Subdivisions.COUNTY]],
    ['GB', ['Grand Bassa', Subdivisions.COUNTY]],
    ['GG', ['Grand Gedeh', Subdivisions.COUNTY]],
    ['GK', ['Grand Kru', Subdivisions.COUNTY]],
    ['GP', ['Gbarpolu', Subdivisions.COUNTY]],
    ['LO', ['Lofa', Subdivisions.COUNTY]],
    ['MG', ['Margibi', Subdivisions.COUNTY]],
    ['MO', ['Montserrado', Subdivisions.COUNTY]],
    ['MY', ['Maryland', Subdivisions.COUNTY]],
    ['NI', ['Nimba', Subdivisions.COUNTY]],
    ['RG', ['River Gee', Subdivisions.COUNTY]],
    ['RI', ['River Cess', Subdivisions.COUNTY, { local: 'Rivercess' }]],
    ['SI', ['Sinoe', Subdivisions.COUNTY]],
  ]),
}
