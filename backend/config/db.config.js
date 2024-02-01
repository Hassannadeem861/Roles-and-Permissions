
require('dotenv').config();
const mysql = require('mysql');

// MySQL connection details from environment variables
const connection = mysql.createConnection({
    HOST: process.env.DB_HOST || 'localhost',
    USER: process.env.DB_USER || 'root',
    PASSWORD: process.env.DB_PASSWORD || '',
    DB: process.env.DB_DATABASE || 'Hassan_Nadeem',
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
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