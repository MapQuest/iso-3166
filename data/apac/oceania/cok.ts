import { Subdivisions } from '../../subdivisions.js'
import type { Country } from '../../types.js'

export const COK: Country = {
  country: 'Cook Islands',
  e164: 682,
  fips: 'CW',
  alpha2: 'CK',
  alpha3: 'COK',
  ioc: 'COK',
  numeric: 184,
  undp: 'COK',
  localities: new Map([
    ['PU', ['Pukapuka', Subdivisions.ISLAND]],
    ['RK', ['Rakahanga', Subdivisions.ISLAND]],
    ['MK', ['Manihiki', Subdivisions.ISLAND]],
    ['PE', ['Penrhyn', Subdivisions.ISLAND]],
    ['NI', ['Nassau Island', Subdivisions.ISLAND]],
    ['SU', ['Surwarrow', Subdivisions.ISLAND]],
    ['PA', ['Palmerston', Subdivisions.ISLAND]],
    ['AI', ['Aitutaki', Subdivisions.ISLAND]],
    ['MA', ['Manuae', Subdivisions.ISLAND]],
    ['TA', ['Takutea', Subdivisions.ISLAND]],
    ['MT', ['Mitiaro', Subdivisions.ISLAND]],
    ['AT', ['Atiu', Subdivisions.ISLAND]],
    ['MU', ['Mauke', Subdivisions.ISLAND]],
    ['RR', ['Rarotonga', Subdivisions.ISLAND]],
    ['MG', ['Mangaia', Subdivisions.ISLAND]],
  ]),
}
