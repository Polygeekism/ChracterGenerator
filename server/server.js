require("dotenv").config();
const express = require("express");
const server = express();
const cors = require("cors");
const port = 3000;
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", (error) => copnsole.error(error));
db.once("open", () => console.log("connected to database"));

server.use(express.json());
server.use(cors());

const router = require("./characters");
server.use("/characters", router);

server.listen(port, () => console.log("Server running on port: ", port));
