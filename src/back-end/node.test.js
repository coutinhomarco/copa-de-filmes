/* eslint-disable no-undef */
const checaVencedor = require('../helpers/checaVencedor')
const retornaFinalistas = require('../helpers/retornaFinalistas')
const axios = require('axios')
const app = require('./node/index.js')


let server
beforeEach((done) => {
  server = app.listen(3000, (err) => {
    if (err) return done(err)
    done()
  })
  done()
})
afterEach((done) => {
  server.close(done)
})

describe('Testa funcionamento função checaVencedor', () => {
  const notas = [{'nota': 9.5},{'nota': 9}]
  const retornoNotas = [{'nota': 9.5}]

  it('checaVencedor existe', () => {
    expect(checaVencedor).toBeDefined()
  })
  it('checaVencedor é uma função', () => {
    expect(typeof checaVencedor).toEqual('function')
  })
  it('Testa retorno de 2 itens', () => {
    expect(checaVencedor(notas).slice(0,1)).toStrictEqual(retornoNotas)
  })
})

describe('Testa funcionamento retornaFinalistas', () => {
  it('retornaFinalistas existe', () => {
    expect(retornaFinalistas).toBeDefined()
  })
  it('retornaFinalistas é uma função', () =>{
    expect(typeof retornaFinalistas).toEqual('function')
  })
  it('Testa retorno de 8 selecionados', () => {
    expect(retornaFinalistas(selecionados)).toStrictEqual(finalistas)
  })
})

describe('Testa retorno da API',  () => {
  it('Testa se retorno da requisição é definido', async () => {
    const response = await axios('http://localhost:3001')
    expect(response.data).toBeDefined()
  })
  it('Testa se retorno da requisição é o esperado', async () => {
    const response = await axios('http://localhost:3001')
    expect(response.data).toStrictEqual(filmes)
  })
})

const selecionados = [{"id":"tt3606756","titulo":"Os Incríveis 2","ano":2018,"nota":8.5},{"id":"tt4881806","titulo":"Jurassic World: Reino Ameaçado","ano":2018,"nota":6.7},{"id":"tt5164214","titulo":"Oito Mulheres e um Segredo","ano":2018,"nota":6.3},{"id":"tt7784604","titulo":"Hereditário","ano":2018,"nota":7.8},{"id":"tt4154756","titulo":"Vingadores: Guerra Infinita","ano":2018,"nota":8.8},{"id":"tt5463162","titulo":"Deadpool 2","ano":2018,"nota":8.1},{"id":"tt3778644","titulo":"Han Solo: Uma História Star Wars","ano":2018,"nota":7.2},{"id":"tt3501632","titulo":"Thor: Ragnarok","ano":2017,"nota":7.9}]

const finalistas = [{"id":"tt4154756","titulo":"Vingadores: Guerra Infinita","ano":2018,"nota":8.8},{"id":"tt3606756","titulo":"Os Incríveis 2","ano":2018,"nota":8.5}]

const filmes = [{"id":"tt3606756","titulo":"Os Incríveis 2","ano":2018,"nota":8.5},{"id":"tt4881806","titulo":"Jurassic World: Reino Ameaçado","ano":2018,"nota":6.7},{"id":"tt5164214","titulo":"Oito Mulheres e um Segredo","ano":2018,"nota":6.3},{"id":"tt7784604","titulo":"Hereditário","ano":2018,"nota":7.8},{"id":"tt4154756","titulo":"Vingadores: Guerra Infinita","ano":2018,"nota":8.8},{"id":"tt5463162","titulo":"Deadpool 2","ano":2018,"nota":8.1},{"id":"tt3778644","titulo":"Han Solo: Uma História Star Wars","ano":2018,"nota":7.2},{"id":"tt3501632","titulo":"Thor: Ragnarok","ano":2017,"nota":7.9},{"id":"tt2854926","titulo":"Te Peguei!","ano":2018,"nota":7.1},{"id":"tt0317705","titulo":"Os Incríveis","ano":2004,"nota":8.0},{"id":"tt3799232","titulo":"A Barraca do Beijo","ano":2018,"nota":6.4},{"id":"tt1365519","titulo":"Tomb Raider: A Origem","ano":2018,"nota":6.5},{"id":"tt1825683","titulo":"Pantera Negra","ano":2018,"nota":7.5},{"id":"tt5834262","titulo":"Hotel Artemis","ano":2018,"nota":6.3},{"id":"tt7690670","titulo":"Superfly","ano":2018,"nota":5.1},{"id":"tt6499752","titulo":"Upgrade","ano":2018,"nota":7.8}];
