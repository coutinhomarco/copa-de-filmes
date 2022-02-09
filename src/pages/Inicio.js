import { useContext } from "react";
import {FilmesContext} from "../context/FilmesContext";
import Filme from '../components/Filme';
import Carregando from "../components/Carregando";
import {Link} from 'react-router-dom'

export default function Inicio() {
  const { filmes, carregando, setSelecionados, selecionados } = useContext(FilmesContext)

  const gerenciaSelecionados = ({target}) => {
    const novoSelecionado = filmes.find((filme) => filme.id === target.value)
    if (selecionados.find((obj) => obj.id === target.value)) {
      return setSelecionados(selecionados.filter((selecionado) => selecionado.id !== target.value))
    }
    setSelecionados([...selecionados, novoSelecionado])
  }

  const checaVencedor = (array) => {
    return array.map((__, index) => (
      array[index].nota > array[array.length - 1 -index].nota ?  array[index] : array[array.length - 1 -index]
    ));
  }

  const checaBotao = () => selecionados.length === 8 ? false : true;
  const iniciaJogo = () => {
    const selecionadosOrdenados = selecionados.sort((a, b) => a.titulo.localeCompare(b.titulo))
    const primeiraRodada = checaVencedor(selecionadosOrdenados).slice(0,4)
    const primeiroFinalista = checaVencedor(primeiraRodada.slice(0,2) ,  1).slice(0,1)
    const segundoFinalista = checaVencedor(primeiraRodada.slice(2,4) ,  1).slice(0,1)
    const final = [...primeiroFinalista, ...segundoFinalista]
    setSelecionados(final)
  }
  return (
    <>
      <header className="App-header">
        <h1>Copa de Filmes</h1>
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
