const mongoose = require('mongoose');

const reviewsSchema = new mongoose.Schema({
  review_id: { type: Number, unique: true },
  created: { type: Date, default: Date.now },
  title: String,
  user_id: Number,
  body: String,
  verified: Boolean,
  comments: [{ body: String, date: Date }]
});

const Reviews = mongoose.model('Reviews', reviewsSchema);

module.exports = Reviews;
