import type { SubdivisionType } from './subdivisions.js'

/**
 * Localized names keyed by BCP 47 locale tag.
 *
 * The reserved key `native` is the official endonym — the name the country
 * or subdivision uses to refer to *itself* in its primary official language.
 * It is **not** simply a translation into another language; for additional
 * language translations use the appropriate BCP 47 tag (e.g. `fr`, `mi`).
 *
 * Use `native` when the endonym differs from the ISO 3166-1 short name:
 * - `{ native: 'Deutschland' }` — Germany calls itself "Deutschland"
 * - `{ native: 'México' }` — diacritic-only differences still qualify
 *
 * Use a BCP 47 tag for a second official or minority language name that is
 * *not* the country's primary self-referential name:
 * - `{ mi: 'Aotearoa' }` — Māori name for New Zealand
 * - `{ fr: 'Le Canada' }` — French name for Canada
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
  /**
   * ISO 3166-1 English short name of the country or territory.
   *
   * When the ISO name differs from common English usage, the everyday
   * English name is in `names.en` so that both are searchable.
   *
   * @example
   * name: 'Viet Nam'
   * names: { native: 'Việt Nam', en: 'Vietnam' }
   *
   * @example
   * name: 'United States of America'
   * names: { en: 'United States' }
   */
  name: string
  /**
   * Localized country names keyed by BCP 47 tag.
   *
   * - `native` — the country's official self-referential endonym, present only
   *   when the primary official language name differs from the ISO 3166-1 short name.
   *   Secondary or minority language names use the appropriate BCP 47 tag
   *   instead (e.g. `mi` for Māori, `fr` for French).
   * - `en` — common English name when it differs from the ISO short name in `name`
   *
   * @example { native: 'Việt Nam', en: 'Vietnam' }
   * @example { native: 'Deutschland', fr: 'Allemagne' }
   * @example { mi: 'Aotearoa' } // secondary language, not native
   */
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
