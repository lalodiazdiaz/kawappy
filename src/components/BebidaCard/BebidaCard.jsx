import React from 'react'

function BebidaCard(bebida) {
  return (
    <div className="comidaContainer">
    <div>
      <img 
      className="comidaImg"
        src="https://static.onecms.io/wp-content/uploads/sites/43/2022/04/07/193307-easy-mochi-3x2-245.jpg"
        alt=""
      />
    </div>
    <div className="comidaInfo">
      <h1>{bebida.nombre}</h1>
      <p>Precio........{bebida.precio}</p>
      <p>Cantidad...{bebida.precio}</p>
    </div>
  </div>
  )
}

export default BebidaCard