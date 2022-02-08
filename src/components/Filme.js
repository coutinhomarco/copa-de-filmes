import PropTypes from "prop-types"
// import React from 'react';

export default function Filme({titulo, id, ano}) {
  return (
    <>
      {
        (titulo) &&     (<div>
          <label htmlFor={titulo} className="card-filme">
            <input type="checkbox" name={titulo} value={id}/>
            <div className="titulo-filme">
              <p>{titulo}</p>
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
  id: PropTypes.string,
  titulo: PropTypes.string.isRequired
}
