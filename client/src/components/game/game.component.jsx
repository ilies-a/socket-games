import React from "react";
import io from "socket.io-client"
import "./game.styles.scss";
import { SERVER_URL } from "../../config"

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      roomId: null,
      playerIds: [],
      userPlayerId: null,
      maxPlayers: null
    }
  }

  componentDidMount(){
    console.log("SERVER_URL",SERVER_URL)
    const socket = io(`${SERVER_URL}/game-${this.props.gameNumber}`);

    socket.on("connect", () => {
      socket.emit("ready");
    });

    socket.on("ready", (roomId, playerIds, maxPlayers) => {
      this.setState({userPlayerId: socket.id, roomId:roomId, playerIds: [...playerIds], maxPlayers})
    })
  }

  render(){
    const { maxPlayers, roomId, userPlayerId, playerIds } = this.state;
    return <div>
      <div><h1>{this.props.name}</h1></div>
      <div>(Max number of players: {maxPlayers})</div>
      <table>
        <tbody>
          <tr>
            <td>Room ID</td>
            <td>{roomId}</td>
          </tr>
          <tr>
            <td>Your player ID</td>
            <td>{userPlayerId}</td>
          </tr>
          <tr>
            <td>Players IDs<br/>(connected players)</td>
            <td>{playerIds.map((playerId, index) => <div key={index}>{playerId}</div>)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  }
}

export default Game;