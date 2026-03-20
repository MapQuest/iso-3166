import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const SUR: Country = {
  name: 'Suriname',
  e164: 597,
  fips: 'NS',
  alpha2: 'SR',
  alpha3: 'SUR',
  ioc: 'SUR',
  numeric: 740,
  undp: 'SUR',
  localities: new Map([
    ['BR', ['Brokopondo', Subdivisions.DISTRICT]],
    ['CM', ['Commewijne', Subdivisions.DISTRICT]],
    ['CR', ['Coronie', Subdivisions.DISTRICT]],
    ['MA', ['Marowijne', Subdivisions.DISTRICT]],
    ['NI', ['Nickerie', Subdivisions.DISTRICT]],
    ['PM', ['Paramaribo', Subdivisions.DISTRICT]],
    ['PR', ['Para', Subdivisions.DISTRICT]],
    ['SA', ['Saramacca', Subdivisions.DISTRICT]],
    ['SI', ['Sipaliwini', Subdivisions.DISTRICT]],
    ['WA', ['Wanica', Subdivisions.DISTRICT]],
  ]),
}
