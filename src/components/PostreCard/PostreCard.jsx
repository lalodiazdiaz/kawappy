import React from "react";
import './PostreCard.css'

function PostreCard({postre}) {
  return (
    <div className="postreContainer">
      <div>
        <img 
        className="postreImg"
          src="https://static.onecms.io/wp-content/uploads/sites/43/2022/04/07/193307-easy-mochi-3x2-245.jpg"
          alt=""
        />
      </div>
      <div className="postreInfo">
        <h1>{postre.nombre}</h1>
        <p>Precio........{postre.precio}</p>
        <p>Cantidad...{postre.precio}</p>
        <p>Sabores:</p>
        {postre.sabor.map((sabor)=>(
          <p>✨ {sabor}</p>
        )
        )}
      </div>
    </div>
  );
}

export default PostreCard;
