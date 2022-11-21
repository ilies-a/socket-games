const { v4: uuidv4 } = require("uuid");

function setGame3Listeners(io) {
  const gameNamespace = io.of("/game-3");

  let rooms = {};
  const MAX_PLAYERS = 4;

  gameNamespace.on("connection", (socket) => {
    console.log(`Client ${socket.id} connected on Game 3`);
    socket.on("ready", () => {
      const socketHasNoRoom = Object.keys(socket.rooms).length === 0;
      if (socketHasNoRoom) {
        let roomId;
        ({ rooms, roomId } = getUpdatedRooms(
          socket.id,
          JSON.stringify(rooms),
          MAX_PLAYERS
        ));
        socket.join(roomId);

        gameNamespace
          .in(roomId)
          .emit("ready", roomId, rooms[roomId]["playerIds"], MAX_PLAYERS);
      }
    });

    socket.on("disconnect", (reason) => {
      console.log(`Client ${socket.id} disconnected: ${reason}`);
    });
  });
}

function getUpdatedRooms(playerSocketId, strRooms, maxPlayers) {
  const rooms = JSON.parse(strRooms);

  // If an existing room is not full we add player to it
  for (let roomId in rooms) {
    const room = rooms[roomId];

    if (room["playerIds"].length < maxPlayers) {
      room["playerIds"].push(playerSocketId);
      return { rooms, roomId };
    }
  }

  //If all rooms are full we create a new room
  const roomId = uuidv4();
  rooms[roomId] = { roomId, playerIds: [] };
  rooms[roomId]["playerIds"].push(playerSocketId);
  return { rooms, roomId };
}

module.exports = { setGame3Listeners };
