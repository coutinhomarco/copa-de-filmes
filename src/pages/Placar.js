import { useContext } from "react";
import { FilmesContext } from "../context/FilmesContext";

export default function Placar() {
  const { finalistas  } = useContext(FilmesContext)
  return (
    <>
      <header className="App-header">
        <h1>Resultado final</h1>
        <p>Confira o resultado do seu torneio</p>
      </header>
      <main>
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
