const express = require("express");
const helmet = require("helmet");

const server = express();

server.use(express.json());

server.use(helmet());

server.use("*", (req, res) => {
  res.json({
    message: "you have been caught by the catchall.",
  });
});

module.exports = server;