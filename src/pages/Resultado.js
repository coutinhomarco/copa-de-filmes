import { useContext } from "react";
import { FilmesContext } from "../context/FilmesContext";

export default function Resultado() {
  const {selecionados} = useContext(FilmesContext)
  return (
    <main className="flex">
      <div>
        {
          selecionados && selecionados.sort((a, b) => a.titulo.localeCompare(b.titulo))
            .map((selecionado) => <div className="resultado" key={selecionado.id}>
              <p>{selecionado.titulo}</p>
              <p>{selecionado.nota}</p>
            </div>)
        }
      </div>
    </main>
  );
}
