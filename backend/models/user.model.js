// Yeh code ek user table create karega jisme username, password aur role permissions and columns honge.
// Sequelize models ka use karke: Aap Sequelize models ka use karke apne data ko organize kar sakte hain. 
// Har model ek table ko represent karta hai.
// Sequelize associations ka use 
// karke: Aap Sequelize associations ka use karke different tables ko connect kar sakte hain.
//Sequelize documentation: https://sequelize.org/


module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define('user', {
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        role: {
            type: Sequelize.STRING,
        },
        permissions: {
            type: Sequelize.JSON, // Store permissions as JSON
        },
    })
    return user
}