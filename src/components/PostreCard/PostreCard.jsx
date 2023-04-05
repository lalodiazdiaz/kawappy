import React, { useState } from "react";
import "./PostreCard.css";
import Modal from "../Modal/Modal";

function PostreCard({ postre, handleModal }) {
  const [openModal, setopenModal] = useState(false);

  const handleClickModal = () => {
    if (openModal) {
      setopenModal(false);
    } else {
      setopenModal(true);
    }
  };

  return (
    <>
      <div className="postreContainer" onClick={handleClickModal}>
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
          <p>Sabores:</p>
          {postre.sabor.map((sabor) => (
            <p>💮 {sabor}</p>
          ))}
        </div>
      </div>
      <Modal open={openModal} handleModal={handleClickModal} data={postre} />
    </>
  );
}

export default PostreCard;
