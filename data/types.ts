import type { SubdivisionType } from './subdivisions.js'

/** ISO-3166 country data with optional subdivision localities */
export interface Country {
  country: string
  e164: number
  fips?: string
  alpha2: string
  alpha3: string
  ioc?: string
  numeric?: number
  undp: string
  localities?: Map<string, [name: string, type: SubdivisionType]>
}
