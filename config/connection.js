// Require mysql

const mySQL = require('mysql');

// Set up connection

const connection = mySQL.createConnection({
    host: 'localhost', 
    port: 3306, 
    user: 'root', 
    password: 'Mysql2021',
    database: 'burgers_db'
});

// Initiate MySQL connection

connection.connect((err) => {
    if (err) {
        console.log(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`);
});

// Export module

module.exports = connection; 