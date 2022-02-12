/* eslint-disable no-undef */
const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', async (_req, res) => {
  try {
    const request = await axios.get('http://copafilmes.azurewebsites.net/api/filmes')
    return res.status(200).json(request.data);
  }
  catch (err) {
    res.status(400).send(err);
  }
})

app.post('/', (req, res) => {
  try {
    const {selecionados} = req.body;
    const primeiraRodada = checaVencedor(selecionados).slice(0,4)
    const primeiroFinalista = checaVencedor(primeiraRodada.slice(0,2), 1).slice(0,1)
    const segundoFinalista = checaVencedor(primeiraRodada.slice(2,4), 1).slice(0,1)
    const final = [...primeiroFinalista, ...segundoFinalista]
    res.json(final);
  } catch (error) {
    res.status(400).send(err)
  }
})

app.listen(3002, () => {
  console.log('Aplicação rodando na porta 3002');
});


const checaVencedor = (array) => {
  return array.map((__, index) => (
    array[index].nota > array[array.length - 1 - index].nota ?  array[index] : array[array.length - 1 - index]
  ));
}