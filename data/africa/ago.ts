import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const AGO: Country = {
  name: 'Angola',
  e164: 244,
  fips: 'AO',
  alpha2: 'AO',
  alpha3: 'AGO',
  ioc: 'ANG',
  numeric: 24,
  subdivisions: new Map([
    ['BGO', ['Bengo', Subdivisions.PROVINCE]],
    ['BGU', ['Benguela', Subdivisions.PROVINCE]],
    ['BIE', ['Bié', Subdivisions.PROVINCE]],
    ['CAB', ['Cabinda', Subdivisions.PROVINCE]],
    ['CCU', ['Cuando Cubango', Subdivisions.PROVINCE, { local: 'Kuando Kubango' }]],
    ['CNN', ['Cunene', Subdivisions.PROVINCE]],
    ['CNO', ['Cuanza-Norte', Subdivisions.PROVINCE, { local: 'Kwanza Norte' }]],
    ['CUS', ['Cuanza-Sul', Subdivisions.PROVINCE, { local: 'Kwanza Sul' }]],
    ['HUA', ['Huambo', Subdivisions.PROVINCE]],
    ['HUI', ['Huíla', Subdivisions.PROVINCE]],
    ['LNO', ['Lunda-Norte', Subdivisions.PROVINCE]],
    ['LSU', ['Lunda-Sul', Subdivisions.PROVINCE]],
    ['LUA', ['Luanda', Subdivisions.PROVINCE]],
    ['MAL', ['Malange', Subdivisions.PROVINCE]],
    ['MOX', ['Moxico', Subdivisions.PROVINCE]],
    ['NAM', ['Namibe', Subdivisions.PROVINCE]],
    ['UIG', ['Uíge', Subdivisions.PROVINCE]],
    ['ZAI', ['Zaire', Subdivisions.PROVINCE]],
  ]),
}
