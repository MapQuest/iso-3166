import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const NER: Country = {
  name: 'Niger',
  e164: 227,
  fips: 'NG',
  alpha2: 'NE',
  alpha3: 'NER',
  ioc: 'NIG',
  numeric: 562,
  subdivisions: new Map([
    ['1', ['Agadez', Subdivisions.REGION]],
    ['2', ['Diffa', Subdivisions.REGION]],
    ['3', ['Dosso', Subdivisions.REGION]],
    ['4', ['Maradi', Subdivisions.REGION]],
    ['5', ['Tahoua', Subdivisions.REGION]],
    ['6', ['Tillabéri', Subdivisions.REGION]],
    ['7', ['Zinder', Subdivisions.REGION]],
    ['8', ['Niamey', Subdivisions.URBAN_COMMUNITY]],
  ]),
}
