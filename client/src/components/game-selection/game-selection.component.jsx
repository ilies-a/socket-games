import React from "react";
import Game from "../game/game.component";

class GameSelection extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      games: [
        { name:"Game 1", isLaunched:false },
        { name:"Game 2", isLaunched:false },
        { name:"Game 3", isLaunched:false },
      ]
    }
  }

  handleClick = (gameIndex) => {
    const games = {...this.state.games};
    games[gameIndex].isLaunched = true;
    this.setState(games)
  }
  render(){
    return <div>
      {this.state.games.map((game, index) => <div key={index}>
        {game.isLaunched ? <Game name={game.name} gameNumber={index+1}/> : <button onClick={() => this.handleClick(index)}>{game.name}</button>}
      </div>)}
    </div>
  }
}

export default GameSelection;