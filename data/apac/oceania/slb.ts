import type { Country } from '../../types.js'
import { Subdivisions } from '../../subdivisions.js'

export const SLB: Country = {
  country: 'Solomon Islands',
  e164: 677,
  fips: 'BP',
  alpha2: 'SB',
  alpha3: 'SLB',
  ioc: 'SOL',
  numeric: 90,
  undp: 'SLB',
  localities: new Map([
    ['CE', ['Central', Subdivisions.PROVINCE]],
    ['CH', ['Choiseul', Subdivisions.PROVINCE]],
    ['CT', ['Capital Territory', Subdivisions.TERRITORY]],
    ['GU', ['Guadalcanal', Subdivisions.PROVINCE]],
    ['IS', ['Isabel', Subdivisions.PROVINCE]],
    ['MK', ['Makira-Ulawa', Subdivisions.PROVINCE]],
    ['ML', ['Malaita', Subdivisions.PROVINCE]],
    ['RB', ['Rennell and Bellona', Subdivisions.PROVINCE]],
    ['TE', ['Temotu', Subdivisions.PROVINCE]],
    ['WE', ['Western', Subdivisions.PROVINCE]]
  ])
}
