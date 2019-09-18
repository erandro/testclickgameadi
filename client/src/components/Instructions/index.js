import React from "react";
import "./style.css";

function Instructions() {
  return (
  <div className="instructions">
  {/* <img alt="throneHere" id="throne" src="/images/throne.png"></img> */}
  
<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
 How to<br></br> Win The Throne
</button>

<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Instructions</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        When you play the game of thrones, you win or die
        <p>Don't loose your head playing this Game of Thrones themed click game! Simply click on an image of the characters without clicking the same one twice!</p>
      </div>
      <div className="modal-footer">
      </div>
    </div>
  </div>
</div>

  
  </div>
  );
}

export default Instructions;
