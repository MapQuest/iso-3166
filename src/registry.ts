import type { Country, Subdivision } from '../data/types.js'

/**
 * A collection of named Country objects accepted by `register`.
 *
 * Built-in packs are exported from `/africa`, `/americas`, `/asia`, `/europe`,
 * and `/oceania`, following UN M49 geographic groupings where separately listed.
 * Each pack's module namespace is a CountryPack; `/regions` groups these packs
 * as namespaces rather than forming a single CountryPack.
 *
 * Custom packs may contain any subset of countries; keys are export names,
 * while lookup identifiers come from each Country's codes and names.
 *
 * @example
 * import { register } from '@mapquest/iso-3166/core'
 * import * as asia from '@mapquest/iso-3166/asia'
 *
 * register(asia)
 */
export type CountryPack = Record<string, Country>

interface CountryRegistration {
  country: Country
  subdivisions: Map<string, Subdivision>
}

/** Shared country entries and subdivision indexes keyed by normalized country codes and names. */
export const registry = new Map<string, CountryRegistration>()

/** Type guard — returns true when `value` looks like a Country object. */
function isCountry (value: unknown): value is Country {
  return typeof value === 'object' && value !== null && 'alpha2' in value
}

/** Lowercase, strip diacritics, normalize abbreviations, remove articles, punctuation, and spaces for fuzzy matching. */
export function normalize (value: string): string {
  // Short ASCII identifiers need only case folding, not full name normalization.
  if (value.length <= 3 && !/[^a-z0-9]/i.test(value)) return value.toLowerCase()
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/^the\s+/i, '').replace(/\bsaint\b/gi, 'st').replace(/[^a-z0-9]/gi, '').toLowerCase()
}

/**
 * Register one or more countries or country data packs into the global registry.
 *
 * Accepts individual Country objects, or whole data-pack modules whose named
 * exports are Country objects (e.g. `import * as asia from '…/asia'`).
 *
 * @param items - Country objects or data pack modules
 */
export function register (...items: Array<Country | CountryPack>): void {
  items.flatMap(item =>
    isCountry(item) ? [item] : Object.values(item).filter(isCountry)
  ).forEach(registerCountry)
}

/** Index a country's codes, names, and subdivisions using the lookup normalization. */
function registerCountry (country: Country): void {
  const entry: CountryRegistration = {
    country,
    subdivisions: registerSubdivisions(country),
  }

  registry.set(normalize(country.name), entry)
  registry.set(normalize(country.alpha2), entry)
  registry.set(normalize(country.alpha3), entry)

  for (const name of Object.values(country.names || {})) {
    registry.set(normalize(name), entry)
  }
}

/** Build a country's shared subdivision index for normalized codes and names. */
function registerSubdivisions (country: Country): CountryRegistration['subdivisions'] {
  const subdivisions = new Map<string, Subdivision>()
  for (const [regionCode, [name, type, localizedNames]] of country.subdivisions || []) {
    const result: Subdivision = {
      name,
      type,
      country,
      regionCode,
      code: `${country.alpha2}-${regionCode}`,
    }
    subdivisions.set(normalize(name), result)
    subdivisions.set(normalize(regionCode), result)
    for (const alias of Object.values(localizedNames || {})) {
      subdivisions.set(normalize(alias), result)
    }
  }
  return subdivisions
}
