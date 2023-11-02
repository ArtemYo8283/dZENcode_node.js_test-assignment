// Import the CommentService module.
import CommentService from "../services/comment.service.js";
// Import validator functions.
import { idValidator, createValidator, updateValidator } from "../validations/comment.validator.js";

export class CommentController {
    constructor () {
        // Create an instance of the CommentService class.
        this.service = new CommentService();
    }
    // Method to retrieve all comments and emit the result to the client.
    async selectAll(socket, data) {
        const result = await this.service.selectAll();
        socket.emit('res-selectAll', result);
    }
    // Method to retrieve all comments related to a "head" and emit the result to the client.
    async selectAllHead(socket, data) {
        const result = await this.service.selectAllHead();
        socket.emit('res-selectAllHead', result);
    }
    // Method to retrieve all comments in a nested structure and emit the result to the client.
    async selectAllNested(socket, data) {
        const result = await this.service.selectAllNested();
        socket.emit('res-selectAllNested', result);
    }
    // Method to retrieve a comment by its ID and emit the result to the client.
    async selectById(socket, data) {
        // Sending data to validator
        const error = await idValidator(data);
        // Сhecking for data validation success
        if (error == null) {
            const result = await this.service.selectById(data.id);
            socket.emit('res-selectById', result);
        } else {
            socket.emit('res-selectById', error);
        }
    }
    // Method to retrieve all nested comments related to a "head" by its ID and emit the result to the client.
    async selectAllNestedByHeadId(socket, data) {
        // Sending data to validator
        const error = await idValidator(data);
        // Сhecking for data validation success
        if (error == null) {
            const result = await this.service.selectAllNestedByHeadId(data.id);
            socket.emit('res-selectAllNestedByHeadId', result);
        } else {
            socket.emit('res-selectAllNestedByHeadId', error);
        }
    }
    // Method to retrieve a file by its ID and emit the result to the client.
    async selectFileById(socket, data) {
        // Sending data to validator
        const error = await idValidator(data);
        // Сhecking for data validation success
        if (error == null) {
            const result = await this.service.selectFileById(data.id);
            socket.emit('res-selectFileById', result);
        } else {
            socket.emit('res-selectFileById', error);
        }
    }
    // Method to create a new comment and emit the result to the client.
    async create(socket, data) {
        // Sending data to validator
        const error = await createValidator(data);
        // Сhecking for data validation success
        if (error == null) {
            const verifiedData = {            
                user_name: data.user_name,
                email: data.email,
                home_page: data.home_page,
                text: data.text,
                head_id: data.head_id,
                fileData: data.fileData
            };
            const result = await this.service.create(verifiedData);
            socket.emit('res-create', result);
        } else {
            socket.emit('res-create', error);
        }
    }
    // Method to update a comment and emit the result to the client.
    async update(socket, data) {
        // Sending data to validator
        const error = await updateValidator(data);
        // Сhecking for data validation success
        if (error == null) {
            //Getting specifed data to update
            const verifiedData = {};
            const fieldsToExtract = ['id', 'user_name', 'email', 'home_page', 'text', 'head_id'];
            for (const field of fieldsToExtract) {
                if (data.hasOwnProperty(field)) {
                    verifiedData[field] = data[field];
                }
            }
            const result = await this.service.update(verifiedData.id, verifiedData);
            socket.emit('res-update', result);
        } else {
            socket.emit('res-update', error);
        }
    }
    // Method to delete a comment by its ID and emit the result to the client.
    async deleteById(socket, data) {
        // Sending data to validator
        const error = await idValidator(data);
        // Сhecking for data validation success
        if (error == null) {
            const result = await this.service.deleteById(data.id);
            socket.emit('res-deleteById', result);
        } else {
            socket.emit('res-deleteById', error);
        }
    }
}
// Create an instance of the CommentController class.
const commentController = new CommentController();
// Export the CommentController instance for use in other parts of the application.
export default commentController;
