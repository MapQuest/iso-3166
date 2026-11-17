import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const TGO: Country = {
  name: 'Togo',
  e164: 228,
  fips: 'TO',
  alpha2: 'TG',
  alpha3: 'TGO',
  ioc: 'TOG',
  numeric: 768,
  subdivisions: new Map([
    ['C', ['Centrale', Subdivisions.REGION, { aliases: ['Centre'] }]],
    ['K', ['Kara', Subdivisions.REGION]],
    ['M', ['Maritime (Région)', Subdivisions.REGION, { en: 'Maritime' }]],
    ['P', ['Plateaux', Subdivisions.REGION]],
    ['S', ['Savanes', Subdivisions.REGION, { aliases: ['Savannes'] }]],
  ]),
}
