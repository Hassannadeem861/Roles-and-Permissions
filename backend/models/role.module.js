// Yeh code ek role table create karega jisme id, name columns honge.
// Sequelize models ka use karke: Aap Sequelize models ka use karke apne data ko organize kar sakte hain. 
// Har model ek table ko represent karta hai.
// Sequelize associations ka use 
// karke: Aap Sequelize associations ka use karke different tables ko connect kar sakte hain.
//Sequelize documentation: https://sequelize.org/


module.exports = (sequelize, Sequelize) => {
    const role = sequelize.define('role', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING
        }
    })
    return role
}