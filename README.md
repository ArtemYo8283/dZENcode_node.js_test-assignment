# Instructions for initializing and starting the Node.js server

## MySQL Database Setup

1. Make sure you have MySQL Server installed on your computer.

2. Create a database named dzencode_test_task. Take SQL code from <em> server/db.sql </em>. Substitute your username and password.
   
   ```bash
   mysql -h localhost -u root -p < server/db.sql
3. Сonfigure the database connections in the file <em> server/database/db-config.json </em>. Replace <em>host, user, password</em> with your own values

## Running the Node.js Server

1. Ensure you have Node.js and npm installed on your computer.

2. Go to the <em>server</em> folder

    ```bash
    cd server
3. Install project dependencies by running the following command:

    ```bash
    npm install
4. Start the server with the following command:

    ```bash
    npm run server
5. Your Node.js server will be available at `http://localhost:8080/`

Your Node.js server should now be successfully set up and running, ready for use.