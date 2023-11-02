import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from'cors';

import { commentRouter } from './routes/router.js';

const app = express();
app.use(cors());
const server = http.createServer(app);

const socketServer = new Server(server, {
    cors: {
        origin: "*",
    }
});

commentRouter(socketServer);

server.listen(8080, () => {
    console.log(`Streaming service is running on http://localhost:${8080}`);
});
