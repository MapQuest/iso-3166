import { Subdivisions } from '../../subdivisions.js'
import type { Country } from '../../types.js'

export const GUM: Country = {
  name: 'Guam',
  e164: 1671,
  fips: 'GQ',
  alpha2: 'GU',
  alpha3: 'GUM',
  ioc: 'GUM',
  numeric: 316,
  undp: 'GUM',
  localities: new Map([
    ['01', ['Agana Heights', Subdivisions.MUNICIPALITY]],
    ['02', ['Agat', Subdivisions.MUNICIPALITY]],
    ['03', ['Asan-Maina', Subdivisions.MUNICIPALITY]],
    ['04', ['Barrigada', Subdivisions.MUNICIPALITY]],
    ['05', ['Chalan Pago-Ordot', Subdivisions.MUNICIPALITY]],
    ['06', ['Dededo', Subdivisions.MUNICIPALITY]],
    ['07', ['Hagåtña', Subdivisions.MUNICIPALITY]],
    ['08', ['Inarajan', Subdivisions.MUNICIPALITY]],
    ['09', ['Mangilao', Subdivisions.MUNICIPALITY]],
    ['10', ['Merizo', Subdivisions.MUNICIPALITY]],
    ['11', ['Mongmong-Toto-Maite', Subdivisions.MUNICIPALITY]],
    ['12', ['Piti', Subdivisions.MUNICIPALITY]],
    ['13', ['Santa Rita', Subdivisions.MUNICIPALITY]],
    ['14', ['Sinajana', Subdivisions.MUNICIPALITY]],
    ['15', ['Talofofo', Subdivisions.MUNICIPALITY]],
    ['16', ['Tamuning-Tumon-Harmon', Subdivisions.MUNICIPALITY]],
    ['17', ['Umatac', Subdivisions.MUNICIPALITY]],
    ['18', ['Yigo', Subdivisions.MUNICIPALITY]],
    ['19', ['Yona', Subdivisions.MUNICIPALITY]],
  ]),
}
