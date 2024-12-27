const express = require('express')
const http = require('http')
const {Server} = require('socket.io')
const setUpChatSocket = require('./controller/socket_controller')
const port = 3000;

const chatRoute = require("./routes/chat")

const app = express();
const server = http.createServer(app);

app.use('/api', chatRoute)

app.get("/", (req: any, res: { sendFile: (arg0: string) => void; }) => {
    res.sendFile(__dirname + "/public/index.html")
})

server.listen(3000, () => {
    console.log(`server is listing at port ${port}`);
})

const io = new Server(server);
setUpChatSocket(io);

