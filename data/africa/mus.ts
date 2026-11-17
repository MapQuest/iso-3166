import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const MUS: Country = {
  name: 'Mauritius',
  e164: 230,
  fips: 'MP',
  alpha2: 'MU',
  alpha3: 'MUS',
  ioc: 'MRI',
  numeric: 480,
  subdivisions: new Map([
    ['AG', ['Agalega Islands', Subdivisions.DEPENDENCY]],
    ['BL', ['Black River', Subdivisions.DISTRICT]],
    ['CC', ['Cargados Carajos Shoals', Subdivisions.DEPENDENCY]],
    ['FL', ['Flacq', Subdivisions.DISTRICT]],
    ['GP', ['Grand Port', Subdivisions.DISTRICT]],
    ['MO', ['Moka', Subdivisions.DISTRICT]],
    ['PA', ['Pamplemousses', Subdivisions.DISTRICT]],
    ['PL', ['Port Louis', Subdivisions.DISTRICT]],
    ['PW', ['Plaines Wilhems', Subdivisions.DISTRICT]],
    ['RO', ['Rodrigues Island', Subdivisions.DEPENDENCY]],
    ['RR', ['Rivière du Rempart', Subdivisions.DISTRICT]],
    ['SA', ['Savanne', Subdivisions.DISTRICT]],
  ]),
}
