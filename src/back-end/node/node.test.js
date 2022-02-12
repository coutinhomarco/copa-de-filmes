/* eslint-disable no-undef */
const {expect} = require('chai');

describe('Testa funcionamento função checaVencedor', () => {
  const {checaVencedor} = require('./index')
  it('checaVencedor é uma função', () => {
    expect(checaVencedor).to.exist()
  })
})