import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const FJI: Country = {
  name: 'Fiji',
  e164: 679,
  fips: 'FJ',
  alpha2: 'FJ',
  alpha3: 'FJI',
  ioc: 'FIJ',
  numeric: 242,
  undp: 'FJI',
  subdivisions: new Map([
    ['01', ['Ba', Subdivisions.PROVINCE]],
    ['02', ['Bua', Subdivisions.PROVINCE]],
    ['03', ['Cakaudrove', Subdivisions.PROVINCE]],
    ['04', ['Kadavu', Subdivisions.PROVINCE]],
    ['05', ['Lau', Subdivisions.PROVINCE]],
    ['06', ['Lomaiviti', Subdivisions.PROVINCE]],
    ['07', ['Macuata', Subdivisions.PROVINCE]],
    ['08', ['Nadroga and Navosa', Subdivisions.PROVINCE]],
    ['09', ['Naitasiri', Subdivisions.PROVINCE]],
    ['10', ['Namosi', Subdivisions.PROVINCE]],
    ['11', ['Ra', Subdivisions.PROVINCE]],
    ['12', ['Rewa', Subdivisions.PROVINCE]],
    ['13', ['Serua', Subdivisions.PROVINCE]],
    ['14', ['Tailevu', Subdivisions.PROVINCE]],
    ['C', ['Central', Subdivisions.DIVISION]],
    ['E', ['Eastern', Subdivisions.DIVISION]],
    ['N', ['Northern', Subdivisions.DIVISION]],
    ['R', ['Rotuma', Subdivisions.DEPENDENCY]],
    ['W', ['Western', Subdivisions.DIVISION]],
  ]),
}
