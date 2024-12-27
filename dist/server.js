"use strict";
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const port = 3000;
const chatRoute = require("./routes/chat");
const app = express();
const server = http.createServer(app);
app.use(express.static('public'));
app.use('/api', chatRoute);
server.listen(3000, () => {
    console.log(`server is listing at port ${port}`);
});
const io = new Server(server);
io.on('connection', (s) => {
    s.join("A");
    s.to("A").emit("some event");
});
