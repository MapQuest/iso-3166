import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const GNB: Country = {
  name: 'Guinea-Bissau',
  e164: 245,
  fips: 'PU',
  alpha2: 'GW',
  alpha3: 'GNB',
  ioc: 'GBS',
  numeric: 624,
  subdivisions: new Map([
    ['BA', ['Bafatá', Subdivisions.REGION]],
    ['BL', ['Bolama / Bijagós', Subdivisions.REGION, { aliases: ['Bolama'] }]],
    ['BM', ['Biombo', Subdivisions.REGION]],
    ['BS', ['Bissau', Subdivisions.AUTONOMOUS_SECTOR, { local: 'SAB' }]],
    ['CA', ['Cacheu', Subdivisions.REGION]],
    ['GA', ['Gabú', Subdivisions.REGION]],
    ['L', ['Leste', Subdivisions.PROVINCE]],
    ['N', ['Norte', Subdivisions.PROVINCE]],
    ['OI', ['Oio', Subdivisions.REGION]],
    ['QU', ['Quinara', Subdivisions.REGION]],
    ['S', ['Sul', Subdivisions.PROVINCE]],
    ['TO', ['Tombali', Subdivisions.REGION]],
  ]),
}
