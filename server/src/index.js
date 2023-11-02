// Import necessary modules and packages
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from'cors';

// Import a custom router for comments
import { commentRouter } from './routes/router.js';

// Create an Express application
const app = express();
// Enable CORS to allow cross-origin requests
app.use(cors());
// Create an HTTP server using the Express application
const server = http.createServer(app);

// Create a Socket.IO server for real-time communication
const socketServer = new Server(server, {
    cors: {
        origin: "*",
    }
});

// Set up the comment router for handling comment-related routes
commentRouter(socketServer);

// Start the server and listen on port 8080
server.listen(8080, () => {
    console.log(`Streaming service is running on http://localhost:${8080}`);
});
