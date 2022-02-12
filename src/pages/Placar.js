import { useContext } from "react";
import { FilmesContext } from "../context/FilmesContext";

export default function Placar() {
  const { finalistas  } = useContext(FilmesContext)
  return (
    <>
      <header className="App-header">
        <h1>Resultado final</h1>
        <hr />
        <p>Confira o resultado do seu torneio</p>
      </header>
      <main id="colocacao">
        {
          (finalistas.length === 0) && <h2>Você ainda não selecionou os filmes</h2>
        }
        <ol>
          {
            finalistas && finalistas.sort((a,b) => b.nota-a.nota)
              .map((selecionado) => <li key={selecionado.id}>{selecionado.titulo}</li>)
          }
        </ol>
      </main>
    </>
  );
}
