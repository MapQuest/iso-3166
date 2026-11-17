import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const SOM: Country = {
  name: 'Somalia',
  e164: 252,
  fips: 'SO',
  alpha2: 'SO',
  alpha3: 'SOM',
  ioc: 'SOM',
  numeric: 706,
  subdivisions: new Map([
    ['AW', ['Awdal', Subdivisions.REGION]],
    ['BK', ['Bakool', Subdivisions.REGION]],
    ['BN', ['Banaadir', Subdivisions.REGION]],
    ['BR', ['Bari', Subdivisions.REGION]],
    ['BY', ['Bay', Subdivisions.REGION]],
    ['GA', ['Galguduud', Subdivisions.REGION]],
    ['GE', ['Gedo', Subdivisions.REGION]],
    ['HI', ['Hiiraan', Subdivisions.REGION]],
    ['JD', ['Jubbada Dhexe', Subdivisions.REGION]],
    ['JH', ['Jubbada Hoose', Subdivisions.REGION]],
    ['MU', ['Mudug', Subdivisions.REGION]],
    ['NU', ['Nugaal', Subdivisions.REGION]],
    ['SA', ['Sanaag', Subdivisions.REGION]],
    ['SD', ['Shabeellaha Dhexe', Subdivisions.REGION]],
    ['SH', ['Shabeellaha Hoose', Subdivisions.REGION]],
    ['SO', ['Sool', Subdivisions.REGION]],
    ['TO', ['Togdheer', Subdivisions.REGION]],
    ['WO', ['Woqooyi Galbeed', Subdivisions.REGION]],
  ]),
}
