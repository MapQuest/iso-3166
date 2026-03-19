/**
 * @mapquest/iso-3166/core
 *
 * À la carte entry point — import this alongside individual
 * data packs when you only need a subset of countries/regions
 * and want to keep your bundle small.
 *
 * @example
 * import { register, country, subdivision } from '@mapquest/iso-3166/core'
 * import * as apac from '@mapquest/iso-3166/apac'
 *
 * register(apac)
 *
 * country('JP')
 * subdivision('JP-27')
 */

import type { Country } from '../data/types.js'

export type { Country, Locality, LocalizedNames } from '../data/types.js'
export type { SubdivisionType } from '../data/subdivisions.js'
export { Subdivisions } from '../data/subdivisions.js'

/** A country data pack — a module whose named exports are Country objects. */
export type CountryPack = Record<string, Country>

/** Type guard — returns true when `value` looks like a Country object. */
function isCountry (value: unknown): value is Country {
  return typeof value === 'object' && value !== null && 'alpha2' in value
}

// Singleton lookup registry: normalized key → Country
const registry = new Map<string, Country>()

/** Lowercase, strip diacritics, and remove spaces for fuzzy matching. */
function normalize (s: string): string {
  return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s/g, '').toLowerCase()
}

/**
 * Index a single country by all searchable keys:
 * english name, localized names, alpha-2 and alpha-3 codes.
 */
function registerCountry (c: Country): void {
  registry.set(normalize(c.name), c)
  registry.set(normalize(c.alpha2), c)
  registry.set(normalize(c.alpha3), c)

  for (const name of Object.values(c.names || {})) {
    registry.set(normalize(name), c)
  }
}

/**
 * Register one or more countries or country data packs into the global registry.
 *
 * Accepts individual Country objects, or whole data-pack modules whose named
 * exports are Country objects (e.g. `import * as apac from '…/apac'`).
 *
 * @param items - Country objects or data pack modules
 */
export function register (...items: Array<Country | CountryPack>): void {
  items.flatMap(item =>
    isCountry(item) ? [item] : Object.values(item).filter(isCountry)
  ).forEach(registerCountry)
}

/**
 * Look up a country by name, localized name, alpha-2, or alpha-3 code.
 *
 * @param query - Case-insensitive search string (e.g. `'Canada'`, `'CA'`, `'CAN'`, `'Le Canada'`)
 * @returns The matching Country, or `undefined` if not found
 */
export function country (query: string): Country | undefined {
  return registry.get(normalize(query))
}
