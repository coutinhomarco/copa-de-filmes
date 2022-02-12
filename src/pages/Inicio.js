import React, { useContext, useEffect } from "react";
import {FilmesContext} from "../context/FilmesContext";
import Filme from '../components/Filme';
import Carregando from "../components/Carregando";
import {Link} from 'react-router-dom'

export default function Inicio() {

  const { filmes, carregando, setSelecionados, selecionados, setFinalistas } = useContext(FilmesContext)
  useEffect(() => {
    setSelecionados([])
  }, [])

  const gerenciaSelecionados = ({target}) => {
    const novoSelecionado = filmes.find((filme) => filme.id === target.value)
    if (selecionados.find((obj) => obj.id === target.value)) {
      return setSelecionados(selecionados.filter((selecionado) => selecionado.id !== target.value))
    }
    setSelecionados([...selecionados, novoSelecionado])
  }

  const checaBotao = () => selecionados.length === 8 ? false : true;

  const iniciaJogo = () => {
    const selecionadosOrdenados = selecionados.sort((a, b) => a.titulo.localeCompare(b.titulo))
    const metodoRequisicao = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ selecionados: selecionadosOrdenados })
    };
    fetch('http://localhost:3001/', metodoRequisicao)
      .then(response => response.json())
      .then(json => setFinalistas(json));
  }

  return (
    <>
      <header className="App-header">
        <h1>Copa de Filmes</h1>
        <hr />
        <p>Fase de seleção</p>
      </header>
      <main>
        <div className="flex">
          <span>{selecionados.length} de 8 selecionados</span>
          <Link to="/placar">
            <button onClick={iniciaJogo} disabled={checaBotao()}>Iniciar campeonato</button>
          </Link>
        </div>
        <form className="flex" onChange={gerenciaSelecionados}> 
          {
            carregando ? <Carregando /> :           
              filmes.map((filme => (
                <Filme key={filme.id} value={filme.id} titulo={filme.titulo} ano={filme.ano} />)))
          }
        </form>
      </main>
    </>
  );
}
