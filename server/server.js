// Dependencies
const express = require('express');
// const http = require('http');
const path = require('path');

// Instantation
const app = express();
const port = 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../public')));

// Routes
app.get('/reviews', (req, res) => {
  res.send('Blank reviews GET request working');
});

app.post('/reviews', (req, res) => {
  res.send('Blank reviews POST request working');
});

app.put('/reviews', (req, res) => {
  res.send('Blank reviews PUT request working');
});

// Listen
app.listen(port, () => console.log(`Listening on port ${port}!`));
