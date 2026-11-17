import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const BWA: Country = {
  name: 'Botswana',
  e164: 267,
  fips: 'BC',
  alpha2: 'BW',
  alpha3: 'BWA',
  ioc: 'BOT',
  numeric: 72,
  subdivisions: new Map([
    ['CE', ['Central', Subdivisions.DISTRICT]],
    ['CH', ['Chobe', Subdivisions.DISTRICT]],
    ['FR', ['Francistown', Subdivisions.CITY]],
    ['GA', ['Gaborone', Subdivisions.CITY]],
    ['GH', ['Ghanzi', Subdivisions.DISTRICT]],
    ['JW', ['Jwaneng', Subdivisions.TOWN]],
    ['KG', ['Kgalagadi', Subdivisions.DISTRICT]],
    ['KL', ['Kgatleng', Subdivisions.DISTRICT]],
    ['KW', ['Kweneng', Subdivisions.DISTRICT]],
    ['LO', ['Lobatse', Subdivisions.TOWN]],
    ['NE', ['North East', Subdivisions.DISTRICT]],
    ['NW', ['North West', Subdivisions.DISTRICT]],
    ['SE', ['South East', Subdivisions.DISTRICT]],
    ['SO', ['Southern', Subdivisions.DISTRICT]],
    ['SP', ['Selibe Phikwe', Subdivisions.TOWN]],
    ['ST', ['Sowa Town', Subdivisions.TOWN]],
  ]),
}
