import PropTypes from "prop-types"
// import React from 'react';

export default function Filme({titulo, id, ano}) {
  return (
    <>
      {
        (titulo) &&     (<div id="external-div">
          <label htmlFor={id} className="card-filme">
            <input id={id} type="checkbox" name={titulo} value={id}/>
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
  id: PropTypes.string,
  titulo: PropTypes.string.isRequired
}
