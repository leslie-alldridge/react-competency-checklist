const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const server = express();

server.use(cors("*"));

server.use(bodyParser.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "../public")));
server.use("/auth", require("./routes/auth"));

module.exports = server;
