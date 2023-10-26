import express from 'express';
import http from'http';
import { Server } from 'socket.io';
import cors from'cors';

import sequelize from './database/db.connection.js';

const app = express();
app.use(cors());
const server = http.createServer(app);

const socketServer = new Server(server, {
    cors: {
        origin: "*",
    }
});


server.listen(process.env.PORT || 8080, () => {
    console.log(`Streaming service is running on http://localhost:${process.env.PORT || 8080}`);
});
