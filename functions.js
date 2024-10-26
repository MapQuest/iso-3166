/* global data, define, codes */
/*
iso3166 API

The layout of data is:

{
  country code: {
    name: country name, ex Sweden, United States ...
    sub: {
      subdivision code: {
        type: subdivision type, ex county, division ...
        name: subdivision name, ex Västra Götaland, Indiana
      }
    }
  }
}
*/

const functions = {
  subdivision: function (country, code) {
    // If `code` is undefined assume that the full code is in `country`
    if (typeof code === 'undefined') {
      // our iso-3166-2 data is in upper case.
      code = country.trim().toUpperCase()

      const parts = code.split('-')

      // A full subdivision code must have exactly two parts.
      if (parts.length !== 2) {
        return {}
      }

      country = parts[0]
      code = parts[1]
    }

    // ISO-3166-1 alpha 3 code?
    if (country.length === 3) {
      country = codes[country]
    }

    let subCode = country + '-' + code

    // This country code does not exist in our data set.
    if (!(country in data)) {
      return null
    }

    // All of a countries subdivisions.
    const subs = data[country].sub

    let record = subs[subCode]

    // If we could not find the subdivision by its code try testing
    // subdivision names.
    if (typeof record === 'undefined') {
      for (const key in subs) {
        if (Object.prototype.hasOwnProperty.call(subs, key) &&
            subs[key].name.toUpperCase() === code.toUpperCase()) {
          record = subs[key]
          subCode = key
          break
        }
      }

      // If we still couldn't find it return empty record.
      if (typeof record === 'undefined') {
        return null
      }
    }

    // Add some useful data.
    record.countryName = data[country].name
    record.countryCode = country
    record.code = subCode
    record.regionCode = subCode.split('-').length === 2
      ? subCode.split('-')[1]
      : ''

    return record
  },

  // Get a country and all its subdivision by its code.
  country: function (code) {
    let record
    code = code.trim().toUpperCase()

    // is the input code in alpha 3?
    if (code.length === 3) {
      code = codes[code]
    }

    if (code in data) {
      record = data[code]
      record.code = code

      return record
    }

    // If we could not find the country by its code try testing
    // country names.
    for (const countryCode in data) {
      if (Object.prototype.hasOwnProperty.call(data, countryCode) &&
          data[countryCode].name.toUpperCase() === code.toUpperCase()) {
        record = data[countryCode]
        record.code = countryCode
        break
      }
    }

    // If we still couldn't find it return empty record.
    if (typeof record === 'undefined') {
      return null
    }

    return record
  },

  // Raw data.
  data,
  codes
}

if (typeof define === 'function' && define.amd) {
  define(function () {
    return functions
  })
} else if (typeof module === 'object' && module !== null) {
  module.exports = functions
} else {
  window.iso3166 = functions
}
