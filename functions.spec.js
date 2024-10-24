const iso3166 = require('./iso3166.min')

test('country()', () => {
  expect(iso3166.country('SE'))
    .toStrictEqual(expect.objectContaining({
      code: 'SE',
      name: 'Sweden'
    }))

  expect(iso3166.country('SWE'))
    .toStrictEqual(expect.objectContaining({
      code: 'SE',
      name: 'Sweden'
    }))

  expect(iso3166.country('Sweden'))
    .toStrictEqual(expect.objectContaining({
      code: 'SE',
      name: 'Sweden'
    }))

  expect(iso3166.country('UN')).toBe(null)
  expect(iso3166.country('United Nations')).toBe(null)
})

test('subdivision()', () => {
  expect(iso3166.subdivision('SE-O'))
    .toStrictEqual(expect.objectContaining({
      countryCode: 'SE',
      countryName: 'Sweden',
      code: 'SE-O',
      regionCode: 'O',
      name: 'Västra Götalands län'
    }))

  expect(iso3166.subdivision('SWE-O'))
    .toStrictEqual(expect.objectContaining({
      countryCode: 'SE',
      countryName: 'Sweden',
      code: 'SE-O',
      regionCode: 'O',
      name: 'Västra Götalands län'
    }))

  expect(iso3166.subdivision('SE', 'O'))
    .toStrictEqual(expect.objectContaining({
      countryCode: 'SE',
      countryName: 'Sweden',
      code: 'SE-O',
      regionCode: 'O',
      name: 'Västra Götalands län'
    }))

  expect(iso3166.subdivision('US-IN'))
    .toStrictEqual(expect.objectContaining({
      countryCode: 'US',
      countryName: 'United States',
      code: 'US-IN',
      regionCode: 'IN',
      name: 'Indiana'
    }))

  expect(iso3166.subdivision('US', 'IN'))
    .toStrictEqual(expect.objectContaining({
      countryCode: 'US',
      countryName: 'United States',
      code: 'US-IN',
      regionCode: 'IN',
      name: 'Indiana'
    }))

  expect(iso3166.subdivision('US-Indiana'))
    .toStrictEqual(expect.objectContaining({
      countryCode: 'US',
      countryName: 'United States',
      code: 'US-IN',
      regionCode: 'IN',
      name: 'Indiana'
    }))

  expect(iso3166.subdivision('USA-Indiana'))
    .toStrictEqual(expect.objectContaining({
      countryCode: 'US',
      countryName: 'United States',
      code: 'US-IN',
      regionCode: 'IN',
      name: 'Indiana'
    }))

  expect(iso3166.subdivision('US', 'Indiana'))
    .toStrictEqual(expect.objectContaining({
      countryCode: 'US',
      countryName: 'United States',
      code: 'US-IN',
      regionCode: 'IN',
      name: 'Indiana'
    }))

  expect(iso3166.subdivision('USA', 'Indiana'))
    .toStrictEqual(expect.objectContaining({
      countryCode: 'US',
      countryName: 'United States',
      code: 'US-IN',
      regionCode: 'IN',
      name: 'Indiana'
    }))

  expect(iso3166.subdivision('UN-1')).toBe(null)
  expect(iso3166.subdivision('UN', '1')).toBe(null)
  expect(iso3166.subdivision('UNN-1')).toBe(null)
})

describe('general', () => {
  const { codes, data } = iso3166

  test.each(Object.entries(codes))('%s', (code3, code2) => {
    expect(code2).toHaveLength(2)
    expect(code3).toHaveLength(3)
    expect(data[code2]).toBeDefined()
  })
})
