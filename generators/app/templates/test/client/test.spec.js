const assert = require('chai').assert
require('./lib/app')

describe('app', function () {
  it('loads without problems', function () {
    assert(document.querySelector('body'), true)
  })
})
