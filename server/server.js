// Dependencies
const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('../database/index.js');

// Instantation
const app = express();
const port = 3001;

// Middleware
app.use(express.json());
app.use(cors());
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
  db.postReview(req.body.reviewToPost)
    .then(successMessage => {
      res.send(successMessage);
    })
    .catch(err => {
      res.send(err);
    });
});

app.put('/reviews', (req, res) => {
  db.updateReviewHelpfuls(req.body.review_id, req.body.helpfuls)
    .then(successMessage => {
      res.send(successMessage);
    })
    .catch(err => {
      res.send(err);
    });
});

// Listen
app.listen(port, () => console.log(`Listening on port ${port}!`));
