// Import the Comment controller
import commentController from "../controllers/comment.controller.js";

// This function defines routes for handling socket events related to comments.
export function commentRouter (socketServer) {
    // Listen for a connection event when a client connects to the server.
    socketServer.on('connection', (socket) => {
        // Handle the 'start' event (You can add functionality here if needed).
        socket.on('start', () => {
        });
        // Handle the 'selectAll' event.
        socket.on('selectAll', (data) => {
            commentController.selectAll(socket, data);
        });
        // Handle the 'selectById' event.
        socket.on('selectById', (data) => {
            commentController.selectById(socket, data);
        });
        // Handle the 'selectAllHead' event.
        socket.on('selectAllHead', (data) => {
            commentController.selectAllHead(socket, data);
        });
        // Handle the 'selectAllNested' event.
        socket.on('selectAllNested', (data) => {
            commentController.selectAllNested(socket, data);
        });
        // Handle the 'selectNestedById' event.
        socket.on('selectNestedById', (data) => {
            commentController.selectAllNestedByHeadId(socket, data);
        });
        // Handle the 'selectFileById' event.
        socket.on('selectFileById', (data) => {
            commentController.selectFileById(socket, data);
        });
        // Handle the 'create' event.
        socket.on('create', (data) => {
            commentController.create(socket, data);
        });
        // Handle the 'update' event.
        socket.on('update', (data) => {
            commentController.update(socket, data);
        });
        // Handle the 'deleteById' event.
        socket.on('deleteById', (data) => {
            commentController.deleteById(socket, data);
        });
    });
};
