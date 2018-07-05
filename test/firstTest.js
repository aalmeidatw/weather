import { expect } from 'chai'
import first from '../src/first'
//var first = require('../src/first')

describe('first', () => {
  it('first have be called', () => {
    expect(first).to.have.been.called
  })

})
