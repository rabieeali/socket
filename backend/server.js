const app = require('express')()
const server = require('http').createServer(app)
const PORT = 5000;
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    }
})

io.on('connection', (socket) => {
    socket.on('chat', (payload) => {
        console.log('what is payload', payload)
        io.emit('chat', payload)
    })
})

// does not work : app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
server.listen(PORT, () => console.log(`server is running on port ${PORT}`))
