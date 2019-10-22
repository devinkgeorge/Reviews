const mongoose = require('mongoose');
const Review = require('./models/reviews');
// const reviews = require('./data.js');

const db = mongoose.connection;

//  Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('db connected!');
});

const mongoAtlas =
  'mongodb+srv://dkgeorge:AE2PX9NAABSEJ6JU@amishon-reviews-ajtnd.mongodb.net/Amishon?retryWrites=true&w=majority';
mongoose.connect(mongoAtlas, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const getReviews = product => {
  return new Promise((resolve, reject) => {
    Review.find({ product_id: product })
      .then(reviewsForProduct => {
        resolve(reviewsForProduct);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const updateReviewHelpfuls = (reviewId, newHelpfuls) => {
  return new Promise((resolve, reject) => {
    Review.updateOne({ review_id: reviewId }, { helpfuls: newHelpfuls })
      .then(successMessage => {
        resolve(successMessage);
      })
      .catch(error => {
        reject(error);
      });
  });
};

// Review.insertMany(reviews, err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('successfully seeded');
//   }
// });

module.exports = { getReviews, updateReviewHelpfuls };
