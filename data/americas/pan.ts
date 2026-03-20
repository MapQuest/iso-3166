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
  localities: new Map([
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
    ['EM', ['Emberá', Subdivisions.AUTONOMOUS_REGION]],
    ['KY', ['Kuna Yala', Subdivisions.AUTONOMOUS_REGION]],
    ['NB', ['Ngöbe-Buglé', Subdivisions.AUTONOMOUS_REGION]],
  ]),
}
