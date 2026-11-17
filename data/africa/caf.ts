import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const CAF: Country = {
  name: 'Central African Republic',
  e164: 236,
  fips: 'CT',
  alpha2: 'CF',
  alpha3: 'CAF',
  ioc: 'CAF',
  numeric: 140,
  subdivisions: new Map([
    ['AC', ['Ouham', Subdivisions.PREFECTURE]],
    ['BB', ['Bamingui-Bangoran', Subdivisions.PREFECTURE, { sg: 'Bamïngï-Bangoran' }]],
    ['BGF', ['Bangui', Subdivisions.COMMUNE, { sg: 'Bangî' }]],
    ['BK', ['Basse-Kotto', Subdivisions.PREFECTURE]],
    ['HK', ['Haute-Kotto', Subdivisions.PREFECTURE]],
    ['HM', ['Haut-Mbomou', Subdivisions.PREFECTURE]],
    ['HS', ['Haute-Sangha / Mambéré-Kadéï', Subdivisions.PREFECTURE]],
    ['KB', ['Gribingui', Subdivisions.ECONOMIC_PREFECTURE, { sg: 'Gïrïbïngï' }]],
    ['KG', ['Kémo-Gribingui', Subdivisions.PREFECTURE, { sg: 'Kemö-Gïrïbïngï' }]],
    ['LB', ['Lobaye', Subdivisions.PREFECTURE]],
    ['MB', ['Mbomou', Subdivisions.PREFECTURE]],
    ['MP', ['Ombella-Mpoko', Subdivisions.PREFECTURE, { sg: 'Ömbëlä-Pökö' }]],
    ['NM', ['Nana-Mambéré', Subdivisions.PREFECTURE]],
    ['OP', ['Ouham-Pendé', Subdivisions.PREFECTURE]],
    ['SE', ['Sangha', Subdivisions.ECONOMIC_PREFECTURE, { sg: 'Sangä' }]],
    ['UK', ['Ouaka', Subdivisions.PREFECTURE]],
    ['VK', ['Vakaga', Subdivisions.PREFECTURE]],
  ]),
}
