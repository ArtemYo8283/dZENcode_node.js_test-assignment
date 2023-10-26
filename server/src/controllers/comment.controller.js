import CommentService from "../services/comment.service.js";

export class CommentController {
    constructor () {
        this.service = new CommentService();
    }

    async selectAll(socket, data) {

    }

    async selectAllHead(socket, data) {

    }
    
    async selectAllNested(socket, data) {

    }
    
    async selectById(socket, data) {

    }

    async selectAllNestedByHeadId(socket, data) {

    }
    
    async create(socket, data) {

    }

    async update(socket, data){

    }

    async deleteById(socket, data) {

    }
}

const commentController = new CommentController();
export default commentController;
