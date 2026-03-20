import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const HND: Country = {
  name: 'Honduras',
  e164: 504,
  fips: 'HO',
  alpha2: 'HN',
  alpha3: 'HND',
  ioc: 'HON',
  numeric: 340,
  undp: 'HND',
  localities: new Map([
    ['AT', ['Atlántida', Subdivisions.DEPARTMENT]],
    ['CH', ['Choluteca', Subdivisions.DEPARTMENT]],
    ['CL', ['Colón', Subdivisions.DEPARTMENT]],
    ['CM', ['Comayagua', Subdivisions.DEPARTMENT]],
    ['CP', ['Copán', Subdivisions.DEPARTMENT]],
    ['CR', ['Cortés', Subdivisions.DEPARTMENT]],
    ['EP', ['El Paraíso', Subdivisions.DEPARTMENT]],
    ['FM', ['Francisco Morazán', Subdivisions.DEPARTMENT]],
    ['GD', ['Gracias a Dios', Subdivisions.DEPARTMENT]],
    ['IB', ['Islas de la Bahía', Subdivisions.DEPARTMENT, { en: 'Bay Islands' }]],
    ['IN', ['Intibucá', Subdivisions.DEPARTMENT]],
    ['LE', ['Lempira', Subdivisions.DEPARTMENT]],
    ['LP', ['La Paz', Subdivisions.DEPARTMENT]],
    ['OC', ['Ocotepeque', Subdivisions.DEPARTMENT]],
    ['OL', ['Olancho', Subdivisions.DEPARTMENT]],
    ['SB', ['Santa Bárbara', Subdivisions.DEPARTMENT]],
    ['VA', ['Valle', Subdivisions.DEPARTMENT]],
    ['YO', ['Yoro', Subdivisions.DEPARTMENT]],
  ]),
}
