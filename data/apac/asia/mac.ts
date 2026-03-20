import { Subdivisions } from '../../subdivisions.js'
import type { Country } from '../../types.js'

export const MAC: Country = {
  name: 'Macao',
  names: { native: '澳門', pt: 'Macau' },
  e164: 853,
  fips: 'MC',
  alpha2: 'MO',
  alpha3: 'MAC',
  ioc: 'MAC',
  numeric: 446,
  undp: 'MAC',
  localities: new Map([
    ['OLF', ['Nossa Senhora de Fátima', Subdivisions.PARISH, { en: 'Our Lady of Fatima' }]],
    ['ANT', ['Santo António', Subdivisions.PARISH, { en: 'Saint Anthony' }]],
    ['LAZ', ['São Lázaro', Subdivisions.PARISH, { en: 'Saint Lazarus' }]],
    ['LOU', ['São Lourenço', Subdivisions.PARISH, { en: 'Saint Lawrence' }]],
    ['CAT', ['Sé', Subdivisions.PARISH, { en: 'Cathedral' }]],
    ['LAW', ['São Francisco Xavier', Subdivisions.PARISH, { en: 'Saint Francis Xavier' }]],
    ['TAI', ['Taipa', Subdivisions.ISLAND]],
    ['COL', ['Coloane', Subdivisions.ISLAND]],
    ['COT', ['Cotai', Subdivisions.ZONE]],
  ]),
}
