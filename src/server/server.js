const http = require('http');
const server = http.createServer((req, res) => {

});

const { Server } = require('socket.io');
const io = new Server(server, {
    cors: {
        origin: ["http://192.168.178.57:3000","http://localhost:3000", "http://172.16.84.116:3000"   ],
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('mode', (mode) => {
        io.emit('mode', mode);
        console.log(mode)
    });

    //add tempeture

    socket.on('temp', (temp) => {
        io.emit('temp', temp);
        console.log(temp)

    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(3001, () => {
    console.log('WebSocket server listening on port 3001');
});