/**
 * @mapquest/iso-3166
 *
 * Primary entry point — re-exports all types, constants, and region packs.
 *
 * Business logic (lookup helpers, setup, etc.) will live here
 * alongside the re-exports.
 */

// Types & constants
export type { Country } from '../data/types.js'
export type { SubdivisionType } from '../data/subdivisions.js'
export { Subdivisions } from '../data/subdivisions.js'

// Region packs (re-exported as namespaces for convenience)
export * as africa from '../data/africa/index.js'
export * as americas from '../data/americas/index.js'
export * as apac from '../data/apac/index.js'
export * as asia from '../data/apac/asia/index.js'
export * as oceania from '../data/apac/oceania/index.js'
export * as europe from '../data/europe/index.js'
export * as mena from '../data/mena/index.js'
