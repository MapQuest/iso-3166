import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const CIV: Country = {
  name: 'Côte d\'Ivoire',
  names: { en: 'Ivory Coast' },
  e164: 225,
  fips: 'IV',
  alpha2: 'CI',
  alpha3: 'CIV',
  ioc: 'CIV',
  numeric: 384,
  subdivisions: new Map([
    ['AB', ['Abidjan', Subdivisions.AUTONOMOUS_DISTRICT]],
    ['BS', ['Bas-Sassandra', Subdivisions.DISTRICT]],
    ['CM', ['Comoé', Subdivisions.DISTRICT]],
    ['DN', ['Denguélé', Subdivisions.DISTRICT]],
    ['GD', ['Gôh-Djiboua', Subdivisions.DISTRICT]],
    ['LC', ['Lacs', Subdivisions.DISTRICT]],
    ['LG', ['Lagunes', Subdivisions.DISTRICT]],
    ['MG', ['Montagnes', Subdivisions.DISTRICT]],
    ['SM', ['Sassandra-Marahoué', Subdivisions.DISTRICT]],
    ['SV', ['Savanes', Subdivisions.DISTRICT]],
    ['VB', ['Vallée du Bandama', Subdivisions.DISTRICT]],
    ['WR', ['Woroba', Subdivisions.DISTRICT]],
    ['YM', ['Yamoussoukro', Subdivisions.AUTONOMOUS_DISTRICT]],
    ['ZZ', ['Zanzan', Subdivisions.DISTRICT]],
  ]),
}
