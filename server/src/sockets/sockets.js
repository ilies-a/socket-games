const { setGame1Listeners } = require("./game-1.sockets");
const { setGame2Listeners } = require("./game-2.sockets");
const { setGame3Listeners } = require("./game-3.sockets");

function setSocketsListeners(io) {
  setGame1Listeners(io);
  setGame2Listeners(io);
  setGame3Listeners(io);
}

module.exports = { setSocketsListeners };
