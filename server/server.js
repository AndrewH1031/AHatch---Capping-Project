const express = require('express');
const path = require('path');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
  user: '',
  host: 'localhost',
  database: 'database',
  password: 'rootroot',
  port: 5432,
});

// Serve static files from the "foxride/public" directory
app.use(express.static(path.join(__dirname, '../foxride/public')));

// Route for the login URL
app.get('/login', function(req, res) {
  res.sendFile('login.html', { root: path.join(__dirname, '../foxride/view') });
});

// Route for the signup URL
app.get('/signup', function(req, res) {
  res.sendFile('signup.html', { root: path.join(__dirname, '../foxride/view') });
});

// Route for the feed URL
app.get('/feed', function(req, res) {
  res.sendFile('feed.html', { root: path.join(__dirname, '../foxride/view') });
});

// Route for the root URL
app.get('/', function(req, res) {
  // Send the "home.html" file from the "foxride/view" directory
  res.sendFile('home.html', { root: path.join(__dirname, '../foxride/view') });
});

// Define the routes
let userRoutes = require('./route/userRoutes');
app.use('/api/user', userRoutes);

let postRoutes = require('./route/postRoutes');
app.use('/api/post', postRoutes);

// Start the server
app.listen(port, function() {
  console.log(`Server is running at http://localhost:${port}`);
});
