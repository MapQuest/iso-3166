import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const CRI: Country = {
  name: 'Costa Rica',
  e164: 506,
  fips: 'CS',
  alpha2: 'CR',
  alpha3: 'CRI',
  ioc: 'CRC',
  numeric: 188,
  undp: 'CRI',
  localities: new Map([
    ['A', ['Alajuela', Subdivisions.PROVINCE]],
    ['C', ['Cartago', Subdivisions.PROVINCE]],
    ['G', ['Guanacaste', Subdivisions.PROVINCE]],
    ['H', ['Heredia', Subdivisions.PROVINCE]],
    ['L', ['Limón', Subdivisions.PROVINCE]],
    ['P', ['Puntarenas', Subdivisions.PROVINCE]],
    ['SJ', ['San José', Subdivisions.PROVINCE]],
  ]),
}
