import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const GAB: Country = {
  name: 'Gabon',
  e164: 241,
  fips: 'GB',
  alpha2: 'GA',
  alpha3: 'GAB',
  ioc: 'GAB',
  numeric: 266,
  subdivisions: new Map([
    ['1', ['Estuaire', Subdivisions.PROVINCE]],
    ['2', ['Haut-Ogooué', Subdivisions.PROVINCE]],
    ['3', ['Moyen-Ogooué', Subdivisions.PROVINCE]],
    ['4', ['Ngounié', Subdivisions.PROVINCE]],
    ['5', ['Nyanga', Subdivisions.PROVINCE]],
    ['6', ['Ogooué-Ivindo', Subdivisions.PROVINCE]],
    ['7', ['Ogooué-Lolo', Subdivisions.PROVINCE]],
    ['8', ['Ogooué-Maritime', Subdivisions.PROVINCE]],
    ['9', ['Woleu-Ntem', Subdivisions.PROVINCE]],
  ]),
}
