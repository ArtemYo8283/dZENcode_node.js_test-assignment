// Import the Comment model
import Comment from "../models/Comment.js";
// Import middleware
import uploadFile from "../middleware/uploadFile.middleware.js";
import getFileData from "../middleware/getFileData.middleware.js";

export default class CommentService {

    // Function to retrieve all comments
    async selectAll() {
        try {
            const comments = await Comment.findAll();
            return { status: 200, data: comments };
        } catch (error) {
            return { status: 400, message: `Error selecting comment: ${error}` };
        }
    }

    // Function to retrieve all top-level comments (no parent comment)
    async selectAllHead() {
        try {
            const comments = await Comment.findAll({
                where: {
                    head_id: null,
                },
            });
            return { status: 200, data: comments };
        } catch (error) {
            return { status: 400, message: `Error selecting comment: ${error}` };
        }
    }
    
     // Function to retrieve all nested comments (with a parent comment)
    async selectAllNested() {
        try {
            const comments = await Comment.findAll({
                where: {
                    head_id: {
                        [Op.not]: null,
                    },
                },
            });
            return { status: 200, data: comments };
        } catch (error) {
            return { status: 400, message: `Error selecting comment: ${error}` };
        }
    }
    
    // Function to retrieve a comment by its ID
    async selectById(id) {
        try {
            const comment = await Comment.findByPk(id);
            if (comment) {
                return { status: 200, data: comment};
            } else {
                return { status: 400, message: `A comment with the specified ID was not found.` };
            }
        } catch (error) {
            return { status: 400, message: `Error when selecting a comment by ID: ${error}` };
        }
    }

    // Function to retrieve all nested comments of a specific parent comment
    async selectAllNestedByHeadId(id) {
        try {
            const comments = await Comment.findAll({
                where: {
                    head_id: id,
                },
            });
            return { status: 200, data: comments };
        } catch (error) {
            return { status: 400, message: `Error selecting comment: ${error}` };
        }
    }

    // Function to retrieve a file associated with a comment by its ID
    async selectFileById(id) {
        try {
            const comment = await Comment.findByPk(id);
            if (comment) {
                const result = await getFileData(comment.filename, comment.id);
                if (result == null) {
                    return { status: 400, message: `Error while receiving file` };
                }
                return { status: 200, data: result};
            } else {
                return { status: 400, message: `A comment with the specified ID was not found.` };
            }
        } catch (error) {
            return { status: 400, message: `Error when selecting a comment by ID: ${error}` };
        }
    }

    // Function to create a new comment
    async create(data) {
        try {
            // Checking if exist field "fileData"
            if(data.fileData){
                const { filename } = data.fileData;
                const newComment = await Comment.create({
                    user_name: data.user_name,
                    email: data.email,
                    home_page: data.home_page,
                    text: data.text,
                    head_id: data.head_id,
                    filename: filename
                });
                await uploadFile(data.fileData, newComment.id);
                return { status: 200, data: newComment };
            }
            else {
                const newComment = await Comment.create({
                    user_name: data.user_name,
                    email: data.email,
                    home_page: data.home_page,
                    text: data.text,
                    head_id: data.head_id
                });
                return { status: 200, data: newComment };
            }

        } catch (error) {
            return { status: 400, message: `Error creating comment: ${error}` };
        }
    }

    // Function to update an existing comment by its ID
    async update(id, newData){
        try {
            const [updatedRowCount] = await Comment.update(newData, {
                where: {
                    id: id,
                },
            });
            if (updatedRowCount > 0) {
                return { status: 200, message: `Updated ${updatedRowCount} comments with ID ${id}` };
            } else {
                return { status: 400, message: `Comment with ID ${id} not found.` };
            }
        } catch (error) {
            return { status: 400, message: `Error updating comment: ${error}` };
        }
    }

    // Function to delete a comment by its ID
    async deleteById(id) {
        try {
            const deletedRowCount = await Comment.destroy({
                where: {
                    id: id,
                },
            });
            if (deletedRowCount > 0) {
                return { status: 200, message: `Deleted ${deletedRowCount} comments with ID ${id}` };
            } else {
                return { status: 400, message: `Comment with ID ${id} not found or already deleted.` };
            }
        } catch (error) {
            return { status: 400, message: `Error when deleting a comment by ID: ${error}` };
        }
    }
}