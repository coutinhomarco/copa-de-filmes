/* eslint-disable no-undef */
const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const retornaFinalistas = require('../../helpers/retornaFinalistas');

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