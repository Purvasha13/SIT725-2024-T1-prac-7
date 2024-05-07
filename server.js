const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const cardRoutes = require('./routes/index');

const app = express();
const http = require('http').createServer(app); // Create HTTP server

mongoose.connect('mongodb+srv://purvasha1013:Imp_560062@sit-725.b8fxacb.mongodb.net/');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', cardRoutes);

const io = require('socket.io')(http); 

io.on('connection', (socket) => {
    console.log('a user connected');

    // User added
    socket.emit('hello', 'Hello user, welcome!');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    setInterval(() => {
        socket.emit('number', parseInt(Math.random() * 10));
    }, 1000);

    socket.on('number', (msg) => {
        console.log('Random number: ' + msg);
    });
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => console.log(`Server running on port ${PORT}`));
