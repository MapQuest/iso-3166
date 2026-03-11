import type { Country } from '../../types.js'
import { Subdivisions } from '../../subdivisions.js'

export const MNG: Country = {
  country: 'Mongolia',
  e164: 976,
  fips: 'MG',
  alpha2: 'MN',
  alpha3: 'MNG',
  ioc: 'MGL',
  numeric: 496,
  undp: 'MNG',
  localities: new Map([
    ['1', ['Ulaanbaatar', Subdivisions.CAPITAL]],
    ['035', ['Orkhon', Subdivisions.PROVINCE]],
    ['037', ['Darkhan-Uul', Subdivisions.PROVINCE]],
    ['039', ['Khentii', Subdivisions.PROVINCE]],
    ['041', ['Khövsgöl', Subdivisions.PROVINCE]],
    ['043', ['Khovd', Subdivisions.PROVINCE]],
    ['046', ['Uvs', Subdivisions.PROVINCE]],
    ['047', ['Töv', Subdivisions.PROVINCE]],
    ['049', ['Selenge', Subdivisions.PROVINCE]],
    ['051', ['Sükhbaatar', Subdivisions.PROVINCE]],
    ['053', ['Ömnögovi', Subdivisions.PROVINCE]],
    ['055', ['Övörkhangai', Subdivisions.PROVINCE]],
    ['057', ['Zavkhan', Subdivisions.PROVINCE]],
    ['059', ['Dundgovi', Subdivisions.PROVINCE]],
    ['061', ['Dornod', Subdivisions.PROVINCE]],
    ['063', ['Dornogovi', Subdivisions.PROVINCE]],
    ['064', ['Govisümber', Subdivisions.PROVINCE]],
    ['065', ['Govi-Altai', Subdivisions.PROVINCE]],
    ['067', ['Bulgan', Subdivisions.PROVINCE]],
    ['069', ['Bayankhongor', Subdivisions.PROVINCE]],
    ['071', ['Bayan-Ölgii', Subdivisions.PROVINCE]],
    ['073', ['Arkhangai', Subdivisions.PROVINCE]]
  ])
}
