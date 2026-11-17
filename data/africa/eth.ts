import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const ETH: Country = {
  name: 'Ethiopia',
  e164: 251,
  fips: 'ET',
  alpha2: 'ET',
  alpha3: 'ETH',
  ioc: 'ETH',
  numeric: 231,
  subdivisions: new Map([
    ['AA', ['Addis Ababa', Subdivisions.ADMINISTRATION]],
    ['AF', ['Afar', Subdivisions.REGIONAL_STATE]],
    ['AM', ['Amara', Subdivisions.REGIONAL_STATE]],
    ['BE', ['Benshangul-Gumaz', Subdivisions.REGIONAL_STATE]],
    ['DD', ['Dire Dawa', Subdivisions.ADMINISTRATION]],
    ['GA', ['Gambela Peoples', Subdivisions.REGIONAL_STATE, { am: 'Gambēla Hizboch' }]],
    ['HA', ['Harari People', Subdivisions.REGIONAL_STATE]],
    ['OR', ['Oromia', Subdivisions.REGIONAL_STATE]],
    ['SI', ['Sidama', Subdivisions.REGIONAL_STATE]],
    ['SN', ['Southern Nations, Nationalities and Peoples', Subdivisions.REGIONAL_STATE]],
    ['SO', ['Somali', Subdivisions.REGIONAL_STATE]],
    ['SW', ['Southwest Ethiopia Peoples', Subdivisions.REGIONAL_STATE]],
    ['TI', ['Tigrai', Subdivisions.REGIONAL_STATE]],
  ]),
}
