// Sequelize ek open - source, Node.js - based ORM(object - relational mapping)
// library hai jo aapko MySQL, PostgreSQL, SQLite, Microsoft SQL Server,
// Oracle aur sabhi popular relational databases ke sath interact karne ki anumati deta hai.

// Sequelize ka use aapke data access code ko saral aur maintainable banane ke liye kiya ja sakta hai.
// Yah aapko SQL queries ko manually write karne ki avashyakta ko hatati hai,
// aur aapko aapke data ko model karne ki anumati deti hai jo aapke code ke liye samajhne aur use karne mein aasan hai.

const dbConfig = require('../config/db.config.js')
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.HOST, dbConfig.USER, dbConfig.PASSWORD, dbConfig.DB, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    },
});


let db = {};