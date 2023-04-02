import React from "react";
import "./Modal.css";

function Modal({ open, handleModal,data }) {
  console.log(data);
  return (
    <div className={open ? "Modal" : "closeModal"}>
      <div className="backModal"></div>
      <div className="frontModal">
        <div className="contImage">
          <img src="https://static.onecms.io/wp-content/uploads/sites/43/2022/04/07/193307-easy-mochi-3x2-245.jpg" />
        </div>
        <div className="modalInfo">
        <h1>{data.nombre}</h1>
        <p>Es un pastel japonés hecho de mochigome, un pequeño grano de arroz glutinoso. </p>
        </div>
        <div className="modalButton">
        <button onClick={handleModal}>Cerrar</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
