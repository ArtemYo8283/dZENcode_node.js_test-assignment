import Comment from "../models/Comment.js";

export default class CommentService {

    async selectAll() {
        try {
            const comments = await Comment.findAll();
            return comments;
        } catch (error) {
            console.error('Error selecting comment:', error);
        }
    }

    async selectAllHead() {
        try {
            const comments = await Comment.findAll({
                where: {
                    head_id: null,
                },
            });
        
            return comments;
        } catch (error) {
            console.error('Error selecting comment:', error);
        }
    }
    
    async selectAllNested() {
        try {
            const comments = await Comment.findAll({
                where: {
                    head_id: {
                        [Op.not]: null,
                    },
                },
            });
            return comments;
        } catch (error) {
            console.error('Error selecting comment:', error);
        }
    }
    
    async selectById(id) {
        try {
            const comment = await Comment.findByPk(id);
            if (comment) {
                return comments;
            } else {
                console.log('A comment with the specified ID was not found.');
            }
        } catch (error) {
            console.error('Error when selecting a comment by ID:', error);
        }
    }

    async selectAllNestedByHeadId(id) {
        try {
            const comments = await Comment.findAll({
                where: {
                    head_id: id,
                },
            });
            return comments;
        } catch (error) {
            console.error('Error selecting comment:', error);
        }
    }
    
    async create(data) {
        try {
            const newComment = await Comment.create({
              user_name: data.user_name,
              email: data.email,
              home_page: data.home_page,
              text: data.text,
              head_id: data.head_id
            });
        
            return newComment;
          } catch (error) {
            console.error('Error creating comment:', error);
          }
    }

    async update(id, newData){
        try {
            const [updatedRowCount] = await Comment.update(newData, {
              where: {
                id: id,
              },
            });
        
            if (updatedRowCount > 0) {
                return `Updated ${updatedRowCount} comments with ID ${id}`;
            } else {
              console.log(`Comment with ID ${id} not found.`);
            }
          } catch (error) {
            console.error('Error updating comment:', error);
          }
    }

    async deleteById(id) {
        try {
            const deletedRowCount = await Comment.destroy({
                where: {
                    id: id,
                },
        });
        if (deletedRowCount > 0) {
            return `Deleted ${deletedRowCount} comments with ID ${id}`;
        } else {
            console.log(`Comment with ID ${id} not found or already deleted.`);
        }
        } catch (error) {
            console.error('Error when deleting a comment by ID:', error);
        }
    }
}