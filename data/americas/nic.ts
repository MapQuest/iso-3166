import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const NIC: Country = {
  name: 'Nicaragua',
  e164: 505,
  fips: 'NU',
  alpha2: 'NI',
  alpha3: 'NIC',
  ioc: 'NCA',
  numeric: 558,
  undp: 'NIC',
  localities: new Map([
    ['AN', ['Atlántico Norte', Subdivisions.AUTONOMOUS_REGION, { en: 'North Caribbean Coast' }]],
    ['AS', ['Atlántico Sur', Subdivisions.AUTONOMOUS_REGION, { en: 'South Caribbean Coast' }]],
    ['BO', ['Boaco', Subdivisions.DEPARTMENT]],
    ['CA', ['Carazo', Subdivisions.DEPARTMENT]],
    ['CI', ['Chinandega', Subdivisions.DEPARTMENT]],
    ['CO', ['Chontales', Subdivisions.DEPARTMENT]],
    ['ES', ['Estelí', Subdivisions.DEPARTMENT]],
    ['GR', ['Granada', Subdivisions.DEPARTMENT]],
    ['JI', ['Jinotega', Subdivisions.DEPARTMENT]],
    ['LE', ['León', Subdivisions.DEPARTMENT]],
    ['MD', ['Madriz', Subdivisions.DEPARTMENT]],
    ['MN', ['Managua', Subdivisions.DEPARTMENT]],
    ['MS', ['Masaya', Subdivisions.DEPARTMENT]],
    ['MT', ['Matagalpa', Subdivisions.DEPARTMENT]],
    ['NS', ['Nueva Segovia', Subdivisions.DEPARTMENT]],
    ['RI', ['Rivas', Subdivisions.DEPARTMENT]],
    ['SJ', ['Río San Juan', Subdivisions.DEPARTMENT]],
  ]),
}
