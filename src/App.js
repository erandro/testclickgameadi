import React, { Component } from "react";
import GameCards from "./components/GameCards";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import gameImages from "./gameImages.json";
import Score from "./components/Score";
import Instructions from "./components/Instructions";

class App extends Component {
  
  state = {
    gameImages,
    userScore: 0,
    userTopScore: 0,
    clicked: []

  };

  clickTracker = id => {
    // you need to know if the image was clicked before
    // if was not clicked then score ++ shufle // verify the topscore to see if is the bigest
    // if clicked then you lost and restart
    let clickedCurrent = this.state.clicked
    if (this.state.clicked.includes(id)) {
      //lost
      //userScore needs to reset back to 0
      this.setState({
        userScore: 0,
        clicked: []
      });
      // alert user that that image has already been clicked
      alert("That image has been clicked! Try again");
      //clear array

    }
    else {
      clickedCurrent.push(id);
      // update socre 
      let scoreNew = this.state.userScore + 1
      let newTopScore = scoreNew > this.state.userTopScore ? scoreNew : this.state.userTopScore

      let gameImagesNew = this.state.gameImages.sort(() => Math.random() - 0.5)


      this.setState({
        gameImages: gameImagesNew,
        userScore: scoreNew,
        userTopScore: newTopScore,
        clicked: clickedCurrent
      });
      // logic handle click  ES6

        if(this.state.userScore===11){
          alert("Congratulations, you have won!");
          
          this.setState({
            userScore: 0,
            clicked: []
          })
        }

    }
  };

  render() {

    // call the components
    return (
      <Wrapper>
        <Title>Game  of  Clicks</Title>
        <Score userScore={this.state.userScore}
          userTopScore={this.state.userTopScore}
        />
        <Instructions></Instructions>
        {this.state.gameImages.map(gameImages => (
          <GameCards
            clickTracker={this.clickTracker}
            id={gameImages.id}
            key={gameImages.id}
            image={gameImages.image}

          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
