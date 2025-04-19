import Subdivisions from '../../subdivisions'

export default {
  country: 'South Korea',
  e164: 82,
  fips: 'KS',
  alpha2: 'KR',
  alpha3: 'KOR',
  ioc: 'KOR',
  numeric: 410,
  undp: 'KOR',
  localities: new Map([
    ['11', ['Seoul', Subdivisions.CITY]],
    ['26', ['Busan', Subdivisions.CITY]],
    ['27', ['Daegu', Subdivisions.CITY]],
    ['28', ['Incheon', Subdivisions.CITY]],
    ['29', ['Gwangju', Subdivisions.CITY]],
    ['30', ['Daejeon', Subdivisions.CITY]],
    ['31', ['Ulsan', Subdivisions.CITY]],
    ['41', ['Gyeonggi', Subdivisions.PROVINCE]],
    ['42', ['Gangwon', Subdivisions.PROVINCE]],
    ['43', ['North Chungcheong', Subdivisions.PROVINCE]],
    ['44', ['South Chungcheong', Subdivisions.PROVINCE]],
    ['45', ['North Jeolla', Subdivisions.PROVINCE]],
    ['46', ['South Jeolla', Subdivisions.PROVINCE]],
    ['47', ['North Gyeongsang', Subdivisions.PROVINCE]],
    ['48', ['South Gyeongsang', Subdivisions.PROVINCE]],
    ['49', ['Jeju', Subdivisions.PROVINCE]],
    ['50', ['Sejong', Subdivisions.CITY]]
  ])
}
