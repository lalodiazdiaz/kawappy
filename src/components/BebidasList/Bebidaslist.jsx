import React from 'react'
import './BebidasList.css'
import bebidas from '../../jsonFiles/bebidas.json'
import BebidaCard from '../BebidaCard/BebidaCard';

function Bebidaslist() {
  const renderedComidas = bebidas.map((bebida, index) => {
    return <BebidaCard bebida={bebida} key={index} />;
  });

  return (
<div className="containerPostres">
      <div className="gridList">
      {renderedComidas}
      </div>
    </div>
  )
}

export default Bebidaslist