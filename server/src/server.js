const https = require("https");
const io = require("socket.io");
const app = require("./app");
const { setSocketsListeners } = require("./sockets/sockets");
const { PORT } = require("./config/server.config");
const { KEY_PEM, CERT_PEM } = require("./config/tls.config");

server = https.createServer(
  {
    key: KEY_PEM,
    cert: CERT_PEM,
  },
  app
);

const socketServer = io(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

server.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}...`);
});

setSocketsListeners(socketServer);
