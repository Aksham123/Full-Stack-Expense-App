// app.js
const express = require('express');
const bodyParser = require('body-parser');
const expenseRoute = require('./routes/expenseRoute');
const sequelize = require('./config/database');
const Expense = require('./models/expense');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', expenseRoute);

// Sync Database
sequelize.sync({ force: false })
    .then(() => console.log('Database & tables created!'))
    .catch(err => console.log(err));

// Start Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
