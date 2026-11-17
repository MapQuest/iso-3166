import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const COG: Country = {
  name: 'Congo',
  names: { en: 'Republic of the Congo' },
  e164: 242,
  fips: 'CF',
  alpha2: 'CG',
  alpha3: 'COG',
  ioc: 'CGO',
  numeric: 178,
  subdivisions: new Map([
    ['2', ['Lékoumou', Subdivisions.DEPARTMENT]],
    ['5', ['Kouilou', Subdivisions.DEPARTMENT]],
    ['7', ['Likouala', Subdivisions.DEPARTMENT]],
    ['8', ['Cuvette', Subdivisions.DEPARTMENT]],
    ['9', ['Niari', Subdivisions.DEPARTMENT]],
    ['11', ['Bouenza', Subdivisions.DEPARTMENT]],
    ['12', ['Pool', Subdivisions.DEPARTMENT]],
    ['13', ['Sangha', Subdivisions.DEPARTMENT]],
    ['14', ['Plateaux', Subdivisions.DEPARTMENT]],
    ['15', ['Cuvette-Ouest', Subdivisions.DEPARTMENT]],
    ['16', ['Pointe-Noire', Subdivisions.DEPARTMENT]],
    ['BZV', ['Brazzaville', Subdivisions.DEPARTMENT]],
  ]),
}
