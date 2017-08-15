import { expect } from 'chai'
import sinon from 'sinon'

import { foo } from '../src/index.js'

describe('test', function() {
  beforeEach(function() {
    this.sandbox = sinon.sandbox.create()
  })

  afterEach(function() {
    this.sandbox.restore()
  })

  it('does the thing', function() {
    this.sandbox.stub(Math, 'floor').returns(10)

    expect(Math.floor(5)).to.equal(10)
    expect(foo('x')).to.equal('xtest')
  })
})
