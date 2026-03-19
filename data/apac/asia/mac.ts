import { Subdivisions } from '../../subdivisions.js'
import type { Country } from '../../types.js'

export const MAC: Country = {
  name: 'Macao',
  e164: 853,
  fips: 'MC',
  alpha2: 'MO',
  alpha3: 'MAC',
  ioc: 'MAC',
  numeric: 446,
  undp: 'MAC',
  localities: new Map([
    ['OLF', ['Nossa Senhora de Fátima', Subdivisions.PARISH]],
    ['ANT', ['Santo António', Subdivisions.PARISH]],
    ['LAZ', ['São Lázaro', Subdivisions.PARISH]],
    ['LOU', ['São Lourenço', Subdivisions.PARISH]],
    ['CAT', ['Sé', Subdivisions.PARISH]],
    ['LAW', ['São Francisco Xavier', Subdivisions.PARISH]],
    ['TAI', ['Taipa', Subdivisions.ISLAND]],
    ['COL', ['Coloane', Subdivisions.ISLAND]],
    ['COT', ['Cotai', Subdivisions.ZONE]],
  ]),
}
