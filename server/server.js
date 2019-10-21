// Dependencies
const express = require('express');
// const http = require('http');
const path = require('path');
const db = require('../database/index.js');

// Instantation
const app = express();
const port = 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../public')));

// Routes
app.get('/reviews', (req, res) => {
  db.getReviews(req.query.product_id)
    .then(reviewsForProduct => {
      res.send(reviewsForProduct);
    })
    .catch(err => {
      res.send(err);
    });
});

app.post('/reviews', (req, res) => {
  res.send('Blank reviews POST request working');
});

app.put('/reviews', (req, res) => {
  res.send('Blank reviews PUT request working');
});

// Listen
app.listen(port, () => console.log(`Listening on port ${port}!`));
