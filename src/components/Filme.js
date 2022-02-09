import PropTypes from "prop-types"

export default function Filme({titulo, value, ano}) {
  return (
    <>
      {
        (titulo) &&     (
          <div value="external-div">
            <label htmlFor={value} className="card-filme">
              <input id={value} type="checkbox" name={titulo} value={value}/>
              <div className="titulo-filme">
                <h4>{titulo}</h4>
                <p>{ano}</p>
              </div>
            </label>
          </div>)
      }
    </>
  );
}

Filme.propTypes = {
  ano: PropTypes.number.isRequired,
  value: PropTypes.string,
  titulo: PropTypes.string.isRequired
}
