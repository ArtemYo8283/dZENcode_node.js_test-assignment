import Sequelize from "sequelize";
import fs from 'fs';

const config = JSON.parse(fs.readFileSync('src/database/db-config.json', 'utf8'));

const sequelize = new Sequelize(
    config.database,
    config.user,
    config.password,
    {
      host: config.host,
      dialect: 'mysql'
    }
  );

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

export default sequelize;