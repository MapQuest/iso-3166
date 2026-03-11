import type { Country } from '../../types.js'
import { Subdivisions } from '../../subdivisions.js'

export const FSM: Country = {
  country: 'Micronesia, Federated States of',
  e164: 691,
  fips: 'FM',
  alpha2: 'FM',
  alpha3: 'FSM',
  ioc: 'FSM',
  numeric: 583,
  undp: 'FSM',
  localities: new Map([
    ['KSA', ['Kosrae', Subdivisions.STATE]],
    ['PNI', ['Pohnpei', Subdivisions.STATE]],
    ['TRK', ['Chuuk', Subdivisions.STATE]],
    ['YAP', ['Yap', Subdivisions.STATE]]
  ])
}
