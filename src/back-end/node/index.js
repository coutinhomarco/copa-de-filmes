/* eslint-disable no-undef */
const {readFile} = require('fs/promises')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const retornaFinalistas = require('../../helpers/retornaFinalistas');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', async (_req, res) => {
  try {
    const filmes = await readFile('./src/back-end/data/filmes.js', 'utf-8')
    const filmesParseados = JSON.parse(filmes)
    return res.status(200).json(filmesParseados);
  }
  catch (err) {
    res.status(400).json({error: err.message});
  }
});

app.post('/', (req, res) => {
  try {
    const {selecionados} = req.body;
    const final = retornaFinalistas(selecionados)
    res.status(200).json(final);
  } catch (error) {
    res.status(400).json(error)
  }
});

module.exports = app;