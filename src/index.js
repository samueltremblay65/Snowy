const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const PORT = process.env.PORT || 5000;

const io = new Server(httpServer);

io.on("connect", (socket) => {
    console.log("Socket", socket.id);
});

app.use(express.static("public"));

httpServer.listen(PORT);
