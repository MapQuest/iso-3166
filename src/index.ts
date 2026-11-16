/**
 * @mapquest/iso-3166
 *
 * Primary entry point — registers all country packs at import time
 * so that `country()` works out of the box with the full dataset.
 *
 * If bundle size is a concern and you only need a subset of countries/regions,
 * import from '@mapquest/iso-3166/core' and register only the packs you need.
 */

import { register } from './core.js'
import * as africa from '../data/africa/index.js'
import * as americas from '../data/americas/index.js'
import * as asia from '../data/asia/index.js'
import * as europe from '../data/europe/index.js'
import * as oceania from '../data/oceania/index.js'

register(africa, americas, asia, europe, oceania)

export type { Country, Locality, LocalizedNames, CountryPack } from './core.js'
export type { SubdivisionType } from './core.js'
export { Subdivisions, country } from './core.js'
