import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const PRY: Country = {
  name: 'Paraguay',
  e164: 595,
  fips: 'PA',
  alpha2: 'PY',
  alpha3: 'PRY',
  ioc: 'PAR',
  numeric: 600,
  undp: 'PRY',
  localities: new Map([
    ['1', ['Concepción', Subdivisions.DEPARTMENT]],
    ['2', ['San Pedro', Subdivisions.DEPARTMENT]],
    ['3', ['Cordillera', Subdivisions.DEPARTMENT]],
    ['4', ['Guairá', Subdivisions.DEPARTMENT]],
    ['5', ['Caaguazú', Subdivisions.DEPARTMENT]],
    ['6', ['Caazapá', Subdivisions.DEPARTMENT]],
    ['7', ['Itapúa', Subdivisions.DEPARTMENT]],
    ['8', ['Misiones', Subdivisions.DEPARTMENT]],
    ['9', ['Paraguarí', Subdivisions.DEPARTMENT]],
    ['10', ['Alto Paraná', Subdivisions.DEPARTMENT]],
    ['11', ['Central', Subdivisions.DEPARTMENT]],
    ['12', ['Ñeembucú', Subdivisions.DEPARTMENT]],
    ['13', ['Amambay', Subdivisions.DEPARTMENT]],
    ['14', ['Canindeyú', Subdivisions.DEPARTMENT]],
    ['15', ['Presidente Hayes', Subdivisions.DEPARTMENT]],
    ['16', ['Alto Paraguay', Subdivisions.DEPARTMENT]],
    ['19', ['Boquerón', Subdivisions.DEPARTMENT]],
    ['ASU', ['Asunción', Subdivisions.CAPITAL]],
  ]),
}
