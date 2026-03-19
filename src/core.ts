/**
 * @mapquest/iso-3166/core
 *
 * À la carte entry point — import this alongside individual
 * data packs when you only need a subset of countries/regions
 * and want to keep your bundle small.
 *
 * Usage:
 *
 *   import { register, country, subdivision } from '@mapquest/iso-3166/core'
 *   import * as apac from '@mapquest/iso-3166/apac'
 *
 *   register(apac)
 *
 *   country('JP')        // returns the JPN Country object
 *   subdivision('JP-27') // returns ['Osaka', 'Prefecture']
 *
 * Business logic will be implemented here in a future milestone.
 */

export type { Country, Locality, LocalizedNames } from '../data/types.js'
export type { SubdivisionType } from '../data/subdivisions.js'
export { Subdivisions } from '../data/subdivisions.js'
