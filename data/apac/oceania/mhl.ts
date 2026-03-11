import type { Country } from '../../types.js'
import { Subdivisions } from '../../subdivisions.js'

export const MHL: Country = {
  country: 'Marshall Islands',
  e164: 692,
  fips: 'RM',
  alpha2: 'MH',
  alpha3: 'MHL',
  ioc: 'MHL',
  numeric: 584,
  undp: 'MHL',
  localities: new Map([
    ['L', ['Ralik Chain', Subdivisions.ISLAND_GROUP]],
    ['T', ['Ratak Chain', Subdivisions.ISLAND_GROUP]],
    ['ALK', ['Ailuk', Subdivisions.MUNICIPALITY]],
    ['ALL', ['Ailinglaplap', Subdivisions.MUNICIPALITY]],
    ['ARN', ['Arno', Subdivisions.MUNICIPALITY]],
    ['AUR', ['Aur', Subdivisions.MUNICIPALITY]],
    ['EBO', ['Ebon', Subdivisions.MUNICIPALITY]],
    ['ENI', ['Enewetak', Subdivisions.MUNICIPALITY]],
    ['JAB', ['Jabat', Subdivisions.MUNICIPALITY]],
    ['JAL', ['Jaluit', Subdivisions.MUNICIPALITY]],
    ['KIL', ['Kili', Subdivisions.MUNICIPALITY]],
    ['KWA', ['Kwajalein', Subdivisions.MUNICIPALITY]],
    ['LAE', ['Lae', Subdivisions.MUNICIPALITY]],
    ['LIB', ['Lib', Subdivisions.MUNICIPALITY]],
    ['LIK', ['Likiep', Subdivisions.MUNICIPALITY]],
    ['MAJ', ['Majuro', Subdivisions.MUNICIPALITY]],
    ['MAL', ['Maloelap', Subdivisions.MUNICIPALITY]],
    ['MEJ', ['Mejit', Subdivisions.MUNICIPALITY]],
    ['MIL', ['Mili', Subdivisions.MUNICIPALITY]],
    ['NMK', ['Namdrik', Subdivisions.MUNICIPALITY]],
    ['NMU', ['Namu', Subdivisions.MUNICIPALITY]],
    ['RON', ['Rongelap', Subdivisions.MUNICIPALITY]],
    ['UJA', ['Ujae', Subdivisions.MUNICIPALITY]],
    ['UTI', ['Utirik', Subdivisions.MUNICIPALITY]],
    ['WTH', ['Wotho', Subdivisions.MUNICIPALITY]],
    ['WTJ', ['Wotje', Subdivisions.MUNICIPALITY]]
  ])
}
