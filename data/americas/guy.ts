import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const GUY: Country = {
  name: 'Guyana',
  e164: 592,
  fips: 'GY',
  alpha2: 'GY',
  alpha3: 'GUY',
  ioc: 'GUY',
  numeric: 328,
  undp: 'GUY',
  localities: new Map([
    ['BA', ['Barima-Waini', Subdivisions.REGION]],
    ['CU', ['Cuyuni-Mazaruni', Subdivisions.REGION]],
    ['DE', ['Demerara-Mahaica', Subdivisions.REGION]],
    ['EB', ['East Berbice-Corentyne', Subdivisions.REGION]],
    ['ES', ['Essequibo Islands-West Demerara', Subdivisions.REGION]],
    ['MA', ['Mahaica-Berbice', Subdivisions.REGION]],
    ['PM', ['Pomeroon-Supenaam', Subdivisions.REGION]],
    ['PT', ['Potaro-Siparuni', Subdivisions.REGION]],
    ['UD', ['Upper Demerara-Berbice', Subdivisions.REGION]],
    ['UT', ['Upper Takutu-Upper Essequibo', Subdivisions.REGION]],
  ]),
}
