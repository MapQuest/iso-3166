import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const GNQ: Country = {
  name: 'Equatorial Guinea',
  e164: 240,
  fips: 'EK',
  alpha2: 'GQ',
  alpha3: 'GNQ',
  ioc: 'GEQ',
  numeric: 226,
  subdivisions: new Map([
    ['AN', ['Annobon', Subdivisions.PROVINCE]],
    ['BN', ['Bioko Nord', Subdivisions.PROVINCE]],
    ['BS', ['Bioko Sud', Subdivisions.PROVINCE]],
    ['C', ['Région Continentale', Subdivisions.REGION, { pt: 'Região Continental' }]],
    ['CS', ['Centro Sud', Subdivisions.PROVINCE]],
    ['DJ', ['Djibloho', Subdivisions.PROVINCE]],
    ['I', ['Région Insulaire', Subdivisions.REGION, { pt: 'Região Insular' }]],
    ['KN', ['Kié-Ntem', Subdivisions.PROVINCE]],
    ['LI', ['Littoral', Subdivisions.PROVINCE, { pt: 'Litoral' }]],
    ['WN', ['Wele-Nzas', Subdivisions.PROVINCE]],
  ]),
}
