import React from 'react'
import './ComidasList.css'
import comidas from '../../jsonFiles/comidas.json'
import Comidacard from '../ComidaCard/Comidacard';

function ComidaList() {
  const renderedComidas = comidas.map((comida, index) => {
    return <Comidacard comida={comida} key={index} />;
  });

  return (
<div className="containerPostres">
      <div className="gridList">
      {renderedComidas}
      </div>
    </div>
  )
}

export default ComidaList