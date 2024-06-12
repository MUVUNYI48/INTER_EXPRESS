const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Create MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'sakila'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.stack);
        return;
    }
    console.log('Connected to MySQL as id ' + connection.threadId);
});

// Basic route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Route to get all users
app.get('/users', (req, res) => {
    connection.query('SELECT * FROM actor limit 5', (error, results) => {
        if (error) {
            console.error('Error executing query:', error.stack);
            res.status(500).send('Database query error');
            return;
        }
        res.json(results);
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
