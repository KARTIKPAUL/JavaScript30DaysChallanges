const express = require('express');
const http = require('http');
const path = require('path');
const {Server} = require("socket.io")

const app = express();
const server = http.createServer(app);
const io = new Server(server);

//Socket.io
io.on('connection',(socket) => {
    socket.on('userMessage' , (message) => {
        //console.log(`A new User Message ${message}`);
        socket.broadcast.emit('message',message);
    });
})

const PORT = 3000;
app.use(express.static(path.resolve("./public")));
app.get('/',(req,res) => {
    return res.send('/public/index.html')
})
server.listen(PORT,() => {
    console.log(`Server Started At http://localhost${PORT}`);
})