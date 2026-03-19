/**
 * ISO 3166-2 subdivision type classifications.
 *
 * Enumerates the administrative division categories used across
 * sovereign states and dependent territories in the ISO 3166-2 standard.
 */
export const Subdivisions = {
  /** A self-governing region with legislative autonomy (e.g. Åland Islands in Finland) */
  AUTONOMOUS_REGION: 'Autonomous Region',
  /** A municipal subdivision typically used in large cities (e.g. boroughs of New York City) */
  BOROUGH: 'Borough',
  /** The seat of government or primary administrative city (e.g. Canberra in Australia) */
  CAPITAL: 'Capital City',
  /** An incorporated urban area with its own local government (e.g. Busan in South Korea) */
  CITY: 'City',
  /** A regional administrative division common in the US, UK, and Ireland */
  COUNTY: 'County',
  /** A top-level administrative division used in France, Colombia, and other countries */
  DEPARTMENT: 'Department',
  /** A territory under the jurisdiction of another state but not fully incorporated (e.g. Tokelau) */
  DEPENDENCY: 'Dependency',
  /** A general-purpose administrative subdivision (e.g. districts of Bangladesh) */
  DISTRICT: 'District',
  /** An administrative unit used in countries like Bangladesh and Pakistan */
  DIVISION: 'Division',
  /** An island or atoll forming its own administrative unit (e.g. islands of the Maldives) */
  ISLAND: 'Island',
  /** A governing body for a specific island (e.g. island councils of Bonaire, Sint Eustatius) */
  ISLAND_COUNCIL: 'Island Council',
  /** A cluster of islands administered as a single unit (e.g. island groups of Kiribati) */
  ISLAND_GROUP: 'Island Group',
  /** A monarchical subdivision within a federal state (e.g. the Kingdom within the Netherlands) */
  KINGDOM: 'Kingdom',
  /** A federated state in Germany or Austria (e.g. Bayern, Niedersachsen) */
  LAND: 'Land',
  /** An urban administrative district in a metropolitan area (e.g. metropolitan boroughs in the UK) */
  METROPOLITAN: 'Metropolitan District',
  /** A self-governing local administrative unit (e.g. municipalities in Brazil or Mexico) */
  MUNICIPALITY: 'Municipality',
  /** A remote territory under a state's sovereignty (e.g. US Minor Outlying Islands) */
  OUTLYING_AREA: 'Outlying Area',
  /** A church-based administrative division used in some Caribbean nations (e.g. parishes of Jamaica) */
  PARISH: 'Parish',
  /** A top-level administrative division used in Japan */
  PREFECTURE: 'Prefecture',
  /** A major administrative subdivision (e.g. provinces of Canada, China, or Argentina) */
  PROVINCE: 'Province',
  /** A broad administrative area, often grouping smaller divisions (e.g. regions of France or Ghana) */
  REGION: 'Region',
  /** A territory with a high degree of autonomy (e.g. Hong Kong, Macau) */
  SPECIAL_ADMINISTRATIVE_REGION: 'Special Administrative Region',
  /** A city with special administrative status (e.g. Seoul in South Korea) */
  SPECIAL_CITY: 'Special City',
  /** A constituent political entity within a federation (e.g. US states, Australian states) */
  STATE: 'State',
  /** A geographic area under a state's jurisdiction, often with limited self-governance (e.g. Northern Territory in Australia) */
  TERRITORY: 'Territory',
  /** A local governing body at the town level (e.g. town councils of Brunei) */
  TOWN_COUNCIL: 'Town Council',
  /** A single-tier local authority combining county and district functions (e.g. unitary authorities in England) */
  UNITARY: 'Unitary Authority',
  /** A small rural settlement forming its own administrative unit (e.g. village councils of Brunei) */
  VILLAGE: 'Village',
  /** A large administrative area typically used in Ethiopia */
  ZONE: 'Zone',
} as const

/** Union of all recognized ISO 3166-2 subdivision type string values */
export type SubdivisionType = typeof Subdivisions[keyof typeof Subdivisions]
