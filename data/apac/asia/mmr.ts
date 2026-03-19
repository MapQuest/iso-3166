import { Subdivisions } from '../../subdivisions.js'
import type { Country } from '../../types.js'

export const MMR: Country = {
  name: 'Myanmar',
  e164: 95,
  fips: 'BM',
  alpha2: 'MM',
  alpha3: 'MMR',
  ioc: 'MYA',
  numeric: 104,
  undp: 'MMR',
  localities: new Map([
    ['01', ['Sagaing', Subdivisions.REGION]],
    ['02', ['Bago', Subdivisions.REGION]],
    ['03', ['Magway', Subdivisions.REGION]],
    ['04', ['Mandalay', Subdivisions.REGION]],
    ['05', ['Tanintharyi', Subdivisions.REGION]],
    ['06', ['Yangon', Subdivisions.REGION]],
    ['07', ['Ayeyarwady', Subdivisions.REGION]],
    ['11', ['Kachin', Subdivisions.STATE]],
    ['12', ['Kayah', Subdivisions.STATE]],
    ['13', ['Kayin', Subdivisions.STATE]],
    ['14', ['Chin', Subdivisions.STATE]],
    ['15', ['Mon', Subdivisions.STATE]],
    ['16', ['Rakhine', Subdivisions.STATE]],
    ['17', ['Shan', Subdivisions.STATE]],
    ['18', ['Nay Pyi Taw', Subdivisions.TERRITORY]],
  ]),
}
