import { useContext } from "react";
import { FilmesContext } from "../context/FilmesContext";

export default function Placar() {
  const {selecionados} = useContext(FilmesContext)
  return (
    <>
      <header className="App-header">
        <h1>Resultado final</h1>
        <p>Confira o resultado do seu torneio</p>
      </header>
      <main>
        <ol>
          {
            selecionados && selecionados.sort((a,b) => b.nota-a.nota)
              .map((selecionado) => <li key={selecionado.id}>{selecionado.titulo}</li>)
          }
        </ol>
      </main>
    </>
  );
}
