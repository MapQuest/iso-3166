import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const STP: Country = {
  name: 'Sao Tome and Principe',
  e164: 239,
  fips: 'TP',
  alpha2: 'ST',
  alpha3: 'STP',
  ioc: 'STP',
  numeric: 678,
  subdivisions: new Map([
    ['01', ['Água Grande', Subdivisions.DISTRICT]],
    ['02', ['Cantagalo', Subdivisions.DISTRICT]],
    ['03', ['Caué', Subdivisions.DISTRICT]],
    ['04', ['Lembá', Subdivisions.DISTRICT]],
    ['05', ['Lobata', Subdivisions.DISTRICT]],
    ['06', ['Mé-Zóchi', Subdivisions.DISTRICT]],
    ['P', ['Príncipe', Subdivisions.AUTONOMOUS_REGION]],
  ]),
}
