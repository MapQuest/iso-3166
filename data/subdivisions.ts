/**
 * ISO 3166-2 subdivision type classifications.
 *
 * Enumerates the administrative division categories used across
 * sovereign states and dependent territories in the ISO 3166-2 standard.
 */
export const Subdivisions = {
  /** An atoll administered as a subdivision (e.g. atolls of the Maldives) */
  ADMINISTRATIVE_ATOLL: 'Administrative Atoll',
  /** An administrative precinct (e.g. subdivisions of Wallis and Futuna) */
  ADMINISTRATIVE_PRECINCT: 'Administrative Precinct',
  /** A municipality classified as autonomous (e.g. Phnom Penh in Cambodia) */
  AUTONOMOUS_MUNICIPALITY: 'Autonomous Municipality',
  /** A self-governing region with legislative autonomy (e.g. Åland Islands in Finland) */
  AUTONOMOUS_REGION: 'Autonomous Region',
  /** A municipal subdivision typically used in large cities (e.g. boroughs of New York City) */
  BOROUGH: 'Borough',
  /** A subdivision classified as a capital (e.g. Asunción in Paraguay) */
  CAPITAL: 'Capital',
  /** A city classified as a capital city (e.g. Ulaanbaatar in Mongolia) */
  CAPITAL_CITY: 'Capital City',
  /** A district containing the national capital (e.g. Bogotá in Colombia) */
  CAPITAL_DISTRICT: 'Capital District',
  /** A territory classified as a capital territory (e.g. Honiara in Solomon Islands) */
  CAPITAL_TERRITORY: 'Capital Territory',
  /** A chain of islands administered as a subdivision (e.g. the Ralik chain) */
  CHAIN_OF_ISLANDS: 'Chain (of Islands)',
  /** An incorporated urban area with its own local government (e.g. Busan in South Korea) */
  CITY: 'City',
  /** A constituent country within a larger state (e.g. Aruba in the Netherlands) */
  COUNTRY: 'Country',
  /** A regional administrative division common in the US, UK, and Ireland */
  COUNTY: 'County',
  /** A top-level administrative division used in France, Colombia, and other countries */
  DEPARTMENT: 'Department',
  /** A territory under the jurisdiction of another state but not fully incorporated (e.g. Tokelau) */
  DEPENDENCY: 'Dependency',
  /** A general-purpose administrative subdivision (e.g. districts of Bangladesh) */
  DISTRICT: 'District',
  /** Districts administered directly by the republic (e.g. in Tajikistan) */
  DISTRICTS_UNDER_REPUBLIC_ADMINISTRATION: 'Districts Under Republic Administration',
  /** An administrative unit used in countries like Bangladesh and Pakistan */
  DIVISION: 'Division',
  /** A territory classified as a federal capital territory (e.g. Islamabad in Pakistan) */
  FEDERAL_CAPITAL_TERRITORY: 'Federal Capital Territory',
  /** A dependency classified as federal (e.g. Dependencias Federales in Venezuela) */
  FEDERAL_DEPENDENCY: 'Federal Dependency',
  /** A district classified as federal (e.g. Distrito Federal in Brazil) */
  FEDERAL_DISTRICT: 'Federal District',
  /** A subdivision classified as a federal entity (e.g. Ciudad de México) */
  FEDERAL_ENTITY: 'Federal Entity',
  /** A territory classified as federal (e.g. Kuala Lumpur in Malaysia) */
  FEDERAL_TERRITORY: 'Federal Territory',
  /** A geographic grouping assigned a subdivision code (e.g. Jawa in Indonesia) */
  GEOGRAPHICAL_UNIT: 'Geographical Unit',
  /** ISO category for the island groups of Kiribati */
  GROUP_OF_ISLANDS: 'Group of Islands (20 Inhabited Islands)',
  /** A region classified as indigenous (e.g. Guna Yala in Panama) */
  INDIGENOUS_REGION: 'Indigenous Region',
  /** An island or atoll forming its own administrative unit (e.g. islands of the Maldives) */
  ISLAND: 'Island',
  /** A governing body for a specific island */
  ISLAND_COUNCIL: 'Island Council',
  /** A cluster of islands administered as a single unit (e.g. island groups of Kiribati) */
  ISLAND_GROUP: 'Island Group',
  /** ISO category for the United States Minor Outlying Islands */
  ISLANDS_GROUPS_OF_ISLANDS: 'Islands, Groups of Islands',
  /** A subdivision designated as a kingdom */
  KINGDOM: 'Kingdom',
  /** A federated state in Germany or Austria (e.g. Bayern, Niedersachsen) */
  LAND: 'Land',
  /** An urban administrative district in a metropolitan area (e.g. metropolitan boroughs in the UK) */
  METROPOLITAN: 'Metropolitan District',
  /** A subdivision classified as a metropolitan administration (e.g. Bangkok in Thailand) */
  METROPOLITAN_ADMINISTRATION: 'Metropolitan Administration',
  /** A city classified as metropolitan (e.g. Busan in South Korea) */
  METROPOLITAN_CITY: 'Metropolitan City',
  /** A self-governing local administrative unit (e.g. municipalities in Brazil or Mexico) */
  MUNICIPALITY: 'Municipality',
  /** A remote territory under a state's sovereignty (e.g. US Minor Outlying Islands) */
  OUTLYING_AREA: 'Outlying Area',
  /** ISO category for Gilgit-Baltistan and Azad Jammu and Kashmir */
  PAKISTAN_ADMINISTERED_AREA: 'Pakistan Administered Area',
  /** A church-based administrative division used in some Caribbean nations (e.g. parishes of Jamaica) */
  PARISH: 'Parish',
  /** A top-level administrative division used in Japan */
  PREFECTURE: 'Prefecture',
  /** A major administrative subdivision (e.g. provinces of Canada, China, or Argentina) */
  PROVINCE: 'Province',
  /** A broad administrative area, often grouping smaller divisions (e.g. regions of France or Ghana) */
  REGION: 'Region',
  /** A constituent administrative division designated as a republic within a country */
  REPUBLIC: 'Republic',
  /** A territory with a high degree of autonomy (e.g. Hong Kong, Macau) */
  SPECIAL_ADMINISTRATIVE_REGION: 'Special Administrative Region',
  /** A city classified as a special administrative city (e.g. Phatthaya in Thailand) */
  SPECIAL_ADMINISTRATIVE_CITY: 'Special Administrative City',
  /** A city with special administrative status (e.g. Seoul in South Korea) */
  SPECIAL_CITY: 'Special City',
  /** An island subdivision with a special authority (e.g. Chatham Islands in New Zealand) */
  SPECIAL_ISLAND_AUTHORITY: 'Special Island Authority',
  /** A municipality with special administrative status (e.g. Bonaire) */
  SPECIAL_MUNICIPALITY: 'Special Municipality',
  /** A region classified as special (e.g. Yogyakarta in Indonesia) */
  SPECIAL_REGION: 'Special Region',
  /** A city classified as special self-governing (e.g. Sejong in South Korea) */
  SPECIAL_SELF_GOVERNING_CITY: 'Special Self-Governing City',
  /** A province classified as special self-governing (e.g. Jeju in South Korea) */
  SPECIAL_SELF_GOVERNING_PROVINCE: 'Special Self-Governing Province',
  /** A constituent political entity within a federation (e.g. US states, Australian states) */
  STATE: 'State',
  /** A geographic area under a state's jurisdiction, often with limited self-governance (e.g. Northern Territory in Australia) */
  TERRITORY: 'Territory',
  /** A local governing body at the town level (e.g. town councils of Brunei) */
  TOWN_COUNCIL: 'Town Council',
  /** A territory classified as a union territory (e.g. Puducherry in India) */
  UNION_TERRITORY: 'Union Territory',
  /** A single-tier local authority combining county and district functions (e.g. unitary authorities in England) */
  UNITARY: 'Unitary Authority',
  /** A small rural settlement forming its own administrative unit (e.g. village councils of Brunei) */
  VILLAGE: 'Village',
  /** A subdivision classified as a ward (e.g. Tobago in Trinidad and Tobago) */
  WARD: 'Ward',
  /** A large administrative area typically used in Ethiopia */
  ZONE: 'Zone',
} as const

/** Union of all recognized ISO 3166-2 subdivision type string values */
export type SubdivisionType = typeof Subdivisions[keyof typeof Subdivisions]
