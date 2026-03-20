import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const SLV: Country = {
  name: 'El Salvador',
  e164: 503,
  fips: 'ES',
  alpha2: 'SV',
  alpha3: 'SLV',
  ioc: 'ESA',
  numeric: 222,
  undp: 'SLV',
  localities: new Map([
    ['AH', ['Ahuachapán', Subdivisions.DEPARTMENT]],
    ['CA', ['Cabañas', Subdivisions.DEPARTMENT]],
    ['CH', ['Chalatenango', Subdivisions.DEPARTMENT]],
    ['CU', ['Cuscatlán', Subdivisions.DEPARTMENT]],
    ['LI', ['La Libertad', Subdivisions.DEPARTMENT]],
    ['MO', ['Morazán', Subdivisions.DEPARTMENT]],
    ['PA', ['La Paz', Subdivisions.DEPARTMENT]],
    ['SA', ['Santa Ana', Subdivisions.DEPARTMENT]],
    ['SM', ['San Miguel', Subdivisions.DEPARTMENT]],
    ['SO', ['Sonsonate', Subdivisions.DEPARTMENT]],
    ['SS', ['San Salvador', Subdivisions.DEPARTMENT]],
    ['SV', ['San Vicente', Subdivisions.DEPARTMENT]],
    ['UN', ['La Unión', Subdivisions.DEPARTMENT]],
    ['US', ['Usulután', Subdivisions.DEPARTMENT]],
  ]),
}
