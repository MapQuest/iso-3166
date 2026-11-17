import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const ZAF: Country = {
  name: 'South Africa',
  e164: 27,
  fips: 'SF',
  alpha2: 'ZA',
  alpha3: 'ZAF',
  ioc: 'RSA',
  numeric: 710,
  subdivisions: new Map([
    ['EC', ['Eastern Cape', Subdivisions.PROVINCE]],
    ['FS', ['Free State', Subdivisions.PROVINCE, { st: 'Foreisetata' }]],
    ['GP', ['Gauteng', Subdivisions.PROVINCE]],
    ['GT', ['Gauteng', Subdivisions.PROVINCE]],
    ['KZN', ['Kwazulu-Natal', Subdivisions.PROVINCE, { nso: 'GaZulu-Natala' }]],
    ['LP', ['Limpopo', Subdivisions.PROVINCE]],
    ['MP', ['Mpumalanga', Subdivisions.PROVINCE, { nr: 'iMpumalanga' }]],
    ['NC', ['Northern Cape', Subdivisions.PROVINCE, { nr: 'iTlhagwini-Kapa' }]],
    ['NL', ['Kwazulu-Natal', Subdivisions.PROVINCE, { nso: 'GaZulu-Natala' }]],
    ['NW', ['North-West', Subdivisions.PROVINCE, { aliases: ['Bokone Bophirima'] }]],
    ['WC', ['Western Cape', Subdivisions.PROVINCE, { nr: 'iTjhingalanga-Kapa' }]],
  ]),
}
