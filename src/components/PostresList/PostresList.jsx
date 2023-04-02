import React, { useState } from "react";
import "./PostresList.css";
import postres from '../../jsonFiles/postres.json'
import PostreCard from "../PostreCard/PostreCard";

function PostresList() {
  const [openModal, setopenModal] = useState(false);

  const handleModal=()=>{
   if (openModal) {
    setopenModal(false)
   }else{
    setopenModal(true)
   }
  }
  const renderedPostres = postres.map((postre, index) => {
    return <PostreCard postre={postre} key={index} handleModal={handleModal} />;
  });

  return (
    <>
    <div className="containerPostres">
      <div className="gridList">
      {renderedPostres}
      </div>
    </div>
    </>
  );
}

export default PostresList;
