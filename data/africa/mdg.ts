import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const MDG: Country = {
  name: 'Madagascar',
  e164: 261,
  fips: 'MA',
  alpha2: 'MG',
  alpha3: 'MDG',
  ioc: 'MAD',
  numeric: 450,
  subdivisions: new Map([
    ['A', ['Toamasina', Subdivisions.PROVINCE]],
    ['D', ['Antsiranana', Subdivisions.PROVINCE]],
    ['F', ['Fianarantsoa', Subdivisions.PROVINCE]],
    ['M', ['Mahajanga', Subdivisions.PROVINCE]],
    ['T', ['Antananarivo', Subdivisions.PROVINCE]],
    ['U', ['Toliara', Subdivisions.PROVINCE]],
  ]),
}
