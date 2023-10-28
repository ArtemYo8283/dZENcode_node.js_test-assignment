import CommentService from "../services/comment.service.js";

export class CommentController {
    constructor () {
        this.service = new CommentService();
    }

    async selectAll(socket, data) {
        const result = await this.service.selectAll();
        socket.emit('res-selectAll', { status: 200, data: result});
    }

    async selectAllHead(socket, data) {
        const result = await this.service.selectAllHead();
        socket.emit('res-selectAllHead', { status: 200, data: result});
    }
    
    async selectAllNested(socket, data) {
        const result = await this.service.selectAllNested();
        socket.emit('res-selectAllNested', { status: 200, data: result});
    }
    
    async selectById(socket, data) {
        const result = await this.service.selectById(data.id);
        socket.emit('res-selectById', { status: 200, data: result});
    }

    async selectAllNestedByHeadId(socket, data) {
        const result = await this.service.selectAllNestedByHeadId(data.id);
        socket.emit('res-selectAllNestedByHeadId', { status: 200, data: result});
    }
    
    async create(socket, data) {
        const verifiedData = {            
            user_name: data.user_name,
            email: data.email,
            home_page: data.home_page,
            text: data.text,
            head_id: data.head_id
        };
        const result = await this.service.create(verifiedData);
        socket.emit('res-create', { status: 200, data: result});
    }

    async update(socket, data) {
        const verifiedData = {};
        const fieldsToExtract = ['id', 'user_name', 'email', 'home_page', 'text', 'head_id'];
        for (const field of fieldsToExtract) {
            if (json.hasOwnProperty(field)) {
                verifiedData[field] = json[field];
            }
        }
        const result = await this.service.update(verifiedData.id, verifiedData);
        socket.emit('res-update', { status: 200, data: result});
    }

    async deleteById(socket, data) {
        const result = await this.service.deleteById(data.id);
        socket.emit('res-deleteById', { status: 200, data: result});
    }
}

const commentController = new CommentController();
export default commentController;
