/**
 * @mapquest/iso-3166/core
 *
 * À la carte entry point — import this alongside individual
 * data packs when you only need a subset of countries/regions
 * and want to keep your bundle small.
 *
 * @example
 * import { register, country, subdivision } from '@mapquest/iso-3166/core'
 * import * as asia from '@mapquest/iso-3166/asia'
 *
 * register(asia)
 *
 * country('JP')
 * subdivision('JP-27')
 */

import { normalize, registry } from './registry.js'
import type { Country, Subdivision } from '../data/types.js'

export type { Country, Locality, LocalizedNames, Subdivision } from '../data/types.js'
export type { SubdivisionType } from '../data/subdivisions.js'
export { Subdivisions } from '../data/subdivisions.js'
export type { CountryPack } from './registry.js'
export { register } from './registry.js'

/**
 * Look up a country by name, localized name, alpha-2, or alpha-3 code.
 *
 * @param query - Case-insensitive search string (e.g. `'Canada'`, `'CA'`, `'CAN'`, `'Le Canada'`)
 * @returns The matching Country, or `undefined` if not found
 */
export function country (query: string): Country | undefined {
  return registry.get(normalize(query))?.country
}

/**
 * Look up a subdivision within a registered country.
 *
 * @param query - Full subdivision code (e.g. `'JP-27'`), or a country name or alpha-2/alpha-3 code
 * @param regionQuery - Subdivision code without its country prefix, name, or localized name
 * @returns A shared cached result (readonly in TypeScript, not frozen at runtime), or `undefined` if not found
 */
export function subdivision (query: string, regionQuery?: string): Readonly<Subdivision> | undefined {
  if (regionQuery === undefined) {
    const match = /^([a-z]{2,3})-([a-z0-9]{1,3})$/i.exec(query.trim())
    return match ? subdivision(match[1], match[2]) : undefined
  }

  const index = registry.get(normalize(query))?.subdivisions
  return index?.get(normalize(regionQuery))
}
