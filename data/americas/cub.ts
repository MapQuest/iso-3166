import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const CUB: Country = {
  name: 'Cuba',
  e164: 53,
  fips: 'CU',
  alpha2: 'CU',
  alpha3: 'CUB',
  ioc: 'CUB',
  numeric: 192,
  undp: 'CUB',
  localities: new Map([
    ['01', ['Pinar del Río', Subdivisions.PROVINCE]],
    ['03', ['La Habana', Subdivisions.PROVINCE, { en: 'Havana' }]],
    ['04', ['Matanzas', Subdivisions.PROVINCE]],
    ['05', ['Villa Clara', Subdivisions.PROVINCE]],
    ['06', ['Cienfuegos', Subdivisions.PROVINCE]],
    ['07', ['Sancti Spíritus', Subdivisions.PROVINCE]],
    ['08', ['Ciego de Ávila', Subdivisions.PROVINCE]],
    ['09', ['Camagüey', Subdivisions.PROVINCE]],
    ['10', ['Las Tunas', Subdivisions.PROVINCE]],
    ['11', ['Holguín', Subdivisions.PROVINCE]],
    ['12', ['Granma', Subdivisions.PROVINCE]],
    ['13', ['Santiago de Cuba', Subdivisions.PROVINCE]],
    ['14', ['Guantánamo', Subdivisions.PROVINCE]],
    ['15', ['Artemisa', Subdivisions.PROVINCE]],
    ['16', ['Mayabeque', Subdivisions.PROVINCE]],
    ['99', ['Isla de la Juventud', Subdivisions.MUNICIPALITY, { en: 'Isle of Youth' }]],
  ]),
}
