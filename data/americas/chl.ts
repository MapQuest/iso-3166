import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const CHL: Country = {
  name: 'Chile',
  e164: 56,
  fips: 'CI',
  alpha2: 'CL',
  alpha3: 'CHL',
  ioc: 'CHI',
  numeric: 152,
  undp: 'CHL',
  localities: new Map([
    ['AI', ['Aisén del General Carlos Ibáñez del Campo', Subdivisions.REGION]],
    ['AN', ['Antofagasta', Subdivisions.REGION]],
    ['AP', ['Arica y Parinacota', Subdivisions.REGION]],
    ['AR', ['Araucanía', Subdivisions.REGION]],
    ['AT', ['Atacama', Subdivisions.REGION]],
    ['BI', ['Biobío', Subdivisions.REGION]],
    ['CO', ['Coquimbo', Subdivisions.REGION]],
    ['LI', ['Libertador General Bernardo O\'Higgins', Subdivisions.REGION]],
    ['LL', ['Los Lagos', Subdivisions.REGION]],
    ['LR', ['Los Ríos', Subdivisions.REGION]],
    ['MA', ['Magallanes', Subdivisions.REGION]],
    ['ML', ['Maule', Subdivisions.REGION]],
    ['NB', ['Ñuble', Subdivisions.REGION]],
    ['RM', ['Región Metropolitana de Santiago', Subdivisions.REGION]],
    ['TA', ['Tarapacá', Subdivisions.REGION]],
    ['VS', ['Valparaíso', Subdivisions.REGION]],
  ]),
}
