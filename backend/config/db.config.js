
require('dotenv').config();
const mysql = require('mysql2');

// MySQL connection details from environment variables
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// Connection establish kare
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');

    // Yaha par aap apne queries ya operations execute kar sakte hain

    // Connection ko close kare, jab aapka kaam ho jaye
    connection.end((err) => {
        if (err) {
            console.error('Error closing MySQL connection:', err);
        }
        console.log('MySQL connection closed');
    });
});

module.exports = connection


// const connection = {
//     HOST: "localhost",
//     USER: "root",
//     PASSWORD: "",
//     DB: "nodejs",
//     dialect: "mysql",
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000,
//     },
// };
// module.exports = connection