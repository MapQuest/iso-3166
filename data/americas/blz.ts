import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const BLZ: Country = {
  name: 'Belize',
  e164: 501,
  fips: 'BH',
  alpha2: 'BZ',
  alpha3: 'BLZ',
  ioc: 'BIZ',
  numeric: 84,
  undp: 'BLZ',
  localities: new Map([
    ['BZ', ['Belize', Subdivisions.DISTRICT]],
    ['CY', ['Cayo', Subdivisions.DISTRICT]],
    ['CZL', ['Corozal', Subdivisions.DISTRICT]],
    ['OW', ['Orange Walk', Subdivisions.DISTRICT]],
    ['SC', ['Stann Creek', Subdivisions.DISTRICT]],
    ['TOL', ['Toledo', Subdivisions.DISTRICT]],
  ]),
}
