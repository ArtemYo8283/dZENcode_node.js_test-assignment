import Comment from "../models/Comment";

export default class CommentService {

    async selectAll() {
        try {
            const allComments = await Comment.findAll();
            console.log(allComments);
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
        
            console.log(comments);
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
            console.log(comments);
        } catch (error) {
            console.error('Error selecting comment:', error);
        }
    }
    
    async selectById(id) {
        try {
            const comment = await Comment.findByPk(id);
            if (comment) {
                console.log(comment);
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
            console.log(comments);
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
        
            console.log('New comment created:', newComment);
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
              console.log(`Updated ${updatedRowCount} comments with ID ${id}`);
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
            console.log(`Deleted ${deletedRowCount} comments with ID ${id}`);
        } else {
            console.log(`Comment with ID ${id} not found or already deleted.`);
        }
        } catch (error) {
            console.error('Error when deleting a comment by ID:', error);
        }
    }
}