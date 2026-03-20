import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const BES: Country = {
  name: 'Bonaire, Sint Eustatius and Saba',
  names: { en: 'Caribbean Netherlands' },
  e164: 599,
  alpha2: 'BQ',
  alpha3: 'BES',
  numeric: 535,
  undp: 'BES',
  localities: new Map([
    ['BO', ['Bonaire', Subdivisions.ISLAND]],
    ['SA', ['Saba', Subdivisions.ISLAND]],
    ['SE', ['Sint Eustatius', Subdivisions.ISLAND]],
  ]),
}
