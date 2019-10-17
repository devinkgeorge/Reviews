const mongoose = require('mongoose');

const reviewsSchema = new mongoose.Schema({
  review_id: { type: Number, unique: true },
  product_id: Number,
  created: { type: Date, default: Date.now },
  title: String,
  user_id: Number,
  body: String,
  verified: Boolean,
  stars: Number,
  style: String,
  helpfuls: Number
});

const Review = mongoose.model('Review', reviewsSchema);

module.exports = Review;
