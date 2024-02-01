require('dotenv').config();
const secretKey = {
    secret: process.env.JWT_SECRET // Replace with a secure secret key
};

module.exports = secretKey
