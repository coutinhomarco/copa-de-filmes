import { useEffect, useState } from "react";
import PropTypes from "prop-types"
import {FilmesContext} from './FilmesContext';
import {fetchFilmes} from '../helpers/fetchAPI'

// import React from 'react';
export default function FilmesProvider({children}) {
  const [filmes, setFilmes] = useState([])
  
  const [carregando, setCarregando] = useState(true)

  const [selecionados, setSelecionados] = useState([])

  useEffect(async () => {
    const filmesRequeridos = await fetchFilmes(setCarregando)
    setFilmes(filmesRequeridos)
  },[])

  const context_value = {filmes, carregando, setSelecionados, selecionados} 

  return (
    <FilmesContext.Provider value={context_value}>
      {children}
    </FilmesContext.Provider>);
}

FilmesProvider.propTypes = {
  children: PropTypes.any
}
