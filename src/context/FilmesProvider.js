import { useEffect, useState } from "react";
import React from "react";
import PropTypes from "prop-types"
import {  FilmesContext } from './FilmesContext';
import {  fetchFilmes } from '../helpers/fetchAPI'
import axios from 'axios'

export default function FilmesProvider({children}) {
  const [filmes, setFilmes] = useState([])
  
  const [carregando, setCarregando] = useState(true)

  const [selecionados, setSelecionados] = useState([])

  const [finalistas, setFinalistas] = useState([])

  useEffect(async () => {
    const filmesRequeridos = await fetchFilmes()
    setCarregando(false)
    setFilmes(filmesRequeridos)
    // const metodoRequisicao = {
    //   selecionados: JSON.stringify({ selecionados })
    // };
    const response = await axios.post('http://localhost:3001', {selecionados})
    console.log(response);
  },[])

  const CONTEXT_VALUE = {filmes, carregando, setSelecionados, selecionados, setFinalistas, finalistas} 

  return (
    <FilmesContext.Provider value={CONTEXT_VALUE}>
      {children}
    </FilmesContext.Provider>);
}

FilmesProvider.propTypes = {
  children: PropTypes.node
}
