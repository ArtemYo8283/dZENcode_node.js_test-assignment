import { DataTypes } from 'sequelize';
import sequelize from '../database/db.connection.js';

const Comment = sequelize.define('Comment', {
  user_name: DataTypes.STRING,
  email: DataTypes.STRING,
  home_page: DataTypes.STRING,
  text: DataTypes.STRING,
  createdAt : DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  head_id: DataTypes.INTEGER,
  filename: DataTypes.STRING,
});

export default Comment;