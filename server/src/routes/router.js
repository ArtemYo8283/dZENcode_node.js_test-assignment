import commentController from "../controllers/comment.controller.js";

export function commentRouter (socketServer) {
    socketServer.on('connection', (socket) => {
        socket.on('start', () => {
        });
        socket.on('selectAll', (data) => {
            commentController.selectAll(socket, data);
        });

        socket.on('selectById', (data) => {
            commentController.selectById(socket, data);
        });

        socket.on('selectAllHead', (data) => {
            commentController.selectAllHead(socket, data);
        });

        socket.on('selectAllNested', (data) => {
            commentController.selectAllNested(socket, data);
        });

        socket.on('selectNestedById', (data) => {
            commentController.selectAllNestedByHeadId(socket, data);
        });

        socket.on('selectFileById', (data) => {
            commentController.selectFileById(socket, data);
        });

        socket.on('create', (data) => {
            commentController.create(socket, data);
        });

        socket.on('update', (data) => {
            commentController.update(socket, data);
        });

        socket.on('deleteById', (data) => {
            commentController.deleteById(socket, data);
        });
    });
};
