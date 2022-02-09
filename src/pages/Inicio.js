import { useContext } from "react";
import {FilmesContext} from "../context/FilmesContext";
import Filme from '../components/Filme';
import Carregando from "../components/Carregando";
import {Link} from 'react-router-dom'

export default function Inicio() {
  const { filmes, carregando, setSelecionados, selecionados } = useContext(FilmesContext)

  const gerenciaSelecionados = ({target}) => {
    const novoSelecionado = filmes.find((filme) => filme.id === target.value)
    if (selecionados.find((id) => id === target.value)) {
      return setSelecionados(selecionados.filter((selecionado) => selecionado.id !== target.value))
    }
    setSelecionados([...selecionados, novoSelecionado])
  }

  const checaVencedor = (array, max) => {
    return array.map((__, index) => (
      array[index].nota > array[max-index].nota ?  array[index] : array[max-index]
    ));
  }

  const checaBotao = () => selecionados.length === 8 ? false : true;
  const iniciaJogo = () => {
    const selecionadosOrdenados = selecionados.sort((a, b) => a.titulo.localeCompare(b.titulo))
    const primeiraRodada = checaVencedor(selecionadosOrdenados,  7)
    // const primeiroFinalista = checaVencedor(primeiraRodada ,  1)
    console.log(primeiraRodada);
  }
  return (
    <>
      <header className="App-header">
        <h1>Copa de Filmes</h1>
        <h2>Fase de seleção</h2>
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
