import CommentService from "../services/comment.service.js";
import { idValidator, createValidator, updateValidator } from "../validations/comment.validator.js";

export class CommentController {
    constructor () {
        this.service = new CommentService();
    }

    async selectAll(socket, data) {
        const result = await this.service.selectAll();
        socket.emit('res-selectAll', result);
    }

    async selectAllHead(socket, data) {
        const result = await this.service.selectAllHead();
        socket.emit('res-selectAllHead', result);
    }
    
    async selectAllNested(socket, data) {
        const result = await this.service.selectAllNested();
        socket.emit('res-selectAllNested', result);
    }
    
    async selectById(socket, data) {
        const error = await idValidator(data);
        if (error == null) {
            const result = await this.service.selectById(data.id);
            socket.emit('res-selectById', result);
        } else {
            socket.emit('res-selectById', error);
        }
    }

    async selectAllNestedByHeadId(socket, data) {
        const error = await idValidator(data);
        if (error == null) {
            const result = await this.service.selectAllNestedByHeadId(data.id);
            socket.emit('res-selectAllNestedByHeadId', result);
        } else {
            socket.emit('res-selectAllNestedByHeadId', error);
        }
    }

    async selectFileById(socket, data) {
        const error = await idValidator(data);
        if (error == null) {
            const result = await this.service.selectFileById(data.id);
            socket.emit('res-selectFileById', result);
        } else {
            socket.emit('res-selectFileById', error);
        }
    }
    
    async create(socket, data) {
        const error = await createValidator(data);
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

    async update(socket, data) {
        const error = await updateValidator(data);
        if (error == null) {
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

    async deleteById(socket, data) {
        const error = await idValidator(data);
        if (error == null) {
            const result = await this.service.deleteById(data.id);
            socket.emit('res-deleteById', result);
        } else {
            socket.emit('res-deleteById', error);
        }
    }
}

const commentController = new CommentController();
export default commentController;
