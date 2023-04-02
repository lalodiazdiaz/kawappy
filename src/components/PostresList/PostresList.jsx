import React from "react";
import "./PostresList.css";
import postres from '../../jsonFiles/postres.json'
import PostreCard from "../PostreCard/PostreCard";

function PostresList() {

  const renderedPostres = postres.map((postre, index) => {
    return <PostreCard postre={postre} key={index} />;
  });

  return (
    <div className="containerPostres">
      <div className="gridList">
      {renderedPostres}
      </div>
    </div>
  );
}

export default PostresList;
