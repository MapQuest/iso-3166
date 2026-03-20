import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const URY: Country = {
  name: 'Uruguay',
  e164: 598,
  fips: 'UY',
  alpha2: 'UY',
  alpha3: 'URY',
  ioc: 'URU',
  numeric: 858,
  undp: 'URY',
  localities: new Map([
    ['AR', ['Artigas', Subdivisions.DEPARTMENT]],
    ['CA', ['Canelones', Subdivisions.DEPARTMENT]],
    ['CL', ['Cerro Largo', Subdivisions.DEPARTMENT]],
    ['CO', ['Colonia', Subdivisions.DEPARTMENT]],
    ['DU', ['Durazno', Subdivisions.DEPARTMENT]],
    ['FD', ['Florida', Subdivisions.DEPARTMENT]],
    ['FS', ['Flores', Subdivisions.DEPARTMENT]],
    ['LA', ['Lavalleja', Subdivisions.DEPARTMENT]],
    ['MA', ['Maldonado', Subdivisions.DEPARTMENT]],
    ['MO', ['Montevideo', Subdivisions.DEPARTMENT]],
    ['PA', ['Paysandú', Subdivisions.DEPARTMENT]],
    ['RN', ['Río Negro', Subdivisions.DEPARTMENT]],
    ['RO', ['Rocha', Subdivisions.DEPARTMENT]],
    ['RV', ['Rivera', Subdivisions.DEPARTMENT]],
    ['SA', ['Salto', Subdivisions.DEPARTMENT]],
    ['SJ', ['San José', Subdivisions.DEPARTMENT]],
    ['SO', ['Soriano', Subdivisions.DEPARTMENT]],
    ['TA', ['Tacuarembó', Subdivisions.DEPARTMENT]],
    ['TT', ['Treinta y Tres', Subdivisions.DEPARTMENT]],
  ]),
}
