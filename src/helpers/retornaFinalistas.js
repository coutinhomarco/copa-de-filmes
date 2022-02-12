/* eslint-disable no-undef */
const checaVencedor = require('./checaVencedor');

const retornaFinalistas = (selecionados) => {
  const primeiraRodada = checaVencedor(selecionados).slice(0,4)
  const primeiroFinalista = checaVencedor(primeiraRodada.slice(0,2), 1).slice(0,1)
  const segundoFinalista = checaVencedor(primeiraRodada.slice(2,4), 1).slice(0,1)
  const final = [...primeiroFinalista, ...segundoFinalista]
  return final.sort((a,b) => b.nota-a.nota)
};

module.exports = retornaFinalistas;