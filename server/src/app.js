const path = require("path");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

app.use(helmet());

// For when server and client run concurrently (client is listening on PORT 3000)
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
