// Import the DataTypes module from Sequelize.
import { DataTypes } from 'sequelize';
// Import the Sequelize instance
import sequelize from '../database/db.connection.js';

// Define a "Comment" model using Sequelize. This represents a table in the database.
const Comment = sequelize.define('Comment', {
  	// Define a columns
	user_name: DataTypes.STRING,
	email: DataTypes.STRING,
	home_page: DataTypes.STRING,
	text: DataTypes.STRING,
	createdAt : DataTypes.DATE,
	updatedAt: DataTypes.DATE,
	head_id: DataTypes.INTEGER,
	filename: DataTypes.STRING,
});

// Export the "Comment" model for use in other parts of the application.
export default Comment;