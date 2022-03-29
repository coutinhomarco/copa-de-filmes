/* eslint-disable no-undef */
const {Filme} = require('../../models/index');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const retornaFinalistas = require('../../src/helpers/retornaFinalistas');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', async (_req, res) => {
  try {
    const filmes = await Filme.findAll();
    return res.status(200).json(filmes);
  }
  catch (err) {
    res.status(500).json({error: err.message});
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

app.listen(3001, () => console.log('listening on 3001'));