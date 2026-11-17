import { Subdivisions } from '../subdivisions.js'
import type { Country } from '../types.js'

export const KOR: Country = {
  name: 'Korea, Republic of',
  names: { native: '대한민국', en: 'South Korea' },
  e164: 82,
  fips: 'KS',
  alpha2: 'KR',
  alpha3: 'KOR',
  ioc: 'KOR',
  numeric: 410,
  undp: 'KOR',
  localities: new Map([
    ['11', ['Seoul-teukbyeolsi', Subdivisions.SPECIAL_CITY, { local: 'Seoul' }]],
    ['26', ['Busan-gwangyeoksi', Subdivisions.METROPOLITAN_CITY, { local: 'Busan' }]],
    ['27', ['Daegu-gwangyeoksi', Subdivisions.METROPOLITAN_CITY, { local: 'Daegu' }]],
    ['28', ['Incheon-gwangyeoksi', Subdivisions.METROPOLITAN_CITY, { local: 'Incheon' }]],
    ['29', ['Gwangju-gwangyeoksi', Subdivisions.METROPOLITAN_CITY, { local: 'Gwangju' }]],
    ['30', ['Daejeon-gwangyeoksi', Subdivisions.METROPOLITAN_CITY, { local: 'Daejeon' }]],
    ['31', ['Ulsan-gwangyeoksi', Subdivisions.METROPOLITAN_CITY, { local: 'Ulsan' }]],
    ['41', ['Gyeonggi-do', Subdivisions.PROVINCE, { local: 'Gyeonggi' }]],
    ['42', ['Gangwon-teukbyeoljachido', Subdivisions.SPECIAL_SELF_GOVERNING_PROVINCE, { local: 'Gangwon' }]],
    ['43', ['Chungcheongbuk-do', Subdivisions.PROVINCE, { local: 'Chungbuk', en: 'North Chungcheong' }]],
    ['44', ['Chungcheongnam-do', Subdivisions.PROVINCE, { local: 'Chungnam', en: 'South Chungcheong' }]],
    ['45', ['Jeollabuk-do', Subdivisions.PROVINCE, { local: 'Jeonbuk', en: 'North Jeolla' }]],
    ['46', ['Jeollanam-do', Subdivisions.PROVINCE, { local: 'Jeonnam', en: 'South Jeolla' }]],
    ['47', ['Gyeongsangbuk-do', Subdivisions.PROVINCE, { local: 'Gyeongbuk', en: 'North Gyeongsang' }]],
    ['48', ['Gyeongsangnam-do', Subdivisions.PROVINCE, { local: 'Gyeongnam', en: 'South Gyeongsang' }]],
    ['49', ['Jeju-teukbyeoljachido', Subdivisions.SPECIAL_SELF_GOVERNING_PROVINCE, { local: 'Jeju' }]],
    ['50', ['Sejong', Subdivisions.SPECIAL_SELF_GOVERNING_CITY]],
  ]),
}
