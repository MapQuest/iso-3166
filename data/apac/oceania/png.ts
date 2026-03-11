import type { Country } from '../../types.js'
import { Subdivisions } from '../../subdivisions.js'

export const PNG: Country = {
  country: 'Papua New Guinea',
  e164: 675,
  fips: 'PP',
  alpha2: 'PG',
  alpha3: 'PNG',
  ioc: 'PNG',
  numeric: 598,
  undp: 'PNG',
  localities: new Map([
    ['CPK', ['Chimbu', Subdivisions.PROVINCE]],
    ['CPM', ['Central', Subdivisions.PROVINCE]],
    ['EBR', ['East New Britain', Subdivisions.PROVINCE]],
    ['EHG', ['Eastern Highlands', Subdivisions.PROVINCE]],
    ['EPW', ['Enga', Subdivisions.PROVINCE]],
    ['ESW', ['East Sepik', Subdivisions.PROVINCE]],
    ['GPK', ['Gulf', Subdivisions.PROVINCE]],
    ['HLA', ['Hela', Subdivisions.PROVINCE]],
    ['JWK', ['Jiwaka', Subdivisions.PROVINCE]],
    ['MBA', ['Milne Bay', Subdivisions.PROVINCE]],
    ['MPL', ['Morobe', Subdivisions.PROVINCE]],
    ['MPM', ['Madang', Subdivisions.PROVINCE]],
    ['MRL', ['Manus', Subdivisions.PROVINCE]],
    ['NCD', ['National Capital District', Subdivisions.DISTRICT]],
    ['NIK', ['New Ireland', Subdivisions.PROVINCE]],
    ['NPP', ['Northern', Subdivisions.PROVINCE]],
    ['NSB', ['Bougainville', Subdivisions.AUTONOMOUS_REGION]],
    ['SAN', ['Sandaun', Subdivisions.PROVINCE]],
    ['SHM', ['Southern Highlands', Subdivisions.PROVINCE]],
    ['WBK', ['West New Britain', Subdivisions.PROVINCE]],
    ['WHM', ['Western Highlands', Subdivisions.PROVINCE]],
    ['WPD', ['Western', Subdivisions.PROVINCE]]
  ])
}
