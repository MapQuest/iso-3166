import type { SubdivisionType } from './subdivisions.js'

/**
 * Localized names keyed by BCP 47 locale tag.
 *
 * The reserved key `native` holds the name in the country's own official
 * language (the endonym), present only when it differs from the English name.
 *
 * @example { native: 'Türkiye', fr: 'Turquie', de: 'Türkei' }
 */
export type LocalizedNames = Record<string, string>

/** Subdivision entry: name, administrative type, and optional localized names */
export type Locality = [name: string, type: SubdivisionType, names?: LocalizedNames]

/**
 * ISO-3166 country data with optional subdivision localities.
 *
 * Represents a sovereign state or dependent territory as defined by
 * the ISO 3166-1 standard, with optional ISO 3166-2 subdivision data.
 */
export interface Country {
  /** Common English name of the country or territory (e.g. `"United States"`) */
  country: string
  /** Localized country names — use `native` for the local official name when it differs from `country` (e.g. `{ native: 'Deutschland', fr: 'Allemagne' }`) */
  names?: LocalizedNames
  /** ITU-T E.164 international calling code (e.g. `1` for the US, `44` for the UK) */
  e164: number
  /** FIPS 10-4 two-letter country code, if assigned (e.g. `"US"`) */
  fips?: string
  /** ISO 3166-1 alpha-2 two-letter country code (e.g. `"US"`) */
  alpha2: string
  /** ISO 3166-1 alpha-3 three-letter country code (e.g. `"USA"`) */
  alpha3: string
  /** International Olympic Committee three-letter country code, if assigned (e.g. `"USA"`) */
  ioc?: string
  /** ISO 3166-1 numeric three-digit country code, if assigned (e.g. `840` for the US) */
  numeric?: number
  /** United Nations Development Programme country code (e.g. `"USA"`) */
  undp: string
  /** ISO 3166-2 subdivision localities keyed by subdivision code (e.g. `"US-CA"`), with a tuple of the subdivision name and its administrative type */
  localities?: Map<string, Locality>
}
