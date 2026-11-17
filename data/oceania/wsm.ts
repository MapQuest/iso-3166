import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const WSM: Country = {
  name: 'Samoa',
  e164: 685,
  fips: 'WS',
  alpha2: 'WS',
  alpha3: 'WSM',
  ioc: 'SAM',
  numeric: 882,
  undp: 'WSM',
  localities: new Map([
    ['AA', ['A\'ana', Subdivisions.DISTRICT]],
    ['AL', ['Aiga-i-le-Tai', Subdivisions.DISTRICT]],
    ['AT', ['Atua', Subdivisions.DISTRICT]],
    ['FA', ['Fa\'asaleleaga', Subdivisions.DISTRICT]],
    ['GE', ['Gaga\'emauga', Subdivisions.DISTRICT]],
    ['GI', ['Gagaifomauga', Subdivisions.DISTRICT]],
    ['PA', ['Palauli', Subdivisions.DISTRICT]],
    ['SA', ['Satupa\'itea', Subdivisions.DISTRICT]],
    ['TU', ['Tuamasaga', Subdivisions.DISTRICT]],
    ['VF', ['Va\'a-o-Fonoti', Subdivisions.DISTRICT]],
    ['VS', ['Vaisigano', Subdivisions.DISTRICT]],
  ]),
}
