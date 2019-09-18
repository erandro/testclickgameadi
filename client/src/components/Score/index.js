import React from "react";
import "./style.css";

function Score(props) {

    return (
        <div>
            <div id="userTopScoreDisplay">
                <h3>Top Score:</h3><h3 className="scoreFont"> {props.userTopScore}</h3>
            </div>

            <div id="userScoreDisplay">
                <h3>Score:</h3> <h3 className="scoreFont"> {props.userScore}</h3>
            </div>
           
        </div>

    );


}

export default Score;

