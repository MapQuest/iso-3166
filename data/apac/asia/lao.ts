import { Subdivisions } from '../../subdivisions.js'
import type { Country } from '../../types.js'

export const LAO: Country = {
  name: 'Laos',
  e164: 856,
  fips: 'LA',
  alpha2: 'LA',
  alpha3: 'LAO',
  ioc: 'LAO',
  numeric: 418,
  undp: 'LAO',
  localities: new Map([
    ['AT', ['Attapeu', Subdivisions.PROVINCE]],
    ['BK', ['Bokeo', Subdivisions.PROVINCE]],
    ['BL', ['Bolikhamsai', Subdivisions.PROVINCE]],
    ['CH', ['Champasak', Subdivisions.PROVINCE]],
    ['HO', ['Houaphanh', Subdivisions.PROVINCE]],
    ['KH', ['Khammouane', Subdivisions.PROVINCE]],
    ['LM', ['Luang Namtha', Subdivisions.PROVINCE]],
    ['LP', ['Luang Prabang', Subdivisions.PROVINCE]],
    ['OU', ['Oudomxay', Subdivisions.PROVINCE]],
    ['PH', ['Phongsaly', Subdivisions.PROVINCE]],
    ['SL', ['Salavan', Subdivisions.PROVINCE]],
    ['SV', ['Savannakhet', Subdivisions.PROVINCE]],
    ['VI', ['Vientiane', Subdivisions.PREFECTURE]],
    ['VT', ['Vientiane', Subdivisions.PROVINCE]],
    ['XA', ['Sainyabuli', Subdivisions.PROVINCE]],
    ['XE', ['Sekong', Subdivisions.PROVINCE]],
    ['XI', ['Xiangkhouang', Subdivisions.PROVINCE]],
    ['XS', ['Xaisomboun', Subdivisions.PROVINCE]],
  ]),
}
