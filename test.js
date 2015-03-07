/* global describe, it */

require('es6-promise').polyfill()

var popsicle = require('popsicle')
var expect = require('chai').expect
var constants = require('./')

describe('popsicle constants', function () {
  it('should replace constants in urls', function () {
    var req = popsicle('http://example.com/{API_KEY}/users.json')
      .use(constants({ API_KEY: 'abc' }))

    expect(req.url).to.equal('http://example.com/abc/users.json')
  })

  it('should replace multiple constants', function () {
    var req = popsicle('http://{FOO}.com/{BAR}')
      .use(constants({ FOO: 'google', BAR: 'search' }))

    expect(req.url).to.equal('http://google.com/search')
  })

  it('should not replace if undefined', function () {
    var url = 'http://example.com/{API_KEY}/users.json'

    var req = popsicle(url)
      .use(constants())

    expect(req.url).to.equal(url)
  })
})
