import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const BDI: Country = {
  name: 'Burundi',
  e164: 257,
  fips: 'BY',
  alpha2: 'BI',
  alpha3: 'BDI',
  ioc: 'BDI',
  numeric: 108,
  subdivisions: new Map([
    ['BB', ['Bubanza', Subdivisions.PROVINCE]],
    ['BL', ['Bujumbura Rural', Subdivisions.PROVINCE]],
    ['BM', ['Bujumbura Mairie', Subdivisions.PROVINCE]],
    ['BR', ['Bururi', Subdivisions.PROVINCE]],
    ['CA', ['Cankuzo', Subdivisions.PROVINCE]],
    ['CI', ['Cibitoke', Subdivisions.PROVINCE]],
    ['GI', ['Gitega', Subdivisions.PROVINCE]],
    ['KI', ['Kirundo', Subdivisions.PROVINCE]],
    ['KR', ['Karuzi', Subdivisions.PROVINCE]],
    ['KY', ['Kayanza', Subdivisions.PROVINCE]],
    ['MA', ['Makamba', Subdivisions.PROVINCE]],
    ['MU', ['Muramvya', Subdivisions.PROVINCE]],
    ['MW', ['Mwaro', Subdivisions.PROVINCE]],
    ['MY', ['Muyinga', Subdivisions.PROVINCE]],
    ['NG', ['Ngozi', Subdivisions.PROVINCE]],
    ['RM', ['Rumonge', Subdivisions.PROVINCE]],
    ['RT', ['Rutana', Subdivisions.PROVINCE]],
    ['RY', ['Ruyigi', Subdivisions.PROVINCE]],
  ]),
}
