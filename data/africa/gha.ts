import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const GHA: Country = {
  name: 'Ghana',
  e164: 233,
  fips: 'GH',
  alpha2: 'GH',
  alpha3: 'GHA',
  ioc: 'GHA',
  numeric: 288,
  subdivisions: new Map([
    ['AA', ['Greater Accra', Subdivisions.REGION]],
    ['AF', ['Ahafo', Subdivisions.REGION]],
    ['AH', ['Ashanti', Subdivisions.REGION]],
    ['BE', ['Bono East', Subdivisions.REGION]],
    ['BO', ['Bono', Subdivisions.REGION]],
    ['CP', ['Central', Subdivisions.REGION]],
    ['EP', ['Eastern', Subdivisions.REGION]],
    ['NE', ['North East', Subdivisions.REGION]],
    ['NP', ['Northern', Subdivisions.REGION]],
    ['OT', ['Oti', Subdivisions.REGION]],
    ['SV', ['Savannah', Subdivisions.REGION]],
    ['TV', ['Volta', Subdivisions.REGION]],
    ['UE', ['Upper East', Subdivisions.REGION]],
    ['UW', ['Upper West', Subdivisions.REGION]],
    ['WN', ['Western North', Subdivisions.REGION]],
    ['WP', ['Western', Subdivisions.REGION]],
  ]),
}
