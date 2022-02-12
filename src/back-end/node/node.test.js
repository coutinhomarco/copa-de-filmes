/* eslint-disable no-undef */
const checaVencedor = require('./index')

describe('Testa funcionamento função checaVencedor', () => {
  it('checaVencedor existe', () => {
    expect(checaVencedor).toBeDefined()
  })
  it('checaVencedor é uma função', () => {
    expect(typeof checaVencedor).toEqual('function')
  })
})