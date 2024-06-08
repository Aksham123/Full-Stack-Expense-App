// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('expense_db', 'root', 'Vishu@123', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.sync({ force: true }) // This line will create the database and tables if they don't exist
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch(err => {
        console.error('Error creating database & tables:', err);
    });

module.exports = sequelize;

