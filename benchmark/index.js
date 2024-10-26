const { Bench } = require('tinybench')

const iso3166 = require('../iso3166.min')

const bench = new Bench()

bench
  .add('#country(alpha 2)', function () {
    iso3166.country('SE')
  })

  .add('#country(alpha 3)', function () {
    iso3166.country('USA')
  })

  .add('#subdivision(alpha 2, code)', function () {
    iso3166.country('SE', 'O')
  })

  .add('#subdivision(alpha 3, code)', function () {
    iso3166.country('USA', 'IN')
  })

  .add('#subdivision(alpha 2, name)', function () {
    iso3166.country('US', 'Indiana')
  })

  .add('#subdivision(alpha 3, name)', function () {
    iso3166.country('USA', 'Indiana')
  })

  .add('#subdivision(alpha 2-code)', function () {
    iso3166.country('SE-O')
  })

  .add('#subdivision(alpha 3-code)', function () {
    iso3166.country('SWE-O')
  })

  .add('#subdivision(alpha 2-name)', function () {
    iso3166.country('US-Indiana')
  })

  .add('#subdivision(alpha 3-name)', function () {
    iso3166.country('USA-Indiana')
  })

bench.run().then(() => console.table(bench.table()))
