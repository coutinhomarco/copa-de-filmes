import { useContext } from "react";
import {FilmesContext} from "../context/FilmesContext";
import Filme from '../components/Filme'
// import React from 'react';
export default function Inicio() {
  const { filmes } = useContext(FilmesContext)
  return (
    <>
      <header className="App-header">
        <h1>Copa de Filmes</h1>
        <h2>Fase de seleção</h2>
      </header>
      <main>
        <div className="flex">
          <span>0 de 8 selecionados</span>
          <button>Iniciar campeonato</button>
        </div>
        <form className="flex">
          {
            filmes && filmes.map((filme => (
              <Filme key={filme.id} value={filme.id} titulo={filme.titulo} ano={filme.ano} />)))
          }
        </form>
      </main>
    </>
  );
}
