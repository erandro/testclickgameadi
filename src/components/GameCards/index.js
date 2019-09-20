import React from "react";
import "./style.css";

function GameCards(props) {
  return (
    <div className="container">
    <div className="row">
      <div className="col-lg-3">
      
        <img onClick={() => props.clickTracker(props.id)} alt={props.name} src={props.image} />
      </div>



      </div>
     </div>
  );
}

export default GameCards;
