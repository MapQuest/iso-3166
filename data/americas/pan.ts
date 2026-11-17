import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const PAN: Country = {
  name: 'Panama',
  names: { native: 'Panamá' },
  e164: 507,
  fips: 'PM',
  alpha2: 'PA',
  alpha3: 'PAN',
  ioc: 'PAN',
  numeric: 591,
  undp: 'PAN',
  subdivisions: new Map([
    ['1', ['Bocas del Toro', Subdivisions.PROVINCE]],
    ['2', ['Coclé', Subdivisions.PROVINCE]],
    ['3', ['Colón', Subdivisions.PROVINCE]],
    ['4', ['Chiriquí', Subdivisions.PROVINCE]],
    ['5', ['Darién', Subdivisions.PROVINCE]],
    ['6', ['Herrera', Subdivisions.PROVINCE]],
    ['7', ['Los Santos', Subdivisions.PROVINCE]],
    ['8', ['Panamá', Subdivisions.PROVINCE]],
    ['9', ['Veraguas', Subdivisions.PROVINCE]],
    ['10', ['Panamá Oeste', Subdivisions.PROVINCE]],
    ['EM', ['Emberá', Subdivisions.INDIGENOUS_REGION]],
    ['KY', ['Guna Yala', Subdivisions.INDIGENOUS_REGION]],
    ['NB', ['Ngäbe-Buglé', Subdivisions.INDIGENOUS_REGION]],
    ['NT', ['Naso Tjër Di', Subdivisions.INDIGENOUS_REGION]],
  ]),
}
