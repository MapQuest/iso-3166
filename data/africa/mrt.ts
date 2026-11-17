import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const MRT: Country = {
  name: 'Mauritania',
  e164: 222,
  fips: 'MR',
  alpha2: 'MR',
  alpha3: 'MRT',
  ioc: 'MTN',
  numeric: 478,
  subdivisions: new Map([
    ['01', ['Hodh ech Chargui', Subdivisions.REGION]],
    ['02', ['Hodh el Gharbi', Subdivisions.REGION]],
    ['03', ['Assaba', Subdivisions.REGION]],
    ['04', ['Gorgol', Subdivisions.REGION]],
    ['05', ['Brakna', Subdivisions.REGION]],
    ['06', ['Trarza', Subdivisions.REGION]],
    ['07', ['Adrar', Subdivisions.REGION]],
    ['08', ['Dakhlet Nouâdhibou', Subdivisions.REGION]],
    ['09', ['Tagant', Subdivisions.REGION]],
    ['10', ['Guidimaka', Subdivisions.REGION]],
    ['11', ['Tiris Zemmour', Subdivisions.REGION]],
    ['12', ['Inchiri', Subdivisions.REGION]],
    ['13', ['Nouakchott Ouest', Subdivisions.REGION]],
    ['14', ['Nouakchott Nord', Subdivisions.REGION]],
    ['15', ['Nouakchott Sud', Subdivisions.REGION]],
  ]),
}
