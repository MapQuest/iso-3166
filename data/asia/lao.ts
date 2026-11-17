import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const LAO: Country = {
  name: 'Lao People\'s Democratic Republic',
  names: { native: 'ລາວ', en: 'Laos' },
  e164: 856,
  fips: 'LA',
  alpha2: 'LA',
  alpha3: 'LAO',
  ioc: 'LAO',
  numeric: 418,
  undp: 'LAO',
  localities: new Map([
    ['AT', ['Attapu', Subdivisions.PROVINCE]],
    ['BK', ['Bokèo', Subdivisions.PROVINCE]],
    ['BL', ['Bolikhamxai', Subdivisions.PROVINCE]],
    ['CH', ['Champasak', Subdivisions.PROVINCE]],
    ['HO', ['Houaphan', Subdivisions.PROVINCE]],
    ['KH', ['Khammouan', Subdivisions.PROVINCE]],
    ['LM', ['Louang Namtha', Subdivisions.PROVINCE]],
    ['LP', ['Louangphabang', Subdivisions.PROVINCE]],
    ['OU', ['Oudômxai', Subdivisions.PROVINCE]],
    ['PH', ['Phôngsali', Subdivisions.PROVINCE]],
    ['SL', ['Salavan', Subdivisions.PROVINCE]],
    ['SV', ['Savannakhét', Subdivisions.PROVINCE]],
    ['VI', ['Viangchan', Subdivisions.PROVINCE]],
    ['VT', ['Viangchan', Subdivisions.PREFECTURE]],
    ['XA', ['Xaignabouli', Subdivisions.PROVINCE]],
    ['XE', ['Xékong', Subdivisions.PROVINCE]],
    ['XI', ['Xiangkhouang', Subdivisions.PROVINCE]],
    ['XS', ['Xaisômboun', Subdivisions.PROVINCE]],
  ]),
}
